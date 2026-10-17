---
cursor:
  subagentId: "bc-b31e4bc3-15d0-51bb-aded-9808219870c9"
---

# RC & LEGO-adjacent product landscape (research report)

**Model:** Composer (Cursor cloud agent)  
**Date:** 14 October 2026  
**Audience:** James — evaluating whether to build an RC hobby companion (diagnosis, repair, parts, tracks, assembly)  
**Scope:** Research only; not an implementation blueprint.

---

## Executive summary (direct answers)

**Does one product already do everything James described?**  
**No.** The market is a patchwork: manufacturer/OEM **parts trees and shoppable exploded views** (Traxxas, Horizon/ARRMA), **community catalogs** (RC Crash Crew), **comparison sites** (RC Car Compare, rcparts.app, SetupRC), **location apps** (RC Map, BashMaps, RCGuides), **garage/inventory apps** (RC Garage, RC Garage Pro — early), **brand telemetry/programming apps** (Traxxas Link, Spektrum Smart, Hobbywing HW Link), and **generic repair AI** (iFixit FixBot). LEGO has the closest **vision + inventory + build + buy** loop (Brickit, Brickognize, Rebrickable, BrickLink), but that stack depends on a **standardized global parts ontology** LEGO does not share with RC.

**What is worth building (high level):**  
A credible wedge is **not** “photo-identify every screw on every brand.” It is **guided diagnosis + correct SKU on the right BOM**, tied to **where to buy** (online + “call these shops”), plus **tracks** and **assembly from licensed or user-contributed manuals**. Vision and AR are **later** differentiators once model/BOM identity is reliable.

---

## 1. LEGO reconstruction analogs and how the technology works

LEGO is the best-studied “rebuild from parts” domain because parts are **enumerated**, **interchangeable within catalog rules**, and **legally cataloged** by BrickLink/Rebrickable/LDraw. RC is the opposite: **brand-specific SKUs**, **generational revisions** (B74.1 vs B74.2), and **sparse public APIs**.

### 1.1 Brickit (vision pile scan → inventory → build ideas → find-in-pile)

| Item | Source | What was found |
|------|--------|----------------|
| Product positioning | https://brickit.app/about/ | App scans scattered bricks, suggests builds, step instructions; free with Pro; iOS/Android. |
| ML approach (vendor) | Same | Synthetic 3D piles for training; user photos for refinement; claims ~**1,600** common brick types recognized. |
| User flow (marketing) | https://brickit.app/ | Scatter → photo → ideas + **highlight piece location in pile**; “Pockets” for inventory; school SKU. |
| Community/scale signals | https://news.ycombinator.com/item?id=27693560 | HN thread: founders discuss **on-device inference**, ~1500 parts/pile, multi-class difficulty; “find builds” described as subset match on designs; labeling cost cited as extreme. |
| Reviews/limitations | https://www.slashgear.com/1944452/how-to-use-brickit-app-for-lego-builds-utilize-extra-pieces/ | Recognition gaps vs ~3,800 modern piece types; works better with large piles; tap part → bounding box in photo. |

**Inferred user flow (system-level, not proprietary detail):**

1. **Capture:** wide shot of spread pile (UX pushes thin spread to reduce occlusion).
2. **Detect:** object detection / instance segmentation per brick (class = part type + color is harder).
3. **Aggregate inventory:** multiset of part IDs (errors → user corrects → feedback loop).
4. **Match MOCs:** filter design library to designs whose BOM ⊆ inventory (classic set-cover / knapsack; HN: “easiest part”).
5. **Instruction UX:** step BOM + **spatial index** back to original photo coordinates (“where is 2×4 red?”).
6. **Monetization:** Pro features + education SKU (Brickit for Classes).

**Data dependencies:** internal design library + part catalog aligned to real LEGO geometry; color as separate axis; no public BrickLink coupling required for core loop.

**Transfer to RC:**

| Transfers | Does not transfer |
|-----------|-------------------|
| “Spread parts → detect → highlight” for **small standardized hardware** (M3 screws, bearings by size) | Recognizing **Arrma vs generic** A-arm, or **revision-specific** bulkheads |
| Inventory multiset → “what can I build?” for **kit bash** communities | OEM **legal BOM** and **warranty** parts |
| User correction UX for ML errors | **1,600-class** scale is tiny vs RC SKU space per brand |

---

### 1.2 Brickognize (photo → part ID)

