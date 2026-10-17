# RC repair companion: merged landscape

**Date:** 14 October 2026
**What this is:** One combined review of three independent research passes on the same brief. Research only. No app was built.

**Models.** Three passes, two model families. [Map RC repair landscape](bc-0011558f-330f-53df-955a-4c0dc11e42b1) was pinned to **grok-4.7-high**. [Survey RC hobby apps](bc-7d7bd9bd-8598-556a-8fa5-995abd5db7c2) was asked to run on Auto. Auto is not a model that can be assigned here, so that pass inherited the coordinator model, also Grok 4.7. [Research RC apps Composer](bc-b31e4bc3-15d0-51bb-aded-9808219870c9) ran on **composer-2.5**. There is no separate composer-2 slug. Its report labels itself “Composer.” Sections 1–11 are the two Grok passes. Section 12 is what Composer added, missed, and got wrong.

**Source reports**

- [Grok landscape report](/cursor/stores/bc-35bc4b46-172a-47d5-b169-168b47154f99/docs/rc-landscape-grok.md) — grok-4.7-high
- [Second landscape report](/cursor/stores/bc-35bc4b46-172a-47d5-b169-168b47154f99/docs/rc-landscape-auto.md) — coordinator Grok 4.7
- [Composer landscape report](/cursor/stores/bc-35bc4b46-172a-47d5-b169-168b47154f99/docs/rc-landscape-composer.md) — composer-2.5

All three searched live pages, app listings, help docs, and GitHub on 14 October 2026. Marketing numbers (accuracy, catalog size, market dollars, catalog counts) are claims, not measurements these passes verified.

---

## 1. Direct answer

**Nothing already does the whole job.** Diagnosis, parts buying, track finding, and assembly guides all exist. They sit in different brands, shops, and forums. The missing product is the join: name this exact car, name the fault, hand the owner a real part number, and send them somewhere that can sell it.

Brickit is the right analogy for the *loop* (see a physical thing, name it, know what to do next, buy what you lack). It is a poor analogy for the *data*. LEGO works because parts share geometry, public IDs, public CAD, and a marketplace that speaks those IDs. RC parts are branded, revision-specific, and usually not interchangeable. A photo of a parts bin does not transfer.

A realistic first version is a reviewed checklist for a few popular electric ready-to-run cars. It ends in an official part number and a link to Horizon, Tower, or AMain. Augmented reality, live local-shop stock, and a mechanic trained on Reddit are later, or unsafe.

---

## 2. Where both passes agree

These points showed up independently. Treat them as the stable core.

**The hobby already has a repair loop, and it is manual.** Something clicks, cuts out, or stops driving. The owner posts a video or reads an LED. Someone who has broken that model names a suspect (spur, mesh, diff, sensor wire, LVC, endpoints). The owner opens an exploded view, copies a stock number, and searches Horizon, AMain, rcMart, or calls a shop. Electronics live in a second set of apps (Traxxas Link, Spektrum, Castle Link, Hobbywing HW Link) that program and log the ESC. They do not sell the A-arm.

**Horizon’s shoppable exploded view is the best RC parts product that exists.** One corporate catalog covers Arrma, Losi, Axial, and Tower Hobbies. The owner who already knows the kit code opens a diagram, pans, taps a callout, and can buy. It is a picture map of SKUs. It is not 3D, not AR, and not a symptom wizard. Traxxas, Associated, Tamiya, Tekno, Kyosho, and XRAY still publish drawings their own way, mostly as HTML or PDF.

**So Dialed RC AI Mechanic is the closest shipping “ask the AI” product, and it is a race-setup advisor.** It claims 700+ cars, kit baselines, pinion help, and a separate track directory. Photos are “not yet.” Price on the page: 10 free questions, then a small daily refill, or $19.99/year unlimited in the US. It names OpenAI plus its own docs. It does not diagnose a cracked bulkhead or put a part in a cart. Gear math sits in a calculator beside the chat, which is the right split.

