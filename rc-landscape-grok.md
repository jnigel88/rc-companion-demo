---
cursor:
  subagentId: "bc-0011558f-330f-53df-955a-4c0dc11e42b1"
---

# RC companion product landscape

**Model:** Grok 4.7
**Research date:** 14 October 2026
**Scope:** Research only. This document does not specify a build, a clone, or a way to copy a proprietary app.

**Direct answer:** No single product found in this pass does what James described. The jobs are real and already split across manufacturer diagrams, a few big retailers, race-body track lists, electronics vendor apps, and forums. The LEGO stack (photo recognition, a shared part catalog, and a parts marketplace) is the closest *shape* of product, and it works because LEGO parts are standardized. RC parts are not. A useful v1 is a garage, a cautious fault guide, and deep links to the part number and the shop. Photo identification of broken parts, AR assembly, and live local-shop inventory are later problems, and some of them may stay hard.

Sources below are pages and GitHub API records retrieved on this date. Marketing numbers (accuracy, catalog size, market dollars) are quoted as claims, not as measurements this research verified.

---

## 1. How to read the market

### What hobbyists already do when something breaks

The diagnosis layer is mostly people, not software. A July 2026 thread on r/Traxxas, “Help please. Loud clicking noise when accelerating,” shows the pattern in one place: the driver replaced a spur gear, the car clicked under throttle, and commenters split among gear mesh, a stripped gear, a rear or center differential, a loose wheel, a bent motor shaft, a bad bearing, and a slipper that was too tight. One commenter even distinguished “metal diff gears” from a plastic spur. Source: https://www.reddit.com/r/Traxxas/comments/1ur3lgl/help_please_loud_clicking_noise_when_accelerating/

A June 2026 r/NitroRC thread, “What’s wrong with my car,” shows the same loop on video: one person sees a wheel that is not driven, another names a stripped gear or a loose slipper, and another points the owner at Traxxas exploded views and a transmission teardown. Source: https://www.reddit.com/r/NitroRC/comments/1ttmrk5/whats_wrong_with_my_car/

Nitro starting problems on RC Talk are a checklist the community already recites: fuel visible in the line, prime with a finger over the exhaust stinger, glow plug, factory needle settings, air leak, flooded engine. Source: https://www.rctalk.com/forum/threads/cant-get-traxxas-nitro-slash-to-start.135024/

Water and electronics are treated as a parts-replacement decision, not a miracle repair. On an older RC Talk thread about a Traxxas E-Maxx that smoked after water, replies say replace what smoked, note the model is discontinued, and warn that some T-Maxx parts interchange and the chassis does not. Source: https://www.rctalk.com/forum/threads/help-traxxas-e-maxx-brushless-repairable.132387/

That is the product people are improvising: name the vehicle version, listen to the symptom, isolate one assembly, open the exploded view, buy a numbered part. Software has automated pieces of this. It has not joined them.

### Money in the category

Paid market summaries do not agree with each other, and none of the ones retrieved here are an audited industry association. Treat them as low-confidence marketing estimates:

| Source | What it claims for 2025 | URL |
| --- | --- | --- |
| Dataintelo, radio remote-control toys | $4.08 billion, cars and trucks 42.5% of that | https://dataintelo.com/report/radio-remote-control-toys-market |
| Dataintelo, remote-control toys (broader) | $7.6 billion | https://dataintelo.com/report/remote-control-toys-market |
| MarketIntelo, RC cars | $3.2 billion, hobby-grade 45.2% | https://marketintelo.com/report/rc-cars-market |
| Growth Market Reports, RC cars | $2.52 billion | https://growthmarketreports.com/report/rc-car-market |

The spread ($2.52B to $7.6B depending on whether planes, boats, and toy-grade cars are inside the box) is large enough that a product decision should not rest on these figures. What the pages do agree on, at the level of a vendor slide, is that Traxxas, Horizon Hobby, Associated, Tamiya, Kyosho, and Arrma/Axial are named competitors, and that replacement parts and upgrades are a recurring spend around the car. That second point matches how the retailers below are built.

A harder, primary signal of community size: the RCGroups homepage, fetched 14 October 2026, displayed **861,942 members**, **3,955,721 threads**, and **47,164,893 posts**, with 20,865 users active at that moment (most of them guests). Source: https://www.rcgroups.com/index.php — RCGroups covers planes, drones, cars, and boats, so this is not a car-only census.

### Who already owns the brands and the diagrams

Horizon Hobby’s own history page says Team Losi merged with Horizon in 2000, and that in 2018 Horizon bought Hobbico’s assets, bringing Arrma, Axial, RealFlight, and the retailer Tower Hobbies under Horizon. Sources:

- https://www.horizonhobby.com/hh-our-history/
- https://www.towerhobbies.com/tower-hobbies-history/
- Brand list including ARRMA, Axial, Team Losi Racing, Spektrum, Pro Boat, Duratrax: https://www.horizonhobby.com/brands/
- Trademark page (Spektrum mark used with permission of Bachmann Industries): https://www.horizonhobby.com/trademarks-page/

That ownership matters. Horizon, Arrma, and Losi diagrams are not three independent catalogs. They are one company’s parts business, plus licensed or sister brands. Traxxas, Team Associated, Tekno, Tamiya, Kyosho, HPI, XRAY, and Yokomo sit outside that group and publish parts their own way. There is no LEGO-style neutral catalog that all of them feed.

---

## 2. LEGO reconstruction analogs

LEGO is the right analogy for the *loop* (see parts, name them, know what you can do, buy what you lack). It is a poor analogy for the *data*. One geometry system, public part numbers, and a marketplace of stores with live inventory are why these products exist. RC does not have that substrate.

### 2.1 Brickit

**Official pages**

- Home: https://brickit.app/
- About / technology: https://brickit.app/about/
- Pockets inventory: https://brickit.app/pockets
- iOS listing: https://apps.apple.com/us/app/brickit-your-brick-collection/id1477221636
- Investor narrative (founder Leo, Yandex background, started 2018): https://jj.capital/portfolio-startup-case-brickit
- June 2022 press release: https://www.prweb.com/releases/brickit-the-killer-app-for-lego-enthusiasts-just-got-smarter-850610642.html
- Early user walkthrough (July 2021): https://appleinsider.com/articles/21/07/03/how-to-identify-a-pile-of-lego-on-your-iphone

**Who it is for.** The about page says the core audience is children 3–7 and their parents, and that the app is also for anyone with bricks. The App Store listing widens that to families, collectors, and adult builders. It is explicitly not an official LEGO product.

**User flow, as published.**

1. Scatter bricks and photograph the pile from roughly above (AppleInsider, 2021: about two feet up, edges of the pile in frame).
2. The app names pieces it can see and counts them. The 2021 write-up says the count is imperfect and that the app wanted on the order of 150 bricks before it would suggest a build.
3. It proposes builds that fit the detected pile, and it warns when pieces are missing. In 2021 the advice was to find a substitute in the pile, not to buy the missing piece.
4. Step instructions include a parts strip. Tapping the scan thumbnail highlights where the needed pieces sit in the photo.
5. A separate “find this part” mode: pick a catalog part and the app highlights it in the photo.
6. Pockets: scan batches into numbered bags. The app then knows which bag holds a shape and how many. The Pockets page says you can export the collection to a site such as Rebrickable.
7. A Collect path (2021) lets you declare sets you own so the app knows bricks that were not in the photo. It does not rebuild the official set; it suggests other things those bricks can make.
8. 2022 press release: users can submit their own creations; Brickit turns them into instructions. The same release claims a detection success rate “as high as 92%” and says the app asks users to correct mistakes.
9. Monetization on the App Store page: free, with Brickit Pro as an auto-renewing subscription for “advanced features.” This research did not retrieve the current price. There is also a one-time “Brickit for Classes” variant with social features removed.

**What the model appears to do.** The about page is the primary technical statement, and it is short:

- They generate large numbers of synthetic 3D renders of *piled* bricks and train a recognizer on those renders.
- They correct errors.
- They then train on real photos users send.
- The published capability is “1600 of the most common bricks,” including from small visible fragments.

That is a detector-plus-classifier story aimed at clutter, not a lookup of one isolated part. The 2022 release adds an active-learning loop (user corrections). No architecture, training-set size, or evaluation protocol was published on the pages retrieved. The 92% figure is a press claim. Inferred, not stated: bounding boxes or heatmaps must exist, because the product highlights a piece inside the photo. Inferred: build suggestions are a second system on top of recognition, matching a detected multiset of parts to a library of instruction files. The about page does not say whether those instructions are hand-authored, generated, or both. The 2022 release says user-submitted creations are transformed into instructions, which implies some instruction-generation step, but not how it works.

**What it does not do.** The current home page and about page do not sell missing bricks. Buying the gap is a Rebrickable / BrickLink / BrickOwl job. Brickit’s Pockets export is the bridge, and it is a file handoff, not a cart.

**No Brickit patent turned up.** Searches for a Brickit patent returned LEGO’s own toy-recognition patents instead (section 2.8). Do not treat those patents as a description of Brickit’s system.

### 2.2 BrickScan (formerly BrickMonkey)

**Pages**

- https://brickscan.com/
- Legacy host that now says the rename: https://brickmonkey.app/
- Export: https://brickscan.com/export-collection/
- Import limits: https://brickscan.com/import-collection/
- Comparison written by a third app, brick'em: https://brickem.io/blog/brickscan-vs-brickit

**What the site claims.** Photo identification of “16,000+ figures and 76,000+ parts,” one item at a time, aimed at resellers and collectors. Site counters: “100,000+ users,” “15M+ scans,” 4.9 App Store rating. These are the site’s own figures.