| Item | Source | What was found |
|------|--------|----------------|
| Consumer product | https://brickognize.com/ | Claims **125k** catalog, **98.5%** accuracy, **0.7s** search; upload photo. |
| Research paper | https://www.mdpi.com/1424-8220/23/4/1898 | Mask R-CNN; **synthetic photo-realistic training**; few-shot fine-tune from small real set; public test set linked from paper (tramacsoft.com/brickognize). |
| API usage (third party) | https://github.com/uefroboticsclub/lego-sorter | Documents `POST https://api.brickognize.com/predict/` multipart image (not Brickognize-owned repo; shows API exists). |

**Mechanism (from paper + product claims):** single-part or controlled scenes fare better than Brickit-style piles; catalog search is embedding/classification against BrickLink-aligned IDs (inferred from ecosystem usage in open projects).

**Commerce path:** Brickognize identifies → user copies part number → BrickLink/BrickOwl/Pick a Brick (manual handoff unless integrated in a third-party app like brick-review).

---

### 1.3 Rebrickable (collection → MOC match → marketplace)

| Item | Source | What was found |
|------|--------|----------------|
| Core loop | https://rebrickable.com/ | Users catalog sets/parts; **203k+ MOCs**; match inventory to builds; premium MOC sales. |
| API limits | https://rebrickable.com/api/v3/docs/?key= | V3: official LEGO catalog + user collections; **MOC inventories removed** from API (anti-scraping); alternate builds API remains. |
| Studio integration | https://rebrickable.com/help/studio-palette/ | Export custom lists as BrickLink XML → Studio palette import. |

**Data model:** sets, parts, colors, inventories, user-owned multisets; MOCs as derivative BOMs.

**Transfer to RC:** Rebrickable proves **inventory-driven recommendation** is loved; RC analog would need a **community BOM graph** (RC Crash Crew, rcparts.app) plus user garage — not LEGO-scale open API.

---

### 1.4 BrickLink / BrickOwl / Pick a Brick (commerce + catalog truth)

| Item | Source | What was found |
|------|--------|----------------|
| BrickLink catalog bulk | https://www.bricklink.com/catalogDownload.asp | Forum refs: ~**90k** parts downloadable; join sets via item type/number. |
| API subsets | https://www.bricklink.com/v3/api.page?page=get-subsets | `GET /items/{type}/{no}/subsets` for set/part-out lists. |
| Studio commerce | https://www.bricklink.com/v3/studio/download.page | Studio: virtual build, instruction maker, renderer, **Easy Buy / Wanted List**. |
| Pick a Brick | https://www.lego.com/en-us/pick-and-build/pick-a-brick | Official retail single-element purchase; Bestseller vs Standard fulfillment lanes. |
| LEGO replacement | https://www.lego.com/en-us/service/replacement-parts | Missing/broken from new sets via LEGO service (element ID + set number). |
| BrickOwl buying | https://www.brickowl.com/help/buying-lego-parts | Multi-store carts, wishlist optimizer across sellers. |
| Marketplace comparison | https://ddbricks.com/post/bricklink-vs-brickowl-unveiling-the-best-lego-marketplace-for-you/ | BrickLink breadth vs BrickOwl UX (third-party blog; useful for buyer behavior, not official stats). |

**Purchase loop pattern:** BOM diff → wanted list → split across stores → checkout per store (BrickOwl “best combination” optimizer is the sophisticated piece).

**RC parallel:** Horizon **shoppable exploded view** is the OEM version of “BOM diff → cart,” but only for their brands.

---

### 1.5 BrickLink Studio / LDraw ecosystem (CAD, instructions, rendering)

| Item | Source | What was found |
|------|--------|----------------|
| Studio | https://studiohelp.bricklink.com/hc/en-us/articles/5404381697559-Introduction-to-Studio | Desktop CAD, instruction maker, test buildability, BrickLink catalog/pricing. |
| LDraw / LeoCAD | https://github.com/leozide/leocad | LeoCAD: **~2.9k stars**, open LDraw editor (license: none listed on GitHub API). |
| LPub3D | https://github.com/trevorsandy/lpub3d | Instruction rendering from LDraw. |
| buildinginstructions.js | https://github.com/LasseD/buildinginstructions.js | Browser LEGO instructions via three.js (Unlicense). |

**Transfer to RC:** instruction **pipelines** (3D assembly order, step pages) exist open-source for LEGO; RC kits rarely ship machine-readable BOM+mesh; exploded PDFs are the norm.

---

### 1.6 Official LEGO Builder (not vision — set-known 3D instructions)