**iFixit FixBot is the repair-guide model to copy in shape.** Identify the exact device, narrow the symptom, retrieve a written guide, name a compatible part, then optionally read the step aloud. Voice is experimental and sits on top of a large edited library. The corpus is the product. The voice is the last mile.

**GitHub does not contain a usable RC parts catalog or fault tree.** `stubbs41/rc_hub` is a Flutter schema sketch (vehicles, parts, diagrams, photo diagnostics) with no populated catalog and no license worth building on. The star count differs by one between the two fetches (0 vs 1). That does not change the finding. LEGO vision code is plentiful and aimed at clean, standardized bricks. Open-source RC hits are mostly drive firmware.

**Tracks are a crowded, fragmented directory, not an empty map.** Race clubs (ROAR, BRCA, LiveRC, So Dialed), crawler and bash pins (RC Map, BashMaps, RC Crash Crew), and freshness-aware lists (RCGuides) already exist. They answer different Saturday questions. A new pin map without a maintenance plan repeats a stale forum.

**Vehicle comparison already exists at buyer depth.** RC Car Compare lists on the order of 71 models with affiliate links. Arrma publishes its own spec compare. Comparison of curb weight is weakly useful once the car is broken.

**Safety and licensing are product requirements.** LiPo cutoff and chemistry are manufacturer rules, not tone. Nitro needle settings do not belong in a generated paragraph. Exploded views are manufacturer artwork. Linking out is the durable approach. Republishing the drawing is a copyright problem even when the part number is a fact.

**Vision scoped like Brickit will disappoint.** RC parts are black, greasy, few, and look-alike across years. Identity of the exact kit has to come before a photo of a broken arm.

---

## 3. How the two passes differ

Same model, same brief, different digging. The merge keeps both when they add a fact, and flags the one place they conflict.

### The grok-4.7-high pass went deeper on mechanism and institutions

- Brickognize’s author interview (Casa de Bricks, 2023): metric image search, ConvNeXt-T, about 28 million parameters, trained on an A100, at least two images per part, plain bricks that differ only by length are the hard class. Homepage figures (125k, 98.5%, 0.7 s) stay unverified claims.
- A documented ID-alias lesson from LEGO itself: Brickognize IDs and Rebrickable numbers disagree on about 13% of parts (`TravisL12/brick-review`). Any RC catalog meets this on day one.
- LEGO’s own recognition patent turned up in patent search. It is not a description of Brickit. No Brickit patent was found.
- Associated’s parts tree is a list of incompatible versions (B6, B6.1, B6.2, B6.3, B6.4, and the D variants). “A B6” is not a parts key.
- Tamiya’s chassis platforms (TT-02, CC-02, DT-03, and the rest) are the closest RC gets to a reuse graph, and they are still one brand.
- Race governance maps: ROAR track locator, BRCA club finder, EFRA’s national bodies, Schumacher’s “where to race,” LiveRC as a timing board rather than a tourist map.
- Industrial AR that is real and not consumer RC: JigSpace (explode a model, or pay them to model from photos if the OEM will not share CAD) and Taqtile Manifest (Army maintenance procedures). The cost is the mesh and the procedure, not the AR shell.
- OpenRC’s bill of materials shows the real taxonomy: ISO screws and bearings by size, then brand-specific tires and shocks.
- `tegos/parts-diagram-ocr` can find callout numbers on a raster exploded view. The code is MIT. The drawings are not yours to ingest.
- A hard product rule: if the kit revision is unknown, stop at the inspection. Do not name a SKU.
- RCGroups homepage counters that day: about 862k members and 47 million posts, across planes, drones, cars, and boats.

### The second pass went deeper on diagnosis content, commerce risk, and the sleeper tools

