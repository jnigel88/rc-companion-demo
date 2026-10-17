# Front-left shock: parts sheet (Stage 1)

FTX Carnage 2.0 BL. This is the shock the Stage 1 model and page are built from. The left and right front shocks are the same part (FTX6202 is sold as a pair), so this sheet covers both.

**Where each fact comes from**

- "Manual" means the FTX Carnage 2.0 BL manual. I use PDF page numbers: p23 is the front-shock exploded view, p24 is the front end with the screws, p25 is the spare-parts pictures.
- The manual has no disassembly steps for the shock. The "removal step" column is my reading of the exploded view on p23: the order you would take it apart. It is not printed anywhere.
- Part names are my plain-English names. The manual only prints the FTX numbers, except where p25 gives a name (shown in quotes).
- **GUESS** means the manual and photos do not settle the shape or role. Everything marked GUESS is modelled as a plain stand-in and should not be treated as real.

## Whole shock

| FTX | Name | Source | Screws that hold it | Removal step | Guess flags |
|-----|------|--------|--------------------|--------------|-------------|
| FTX6202 | "Front Shocks 2pcs", the built shock | p24, p25 | **Top:** FAST118 (M3x18) through the top eye into the shock tower FTX6200. **Bottom:** FTX6527 (M3x12) through the bottom eye into the lower arm. | 1 top screw out, 2 bottom screw out, 3 lift the shock off | Which FTX6527 goes where is read from the arrows on p24, which are crowded. **GUESS** for the bottom screw. It is not modelled. |

## Parts inside it (top to bottom as drawn on p23)

| FTX | Name | Source | What holds it | Removal step (my reading) | Modelled as | Guess flags |
|-----|------|--------|---------------|---------------------------|-------------|-------------|
| FTX6508 | White flanged bushing in the top eye | p23 | Pressed in the eye (no screw) | 3a, pulls out of the top eye | White sleeve in the top eye | **GUESS:** shape and role. It is only a label and a small white drawing. |
| FTX6210 (black) | Top eye, on a short neck | p23, p25 "Shock Upper Cap" | Sits in the blue cap; the top screw goes through its eye | 5, lifts out as the cap comes off | Black eye on a neck | Neck length and eye width are read from photos. |
| FTX6210 (blue) | Hex top cap, aluminium | p23, p25 | Threads onto the body (no screw) | 4, unscrew by hand or with a wrench | Blue hex, flats up, 14 mm across the flats | **GUESS:** exact hex size and corner rounding. The blue is a royal blue; the shop photo looks lighter (aqua). |
| FTX6512 | O-ring under the top cap | p23 | Sits in a groove | 5, lifts out | Thin black ring | **GUESS:** colour. The manual draws it red, the photo shows black. |
| FTX6212 (blue) | Knurled ring under the cap | p23 | Threads on the body | 5, lifts out with the cap | Blue ring with fine knurling | Knurl count is a guess. |
| FASTM3 | Small nut on the shaft top | p23 | Threads on the shaft | 6, off the shaft before the shaft slides out | **Not modelled** (inside the body) | Hidden part. |
| FTX6206 | Shaft and piston set | p23, p25 "Shaft & Piston Set" | Threads into the lower rod end; the piston is inside the body | 6, pulls out of the body after the cap is off | Thin steel shaft (about 3 mm) | **GUESS:** shaft diameter. The piston and its washers are inside the body and are not modelled. |
| FTX6208 | Shock body, black plastic, ribbed | p23, p25 "Front Shock Body" | Held by its own thread in the cap and lower cap | 7, empties once everything is out | Solid black ribbed body | **GUESS:** rib pitch (1.4 mm). The body is solid: the inside is not modelled. |
| FTX6204 | Spring | p23, p25 "Front Shock Spring" | Sits between the top ring and the lower cup | 2a, slides off first, once the lower cup is out | Real helical spring, 10.5 turns, 1.1 mm wire | Turn count and wire thickness are from photos. |
| FTX6510 | Two red O-rings on the shaft | p23 | Sit in the lower cap | 8 | **Not modelled** (inside) | Hidden part. |
| FTX6211 (blue) | Knurled lower cap | p23, p25 "Shock Lower Cap" | Threads onto the body bottom | 7, unscrew | Blue knurled cap | Knurl count is a guess. |
| FTX6211 (black) | Washer set under the lower cap | p23, p25 | Seated under the cap | 7a | Thin black washer | **GUESS:** washer count and thickness. |
| FTX6212 (black) | Lower spring cup | p23 | The spring pushes it onto the cap | 2, first thing off the bottom | Black cup | Shape is read from photos. |
| FTX6500 | Bottom rod end, black plastic | p23 | Threads onto the shaft | 9, unscrew | Black rod end with an eye | Neck width is read from photos. |
| FTX6506 | Ball in the bottom rod end | p23 | Snaps into the eye (no screw) | 9a | White ring in the eye | **GUESS:** the manual draws it white. Shop photos show a metal ferrule instead. |

Also on p23: **FAST60-40** is **shock oil**, not a screw. The manual does not give an oil weight, so I did not guess one.

## The screw (the one that moves)

| Item | Value | Source |
|------|-------|--------|
| FAST118 | M3 x 18 mm, cap head | p24 label "FAST118 (M3X18)" |
| Thread pitch | 0.5 mm per turn (standard M3 coarse). 17 full turns = 8.5 mm | ISO M3 standard |
| How it is made | Real thread from BoltFactory v0.7.1, right-handed: turning it anticlockwise from the head backs it out | Check on the thread in Blender |
| Where it lands | Middle slot of the tray | My choice |

## Things I added that are not on the truck

- **Tower ear stub (GUESS):** a small block with a hole, drawn only so the screw has something to come out of. The real tower ear (FTX6200) has a different shape and was not modelled.
- **How deep the thread goes (GUESS):** I assumed 8.5 mm engaged, which is where 17 turns comes from.
- **Tray and grey sweep:** props for the look test. Not car parts.

## Scale check

- The two eye centres are **95.0 mm** apart in the model. The overlay on the shop photo (blended 50/50, same two eye centres) lines up on the cap, spring cups, body and spring. See `blender/stage1/out/overlay-photo.png` in the repo.
- The 95 mm is an estimate from photo proportions plus the scale anchors from the plan (tyre 120 mm, M3 screws). It was not measured on the real part, so allow about 5%.
- The 46.0 mm dimension on p24 is not explained in the manual. I did not use it.

## Assumptions I made

1. **No phone capture.** James is not capturing anything. I used the manual, the shop photo and four public review and teardown videos. I pulled frames from them for reference.
2. **No photogrammetry.** None of the videos I found is a suitable walk-around of the shock, so I did not run a scan. The `scan/input` folder in the repo is left ready, and nothing is waiting on James.
3. **Files live in `RC Companion/blender/stage1/` in the vault.** No earlier `.blend` files were found anywhere on the machine.
4. **Interior parts are not modelled.** The body is solid. The piston, the FASTM3 nut and the FTX6510 O-rings are hidden in real life too.