| Item | Source | What was found |
|------|--------|----------------|
| LEGO Builder | https://www.lego.com/en-us/builder-app | QR on manual or set search → **3D steps**, zoom/rotate, progress save, Build Together. |

**Contrast with Brickit:** identity is **set number**, not vision. This is the UX bar for **interactive assembly** when SKU is known.

---

### 1.7 LEGO → RC: technology transfer matrix

| Capability | LEGO maturity | RC maturity |
|------------|---------------|-------------|
| Global part taxonomy | Excellent (BrickLink) | Fragmented per brand + aftermarket |
| Photo ID | Brickognize/Brickit | Essentially none at OEM level |
| BOM from photo | Via pile inventory + MOC match | Requires **model ID** first |
| Buy missing parts | Mature marketplaces | OEM store + AMain/Tower/Hobby shops |
| 3D assembly guide | LEGO Builder, Studio | PDF exploded views; Horizon interactive 2D |
| Legal data access | LEGO-owned BrickLink; APIs | PDFs/manuals; scraping risk |

---

## 2. RC-specific products and sites

### 2.1 OEM parts finders, exploded views, and “what broke?”

| Product | URL | What was found |
|---------|-----|----------------|
| Traxxas Parts Finder | https://traxxas.com/parts-finder | Model-specific parts navigation (site search). |
| Traxxas exploded HTML example | https://traxxas.com/media/productattach/C-70054-1/5/1-16-Slash-4X4-70054-1-Chassis-Assembly.htm | HTML exploded view with **callout numbers → SKUs** (7022 chassis, 7051 driveshaft, etc.). |
| Horizon / ARRMA shoppable exploded view | https://www.horizonhobby.com/interactive-exploded-view?pid=ARA7116V2 | Zoom/pan diagram; **click part number → product → Add to Cart**. |
| Horizon blog (how-to) | https://www.horizonhobby.com/blog-article-replacement-parts/ | Part Finder + product page quick links; shoppable vs PDF manuals. |
| ARRMA brand portal | https://www.arrma-rc.com/en/interactive-exploded-view?pid=ARA2104 | Same shoppable pattern on brand site. |
| AMain Traxxas/Kyosho finders | https://www.amainhobbies.com/traxxas-parts/c1466 | Retailer “parts finder tool” aggregating OEM/aftermarket by brand. |
| AMain PDF diagrams | e.g. https://images.amainhobbies.com/images/resources/ARA2104T2/Setup%20Sheets/1-ARA2104T_Arrma_Mojave_Grom_1-18_4WD_Truck_Exploded_View.pdf | Hosted **exploded PDFs** with SKU callouts (multilingual legends on some sheets). |
| Tamiya chassis catalogs | https://tamiya.com/english/rc/catalogs/index.htm | Chassis-based **PDF parts catalogs** (TT-02, etc.); matching list on tamiya.com referenced in PDF. |
| Tamiya TT-02 PDF | https://www.tamiya.com/cms/english/rc/catalogs/TT-02_parts_catalog.pdf | Option + spare sections with Tamiya part numbers. |

**Typical user flow today (no single app):**

1. Identify **exact model** (box art, manual, chassis stamp, retailer SKU like `77096-4`).
2. Open **exploded view** for subsystem (chassis, diff, suspension).
3. Map physical broken part → **callout index** → **manufacturer part number**.
4. Search SKU on OEM store or AMain/Tower/RCMart/local shop.
5. If unsure, post photo to **RCGroups / Reddit / Facebook** for human ID.

**Gap:** Steps 1 and 5 are where hobbyists lose hours; OEM tools assume step 1 is solved.

---

### 2.2 Retail and local buying

| Channel | URL | Role |
|---------|-----|------|
| Horizon Hobby | https://www.horizonhobby.com/ | OEM for Arrma, Losi, Spektrum, etc.; shoppable diagrams. |
| AMain Hobbies | https://www.amainhobbies.com/ | Broad brand finders + diagram PDF hosting. |
| Tower Hobbies | https://www.towerhobbies.com/ | Similar hobby retailer (not deeply fetched in this pass; category peer to AMain). |
| RCMart | https://www.rcmart.com/ | Global HK-based parts retailer (peer). |
| Local hobby shops | — | **Inventory rarely online**; phone/walk-in; some use Shopify without SKU search aligned to exploded indexes. |

**Local inventory reality:** No national “RC parts in stock near me” aggregator was found comparable to LEGO Pick a Brick. *Inferred:* any product promising “buy locally” needs **shop partnerships** or **phone script + SKU** rather than live stock APIs.