- It read the 2023 *Sensors* paper that shares the name Brickognize (University of Girona and Tramacsoft) and kept it separate from Piotr Rybak’s site. The paper’s system is Mask R-CNN on synthetic piles: about 20,000 images, 76 brick types, 50 minutes to label one real photo, 91.33% AP50 after a 20-photo fine-tune. Real photos alone failed. The authors say LEGO is probably the most complete public CAD library of real objects. RC is not that library. The high pass warned not to merge the paper with the website and did not extract these numbers.
- Traxxas already publishes a decision tree. “Model does not run” is an ordered checklist. ESC LEDs are a code book: solid green means low-voltage detection on (LiPo), solid red means it is off (NiMH), slow blinking red means the pack cut the car. That content is copyrighted. A product can link it and ask “is LVC on?” without pasting the page.
- Spektrum’s connector trap: a car can run on the wrong plug and silently lose battery telemetry.
- **rcparts.app** compares spare-parts lists between revisions of the same racing kit (Associated B74.1 vs B74.2, XRAY year to year) and shows what is compatible, new, or obsolete. The high pass missed this. It is the comparison that matters during a repair. Buyer spec sites are a different job.
- RC Donkey does at least some head-to-head vehicle compares. Arrma’s own compare page is a real PIM table (FDR, Kv, hex, waterproofing) for Arrma only.
- Horizon and Tower serve exploded PDFs from the same Demandware master catalog (`Sites-horizon-master`). “Buy from Horizon or Tower” is one integration.
- A 2018 news report put Horizon’s Hobbico RC purchase at $18.8 million. Useful as ownership color, not as a market-size input.
- RCGuides prints a last-verified date. RC Spotters’ category page (snippet, not a database export) listed on the order of 1,740 crawler trails, 944 hobby shops, 481 flying fields, 441 racetracks, and 48 drift tracks. So Dialed claims 1,862 racing tracks in 55 countries.
- Traxxas has a documented forum history of going after unauthorized parts sellers and aftermarket use of model names (Jenny’s RC threads on Arrma Forum). Linking out, or a real dealer relationship, is safer than rebuilding their diagram set.
- iFixit’s public read API describes the data model worth copying: device, guide, ordered steps, tools, parts, troubleshooting page, community answers beside the guide.
- Unfold (tiny, unlicensed, furniture manuals) shows that an exploded step player and a “next step” voice command do not require AR.
- FixItXR is a hackathon (Quest passthrough, a detector, Gemini, TTS), not a product, and it assumes a headset almost nobody brings to a track.
- R/C Tech’s own page showed about 1.06 million threads, 15.8 million posts, and 546k members. That is the English-language racing brain, and its track forum looks stale, which is evidence that forums are a bad database.
- A named v1 corridor: Slash, Rustler, Maxx, TRX-4, Gorgon, Kraton, Senton, SCX24 or SCX10, because the diagrams and the carts already exist.
- RC Garage Pro is a landing page on a `polsia.app` host. No App Store listing or user base turned up. Treat it as unverified.

### One conflict

rcMart’s physical shops are named differently. The high pass says Mong Kok and Yau Ma Tei, plus a Traxxas showroom, and that the shelves are a subset of the online catalog. The second pass says Yuen Long and Yau Ma Tei. Both cite rcMart pages. Confirm the current shop list on rcMart before using it in a product. The shared point is solid: a Hong Kong retailer with a deep brand catalog and a couple of counters, not a live multi-shop inventory API.

### What neither pass found

A production RC augmented-reality repair app. A cross-brand fitment graph. An API for independent hobby-shop bin stock. A consumer app that starts from a photo of a broken part and ends in a cart. A mature open-source RC parts catalog. An official counterfeit checker. Absence is what the searches returned, not a proof that a small app was impossible to miss.

---

## 4. How the LEGO stack actually works

Use this as the technology reading. It is feature-level, not a clone plan.

