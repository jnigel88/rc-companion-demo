---
cursor:
  subagentId: "bc-7d7bd9bd-8598-556a-8fa5-995abd5db7c2"
---

# RC companion product landscape

**Model running this research:** Grok 4.7
**Date of research:** 14 October 2026
**Scope:** Research only. No app was built, no code was written, and no pull request was opened.
**Method:** Live web search, official pages, app-store and Play listings, help docs, GitHub repository metadata, and one open-access paper. Claims that are inferred are marked. Market-size figures from paid-report landing pages and traffic estimators are treated as unreliable ranges, not facts.

This report is for James, who is unsure what already exists for an app that would help RC car and RC toy hobbyists diagnose faults, repair broken parts faster, buy replacement parts, find tracks, and understand assemblies. The closest cultural analog is the LEGO rebuild stack (Brickit, Rebrickable, BrickLink, Brickognize). The closest operational analog is a mix of manufacturer exploded views, iFixit-style repair guides, and the forums that already act as the diagnosis layer.

---

## 1. Direct answer

**No single product already does what James described.**

The jobs exist, but they are split across brands, retailers, race-setup apps, map apps, PDF manuals, and communities:

| Job James named | Closest thing that actually exists | What it does not do |
| --- | --- | --- |
| Troubleshoot repairs / fault diagnosis | Traxxas support decision pages; Spektrum manuals; So Dialed RC AI Mechanic; Reddit, RCGroups, R/C Tech | One cross-brand “what’s broken” product that ends in a buyable part |
| Buy parts from local suppliers or RC shops | Horizon Hobby / Tower Hobbies shoppable exploded views; AMain vehicle parts finder; rcMart; local hobby-shop counters | Live inventory of independent local shops, or one cart across brands |
| Find tracks or ride sites | So Dialed track directory; RC Spotters; BashMaps; RC Map; RCGuides; R/C Tech track locator | Tie a track to the car you own, the class it can race, and the parts you should bring |
| Interactive exploded assembly guide | Horizon/ARRMA/Losi/Axial “Shoppable Exploded View”; Traxxas HTML exploded views; Associated, Tamiya, Tekno PDFs | A guided rebuild that knows *your* revision of the car and talks you through it |
| AR | Adjacent only: hackathon auto-repair AR (FixItXR), not a shipping RC product found in this search | No production RC AR assembly app turned up |
| Audio / TTS instructor | iFixit FixBot voice mode (phones, laptops, appliances); Unfold, an early open-source furniture-manual experiment | Not applied to RC |
| RC vehicle comparison | RC Car Compare; RC Donkey; ARRMA’s own compare page; rcparts.app for *parts* diffs between kit revisions | Not connected to diagnosis or purchasing the broken part |

The gap is the **join**, not the existence of any one feature. LEGO can join “photo of a pile” to “model you can build” to “missing parts” to “BrickLink cart” because the parts are a shared, numbered, color-coded system with public CAD and a marketplace that speaks those IDs. RC parts are branded, revisioned, and often not interchangeable. That is the hard problem, and nobody has solved it as a consumer product.

---

## 2. How the hobby is actually organized

### 2.1 What “the market” is

Paid market-research landing pages disagree with each other by billions of dollars, so they are useful only as a warning:

- PW Consulting’s “Worldwide Hobby Radio Control” page says **USD 2.84 billion in 2025**, cars and trucks **39.8%**, electric **85.2%**, North America the largest region, and names Horizon Hobby, Traxxas, Futaba, Spektrum, FrSky, DJI, HobbyKing, and Hitec. Source: https://pmarketresearch.com/worldwide-hobby-radio-control-r-c-market-research/ (fetched 14 Oct 2026). This is a report-sales page, not an audited industry census.
- Cognitive Market Research’s page says the same category was about **USD 5.49 billion in 2021** and about **USD 7.01 billion in 2025**. Source: https://www.cognitivemarketresearch.com/hobby-radio-control-r%2Fc-market-report
- Dataintelo’s “radio remote control toys” page, a wider toy definition, says **USD 4.08 billion in 2025**, cars and trucks **42.5%**, and describes Traxxas plus Spin Master as leaders, with Tamiya, Kyosho, and Horizon Hobby as the specialist-hobby cluster. Source: https://dataintelo.com/report/radio-remote-control-toys-market

**Inference, marked as such:** the hobby-grade surface-vehicle aftermarket is large enough to support specialist retailers and parts trees, and small enough that a new app will not get a clean public API from every brand. Do not plan a business on any one of those dollar figures.

Third-party web-traffic revenue models are also estimates, not filings:

- Grips estimates **traxxas.com at USD 10.6 million GMV in 2025**, and in an August 2026 snapshot ranks amainhobbies.com and hobbytown.com higher in modeled revenue than traxxas.com. Source: https://gripsintelligence.com/insights/retailers/traxxas.com
- ECDB estimates **Horizon Hobby at about USD 46 million in 2025**, 96% United States. Source: https://ecdb.com/resources/sample-data/retailer/horizonhobby

Those numbers almost certainly **understate** the category, because most Traxxas and Horizon product is sold through dealers, not only on the brand domain. They do show that **dealers and specialty e-commerce are the commerce layer**, and the manufacturer site is often the diagram layer.

### 2.2 Who owns the diagrams

Horizon Hobby’s own history page says that in 2018 it bought Hobbico and that **Tower Hobbies came under Horizon**, along with brands including ARRMA, Axial, and RealFlight. Source: https://www.horizonhobby.com/hh-our-history/

Tower’s own history page confirms the same 2018 ownership change and lists Axial, ARRMA, E-flite, Losi, Spektrum, and RealFlight as part of the lineup it can sell. Source: https://www.towerhobbies.com/tower-hobbies-history/

A contemporary news report said Horizon was the sole bidder for Hobbico’s RC business at **USD 18.8 million**, including Great Planes, Tower Hobbies, Axial, and Arrma. Source: https://www.news-gazette.com/news/horizon-the-sole-bidder-for-hobbicos-rc-business/article_ae2f6aa3-cc0f-5d79-9833-1262cd709551.html

**Observed technical signal:** exploded-view PDFs for both sites are served from Salesforce Commerce Cloud / Demandware paths that share a catalog name, `Sites-horizon-master`. Examples found in search:

- https://www.horizonhobby.com/on/demandware.static/-/Sites-horizon-master/default/Manuals/ARA7618-Parts-Explosion-MULTI.pdf
- https://www.towerhobbies.com/on/demandware.static/-/Sites-horizon-master/default/dw097a9baa/Manuals/LOS01026T4_EXPLODED_VIEW.pdf

**Inference:** Horizon and Tower are not two independent parts databases. They are storefronts on one master catalog. A “buy from Horizon or Tower” feature is one integration, not two. AMain, rcMart, and independent shops are separate.

### 2.3 How a hobbyist actually fixes a car today

The working loop, reconstructed from support pages and forum threads rather than from any single app:

1. The car stops, coggs, clicks, or pulls. The driver looks at an LED on the ESC, listens to the drivetrain, or posts a video.
2. Someone who has broken that exact model before names the failure: sensor wire, spur, slipper, LVC, endpoints, diff, servo saver.
3. The owner opens a PDF or a web exploded view, finds a stock number, and searches that number at Horizon, AMain, rcMart, or a local shop.
4. If the part is a bearing, screw, or tire, they may substitute a standard size or an aftermarket brand (Pro-Line, MIP, Robinson, FastEddy bearings, and so on). If it is a chassis-specific arm or bulkhead, the number has to match the **revision**.
5. Electronics are a second product universe: Traxxas Link, Castle Link, Hobbywing HW Link, Spektrum Smart. Those apps program and log the component. They do not sell the A-arm.

That loop is why “Brickit for RC” is the wrong mental model if it means “photograph a pile and invent a new build,” and the right mental model if it means “identify the thing in front of you and connect it to a buyable ID.”

---

## 3. LEGO reconstruction analogs

LEGO is the best-studied version of “look at physical parts, know what they are, know what you can do, buy what you lack.” It works because of four public or semi-public assets that RC does not have:

1. A shared geometry system (studs, tubes, clutch).
2. Stable-ish part and color IDs, even though the ID schemes disagree with each other.
3. A huge public CAD library (LDraw) and retailer catalogs (BrickLink, BrickOwl).
4. A culture of inventories: every official set has a parts list, and MOCs are expected to publish one.

### 3.1 Brickit

**Primary pages**

- Product: https://brickit.app/
- About / technology: https://brickit.app/about/
- Pockets inventory: https://brickit.app/pockets
- Apple listing: https://apps.apple.com/us/app/brickit-your-brick-collection/id1477221636
- Google Play listing (NZ store page retrieved in search): https://play.google.com/store/apps/details?id=com.brickit.brickit
- 2022 press release: https://www.prweb.com/releases/brickit-the-killer-app-for-lego-enthusiasts-just-got-smarter-850610642.html
- Founder narrative (investor site, treat as marketing): https://jj.capital/portfolio-startup-case-brickit
- Independent walkthrough of the 2021 flow: https://appleinsider.com/articles/21/07/03/how-to-identify-a-pile-of-lego-on-your-iphone

**Who it is for.** The about page says the core audience is children ages 3 to 7 and their parents, and that the app is free with paid Pro features on iOS and Android. The current App Store text is broader: families, collectors, and adult builders with loose bricks. The App Store listing also says Brickit is not an official LEGO product.

**User flow, from the site plus the AppleInsider walkthrough.**