---

### 2.3 Track and ride-site finders

| Product | URL | What was found |
|---------|-----|----------------|
| RC Map (RCMap) | https://www.rcmap.com/apps | Map-first: crawler spots, shops, clubs, comps, GPS track save, garage, leaderboards; iOS/Android free. |
| Google Play listing | https://play.google.com/store/apps/details?id=com.rcmapio.app | User reviews: discovery strong, coverage uneven by region. |
| App Store | https://apps.apple.com/us/app/rc-map/id6479915791 | Facebook group tie-in; ratings sparse. |
| BashMaps | https://play.google.com/store/apps/details?id=com.bashmaps.app | Map, events, clubs, bash/crawl/race/drift positioning. |
| RCGuides | https://rcguides.com/ | **Verified** track/flying field listings with **last verified** dates; activity filters. |

**Mechanism:** POI database + community submissions + (RCMap) session GPS polylines — not unlike AllTrails for RC.

**Adjacent:** RC flying fields appear in RCGuides; boats sometimes requested in RC Map reviews (boat category ask in App Store review, per listing snippet).

---

### 2.4 Assembly guides, interactive exploded views, AR

| Product | URL | What was found |
|---------|-----|----------------|
| Horizon shoppable exploded | See §2.1 | **2D interactive** with commerce; not AR overlay on physical car. |
| LEGO Builder | https://www.lego.com/en-us/builder-app | Gold standard for **known-set 3D steps** (different domain). |
| iFixit app | https://www.ifixit.com/go/app | Step guides, Workbench, **FixBot** voice + camera assist; battery health on phone. |
| WIRED on FixBot | https://www.wired.com/story/ifixit-chatbot-app-fixbot-point-your-camera-at-what-you-want-to-fix/ | Multi-model AI; photo start; ties to ~125k device library claim in article. |
| ARFixIt | https://arfixit.co/ | **Separate** early-access Android AR overlay for appliance repair (microwave demo); B2B onboarding for brands. |

**RC AR:** No widely adopted RC-specific AR assembly app surfaced in this research pass. *Inferred reasons:* lack of licensed 3D models, model revision churn, and workspace scale (1/10 car larger than phone AR sweet spot).

---

### 2.5 Voice / TTS guided repair

| Product | URL | What was found |
|---------|-----|----------------|
| iFixit FixBot | https://www.ifixit.com/go/app | **Voice-guided** repair coaching marketed explicitly. |
| ARFixIt | https://arfixit.co/ | Visual guidance; voice not emphasized on landing page fetched. |

**RC:** YouTube long-form + pit audio from friends remains default; brand apps (Traxxas Link, HW Link) do not market hands-free repair narration.

---

### 2.6 Brand apps: telemetry, ESC, batteries (diagnosis-adjacent)

| Product | URL | What was found |
|---------|-----|----------------|
| Traxxas Link | https://traxxas.com/traxxas-link-app | TQi model memory, telemetry (speed/temp/voltage), drive profiles, LED modes; requires TQi + module. |
| Traxxas EZ-Peak Live | https://play.google.com/store/apps/details?id=com.traxxas.ezpeaklive | **iD battery** auto-identification on charger; cell voltages; multi-charger monitoring. |
| Traxxas battery basics | https://traxxas.com/battery-basics | iD = type/voltage/capacity auto on Traxxas chargers; compatibility via model page. |
| Spektrum Smart FAQs | https://www.horizonhobby.com/blog-article-723150-smart-faqs/ | Smart battery ↔ charger ↔ ESC telemetry ecosystem; TextGen on transmitters. |
| Spektrum ESC manual excerpt | https://www.spektrumrc.com/ProdInfo/Files/Avian-Manual-EN.pdf | SMART Throttle telemetry on one wire; PWM fallback without telemetry. |
| Hobbywing HW Link | https://www.hobbywing.com/en/index.php/service/application?id=2 | ESC program, firmware, **data logging** with WiFi/OTA modules. |
| HW Link data manual | https://www.hobbywing.com/en/uploads/file/20250729/30b4b2fbe59782f259f6e008fc7fb67c.pdf | Peak vs historical logs; real-time within ~5 m Bluetooth (bench testing). |

These solve **instrumented diagnosis** (heat, voltage sag, LVC) when user owns compatible electronics — not **mechanical fault ID**.

---

### 2.7 RC vehicle comparison and parts compatibility

