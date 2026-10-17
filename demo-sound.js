// Sounds: whoosh, tick, click, spring

(function () {
  "use strict";

  var ctx = null;
  var noiseBuf = null;
  var MASTER = 0.07;

  function createContext() {
    if (ctx) return ctx;
    try {
      var Ctx = window.AudioContext || window.webkitAudioContext;
      if (!Ctx) return null;
      ctx = new Ctx();
      return ctx;
    } catch (_) {
      return null;
    }
  }

  function ensureRunning() {
    var c = createContext();
    if (!c) return Promise.resolve(false);
    if (c.state === "running") return Promise.resolve(true);
    return c.resume().then(function () {
      return c.state === "running";
    }).catch(function () {
      return false;
    });
  }

  function getNoise(c, seconds) {
    if (noiseBuf && noiseBuf.duration >= seconds) return noiseBuf;
    var len = Math.ceil(c.sampleRate * seconds);
    noiseBuf = c.createBuffer(1, len, c.sampleRate);
    var d = noiseBuf.getChannelData(0);
    for (var i = 0; i < len; i++) d[i] = Math.random() * 2 - 1;
    return noiseBuf;
  }

  function playWhoosh(c, t) {
    var src = c.createBufferSource();
    src.buffer = getNoise(c, 0.2);
    var bp = c.createBiquadFilter();
    bp.type = "bandpass";
    bp.Q.value = 1.4;
    bp.frequency.setValueAtTime(720, t);
    bp.frequency.exponentialRampToValueAtTime(140, t + 0.14);
    var g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(MASTER * 0.55, t + 0.012);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.16);
    src.connect(bp);
    bp.connect(g);
    g.connect(c.destination);
    src.start(t);
    src.stop(t + 0.18);
  }

  function playTick(c, t) {
    var ping = c.createOscillator();
    ping.type = "sine";
    ping.frequency.setValueAtTime(3400, t);
    ping.frequency.exponentialRampToValueAtTime(2200, t + 0.018);
    var pg = c.createGain();
    pg.gain.setValueAtTime(0.0001, t);
    pg.gain.linearRampToValueAtTime(MASTER * 0.45, t + 0.001);
    pg.gain.exponentialRampToValueAtTime(0.0001, t + 0.032);

    var thud = c.createOscillator();
    thud.type = "triangle";
    thud.frequency.setValueAtTime(220, t);
    thud.frequency.exponentialRampToValueAtTime(90, t + 0.04);
    var tg = c.createGain();
    tg.gain.setValueAtTime(0.0001, t);
    tg.gain.linearRampToValueAtTime(MASTER * 0.22, t + 0.002);
    tg.gain.exponentialRampToValueAtTime(0.0001, t + 0.05);

    ping.connect(pg);
    pg.connect(c.destination);
    thud.connect(tg);
    tg.connect(c.destination);
    ping.start(t);
    ping.stop(t + 0.04);
    thud.start(t);
    thud.stop(t + 0.06);
  }

  function playClick(c, t) {
    var osc = c.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(1650, t);
    var g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(MASTER * 0.35, t + 0.0008);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.022);
    var lp = c.createBiquadFilter();
    lp.type = "lowpass";
    lp.frequency.value = 4200;
    osc.connect(lp);
    lp.connect(g);
    g.connect(c.destination);
    osc.start(t);
    osc.stop(t + 0.03);
  }

  function playSpring(c, t) {
    var osc = c.createOscillator();
    osc.type = "sine";
    osc.frequency.setValueAtTime(360, t);
    osc.frequency.exponentialRampToValueAtTime(95, t + 0.07);
    osc.frequency.setValueAtTime(210, t + 0.07);
    osc.frequency.exponentialRampToValueAtTime(110, t + 0.11);
    osc.frequency.setValueAtTime(150, t + 0.11);
    osc.frequency.exponentialRampToValueAtTime(85, t + 0.15);

    var g = c.createGain();
    g.gain.setValueAtTime(0.0001, t);
    g.gain.linearRampToValueAtTime(MASTER * 0.5, t + 0.004);
    g.gain.exponentialRampToValueAtTime(MASTER * 0.12, t + 0.06);
    g.gain.exponentialRampToValueAtTime(0.0001, t + 0.17);

    osc.connect(g);
    g.connect(c.destination);
    osc.start(t);
    osc.stop(t + 0.19);
  }

  var handlers = {
    whoosh: playWhoosh,
    tick: playTick,
    click: playClick,
    spring: playSpring,
  };

  window.RCSound = {
    play: function (name) {
      var fn = handlers[name];
      if (!fn) return;
      ensureRunning().then(function (ok) {
        if (!ok) return;
        var c = createContext();
        if (!c) return;
        try {
          fn(c, c.currentTime);
        } catch (_) {}
      }).catch(function () {});
    },
  };
})();
