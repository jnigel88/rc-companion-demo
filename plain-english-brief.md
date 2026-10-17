# Your RC idea, in plain English

**Date:** 15 October 2026

The long research writeup is still here if you want sources: [merged landscape](/cursor/stores/bc-35bc4b46-172a-47d5-b169-168b47154f99/docs/rc-landscape-merged.md).

## The answer

The problem you lived through is real, and it is a good seed for a product.

The first product is a guided teardown and rebuild for one 1:8 car you actually own: what to undo, where each screw came from, how the parts go back, and when to stop and buy a part.

The Iron Man picture (a 3D pulled-apart car, with an assistant in your ear) is the right destination. It is the later version, after those steps are trustworthy on one car.

## What the research found

Shops and brands already sell the parts. Horizon lets Arrma, Losi, and Axial owners tap a flat diagram and buy the piece. Traxxas, Tekno, Associated, and Tamiya mostly give you a PDF or a web page of that same pulled-apart drawing (the “splash view”). Those drawings assume you already know the exact version of the car and can match a shape to a number. They do not run the job, and they do not remember your screws.

When something is wrong, people post a video on Reddit or a forum. The replies often disagree. One AI app, So Dialed, helps race drivers with how the car handles. It does not help you take a gearbox apart. iFixit does the closer thing for phones: numbered steps, photos, and a voice that reads the current step. Nobody has done that properly for RC.

LEGO apps can photograph a pile of bricks and name them because every brick shares a number and a public 3D model. A 1:8 car does not work that way. Parts are branded, and last year’s hinge pin often will not fit this year’s car. A photo of a black plastic piece is a weak way to start.

There is no finished open-source app for this on GitHub.

One community site, RC Crash Crew, already claims a large catalog of parts and “this fits that” labels. A small site, rcparts.app, shows what changed between two years of the same race kit. Those are catalogs. They are not a repair assistant.

## Your six problems

1. **Remembering the screws.** This is the sharpest gap. No RC app does it. People use cups and tape. A phone can do it without 3D: each step shows the screw, the count, and a photo of the hole it left. On the way back, the steps play in reverse.

2. **How parts fit together.** Manuals and YouTube already try. A 3D view would be clearer. It is also the expensive part, because the manufacturer owns the drawings and rarely hands over the 3D files. The practical path is photos first, then a 3D model of the one assembly you keep opening (a diff, a gearbox, the shocks).

3. **Nobody tells you how to organize the repair.** Also a real gap. A good assistant says what to do first, what to do second, and which end of the car to leave alone. That is the time you lost. Order and trays come before graphics.

4. **Working out what is wrong.** Worth doing, and it should happen before a full strip-down. If the click is a spur gear, the whole 1:8 does not need to come apart. A short checklist for your exact car is the safe version. An assistant that has swallowed every forum post will sometimes repeat the wrong guess with confidence.

5. **Flat diagrams that are easy to get wrong.** You are right. The best diagrams in the hobby are still flat. A 3D view is the upgrade people will feel. A pretty 3D model with the wrong screw in the wrong hole is worse than the PDF, so the steps have to be right first.

6. **Forum advice is scattered.** The pain is real. A pile of copied posts is a weak product: the advice conflicts, and other people’s writing is not yours to republish. Batteries and fuel make bad guesses dangerous. The useful version is an answer written for this repair, plus a link if you want the original thread.

## The feeling you want

“Someone calm is with me while both hands are in the car.”

That feeling is a checked script, read aloud, with the next screw on screen. The assistant answers questions about this repair. When it does not know, it says so and points at the manual.

## A business around it

Yes, if the thing people pay for is that guided repair. 1:8 owners already spend real money on the car and on spares. Saving a Saturday is a believable reason to pay.

Parts links, tracks, and car comparison can hang off this later. They are crowded on their own. The repair assistant is the empty seat.

A first version that tries to cover every brand, live shop stock, and a full 3D car will stay a demo. One car, one repeated job, done properly, is the business.

## Your truck

The FTX Carnage 2.0 Brushless is a **1/10** electric monster truck, not a 1/8. FTX’s own manual says “1/10th scale 4WD electric.” It left the factory with a 2S LiPo. The charger also supports 3S, which matches swapping 2S and 3S packs. Official manual: https://www.cmldistribution.co.uk/product/FTX5539/files/FTX%20Carnage%202.0%20BL%20-%20Manual.pdf

Upgrades are the same product as repairs. In two months the parts that came off (suspension, shocks, rear bumper, pins) are normal Carnage jobs. FTX already sells aluminum shocks, arms, hubs, and towers as optional extras: https://www.cmldistribution.co.uk/product/FTX5537B/files/Carnage%202.0%20Optional%20Extras.pdf

An electric Carnage has no engine crankshaft. The long shafts and pins in that teardown are driveshafts and hinge pins.

## Is it a good idea, and can the 3D assistant be built?

Yes, and yes, for this truck.

The assistant and the 3D view are built for the Carnage, one assembly at a time (shocks, suspension, bumper). Someone models those parts, writes the screw order, and the voice talks only from that guide. The phone remembers which screw left which hole. Fitting an upgrade uses the same steps as a repair.

The 3D file does not already exist. The manual’s diagram is flat. A photo of the truck will not produce an accurate 3D model by itself. The model is made, then the assistant is attached to it.

Still needed: which job comes first (shocks, suspension arms, or the rear bumper), and what he meant by crankshaft (a long shaft down the middle, or a pin in the arm).