| Product | URL | What was found |
|---------|-----|----------------|
| RC Car Compare | https://rccarcompare.com/ | **71+** models; side-by-side specs, affiliate buy links, shareable compare URLs. |
| SetupRC vehicles | https://setuprc.com/vehicles | **841** vehicles; racing-focused spec database. |
| RC Crash Crew catalog | https://rccrashcrew.com/catalog | **19,915 parts**, **4,416 models**, **322 brands**; fit confidence labels; account for search. |
| rcparts.app | https://rcparts.app/ | **Model-to-model spare parts diff** (e.g. B74.1 vs B74.2). |

---

### 2.8 Garage / inventory apps (partial overlap with James’s vision)

| Product | URL | What was found |
|---------|-----|----------------|
| RC Garage (App Store) | https://apps.apple.com/mw/app/rc-garage/id6754534337 | Vehicles, maintenance, spare inventory; indie; very new/ratings thin. |
| RC Garage Pro (landing) | http://rc-garage-pro.polsia.app/ | Marketing: garage profiles, parts inventory, run/repair logs, **“AI Pit Crew”** (claims context-aware troubleshooting). |
| NCR Hobby / RacerRC (Android) | https://www.appbrain.com/app/ncr-hobby/com.racerrc.app | Collection, parts, marketplace, map — feature-rich listing; maturity unclear. |

---

### 2.9 Troubleshooting content (web, not apps)

| Resource | URL | What was found |
|----------|-----|----------------|
| RC Setup Lab troubleshooter | https://rcsetuplab.com/tools/rc-troubleshooter/ | Symptom → checks → anti-patterns (replace ESC too early). |
| RC Setup Lab “won’t move” | https://rcsetuplab.com/troubleshooting/why-rc-car-wont-move/ | Ordered checks: battery, bind, ESC arming, gears, LVC. |
| Shock & Servo checklist | https://shockandservo.com/guides/why-is-my-rc-car-not-working | Six common causes ordered by likelihood. |

These are the **decision trees** James might productize — with RC-specific branches (slipper, servo saver, crystal-era vs 2.4 GHz).

---

### 2.10 Communities as the “diagnosis layer”

| Community | URL | What was found |
|-----------|-----|----------------|
| RCGroups | https://www.rcgroups.com/forums/index.php | **Crash Discussion** forum for repair analysis; massive car/electric/nitro subforums; vendor sections. |
| Reddit | https://www.reddit.com/r/rccars/ (not fetched live; well-known) | Quick photo diagnosis, brand fan tribes. |
| YouTube | — | Teardown/rebuild channels (genre standard; no single API). |
| Facebook groups | RC Map cites community group | Local spot sharing. |
| Discord | — | Brand/team servers; ephemeral advice. |

**Mechanism:** human visual ID + experience; search is poor; knowledge is **unstructured**. A product opportunity is **structured symptom → test → part SKU** with community escalation.

---

## 3. GitHub and open source

Searched via GitHub REST API (14 Oct 2026). Stars and licenses as returned by API; maturity judged from description and activity.

### 3.1 LEGO vision / catalog tooling

| Repo | URL | Stars | License | Usability notes |
|------|-----|-------|---------|-----------------|
| leozide/leocad | https://github.com/leozide/leocad | ~2891 | none on API | Desktop LDraw editor; mature. |
| rgriebl/brickstore | https://github.com/rgriebl/brickstore | ~173 | GPL-3.0 | BrickLink **inventory management** offline. |
| gebirgslok/BricklinkSharp | https://github.com/gebirgslok/BricklinkSharp | ~34 | MIT | C# BrickLink API client. |
| NazarLysyi/brickscope | https://github.com/NazarLysyi/brickscope | ~13 | MIT | CLI/MCP over **Brickognize + Rebrickable** APIs. |
| TravisL12/brick-review | https://github.com/TravisL12/brick-review | (not in top search) | per README | NestJS app joining Brickognize + Rebrickable with **PartAlias** table for ID mapping. |
| artgillespie/lego-brick-classifier | https://github.com/artgillespie/lego-brick-classifier | (search hit) | — | Educational DL classifier. |
| mantyni/Multi-object-detection-lego | https://github.com/mantyni/Multi-object-detection-lego | ~16 | MIT | Research-scale detection. |
| uefroboticsclub/lego-sorter | https://github.com/uefroboticsclub/lego-sorter | ~1 | GPL-3.0 | Hardware sorter calling Brickognize API. |
| LasseD/buildinginstructions.js | https://github.com/LasseD/buildinginstructions.js | ~149 | Unlicense | Web instruction renderer. |
| trevorsandy/lpub3d | https://github.com/trevorsandy/lpub3d | ~202 | none | LDraw instruction publisher. |

