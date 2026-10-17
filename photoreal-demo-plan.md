---
cursor:
  subagentId: "bc-2aa131d4-b996-574d-b1d5-656e68ba59c1"
---

# From rough demo to “Formula One standard”: the plan

Updated 15 October 2026. A plan only. Nothing in the demo, the GLB files, or Blender was changed.

## The one-screen version

**What this is.** A web demo, for hype. Its job is to show the idea and get people excited. It is not an app, it has no accounts or back end, and it does not need to scale. It has to look stunning on a laptop browser. Running well on a phone is a nice-to-have, not a goal.

**Why it looks cheap today.** The demo has 28 simple shapes, five flat colours, no surface detail, a tiled floor, and every part slides out along one straight line. The photos you love have hundreds of real parts, soft studio light on a seamless backdrop, edges that catch the light, and every screw floating directly above its own hole.

**The answer is a hybrid.**
- The opening film and hero pictures are rendered in Blender (Cycles) on your RTX 3070 Laptop GPU, like a product photographer would. That is where true photo quality comes from.
- The part you touch and turn is live 3D in the browser (Three.js). It uses the same model, the same light and the same camera angle, so the film can dissolve straight into it.

**The look is settled.** A light grey seamless studio, like Oefner’s Jaguar and Mercedes photos (ref-02, 04, 05). Black nylon and silver steel read sharply against grey. A top-down “knolling” tray (ref-01) is the screw map.

**No calipers, no measuring.** Close proportions come from three low-effort sources, used together:
1. Pictures and documents from many places: the FTX manual drawings, retailer photos, teardown frames from forums and YouTube, and your own phone photos.
2. One phone walk-around video of your truck, turned into a rough 3D scan. The scan is a tracing guide, not the final part.
3. Known sizes that fix the scale: the truck’s listed wheelbase (290/295 mm) and tyre (120 × 60 mm), the manual’s 10×5×4 bearing, and M3 screws.

It asks about **30 minutes** of your time, once, and it folds into a repair you would be doing anyway.

**What “close” means.** Close enough to look right and move right. The demo makes no promise of engineering accuracy. What must be right is what the eye checks: screw types and counts, tyre size, wheelbase, part order, and which way each part comes off.

**The default job is a front-left shock swap.** That corner’s model already exists, shocks are the wear item (manual page 11), and a shock has many small parts: caps, seals, spring, collar, ball end, nylock nut. That makes it the best showcase for the screw tray.

**Zero extra cost.** The core stack is free: Blender, Three.js, GSAP, glTF Transform, Poly Haven, RealityScan, and free static hosting. Narration uses your Higgsfield credits, about 1 credit a line. Building uses cheap models, one pass per task, and no Opus.

**Four stages, smallest first.**
1. **Capture and look test.** One shock and one screw, made well, still and live.
2. **Front-left corner and the shock-swap job**, live in the browser.
3. **Hero film, story and narration.**
4. **Polish and ship** to a free fixed link.

Only three reviews are kept, because they decide whether it looks professional: hero lighting and materials, final camera framing, and the UI polish pass.

**No AI-made shape or image goes into a repair step.** AI helps build the model and the page. It does not invent parts.

**Five top recommendations** are listed at the bottom of this page.

---

## How this plan was made

