# Front-left corner: parts sheet (Stage 2)

Generated from `parts_meta.json`, the same file the page reads, plus the shop table inside `stage2-shock-swap.html`. Prices and stock were read from the shop pages on **15 Oct 2026** and they change.

**How to read the axes.** Model space is Blender's: +X is the truck's right, +Y is forward, +Z is up. The left wheel sits at negative X. "Comes off" is the direction the part moves when it is taken off the truck, and the distance is what the Explode slider uses. Shock parts are listed in the shock's own frame: +Z runs along the shock from the bottom eye to the top eye, which is tilted 17 degrees on the truck.

**GUESS** means the manual and photos did not settle the shape, so it is a plain stand-in. A part marked Stand-in is the right size and position but not the right outline.

| FTX | Name in the model | Kind | Manual | Comes off | Explode (mm) | Shop | Price | Stock | Guess | Note |
|-----|-------------------|------|--------|-----------|--------------|------|-------|-------|-------|------|
| FAST114 | Knuckle arm screw, cap head M3x8 | Screw (stand-in) | p24 | -Y (back) | 75 | M3 x 8 Socket Cap Head Screws, 6 pcs | £0.99 | Out of stock | GUESS | The manual prints FAST114 (M3X8). |
| FAST114 | Knuckle arm screw, cap head M3x8 | Screw (stand-in) | p24 | -Y (back) | 75 | M3 x 8 Socket Cap Head Screws, 6 pcs | £0.99 | Out of stock | GUESS | The manual prints FAST114 (M3X8). |
| FAST118 | Top shock screw, cap head M3x18 | Screw (real thread, moves) | p24 | -Y (back) | 40 | M3 x 18 Socket Cap Head, 6 pcs | £0.99 | Out of stock |  |  |
| FAST118 | Top shock screw, cap head M3x18 | Screw (real thread, moves) | p24 | -Y (back) | 40 | M3 x 18 Socket Cap Head, 6 pcs | £0.99 | Out of stock |  |  |
| FTBB120 | Wheel bearing 10x5x4 (inner) | Part | p24 | +X (to the truck's right) | 28 | Performance Bearings 5 x 10 x 4 mm, 2 pcs | £3.99 | In stock |  |  |
| FTBB120 | Wheel bearing 10x5x4 (outer) | Part | p24 | -X (out to the left) | 28 | Performance Bearings 5 x 10 x 4 mm, 2 pcs | £3.99 | In stock |  | p24 prints FTBB16 (10X5X4); the spare-parts list calls it FTBB120. |
| FTX6200 | Front shock tower | Part | p24 | +Z (up) | 70 | Front Shock Tower, 1 pc | £2.69 | In stock | GUESS | Outline is read from the manual drawing. Upgrade: FTX6351 carbon tower. |
| FTX6202 | Front shock, complete (stock) | Shock assembly | p24 | -Y (back) | 40 | Vantage/Carnage Front Shock Complete, pair | £10.99 | Out of stock |  | slides off along the eye axis once both screws are out |
| FTX6215 | Steering knuckle arm | Part | p24 | -Y (back) | 55 | Steering Knuckle Arm, 2 sets | £2.99 | In stock | GUESS | Plate with a rear tab for the steering link. Real shape is cranked. |
| FTX6216 | Upright (steering knuckle) | Part | p24 | +Z (up) | 45 | Uprights, 2 pcs | £3.99 | In stock | GUESS | Block with a bore and an ear for the upper arm. Real outline is rounder. |
| FTX6220 | Front suspension holder (front) | Part | p24 | +Y (forward) | 30 | Front Suspension Holder, 2 pcs | £2.29 | In stock |  | Holders are sold as a 2-pack. |
| FTX6220 | Front suspension holder (rear) | Part | p24 | -Y (back) | 30 | Front Suspension Holder, 2 pcs | £2.29 | In stock |  |  |
| FTX6223 | Hinge pin, front (outer pin) | Part | p24 | +Y (forward) | 45 | Hinge Pins, outer x1 and inner x1 per set, 2 sets | £2.29 | In stock |  | Shop pack FTX6223 holds the outer and inner pin for one arm. The manual prints FTX6336 (long and short pins) for the same job. |
| FTX6223 | Hinge pin, outer (arm to upright) | Part | p24 | -Z (down) | 45 | Hinge Pins, outer x1 and inner x1 per set, 2 sets | £2.29 | In stock | GUESS | FTX6223 is sold as one outer and one inner pin per set. Which pin goes where is read from the drawing. The manual also prints FTX6530 near this joint; the shop sells it as a 3x4 self-tapping ring screw, so it is not modelled. |
| FTX6223 | Hinge pin, rear (inner pin) | Part | p24 | -Y (back) | 45 | Hinge Pins, outer x1 and inner x1 per set, 2 sets | £2.29 | In stock |  |  |
| FTX6224 | Wheel hub, 12 mm hex | Part | p24 | -X (out to the left) | 80 | Wheel Hub, 4 pcs | £1.69 | In stock |  | Sold as a 4-pack. |
| FTX6225 | Gearbox housing (stand-in block) | Part | p24 | -Z (down) | 0 | Gearbox Housing Set, 2 pcs | £2.99 | In stock | GUESS | Stand-in block. The real housing is a clamshell with a different outline. |
| FTX6310B | Tyre on wheel (mounted pair) | Part | p24 | -X (out to the left) | 120 | Mounted Wheel and Tyre, complete pair, black | £13.99 | In stock | GUESS | 120 mm tall, 60 mm wide. The tread pattern is a stand-in. |
| FTX6315B | Wheel (rim) | Part | p25 | -X (out to the left) | 120 | Wheel, 2 pcs, black | £4.49 | In stock | GUESS | Sold glued to the tyre as the mounted pair FTX6310B. 2.8 in wheel, 12 mm hex. |
| FTX6320 | Front lower suspension arm | Part | p24 | -X (out to the left) | 60 | Front Lower Suspension Arms, 2 pcs | £4.50 | In stock | GUESS | Outline from the manual drawing. The shock lug is drawn on the rear leg. |
| FTX6322 | Front CVD driveshaft | Part | p24 | -X (out to the left) | 40 | Front CVD, 2 pcs | £10.75 | In stock |  | Cup, rod and M4 end drawn as one piece. Inner joint is hidden inside the gearbox. |
| FTX6324N | Front bumper, updated (simplified) | Part | p24 | +Y (forward) | 95 | Carnage 2.0 / Outlaw / Bugsta Updated Bumper | £4.99 | In stock | GUESS | Block stand-in. The real bumper is curved with a lip. |
| FTX6327 | Front upper suspension arm | Part | p24 | +Y (forward) | 30 | Front Upper Suspension Arm, 2 sets | £3.29 | Out of stock (blue FTX6327B in stock) | GUESS | Straight rod stand-in; the real arm is a moulded turnbuckle link. Blue version: FTX6327B. |
| FTX6356 | Aluminium front shock (upgrade) | Shock assembly | p25 | +Y (forward) | 40 | Vantage/Carnage/Outlaw/Zorro Aluminium Front Shock, pair | £12.99 | In stock | GUESS | Upgrade part. Shop Q&A: 95 mm bolt to bolt, comes oil filled with 35 wt oil. |
| FTX6502 | Rod end (tower) | Part | p24 | +Y (forward) | 55 | Steering Linkage Ball End, 6 pcs | £1.69 | In stock | GUESS | Steering linkage ball end, 6 per pack. |
| FTX6502 | Rod end (upright) | Part | p24 | +Y (forward) | 55 | Steering Linkage Ball End, 6 pcs | £1.69 | In stock | GUESS | Steering linkage ball end, 6 per pack. |
| FTX6506 | Ball A (upright end) | Part | p24 | +Z (up) | 40 | Ball A, 6 pcs | £2.39 | In stock | GUESS | Which end takes Ball A and which Ball B is read from the drawing. |
| FTX6507 | Ball B (tower end) | Part | p24 | +Z (up) | 40 | Ball B, 6 pcs | £2.39 | In stock | GUESS | Which end takes Ball A and which Ball B is read from the drawing. |
| FTX6513 | Drive pin 10x2 | Part | p24 | +Z (up) | 40 | Pin 10 x 2 mm, 6 pcs | £1.69 | Out of stock |  | Sits across the axle end inside the hex hub. Lookalike: FTX6514 is 11x2. |
| FTX6526 | Bumper screw | Screw (stand-in) | p24 | +Y (forward) | 125 | Button Head Hex Screw M3 x 10, 6 pcs |  | Listing found by name, the part number is not printed on the page | GUESS | Plain-shank stand-in: no thread, length read from the BOM. |
| FTX6526 | Bumper screw | Screw (stand-in) | p24 | +Y (forward) | 125 | Button Head Hex Screw M3 x 10, 6 pcs |  | Listing found by name, the part number is not printed on the page | GUESS | Plain-shank stand-in: no thread, length read from the BOM. |
| FTX6527 | Bottom shock screw, button head M3x12 | Screw (real thread, moves) | p24 | -Y (back) | 40 | Button Head Hex Screw M3 x 12, 6 pcs | £2.49 | In stock |  |  |
| FTX6527 | Bottom shock screw, button head M3x12 | Screw (real thread, moves) | p24 | -Y (back) | 40 | Button Head Hex Screw M3 x 12, 6 pcs | £2.49 | In stock |  |  |
| FTX6535 | Ball screw, tower end (flat head M3x8) | Screw (stand-in) | p24 | -Z (down) | 60 | Flat Head Hex M3 x 8, 6 pcs |  | Listing found by name, the part number is not printed on the page | GUESS | Plain-shank stand-in: no thread, length read from the BOM. |
| FTX6536 | Holder screw, front | Screw (stand-in) | p24 | +Y (forward) | 70 | Flat Head Hex M3 x 10, 5 pcs | £4.49 | In stock | GUESS | Plain-shank stand-in: no thread, length read from the BOM. |
| FTX6536 | Holder screw, front | Screw (stand-in) | p24 | +Y (forward) | 70 | Flat Head Hex M3 x 10, 5 pcs | £4.49 | In stock | GUESS | Plain-shank stand-in: no thread, length read from the BOM. |
| FTX6536 | Holder screw, rear | Screw (stand-in) | p24 | -Y (back) | 70 | Flat Head Hex M3 x 10, 5 pcs | £4.49 | In stock | GUESS | Plain-shank stand-in: no thread, length read from the BOM. |
| FTX6536 | Holder screw, rear | Screw (stand-in) | p24 | -Y (back) | 70 | Flat Head Hex M3 x 10, 5 pcs | £4.49 | In stock | GUESS | Plain-shank stand-in: no thread, length read from the BOM. |
| FTX6537 | Ball screw, upright end (flat head M3x12) | Screw (stand-in) | p24 | -Z (down) | 60 | Flat Head Hex M3 x 12, 6 pcs |  | Listing found by name, the part number is not printed on the page | GUESS | Plain-shank stand-in: no thread, length read from the BOM. |
| FTX6537 | Tower foot screw, flat head M3x12 | Screw (stand-in) | p24 | +Z (up) | 95 | Flat Head Hex M3 x 12, 6 pcs |  | Listing found by name, the part number is not printed on the page | GUESS | The manual prints FTX6537 (M3X12). The shop sells it as a flat head hex. |
| FTX6537 | Tower foot screw, flat head M3x12 | Screw (stand-in) | p24 | +Z (up) | 95 | Flat Head Hex M3 x 12, 6 pcs |  | Listing found by name, the part number is not printed on the page | GUESS | The manual prints FTX6537 (M3X12). The shop sells it as a flat head hex. |
| M4 nut | Wheel nut, M4 nylon lock (part number not confirmed) | Part | p24 | -X (out to the left) | 190 |  |  |  | GUESS | Owners report a nut with a star washer; the manual BOM lists a nylon lock nut. Not confirmed. |
| FTX6204 | Front shock spring | Inside the shock | p23 | +Z (up) (shock frame) | -4.5 | Front Shock Spring, 2 pcs | £1.99 | In stock |  |  |
| FTX6206 | Shaft and piston set | Inside the shock | p23 | +Z (up) (shock frame) | -16.2 | Front Shock Shaft and Piston Set, 2 sets | £1.99 | In stock |  |  |
| FTX6208 | Front shock body | Inside the shock | p23 | +Z (up) (shock frame) | 8.1 | Front Shock Body, 2 pcs | £1.69 | In stock |  |  |
| FTX6210 | Shock upper cap (blue hex) | Inside the shock | p23 | +Z (up) (shock frame) | 31.5 | Shock Upper Cap, 2 sets | £2.75 | In stock |  |  |
| FTX6210 | Shock upper cap, top eye | Inside the shock | p23 | +Z (up) (shock frame) | 43.2 | Shock Upper Cap, 2 sets | £2.75 | In stock |  |  |
| FTX6210 | Shock upper cap, black top | Inside the shock | p23 | +Z (up) (shock frame) | 40.5 | Shock Upper Cap, 2 sets | £2.75 | In stock |  |  |
| FTX6211 | Shock lower cap (blue) | Inside the shock | p23 | +Z (up) (shock frame) | -7.2 | Shock Lower Caps, 2 sets | £2.99 | In stock |  |  |
| FTX6211 | Lower cap washer | Inside the shock | p23 | +Z (up) (shock frame) | -3.6 | Shock Lower Caps, 2 sets | £2.99 | In stock |  |  |
| FTX6212 | Lower spring cup | Inside the shock | p23 | +Z (up) (shock frame) | -31.1 | Shock Lower Holder and Adjust Ring, 2 sets | £2.99 | In stock |  |  |
| FTX6212 | Adjust ring (blue) | Inside the shock | p23 | +Z (up) (shock frame) | 24.3 | Shock Lower Holder and Adjust Ring, 2 sets | £2.99 | In stock |  |  |
| FTX6356 | Front shock spring (aluminium version) | Inside the shock | p25 | +Z (up) (shock frame) | -4.5 | Vantage/Carnage/Outlaw/Zorro Aluminium Front Shock, pair | £12.99 | In stock | GUESS | Shape is the stock shock recoloured. The real FTX6356 was not photographed. |
| FTX6356 | Shaft and piston set (aluminium version) | Inside the shock | p25 | +Z (up) (shock frame) | -16.2 | Vantage/Carnage/Outlaw/Zorro Aluminium Front Shock, pair | £12.99 | In stock | GUESS | Shape is the stock shock recoloured. The real FTX6356 was not photographed. |
| FTX6356 | Front shock body (aluminium version) | Inside the shock | p25 | +Z (up) (shock frame) | 8.1 | Vantage/Carnage/Outlaw/Zorro Aluminium Front Shock, pair | £12.99 | In stock | GUESS | Shape is the stock shock recoloured. The real FTX6356 was not photographed. |
| FTX6356 | Shock upper cap (blue hex) (aluminium version) | Inside the shock | p25 | +Z (up) (shock frame) | 31.5 | Vantage/Carnage/Outlaw/Zorro Aluminium Front Shock, pair | £12.99 | In stock | GUESS | Shape is the stock shock recoloured. The real FTX6356 was not photographed. |
| FTX6356 | Shock upper cap, top eye (aluminium version) | Inside the shock | p25 | +Z (up) (shock frame) | 43.2 | Vantage/Carnage/Outlaw/Zorro Aluminium Front Shock, pair | £12.99 | In stock | GUESS | Shape is the stock shock recoloured. The real FTX6356 was not photographed. |
| FTX6356 | Shock upper cap, black top (aluminium version) | Inside the shock | p25 | +Z (up) (shock frame) | 40.5 | Vantage/Carnage/Outlaw/Zorro Aluminium Front Shock, pair | £12.99 | In stock | GUESS | Shape is the stock shock recoloured. The real FTX6356 was not photographed. |
| FTX6356 | Shock lower cap (blue) (aluminium version) | Inside the shock | p25 | +Z (up) (shock frame) | -7.2 | Vantage/Carnage/Outlaw/Zorro Aluminium Front Shock, pair | £12.99 | In stock | GUESS | Shape is the stock shock recoloured. The real FTX6356 was not photographed. |
| FTX6356 | Lower cap washer (aluminium version) | Inside the shock | p25 | +Z (up) (shock frame) | -3.6 | Vantage/Carnage/Outlaw/Zorro Aluminium Front Shock, pair | £12.99 | In stock | GUESS | Shape is the stock shock recoloured. The real FTX6356 was not photographed. |
| FTX6356 | Lower spring cup (aluminium version) | Inside the shock | p25 | +Z (up) (shock frame) | -31.1 | Vantage/Carnage/Outlaw/Zorro Aluminium Front Shock, pair | £12.99 | In stock | GUESS | Shape is the stock shock recoloured. The real FTX6356 was not photographed. |
| FTX6356 | Adjust ring (blue) (aluminium version) | Inside the shock | p25 | +Z (up) (shock frame) | 24.3 | Vantage/Carnage/Outlaw/Zorro Aluminium Front Shock, pair | £12.99 | In stock | GUESS | Shape is the stock shock recoloured. The real FTX6356 was not photographed. |
| FTX6356 | Shock ball end, lower rod end (aluminium version) | Inside the shock | p25 | +Z (up) (shock frame) | -42.3 | Vantage/Carnage/Outlaw/Zorro Aluminium Front Shock, pair | £12.99 | In stock | GUESS | Shape is the stock shock recoloured. The real FTX6356 was not photographed. |
| FTX6356 | Shock ball end, neck (aluminium version) | Inside the shock | p25 | +Z (up) (shock frame) | -35.1 | Vantage/Carnage/Outlaw/Zorro Aluminium Front Shock, pair | £12.99 | In stock | GUESS | Shape is the stock shock recoloured. The real FTX6356 was not photographed. |
| FTX6356 | Ball A, brass ball in the lower eye (aluminium version) | Inside the shock | p25 | +Z (up) (shock frame) | -42.3 | Vantage/Carnage/Outlaw/Zorro Aluminium Front Shock, pair | £12.99 | In stock | GUESS | Shape is the stock shock recoloured. The real FTX6356 was not photographed. |
| FTX6356 | Ball C, brass flanged bushing in the top eye (aluminium version) | Inside the shock | p25 | +Z (up) (shock frame) | 43.2 | Vantage/Carnage/Outlaw/Zorro Aluminium Front Shock, pair | £12.99 | In stock | GUESS | Shape is the stock shock recoloured. The real FTX6356 was not photographed. |
| FTX6356 | Upper O-ring (blue) (aluminium version) | Inside the shock | p25 | +Z (up) (shock frame) | 21.6 | Vantage/Carnage/Outlaw/Zorro Aluminium Front Shock, pair | £12.99 | In stock | GUESS | Shape is the stock shock recoloured. The real FTX6356 was not photographed. |
| FTX6500 | Shock ball end, lower rod end | Inside the shock | p23 | +Z (up) (shock frame) | -42.3 | Shock Ball End, 6 pcs | £1.69 | In stock |  |  |
| FTX6500 | Shock ball end, neck | Inside the shock | p23 | +Z (up) (shock frame) | -35.1 | Shock Ball End, 6 pcs | £1.69 | In stock |  |  |
| FTX6506 | Ball A, brass ball in the lower eye | Inside the shock | p23 | +Z (up) (shock frame) | -42.3 | Ball A, 6 pcs | £2.39 | In stock |  |  |
| FTX6508 | Ball C, brass flanged bushing in the top eye | Inside the shock | p23 | +Z (up) (shock frame) | 43.2 | Ball C, 6 pcs | £2.50 | In stock |  |  |
| FTX6512 | Upper O-ring (blue) | Inside the shock | p23 | +Z (up) (shock frame) | 21.6 | Shock O-ring (upper), 4 pcs | £1.69 | In stock |  |  |
| tray | Screw tray | Prop, not a car part | - | +Z (up) | 0 |  |  |  |  | Bench tray, not a truck part. |
| tray | Tray label M3x12 | Prop, not a car part | - | +Z (up) | 0 |  |  |  |  |  |
| tray | Tray label M3x18 | Prop, not a car part | - | +Z (up) | 0 |  |  |  |  |  |

## The two screws that move

| Screw | Shop code | Thread | Turns out | Where it lands | How it is made |
|-------|-----------|--------|-----------|----------------|----------------|
| Top shock screw | FAST118, M3 x 18 socket cap head, 2.5 mm hex | M3 x 0.5 | 17 turns (8.5 mm engaged) | Slot marked M3x18 | BoltFactory v0.7.1, right-handed |
| Bottom shock screw | FTX6527, M3 x 12 button head, 2.0 mm hex | M3 x 0.5 | 5 turns (2.5 mm engaged) | Slot marked M3x12 | BoltFactory v0.7.1, right-handed |

The other screws are plain stand-ins (a lathe-turned head and shank, no thread). They sit in the model at the right size and position so the corner is complete, and they are named by their FTX or FAST number.

## Corrections to Stage 1 found while building Stage 2

- **FTX6530 is not a pivot pin.** The shop lists it as a 3 x 4 self-tapping ring screw. The lower arm to upright pin is the outer pin of the FTX6223 hinge pin set.
- **FTX6537 is a flat head hex M3 x 12**, not a button head. The shock bottom screw is the button head FTX6527. The two look alike from the side, so the page warns about it.
- **FAST114 is a socket cap M3 x 8.**
- **FTX6535 / FTX6537 / FTX6526:** the FTX shop pages have no part number printed. I matched them by name and size, so the codes are flagged on the page as found by name.
- **FTBB120 (10 x 5 x 4) replaces FTBB16** as the wheel bearing listing.
- **FTX6513 (10 x 2 mm) is the axle drive pin**; FTX6514 is 11 x 2 mm and looks identical.

## Assumptions I made (nobody checked these on a real truck)

1. No capture by James. Everything is from the manual, shop photos, shop listings and public review and teardown videos.
2. Shock angle 17 degrees and eye-to-eye 95 mm are read from photos plus the shop listing. Allow about 5%.
3. Thread engagement depths (8.5 mm and 2.5 mm) set the turn counts. They are not measured.
4. The tower ear, lower arm lug and upright shapes are simplified. They are in the right place and carry the right holes.
5. The tyre tread is a stand-in pattern, not the real Carnage 2.0 tread.
6. Hidden interior parts (piston, FASTM3 nut, FTX6510 lower O-rings) are not modelled.
7. Prices and stock were read from the shops on 15 Oct 2026. The page says so next to every price.