**Takeaway:** Open LEGO stack is **catalog + LDraw + marketplace APIs**; vision models are **small academic repos** or **API wrappers**, not Brickit-level pile detection OSS.

### 3.2 RC repair / parts / AR

| Query | Result |
|-------|--------|
| `rc+catalog` | No dominant OSS RC parts app; tiny unrelated hits. |
| `augmented+reality+repair+manual` | **0** repos in GitHub search. |
| `remote+control+car` | Mostly Raspberry Pi teleop toys, not parts diagnosis. |

**Implication:** RC domain lacks an open **BrickLink equivalent**; RC Crash Crew and rcparts.app are **proprietary web** catalogs, not reusable libraries.

### 3.3 Papers / datasets

| Resource | URL | Finding |
|----------|-----|---------|
| Brickognize paper | https://www.mdpi.com/1424-8220/23/4/1898 | Public **test dataset** URL in paper (tramacsoft.com/brickognize); method = synthetic data + detection. |

No RC part recognition dataset of comparable prominence was found in this pass.

---

## 4. Reverse engineering: six strongest reference products (feature & system level)

Purpose: explain **what problem they solved** and **what signals they use** — not how to clone them.

### 4.1 Brickit

| Dimension | Detail |
|-----------|--------|
| Who | Families with loose LEGO; builders with unsorted bins. |
| Core loop | Photo pile → inventory → ideas → step build → highlight piece in pile. |
| Data model | Part-class multiset + design BOM library + step graph; spatial map photo→bbox. |
| Tech signals | On-device ML (per founder HN); synthetic 3D training; ~1600 classes (vendor). |
| Commerce | Not primary in about page; Pro subscription + education. |
| Hard problem solved | **Dense multi-object ID** in clutter + **spatial reverse lookup** for instructions. |

### 4.2 Brickognize + Rebrickable (+ BrickLink commerce handoff)

| Dimension | Detail |
|-----------|--------|
| Who | Collectors identifying single parts; MOC builders matching inventory. |
| Core loop | Photo → part ID → (optional) which sets contain part → buy on BrickLink. |
| Data model | Global part IDs, color, set inventories, user multiset. |
| Tech signals | Detection/classification (paper: Mask R-CNN); Rebrickable graph algorithms for MOC match. |
| Commerce | BrickLink/BrickOwl/Pick a Brick; Wanted List optimization on BrickOwl. |
| Hard problem solved | **Canonical taxonomy** + **ID mapping** (BrickLink vs Rebrickable IDs — see brick-review README). |

### 4.3 LEGO Builder (official)

| Dimension | Detail |
|-----------|--------|
| Who | Anyone building a **known set**. |
| Core loop | Scan QR / set # → 3D steps → save progress / co-build. |
| Data model | Set-number-keyed instruction graph; official geometry. |
| Tech signals | 3D real-time viewer; cloud account sync. |
| Commerce | Drives set sales; Pick a Brick separate. |
| Hard problem solved | **Instruction UX** when SKU is known — no vision required. |

### 4.4 iFixit (+ FixBot)

| Dimension | Detail |
|-----------|--------|
| Who | Consumer electronics / appliances / some vehicles (per library breadth). |
| Core loop | Device in Workbench → guide + parts/tools → optional FixBot voice/camera. |
| Data model | Device taxonomy → guide steps → parts SKUs; community contributions. |
| Tech signals | Structured guides + RAG/vision LLM stack (WIRED: multi-model); battery telemetry on-device. |
| Commerce | Parts and tools store integrated. |
| Hard problem solved | **Trusted procedural content** at scale + **symptom language → guide** mapping. |

### 4.5 Horizon Hobby “Shoppable Exploded View” (ARRMA / portfolio)

| Dimension | Detail |
|-----------|--------|
| Who | Ready-to-run owners fixing crashes. |
| Core loop | Known product PID → exploded diagram → click callout → buy. |
| Data model | Product SKU → diagram hotspots → spare part SKUs (manufacturer ERP). |
| Tech signals | Interactive 2D web viewer + e-commerce backend (not public 3D). |
| Commerce | **Native** — primary goal. |
| Hard problem solved | **Zero ambiguity part ordering** once model is known — legal OEM data. |

### 4.6 RC Map (RCMap ecosystem)