1. Scatter bricks in a single layer. The 2021 write-up said to hold the phone about two feet above the pile and capture the edges.
2. The app recognizes individual parts in the photo.
3. It proposes builds that fit what it thinks you have. The 2021 article said the app wanted on the order of 150 bricks before it would suggest something, and that the count can be wrong.
4. Instructions are step-by-step and intentionally loose: the homepage says you can change colors and swap bricks.
5. While building, the app highlights where the needed piece is in the photo. The 2022 press release called this Finder and claimed identification “as high as 92%.” That figure is a company claim, not an independent benchmark.
6. A separate Collect path (2021) let you declare sets you own so the app could reason about bricks that were not in the photo. The current homepage pushes **Pockets** instead: scan batches into numbered bags, then search which bag holds a shape.
7. Pockets can **export the collection to Rebrickable**. That is the documented bridge from vision to the buy-the-missing-pieces ecosystem. Source: https://brickit.app/pockets

**What the model appears to do.** Brickit’s own about page is the best primary description, and it is still high level:

> “We make an infinite number of 3D models of piled bricks and let our algorithm recognise each and every brick in the models. … Then we introduce our algorithm to the real world and real photos that our users send in … [It] can recognise 1600 of the most common bricks.”

So the published mechanism is:

- Synthetic piles rendered from 3D models (they do not say whether those models are LDraw).
- Supervised correction when the model is wrong.
- Fine-tuning on real user photos.
- A **closed set of about 1,600 common parts**, not the full catalog. The about page’s “1600” and the homepage’s “every piece” are in tension. Trust the more specific number.
- Detection plus localization, because the product highlights a brick inside the photo, not just a parts list.
- A second system, not described, that matches a detected multiset of parts to a library of build ideas and instructions.

The 2023 academic paper discussed below says, explicitly, that Brickit had **not released training details**. That is still true on the about page.

**What it does not appear to do.** The current App Store and Play copy do not describe a “buy the missing bricks” cart inside Brickit. The commerce handoff that *is* documented is export to Rebrickable. **Inference:** Brickit solved discovery and location-in-the-pile. Rebrickable and BrickLink solved purchasing.

**Monetization.** Free app, auto-renewing Brickit Pro. The App Store text describes Pro as access to “advanced features” without listing them in the snippet retrieved. Schools get a separate one-time-purchase “Brickit for Classes” with social features removed (homepage).

**Hard problem they already solved.** Reliable-enough recognition of a **subset** of parts in a messy pile, plus a content library of builds that degrade gracefully when a part is missing (swap colors, improvise). They did not need 100% inventory accuracy. The academic paper makes the same observation: Brickit seems aimed at identifying a subset that can complete models, not at exhaustive recognition of every brick in the photo.

### 3.2 Brickognize the website, and Brickognize the paper

These share a name. This research did **not** find a page that says they are the same system. They are written up separately.

#### Consumer site: brickognize.com (Piotr Rybak)

- Home: https://brickognize.com/ — headline claims **125k catalog size, 98.5% accuracy, 0.7 s search**. No method is published next to those numbers. Treat them as product claims.
- About: https://brickognize.com/about — “image search app” for any part, minifigure, set, or sticker sheet. It calls itself an early beta. Contact given as piotr.rybak@brickognize.com. The fetch of the about URL on 14 Oct 2026 returned almost no body text; the about content above comes from the search-result extract of that URL.
- API docs (Swagger): https://api.brickognize.com/docs
- Author’s own request example, posted on Reddit: https://www.reddit.com/r/learnpython/comments/11pa4gz/brickognize_api/ — `POST https://api.brickognize.com/predict/` with multipart field `query_image`. Response is JSON; client code in the wild reads `items[].id`, `name`, and `img_url`.

**User flow.** Photograph one brick (the marketing and the sorter projects assume a query image, not a huge pile). Get back catalog IDs. A third-party CLI/MCP, brickscope, then looks those IDs up on Rebrickable for colors and set appearances. Source: https://github.com/NazarLysyi/brickscope

**What the matching system appears to do.** The public API returns ranked catalog items for an image. Whether that is a classifier, an embedding nearest-neighbor search, or both is **not stated** on the about page. “Image search” plus a 125k catalog and sub-second latency is consistent with embedding retrieval against rendered or photographed catalog images. That is an inference, not a documented architecture.

**Data it depends on.** A large LEGO catalog (parts, minifigs, sets, sticker sheets) with IDs and images. It does not, by itself, sell parts.

#### Academic paper also titled Brickognize

- Open access: Joel Vidal, Guillem Vallicrosa, Robert Martí, Marc Barnada, “Brickognize: Applying Photo-Realistic Image Synthesis for Lego Bricks Recognition with Limited Data,” *Sensors* 2023, 23(4), 1898. https://doi.org/10.3390/s23041898 and https://www.mdpi.com/1424-8220/23/4/1898
- Authors’ affiliations: University of Girona, and **Tramacsoft GmbH** (Frankfurt). Dataset note in the paper: testing data at `www.tramacsoft.com/brickognize` (accessed by the authors in December 2022).
- The curated list Awesome LEGO Machine Learning files this paper under the name **Brickinspector**, not under the Piotr Rybak site. https://github.com/360er0/awesome-lego-machine-learning

**Mechanism, from the paper itself (this is the deepest public description of a pile-recognition system):**

1. **Synthetic data.** Blender plus BlenderProc. Bricks are dropped with physics onto random PBR floors, with random camera, light, and color. Each scene is rendered from 20 cameras. A flat color-per-instance pass becomes a COCO segmentation label. Training set: 1,000 scenes, 20 images each, about 20,000 images, about 1.1 million annotated items, 512×512, **76 distinct bricks**.
2. **Model.** Mask R-CNN, ResNet-50 with FPN, initialized from COCO.
3. **Few-shot real fine-tune.** 20 cellphone photos on a white background, shot straight down, no occlusion, hand-labeled. The authors say each real image took about **50 minutes** to annotate.
4. **Results they report.** Synthetic-only: 83.3% segmentation AP50 and 82.1% on their application metric, on uncontrolled test photos. Synthetic plus 20 real images: **91.33% AP50** uncontrolled, **98.7% AP50** on a controlled test set. Real photos alone, even 20 of them, were not usable (best 4.25% AP50).
5. **Errors they name.** Touching same-color bricks; parts that look identical from one viewpoint; parts that differ only by length, which need a scale reference.

The paper also reviews the commercial field as of 2022:

- **Instabrick** (https://www.instabrick.org/): hardware camera plus a cloud network trained progressively on user images. Single pieces, controlled capture.
- **RebrickNet** (paper’s URL https://rebrickable.com/rebricknet/ returned **404** on 14 Oct 2026): community-submitted photos and 10-second videos of single parts under strict capture rules. The awesome-list entry (dated in that README as 2022) said it recognized about 300 parts. **Status now: the URL is dead.** Do not treat RebrickNet as a live product.
- **Brickit:** more flexible, subset recognition, training undisclosed.

**Why this paper matters for RC even though it is about LEGO.** The result that transfers is methodological: if you have CAD or even clean studio renders, synthetic piles beat a small real dataset, and a handful of real photos closes the gap. The result that does **not** transfer is the premise. The authors say LEGO is “probably the most complete extensive collection of 3D CAD modeled real-world objects publicly available.” RC arms, bulkheads, and gearboxes are not.

### 3.3 BrickScan (formerly BrickMonkey) and Bricksee

**BrickScan / BrickMonkey**

- Site: https://brickmonkey.app/ — the page itself says BrickMonkey was renamed to BrickScan.
- Play listing: https://play.google.com/store/apps/details?id=io.brickmonkey.minifigapp

The site claims identification of **16,000+ figures and 76,000+ parts** from a photo, collection statistics and value, “smart build” to finish a minifigure (head, legs, hair), and **XML export into BrickStore, Bricqer, or BrickTrac**, plus copy-the-ID for paste into other tools. The Play text adds price comparison and finding sellers.

**Flow.** One object or one figure in frame, not a 1,000-brick pile. Output is an ID that the marketplace stack already understands. That is closer to “what part is this?” than Brickit’s “what can I build?”.

**Bricksee**

- https://www.bricksee.app/
- Also listed in https://github.com/360er0/awesome-lego-machine-learning

The homepage describes two jobs: add owned sets (it says “over 10,000 sets”), and photograph bricks laid out evenly to “recover hidden bricks.” After detection it shows which of your sets contain that part, lets you add the part to a set you have not saved, and tracks rebuild progress against a set inventory, including in-app instructions.

**Inference:** Bricksee is a set-completion tracker with a photo shortcut. It is closer to “I am rebuilding this car from a manual” than Brickit is.

### 3.4 Rebrickable

**Primary docs**

- Build Engine: https://rebrickable.com/help/build-engine/ (page says last modified 17 Feb 2024 by icedragonj)
- Buying parts: https://rebrickable.com/help/buy-parts/
- BrickLink buying: https://rebrickable.com/help/bricklink/
- BrickOwl: https://rebrickable.com/help/brickowl/ (last modified 28 Feb 2025)
- FAQ: https://rebrickable.com/help/faq/
- API v3: https://rebrickable.com/api/v3/docs/?key=
- Older API docs (still online, describes external IDs): https://rebrickable.com/api/docs/
- Part-numbering help, cited by the awesome list: https://rebrickable.com/help/part-numbering/

**User flow.**

1. You enter what you own as set lists, loose part lists, lost parts, and assembled sets. You can freeze some lists so those parts are not “spent” on alternate builds.
2. Build Engine compares that multiset to a target set, MOC, or custom list.
3. Color matching is a setting: Exact, Similar, or Ignore. Part relationships can ignore prints, mold variants, or alternates. Minifig accessories and non-LEGO items (stickers, books) can be ignored. “No Color / Any Color” matches anything. Spare parts in official inventories are treated differently from required parts.
4. Results are a **missing-parts list** plus a **suggested sets** tab (buy a sealed set that happens to contain the holes).
5. Buy Parts does not check out on Rebrickable. It reads external store inventory and deep-links a cart. Documented stores: **BrickLink, BrickOwl, and ToyPro**. Stock is described as accurate to within 24 hours or less. Large lists rarely exist in one store, so there is a Multi-Buy mode. Pro can favorite or blacklist stores.
6. You can also push the missing list into a BrickLink Wanted List or a BrickOwl wishlist, or download XML.
7. When the order arrives, you import the BrickLink or BrickOwl order back into the collection.

**Data model.**

- Official sets, parts, colors, minifigs, inventories (normal vs spare).
- User collections.
- MOCs with a required full parts list and some form of instructions (photos, Studio/LDD/MPD, PDF, even a clear YouTube video). Premium MOCs require a high-quality PDF and are the thing Rebrickable actually sells (digital instructions, not plastic).
- External IDs. The older API docs say a part can carry IDs for other systems, naming BrickLink, Peeron, LDraw, and LEGO design IDs. The v3 docs say the API does **not** include Rebrickable-only sub-sets or B-models, has **no pricing** (that belongs to BrickLink/BrickOwl), and no longer supports general MOC inventories except alternate builds of sets.

**Hard problem they solved.** Set math over a messy ID space: colors that are “close enough,” molds that changed, printed parts that can be replaced by plain ones, and a buy list that survives being split across stores. That is a **compatibility and commerce** problem, not a vision problem. It is the piece James would need after a part is identified.

### 3.5 BrickLink, BrickOwl, Studio, LDraw

**BrickLink**

- API wiki: https://static.bricklink.com/alpha/default/api_wiki.html
- Wanted-list help: https://www.bricklink.com/help.asp?helpID=1
- Item-number help, cited by the awesome list: https://www.bricklink.com/help.asp?helpID=168

The API exposes catalog items, categories, supersets (what contains this part), subsets (part-out), and a **price guide**. Wanted Lists are the shopping primitive: add from the catalog, upload XML, or part-out an item, then “Buy All” searches stores. Color can be specific or “notify me regardless of color.”

**BrickOwl**

- API: https://www.brickowl.com/api_docs

Catalog list, ID crosswalk (`item_no`, `design_id`, `bl_item_no`, `set_number`), and bulk daily dumps. Richer lookup requires “catalog approval.” Quotas are tight (for example 100 catalog-list calls per day). This is a store-tool API, not an open hobby dataset.

**Studio (BrickLink Studio / Stud.io)**

- Intro: https://studiohelp.bricklink.com/hc/en-us/articles/5404381697559-Introduction-to-Studio
- Older help that still describes the buy path clearly: https://www.bricklink.com/v2/build/studiohelp.page
- Upload as Wanted List: https://studiohelp.bricklink.com/hc/en-us/articles/5705925898135-Upload-as-a-Wanted-List
- Finding parts: https://studiohelp.bricklink.com/hc/en-us/articles/6502499385111-Finding-parts

Studio is a Windows/Mac desktop builder. You design with virtual parts, render, and make instructions. Because it sits on the BrickLink catalog, it can show which colors do not exist and what parts cost. The buy path is explicit: **Add to Wanted List** uploads the model’s BOM (or a submodel) to a BrickLink wanted list; you then verify condition, max price, and quantity; **Buy All** finds stores. Part search works by BrickLink ID or by official names, which often are not the fan nicknames (“cheese slope”). The help page tells you to search BrickLink for the official name, then search Studio by ID.

**LDraw**

- Central site, as cited by the library readme: http://www.ldraw.org/
- Part-number spec, cited by the awesome list: https://www.ldraw.org/part-number-spec.html
- Official model repository, cited by the awesome list: https://omr.ldraw.org/
- Viewers and tools on GitHub, with star counts retrieved 14 Oct 2026 via GitHub search: [tcobbs/ldview](https://github.com/tcobbs/ldview) (117 stars, real-time 3D viewer), [trevorsandy/lpub3d](https://github.com/trevorsandy/lpub3d) (202 stars, instruction editor), [TobyLobster/ImportLDraw](https://github.com/TobyLobster/ImportLDraw) (377 stars, Blender import), [nilsschmidt1337/ldparteditor](https://github.com/nilsschmidt1337/ldparteditor) (59 stars).

LDraw is the community CAD substrate. The academic Brickognize pipeline and many student classifiers render LDraw parts in Blender. Rebrickable’s older API documents LDraw as one of the external ID systems. **There is no equivalent public CAD library for Traxxas, Arrma, or Associated parts.**

**SetFound** (adjacent, not vision-first): https://setfound.com/features — you tell it loose parts, it ranks likely sets, you mark quantities complete/partial/missing, and it exports a BrickLink-compatible wanted list. It states it is not a marketplace.

### 3.6 What transfers to RC, and what does not

| LEGO mechanism | Transfers to RC? | Why |
| --- | --- | --- |
| Photo → part ID, one isolated part on a plain background | Partially | Feasible for distinctive parts (a Traxxas spur, a known servo, a body). Fails on screws, bearings, and look-alike arms. |
| Photo of a mixed pile → full inventory | Poorly | LEGO piles are colorful and repetitive. An RC parts bin is grease, similar black nylon, and metal hardware. The paper’s failure mode (touching same-color parts) is the normal RC case. |
| Synthetic training from public CAD | Only if someone models the parts | LDraw is public. Manufacturer STEP/IGES files generally are not. |
| “What can I build with what I have?” | Weak | RC owners do not want a new invention. They want *this* truck to run. The analog is “which hop-ups fit this chassis,” not “suggest a MOC.” |
| Color-flexible matching | Mostly irrelevant | Color is cosmetic on RC. **Revision, scale, and drivetrain** are the match keys. |
| Missing-parts list → marketplace cart | The right commerce shape | But the ID space is manufacturer stock numbers plus aftermarket “fits X” claims, not one BrickLink ID. |
| Export between inventory apps | Yes, as a pattern | Brickit → Rebrickable → BrickLink XML is the template for “garage → diagram → retailer SKU.” |
| Subset accuracy is good enough | Yes | Brickit does not need every brick. An RC app can be useful if it gets the expensive broken part right and asks a question when it is unsure. |
| Community-built inventories | Yes, and already how racing kits work | Associated, Xray, and Tekno owners already diff part lists between kit years. rcparts.app is the small version of this. |

---

## 4. RC-specific products and sites

### 4.1 Fault diagnosis that already exists, and where it lives

**Traxxas support is a real decision tree, brand-locked.**

- Parts finder shell: https://traxxas.com/parts-finder (the page is a client-rendered app; a plain fetch on 14 Oct 2026 returned almost no part data).
- “Model does not run”: https://traxxas.com/support/model-does-not-run-no-movement
- ESC programming and LED codes: https://traxxas.com/support/programming-your-traxxas-electronic-speed-control
- Example exploded HTML with part numbers and prices, 1/16 Slash 4X4 chassis: https://traxxas.com/media/productattach/C-70054-1/5/1-16-Slash-4X4-70054-1-Chassis-Assembly.htm

The “does not run” page is a short ordered checklist: radio on before battery, connector pins, battery charged, then ESC LED behavior, then reprogramming. The ESC page defines a code book:

- Solid green: low-voltage detection **on** (LiPo).
- Solid red: low-voltage detection **off** (NiMH). The page says never run LiPo in that mode.
- Slow blinking red: low-voltage shutdown, power cut, wait for a full pack.
- The VXL-6s installation PDF adds thermal shutdown, throttle channel vs battery port, profile 3 at 50% throttle, profile 2 with no reverse, gearing, and motor leads. https://traxxas.com/media/productattach/3485T/8/KC2994-R01-3484,%203485-VXL-6s-Installation%20Instructions_WEB%20-%20EN.pdf

The XL-5 instruction PDF states LiPo policy in the manufacturer’s words: LiPo is for advanced users, Traxxas does not recommend anyone under 14 handle packs without an adult, LVC is only one part of safe use, and the user must follow the battery and charger makers. https://traxxas.com/media/productattach/3018R/8/KC1761-R01_3018R-XL5_INST_140430-EN.pdf

**This is the diagnosis content a new app would be tempted to copy.** It is also copyrighted support material. A v1 can *link* to it and encode generic, non-verbatim checks (“is LVC on?”) without reproducing Traxxas’s pages.

**Spektrum Firma manuals** mix programming with a troubleshooting table: LVC active, battery below the cutoff, wrong battery profile, failed ESC. SMART telemetry (voltage, current, battery identity) requires a SMART-Throttle receiver and an IC3/IC5 SMART battery; EC connectors run the car but do not pass battery data. Programming paths named in the manual: the SPMXCA200 box and the SmartLink USB app. https://www.spektrumrc.com/ProdInfo/Files/Firma-Manual-EN.pdf

**So Dialed RC AI Mechanic** is the closest shipping “ask what’s wrong” product, and it is a **race-setup** product, not a break-fix product.

- https://www.sodialed.com/apps/rc-ai-mechanic?src=rc-settings
- Track directory: https://www.sodialed.com/tracks

What the page actually says:

- Plain-language handling questions, tuned to a car and a track.
- “Knows 700+ cars,” with kit settings, strongest on popular race kits. Classes named: 1/8, 1/10, 1/12, on-road, off-road, oval, drift, drag.
- Pinion and gear-ratio help inside the chat.
- It remembers the cars you entered. It does **not** use your saved setups; the page points you to a separate RC Setup App for that.
- **Photos: “Not yet.”**
- Training sources, in their words: proprietary technical documentation and setup guides, publicly available manufacturer data, and “other licensed or publicly-available data sources used by our AI provider (OpenAI).” Private user data is not used for training.
- Price: 10 free questions, then 3 per day, or **USD 19.99/year** unlimited in the US, or a 100-question pack. They claim 5.0 from 23 App Store ratings. That is a small rating count.
- Sibling apps named on the same page: Gear Calculator Pro (free) and RC Setup App.

**Inference:** So Dialed has already occupied “AI that knows kit setup sheets.” It has not occupied “my dogbone broke, here is the SKU.” Building a generic chatbot on top of forums would compete with them on the wrong job and would repeat bad forum advice (see LiPo threads below).

**RC Garage Pro** (http://rc-garage-pro.polsia.app/) describes a garage, parts inventory, run logs, a forum, and an “AI pit crew.” This research found a landing page on a `polsia.app` host and did **not** find an App Store listing, a company history, or evidence of a real user base. Treat it as an unverified concept site, not a product to copy or to fear.

### 4.2 Exploded diagrams and parts finders

**Horizon Hobby shoppable exploded view**

- Example URL pattern: https://www.horizonhobby.com/interactive-exploded-view?pid=ARA4202V3T1
- Same UI on brand sites: https://www.arrma-rc.com/en/interactive-exploded-view?pid=ARA2104 and https://www.losi.com/interactive-exploded-view?pid=LOS01015T1 and https://www.axialadventure.com/interactive-exploded-view?pid=AXI-2035
- How-to article: https://www.horizonhobby.com/blog-article-replacement-parts/

The article’s description of the Arrma Gorgon page is the clearest user flow:

1. Product page → Quick Links → Manuals & Support (PDF diagram and manual, multilingual, with stock numbers), Replacement Parts, Optional Parts, and **Shoppable Exploded View**.
2. The shoppable view is the same diagram with **part numbers as links**.
3. Click a number → photo, description, Add to Cart.
4. The page chrome says zoom with +/−, wheel, or pinch, and drag to pan. Several brand pages say the diagram loads in a box and, in the fetched HTML, “Your browser does not support iframes.”

**Inference:** the interactive layer is an embedded viewer (iframe) over a diagram, with hotspots bound to SKUs in the Horizon catalog. The underlying document is still the manufacturer explosion, also shipped as a static PDF. This is not 3D, not AR, and not a step-by-step assembly guide. It is a **picture map of SKUs**. That is the highest-value RC UI that already exists.

**Traxxas** publishes exploded assemblies as HTML pages of callouts. The 1/16 Slash 4X4 chassis page lists stock numbers, descriptions, and some prices in the page text (for example chassis 7022 at $15.00 on that page). It is a catalog page, not a guided rebuild.

**Team Associated** keeps manuals, setup sheets, exploded views, and parts lists on a portal, often as PDFs, including for old kits. Example index: https://portal.associatedelectrics.com/teamassociated/cars_and_trucks/RC10B4/Factory_Team/manuals_setups/ which lists an instruction manual, exploded view, parts list, and setup sheets. A 2000s B4 parts PDF states the intended use in one sentence: use the exploded drawing to locate the part, then look up the number. It also says the drawing is for finding parts, not for assembling the kit. https://img2.associatedelectrics.com/pdf/cars_and_trucks/RC10B4/RSRTR/cat_b4.pdf

**Tamiya** publishes chassis parts catalogs as PDFs, for example TC-01: https://www.tamiya.com/cms/english/rc/catalogs/TC-01_parts_catalog.pdf and BB-01: https://www.tamiya.com/cms/english/rc/catalogs/BB-01_parts_catalog.pdf . The extracted text is a compatibility list (option parts, notes about which shaft set replaces which), and it points readers to a “matching parts” list on tamiya.com. The PDF text extraction was garbled; the existence of the catalogs is solid, the fine print should be read in the PDF itself.

**Tekno** publishes full parts lists as PDFs. Example NT48 2.0: https://www.teknorc.com/wp-content/uploads/2021/11/TKR9400_NT48_2.0_full_parts_list.pdf — SKU, description, and explicit cross-fit notes (“ET/NT48 2.0”, “use with TKR9453”). A retailer index of nitro exploded views points back at Tekno’s site: https://ultrarchobbies.com/tekno-rc-nitro-exploded-views/

**Axial** manuals from the Spektrum/Horizon file host include a parts list with quantities. Example SCX10 II: https://my.spektrumrc.com/ProdInfo/Files/AXI90104-Manual-EN.pdf

**Logic RC**, a UK retailer, mirrors exploded-view indexes for TLR, Pro Boat, Losi, HobbyZone, ECX, Blade, Axial, and Arrma: https://www.logicrc.com/default.aspx?s=c%3A0%2Cc%3A50-30-20-60%2Cc%3AZZ-Support%2Cc%3AZZ-EXPViews%2Cc%3AZZ-EX-LOS

**What this research did not find** as a clean, current, official interactive parts tree: a Kyosho or HPI equivalent of Horizon’s shoppable view. Absence in this search is not proof they lack PDFs; it is proof they are not as visible as Horizon’s system. A v1 that promises “all brands” will stall on Kyosho, HPI, Mugen, Xray, Yokomo, and Schumacher unless it scopes them out.

### 4.3 Retailers and local shops

**AMain**

- Vehicle parts form: https://www.amainhobbies.com/rc-parts-department — “What are you working on today? Use the form below to shop your specific vehicle.”
- Traxxas-specific finder marketing page: https://www.amainhobbies.com/traxxas-parts/c1466 — factory, option, and aftermarket for named Traxxas models.
- Store locator: https://www.amainhobbies.com/store-locations — city, state, or ZIP. This is AMain’s own stores, not every independent hobby shop.

**rcMart** (Hong Kong, with local shops in Yuen Long and Yau Ma Tei mentioned on the page): https://hk.rcmart.com/rc-parts-store — a wide aftermarket and OEM list (Tamiya, Traxxas, Kyosho, Axial, Associated, Xray, Yokomo, MST, Reve D, RC4WD, Arrma, HPI, and many drift brands). This is a catalog organized by **brand**, which is how Asian and drift parts shopping actually works.

**Tower Hobbies:** https://www.towerhobbies.com/ — same corporate family as Horizon since 2018, shared Demandware master catalog as noted above.

**HobbyTown** showed up only as a competitor in the Grips traffic estimate, not as a parts-diagram product. Independent shops remain a counter problem: the owner knows what is in the drawer, and that drawer is not an API.

**Jenny’s RC and the aftermarket.** Forum threads, not court filings, describe Traxxas enforcement against sellers of parts and against aftermarket sites’ use of Traxxas model names. Examples: https://www.arrmaforum.com/threads/traxxas-hits-jennys-rc.61545/ and https://www.arrmaforum.com/threads/traxxas-goes-after-the-trx4m-aftermarket.61499/page-6 . **Inference, and it matters for product design:** a parts app that scrapes Traxxas diagrams, uses Traxxas trademarks in commerce, or resells “genuine” parts without a dealer relationship is picking a fight the forums already document. Link out, or get a dealer account. Do not rebuild their diagram set.

### 4.4 Track and ride-site finders

These products exist and are fragmented by discipline.

| Product | What the source says | URL |
| --- | --- | --- |
| So Dialed track directory | Headline: **1,862 RC racing tracks across 55 countries** | https://www.sodialed.com/tracks |
| RC Spotters | Category page extract listed RC Crawling Trails 1740, Hobby Shops 944, Flying Fields 481, Racetracks 441, Drift Tracks 48. Counts are from a search snippet of the category page, not a database export. | https://rcspotters.com/trail_cat/rc-racetrack/ |
| BashMaps | Play listing: map of tracks, crawling, parks, events, clubs; community-submitted spots | https://play.google.com/store/apps/details?id=com.bashmaps.app |
| RC Map | Play listing: crawler and basher spots, GPS tracks, live location, competitions. Reviews on the listing complain about thin coverage and slow moderation of new spots. | https://play.google.com/store/apps/details?id=com.rcmapio.app |
| RCGuides | Researched listings with a “last verified” date and activity filters (on-road, off-road, oval, crawling, drift). Example cards showed verification dates of 28 Sep 2026. | https://rcguides.com/ |
| R/C Tech track locator | A forum, not an app. Threads are place-name posts, many years old. | https://www.rctech.net/forum/track-locator-forum-37/ |
| LiveRC | Live timing and video for clubs that use it. Not a “find a bash spot” map. Recorded video has been paywalled (Bonus Lap); the forum discussion of that change is at https://www.rctech.net/forum/racing-forum/1094408-liverc-what-can-i-actually-do-here.html | https://live.liverc.com/ |

**Gap inside a crowded category:** none of these connect the place to the vehicle. A crawler map does not know you drive a Mini-B. A race directory does not know your transponder class or that the local club is carpet 1/10 buggy on Tuesday. RCGuides is the most honest about staleness (it prints a verification date). RC Map’s own reviews say user-submitted spots can be wrong. That is the data problem, not a missing pin on a map.

Air and boat show up as adjacent fields on the same platforms: RC Spotters has flying fields, RCGuides has flying fields, Horizon’s catalog includes planes and boats, Hobbywing’s HW Link covers aircraft and boat ESCs. A v1 that tries to be car + boat + air will inherit three parts taxonomies.

### 4.5 Comparison tools

**RC Car Compare** — https://rccarcompare.com/ and https://rccarcompare.com/compare

The site says it compares price, top speed, weight, drivetrain, motor, scale, and “15+ other specifications,” claims **71+ models** and **181 head-to-head matchups**, and names Traxxas (26), Arrma (17), Losi, Yokomo, MST, Team Associated, Axial. It uses affiliate links. The homepage’s “fastest car” answer is only “fastest in our catalog,” which is the right way to read every spec on a small affiliate database. Coverage is beginner and basher heavy, not a full race-kit catalog.

**ARRMA’s own compare** is a spec table from the manufacturer PIM: assembly time, bearings, connector, FDR, motor Kv, springs, track width, waterproofing, wheel hex. Example: https://www.arrma-rc.com/en/compare?pid0=ARA8608V5 (Kraton 6S). This is the high-quality version of comparison, and it only covers Arrma.

**RC Donkey** — https://www.rcdonkey.com/compare/?vehicles=41,716 showed a side-by-side of Traxxas X-Maxx vs Arrma Granite Voltage with product codes, scale, power, gearing, and dimensions. Depth looked higher than RC Car Compare on that one pair. Currency of the whole catalog was not audited.

**rcparts.app** — https://rcparts.app/

A side project whose entire pitch is: compare spare-parts lists between **revisions of the same racing kit** (Associated B74.1 vs B74.2, Xray X4 2022 vs 2023) so you can see what is compatible, new, or obsolete. Select manufacturer, then models. This is the sleeper product in the landscape. It is small, and it is the feature racers actually need when a manual’s part number changed.

### 4.6 Electronics apps (diagnosis, but not repair guides)

These are the tools enthusiasts already trust for “what’s wrong with the power system,” and they require hardware:

| App | What it does | Source |
| --- | --- | --- |
| Traxxas Link | TQi radio tuning, telemetry (speed, voltage, RPM, temperature), dashboards, recording. Needs the wireless module and a TQi receiver. Some models telemetry from the ESC; others need sensors. | https://traxxas.com/traxxas-link-app and https://play.google.com/store/apps/details?id=com.traxxas.traxxaslink |
| Castle Link 2 | Program Castle ESCs and BECs, data logs, firmware, via B-Link 2 Bluetooth. Compatible list on the product page includes Cobra, Talon, Copperhead, X-Series, most Mamba and Sidewinder, CC BEC. Not compatible with Castle Telemetry Link for Spektrum/Futaba at the same time. | https://castlecreations.com/products/accessories-b-link-2-bluetooth-interface-011-0181-00 and https://apps.apple.com/tm/app/castlelink2/id6743709203 |
| Hobbywing HW Link V2 | Phone programming over HW WiFi Express or OTA programmer for Xerun, Ezrun, Platinum aircraft, and Seaking Pro boat ESCs. Play reviews complain about data-log regressions. | https://play.google.com/store/apps/details?id=com.hobbywing.hwlink2 |

A new app should not pretend to replace these. It should ask “what ESC do you have?” and deep-link the right programmer, then interpret the symptom (cogging, thermal, LVC) in plain language.

### 4.7 AR, voice, and the repair-guide neighbors

**iFixit is the repair-guide gold standard, and it is not about RC.**

- App marketing: https://www.ifixit.com/go/app
- Play listing: https://play.google.com/store/apps/details?id=com.ifixit.ifixitmobile
- FixBot: https://www.ifixit.com/go/fixbot and how-to https://www.ifixit.com/Info/How_to_use_FixBot
- Public API index: https://www.ifixit.com/llms.txt and https://about.ifixit.com/api/2.0/doc/
- Machine-oriented site index: https://www.ifixit.com/llms.txt states reads are public with no key at `https://www.ifixit.com/api/2.0`

The data model, from their own API description:

- A **device** (wiki/category) has guides, parts, and troubleshooting pages.
- A **guide** has steps. Each step has lines of text, images, and video. Tools and parts are first-class. Prerequisite guides can be inlined.
- Troubleshooting is a separate URL shape: `/Troubleshooting/{device}/{problem}`.
- Community answers sit beside official guides.
- The store sells the parts and tools the guide names. The llms.txt file says each guide’s parts and tools are also the shopping list.

FixBot, from the marketing page and the how-to:

- Chat on web, iOS, and Android.
- Diagnose from text.
- Photo upload to identify a device.
- Upload your own PDF manual and ask questions against it.
- **Voice mode is labeled experimental.** The how-to says: click the waveform icon. The app marketing calls it hands-free coaching.

No iFixit page retrieved in this search describes an AR overlay on a physical object. Voice and photos, yes. Spatial anchoring, no.

**FixItXR** is a hackathon project, not a product: Meta Quest 3 passthrough, a Roboflow detector for engine-bay parts, Gemini vision, and TTS step guidance. https://devpost.com/software/fixitxr-zi7xk9 . It shows the interaction people imagine (labels stuck to real parts, voice, hands-free). It also shows the cost: a custom detector per engine bay, and a headset almost no RC hobbyist owns at the track.

**Unfold** is a small open-source experiment (2 GitHub stars as of 14 Oct 2026) that turns an assembly manual into a 3D step player with an exploded view and a voice copilot (“next step”, “go to step 3”). https://github.com/silasyeem/unfold . License field on the GitHub API was null. It is a furniture-manual demo (STRANDMON, KNARREVIK), not RC, and not mature. It is useful as a **UX reference**: exploded view, step scrubber, and voice are separable features. Voice does not require AR.

---

## 5. Communities are the diagnosis layer

People already paste a video and get a differential diagnosis. Examples retrieved 14 Oct 2026:

- Traxxas Maxx, three red flashes after a wash. Replies split between “recalibrate the ESC” and “those 4S Maxx ESCs die this way, warranty it.” https://www.reddit.com/r/rccars/comments/1rn02uj/traxxas_maxx_esc_trouble/
- Associated RC10T7 hesitation. Replies walk sensor wire, spur teeth, gear mesh, radio calibration, antenna routing, cogging from gearing, battery, then firmware and hall sensors. https://www.reddit.com/r/rccars/comments/1vns2xh/whats_causing_this/
- TRX-4 no throttle after maintenance. Replies: endpoints and dual rate, throttle trim, receiver plug orientation, bind, LVC mode, disconnect the servo as a test, factory-reset the ESC. https://www.reddit.com/r/Traxxas/comments/1welnjm/trx4_motor_not_responding_to_throttle/

That is a **ranked differential**, produced by people who have seen the failure. It is also contradictory. A product that only summarizes Reddit will sometimes recommend a warranty replacement and sometimes a button sequence for the same LED.

**Forums**

- RCGroups: https://www.rcgroups.com/ — still the wide RC site (air, surface, boats). The homepage retrieved was editorial and general discussion, not a structured parts tool.
- RC Universe Traxxas monster-truck forum: https://www.rcuniverse.com/forum/traxxas-monster-truck-forum-251/ — long-lived, still receiving posts in 2025–2026 about transmissions, servos, and engines. Page count shown as 1479.
- R/C Tech: https://www.rctech.net/forum/ — the page displayed **1,061,540 threads, 15,776,892 posts, 545,638 members**. Forums include Radio and Electronics, Racing, Rookie Zone, Crawler Room, regional racing, and manufacturer forums. This is the competitive-racing brain of the English-language hobby. The track locator subforum is stale-looking thread titles, which is evidence that forums are a bad database.

**Reddit.** A fetch of r/rccars about.json timed out, so this report does **not** state a subscriber count. The subreddit is active enough that March and September 2026 diagnosis posts were on the first page of search. Related communities seen in search: r/Traxxas, Arrma RC Forum (https://www.arrmaforum.com/), RC Talk (https://www.rctalk.com/).

**YouTube** is where procedures live (gear mesh, diff rebuilds, soldering). A January 2025 recommendation thread names, among others, Kevin Talbot, JConcepts, BeachRC, LiveRC, Red RC, Jaytee, Tomley RC, Hall Brothers RC, Ryan Harris, Roach RC, ToniSport, and doctormosfet for driving physics. https://www.reddit.com/r/rccars/comments/1i0g98u/good_rc_youtube_channels_to_follow/ . Subscriber counts were not re-verified. The product implication: the best assembly guide for a diff is often a 20-minute video, not a PDF. A useful app links the video at the step where the user is stuck, it does not re-host it.

**Discord and Facebook.** This search did not retrieve audited member counts or a current official directory. Hobbyists use both, especially for local crawler groups and brand groups. Treat them as distribution and support channels, not as a dataset you can mine cleanly. Anything scraped from private groups is a consent problem, not a feature.

---

## 6. GitHub and open source

Searches run on 14 Oct 2026: GitHub repository search for LEGO recognition, LDraw, and “RC car parts / exploded diagram,” plus the curated list https://github.com/360er0/awesome-lego-machine-learning (533 stars, **no license** on the repo API result). Keyword search for “RC car parts” mostly returned student Bluetooth-car firmware, not parts catalogs.

### 6.1 LEGO vision and CAD (reusable ideas, not an RC catalog)

| Repo | Stars | License | Last push (API) | Usable for an RC app? |
| --- | --- | --- | --- | --- |
| [360er0/awesome-lego-machine-learning](https://github.com/360er0/awesome-lego-machine-learning) | 533 | None stated | README content is a 2022–2024 bibliography | Yes, as a map. Not code. |
| [jtheiner/LegoBrickClassification](https://github.com/jtheiner/LegoBrickClassification) | 115 | **No license** | 30 Apr 2021 | Research code for synthetic data and a classifier on a small part set. Not a product. No license means you cannot safely copy it into a commercial app. |
| [blokbot-io/OpenBlok](https://github.com/blokbot-io/OpenBlok) | 32 | MIT | 31 Mar 2023 | Open-source LEGO ID and sorting. Stale. MIT is usable; the models and accuracy were not evaluated here. |
| [NazarLysyi/brickscope](https://github.com/NazarLysyi/brickscope) | 13 | MIT | 5 Oct 2026 | A thin, current client: photo → Brickognize API → Rebrickable lookup, plus an MCP server. This is the cleanest “recognition then catalog” glue. It depends on two third-party services. |
| [idanyd/BrickMapper](https://github.com/idanyd/BrickMapper) | Not star-checked via API | Not confirmed | README describes YOLO11n step-box detection in **instruction PDFs**, OpenCV template match, Brickognize, Rebrickable downloads | Interesting because it reads manuals, which is closer to RC PDFs than pile photos are. Maturity unknown. |
| [uefroboticsclub/lego-sorter](https://github.com/uefroboticsclub/lego-sorter) | 1 | GPL-3.0 | Created Mar 2025 | Student conveyor sorter that calls Brickognize. GPL. Not a catalog. |
| [jessedegans/MachineLearningLegoSorting](https://github.com/jessedegans/MachineLearningLegoSorting) | 1 | Not in the minimal API view | Pushed Dec 2021 | Student proof of concept. |
| [tcobbs/ldview](https://github.com/tcobbs/ldview) | 117 | Not re-fetched | Updated Oct 2026 | Mature LDraw viewer. Useful only if you had RC models in LDraw, which you do not. |
| [trevorsandy/lpub3d](https://github.com/trevorsandy/lpub3d) | 202 | Not re-fetched | Updated Oct 2026 | Instruction-authoring for LDraw. Same limitation. |
| [silasyeem/unfold](https://github.com/silasyeem/unfold) | 2 | None | 13 Sep 2026 | UX demo of 3D steps plus voice. Not production. |

Rendering pipelines cited by the awesome list, not individually audited for licenses in this pass: [spencerhhubert/brick-renderer](https://github.com/spencerhhubert/brick-renderer), [brianlow/lego-rendering](https://github.com/brianlow/lego-rendering), [GistNoesis/BrickRegistration](https://github.com/GistNoesis/BrickRegistration), [WHSnyder/LegoTrainingRenderer](https://github.com/WHSnyder/LegoTrainingRenderer). They exist to manufacture training images from LDraw. That approach is the one the *Sensors* paper validates. It is blocked, for RC, on geometry you are not allowed to copy out of a manufacturer PDF.

Public LEGO image datasets the awesome list points at (Kaggle B200, Gdańsk University of Technology / Most Wiedzy sets, a *Scientific Data* paper on renders vs photos: https://www.nature.com/articles/s41597-023-02682-2) do not contain RC parts.

### 6.2 RC software on GitHub

**[stubbs41/rc_hub](https://github.com/stubbs41/rc_hub)** — 0 stars, 0 forks on 14 Oct 2026. README describes a Flutter app: Supabase auth, vehicles, parts inventory, interactive diagrams, and AI diagnosis from photos. Tables named in the README: `vehicles`, `parts`, `vehicle_parts`, `part_diagrams`, `diagnostics`, `media`. No evidence of a real parts catalog, a license was not retrieved, and the repo is a schema sketch. **Not usable as a product or as a data source.**

Other “RC car” repositories in search were ESP32/Arduino drive projects (wiring diagrams, not exploded parts). Examples: [un0038998/ESPNOW_Car](https://github.com/un0038998/ESPNOW_Car) (49 stars, MIT), [un0038998/PS3ControlledCar](https://github.com/un0038998/PS3ControlledCar) (28 stars, MIT). Irrelevant to repair.

**No maintained open-source RC parts catalog, fault tree, or exploded-diagram browser was found.** That absence is a finding. The data lives in manufacturer PDFs and retailer databases, not on GitHub.

---

## 7. Reverse engineering the strongest products

Feature-level, not a build recipe. Six products cover the four jobs: vision, repair guides, parts commerce, and the one real RC assistant.

### 7.1 Brickit

- **For:** parents and kids with a bin of loose LEGO, secondarily adult builders.
- **Core loop:** photo of a spread → recognized subset → suggested build → step instructions with the part highlighted in the photo. Secondary loop: scan into numbered bags (Pockets) → search → export to Rebrickable.
- **Data model:** a closed vocabulary of ~1,600 common parts; a library of original build ideas and instructions; user scans and corrections; optional set ownership; bag IDs. Not the full LEGO catalog.
- **Tech signals:** on-device or cloud vision (they do not say which) trained on synthetic piles plus user photos; localization so a UI can point at a brick; a recommender from a parts multiset to a build; human corrections as training signal. 92% is their 2022 marketing claim.
- **Monetization:** free, Pro subscription, education one-time purchase.
- **Hard problem solved:** good enough detection in clutter, and a content strategy that tolerates missing parts. They never had to be a store.

### 7.2 brickognize.com

- **For:** someone holding one unknown element, minifig, set, or sticker sheet.
- **Core loop:** photo → ranked catalog hit in a fraction of a second → ID that other tools can look up.
- **Data model:** a large image index aligned to LEGO IDs (claimed 125k). Accuracy 98.5% is unpublished methodology.
- **Tech signals:** public HTTP API, multipart image, JSON items. “Image search” wording plus latency suggests retrieval more than a 125k-way classifier. **Inference.**
- **Monetization:** not stated on the about page. The API is used by hobby projects without an obvious key in the published curl examples. That can change.
- **Hard problem solved:** open-world identification against the long tail, which Brickit’s 1,600-part set deliberately avoids. The academic paper shows why the long tail is expensive if you insist on detection in a pile: annotation and look-alike parts.

### 7.3 Rebrickable + BrickLink Studio

- **For:** adult fans who own sets, design MOCs, and buy loose parts.
- **Core loop:** declare inventory → compute the delta to a target → buy the delta from stores that actually have it → import the order back.
- **Data model:** parts, colors, molds, prints, alternates, set inventories, spare vs required, user lists, external IDs (BrickLink, LDraw, LEGO). Pricing is *not* in Rebrickable’s API; it is queried from BrickLink, BrickOwl, and ToyPro and cached on the order of a day.
- **Tech signals:** classical BOM matching with explicit equivalence rules (color distance, mold variants). Studio is a desktop CAD app that emits a wanted-list payload. BrickLink Buy All is a multi-store set-cover search (find stores that cover the list). That set-cover step is the part users feel as magic, and it is an inventory search, not AI.
- **Monetization:** Rebrickable Pro (store favorites, finer color rules) and paid premium instructions. BrickLink is a marketplace (LEGO Group owns BrickLink; this report did not re-fetch the acquisition announcement, so the ownership note is background, not a cited primary page).
- **Hard problem solved:** identity and substitution. “This part can stand in for that part, except when it cannot.” RC needs the same table, keyed by chassis revision rather than by color.

### 7.4 Horizon shoppable exploded view (and Traxxas / Associated PDFs)

- **For:** an owner who already knows which vehicle they have and roughly where the broken piece sits.
- **Core loop:** pick the exact SKU of the *vehicle* (ARA4202V3T1, not “Kraton”) → pan a diagram → tap a callout → cart.
- **Data model:** vehicle revision → diagram sheet (chassis, diff, shocks, body) → callout → manufacturer part number → retailer SKU, price, stock, photo. Optional parts are a separate list from replacement parts. PDFs duplicate the same numbers for offline use.
- **Tech signals:** Demandware/Salesforce catalog, iframe viewer, hotspot-to-SKU. Traxxas’s public exploded pages are server-rendered HTML price lists. Associated is still PDF. No computer vision.
- **Monetization:** parts margin. The diagram is a sales tool.
- **Hard problem solved:** the last inch of commerce for one corporate family. They did not solve “which revision do I own?” if the user only knows the marketing name, and they did not solve independent-shop stock.

### 7.5 iFixit + FixBot

- **For:** anyone repairing a consumer device that iFixit has documented.
- **Core loop:** identify the device → troubleshooting tree or symptom → guide steps with photos → parts and tools in a cart. FixBot sits on top: text, photo, uploaded PDF, experimental voice.
- **Data model:** category tree, device, guide, ordered steps, media, tools, parts, prerequisites, community Q&A, troubleshooting pages. The public read API is the existence proof that this model can be open. RC manufacturers will not offer that.
- **Tech signals:** editorial CMS plus a public JSON API; a newer AI layer grounded in that library (their claim) and able to read a user-supplied PDF. Voice is an extra channel on the same steps, explicitly experimental.
- **Monetization:** parts and tools, plus the brand. Guides are free.
- **Hard problem solved:** trust. Steps are written, photographed, and maintained. The AI is an index, not the source of truth. That is the right architecture for RC, where a wrong LiPo instruction is dangerous.

### 7.6 So Dialed (AI Mechanic + tracks + gearing + setup)

- **For:** club racers, not bashers with a snapped bulkhead.
- **Core loop:** pick a car from 700+ → ask a handling question → get a setup change and a pinion suggestion → go test. Tracks are a separate directory (1,862 claimed).
- **Data model:** car identity, kit settings, track, conversation state. Explicitly not the user’s saved setup sheet, unless you use the other app. No photo input. No parts cart.
- **Tech signals:** they name OpenAI as the provider and name their own docs plus public manufacturer data as the corpus. Gear math is a calculator beside the chat, which is the right split: do not let a language model invent a ratio.
- **Monetization:** annual subscription or question packs. Low public rating count (23).
- **Hard problem solved:** making setup knowledge feel like a conversation without requiring the user to read a 40-page blank setup sheet first. They have not solved break-fix, vision, or commerce.

---

## 8. Gap map against James’s list

**Does one product do the whole job?** No.

**Troubleshoot repairs.** Partial, and split. Traxxas and Spektrum publish symptom → cause pages for their electronics. Forums do the rest, especially mechanical failures (diffs, mesh, bearings, stripped spur). So Dialed troubleshoots *handling*, and says so.

**Fault diagnosis.** The best structured diagnosis is LED and telemetry codes, which already live in the ESC. A new app adds value when it translates “three red flashes on a Maxx after a wash” into a short ranked list: water in the sensor wire, calibration, known ESC failure, and then stops. It loses value when it invents a seventh cause.

**Buy parts from local suppliers or RC shops.** Online OEM parts for Horizon brands are a solved UX. AMain has a vehicle form and a store locator for its own stores. rcMart is a deep brand catalog with two physical shops. **Independent local inventory is not online.** The honest v1 is: identify the part number, show who usually stocks that brand, call or link the shop, and let the user mark “they had it.” A fake “in stock near you” map will be wrong and will burn trust faster than a missing feature.

**Find tracks or ride sites.** Several directories exist. The unmet job is freshness plus fit: surface, class, day of the week, power rules, and whether a basher is welcome. RCGuides’ verification date is the pattern to copy. Building another pin map without a maintenance plan repeats R/C Tech’s track forum.

**Interactive exploded assembly guide.** Horizon is interactive and shoppable, and it is not a guide. Associated’s own old PDF says the explosion is for finding parts, not for assembly. The guide is the instruction manual, a YouTube video, or a forum post. The product opportunity is to **hang the manual’s steps on the same callouts as the cart**, so “step 12, seat the cross pin” and “TKR9149, buy if you lost it” are one object. That is editorial structure, not a new model.

**AR.** Not found as a real RC product. Adjacent demos exist. AR is a poor v1: RC work happens over a stand, under a pit light, with greasy hands, and the part you need is often inside a gearbox the camera cannot see. An exploded diagram with pinch-zoom already solves “where does this go?” for less cost and less tracking failure. AR is a later overlay on a guide that is already correct.

**Audio / TTS instructor.** iFixit ships experimental voice on top of written steps. Unfold demos voice commands for next/previous. This is a presentation layer. It is worth doing once steps exist, because a diff rebuild occupies both hands. It is not a reason to start the company. Read the step aloud from a reviewed script. Do not let the model improvise torque or LiPo advice.

**RC vehicle comparison.** Exists at hobby depth (RC Car Compare, RC Donkey) and at manufacturer depth (Arrma). Useful at purchase time, weakly useful at repair time. The comparison that matters during a repair is **part compatibility across revisions** (rcparts.app), not curb weight.

---

## 9. Features James did not name that hobbyists already struggle with

These came out of the support pages, manuals, and the forum threads above. They are more specific than “diagnose faults.”

**Electronics, in the order people actually get stuck**

- **Radio first, then car.** Traxxas’s no-movement page leads with power-on order. A guide that starts at the motor is wrong.
- **Binding and failsafe.** Not the same as “it won’t steer.” Endpoints, dual rate, and trim show up in the TRX-4 thread before anyone opens the gearbox.
- **ESC profile and LVC.** Solid red vs solid green is the difference between a safe LiPo setup and a ruined pack. This should be a blocking check, not a paragraph.
- **Sensor wire and hall board.** The T7 thread’s consensus cluster. A cheap part, a vague symptom (cog, stutter), and a lot of unnecessary motor swaps.
- **Thermal shutdown vs gearing.** VXL docs tell you to check pinion and drivetrain bind before you declare the ESC dead.
- **Firmware and radio-specific programmers.** Castle, Hobbywing, Spektrum, Traxxas Link. The app should route, not reimplement.
- **Connector families.** IC3/IC5 vs EC3/EC5 vs Traxxas ID. Spektrum’s manual says the car can run on the wrong connector and silently lose battery telemetry. That is a diagnosis trap.
- **Servo saver, endpoints, and a noisy servo.** The TRX-4 reply diagnosed the servo from the audio before the throttle fault.

**Mechanicals that consume Saturday**

- **Gear mesh.** Too tight looks like a bad motor. The forum advice is tactile (a small amount of play), not a single numeric spec for every car.
- **Slipper and spur.** Wear is visible and the parts are consumable. A photo of a spur is one of the few vision problems that might work: teeth are a pattern, and the part number is model-specific.
- **Diff rebuilds.** Shims, oil weight, cross pins, outdrives. Tekno’s parts list is full of “use with” constraints. The guide is a sequence plus a tiny BOM (seals, oil, pins), not an exploded poster alone.
- **Bearing kits.** People buy a kit for a model rather than six sizes. A good parts list groups “bearings for this buggy” as one SKU and also explodes the sizes (for example 4×8×3) so a shop can substitute.
- **Driveshaft pins and CVDs.** Consumable, easy to lose, model-specific. Associated’s old catalogs sold rebuild kits (MIP CVD rebuild) separate from the axle.
- **Waterproofing.** Arrma’s compare table has a yes/no. “Waterproof” on a basher does not mean the sensor wire survived a pressure wash. The Maxx thread is that story. A guide should say what not to spray.

**Identity**

- **There is no VIN.** Identity is a product code on the manual, the box, a chassis sticker, or the version in the name (B74.1 vs B74.2, VXL vs XL-5, 6S vs 4S, brushed vs brushless). rcparts.app exists because those suffixes change the BOM.
- **Photo of the chassis or the manual cover** is a plausible identifier for popular RTR trucks, because body and roll-cage shapes are distinctive. It is a weak identifier for a naked racing kit. OCR of the manual cover or the part number printed on the arm is more reliable than “recognize the truck.”
- **Class compatibility.** A crawler axle part does not fit a basher. A 1/8 buggy diff does not fit a 1/10 short-course truck. Within one brand, hop-ups often fit a family (Tekno’s “ET/NT48 2.0” notes). Across brands, tires and bodies sometimes fit a standard wheel hex (12 mm, 14 mm, 17 mm) and everything else does not.

**Ownership**

- Run log: packs, surface, what broke. So Dialed and the unverified RC Garage Pro both gesture at this. The useful output is “this spur lasts three race days” and “you have not rebuilt the center diff since April,” not a social feed.
- Setup sheet storage. Racers already do this on paper and in So Dialed’s other app. Do not make it the v1 unless the user is a racer.

---

## 10. What is hard

**Parts taxonomy across brands.** LEGO needed BrickLink, Rebrickable, LDraw, and LEGO design IDs, and they still disagree. RC has Traxxas 5-digit numbers, Arrma ARA/ARAC numbers, Losi LOS numbers, Axial AXI numbers, Associated 4-digit numbers, Tamiya 5-digit item numbers, Tekno TKR numbers, plus aftermarket brands that say “fits.” A single catalog is a multi-year editorial project. The shortcut is to **store the manufacturer’s number as the primary key** and attach cross-references only when a human or a published fitment note confirms them. Do not infer fitment from a language model.

**Revisions.** The same marketing name hides several BOMs. Horizon’s exploded-view URL takes a full PID (`ARA4202V3T1`), which is the lesson: the key is the orderable vehicle, not the nickname.

**Counterfeits and the aftermarket.** This search did not find a clean manufacturer “how to spot a fake spur” page. It did find a long, bitter forum record of Traxxas objecting to unauthorized parts sellers and to aftermarket branding. Separately, cheap electronics and batteries are a safety issue more than a trademark issue. The product stance that survives contact with the hobby: prefer OEM numbers for structural parts, name the aftermarket brand when a hop-up is genuinely standard (Pro-Line tires, for example), and do not launder a “compatible” claim you cannot source.

**Local shop inventory.** AMain can locate AMain. Everyone else is a phone call, a Facebook post, or a bin. The feature that works is “shops that sell this brand near you,” maintained like RCGuides (last verified), plus “call” and “I bought it here.” Pretending to know bin stock will be wrong.

**Safety.** LiPo and nitro are not tone problems; they are product requirements.

- Traxxas’s own XL-5 manual: LiPo is for educated advanced users, not unsupervised children under 14, LVC must be on, and the battery maker’s instructions govern. Their support page: solid red means LVC is off, and LiPo in that mode is forbidden.
- Reddit’s cautionary thread (https://www.reddit.com/r/rccars/comments/110mv8n/remember_to_practice_battery_safety/) is a house fire from an unknown used charger and pack. The replies are inconsistent, which is why forum summarization is a bad safety system.
- Nitro fuel, flame-out, and tuning were visible in the old RC Universe T-Maxx threads and were not researched as deeply as electric in this pass. A nitro guide that guesses mixture is a liability. Link the manual.

**Licensing of diagrams.** Exploded views are manufacturer drawings. Horizon, Traxxas, Associated, Tamiya, and Tekno publish them so people can buy parts. Republishing the art in another app is a copyright problem even when the part number is a fact. The durable approaches are: link to the official viewer, become a dealer with permission, or redraw with a license. Hotspot coordinates copied off their PDF are still their diagram.

**Vision will disappoint if scoped like Brickit.** The *Sensors* paper needed public CAD, 20,000 synthetic images, and 50 minutes of labeling per real photo to recognize 76 easy bricks, and it still failed on look-alikes and touching parts. RC parts are black, greasy, and partially occluded. The vision features that are worth a prototype are narrow: OCR of a part number, photo of a whole popular RTR for model ID, and a close-up of a spur or a puffing battery. Open-world “name this nylon chunk” is a research project.

**Community advice is contradictory.** The same LED produced “recalibrate” and “that ESC is dead.” A product that averages those replies will be confidently wrong. Keep a reviewed tree for the top failures, and send everything else to the manual or the forum with the uncertainty visible.

---

## 11. A realistic v1, and what to leave for later

This is product research, not an implementation plan.

**V1, one narrow corridor.** Pick the cars people actually break and can buy parts for online. A practical slice is popular electric RTRs from the Horizon family plus Traxxas (Slash, Rustler, Maxx, TRX-4, Gorgon, Kraton, Senton, SCX24 or SCX10), because the diagrams and the carts already exist.

The v1 loop:

1. Identify the vehicle by **product code**, manual cover OCR, or a short visual picker of those models. Do not promise universal photo ID.
2. Ask what it is doing, in the words forums already use: no throttle, stutter, clicks, pulls, stripped spur, torn driveshaft, wet electronics.
3. Show a short reviewed checklist for that symptom on that family, with the manufacturer’s support page linked. Include the LiPo LVC check whenever the symptom is “it stopped.”
4. If the checklist names a part, open the official exploded view or a licensed callout, and deep-link Horizon, Tower, or AMain search for that part number. Show the number in large type so a local counter can use it even when stock is unknown.
5. Offer a track or bash-spot list only by embedding or linking RCGuides / So Dialed / RC Spotters, or by listing clubs with a verification date. Do not start a second unmaintained map.
6. TTS is a button that reads the current reviewed step. Not a free-form coach.

Explicitly out of v1: AR, cross-brand fitment graph, live local inventory, nitro tuning, air and boat, a social network, and a chatbot that answers from Reddit.

**Later, in an order that follows the data.**

1. Revision diffs in the style of rcparts.app, starting with one race kit the editor owns.
2. Bearing and hardware cross-reference (size, not brand) where the manual prints the size.
3. User garage and maintenance log, so the second repair is faster than the first.
4. Dealer accounts so “add to cart” is real and licensed.
5. Narrow vision: spur condition, battery swelling, manual-cover OCR.
6. Voice conversation over the reviewed tree only.
7. AR only if a guide is already correct on a phone. Anchor labels to a chassis you can recognize reliably, or do not ship it.

**What not to build, because it is occupied or unsafe.**

- A race-setup chatbot. So Dialed is there, knows 700 cars, and still refuses photos.
- A general LEGO-style “build something new from your parts bin.”
- An AI mechanic that gives LiPo or nitro instructions it was not handed verbatim from a manufacturer page.
- A scraped replica of Horizon’s hotspot viewer.

---

## 12. Source log

Every item below was opened or returned by search on 14 October 2026. Snippet-only items are marked.

### LEGO

- https://brickit.app/
- https://brickit.app/about/
- https://brickit.app/pockets
- https://apps.apple.com/us/app/brickit-your-brick-collection/id1477221636
- https://play.google.com/store/apps/details?id=com.brickit.brickit
- https://www.prweb.com/releases/brickit-the-killer-app-for-lego-enthusiasts-just-got-smarter-850610642.html
- https://jj.capital/portfolio-startup-case-brickit
- https://appleinsider.com/articles/21/07/03/how-to-identify-a-pile-of-lego-on-your-iphone
- https://brickognize.com/
- https://brickognize.com/about
- https://api.brickognize.com/docs
- https://www.reddit.com/r/learnpython/comments/11pa4gz/brickognize_api/
- https://www.mdpi.com/1424-8220/23/4/1898
- https://doi.org/10.3390/s23041898
- https://rebrickable.com/help/build-engine/
- https://rebrickable.com/help/buy-parts/
- https://rebrickable.com/help/bricklink/
- https://rebrickable.com/help/brickowl/
- https://rebrickable.com/help/faq/
- https://rebrickable.com/api/v3/docs/?key=
- https://rebrickable.com/api/docs/
- https://rebrickable.com/rebricknet/ (404 on fetch)
- https://static.bricklink.com/alpha/default/api_wiki.html
- https://www.bricklink.com/help.asp?helpID=1
- https://www.brickowl.com/api_docs
- https://studiohelp.bricklink.com/hc/en-us/articles/5404381697559-Introduction-to-Studio
- https://www.bricklink.com/v2/build/studiohelp.page
- https://studiohelp.bricklink.com/hc/en-us/articles/5705925898135-Upload-as-a-Wanted-List
- https://studiohelp.bricklink.com/hc/en-us/articles/6502499385111-Finding-parts
- http://www.ldraw.org/ (cited via LDraw library readme and the awesome list)
- https://www.ldraw.org/part-number-spec.html (via awesome list)
- https://omr.ldraw.org/ (via awesome list)
- https://brickmonkey.app/
- https://play.google.com/store/apps/details?id=io.brickmonkey.minifigapp
- https://www.bricksee.app/
- https://setfound.com/features
- https://www.instabrick.org/ (cited by the paper; not re-tested as a live product)
- https://github.com/360er0/awesome-lego-machine-learning

### RC products, retailers, manuals

- https://traxxas.com/parts-finder
- https://traxxas.com/support/model-does-not-run-no-movement
- https://traxxas.com/support/programming-your-traxxas-electronic-speed-control
- https://traxxas.com/traxxas-link-app
- https://traxxas.com/media/productattach/C-70054-1/5/1-16-Slash-4X4-70054-1-Chassis-Assembly.htm
- https://www.horizonhobby.com/interactive-exploded-view?pid=ARA4202V3T1
- https://www.horizonhobby.com/blog-article-replacement-parts/
- https://www.horizonhobby.com/hh-our-history/
- https://www.arrma-rc.com/en/interactive-exploded-view?pid=ARA2104
- https://www.arrma-rc.com/en/compare?pid0=ARA8608V5
- https://www.losi.com/interactive-exploded-view?pid=LOS01015T1
- https://www.axialadventure.com/interactive-exploded-view?pid=AXI-2035
- https://www.towerhobbies.com/tower-hobbies-history/
- https://www.towerhobbies.com/
- https://www.news-gazette.com/news/horizon-the-sole-bidder-for-hobbicos-rc-business/article_ae2f6aa3-cc0f-5d79-9833-1262cd709551.html
- https://www.amainhobbies.com/rc-parts-department
- https://www.amainhobbies.com/traxxas-parts/c1466
- https://www.amainhobbies.com/store-locations
- https://hk.rcmart.com/rc-parts-store
- https://portal.associatedelectrics.com/teamassociated/cars_and_trucks/RC10B4/Factory_Team/manuals_setups/
- https://img2.associatedelectrics.com/pdf/cars_and_trucks/RC10B4/RSRTR/cat_b4.pdf
- https://www.tamiya.com/cms/english/rc/catalogs/TC-01_parts_catalog.pdf
- https://www.tamiya.com/cms/english/rc/catalogs/BB-01_parts_catalog.pdf
- https://www.teknorc.com/wp-content/uploads/2021/11/TKR9400_NT48_2.0_full_parts_list.pdf
- https://my.spektrumrc.com/ProdInfo/Files/AXI90104-Manual-EN.pdf
- https://www.spektrumrc.com/ProdInfo/Files/Firma-Manual-EN.pdf
- https://castlecreations.com/products/accessories-b-link-2-bluetooth-interface-011-0181-00
- https://apps.apple.com/tm/app/castlelink2/id6743709203
- https://play.google.com/store/apps/details?id=com.hobbywing.hwlink2
- https://www.sodialed.com/apps/rc-ai-mechanic?src=rc-settings
- https://www.sodialed.com/tracks
- https://rccarcompare.com/
- https://rccarcompare.com/compare
- https://www.rcdonkey.com/compare/?vehicles=41,716
- https://rcparts.app/
- http://rc-garage-pro.polsia.app/ (unverified concept site)
- https://www.logicrc.com/default.aspx?s=c%3A0%2Cc%3A50-30-20-60%2Cc%3AZZ-Support%2Cc%3AZZ-EXPViews%2Cc%3AZZ-EX-LOS

### Places

- https://rcspotters.com/trail_cat/rc-racetrack/ (category counts from search snippet)
- https://play.google.com/store/apps/details?id=com.bashmaps.app
- https://play.google.com/store/apps/details?id=com.rcmapio.app
- https://rcguides.com/
- https://www.rctech.net/forum/track-locator-forum-37/
- https://live.liverc.com/

### Repair neighbors

- https://www.ifixit.com/go/app
- https://www.ifixit.com/go/fixbot
- https://www.ifixit.com/Info/How_to_use_FixBot
- https://www.ifixit.com/llms.txt
- https://about.ifixit.com/api/2.0/doc/
- https://play.google.com/store/apps/details?id=com.ifixit.ifixitmobile
- https://devpost.com/software/fixitxr-zi7xk9
- https://github.com/silasyeem/unfold

### Communities

- https://www.rcgroups.com/
- https://www.rcuniverse.com/forum/traxxas-monster-truck-forum-251/
- https://www.rctech.net/forum/
- https://www.reddit.com/r/rccars/comments/1rn02uj/traxxas_maxx_esc_trouble/
- https://www.reddit.com/r/rccars/comments/1vns2xh/whats_causing_this/
- https://www.reddit.com/r/Traxxas/comments/1welnjm/trx4_motor_not_responding_to_throttle/
- https://www.reddit.com/r/rccars/comments/1i0g98u/good_rc_youtube_channels_to_follow/
- https://www.reddit.com/r/rccars/comments/110mv8n/remember_to_practice_battery_safety/
- https://www.arrmaforum.com/threads/traxxas-hits-jennys-rc.61545/

### Market pages (do not treat as audited)

- https://pmarketresearch.com/worldwide-hobby-radio-control-r-c-market-research/
- https://www.cognitivemarketresearch.com/hobby-radio-control-r%2Fc-market-report
- https://dataintelo.com/report/radio-remote-control-toys-market
- https://gripsintelligence.com/insights/retailers/traxxas.com
- https://ecdb.com/resources/sample-data/retailer/horizonhobby

### GitHub metadata retrieved via the GitHub API or repository search

- https://github.com/jtheiner/LegoBrickClassification
- https://github.com/blokbot-io/OpenBlok
- https://github.com/NazarLysyi/brickscope
- https://github.com/idanyd/BrickMapper
- https://github.com/uefroboticsclub/lego-sorter
- https://github.com/jessedegans/MachineLearningLegoSorting
- https://github.com/stubbs41/rc_hub
- https://github.com/tcobbs/ldview
- https://github.com/trevorsandy/lpub3d
- https://github.com/TobyLobster/ImportLDraw
- https://github.com/nilsschmidt1337/ldparteditor

---

## 13. File written

`/cursor/stores/bc-35bc4b46-172a-47d5-b169-168b47154f99/docs/rc-landscape-auto.md`