**Flow.** Photograph one minifigure or part. Get an ID. Copy it, or export scans as BrickLink XML or CSV into BrickStore, Bricqer, BrickTrac, Excel, or a BrickLink inventory upload. Import of an existing BrickLink XML is capped, on their help page, at 5,000 entries at once and 20,000 entries on the account, with prices read as USD. “Smart Build” is about completing a minifigure (head, legs, hair), not about inventing a model from a pile.

**Commerce link.** brick'em’s comparison says BrickScan shows BrickLink sold-average prices for the past six months. That sentence is a third-party claim; BrickScan’s own marketing page retrieved here talks about value and XML export, not about the price window. Uncertainty: confirm the six-month window inside the app before relying on it.

**Why it matters for RC.** This is the closer cousin to “what part number is this?” Brickit answers “what can I build from this pile?” BrickScan answers “what is this one object, and can I list it?” RC replacement parts look more like the second question, except the object is usually still bolted into a car and the number depends on the chassis revision.

### 2.3 Brickognize

**Pages**

- App: https://brickognize.com/
- About: https://brickognize.com/about
- API docs shell: https://api.brickognize.com/docs (the Swagger UI failed to load its OpenAPI file when fetched)
- Author interview, Casa de Bricks, December 2023, with Piotr Rybak: https://casadebricks.com/the-magic-of-brickognize-for-automatic-lego-sorting-machines/
- EuroPython 2022 talk listing (classification vs detection vs metric learning): https://programme.europython.eu/europython-2022/talk/DZZ8X9/
- Author’s own request example on Reddit: https://www.reddit.com/r/learnpython/comments/11pa4gz/brickognize_api/

**What the homepage claims on 14 October 2026.** “125 k” catalog size, “98.5%” accuracy, “0.7 s” search time. The about page still calls it an early beta for parts, minifigures, sets, and sticker sheets, contact piotr.rybak@brickognize.com. The accuracy claim has no published test set on the pages retrieved.

**How the author says it works (2023 interview, not a paper).** This is the clearest public mechanism description in the LEGO vision set:

- A closed-set classifier needs many photos of every part. At ~80,000 parts that dataset does not exist.
- He instead trained an image *search* encoder: the model learns whether two images are the same part, then stores a vector per catalog item. A query photo is encoded and matched to the nearest vectors.
- He said he needs at least two images per part, prefers more, mixes his own photos with LDraw renders, and that a thin sample becomes a “fuzzy” vector the encoder can still generalize from.
- Catalog growth he stated: about 12,000 parts, then about 60,000 by the interview. The homepage’s “125 k” is later and may include sets, minifigures, and stickers. Uncertainty: the homepage does not define the unit.
- Model he named: ConvNeXt-T, about 28 million parameters, trained in PyTorch Lightning on an A100 for a few hours, served on a small CPU box at OVH. He said other modern vision backbones would be comparable. That is a 2023 statement. It may have changed.
- He said plain bricks that differ only by length (2x3 vs 2x4) are surprisingly hard, and that users mostly ask about decorated or rare parts, which are easier.
- Planned seller features he named: multiple bricks in one photo, save to an account, export to BrickLink, then mobile apps. Whether those shipped was not verified here.
- Monetization he described: free for casual use, paid accounts planned, pricing not set in that interview.

**API shape, from the author and from downstream code, not from a working Swagger fetch.** `POST https://api.brickognize.com/predict/` with multipart field `query_image`. Clients in the wild read JSON `items[]` with `id`, `name`, and `img_url`. A GitHub client (section 3) treats those IDs as BrickLink part IDs and warns that about 13% of them differ from Rebrickable part numbers. That alias problem is itself a lesson for RC: even inside one toy system, “the” part number is not one string.

**A paper that is easy to confuse with the product.** Search results surface “Brickognize: Applying Photo-Realistic Image Synthesis for Lego Bricks Recognition with Limited Data,” summarized at https://exa.ai/library/publication/zwx427bbtpy . That summary describes Mask R-CNN trained on synthetic CAD renders plus few-shot fine-tuning. It is not the same design Piotr described in 2023 (metric search with ConvNeXt-T). Do not merge them. This research did not retrieve the paper PDF or confirm the authors.

### 2.4 Rebrickable

**Pages**

- Build search: https://rebrickable.com/build/
- Build engine: https://rebrickable.com/help/build-engine/
- Building a specific set or MOC: https://rebrickable.com/help/building-lego-set-mocs/
- Buying parts: https://rebrickable.com/help/buy-parts/
- BrickLink round-trip: https://rebrickable.com/help/bricklink/
- API: https://rebrickable.com/api/v3/docs/?key=

**The data model, in their own words.** A user’s buildable collection is computed from set lists, loose part lists, lost parts, and assembled sets. The user marks which lists may be consumed. A build target is an official set, a MOC, or a custom list.

**Matching rules that are the actual product.**

- Color sensitivity: Exact, Similar, or Ignore. Pro can customize color matching further. The help page does not publish the Pro price.
- Part relationships: ignore printed vs plain, mold variants, or “alternate” parts that usually substitute and sometimes do not.
- Ignored categories: minifigure parts, stickers, books, non-LEGO.
- Spare parts in a set inventory are not required to build that set, but spares you own can be used as source parts.
- Some interior parts are tagged “no color / any color.”

**The commerce join.** Rebrickable does not sell parts. The buy-parts help page says it reads external store inventory, “accurate to within 24 hrs or less,” and lists BrickLink, BrickOwl, and ToyPro. Entry points: all parts of a set, only the parts you are missing, one part, a custom list, or “lost parts” from sets you own. Large lists rarely exist in one store, so there is a multi-store buy. You can push the missing list to a BrickLink wanted list, or export XML. After the order arrives you import the BrickLink order back so the collection stays true. There is also a “suggested sets” tab: official sets still on sale that cover as many missing parts as possible, which is often cheaper than single parts.

**API boundary, from their docs.** v3 exposes the LEGO catalog (sets, parts, minifigs) and, with a user token, the user’s collection. It explicitly does not include Rebrickable MOCs (removed because of scraping), and it does not include prices, which they say are owned by BrickLink or BrickOwl. Rate abuse gets you banned; one downstream app serializes calls at about one per second for that reason.

This is the system Brickit does not replace. Recognition without this layer does not become a purchase.

### 2.5 BrickLink and Studio

**Pages**

- LEGO Group acquisition announcement, 26 November 2019: https://www.lego.com/en-us/aboutus/news/2019/november/lego-bricklink
- Studio download: https://www.bricklink.com/v3/studio/download.page
- Older Studio intro (wanted list and Buy All): https://www.bricklink.com/v2/build/studiohelp.page
- Upload a model as a wanted list: https://studiohelp.bricklink.com/hc/en-us/articles/5705925898135-Upload-as-a-Wanted-List
- Export CSV/TSV or wanted-list XML: https://studiohelp.bricklink.com/hc/en-us/articles/6502197862679-Exporting-to-other-formats
- Import a wanted list back as a counted palette: https://studiohelp.bricklink.com/hc/en-us/articles/6483161921303-Importing-a-Wanted-List

**What Studio is.** A Windows/Mac CAD app for virtual LEGO, integrated with the BrickLink catalog. Snap-to assembly, colors the catalog says are unavailable, a running cost estimate, an instruction maker (step editor, then page design), and a button that uploads the model’s parts as a BrickLink wanted list. The user then checks condition, max price, and quantity, and uses BrickLink’s store search (“Buy All” in the older help) to find shops that can fill the list. Submodels can be uploaded separately.

**Why the acquisition matters.** In 2019 the LEGO Group said it was buying BrickLink Ltd from NXMH, including Studio and the marketplace. The press note said more than 1 million members. License Global’s write-up of the same announcement said more than 10,000 stores in 70 countries: https://www.licenseglobal.com/toys-games/lego-acquires-bricklink . Those store counts are 2019 figures.