**Brickit** (https://brickit.app/about/) trains on large numbers of synthetic 3D renders of piled bricks, then on real photos users send, and asks users to correct mistakes. The specific published catalog is about 1,600 common bricks. The product highlights a piece inside the photo, so detection includes location, not only a parts list. A second, unpublished step matches that multiset to a library of builds. A 2022 press claim of “as high as 92%” has no public test set. Pockets can export a collection to Rebrickable. Brickit does not sell the missing bricks. Monetization is a free app plus Brickit Pro, and a separate classroom purchase. The hard problem they solved is good-enough recognition of the common head of the catalog, plus builds that still work when a part is missing.

**BrickScan** (formerly BrickMonkey, https://brickscan.com/) photographs one part or minifigure and returns an ID you can export as BrickLink XML. That is closer to “what number is this?” than Brickit’s “what can I build?”. Site claims of 76,000+ parts and 16,000+ figures are their own figures.

**brickognize.com** is an image-search beta with a public `POST /predict/` endpoint. The 2023 author interview describes embedding search against catalog images (photos and LDraw renders), which is how you cover a long tail without a dense photo set of every part. The academic paper of the same name is a different system: instance segmentation of 76 brick types in synthetic piles. Keep them separate. Downstream code (`NazarLysyi/brickscope`, MIT, updated October 2026) is the open-source shape that matters: vision service returns an ID, catalog service returns colors and set appearances, a thin client joins them.

**Rebrickable + BrickLink Studio** are why “buy the missing pieces” works at all. The user declares sets and loose parts. The build engine applies explicit rules (color match, mold variants, alternates, spares). Missing parts are matched to BrickLink, BrickOwl, and ToyPro inventory lagged by up to about a day. Studio turns a digital model into a wanted list. LEGO bought BrickLink in 2019. Prices are not in Rebrickable’s API. The hard problem they solved is a shared ontology, substitution rules, and multi-store stock. RC has shops and SKUs. It does not have the ontology or the shop feeds.

**What transfers**

- Once you have a stable ID, send the owner to a store that speaks that ID.
- Subset accuracy is enough. Brickit does not inventory every brick. An RC guide can be useful if the expensive broken part is right and the unsure case asks a question.
- A vision service and a catalog service should stay separate.
- Bearings, screws, and hex sizes are the few RC objects with a cross-brand key. Structural nylon is not.

**What does not transfer**

- Photograph a pile, highlight the piece, invent a new build. RC owners want this truck to run.
- Synthetic training from a complete public CAD library. Manufacturers do not publish one.
- Color as an identity field. Revision, scale, and drivetrain are the match keys.
- One ID namespace. Traxxas, Arrma, Associated, Tekno, Tamiya, and aftermarket brands each number parts their own way.

---

## 5. His feature list, against what exists

| Job | What exists | What a new app can still own |
| --- | --- | --- |
| Troubleshoot repairs | Traxxas and Spektrum symptom pages; Reddit, RCGroups, R/C Tech, RC Talk; So Dialed for handling | A model-aware checklist that ends at a part category, then the official diagram |
| Fault diagnosis | ESC LED codes and vendor telemetry apps; forum differentials that often disagree | A short ranked list for common failures, with a stop when the version or the evidence is thin |
| Buy parts from local or RC shops | Horizon/Tower shoppable views; AMain’s vehicle form and its own store locator; rcMart’s brand catalog; the local counter | The part number in large type, a link to the retailers who stock that brand, and “call first.” Live bin stock is not online |
| Find tracks or ride sites | So Dialed, ROAR, BRCA, RCGroups places, RC Map, BashMaps, RC Spotters, RCGuides, RC Crash Crew, LiveRC | Freshness, discipline filters, and a tie to the car you own. The pins themselves are not the gap |
| Interactive exploded guide | Horizon’s hotspot viewer; Traxxas HTML; Associated, Tamiya, Tekno, Kyosho, XRAY PDFs. Associated’s old B4 sheet says the drawing is for finding parts, not for building the kit | Hang the manual’s steps on the same callouts as the cart, under license or as deep links |
| Augmented reality | JigSpace and Taqtile in industry; FixItXR as a hackathon. No production RC AR repair app turned up | A later overlay on a guide that is already correct. Pit work is greasy, both hands are busy, and the failed part is often inside a gearbox the camera cannot see |
| Audio or text-to-speech | iFixit FixBot voice, experimental; Unfold’s “next step” demo | A button that reads the current reviewed step. Worth it once the script exists, because a diff rebuild occupies both hands |
| Compare RC vehicles | RC Car Compare, RC Donkey, Arrma’s compare, rcparts.app for revision diffs | Compatibility across kit years. Buyer spec tables are already occupied |

---

## 6. The six products worth understanding

**Brickit.** Families with a bin of common bricks. Photo of a scattered pile, detected multiset, a build that fits, steps that point back into the photo. Private recognizer over about 1,600 parts, plus a build library. Free, with Pro. They never had to be a store.

**brickognize.com.** One photo, nearest catalog hit, an ID other tools can look up. Long-tail search, which Brickit deliberately skips. Free beta with a public API that hobby projects call. The author’s own account says near-duplicate shapes are the failure mode. RC suspension arms are that class across years.

**Rebrickable and Studio.** Declare what you own, compute the delta, buy the delta from stores that have it, import the order back. Classical BOM matching with equivalence rules. The “magic” is multi-store inventory search, not a model.

**Horizon shoppable exploded view.** For an owner who already knows `ARA4202V3T1`, not “a Kraton.” Diagram sheet, callout, manufacturer number, retailer SKU, price, stock. Parts margin. They solved the last inch of commerce for brands they own. They did not solve “I don’t know which version I bought,” Traxxas or Tekno, or the independent shop’s drawer.

**iFixit and FixBot.** Device first, then a troubleshooting page or a guide, then parts. Public read API. Voice and “ask my PDF” sit on that library. Trust comes from written, photographed steps. A chatbot on generic RC knowledge will reproduce the forum, including the wrong guess.

**So Dialed.** Club racers who can name the kit and the track. Setup language in a pocket, fenced with “test it at the track,” metered so it is not an unbounded chatbot. Occupied job: do not rebuild it as a race-setup bot. Unoccupied job: break-fix through to a SKU.

Honorable mentions, not full teardowns: Traxxas Link, Spektrum Dashboard, Castle Link, and HW Link are the real electronics layer and they are vendor-locked on purpose. A companion should deep-link the right programmer and interpret the symptom in plain language. RC Map is a real crawler map with the data-quality problems its own reviews describe.

---

## 7. GitHub, in one place

**Usable as ideas**

- `NazarLysyi/brickscope` — MIT, current. Photo to Brickognize, then Rebrickable. The glue pattern, not an RC catalog.
- `tegos/parts-diagram-ocr` — MIT. Callout detection on raster diagrams. Legally useless until the drawing is licensed.
- `bryancostanich/OpenRC` — printable vehicles and a BOM that splits commodity hardware from proprietary parts. Stale since 2018. No license detected.
- `360er0/awesome-lego-machine-learning` — bibliography of the LEGO vision field. No license on the repo. Map only.
- `silasyeem/unfold` — 2 stars, no license. UX reference for steps plus voice.
- `idanyd/BrickMapper` — reads instruction PDFs (step boxes, then Brickognize). Closer to RC manuals than pile photos are. Maturity unknown.
- `J3vb/RC-Central` — MIT launcher for drift setup tools plus a gearing calculator. Not a parts system. The calculator is the reusable idea.

**Not a foundation**

- `stubbs41/rc_hub` — empty product shape. Do not treat the README schema as a head start that saves the catalog work.
- Sorter repos (OpenBlok, BrickSortingMachine, student Mask R-CNN projects) — controlled cameras, clean bricks, often stale or GPL. They do not transfer to a dirty chassis in a driveway.
- LDraw, LeoCAD, LDView, LPub3D — mature LEGO CAD. Useful only if RC meshes existed in that library. They do not.
- ESP32 and Arduino “RC car” repos — drive code. Irrelevant to repair.

---

## 8. Features worth adding that were not on the original list

Both passes derived these from manuals and from threads where the answers already cluster. They are more specific than “diagnose faults.”

**Identity before anything else.** There is no VIN. Identity is a stack: marketing name, revision (Slash 2WD vs 4x4, BL-2s vs VXL, B74.1 vs B74.2, Arrma 3S vs 6S, Tekno 2.0 vs 2.2), the code on the manual or the box (Traxxas numbers like 77096-4), ESC and motor brand (often not the car brand), radio and protocol, cell count, connector, and whether LVC is on. A photo of the manual cover or an ESC label is a plausible capture. A photo of a broken arm is the wrong first photo. “I’m not sure which version” has to be a real state that blocks part recommendations.

**The failures people actually ask about**

- No drive, or one side only: slipper, spur, mesh, dogbone, diff, hex pin.
- Click or grind under power: mesh, broken spur teeth, diff, a rock in the motor, a bent shaft. Mesh is a feel. Teach the check. Do not invent a thousandth-of-an-inch gap.
- No steering or twitchy steering: servo horn, servo saver, dual rate, trim, binding, a drowned servo. Check the radio before the gearbox.
- Cuts out or cogging: LVC, a puffing pack, gearing, motor temp, sensor wire and hall board. A lot of “bad motors” are a cheap sensor wire.
- Diff rebuilds: oil weight, seals, cross pins, and a tiny BOM. The exploded poster is not the guide.
- Bearing kits: sell the kit for the model, and also show the sizes (5×10×4 and similar) so a shop can substitute. Seal versus metal shield matters for crawlers versus bashers.
- Driveshaft pins and CVs: easy to lose, model-specific.
- Radio binding and failsafe: dangerous if throttle failsafe is wrong. Link the radio manual.
- ESC calibration and firmware: deep-link Castle, Hobbywing, Traxxas, or Spektrum. A firmware update can wipe the profile. Do not reimplement the programmer.
- Connector families: IC3/IC5, EC3/EC5, Traxxas iD. The wrong plug can hide telemetry.
- Waterproofing: “waterproof” on a basher does not mean the sensor wire survived a pressure wash. Say what not to spray.
- Class changes the catalog. Crawler brass and portals are a different ecosystem from RPM arms, which are a different ecosystem from race springs and sway bars.
- Run log and maintenance: which pack, which surface, what broke, when the center diff was last opened. The second repair should be faster than the first. This is a log, not a social network.
- Discontinued models. People still run them. “We don’t list it” is a bad answer. “Here is the last official diagram” is the answer, with substitutions marked as community knowledge.
- Nitro is its own tree (fuel, glow, needles, clutch). Leave it out of an electric v1.

**Gearing and setup sheets** are deterministic or already productized by So Dialed. Link or ignore. Do not fold final-drive ratio into a language model.

---

## 9. What will stay hard

**Taxonomy.** Store the manufacturer’s number as the primary key. Attach a cross-reference only when a human or a published fitment note confirms it. Do not let a model infer that an arm fits.

**Revisions.** Horizon’s viewer takes a full PID. The key is the orderable vehicle, not the nickname. A vision model that says “Slash” has not identified a part.

**Counterfeits and “compatible.”** No official authenticity API turned up. Deep-linking a factory number to an unvetted marketplace listing can put a soft spur in the car. Prefer the manufacturer and authorized dealers. Name the aftermarket brand when a hop-up is actually standard (Pro-Line tires, a bearing by size). Traxxas has already objected to unauthorized sellers and to model-name marketing.

**Local inventory.** AMain can see AMain. rcMart says its shelves are a subset. Independent shops are a phone call. A v1 that shows “in stock near you” without a partnership will be wrong, and wrong stock burns trust faster than a missing feature. The honest feature is shops that sell this brand, a last-verified date, the part number, and a call button.

**Closed telemetry.** Voltage sag, motor temp, and ESC errors sit inside vendor apps. There is no public log API. Ask the user to read the gauge.

**Forums as a corpus.** The same LED produced “recalibrate” and “that ESC is dead, warranty it.” Averaging those replies is confidently wrong. iFixit’s own launch discussion treated unconsented community text as a problem. Retrieval over guides you have the right to use, with a path back to the forum for novel questions, is the safer shape. So Dialed at least names its sources and says user chats are not training data.

**Diagram licenses.** Hotspot coordinates copied off a PDF are still their diagram. Deep-link the official viewer, become a dealer with permission, or redraw under a license. RCScrapyard shows the demand for old art and also shows the ditch.

---

## 10. A v1 that both passes support

Pick cars people actually break and can buy parts for online. The second pass names a practical slice: Traxxas Slash, Rustler, Maxx, and TRX-4, plus Arrma Gorgon, Kraton, and Senton, plus Axial SCX24 or SCX10. The high pass adds the rule that makes that slice safe: exact revision is required, and “I’m not sure” blocks the SKU.

The loop:

1. Identify the vehicle by product code, a short visual picker, or OCR of the manual cover. Do not promise universal photo ID.
2. Store the electronics separately from the chassis: ESC, motor, servo, radio, battery.
3. Ask what it is doing in the words people already use: no throttle, stutter, clicks, pulls, stripped spur, torn driveshaft, wet electronics.
4. Show a short reviewed checklist for that symptom on that family. Include the LiPo LVC check whenever the symptom is “it stopped.” Link the manufacturer’s support page. If the version is unknown, stop at the inspection.
5. If the checklist names a part, show the official number in large type and deep-link the official exploded view plus Horizon, Tower, or AMain search. A local counter can use the number even when stock is unknown.
6. Tracks: link So Dialed, RCGuides, ROAR, or RC Map with the source and a “confirm before you drive” line. Do not seed a second unmaintained map in v1.
7. TTS is a button that reads the current reviewed step.

**Later, in the order the data allows**

1. Revision diffs in the style of rcparts.app, starting with a kit someone can verify by hand.
2. Bearing and hardware cross-reference where the manual prints the size.
3. A garage and maintenance log.
4. Dealer accounts so add-to-cart is licensed.
5. Narrow vision: manual-cover OCR, spur tooth condition, a swollen pack. Not “name this nylon chunk.”
6. Voice conversation over the reviewed tree only.
7. AR only after the phone guide is already right, and only on a chassis you can recognize. Otherwise it is a tracking demo.

**Leave alone**

- A race-setup chatbot. So Dialed is there.
- A Brickit clone that photographs a crashed car and emits a cart.
- Generated LiPo or nitro instructions.
- A scraped copy of Horizon’s hotspot viewer.
- Air and boat in v1. They showed up as adjacent catalogs (Pro Boat, E-flite, flying fields, ponds) and they are a second and third taxonomy.

If only three bets are worth making: version-accurate identity, a symptom tree that is allowed to say it does not know, and a place layer that admits it is a directory of other directories.

---

## 11. Decisions still open

The research does not pick these. They change the first slice.

1. First user. The corridor where diagrams and carts already exist is a basher or trail owner with a Traxxas or Arrma/Axial RTR. Club racers already have So Dialed and, in a small way, rcparts.app. Toy-grade cars often have no parts tree at all.
2. Where “local” means. US points at Horizon, Tower, and AMain. The UK has Logic RC’s exploded-view index and BRCA clubs. Hong Kong has rcMart. A first country is an integration choice, not a skin.
3. First session. The loop above is a phone in the garage: large part number, a call button, a step read aloud. The official diagrams are also usable on a laptop. AR and a bench scanner are not the first session.

---

## 12. What the Composer pass changed

Composer (composer-2.5) reached the same headline: no product does the whole job, Brickit does not transfer, and the wedge is model identity plus a symptom tree plus a real SKU. Its positioning line is the cleanest of the three: RCGroups plus Horizon’s parts finder plus RC Map, with iFixit-style trees and a garage log.

### Findings only Composer documented

These are page claims from its report, same standard as the other marketing numbers.

- **RC Crash Crew’s catalog**, not only its map: https://rccrashcrew.com/catalog claims **19,915 parts**, **4,416 models**, **322 brands**, and fit-confidence labels, with search behind an account. The Grok passes described Crash Crew as a community pin map and missed this catalog. It does not create a public BrickLink. It does mean a proprietary cross-brand fitment graph already exists, and “nobody has a catalog” was too strong.
- **SetupRC** (https://setuprc.com/vehicles) claims **841** vehicles in a racing spec database. Another occupied comparison surface, still not a repair path.
- **RC Setup Lab** (https://rcsetuplab.com/tools/rc-troubleshooter/) and **Shock & Servo** (https://shockandservo.com/guides/why-is-my-rc-car-not-working) are published symptom checklists. They are closer to a basher diagnosis product than So Dialed is. They are articles, not an app tied to a BOM.
- **ARFixIt** (https://arfixit.co/) is an early-access Android overlay for appliance repair, aimed at brands. Different from the FixItXR hackathon and from JigSpace. Still not RC.
- A Hacker News thread (https://news.ycombinator.com/item?id=27693560) has Brickit founders describing **on-device** inference. The Grok passes left on-device versus cloud unstated.
- **RC Garage** has an App Store listing (https://apps.apple.com/mw/app/rc-garage/id6754534337): vehicles, maintenance, spare inventory, thin ratings. The Grok pass only had the unverified RC Garage Pro landing page.
- **NCR Hobby / RacerRC** is an Android listing that claims collection, parts, a marketplace, and a map. Maturity was not verified.
- **Traxxas EZ-Peak Live** is the charger app for iD packs.
- GitHub extras: BrickStore (GPL-3.0 BrickLink inventory), BricklinkSharp, and `buildinginstructions.js` (Unlicense). Useful LEGO commerce glue, not an RC catalog.
- Extra feature ideas worth keeping: a radio-protocol matrix (DSMR vs SLT vs FHSS), a consumables kit (bearings, screws, fluids) per model, and a structured handoff to the forum when the tree stops.

### What Composer missed

- **So Dialed.** Both Grok passes treated it as the live RC AI product (setup, not break-fix, 700+ cars, no photos, $19.99/year). Composer never mentions it. That is the largest hole in the Composer pass. The “no AI mechanic” reading is wrong. The “no break-fix AI that ends in a SKU” reading is still right.
- Traxxas’s actual LED code book (solid green vs solid red as the LiPo cutoff), Spektrum’s connector trap, and the Jenny’s RC trademark fights.
- The demand that an unknown kit revision block the SKU.
- GitHub projects the Grok passes found and Composer’s broader search did not: `rc_hub`, OpenRC, `parts-diagram-ocr`, RC-Central.
- ROAR, BRCA, LiveRC, and the Horizon/Tower shared Demandware catalog. Composer marked Tower as not deeply fetched.

### Where Composer is the weaker technical read

It treats the 2023 *Sensors* Brickognize paper (Mask R-CNN, 76 brick types, synthetic piles) as the mechanism of brickognize.com. The Grok passes kept those separate. The paper is a Girona/Tramacsoft detector. The site, per the author’s 2023 interview, is embedding search over a long catalog (ConvNeXt-T). Composer’s reverse-engineering table repeats the blend. Use the Grok split.

Reddit is marked “not fetched live.” Community evidence in the Grok passes is specific threads with contradictory diagnoses. Prefer those when the claim is “forums already disagree.”

### What this does to the v1

The checklist, the part number, and the deep link still stand. Two adjustments:

1. Study RC Crash Crew’s fit labels and rcparts.app before building a compatibility graph. Partner, link, or license. Do not start a third catalog from zero without looking at the one that already claims twenty thousand parts.
2. Read RC Setup Lab’s trees as prior art for the symptom list. They are generic on purpose. The product value is still attaching a tree to one kit revision and one official number.

TTS can ship in the same release as the checklist, as a button that reads the reviewed step. Composer parks voice in a later version. The dependency is the script, not a new model.