| Dimension | Detail |
|-----------|--------|
| Who | Crawler/basher drivers finding spots and clubs. |
| Core loop | Map discover → place detail → save track / check-in → social/compete. |
| Data model | Geo POIs, user profiles, garaged rigs, optional GPS polylines. |
| Tech signals | Mobile map UX; offline scoring mentioned on marketing site. |
| Commerce | Not central; community growth / giveaways noted on App Store copy. |
| Hard problem solved | **Geographic discovery** for a fragmented hobby — orthogonal to parts, but part of James’s brief. |

**Honorable mention for James’s parts/compare slice:** **RC Crash Crew** (catalog scale + fit confidence) and **rcparts.app** (generational diff) — web-only, account-gated search, no diagnosis UX.

---

## 5. Gap analysis, feature map, and realistic product shaping

### 5.1 Feature map vs James’s list

| James feature | Exists today? | Strongest incumbents | Gap |
|---------------|---------------|----------------------|-----|
| Troubleshoot repairs | Partial (articles, forums, brand telemetry) | RC Setup Lab, Shock & Servo, RCGroups, Spektrum/Hobbywing apps | No unified **symptom engine** across brands |
| Fault diagnosis | Partial | Smart telemetry; YouTube | No **vision** “what snapped?” for RC |
| Buy parts (online) | **Yes** | OEM exploded + AMain/Tower | Friction is **finding SKU**, not checkout |
| Buy parts (local) | **Weak** | Phone local shop | No live inventory layer found |
| Find tracks / ride sites | **Yes** (uneven coverage) | RC Map, BashMaps, RCGuides | Quality varies by region |
| Interactive exploded assembly | **Partial** | Horizon 2D shoppable; PDFs everywhere | Rare **3D step** experience |
| AR repair/assembly | **Adjacent only** | ARFixIt (appliances); iFixit camera AI | RC-specific AR essentially absent |
| Audio/TTS instructor | **Adjacent** | iFixit FixBot voice | Not integrated with RC BOM |
| RC vehicle comparison | **Yes** | rccarcompare.com, SetupRC | Spec compare ≠ **repair path** |

### 5.2 Features James did not mention (high hobbyist value)

| Feature | Why it matters |
|---------|----------------|
| **Model/version ID wizard** | Stamp on chassis, box SKU, barcode, radio tray photo → canonical model record (Traxxas Link does **radio memory**, not vision). |
| **Generational parts diff** | rcparts.app proves demand when Team Associated / Xray rev yearly. |
| **ESC/motor/servo/LiPo decision trees** | LVC, thermal, cogging, timing, pinion mesh, BEC sag — brand-agnostic tests. |
| **Gear mesh + diff rebuild guides** | High-traffic wrenching tasks; good video candidates for TTS steps. |
| **Radio bind / protocol matrix** | DSMR vs SLT vs FHSS confusion for beginners. |
| **Firmware update pointers** | Spektrum TextGen, HW Link, Traxxas Link — deep links per device class. |
| **Waterproofing / post-bash inspection** | Bearing service, rust, electronics dry-out checklist. |
| **Crawler vs basher vs racer BOM** | Same scale, incompatible parts (tires, diffs, shocks). |
| **Counterfeit / clone warnings** | Especially batteries and ESCs — safety. |
| **Race setup sheets** | Link to manufacturer PDFs (Amain hosts many). |
| **Consumables kit builder** | Bearings (FastEddy), screws, fluids per model. |

### 5.3 What is genuinely hard

| Hard problem | Why |
|--------------|-----|
| **Cross-brand taxonomy** | No public BrickLink; RC Crash Crew is proprietary graph. |
| **Revision drift** | Same name “Kraton” multiple SKUs; colorways ≠ mechanics. |
| **Licensing diagrams** | OEM PDFs are copyrighted; redistribution needs deals. |
| **Local stock** | Shops on phone; no APIs. |
| **Vision on metal/plastic mix** | Reflective, worn, aftermarket arms — unlike colored ABS studs. |
| **Safety liability** | LiPo fires, nitro fuel, pinch points — guidance needs disclaimers + conservative trees. |
| **Counterfeits** | Wrong part physically “fits” until it fails. |

### 5.4 LEGO lessons applied to RC (without copying Brickit)

1. **Identity first:** LEGO Builder beats Brickit when set # is known — RC should prioritize **model SKU resolution** before AR/vision.
2. **Multiset inventory optional:** RC owners don’t inventory 1,500 screws; they **search by subsystem** on exploded views.
3. **Commerce handoff:** BrickLink wanted-list optimizers win — RC needs **multi-retailer cart** or deep links per SKU.
4. **Community as fallback:** When ML fails, escalate to forum pattern with **structured context** (model, symptom, photos of callout area).