**The ID mess, documented by a third-party app rather than by BrickLink.** TravisL12/brick-review (https://github.com/TravisL12/brick-review) states that Brickognize returns BrickLink IDs, Rebrickable inventories are keyed by Rebrickable numbers, and a `PartAlias` table built from Rebrickable `external_ids` is required because “13% of them differ.” Color IDs are a second alias table. Any RC catalog that ingests Traxxas, Horizon, Associated, and Amain will meet the same problem on day one: one physical spur gear, several strings.

### 2.6 BrickOwl

https://www.brickowl.com/ describes itself as “the largest independent LEGO marketplace” after BrickLink, with a catalog search by item number or set number, a wishlist, and many stores. Rebrickable’s buy-parts page lists it next to BrickLink and ToyPro. It is the existence proof that a second marketplace can sit on the same part ontology. RC does not have a first marketplace of that kind, so a second one is not the gap.

### 2.7 Official LEGO Builder

- Help: https://www.lego.com/en-us/service/help-topics/article/lego-builder-app-3d-building-instructions?opt-out-modal=show
- Play listing: https://play.google.com/store/apps/details?hl=en&id=com.lego.legobuildinginstructions

Official instructions only. Scan a QR on the booklet or search a set number. Modes, depending on the set: 3D (zoom and rotate), PDF, Build Together (a PIN, builders take turns on steps), and Missions for some themes. A LEGO account saves progress and a count of bricks built. The help page retrieved does not describe AR, part recognition, or a store. A February 2026 Reddit thread claims newer BrickLink Designer Program sets are PDF-only inside Builder; that is a user report, not LEGO policy: https://www.reddit.com/r/lego/comments/1rgkklh/do_bricklink_set_instructions_actually_end_up_on/

Builder is the “interactive assembly guide” bar for a consumer toy. It is licensed first-party 3D, not a scan of a paper exploded view.

### 2.8 LEGO’s public recognition patent (adjacent, not Brickit)

US10213692B2, “System and method for toy recognition,” assignee LEGO A/S, inventors including Marko Velic, priority 10 November 2014, filed 9 November 2015, granted 26 February 2019. https://patents.google.com/patent/US10213692B2/en

A continuation-style publication is US20210205707A1: https://patents.google.com/patent/US20210205707A1/en

At the level the patent itself summarizes: a camera, a learning database of toy-element images (including images taken in varied conditions and transformed), a convolutional network that detects and classifies construction elements in a still or a video frame, and a match against a central database or web source. The text names LEGO-style modular elements as the example and says the same approach could apply to other interconnecting toy systems. It is toys-to-life recognition, not a pile-to-build app, and it is not a Brickit filing.

Useful as a boundary, not as a recipe: a large company already patented CNN recognition of standardized construction elements tied to a catalog. RC parts are a different object class (branded, sparse, revisioned). Nothing retrieved here suggests a hobbyist app can treat that patent as a how-to, and nothing retrieved here maps its claims onto Brickit.

### 2.9 What transfers to RC, and what does not

| LEGO mechanism | Transfers? | Why |
| --- | --- | --- |
| Photograph a loose part, return a stable ID | Only for a few RC cases | A loose bearing, a servo, or a body might be recognizable. An A-arm usually is not, until you know the car and the year. Brickognize’s author already found that near-duplicate shapes are the hard class. RC suspension arms are that class across years. |
| Photograph a pile, highlight the piece you need | Weak | RC parts are large, greasy, and few. The pain is not “find the 1x2 in the bin.” It is “is this the 2023 hinge pin?” |
| Synthetic 3D training from a complete CAD library | Does not transfer as data | LDraw is a community geometry library of essentially the whole system. RC manufacturers do not publish equivalent open meshes of every spare. |
| Color as a separate field from the mold | Barely | RC colors are cosmetic (anodized hubs, body paint). Structural identity is brand + part number + revision. |
| “You own these parts; here is what you can build” | Different job | RC owners do not remix a Slash into a new vehicle from a parts multiset. They replace a broken part or choose an option part. |
| Missing-parts list to a multi-store buy | The valuable pattern | Once you have a part number, send the user to Horizon, Amain, the manufacturer, or a local dealer. The LEGO version works because store inventory is online and keyed by the same ID. Local hobby shops mostly are not. |
| One ID namespace | Does not exist | Traxxas, Arrma, Associated, Tekno, Tamiya, and aftermarket (Pro-Line, RPM, Hot Racing, Injora) each number parts their own way. Bearings sometimes use an ISO size (5x11x4) that crosses brands. Everything structural usually does not. |
| Instruction generation from a digital model | Only if the OEM already has the 3D | LEGO Builder and Studio have it because the model *is* the product. RC “instructions” are paper or PDF manuals with an exploded drawing at the back. |

---

## 3. RC products and sites

### 3.1 Exploded diagrams and parts finders

These are the current “what’s broken, which bag do I buy?” tools. They assume the user can already see the part on a drawing.

**Horizon Hobby shoppable exploded view.** https://www.horizonhobby.com/interactive-exploded-view?pid=ARA4202V3T1

The page title is “Interactive Exploded View Part Lookup.” Instructions on the page: after the diagram loads, zoom with buttons, wheel, or pinch, drag to pan, click a part number for more information. The sample `pid` is an Arrma kit code. The static fetch did not include the diagram itself (it is loaded into the page). Inferred from the UI copy: part numbers are hit targets, and “shoppable” means those hits can open a product. The viewer vendor is not named.

**Arrma uses the same pattern.** https://www.arrma-rc.com/en/interactive-exploded-view?pid=ARA2104 and the  announcement https://blog.arrma-rc.com/news/interactive-exploded-views/

Arrma’s blog says an “Interactive Exploded View” button sits near the bottom of kit pages, alongside normal parts galleries, and points at an Arrma TV tutorial. The fetched viewer page says the diagram is in a frame (“Your browser does not support iframes”). Same zoom-and-click copy as Horizon. Given Horizon’s ownership of Arrma, this is best read as one parts-commerce widget on two storefronts, not two inventions.

**Losi exploded PDFs, hosted on Spektrum infrastructure.** Example: https://my.spektrumrc.com/ProdInfo/Files/LOS01004-PartsExplosion.pdf

The fetched PDF is a classic multi-language exploded view plus a parts table (part number, English, German, French, Italian) for a Mini 8IGHT, with option parts called out separately. This is the format most of the hobby still uses: a drawing with callout numbers, and a table that maps those numbers to SKUs.

**Traxxas Parts Finder.** https://traxxas.com/parts-finder and a model URL https://traxxas.com/parts-finder?rs_model=61418 which titled itself “Parts Finder | X-Maxx” and showed a price and the code 77096-4. The finder UI did not render in a static fetch, so the interaction model is not fully documented here. What is documented elsewhere:

- Traxxas manuals tell owners they can buy parts from Traxxas by phone or on traxxas.com, or from a local dealer to save shipping. Support line on the X-Maxx manual: 1-888-TRAXXAS, 8:30am–9:00pm Central, seven days, plus support@traxxas.com, and an on-site repair facility. Manual: https://traxxas.com/media/productattach/C-77096-4/2/77096-4-OM-EN-R02.pdf
- A retailer how-to (EuroRC, not Traxxas) describes downloading assembly PDFs (front suspension, rear differential, chassis, driveline, body) and matching a picture to a number: https://www.eurorc.fr/page/59/ — useful as a description of the user task, not as Traxxas documentation.

**Team Associated.**

- Parts search, with a discontinued toggle: https://portal.associatedelectrics.com/parts/search/
- Vehicle-scoped parts, a long list that includes current and discontinued kits (RC10B7, Rival, Reflex, Enduro, and many older B4/B5/SC10-era names): https://www.associatedelectrics.com/element/parts
- Dealer spare-parts browser with MSRP and an online price: https://dealer.associatedelectrics.com/teamassociated/parts/spare_parts/

The vehicle list is the important artifact. Associated’s own site treats “which car” as a tree of kit names and discontinued names. A photo of “a B6 buggy” is not a parts key. B6, B6.1, B6.2, B6.3, B6.4, and the D variants are separate rows.

**Tamiya.** Chassis parts catalogs, each with a PDF and a parts link: https://www.tamiya.com/english/rc/catalogs/index.htm

Retrieved chassis keys include TT-02, TT-02B, CC-02, DT-03, DT-04, TD2, TD4, XV-02PRO, MF-01X, TC-01, XM-01, BB-01, MB-01, BT-01, TA08-PRO, TRF421. Tamiya’s hop-up culture is chassis-platform based. That is the closest RC gets to a LEGO-like reuse graph, and it is still one brand.

**Kyosho.** Support tables per model with separate files for parts list, exploded view, quick start, maintenance manual, and full manual. Buggy index: https://kyosho.com/eng/support/instructionmanual/buggy/buggy_index.html — Legendary series (re-releases) with the same columns: https://www.kyosho.com/eng/support/instructionmanual/legendary/legendary_index.html

**Tekno.** Instruction PDFs include a spare and option list using TKR numbers, and they send the buyer to teknorc.com and to dealers. Example manual (NB48 2.2): https://www.teknorc.com/wp-content/uploads/2024/07/NB48_2.2_instructions_all_compressed-rev_02-compressed.pdf

The same file states the kit is for ages 14+, for use at a legal track, and that the radio must be checked before running. Broken-in-use parts are not warranted. Tekno does not, on the pages found, offer a Horizon-style shoppable viewer. The part number lives at the back of the build manual.

**XRAY.** A 2026 RX8 exploded-view PDF shows the race-kit style: every screw and clip has a printed number on the drawing, electronics are marked “not included.” https://d35o96uo5ccvjq.cloudfront.net/__files/web/documents/XRAY_documents/RX8_2026_documents/RX8%202026%20Exploded%20View.pdf?4ff52=

**HPI and orphaned brands.** HPI’s own current parts portal was not confirmed in this pass. What did turn up is RCScrapyard, a fan archive of exploded views across a very long brand list (HPI, Traxxas, Tamiya, Kyosho, Associated, Arrma, Axial, Yokomo, and dozens of dead brands). Example pages:

- https://www.rcscrapyard.net/manuals/hpi/hpi-e-firestorm-10t-10551-exploded.htm
- https://www.rcscrapyard.net/manuals/traxxas/traxxas-revo-2-5r-5310-exploded.htm

The archive is evidence that hobbyists already need old diagrams the manufacturer no longer features. It is also a copyright hazard. The drawings are manufacturer art. A new app should not scrape this site or republish the scans. Linking out, or hosting only diagrams under license, is the difference.

**Amain Hobbies.**

- Car and truck parts category, with an “In Stock In Store” heading on the fetched page: https://www.amainhobbies.com/rc-car-parts/c7303?fb=-141
- Traxxas parts-finder landing (E-Revo, Maxx, Rustler, Stampede, Slash, Sledge, TRX-4, TRX-6, UDR called out): https://www.amainhobbies.com/traxxas-parts/c1466
- Chico store page, with a “View Store Inventory” link, hours, and a statement of two distribution centers (Chico CA, Charlotte NC) plus two Chico retail fronts: https://www.amainhobbies.com/chico-ca/l165

Amain is the clearest US example of a national RC retailer that both mirrors factory parts trees and exposes *some* store-level stock. The inventory page contents were not fetched, so it is not proven here whether that stock is live per SKU or a slower flag. Either way, it is one chain, not the independent shop on a typical main street.

**rcMart.** Hong Kong retailer with two local shops (Mong Kok, Yau Ma Tei) and a Traxxas showroom. Their own page says the shops hold only part of the online catalog, and that pickup is for HK web orders. https://www.rcmart.com/retail-store-and-order-pick-up

**Tower Hobbies.** https://www.towerhobbies.com/ — Horizon-owned since 2018 (Tower’s history page). The homepage fetch showed brand merchandising (Injora for SCX24, SCX30, TRX-4M, Micro-B) and no store locator. Tower is an online catalog, not a local-inventory network.

**EuroRC and similar export shops** sell genuine parts against Traxxas numbers and teach the PDF workflow. They are not a diagnosis product.

**What was not found.** A cross-brand parts graph (“this RPM arm fits these Arrma versions and not those”). A counterfeit checker. An API that returns shelf stock for independent hobby shops. A consumer app that starts from a photo of a broken part and ends in a cart. Absence is not proof none exist; it is what this search returned.

### 3.2 Fault diagnosis and setup apps that are actually RC

**So Dialed, RC AI Mechanic.** https://www.sodialed.com/apps/rc-ai-mechanic?src=rc-settings

This is the closest live “AI mechanic,” and it is a setup advisor, not a break-fix app.

- Plain-language handling questions, tuned to a car and a track the user entered.
- Claims “700+” cars with kit settings, strongest on popular race kits. Classes named: 1/8, 1/10, 1/12, on-road, off-road, oval, drift, drag.
- Pinion and gear-ratio suggestions inside the chat.
- Remembers cars and prior conversation.
- Explicitly does not use the user’s saved setups in this app. The page says the AI Mechanic inside their separate RC Setup App does.
- Photos: “Not yet.”
- Price on the page: 10 free questions, then 3 more on any day you have run out; unlimited at $19.99/year in the US, or a one-time pack of 100 questions. iOS 15+ and Android, 13 languages.
- Training-data sentence: proprietary setup docs, public manufacturer data, and “other licensed or publicly-available data sources used by our AI provider (OpenAI).” Private user data “is never used for AI training.”
- Sister tools named on the same page: Gear Calculator Pro (FDR and rollout) and RC Setup App (setups, tests, races).

The hard problem they already solved is narrower than James’s list: race setup vocabulary (roll center, Ackermann, corner-entry steering) grounded in kit baselines, with a paid cap so the model is not an unbounded chatbot. They have not solved parts, diagrams, or “this plastic is cracked.”

**Traxxas Link.** https://traxxas.com/traxxas-link-app and the Play listing https://play.google.com/store/apps/details?id=com.traxxas.traxxaslink&hl=en

A telemetry and radio-tuning app for the TQi transmitter plus the Traxxas Link Wireless Module. Dashboard gauges (speed, voltage, RPM, temperature, and on some models grade and sidehill via an inclinometer), threshold warnings, min/max/average logs, a recording with sound, a 60-second instant replay, model profiles, LED modes on some cars. Some models (the page names Unlimited Desert Racer, E-Revo, and X-Maxx) send telemetry from the ESC without extra sensors; others need sensors. It does not diagnose a broken arm. It does tell you the pack voltage and the motor temperature while you still have the transmitter in your hand, which is the data a fault app would want and cannot get without this closed radio.

**Spektrum Dashboard.** https://play.google.com/store/apps/details?id=org.spektrum.dx2e_programmer&hl=en_US

Speed, motor or engine temperature, battery voltage, and Smart telemetry when the user has a DX3 Smart transmitter, a Bluetooth module (SPMBT2000), and a Smart receiver with Firma ESC and Smart battery, or a DSMR telemetry receiver. Same pattern: brand-locked, sensor-locked, not a repair guide.

**Castle Link 2 and B-LINK 2.** https://www.castlecreations.com/en/castle-link-pc-software-and-cables/b-link-2-bluetooth-interface-011-0181-00

Bluetooth interface plus a free iOS/Android app (and a Windows app from v1.1.0 that can talk to the dongle). Adjust ESC parameters, update firmware (internet required for the update), download logs on supported ESCs. Castle says it is not compatible with their Spektrum X-Bus or Futaba S.Bus2 telemetry links at the same time, and that it is for Castle-brand ESCs. They “cannot guarantee” older ESCs they made for Holmes, Traxxas, or HPI. That sentence is the compatibility trap in one paragraph: the same hardware family is not one software target.

**Hobbywing HW Link V2.** https://www.hobbywing.com/en/index.php/service/application?id=2 and the OTA programmer https://www.hobbywing.com/en/products/ota-programmer23

Phone app for Xerun and Ezrun car ESCs, plus Platinum aircraft and Seaking boat ESCs that work with their LCD program box. Parameters, firmware, operation data. The OTA Bluetooth box stores a log the phone can read within about 0–5 m, if the ESC supports it. Their support article on firmware updates is a warning label: airplane mode, Bluetooth on, no screen lock, phone about 2–3 feet away (closer can be worse), default password 888888, then recalibrate throttle because an update can wipe the profile. https://support.hobbywingdirect.com/hc/en-us/articles/27695474070035-ESC-Firmware-Update-OTA-LCD-Program-Box-Pro-or-Tunalyzer-and-HW-Link-V2

**SkyRC charger app.** https://play.google.com/store/apps/details?hl=en_US&id=com.skyrc.q200

Remote control of specific SkyRC charger SKUs, some of which need a Bluetooth dongle. A retailer page for the dongle also points a different app (“RC Gears”) at certain SkyRC ESCs: https://shop.robitronic.com/en/skyrc-bluetooth-dongle-sk600135-02

**Traxxas iD batteries.** https://traxxas.com/battery-basics

The charger reads type, voltage, and capacity from an iD pack and balance-charges by default, with Fast and Store modes. Non-iD packs fall back to manual chemistry selection, which is where their own charger manual says the fire risk lives (LiPo charged in NiMH mode). This is a closed identification system for one brand’s packs, and it is the nearest thing RC has to “scan the object and know the SKU.”

None of these apps share a garage. A driver with a Traxxas radio, a Hobbywing ESC, and a SkyRC charger already has three phone apps and three logins.

### 3.3 Vehicle comparison

**RC Car Compare.** https://rccarcompare.com/compare

A consumer comparator. The page says 71+ models, 181+ prebuilt matchups, brands including Traxxas, Arrma, Losi, Yokomo, MST, Team Associated, and Axial, and specs such as price, top speed, weight, drivetrain, motor type, and scale. Multiple cars at once, a shareable URL, and affiliate “best price” links. Categories called out: crawlers, monster trucks, short-course (they name Arrma Senton 3S BLX vs Traxxas Slash 4X4 VXL), buggies.

This is a real comparison product. It is small (dozens of models, not the whole market), it is buyer-oriented rather than owner-oriented, and the spec database is theirs. It does not diagnose or sell a hinge pin. For a new app, the honest reading is: a thin public comparator already exists, so “comparison” is not an empty field, and it is also not a moat.

### 3.4 Tracks and ride sites

These products find places. They do not agree on what a “place” is. A ROAR carpet track, a crawler trailhead, and a pond are different objects.

| Product | What it lists | What this pass actually saw | URL |
| --- | --- | --- | --- |
| ROAR track locator | US sanctioning body, club tracks | A results page of clubs with contact, address, and sometimes a website (example rows included 360v2, 997 RC, AMain Outback Raceway) | https://www.roarracing.com/track_locator.php and https://www.roarracing.com/track_locator_results.php |
| LiveRC | Live scoring and video for tracks that run LiveRC | A status board: live video, featured, racing, practice, idle. Not a “near me” tourist map | https://live.liverc.com/ |
| RCGroups places | User directory of car tracks | Continent counts on the fetched page: Africa 5, Asia 14, Europe 155, Oceania 19, North America 221, South America 12; United States 211 | https://www.rcgroups.com/places/7-rc-car-tracks |
| BRCA club finder (archive host) | UK clubs | A long club list with halls and postcodes; the handbook still points people at www.brca.org | https://www.archive.brca.org/clubs/find-your-local-club and handbook https://tawrccc.co.uk/wp-content/uploads/2026/02/2025-BRCA-Members-Handbook.pdf |
| Schumacher “Where to Race” | Same UK club idea, with BRCA | Map plus “contact them before visiting” | https://www.racing-cars.com/where-to-race-rc |
| EFRA | European federations, not a pin map | Member list (BRCA, DMC, FFVRC, AECAR, and others) and event entry via national bodies | https://www.efra.ws/ |
| RC Map | Crawler and trail spots, plus clubs and comps | Marketing page: places, hobby shops, saved GPS tracks, offline scoring, leaderboards. Play listing is crawler-forward (Axial, RC4WD, Vanquish, SCX10, TRX-4). iOS 3.7 from 7 ratings on the fetched listing. Reviews say it revealed local spots and, in one case, pinned a parking lot that was not a trail | https://www.rcmap.com/apps and https://play.google.com/store/apps/details?hl=en_US&id=com.rcmapio.app and https://apps.apple.com/us/app/rc-map/id6479915791 |
| RC Crash Crew places | Community map of tracks, bash spots, crawler courses, boat ponds, FPV fields | OpenStreetMap-based. Country/region counts were visible (for example US states were not in the first screen; Australia, Canada, and others were). Explicit warning that submitted spots are not guaranteed legal or safe | https://rccrashcrew.com/places |
| RC Track Finder | Community race-track directory, sorted by distance if you share location | Thin page: “Pulling the latest community directory.” Depth of the directory was not visible in the fetch | https://tf.crewshin.com/ |

Boat and air show up as adjacent, not as the core. RC Map’s App Store reviews include a request for a boat category. RC Crash Crew already has ponds and FPV fields. Horizon’s brand list includes Pro Boat and E-flite; Spektrum Dashboard also serves air radios. A car-first app can link these. It should not pretend a crawler pin file is a float-fly directory.

The gap is not “nobody lists tracks.” The gap is one map that a basher, a crawler, a drifter, and a club racer can filter, with hours, surface, power rules (brushless limits, LiPo punch rules, nitro), and a last-verified date. ROAR and BRCA are race clubs. RC Map is trails. They answer different Saturday questions.

### 3.5 Assembly guides, AR, and voice

**RC assembly** is still the PDF. Tekno, Kyosho, Tamiya, XRAY, and Traxxas all ship manuals as documents. Horizon/Arrma add a clickable exploded view on top of that, which is interactive and flat, not spatial.

**LEGO Builder** (section 2.7) is the consumer gold standard for 3D steps, and it exists because LEGO owns the 3D model of every set.

**iFixit** is the repair gold standard, covered in section 4. It is photo steps plus, since December 2025, a voice assistant. It is not an RC product. Searches did not turn up an iFixit-scale guide library for hobby RC.

**AR exploded views that are real, and not consumer RC:**

- JigSpace lets a viewer explode a 3D model with a slider, in the app or in a browser, and the company describes turning SOPs and OEM CAD (STEP, FBX, glTF, USDZ, STL, SolidWorks) into step procedures. If the OEM will not share CAD, they offer to model from photos. https://www.jig.com/help-center/exploded-views-in-augmented-reality and https://get.jig.com/
- Taqtile Manifest is an industrial work-instruction system: steps, spatially anchored notes, 3D, video, PDF bookmarks, used for Army vehicle maintenance among other case studies. https://taqtile.com/digital-work-instructions/ and https://taqtile.com/case-studies/us-army/

Both assume someone already has, or will pay to create, a 3D model and a procedure. That is the cost center. An RC app that promises AR assembly before it has licensed meshes is promising the expensive half.

**Voice.** So Dialed is text. FixBot is the product that actually shipped hands-free voice on repair content (section 4). Traxxas Link records dashboard audio so you can watch the track, which is a different “hands busy” problem. No RC-specific TTS repair coach showed up in this search.

### 3.6 Communities that already act as the diagnosis layer

| Place | Role | What was verified |
| --- | --- | --- |
| RCGroups | Long-form forums across cars, planes, boats; track directory | Homepage counters in section 1. Track directory in section 3.4. https://www.rcgroups.com/ |
| Reddit (r/rccars, r/Traxxas, r/NitroRC, and brand subs) | Fast symptom posts, often with video | Two 2026 threads quoted in section 1. A fetch of r/rccars about.json timed out, so a current subscriber count is **not** stated here. https://www.reddit.com/r/rccars/ |
| RC Talk | Older threaded repair help, including nitro and water damage | Threads cited above. https://www.rctalk.com/ |
| Traxxas.com community | Traxxas points owners at “thousands of registered members” and at phone support and a repair shop | Manual PDF cited above. The forum’s current size was not independently counted. |
| YouTube | The other diagnosis layer: mesh, diff, and binding videos | This pass did not retrieve channel subscriber counts. Do not treat memory of channel names as a source. The Reddit threads already show video-as-symptom. |
| Facebook groups | Widely used for local buy/sell and “what broke” | No group member counts were retrieved. Leave them out of any market-size claim. |
| Discord | Likely exists around Reddit and clubs | No official directory or member count was confirmed in this pass. |
| LiveRC | Race-day community, not repair | https://live.liverc.com/ |

A new app that answers the easy half of those Reddit threads (“check mesh, then the diff”) will be useful and will still be wrong often enough that it needs to show its reasoning and stop. The threads themselves are the evaluation set: one noise, six plausible parts.

---

## 4. GitHub and open source

Searches were GitHub repository search via the public API on 14 October 2026, plus web search. Star counts are the API’s `stargazers_count` that day. “Usable” means a stranger could run it for the RC jobs in this brief, not that the code compiles.

### 4.1 RC repair, catalogs, diagrams

**There is no mature open-source RC parts catalog or repair app in the results.** Queries for RC car parts and exploded diagrams returned hobbyist vehicle-control projects, not catalogs. The search `rc car parts OR "exploded diagram" hobby`, sorted by stars, had 31 hits; the top of that list was `jithu83/pyRcCar` (5 stars, Python, last push 2019, “control a hobby RC car”), which is drive code, not a manual. https://github.com/jithu83/pyRcCar

Repos that are actually about the hobbyist’s garage or the diagram:

| Repo | Stars | License | Last push | What it is | Usable for James’s app? |
| --- | --- | --- | --- | --- | --- |
| [stubbs41/rc_hub](https://github.com/stubbs41/rc_hub) | 1 | none detected | 2025-04-23 | Flutter app. README (from search snippet and repo metadata; homepage field `https://rc-hub.vercel.app`) describes Supabase auth, vehicles, parts inventory, interactive diagrams, and photo diagnostics. Tables named in the README snippet: `vehicles`, `parts`, `vehicle_parts`, `part_diagrams`, `diagnostics`, `media`. | No. A schema sketch and a prototype. No populated cross-brand catalog. No license. |
| [J3vb/RC-Central](https://github.com/J3vb/RC-Central) | 1 | MIT | 2026-09-30 | “Install & launch RC drift setup tools” (servo programmers, ESC config, radio software) plus a gearing calculator, tuning notes, and a garage. Python, PySide6, Windows/Linux, self-described beta. | A launcher for other vendors’ Windows tools, not a parts or diagnosis system. The gearing calculator is the reusable idea. |
| [bryancostanich/OpenRC](https://github.com/bryancostanich/OpenRC) | 131 | none detected | 2018-01-28 | Printable open-source RC vehicles: STLs, assembly notes, and a bill of materials. 28 forks. Description points at an old Google Group. | Usable as a single-vehicle BOM if you want to print that truggy. Not a multi-brand catalog. Stale since 2018. The BOM is the interesting part: ISO metric screws, bearings called out as 10x15x4 / 6700 and 5x10x4 / MR105, and then brand-specific tires (Losi LOSB7213) and shocks. That split is the real RC taxonomy. Example BOM: https://github.com/rdolbeau/OpenRC/blob/master/Truggy/BOM.md |
| [tegos/parts-diagram-ocr](https://github.com/tegos/parts-diagram-ocr) | 5 | MIT | 2026-06-05 | Detects callout numbers and grouping braces on raster exploded diagrams (OpenCV + EasyOCR) and writes a pan/zoom HTML viewer. Topics are automotive. Live sample: https://tegos.github.io/parts-diagram-ocr/sample.html | The closest reusable diagram code. It reads callouts; it does not know what a callout means. Pointing it at Traxxas or XRAY PDFs would copy their drawings into a derived database. License of the code is MIT. License of the drawings is not. |
| [M4RZ1P4N/RC-car-code-on-electro-mechanical-dynamics](https://github.com/M4RZ1P4N/RC-car-code-on-electro-mechanical-dynamics) | 2 | none | 2022-06-11 | SymPy script: type motor and battery, print estimated speed. | A calculator sketch, not a product. |

Also seen and not relevant to repair: `hshin-git/M5DriveControl` (ESP32 drive controller, 3 stars), `mindaugaskasp/esp32-rc-car-project` (2 stars), `slackhappy/rccar` (toy-grade 2.4 GHz PCB notes). Control firmware is a different project.

### 4.2 LEGO recognition and geometry

API search `lego sorter`, sorted by stars, returned 279 repositories. Top of that list:

| Repo | Stars | License | Last push | Notes |
| --- | --- | --- | --- | --- |
| [basicallysource/sorter](https://github.com/basicallysource/sorter) | 137 | none detected | 2026-01-18 | “A LEGO Sorting Machine.” Highest-starred sorter in this query. Maturity not reviewed beyond the API record. |
| [blokbot-io/OpenBlok](https://github.com/blokbot-io/OpenBlok) | 32 | MIT | 2023-03-31 | Identification and sorting. TensorFlow / CNN topics. Referenced as a pretrained option by `skolchin/lego-sorter`. Last code push is 2023, so treat the model as frozen. https://blokbot.io |
| [blazejkustra/lego-sorting-machine](https://github.com/blazejkustra/lego-sorting-machine) | 25 | none | 2020-02-15 | Student-era sorter. Stale. |
| [B-AROL-O/ARNEIS](https://github.com/B-AROL-O/ARNEIS) | 24 | MIT | 2026-03-30 | “Automated Recognizer, Network-Enabled, Items Sorter.” |
| [BrickSortingMachine/BrickSortingMachine](https://github.com/BrickSortingMachine/BrickSortingMachine) | 21 | GPL-3.0 | 2025-09-27 | Sorter software stack. GPL would matter if someone linked it into a closed app. |
| [deeepwin/lego-cnn](https://github.com/deeepwin/lego-cnn) | 40 | none detected | 2021-08-29 | Mask R-CNN on synthetic Blender images, aimed at 14 brick types in a pile. README says neighboring bricks are the failure mode. Research code, not a catalog. |
| [NazarLysyi/brickscope](https://github.com/NazarLysyi/brickscope) | 13 | MIT | 2026-10-05 | A current, small, usable client: CLI and MCP server that calls Brickognize for the photo and Rebrickable for colors, sets, and inventories. This is the open-source embodiment of “recognition is a service, catalog is another service.” |
| [chucan1312/lego-vision](https://github.com/chucan1312/lego-vision) | 0 | none | 2026-01-20 | Web app: Roboflow detection, YOLOv8 classification, inventory dict, top-10 “recipes.” A Brickit-shaped student project. Not a substitute for Brickit. |
| [skolchin/lego-sorter](https://github.com/skolchin/lego-sorter) | not retrieved | not retrieved | README fetched via search | Camera pipeline, VGG-19 or InceptionV3 transfer learning on rendered parts, or the OpenBlok weights. Hardware sorter software. |
| [Gadgeteering/LegoBrickClassification](https://github.com/Gadgeteering/LegoBrickClassification) | not retrieved | not retrieved | README fetched | Blender + LDraw synthetic renders, TensorFlow, inspired by Daniel West’s public sorter. Documents the standard pipeline: render, train, deploy. |
| [ShawnHymel/openmv-lego-brick-finder](https://github.com/ShawnHymel/openmv-lego-brick-finder) | not retrieved | Beerware, per README | tutorial | OpenMV + Edge Impulse, one target brick vs background. A teaching demo, not 1,600 classes. DigiKey write-up linked from the README. |
| [uefroboticsclub/lego-sorter](https://github.com/uefroboticsclub/lego-sorter) | 1 | GPL-3.0 | created 2025-03-04 | Jetson, one camera, conveyor, calls Brickognize, four bins. Shows the API being used as the brain so the student project can be mechanical. |

**LDraw / LeoCAD.** Search for `ldraw` is polluted (OpenRCT2, icon drawers). The real CAD app at the top of a loose search was [leozide/leocad](https://github.com/leozide/leocad), 2,891 stars, C++, last push 2026-10-12, no SPDX license in the API payload. [TobyLobster/ImportLDraw](https://github.com/TobyLobster/ImportLDraw), 377 stars, GPL-2.0, is the Blender importer people use to render parts. The parts library itself lives at https://www.ldraw.org/ . The getting-started page fetched here did not include a license, and `https://www.ldraw.org/article/14.html` returned 404. **License of the LDraw part library was not confirmed in this pass.** Do not assume it is free for a commercial training set.

**TravisL12/brick-review** (stars not retrieved; README was) is the cleanest write-up of the ID-alias problem. https://github.com/TravisL12/brick-review

### 4.3 What is actually reusable

- The *pattern* in brickscope: a vision service that returns an ID, a catalog service that returns fits-in and colors, a thin client that joins them. MIT, small, current.
- The *idea* in parts-diagram-ocr: callout detection on a raster exploded view, if and only if you have rights to the drawing.
- The *split* in the OpenRC BOM: commodity hardware (screw, bearing, hex) versus proprietary molded parts.
- Sorter repos are science projects aimed at a bin of loose, clean, standardized bricks on a controlled camera. They do not transfer to a dirty RC chassis in a driveway. Brickognize’s author said the same thing about near-duplicate rectangles, and he had a CAD library RC does not have.

---

## 5. Reverse engineering the strongest products

Feature and system level only. This is not a design you can implement from.

### 5.1 Brickit — pile in, build out

- **For:** Families with a bin of common bricks.
- **Loop:** Photo of a scattered pile → detected multiset → builds that fit → steps that point back into the photo. Secondary loop: scan into numbered bags (Pockets) and search later.
- **Data:** A private recognizer over about 1,600 common parts (their number), a library of builds, an optional set inventory the user declares, and bag locations. They say training images are synthetic piles plus real user photos plus corrections.
- **Tech signals:** On-device or cloud photo (not stated), machine learning, 2D highlight of a part in the source photo, instruction viewer. Not AR. Not a store.
- **Money:** Free app, Pro subscription, a paid classroom edition.
- **Hard problem they solved:** Recognition in clutter for the head of the part distribution, then a second matching step from “what we saw” to “what we can teach you to build,” plus a UI that answers “where is that piece?” without making the child read a part number.
- **What they did not solve:** The long tail (Brickognize’s pitch is 60k–125k items), resale identity, and purchasing the missing piece.

### 5.2 Brickognize — one photo, nearest catalog vector

- **For:** People holding one unknown part, minifigure, set, or sticker, including sorting-machine builders who call the API.
- **Loop:** Upload a photo → nearest catalog hits with id, name, and a reference image. The human confirms. A future loop he described is multi-part and BrickLink export.
- **Data:** A vector index over catalog images (real photos and LDraw renders). The ID space is BrickLink-flavored, which then has to be aliased to Rebrickable.
- **Tech signals:** Metric visual search, ConvNeXt-T as of his 2023 interview, CPU inference, public HTTP API, no account required for the basic call. Accuracy and catalog-size numbers on the homepage are unverified claims (98.5%, 125k, 0.7 s).
- **Money:** Free beta. Paid accounts were a plan, not a price, in 2023.
- **Hard problem they solved:** Covering a long-tail catalog without a dense photo set of every part, by matching embeddings instead of training one class per part.
- **RC lesson:** This is the architecture you would want for “what bearing / what servo / what body is this?” It fails, by the author’s own account, when two parts are the same object at different lengths. RC years and brands are full of those twins.

### 5.3 Rebrickable + BrickLink Studio — the inventory and the cart

Treat these as one system. Recognition is useless without them.

- **For:** Adult fans who own sets, design MOCs, and buy individual elements.
- **Loop:** Declare owned sets and loose parts → compute the multiset you can spend → search builds by percent match → list missing parts → find stores that stock them (inventory lagged by up to about 24 hours) → wanted list → order → import the order back.
- **Data:** Official set inventories (normal vs spare), color IDs, mold and print variants, alternate-part relations, MOC inventories on Rebrickable only (not in the public API), store stock and price owned by BrickLink and BrickOwl. Studio adds a digital model whose parts list *is* the wanted list, plus unavailable-color flags and a cost rollup.
- **Tech signals:** Relational catalog, set-difference query (the build engine), store-inventory crawl or feed, XML wanted lists, desktop CAD with snap-to. No vision.
- **Money:** Rebrickable has a Pro plan (custom color rules). BrickLink is a marketplace, now inside the LEGO Group, so the take is store fees and the strategic value of the adult fan, not a subscription this research priced. Studio’s download page presents it as the free design tool that feeds the marketplace.
- **Hard problem they solved:** A canonical parts ontology plus live multi-store inventory plus a way to express “I already own these.” That triad is why “buy the missing pieces” works. It took a marketplace founded in 2000 and a catalog the manufacturer eventually bought.
- **RC lesson:** The feature James wants (“buy it from a local shop or an RC shop”) is this triad. RC has the shops and the SKUs. It does not have the shared ontology or the shop feeds.

### 5.4 iFixit FixBot — repair librarian with a voice

**Pages**

- Launch post, Kyle Wiens, 9 December 2025: https://www.ifixit.com/News/114700/introducing-fixbot
- How to use it: https://www.ifixit.com/Info/How_to_use_FixBot
- Product page: https://www.ifixit.com/go/fixbot
- App page: https://www.ifixit.com/go/app

- **For:** Anyone mid-repair who can describe a symptom, show a photo, or read a model plate.
- **Loop:** Identify the exact device (photo of the model number, or browse) → question-and-elimination diagnosis → search the guide and manual library → name a compatible part → open the step guide. Voice mode is marked experimental: a waveform button, hands stay on the work. You can also upload a PDF manual and ask questions against it. If the library misses, FixBot can draft a forum post so the human community still gets the novel question. Wiens’s reply in the comments says that was deliberate, because unanswered repeat questions are the forum’s failure mode (he cited a rough 30–60% answer rate).
- **Data:** iFixit says 125,000 repair guides, a large Q&A forum, and “millions of pages” of manuals and data sheets. Guides are written by technicians and edited. Parts are tied to a device, not to a generic name (“iPad 2 digitizer” versus “fused iPad screen” is the example they use).
- **Tech signals, in their words:** several models for language, voice, and vision; a search engine “built from scratch”; a retrieval step before the answer; an evaluation harness of real repair questions. They say it is grounded in guides and manuals and still wrong sometimes. Comments on the launch post also say it needs a network. Wiens confirmed offline was not available then.
- **Money:** Free at launch for a limited period. The plan stated in December 2025 was a capped free tier and a paid tier that includes voice and document upload. Current prices were not re-checked.
- **Hard problem they solved:** Device identity first, then retrieval over a curated corpus, then a part that matches that identity. The voice is the last mile. The corpus is the product. They had twenty years of guides before they had a bot.
- **RC lesson:** A chatbot on generic RC knowledge will reproduce the Reddit thread, including the wrong guesses. FixBot’s claim is that it will not invent a blue wire that is not in the guide. An RC version needs guides and model-specific parts before it needs a voice.

### 5.5 Horizon / Arrma shoppable exploded view — the RC parts product that exists

- **For:** An owner who already knows which Arrma, Losi, or Axial kit they have and can recognize a shape on a drawing.
- **Loop:** Open the kit → open the exploded view → zoom → click the number → product details and, by the page’s “shoppable” label, a way to buy. Galleries of standard and option parts sit beside it (Arrma’s blog).
- **Data:** One diagram per kit `pid`, callout numbers, SKUs in Horizon’s catalog, price and stock in that catalog. The drawing is manufacturer art.
- **Tech signals:** Embedded frame, pan and zoom, hit targets on part numbers. Not 3D, not AR, not a symptom wizard. The viewer implementation is unpublished.
- **Money:** Parts margin. The diagram is a merchandising surface for the company that owns the brand.
- **Hard problem they solved:** Making a paper exploded view clickable inside the store that can ship the part, for the brands they control.
- **What they did not solve:** “My car clicks and I don’t know the name of the part,” Traxxas or Tekno or Tamiya, a local independent’s shelf, or a driver who does not know which Kraton version they bought.

### 5.6 So Dialed RC AI Mechanic — the RC chatbot that exists

- **For:** Club racers who can say “more corner-entry steering on clay” and name their kit.
- **Loop:** Pick a known car and a track → ask in text → get a setup change or a pinion suggestion → test at the track. History stays on that car.
- **Data:** Kit baselines for 700+ cars (their count), the user’s typed symptoms, and whatever OpenAI plus their licensed docs provide. Not photos, not the user’s setup sheet (unless you are in the other app).
- **Tech signals:** LLM over a curated car list. A separate deterministic gear calculator sits beside it, which is the right split: arithmetic should not be a language model.
- **Money:** Metered questions, $19.99/year unlimited in the US, or a 100-question pack.
- **Hard problem they solved:** Putting race-setup language in a pocket without making the driver read ten forum pages, and fencing the model with “test it on your track.”
- **What they did not solve:** Mechanical failure, part numbers, or anything you can photograph.

**Honorable mentions, not full teardowns.** Traxxas Link, Spektrum Dashboard, Castle Link, and HW Link are the real electronics layer. They are vendor-locked on purpose. RC Map is the real “where do I drive a crawler” app, with the data-quality problems its own reviews describe. RC Car Compare is a small affiliate comparator. LEGO Builder is what licensed 3D instructions look like when the manufacturer wants them.

---

## 6. Gap and feature design

### 6.1 Does one product already do this?

**No.**

Mapped against James’s list:

| Job | Closest thing that exists | What is missing |
| --- | --- | --- |
| Troubleshoot repairs | Reddit, RCGroups, RC Talk, Traxxas phone support, So Dialed for *handling* | A single guide that starts from a symptom and ends at a confirmed part, for more than one brand |
| Fault diagnosis | The same communities, plus ESC beeps and telemetry in vendor apps | A model-aware tree that uses voltage, temperature, and “which version” before it names a part |
| Buy parts from local suppliers or RC shops | Horizon and Arrma clickable diagrams; Amain’s Traxxas finder and a store-inventory flag; manufacturer tables; the local shop’s phone | Cross-shop stock, and any independent shop that is not Amain or a Horizon dealer |
| Find tracks or ride sites | ROAR, BRCA, RCGroups places, LiveRC, RC Map, RC Crash Crew, Schumacher’s UK map | One filterable map across race, bash, crawl, drift, and water, with freshness and rules |
| Interactive exploded assembly guide | Horizon/Arrma viewer; PDF manuals everywhere else; LEGO Builder in another hobby | 3D or even consistent click-targets outside Horizon’s brands |
| AR | JigSpace and Taqtile in industry; not in consumer RC | Meshes and procedures. The AR shell is a commodity. The content is not |
| Audio / TTS instructor | iFixit FixBot voice, experimental, on iFixit guides | RC scripts worth reading aloud |
| RC vehicle comparison | RC Car Compare, about 71 models, affiliate links | A comparison a owner can trust after purchase (parts support, version, electronics), not only a buyer’s table |

The honest product is a router across these, with a thin layer of original guidance where the communities already agree, and a hard stop where they do not.

### 6.2 Features he did not name that hobbyists already need

These come out of the threads, manuals, and vendor apps above. They are product requirements, not a build plan.

**Identity before diagnosis.** RC’s “VIN” is a stack, not a plate:

- Kit name and a revision: Slash 2WD vs 4x4, BL-2s vs VXL, Associated B6.4 vs B6.4D, Tekno NB48 2.0 vs 2.2, Arrma 3S vs 6S, a 2024 chassis vs the one before it.
- Sometimes a code on the manual or the box (Traxxas model numbers like 77096-4).
- ESC and motor brand, which may not match the car brand (a Traxxas car with a Hobbywing ESC is normal).
- Radio brand and protocol (Traxxas TQi, Spektrum DSMR, Flysky, Sanwa, Kyosho).
- Battery: cell count, connector, hard case or soft, and whether low-voltage cutoff is on.

A photo of the chassis, the manual cover, or the ESC label is the realistic capture. A photo of a broken arm is the unrealistic one until identity is known. FixBot’s “model plate first” is the right order. So Dialed’s “pick your car from 700” is the right fallback when the photo fails.

**The failures people actually ask about.**

- No drive, or drive on one side: slipper, spur, pinion mesh, dogbone out of the cup, diff gear, hex pin, stripped wheel hex. The Reddit threads are this list.
- Clicking or grinding under power: mesh too tight or too loose, broken spur teeth, diff, a rock in the motor can, a bent shaft. Mesh is a feel, not a part number. The app should teach the paper-slip check by pointing at the manual, not by inventing a thousandth-of-an-inch gap.
- Steering dead, twitchy, or reversed: servo horn, saver, dual-rate and trim, binding a new receiver, a servo that was drowned.
- Cuts out or “cogging”: LiPo cutoff, a puffing pack, gearing too tall, motor temp. This is where Traxxas Link and a temperature sensor already know more than a chatbot.
- Diff rebuilds: oil weight, gasket, and the exploded view. A common Saturday job on bashers and 1/8 buggies. The guide is the manual’s diff page plus a parts bag (gear set, o-rings, oil).
- Bearing kits: one of the few cross-brand objects. OpenRC’s BOM already names them by size (for example 5x10x4). A useful catalog maps “front wheel bearing, this vehicle” to a size and then to a brand kit (Traxxas, Associated, Acer, Boca). The size is the interchange key. The rubber seal versus metal shield is the second key, because crawlers and bashers do not want the same seal.
- Radio binding and failsafe: model-specific, and dangerous if the throttle failsafe is wrong. Link to the radio manual. Do not paraphrase binding steps from memory.
- ESC calibration and firmware: Castle, Hobbywing, Traxxas, Spektrum, and Hobbywing’s own warning that a firmware update can wipe calibration. A companion app should deep-link the vendor app and warn, not reimplement the programmer.
- Waterproofing: what “waterproof” meant on that model (ESC coated, receiver box, grease in the bearings) and what to do after a swim. The E-Maxx thread is the outcome when that goes wrong: replace electronics, do not hope.
- Vehicle class changes the parts list. A crawler option (Injora axle, portal, brass weight, servo) does not belong on a 1/8 race buggy. A race option (spring, sway bar, oil) does not belong on a basher who wants RPM arms. Amain and Tower already merchandize this way. The app has to know the class or it will recommend the wrong ecosystem.
- Setup sheets and gearing math: So Dialed already sells this. Final drive ratio and rollout are deterministic. Do not fold them into a language model.
- Maintenance intervals the manuals already imply: slipper wear, hinge-pin slop, shock oil, diff oil, clutch shoes on nitro, glow plugs.
- Discontinued models. Associated’s parts UI has a discontinued toggle because people still run B4s and SC10s. RCScrapyard exists for the same reason. “We don’t list it” is a bad answer; “here is the last official diagram, and here is what people substitute” is the answer, with substitution marked as community knowledge.

**Nitro is a separate product surface.** Fuel, glow, needles, tuned pipe, and clutch are not electric failures. The RC Talk thread shows a competent checklist. A v1 that pretends one wizard covers nitro and electric will give confident bad advice. If nitro is in scope, it should be its own tree and it should quote the model’s manual rather than generate needle numbers.

**Air and boat.** They appeared as Horizon brands (Pro Boat, E-flite, Blade), as Spektrum’s air radios, as RC Crash Crew ponds and FPV fields, and as a review asking RC Map for boats. They are adjacent catalogs. A v1 can leave them out and not be wrong.

### 6.3 What is hard

**Parts taxonomy across brands.** LEGO needed aliases for 13% of IDs inside one system (brick-review’s figure). RC needs a crosswalk among Traxxas numbers, Horizon `pid`s, Associated numbers, Tekno TKR numbers, Tamiya chassis codes, aftermarket brands, and bearing sizes. Nobody publishes that crosswalk. Building it is editorial work, model by model, and it rots every time a “2.0” chassis changes a hinge pin.

**Version identification.** The same trade name hides incompatible parts. Associated’s own parts page is a list of those versions. A vision model that says “Slash” has not identified a part.

**Counterfeit and “compatible” parts.** This pass did not find an official Traxxas authenticity API or a public counterfeit database. The risk is still structural: marketplaces sell parts that wear a factory number and are not factory. An app that deep-links “Traxxas 3696” to an unvetted marketplace listing can be the thing that puts a soft spur gear in the car. Prefer the manufacturer and authorized dealers (Horizon, Amain, the brand’s dealer list). Say when a listing is aftermarket. Do not invent a hologram check that was not found.

**Local shop inventory.** Amain exposes a store-inventory affordance for its own Chico retail. rcMart says its Hong Kong shelves are a subset and tells you to order online. Tower, as fetched, is an online shop. Independent shops are a phone call and a Facebook post. There is no public feed to aggregate. A v1 “in stock near you” feature that is not a partnership will be wrong, and wrong stock is worse than a link to call the shop. ROAR’s track pages often include the club’s contact; the same pattern (name, phone, “call first”) is the honest v1 for shops.

**Safety.** This is not a footnote.

- LiPo: Traxxas’s battery page says never charge LiPo on a NiMH charger or NiMH mode, never charge a swollen or damaged pack, always use low-voltage detection, charge in a fire-resistant container on a non-flammable surface, never leave charging unattended, unplug after the run, and store partly charged. Puncture or short can mean fire. They do not recommend anyone under 18 handle LiPo packs without a responsible adult. https://traxxas.com/battery-basics and the charger manual https://traxxas.com/media/productattach/2996X/8/HKC18021-R04_2971X-TraxxasID-8amp%20AC%20fast%20charger-INST%20-%20EN.pdf
- Their iD system exists specifically so the charger does not trust the user to pick chemistry. A companion app must not become a back door around that (“just set it to 4.2 and 5 amps”).
- Nitro fuel and glow igniters are flammable and model-specific. Tekno’s manuals already limit use to 14+ and to legal tracks.
- A fast car plus a wrong failsafe is a safety issue. Binding and failsafe steps should come from the radio maker.
- Diagnosis copy should tell the user when to stop: smoke, swollen pack, fuel leak, a wheel that still has power while the car is on the bench.

**Licensing of diagrams.** Exploded views and manuals are the manufacturer’s artwork and text. Horizon can make Arrma’s drawing shoppable because Horizon owns Arrma. A third-party app cannot scan those PDFs into a database and redraw them without a license. RCScrapyard shows the demand and also shows the legal ditch. Practical approaches that stay on the right side: deep-link the official PDF or the official viewer; quote a part number and a short name; host only content you wrote (a symptom tree) or content a shop gave you. parts-diagram-ocr is technically relevant and legally useless until the drawing is yours.

**Forum advice is not a corpus you can quietly absorb.** iFixit’s launch thread includes the objection that community authors did not consent to be the model’s training set. Wiens’s answer was retrieval over iFixit’s own library plus a path back to the forum, not “we scraped Reddit.” An RC bot trained on RCGroups posts will launder bad needle settings and will anger the people who wrote the good ones. Retrieval with attribution, or original guides, is the safer shape. So Dialed at least states its sources and says user chats are not training data.

**Closed telemetry.** The best fault signals (voltage sag, motor temp, ESC errors) sit inside Traxxas Link, Spektrum Smart, Castle logs, and HW Link. They are not a public API. A v1 should ask the user to read the gauge, not pretend to ingest the log.

### 6.4 A realistic v1, and what waits

This is a scope cut, not an implementation plan.

**V1, because the data already exists and the failure mode is a bad link rather than a wrong repair.**

1. **Garage.** User picks brand and kit from lists built off public trees (Traxxas parts finder categories, Associated’s vehicle list, Tamiya chassis codes, Tekno kit names, Horizon/Arrma kit `pid`s). Store the electronics separately: ESC, motor, servo, radio, battery. Exact kit revision is a required field, with “I’m not sure” as a first-class state that blocks part recommendations.
2. **Symptom router for a short list of electric basher and crawler failures:** no drive, click on throttle, no steering, throttle cutoff, drowned electronics. Each branch ends in an inspection the user can do, then a part *category*, then a link to the official diagram for that kit. If the version is unknown, stop at the inspection. Do not name a SKU.
3. **Buy links, not a catalog you own.** Once a part number is known, link to the manufacturer and to Amain or Horizon search for that number. Show a “call your shop” action with no fake stock. Affiliate links only where a program exists (RC Car Compare already does this for whole cars).
4. **Tracks as an index of public directories,** not a new map you have to seed alone: ROAR, BRCA/Schumacher, RCGroups places, RC Map, RC Crash Crew, LiveRC. Filter by discipline. Show the source and a “confirm before you drive” line, which RC Crash Crew and Schumacher already use.
5. **Comparison of current RTR cars** only if it can say something RC Car Compare does not: parts support, which radio and ESC it includes, and whether the exploded view is clickable. Otherwise link out.
6. **Safety screens** for LiPo and for nitro, copied as pointers to Traxxas and the model manual, not rewritten as original charging instructions.

**Later, because each one is a data project or a licensing project.**

- Photo identification of a model plate or ESC label (plausible; FixBot-like).
- Photo identification of a loose bearing or a servo (plausible, Brickognize-like, small catalog).
- Photo identification of a suspension arm (not plausible until the version is known and you have a labeled set).
- A cross-brand compatibility graph for bearings, body posts, hex sizes, and spur pitch. Editorial, high value, slow.
- Clickable exploded views for brands that are not Horizon. Requires a license, or it is only a deep link to the PDF.
- 3D or AR steps. Requires meshes. JigSpace’s own pitch is “pay us to model it if the OEM will not share CAD.” That is the cost.
- TTS coach. Worth it only after the steps are good enough to read aloud. FixBot added voice on top of 125,000 guides.
- Live local inventory. A partnership with a chain or a dealer group, not a scrape.
- Telemetry import. Only if a vendor opens a log export.
- Setup and gearing. So Dialed already ships this. Integrate or ignore. Do not rebuild the pinion calculator as a chatbot.

**What not to build, even later, without a partner:** a Brickit clone that photographs a crashed car and emits a cart. The LEGO version works because every stud is in a public catalog and every store speaks that catalog. RC’s equivalent would be Horizon plus Traxxas plus Associated plus Tekno plus Tamiya agreeing on IDs and giving you the drawings. They have not.

### 6.5 If only three bets are worth making

1. **Version-accurate identity**, then a link to the official diagram and a real shop. This is the job the forums do slowly.
2. **A symptom tree that is allowed to say “I don’t know, open this assembly.”** So Dialed and FixBot both work by narrowing, not by guessing a part number from a paragraph.
3. **A place layer that admits it is a directory of other directories**, split by crawler, race, bash, and drift. The maps exist. They are fragmented on purpose, because the sports are different.

Vision, AR, and a universal parts cart are the LEGO story. They are the wrong first story for RC.

---

## 7. Source index

Primary or official, fetched or searched 14 October 2026.

**LEGO stack.** https://brickit.app/ · https://brickit.app/about/ · https://brickit.app/pockets · https://apps.apple.com/us/app/brickit-your-brick-collection/id1477221636 · https://brickscan.com/ · https://brickognize.com/ · https://brickognize.com/about · https://api.brickognize.com/docs · https://casadebricks.com/the-magic-of-brickognize-for-automatic-lego-sorting-machines/ · https://programme.europython.eu/europython-2022/talk/DZZ8X9/ · https://rebrickable.com/help/build-engine/ · https://rebrickable.com/help/buy-parts/ · https://rebrickable.com/api/v3/docs/?key= · https://www.bricklink.com/v3/studio/download.page · https://studiohelp.bricklink.com/hc/en-us/articles/5705925898135-Upload-as-a-Wanted-List · https://www.lego.com/en-us/aboutus/news/2019/november/lego-bricklink · https://www.brickowl.com/ · https://www.lego.com/en-us/service/help-topics/article/lego-builder-app-3d-building-instructions · https://patents.google.com/patent/US10213692B2/en

**RC brands and shops.** https://www.horizonhobby.com/interactive-exploded-view?pid=ARA4202V3T1 · https://www.arrma-rc.com/en/interactive-exploded-view?pid=ARA2104 · https://blog.arrma-rc.com/news/interactive-exploded-views/ · https://www.horizonhobby.com/hh-our-history/ · https://www.towerhobbies.com/tower-hobbies-history/ · https://traxxas.com/parts-finder · https://traxxas.com/traxxas-link-app · https://traxxas.com/battery-basics · https://portal.associatedelectrics.com/parts/search/ · https://www.associatedelectrics.com/element/parts · https://www.tamiya.com/english/rc/catalogs/index.htm · https://kyosho.com/eng/support/instructionmanual/buggy/buggy_index.html · https://www.teknorc.com/wp-content/uploads/2024/07/NB48_2.2_instructions_all_compressed-rev_02-compressed.pdf · https://www.amainhobbies.com/traxxas-parts/c1466 · https://www.amainhobbies.com/chico-ca/l165 · https://www.rcmart.com/retail-store-and-order-pick-up · https://www.castlecreations.com/en/castle-link-pc-software-and-cables/b-link-2-bluetooth-interface-011-0181-00 · https://www.hobbywing.com/en/index.php/service/application?id=2

**Places, comparison, repair analogs.** https://www.roarracing.com/track_locator.php · https://live.liverc.com/ · https://www.rcgroups.com/places/7-rc-car-tracks · https://www.rcmap.com/apps · https://rccrashcrew.com/places · https://tf.crewshin.com/ · https://www.racing-cars.com/where-to-race-rc · https://www.efra.ws/ · https://rccarcompare.com/compare · https://www.sodialed.com/apps/rc-ai-mechanic · https://www.ifixit.com/News/114700/introducing-fixbot · https://www.jig.com/help-center/exploded-views-in-augmented-reality · https://taqtile.com/digital-work-instructions/

**Communities cited.** https://www.rcgroups.com/index.php · https://www.reddit.com/r/Traxxas/comments/1ur3lgl/help_please_loud_clicking_noise_when_accelerating/ · https://www.reddit.com/r/NitroRC/comments/1ttmrk5/whats_wrong_with_my_car/ · https://www.rctalk.com/forum/threads/cant-get-traxxas-nitro-slash-to-start.135024/

**GitHub (stars from the public API on this date).** https://github.com/stubbs41/rc_hub · https://github.com/bryancostanich/OpenRC · https://github.com/tegos/parts-diagram-ocr · https://github.com/NazarLysyi/brickscope · https://github.com/blokbot-io/OpenBlok · https://github.com/deeepwin/lego-cnn · https://github.com/chucan1312/lego-vision · https://github.com/J3vb/RC-Central · https://github.com/basicallysource/sorter

**Not verified, so not used as facts.** Current r/rccars subscriber count (about.json timed out). LDraw part-library license (getting-started page had no license; a guessed article URL 404ed). Brickit Pro price. Brickognize homepage accuracy methodology. Whether Amain “in stock in store” is live per SKU. Any Facebook group size. Any YouTube subscriber count. A Brickit patent (none found). An official counterfeit-parts database (none found).

---

File written to: `/cursor/stores/bc-35bc4b46-172a-47d5-b169-168b47154f99/docs/rc-landscape-grok.md`