I read the brief, the landscape, the Carnage reference sheet, and the demo. I opened all ten reference images. The live demo loaded at [face-incorporate-thru-selective](https://face-incorporate-thru-selective.trycloudflare.com/how-it-gets-built.html). The older requests-tickets-foto-township link was down when I tested it. I also opened the two GLB files to count parts and materials.

For this update I rechecked the free and cheap 3D-scan tools, Blender Cycles speed on your GPU, Cursor’s per-model prices, and what Higgsfield’s voice tools offer. Where a number below is my own estimate and not a measured result, it says so.

Facts about the current demo, from the files:

| | front-left.glb | front-right.glb |
|---|---|---|
| Parts | 15 | 13 |
| Screws | 4 | 4 |
| Materials | 5 flat colours | 5 flat colours |
| Image textures | 0 | 0 |
| Built-in animation | none | none |

The page uses Three.js 0.170, a generic “room” light, one sun-style light, and a 32° camera lens. The plastic has a clear-coat gloss on it. Every part moves along one fixed offset with the same ease curve.

---

## 1. What the reference images have that the demo lacks

### Part count and detail
- The Oefner photos (ref-02 to ref-05) show **1,000+ parts per car**, down to the smallest screws. Oefner says each model “contained over a thousand components” ([ClassicCars Journal](https://journal.classiccars.com/2014/01/07/artist-explores-birth-destruction-classic-sports-cars/)).
- The RC manual drawings (ref-08 to ref-10) show every screw, nut, E-clip, bearing and pin, each with its own number.
- The demo has 28 parts. That includes 8 screws, all the same shape. The rear corner sheet alone lists caps, seals, E-clips, ball ends, a nylock nut, a bearing, and six screw types ([Carnage corner reference](/cursor/stores/bc-35bc4b46-172a-47d5-b169-168b47154f99/docs/carnage-corner-reference.md)).

### Shape
- Real parts have ribs, fillets (rounded inside corners), knurling (the grip pattern on the shock collar), threads, and moulding seams.
- The demo’s shock tower is a flat triangle. The chassis is an open frame. The arms are slabs.
- **Edges.** In every reference, edges are slightly rounded, so each edge catches a thin line of light. Razor-sharp CG edges look fake. This is the cheapest “expensive look” there is.

### Light
- **Oefner white (ref-02, 04, 05).** One large soft light from above. A seamless paper sweep fades from white to light grey. There are soft contact shadows under the wheels and almost no other shadows.
- **Oefner dark (ref-03).** Black backdrop. Rim lights carve the outline. The floor fades into darkness.
- **Glossy CG (ref-06, ref-07).** Bright, even studio light. Reflections show softbox shapes.
- **Demo.** A tiled floor with grid lines pulls the eye away from the parts. The light is generic, and there is no visible softbox in the reflections. The shadows look the same everywhere.

### Materials
- In the references, metal shows long, smooth highlights. Rubber is matte with tread and sidewall detail. Plastic is satin, not shiny. Chrome mirrors the studio.
- In the demo, black nylon has a clear-coat gloss, which makes it look like a toy. Real nylon RC parts are matte to satin. Steel has no grain or brushing. Tyres have no sidewall detail.

### Camera
- The references use a **long lens** (a narrow view, like a 100 mm photo lens). That makes shapes look solid and undistorted.
- The camera is low, at a three-quarter angle. The subject fills the frame.
- The demo looks down from above, with lots of empty floor around the parts.

### Composition
- **Parts stay on their own assembly line.** A screw hovers directly above the hole it came from. A wheel hangs straight out from its hub. You can see where everything goes back. The manual drawings make this explicit with thin lines from screw to hole.
- **Density.** Big parts sit close to the core. Small screws fly further out. That gives a burst shape with a clear centre.
- **Grouping.** The manual drawings group parts by assembly (shock, hub, arm). A light outline around each group helps the eye.
- **Knolling (ref-01).** Every part lies flat, in rows by type and size, lit evenly from above. That is a parts tray in picture form.

### Motion
- The photos are frozen moments. Real teardown motion has rules.
- A screw **turns** counter-clockwise and rises by one thread pitch per turn. Standard M3 coarse thread is 0.5 mm per turn. Only once the thread is free does it lift away.
- A hinge pin **slides** out along its own axis. An arm then swings free.
- Things happen **in order**, one after another, not all at once.
- In the demo, everything floats out together along straight lines. That is why it reads as “parts do not move believably.”

---

## 2. Live in the browser, or rendered?

### What a browser can do well today
- Physically based materials, which means surfaces respond to light like real ones: metal, satin plastic, rubber.
- Studio lighting from an HDRI. An HDRI is a 360° photo of a real studio, used as the light source. Poly Haven has free CC0 studio and softbox HDRIs ([Poly Haven softbox HDRIs](https://polyhaven.com/hdris/studio/photo-studios/softbox-lamp-setups)). A 1K–2K file is enough for live viewers ([shep.bot guide](https://3d.shep.bot/assets/free-studio-hdris)).
- Soft shadows and ambient occlusion “baked” in Blender. Baking means the shading is calculated once and stored in an image, so the browser does not have to work it out.
- Around 50–150 parts with real screws, keyed motion, labels, tapping, camera moves and sound, on a laptop with a graphics chip.

### What a browser cannot do live
- True light bouncing (global illumination), many soft area lights, high-quality depth of field, and a 1,000-part Oefner explosion at full detail. That is what the Blender film is for.

### Nice-to-have: phones
- Phones are not a target. As a free extra, keep the live model light enough that a recent phone copes: roughly under 100 draw calls and 200k triangles ([xImmersion budget](https://ximmersion.dev/blogs/webgl-on-mobile-performance-budget)). Your laptop’s Intel UHD graphics are a free stand-in for a weak device. If it runs acceptably there, most phones will manage.

### Optional, later: “photo mode”
- [three-gpu-pathtracer](https://github.com/gkjohnson/three-gpu-pathtracer/releases) is a path tracer for Three.js. It simulates light bouncing the way Cycles does and refines the picture when the camera stops. Version 0.0.27 came out on 8 October 2026. It needs WebGPU and standard materials only ([npm notes](https://www.npmjs.com/package/three-gpu-pathtracer)).
- It is not in the four stages. Add it only if everything else is done and you want a desktop bonus.

### What should be pre-rendered in Blender
- The opening 12-second “explode” film.
- One or two hero stills for the page and for sharing.
- A poster frame that shows while the live model loads.
- Oefner shot this kind of image by hand. Each piece was hung on needles and wire, and 2,000+ photos were combined over about two months ([designboom](https://www.designboom.com/art/fabian-oefner-disintegrating-cars-04-26-2016/), [WIRED](https://www.wired.com/2013/12/whoa-these-classic-sports-cars-are-exploded-into-hundreds-of-pieces/)). Blender gets that look from one model.

### Recommendation: the hybrid
1. The page opens on the Blender-rendered film (H.264 and WebM, with a still poster frame).
2. On the last frame, the live 3D model appears **in exactly the same camera, light and pose**. This is a “match cut,” so the viewer does not notice the switch. From there you can touch it.
3. Live lighting copies the Blender studio. The same HDRI and the same backdrop colour are used, and shadows and ambient occlusion are baked from Cycles.

This is what top studios do. Igloo Inc. bakes and pre-computes as much as possible, then ships compressed assets to Three.js.

### What igloo.inc actually uses (checked)
- **Page source, checked.** The site loads a small Svelte shell, then a 1.5 MB 3D bundle (`App3D-*.js`). That bundle has Three.js revision 165 with the `WebGLRenderer` (not WebGPU). It loads Draco-compressed geometry, KTX2 textures, EXR environment maps and three-mesh-bvh (fast picking), and uses GSAP for animation and scroll.
- **The studio’s own write-up confirms it.** Abeto lists Houdini and Blender, Three.js, three-mesh-bvh, Svelte, GSAP, Vite and vanilla JavaScript ([Awwwards case study](https://www.awwwards.com/igloo-inc-case-study.html)). Credits: Abeto with Bureaux ([Three.js forum](https://discourse.threejs.org/t/landing-site-igloo-inc/67249)).
- **The lesson.** Their “wow” is not an exotic engine. It is art direction, custom tools and heavy compression on ordinary WebGL Three.js. You can follow the same path, for free.

### The browser options, trimmed to what fits a free demo

| Option | Status, October 2026 | Fit for this demo |
|---|---|---|
| **Three.js** | r186 is current. `WebGPURenderer` falls back to WebGL 2 by itself, but the manual still calls it experimental ([manual](https://threejs.org/manual/en/webgpurenderer.html)). | **Use it.** The demo already runs on it. Upgrade from 0.170. Stay on `WebGLRenderer`, like Igloo. |
| **GSAP** | Free, including all plugins and commercial use, since April 2025 ([GSAP license](https://gsap.com/community/standard-license/)). | **Use it** for timelines and camera moves. |
| **Vite** | Free build tool. | **Use it** to bundle the page. |
| **glTF Transform** | Free command-line compressor. | **Use it** to shrink the model. |
| **React Three Fiber + drei** | R3F 9.7, drei 10.7.9. | Not needed. The demo is one page. |
| **Babylon.js, PlayCanvas** | Both free engines and both good. | Switching engines buys nothing here. |
| **Theatre.js** | The public repo has no releases. Work moved to a private repo ([GitHub](https://github.com/theatre-js/theatre/)). | Avoid. |
| **Spline, Needle Engine** | Both need a paid plan for code export or commercial use ([Spline](https://spline.design/pricing), [Needle](https://needle.tools/pricing/)). | Skip. It breaks the zero-budget rule. |
| **Gaussian splats (Spark 2.3.1)** | Renders splats inside Three.js ([npm](https://www.npmjs.com/package/@sparkjsdev/spark)). | A splat cannot come apart into parts. Skip. |

---

## 3. The look: grey seamless studio (confirmed)

- **References:** ref-02, ref-04, ref-05.
- **Backdrop:** a curved paper sweep, from near-white at the top to light warm grey at the floor. No grid and no tiles.
- **Light:** one large softbox above and slightly in front, plus a thin rim light behind for edge separation. Soft contact shadows under each part that touches the ground.
- **Camera:** low three-quarter view, long lens (about 18–22° field of view live, 85–135 mm equivalent in Blender). Light depth of field in stills and the film only.
- **Materials:** satin black nylon, bright zinc screws, brushed steel shafts, matte rubber, and blue anodised aluminium for the upgrade part.
- **Why it wins:** the Carnage is mostly black plastic with silver metal. Those read crisply on grey, like the black Jaguar in ref-04. Your current “white bench” failed because of the tiled floor, the generic light and the glossy plastic, not because it was light.
- **Knolling tray (ref-01).** Inside the same grey studio, a top-down tray lays out every screw and part in rows. As each screw comes out, it flies to a labelled slot in order. On rebuild, the tray empties in reverse.
- **Dark studio (ref-03).** Not used. If you want one dramatic poster later, it is a ten-minute re-light in Blender, but it is not part of any stage.

---

## 4. The pipeline, step by step

### Step 1. Gather what the model is built from, with no measuring

**1a. Gather pictures and documents from many places.** An agent on rc-companion does the collecting and sorting. You do nothing here.
- **Manual drawings.** FTX’s exploded views (printed pages 22–24) and spare-parts photos (pages 25–31) give every part name, number and screw callout ([manual PDF](https://www.cmldistribution.co.uk/product/FTX5539/files/FTX%20Carnage%202.0%20BL%20-%20Manual.pdf)). The rear-corner sheet already exists. The front-left corner needs the same treatment from the front column of page 23.
- **Retailer and spare-part photos.** Shops usually show each part square-on against white. These are the best flat views to trace from. They show real proportions and are easy to scale against a screw or the part beside them.
- **Teardown frames.** Forum posts and YouTube shock rebuilds show the order things come apart and how parts sit inside the shock. An agent can pull frames with `ffmpeg`. These settle questions about assembly order, not exact shape.
- **Your phone photos.** See 1c.
- **How these are used.** As private tracing references only. Nothing from them is shown in the demo (see Risks).

**1b. Fix the scale with sizes that are already known.** Three independent anchors let the model agree with the real truck without a ruler.

| Anchor | Value | Source |
|---|---|---|
| Tyre | 120 mm diameter × 60 mm wide | Retailer spec lists ([FTX Carnage 2.0 listing](https://ftx-rc.com/ftx-carnage-2-brushless-truck-4wd-rtr-with-lipo-battery-and-charger)) |
| Wheelbase | 290/295 mm (it is adjustable) | Same listing. Use 292.5 mm and expect about ±1% |
| Whole truck | 415 long × 328 wide × 156 high mm, body on | Same listing. A cross-check only. It is not used for single parts |
| Bearing | 10 × 5 × 4 mm | Printed in the manual |
| Screws | M3 (3 mm thread), lengths from callouts such as FAST118 = cap head M3×18 | Carnage corner reference |

If the three anchors disagree by more than about 2%, trust the tyre and the wheelbase.

**1c. Capture once, about 30 minutes of your time, no tools.**
1. **Walk-around video, 2–3 minutes.** Put the truck on a plain floor. Scatter a few sheets of newspaper or printed pages around it. Black plastic has few features, and the print gives the software something to lock onto. Add two sheets of A4 paper and a bank card in frame for extra scale. Use soft, even light: a bright overcast day or a well-lit room, and no flash. Orbit slowly at three heights, from knee level to leaning over the top. Lock focus and exposure by pressing and holding on the screen, if your phone allows it. 4K at 30 frames per second is plenty.
2. **Front-left corner close-up, 1 minute of video, plus 30 photos.** The same lighting, moving slowly around the corner.
3. **While you do the shock swap.** Film the swap, about 2 minutes. Lay the old shock’s parts on a sheet of A4 paper and take about 10 photos, then do the same with the new parts. If you do not have a swap coming up, skip this, and the retailer photos in 1a cover the shock.
4. **Upload.** Put everything in one folder on rc-companion. About 5 minutes.

**1d. Turn the walk-around into a rough 3D scan** (see the options table below). An agent runs it on your PC overnight. You do nothing.

**1e. Output.** One parts sheet. For each part: FTX number, name, source images, which screws hold it, and which step removes it. The manual-reading model fills it in. **You spot-check 10 rows** against the manual page, about 10 minutes.

#### Free and cheap ways to get close proportions: what each really gives

“How close” is my estimate. Nothing here was run on your truck. The two things that limit every option are that **most of the Carnage is black matte plastic**, which gives scanners little to lock onto, and that **shiny steel parts (shafts, pins, screws) will not scan at all.** So a scan gives overall proportions and silhouettes, never clean parts.

| Option | Cost and needs | What it gives | How close (estimate) | Blender cleanup still needed | Your time |
|---|---|---|---|---|---|
| **RealityScan 2.2** (Epic, Windows desktop) | Free for individuals and businesses under $1M revenue ([licence](https://www.realityscan.com/license)). Needs the Epic Games Launcher, and an NVIDIA or AMD GPU, so your RTX 3070 works. Imports video frames and exports GLB, OBJ and FBX ([export](https://rshelp.capturingreality.com/en-US/tools/export.htm)). Has a documented command line, so an agent can run it ([commands](https://rshelp.capturingreality.com/en-US/appbasics/allcommands.htm)). | The best free desktop mesh and texture from a walk-around. Chassis, tyres, tower and arm silhouettes. Black plastic comes out lumpy, with holes in recesses. | Overall size within about 1–3% once scaled to the tyre and wheelbase. Hole positions and thin ribs are not reliable, perhaps ±3–5 mm. | Fix scale and orientation, delete the floor, then **model every part fresh over the scan** as an underlay. Nothing is used directly. | The capture (30 minutes, above). Processing runs unattended, my guess is tens of minutes to a couple of hours. |
| **Meshroom 2025.1.0** (open source) | Free. Full quality needs an NVIDIA CUDA GPU, which you have. Without one it only makes a draft mesh ([release](https://github.com/alicevision/Meshroom/releases/tag/v2025.1.0)). It has turntable and object-segmentation pipelines. A nightly build exists. | Similar to RealityScan, more fiddly, more control. Experimental Gaussian-splat and depth plug-ins sit in MeshroomHub. | About the same as RealityScan. | The same. | The same capture. Slower to process. |
| **COLMAP 4.2.1** (open source, BSD) | Free. A command-line tool with a video mode, `automatic_reconstructor --data_type VIDEO`. GLOMAP is now built in. Recently added mesh texturing ([changelog](https://colmap.github.io/changelog.html)). The full dense mode wants a CUDA build. | The most scriptable and the least polished out of the box. It is the pose engine behind splat tools. | Camera poses are good. Meshes are rougher than RealityScan. | The same, plus more tidying. | The same capture. An agent runs everything. |
| **KIRI Engine, free tier** (phone app) | Free. Photo Scan takes up to 150 photos per scan, with unlimited free export including GLB ([pricing](https://www.kiriengine.app/pricing)). It processes in the cloud. **Featureless Object Scan**, the mode built for shiny or low-texture things like black plastic, is **Pro only.** | A zero-PC fallback if RealityScan fails to align. 150 photos is enough for the corner, and tight for the whole truck. | Similar to the others on a good day. Black plastic is the weak spot. | The same. | Upload from the phone. No PC step. |
| **Scaniverse** (phone app) | Free, on-device processing, unlimited, makes splats ([comparison](https://dev.scaniverse.com/news/creating-splats-which-app-to-choose)). | A quick test capture, to see whether your lighting works before the real one. | Rough. | The same. | A few minutes. |
| **Gaussian splats** (Scaniverse, or nerfstudio Splatfacto, which uses about 6 GB on the GPU and so fits your 8 GB card) | Free ([Splatfacto](https://docs.nerf.studio/nerfology/methods/splat.html)). Viewed with SuperSplat or Spark. | A photoreal look, but **no real surface and no separate parts.** Splatfacto cannot export a mesh. Luma is splat-only and no longer actively updated ([KIRI roundup](https://www.kiriengine.app/blog/Best_Free_3D_Scanner_Apps_2026)). | Looks right. Cannot be measured. | Cannot become parts. | Not needed. |

**Recommendation.** One capture, one tool: **RealityScan on your PC.** It is the best free option, it uses your GPU, and an agent can script it. If it fails to align the black plastic, fall back to **KIRI Engine’s free tier** from your phone. Skip splats, Meshroom and COLMAP unless both fail.

**Why the scan alone is not enough.** The scan sets overall proportion and where things sit relative to each other. The **manual drawings and retailer photos** supply the part shapes, and **standard M3 screws** supply the hardware. Every part is rebuilt cleanly in Blender over all three.

**The no-ruler accuracy check.** For each main part, an agent renders the model from the same angle as one of your or a retailer’s photos, then lays the two over each other at 50% blend. You glance at the overlay. If an outline is off by more than a few millimetres’ worth of picture, the part goes back. About 5 minutes per group of parts, and no instruments.

### Step 2. Blender modelling
- **Version.** Blender 5.2 LTS. You have 5.2.1. Update to 5.2.2, which is supported until July 2028 ([Blender 5.2](https://www.blender.org/releases/5-2/)). Stay off 5.3 until it is released on 10 November.
- **Scale.** Model in millimetres. Import the scan, scale it so the tyre is 120 mm across, then check the wheelbase against 290/295. Put each part’s pivot (rotation point) on its screw or pin axis, so motion is natural later.
- **Trace, do not scan-and-clean.** Put the scan, the manual drawing and the retailer photos in as reference images or underlays, and build each part by hand-modelling over them.
- **Hard-surface method.** Use a Bevel modifier (small rounded edges) and a Weighted Normal modifier (clean shading on flat faces). Add real ribs and fillets.
- **Screws.** Use the free [BoltFactory](https://extensions.blender.org/add-ons/boltfactory/) extension. It makes real-size bolts and nuts with true thread pitch and hex sockets. Make the actual types from the sheet: button-head M3×10, flat-head (countersunk) M3×8/10/12/14/36, cap-head M3×18, and the M3 nylock nut. Check pitch, since the add-on warns its presets need verifying.
- **Naming.** Name each object by FTX number and side, for example `FTX6208_shock_body_FL`. Store the assembly axis, screw pitch and step number as custom properties. They travel into the web file as “extras”.
- **Driver.** Your Blender MCP (now packaged as `mcp-for-blender` v2.1.9) lets an AI write Blender Python and look at viewport renders to check its own work ([README](https://github.com/ahujasid/blender-mcp/blob/main/README.md), [PyPI](https://pypi.org/project/mcp-for-blender/)). It can run any code, so **save before every AI session**, as its own docs warn.
- **Mirror the right side.** The front-right corner is the front-left, mirrored.
- **Checks.** Automatic, no model needed: a script confirms tyre = 120 mm, wheelbase within 2%, and part names match the parts sheet. Then your overlay glance (Step 1).

### Step 3. Materials and surface
- **Shader.** Principled BSDF, Blender’s standard realistic material.
- **Black nylon:** roughness about 0.45–0.6, a very faint noise bump for the moulded texture, no clear coat.
- **Steel shafts and pins:** metallic, slightly anisotropic, meaning highlights stretch along the length like brushed metal.
- **Screws:** bright zinc or black oxide, matching what is on your truck.
- **Tyres:** rubber roughness 0.8+, real tread, sidewall lettering as a normal map (a texture that fakes small bumps).
- **Upgrade aluminium:** blue anodised satin. FTX sells aluminium shocks, arms, hubs and towers as option parts ([Optional Extras PDF](https://www.cmldistribution.co.uk/product/FTX5537B/files/Carnage%202.0%20Optional%20Extras.pdf)).
- **Textures.** Free CC0 textures and HDRIs from Poly Haven, pulled in by the Blender MCP. No account or key is needed ([Poly Haven integration](https://www.mcp-for-blender.com/docs/integrations/poly-haven)).
- **Edge highlights.** Cycles’ Bevel shader node fakes rounded edges in renders. It is slow, so use it for stills and baking only ([manual](https://docs.blender.org/manual/en/dev/render/shader_nodes/input/bevel.html)).
- **Bake for the web.** Bake ambient occlusion (soft contact darkening) and a little edge wear from Cycles into textures. Live 3D then looks closer to the film.

### Step 4. Choreography: how parts move
- **Use keyed motion, not a physics engine.** A physics engine (like [Rapier](https://threejs.org/manual/pages/physics.html)) simulates gravity and collisions. A teardown is a precise, repeatable sequence, so keyframes are better ([AETumi exploded-view guide](https://aetumi.app/news/exploded-view-product-animation/)).
- **Screw rule:** rotate counter-clockwise for the number of turns its length needs, rising 0.5 mm per turn. Then lift straight up along the axis about 10–15 mm. Then glide to its tray slot.
- **Pin rule:** slide out along its own axis. Then the arm swings or lifts.
- **Order rule:** one action at a time. A small pause between actions. Slow in and slow out.
- **Two ways to make it:**
  - **Web viewer:** code generates screw and pin motion from the stored axis, pitch and length. It stays exact and the file stays small.
  - **Hero film:** keyed by hand in Blender for perfect timing and camera moves.

### Step 5. Export and compression
- **Export:** glTF 2.0 / GLB from Blender’s built-in exporter. Keep extras, and keep one node per part.
- **Compress:** [glTF Transform](https://www.npmjs.com/package/@gltf-transform/cli) 4.5.1. Run `gltf-transform optimize` with Meshopt geometry compression and KTX2 textures. Cap textures at 2048 px. Do **not** merge parts that must move separately.
- **Target:** under about 10 MB for the corner on first load. As a nice-to-have, stay inside the phone budget in section 2.

### Step 6. The web viewer
- **Stack:** Three.js (upgrade to r186), built with Vite, GSAP timelines, and three-mesh-bvh for fast tap-picking. This is the same family of tools as Igloo.
- **Studio:** Poly Haven softbox HDRI for light, a curved backdrop mesh, baked contact shadows, AgX or Neutral tone mapping, and a pixel ratio capped at 2.
- **Camera:** about 20° field of view. A preset shot per step. The camera moves smoothly to the next part.
- **Labels:** keep the clean pills. Add manual-style thin lines from each screw to its hole while exploded.
- **Voice:** Higgsfield narration, pre-generated as audio files (see section 5).
- **Sound:** keep the demo’s own synthesised clicks and clinks. Higgsfield’s voice tool cannot make music or sound effects.
- **Hosting, free:** quick Cloudflare tunnels die when the machine restarts ([tunnel note](/cursor/stores/bc-35bc4b46-172a-47d5-b169-168b47154f99/internal/demo-tunnel-restored.md)). The built site is static files, so put it on Cloudflare Pages or GitHub Pages, both free. Check the host’s single-file size limit, and keep the film small, around 10 MB for 12 seconds at 1080p.

### Step 7. Hero renders and film, sized to your RTX 3070 Laptop (8 GB)

**What the card can do.** Blender’s public benchmark data puts the RTX 3070 Laptop at a median of about 2,850 samples per minute on OptiX, from 122 submissions ([Blender Open Data, via cpu-compare](https://cpu-compare.com/it/modern-benchmark/blender?backend=OPTIX&kind=gpu&os=Windows&page=2&version=4.2.0)), and a benchmark score near 3,000 ([Drop & Render](https://dropandrender.com/benchmarks/gpu/nvidia-geforce-rtx-3070-laptop)). A desktop 3070 renders the standard Blender test scenes in roughly 15–27 seconds a frame ([RenderJuice](https://www.renderjuice.com/gpus/rtx-3070-for-blender)). A laptop card should be close, with thermals and power limits the main variable. It is solid, but it is not fast. It is the right class for a short film of one simple scene.

**Settings.**
- **Engine and device:** Cycles, **OptiX**, with only the NVIDIA card ticked. Leave the Intel UHD off. It adds nothing next to the 3070.
- **Denoiser:** OptiX denoiser, with albedo and normal passes. It is what lets a low sample count look clean.
- **Samples and noise:** film at 128–192 samples with adaptive sampling (noise threshold about 0.02). Hero stills at 512–768.
- **Resolution:** film at 1920×1080, 24 frames per second. Hero stills at 3840×2160.
- **Light bounces:** keep them low, about 6 total. Turn caustics off. Clamp indirect light so fireflies do not appear.
- **Memory (8 GB):** keep textures at 2K, use a 4K HDRI (about 134 MB, so 8K is unnecessary), and make screws linked duplicates, not copies. Close other apps that use the GPU. If the Windows desktop is drawn by the Intel UHD, nearly all 8 GB are free for Cycles. In Windows Graphics settings, set Blender to the NVIDIA card. Set your browser to it too when testing the live page.
- **Block out cheaply.** Plan camera and timing in Eevee, which takes seconds a frame, then switch to Cycles for the finals.
- **Laptop care.** Plug in, use the high-performance power mode, stop the PC sleeping, and render the film in two or three batches so it can cool.

**Estimated render times.** Estimates only, for a simple studio scene of one corner with soft light and few glass or glossy surfaces. **The first look-test still in Stage 1 gives the real figure.** The film estimate scales from that.

| Output | Settings | Estimate on this GPU |
|---|---|---|
| Look-test still | 1080p, 256 samples, denoised | about 10–30 seconds |
| Hero still | 4K, 512–768 samples, denoised | about 2–6 minutes each |
| Hero film | 12 s × 24 fps = 288 frames, 1080p, 128–192 samples | 8–25 seconds a frame, so about **40 minutes to 2 hours** in total |
| Full-quality fallback | If the look needs 4K or 512+ samples on the film | 5–10× longer. Avoid. Upscale a 1080p film for marketing instead |

**Output.** H.264 MP4 plus WebM for the page, and AVIF or WebP poster stills. The film’s last frame matches the live viewer’s first frame.

---

## 5. Who does what: models, agents, tools

### The rules
- **No Opus 5.5** for orchestration or building. If Opus is ever used, `claude-opus-5-5-medium` is the ceiling, and never a “fast” variant.
- **No fast variants, no max effort.** Fast variants charge about 2–6× more per token for the same answer. At max effort, Sonnet 5.5 costs about 6× a default task ([Cursor docs](https://cursor.com/docs/models/claude-sonnet-5-5)).
- **One pass per task.** No bake-off between two models, and no routine cross-checks. If a result is wrong, you flag it and the same model redoes that one part.
- **Reviews are limited to three** (below).
- **Automatic checks cost nothing.** A script checks tyre size, part names, file size and part counts. No model reads those.

### What things cost
List prices per million tokens, from [Cursor’s model pricing](https://cursor.com/docs/models-and-pricing). The cost of a task also depends on effort level, because higher effort spends more tokens.

| Model | Input / output price | Relative cost, by output price | Where it is billed |
|---|---|---|---|
| `composer-2.5` (not fast) | $0.50 / $2.50 | **1× (cheapest)** | Cursor’s included model pool |
| `grok-4.7` low or medium | $2 / $6 | about 2.5× | Cursor’s included model pool |
| `claude-sonnet-5-5` low or medium | $2 / $10 | about 4× | Third-party, so **not** in the included pool |
| `gemini-4-argon` low or medium | $2 / $10 | about 4× | Third-party |
| `gpt-5.6-terra` low or medium | $2 / $12 | about 5× | Third-party |
| Opus 5.5, `gpt-5.6-sol` | $4 / $20 | about 8× | Not used |

Cursor’s docs say Composer 2.5 and Grok 4.7 draw on the weekly pool included with paid plans, while Sonnet 5.5 is “a third-party model” that is not part of the included usage. So the cheapest plan is to **let Composer 2.5 and Grok 4.7 do most of the work**, and spend Sonnet only where code quality decides the result. This depends on your Cursor plan (see Open questions).

### Roles

| Role | Model | Relative cost | Why | Check |
|---|---|---|---|---|
| **Coordinator.** Keeps the parts sheet, step order and plan consistent. | `claude-sonnet-5-5-medium`, used sparingly | $$$ | Long, careful reasoning, but only at a few points. | You approve the step order. |
| **Manual reader.** Pulls part numbers and screw callouts from the FTX PDF pages and fills the parts sheet. | `gemini-4-argon-low` | $$ | Strong at reading images and long documents. One pass. | You spot-check 10 rows. |
| **Scan and capture scripts.** Runs `ffmpeg` frame extraction, RealityScan, the scale script and the overlay renders on rc-companion. | `composer-2.5` | $ | Tool-and-terminal work is what it is tuned for. | The overlay glance. |
| **Blender modeller, hard parts.** Shock tower, arm, knuckle, hub carrier. Through the Blender MCP. | `claude-sonnet-5-5-medium` | $$$ | Writes Blender Python and checks its own viewport renders. | Overlay glance. |
| **Blender modeller, routine work.** Screws, naming, materials, mirroring, batch export. | `composer-2.5` | $ | Repetitive, well-defined jobs. | Automatic checks. |
| **Web viewer engineer.** Structure, choreography code, camera. | `claude-sonnet-5-5-medium` | $$$ | The trickiest code in the project. | You try it. |
| **Web tweaks.** Small UI changes, copy, labels. | `composer-2.5` | $ | Quick edits. | You see it. |
| **Facts and links.** Part numbers, lookalike warnings, known issues, buy links. | `grok-4.7-low` | $$ | Live web search. It did an earlier research pass for this project. | You click each link. |
| **Plain-English writer.** Step text and the voice script. | `claude-sonnet-5-5-low` | $$ | Clear, short writing. | You read it aloud once. |
| **The three reviews.** See below. | `gemini-4-argon-medium` | $$ | Good at looking at images. | You make the final call. |
| **Render farm.** Cycles renders, compression, local server. | Your Cursor self-hosted worker on rc-companion | Free (your PC and electricity) | The agent “brain” runs in Cursor’s cloud, while commands, files and local MCP tools run on your PC, with no inbound ports ([Cursor docs](https://cursor.com/docs/cloud-agent/self-hosted), [My Machines](https://cursor.com/docs/cloud-agent/self-hosted/my-machines)). | Keep the PC on and Blender open during runs. |
| **Assets.** HDRIs and textures. | Blender MCP with Poly Haven | Free | CC0, no key. | None. |
| **Narration.** | Higgsfield voice (below) | About 1 credit a line | Already part of your plan. | You choose the voice. |

Held in reserve and not given a role: `gpt-5.6-terra` low or medium. It costs about the same as Sonnet and there is no job here it does clearly better.

### The three reviews, and only these
One reviewer model, one pass, a punch list of at most 10 items. The builder fixes the list in one pass, and you sign off. These three are the things that most decide whether it looks professional.

| # | Review | When | What the reviewer sees |
|---|---|---|---|
| **R1** | **Hero lighting and materials** | End of Stage 1 | The Cycles still beside the live viewport, and a real photo of the part, all at phone size. |
| **R2** | **Final camera framing** | Stage 3 | The film’s first, middle and last frames, and the match cut between film and live model. |
| **R3** | **UI polish pass** | Stage 4 | The whole page at laptop width and at one phone-shaped width: spacing, type, label overlap, empty and loading states. |

Everything else is built once, checked by script or by your glance, and moved on from.

### Higgsfield: what its voice and audio tools offer
Checked against your Higgsfield connection today.

- **Voices.** `list_voices` returns **30 built-in preset voices**, with names like Grady, Ainsley, Arthur, Faye, Reid, Holden, Delia and Cillian. Each has a preview you can hear. You can also **make your own voice** from a short recording using the Create Voice tool, which the tool calls a clone.
- **Models.** The default is **Seed Audio 1.0** (ByteDance). You can set speech speed (−50 to +100), pitch (±12 steps) and loudness. It writes WAV, MP3 or OGG. It can also copy a voice from a reference clip.
  - **Qwen Audio 3.0 TTS Flash** takes a plain-language style instruction, such as “calm, friendly bench mechanic.” It can produce up to 4 takes of a line at once.
  - **Eleven v4** and **v4 Turbo** (ElevenLabs) are also there, with stability and similarity controls.
  - **Text to Speech V2** lets you choose between ElevenLabs, MiniMax, Seed Speech, Vibe Voice and Cozy Voice.
- **Batch.** One call can generate 1–12 independent lines at once, which suits a 10–12 line script.
- **Cost.** A preflight on one narration line returned **0.8 credits**, with nothing submitted. Your balance today is about 4,878 credits on the Ultra plan, so narration is a rounding error. You can also have a preflight run before every generation.
- **What it cannot do.** The audio tool makes **speech only.** It declines general music and sound effects. The music and sound-effect models in the catalogue are reserved for Higgsfield’s game builder.
- **Free trial generations** are not spendable on your account right now, so credits pay.

**How to use it.**
1. Generate a 3-voice sample (about 3 credits) of the same line. The agent shortlists three presets from the 30. You pick.
2. Write the script as 10–12 short lines, one per step.
3. Generate all lines in one batch with a fixed voice, speed and style. Save the MP3 files in the project. They are then part of the site, so nothing recurs.
4. If you ever want zero Higgsfield spend, the browser’s built-in speech is the free fallback. It sounds worse and varies by device.

**Everything else Higgsfield offers is out of scope.** Image and video generation, upscaling and 3D Jutsu all invent detail, which the rule against AI in repair steps forbids. You do not need them for the demo.

### Image-to-3D and photogrammetry: the plain answer
- **No current image-to-3D tool will produce an accurate Carnage part from photos.** That includes Higgsfield’s image-to-3D, Tripo, Rodin, Hunyuan3D, Meshy, TRELLIS 2 and SAM 3D.
  - They make shapes that look right. A mechanical benchmark found “severe dimensional failures” in Hunyuan3D, TRELLIS and SAM 3D, with volume errors running from 17% to 146% ([OmniMech, arXiv](https://arxiv.org/html/2608.05539)).
  - An engineering supplier’s review says they lack accurate dimensions and fit ([RapidDirect](https://www.rapiddirect.com/blog/best-image-to-3d-ai-generators/)).
- **Photogrammetry from your own video** is better for overall shape, but holes, threads and thin ribs come out mushy, and shiny steel does not scan. Section 4 covers how it is used.
- **What still needs Blender work, every time:** true scale, hole positions, pin axes, clean flat faces, screw threads, mirrored left and right parts, separate moving pieces, and a light, clean mesh for the web.

---

## 6. What the demo should show, so it explains the product

The demo opens on a **problem**, not on a model. Suggested 60-second story for a newcomer, built around the shock swap:

1. **The film (about 12 s).** Your Carnage on the grey sweep. It freezes, and the front-left corner comes apart in order, with every screw floating above its hole. A voice says: “This is the front-left corner. A handful of screws, and a dozen small parts. Here is how to get the shock out and back in without losing one.” Real counts go in once the model exists.
2. **The match cut.** The film becomes live 3D. A prompt reads: “What is wrong?”
3. **Pick “Front end feels soft or bouncy.”** The camera moves to the shock. A short check (oil leaking at the cap, a bent shaft, a worn seal) says whether the shock needs a rebuild or a swap. The symptom wording is demo copy based on the manual’s page 11 note that dirty running wears the shocks and that oil and seals need replacing to keep damping smooth. The facts agent and you check it.
4. **The job card.** Numbered steps, tools needed, and “leave the hub alone for this one.”
5. **The screw tray.** Each screw backs out, turning, and drops into a labelled knolling slot.
6. **Tap a part.** It shows the FTX number and a lookalike warning, such as front shock parts versus rear. It also has a static “where to buy” link and an aluminium upgrade option.
7. **Rebuild.** The tray empties in reverse. Done.

### Features tied to your six pains
| Your pain | Demo feature | What it shows |
|---|---|---|
| 1. Remembering screws | **Screw tray / screw map** (knolling view) | Each screw’s type, size, count and slot, in removal order. On rebuild, each one glows over its hole. |
| 2. How parts fit | **Assembly-axis explode** with manual-style lines, plus **isolate** | Tap the shock, and everything else fades. See exactly what it touches. |
| 3. No order for the repair | **Job card** with numbered steps and “do not touch” warnings | The order that saves the Saturday. |
| 4. Self-diagnosis | **“What is wrong?” entry** with a short symptom checklist | Strip only as far as needed. |
| 5. Flat diagrams misread | **Part number on tap** plus a **lookalike warning** | Front and rear parts have different numbers (FTX6208 front shock body versus FTX6209 rear). |
| 6. Scattered forum advice | **“Known issue” card** per part: one checked answer, with a source link | Advice written for this repair, not a copied thread. |

### One extra, kept because it is cheap and impressive
- **Upgrade swap.** The stock plastic part flips to the blue aluminium option in place. This shows that upgrades and repairs are the same flow.

Cut from the earlier plan: an AR “on my bench” button, a truck log, voice commands, before-and-after photos, torque notes and any partner angle. They are either apps, beyond a demo, or both.

---

## 7. Stages

Four stages, smallest first. Do not start a stage until the one before it is “done.”

### Stage 1. Capture and look test
- **You:** the 30-minute capture (Step 1c), then the R1 review, about 15 minutes.
- **Agents build:**
  1. The parts sheet for the front-left shock, from the manual.
  2. The scan run, scaled to the tyre and wheelbase.
  3. **One shock assembly** modelled over the scan, manual and retailer photos, with satin materials.
  4. **One real M3 screw** (BoltFactory) that backs out of it: it turns, rises 0.5 mm per turn, lifts and lands in a tray slot.
  5. One Cycles still on the grey sweep, and the same shock and screw live in the browser with matching light.
- **Done looks like:**
  - the overlay check lines up within a glance
  - the 1080p Cycles still renders in under about 30 seconds on your GPU, which sets the film’s render estimate
  - at phone size, beside a photo of the real shock, you score the render 7 out of 10 or better
  - the screw motion feels like a screwdriver, smooth in the browser on your laptop
  - R1 is signed off

### Stage 2. Front-left corner and the shock-swap job
- **You:** about 10 minutes spot-checking the parts sheet, about 20 minutes on overlay glances, and one test run of the job card.
- **Agents build:** every part and screw of the front-left corner, named by FTX number, with assembly axes stored. The compressed GLB. The 6–10 step shock-swap job card, the screw tray, part-number cards and the upgrade swap. All live in the browser.
- **Done looks like:**
  - every part in the file matches a row on the parts sheet, and every part number matches the manual
  - the overlay check passes for the four biggest parts
  - the GLB is under about 10 MB, and runs smoothly on your laptop’s 3070
  - as a free extra, it still runs acceptably on the Intel UHD
  - someone who has never done a shock swap can follow the job card on your real truck without asking you

### Stage 3. Hero film, story and narration
- **You:** pick the voice (about 10 minutes), then sign off R2 (about 10 minutes).
- **Agents build:** the 12-second Cycles film and one hero still, the match cut into the live model, the “What is wrong?” entry, and the narration lines from Higgsfield.
- **Done looks like:**
  - the film’s last frame and the live model’s first frame cannot be told apart
  - the film renders overnight on your GPU, within the 40-minute-to-2-hour estimate, or is rescoped
  - a stranger watches 60 seconds and can say in one sentence what the product does
  - R2 is signed off

### Stage 4. Polish and ship
- **You:** sign off R3, then open the link on two devices.
- **Agents build:** the R3 punch-list fixes, the empty, loading and error states, and the static build on a free host.
- **Done looks like:**
  - a fixed public link loads from a cold start on a different network
  - the first view appears within a few seconds on a normal connection
  - it works in Chrome and Edge on your PC and, as a nice-to-have, on your phone
  - R3 is signed off
  - you would send the link to anyone

### Your time, in total (my estimate)
About **2–2.5 hours across the project**: capture 30 min, reviews 40 min, spot-checks and overlay glances 30 min, voice pick 10 min, job-card test 20 min, final device checks 20 min. None of it needs tools beyond your phone.

---

## 8. Risks

### Copyright and trademarks on FTX material
- You asked to use the real FTX manual drawings as reference.
- **Using them, and retailer and teardown photos, as private shape and part-number references to build your own 3D model is low risk.** In UK law, copying a 2D artistic work into 3D can count as copying ([CDPA s.17(3)](https://assets.publishing.service.gov.uk/media/60180c2b8fa8f53fc62c5897/Copyright-designs-and-patents-act-1988.pdf)). But s.51 says it is not an infringement of copyright in a design document to make an article to that design, unless the thing is itself an artistic work ([CDPA s.51](https://www.legislation.gov.uk/ukpga/1988/48/section/51), [LexisNexis](https://www.lexisnexis.com/en-gb/legal/glossary/indirect-copyright-protection)). RC parts are functional.
- **Higher risk:** putting FTX’s drawings, retailer or YouTube photos, or page scans **inside** the demo, and using the FTX or Carnage logos on your model or page. Copyright in the drawings and photos still applies. Logos are trademarks. The demo should show only your own models and the part numbers.
- **Unsettled:** UK unregistered design right in part shapes. It matters mainly if this ever turns into a product you sell. As a free hype demo, the exposure is small, but it is not zero. This is general information, not legal advice.

### Accuracy without measuring
- Close is not exact. A screw drawn slightly long, or a part a few millimetres off, will not matter for hype. A wrong screw type, a wrong count, or a wrong removal order would.
- **Mitigation:** scale anchors, the parts sheet from the manual, the overlay glance, and a script that checks tyre size and part names. No AI-generated geometry or imagery in repair steps.
- **Be honest on the page.** Call it a preview “built from the manual and a scan,” not a dimensioned CAD model.

### Black plastic and shiny steel scan badly
- The scan may fail to align, or come out with holes. **Mitigation:** the newspaper trick in the capture, then the KIRI Engine fallback. Because the scan is only a tracing guide, a weak scan slows the work but does not stop it, since the manual and retailer photos carry the part shapes.

### Render time and 8 GB of memory
- A 1080p film is fine on this card, but 4K film frames or heavy glass and glossy surfaces would stretch it badly. **Mitigation:** the Stage 1 test frame sets the estimate first, and 4K is for stills only. If memory runs out, cut texture sizes or render in layers.

### Cost creep
- **Mitigation:** the model rules in section 5, three reviews only, one pass per task, and Composer 2.5 and Grok 4.7 as the default workers. Higgsfield narration needs about 10 credits in one sitting.
- Keep an eye on the cost of Sonnet 5.5 at medium effort, because it is the one third-party model doing real work.

### Time and scope
- The references took Oefner weeks per image. A full truck is hundreds of parts. **Mitigation:** one corner, one job. Do not model more until Stage 2 works.

### Other risks
- **Blender MCP runs arbitrary code.** Save before every session.
- **Quick tunnel links die.** Use free fixed hosting for the demo.
- **Theatre.js is effectively paused.** Avoid building on it.
- **RealityScan’s licence** is free under $1M revenue. If this ever becomes a business above that, a seat is $1,250 a year ([licence](https://www.realityscan.com/license)). Meshroom and COLMAP are open-source alternatives.

---

## Open questions for James

Only the ones still open. Each has a default, so none blocks the start.

1. **Which Cursor plan are you on?** The cheapest setup relies on Composer 2.5 and Grok 4.7 being covered by your plan’s included model pool, as Cursor’s docs describe. If they are not, the same plan still works, but Sonnet and Gemini use becomes relatively cheaper. *Default: assume they are covered.*
2. **Do you still have the old shock, or another swap coming up?** It decides whether you capture fresh parts photos and a swap video (Step 1c, item 3), or we rely on retailer photos only. *Default: retailer photos and the manual, and a swap video if one comes up.*
3. **Which voice?** At the start of Stage 3 you hear three Higgsfield samples (about 3 credits) and pick one. *Default: the agent picks one calm, clear preset and you change it later.*

---

## The five most important recommendations

1. **Go hybrid, for a web demo.** The hero film and stills come from Blender Cycles on your RTX 3070. The part you touch is live Three.js with the same light, camera and model, and a match cut joins them. Phones are a nice-to-have.
2. **No calipers: close proportions from many sources plus scale anchors.** Manual drawings, retailer and teardown pictures, your phone video through RealityScan, and known sizes (tyre 120 mm, wheelbase 290/295 mm, M3 screws, the 10×5×4 bearing). The scan is a tracing guide. Every part is rebuilt cleanly in Blender. It costs about 30 minutes of your time.
3. **Grey seamless studio, satin materials, long lens, and ordered motion.** Lose the tiled floor and the glossy plastic. Screws turn and rise 0.5 mm per turn before lifting. Keyed motion, not physics. Knolling is the screw tray.
4. **Cheap, single-pass building.** No Opus. Composer 2.5 and Grok 4.7 do most of the work, Sonnet 5.5 at medium handles the hard Blender and code, and only three reviews are kept: hero lighting and materials, final camera framing, and the UI polish pass.
5. **Four stages, free tools, no recurring cost.** Capture and look test, then the front-left shock-swap corner, then film, story and Higgsfield narration, then polish and a free fixed link. AI never invents parts for a repair step.