### 5.5 Realistic v1 vs later (product research, not build plan)

**v1 (defensible, shippable):**

- **Garage:** user adds vehicles by SKU search (Traxxas/Arrma/Tamiya catalogs) + manual entry.
- **Symptom troubleshooter:** branching trees for top 20 symptoms (no throttle, no steer, smoke, grinding, LVC, overheating) with **“open exploded view”** deep links to OEM/AMain PDFs where allowed.
- **Parts bookmark:** save SKUs from diagrams; open Horizon/AMain/OEM in browser.
- **Tracks:** integrate/map link-out to RCGuides + RC Map rather than rebuild POI DB on day one.
- **Compare:** embed or link rccarcompare / rcparts.app for research mode.

**v2:**

- **Account-linked catalog** partnership (RC Crash Crew-style fit data) or scrape-licensed BOM imports per brand deal.
- **Voice read-aloud** of community-vetted guides (TTS), hands-free pit mode.
- **Telemetry import** instructions for Spektrum/Hobbywing/Traxxas (manual workflows, not reverse-engineered protocols unless licensed).

**v3+ (high cost):**

- **Photo assist:** region proposal on suspension photo → “likely A-arm family” → human confirm → SKU — *not* full Brickit pile mode.
- **AR:** only with manufacturer-provided glTF + legal clearance (ARFixIt model).
- **Local stock:** shop portal for inventory upload (Shopify plugin).

### 5.6 Competitive positioning sentence for James

> “RCGroups plus Horizon Parts Finder plus RC Map, with iFixit-style symptom trees and a garage log — **not** Brickit for screws.”

---

## 6. Source index (quick)

- Brickit: https://brickit.app/about/ , https://brickit.app/ , HN https://news.ycombinator.com/item?id=27693560  
- Brickognize: https://brickognize.com/ , paper https://www.mdpi.com/1424-8220/23/4/1898  
- Rebrickable: https://rebrickable.com/ , API https://rebrickable.com/api/v3/docs/?key=  
- BrickLink: https://www.bricklink.com/v3/studio/download.page , API subsets https://www.bricklink.com/v3/api.page?page=get-subsets  
- LEGO Builder / Pick a Brick: https://www.lego.com/en-us/builder-app , https://www.lego.com/en-us/pick-and-build/pick-a-brick  
- Traxxas parts/exploded: https://traxxas.com/parts-finder , example diagram https://traxxas.com/media/productattach/C-70054-1/5/1-16-Slash-4X4-70054-1-Chassis-Assembly.htm  
- Horizon shoppable exploded: https://www.horizonhobby.com/interactive-exploded-view?pid=ARA7116V2  
- Tamiya catalogs: https://tamiya.com/english/rc/catalogs/index.htm  
- iFixit / FixBot: https://www.ifixit.com/go/app , https://www.wired.com/story/ifixit-chatbot-app-fixbot-point-your-camera-at-what-you-want-to-fix/  
- ARFixIt: https://arfixit.co/  
- RC Map: https://www.rcmap.com/apps , https://play.google.com/store/apps/details?id=com.rcmapio.app  
- RCGuides: https://rcguides.com/  
- RC Crash Crew: https://rccrashcrew.com/catalog  
- Compare: https://rccarcompare.com/ , https://rcparts.app/ , https://setuprc.com/vehicles  
- Traxxas / Hobbywing apps: https://traxxas.com/traxxas-link-app , https://www.hobbywing.com/en/index.php/service/application?id=2  
- GitHub examples: https://github.com/leozide/leocad , https://github.com/NazarLysyi/brickscope , https://github.com/TravisL12/brick-review  

---

## Uncertainty log

| Claim | Confidence |
|-------|------------|
| Brickit class count (~1600) | **High** — stated on official about page. |
| Brickognize accuracy (98.5%) | **Medium** — marketing claim on site; independent benchmark not verified here. |
| RC Garage Pro “AI Pit Crew” quality | **Low** — landing page only; product maturity not verified. |
| Tower Hobbies feature parity with AMain | **Medium** — category inference; not page-fetched in detail. |
| No single RC “Brickit” | **High** — multiple targeted searches and catalog review found none. |

---

*End of report.*

**File written:** `/cursor/stores/bc-35bc4b46-172a-47d5-b169-168b47154f99/docs/rc-landscape-composer.md`
