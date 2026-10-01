# Changelog

Notable project changes, recorded with the date they were made.

## 2026-10-01

- Restored Production income: each territory now earns £1 for every resource unit actually produced, including the reduction from unrest. The Production report shows the income earned.

## 2026-09-23

- Fixed the Reflection phase instruction check in `app.js` to match the lowercase `reflection` phase value. The phase now displays “Review What Happened.”
- Updated `project.md` to describe the Reflection phase rename as implemented and remove outdated notes saying it was still pending.

## 2026-09-24

- Added production schedules for Levels 1–4 to India, Canada, Ceylon and Jamaica. India and Jamaica now produce one food unit at Level 1; higher levels shift some output toward textiles and machinery.
- Added level-based consumption needs: 2 of each category at Level 1, rising to 5 at Level 4.
- Added Reflection-phase development upgrades, costing £20, £35 and £55 for successive levels. Resource costs are stored by category and currently set to zero. Territories in unrest cannot develop, and Level 4 is the maximum.
- Removed automatic money income from Production. Production now adds resources to territory stocks only.
- Added Trade-phase sales to Britain. Territories can sell one unit of any resource per click at its listed value; the resource is removed and the money is added to the territory. The resource list opens during Trade, and sale summaries show goods sold and income earned.
- Updated `project.md` to document the development rules, sales model and revised round flow. Added styling for development and resource-sale controls.
- Added hover tooltips to development-level indicators with the level description and its needs for each round.
- Added a hover tooltip to Unrest badges explaining how unrest begins, its production and development effects, and how it clears.
- Added each territory's per-round food, manufactured-goods and luxury needs beside its resource totals.
- Added a brief green highlight animation to a territory card after it develops, respecting reduced-motion preferences.
- Restricted the teacher's plus/minus resource and money adjustment buttons to the Trade Phase.
- Added Australia, New Zealand, Egypt and the Gold Coast as territories using existing resources and the agreed Level 1–4 production schedules. They follow India, Canada, Ceylon and Jamaica in the territory list, placing their cards on the next row on wide desktop screens.
- Updated `project.md` to document all eight territories and their Level 1 production profiles.
- Assigned each of the eight territory cards a distinct pastel background color, consistent across normal cards and phase reports.
- Increased the color contrast between the territory pastels, particularly for cards with similar green and yellow tones.
- Restricted the manufactured-goods purchase section to the Trade Phase.
- Renamed the resource controls section to “Trade Resources” to cover both Britain sales and teacher-entered player trades.

- Set all eight territories' starting money to £5 so starting financial resources are equal and asymmetry comes from their resource profiles.
- Redesigned the page header and phase tracker as one compact, full-width bar, with the round and year on the left, the game title and phase details centered, and the phase action button on the right. The tracker stacks cleanly on narrow screens.
- Added a compact, full-width Britain wealth card beneath the territory cards. Britain's balance starts at £25, rises when territories buy manufactured goods from Britain, and falls when Britain buys resources from territories. Resource sales are disabled when Britain cannot afford them, so its balance cannot fall below zero.
- Added a startup choice for 4–8 teams, defaulting to four. Each team is assigned one territory in list order; unused territories are hidden and excluded from production and consumption.
- Added a 20% tax on each active territory's money, rounded down to the nearest whole pound. It is collected automatically on entering Reflection, before development; territories with less than £5 pay £0. Payments appear on each territory card and are added to Britain's wealth.
- Added thin category-colored stripes beside resources in the expandable card lists and a compact F/M/L key in the existing heading, avoiding extra row height or resource-name wrapping.
- Refined the Food, Manufactured and Luxury category colors to distinct forest green, blue and plum tones that remain coordinated with the pastel card palette.
- Added specific resource requirements to development upgrades: 2 Textiles for Level 2, 2 Machinery for Level 3 and 4 Machinery for Level 4, alongside the existing money costs. Required goods must be held in stock and are spent on upgrade; upgrade costs are shown on the Develop button and in the level tooltip.
- Kept the Develop button visible throughout Reflection, with its costs shown even when unaffordable. The button is greyed out until the territory can develop; Level 4 cards show a disabled Max Level button.
- Renamed the player-facing Reflection Phase to **Review & Development Phase** and changed its instruction to “Check the results, pay tax, and choose whether to develop.” The internal phase name remains `reflection`.
- Raised and varied territory starting money from £5 each to £8–£16: India £8, Gold Coast £10, Jamaica £11, Ceylon and Egypt £12, New Zealand £13, Canada £14 and Australia £16. The values cluster around £12 and let every territory buy two Textiles at the start, while making room for historically themed differences. These are game-balance values, not literal estimates of historical treasuries.
- Added a one-screen tutorial test to the main game screen. The optional “How to Play” button opens a dimmed overlay, highlights the current phase name, and explains the phase tracker. “Got It” or Escape closes it without changing game state.
- Expanded the tutorial into a guided demo of the phase tracker, territory cards, money, resource categories, resource list, production, trading, consumption, unrest, tax, Britain's wealth, development and the next round. Players perform the Produce, Continue, Submit Trades, Consume, Review & Development and Next Round actions themselves. Example trades buy two Textiles for every active territory, transfer one Wheat from Canada to Jamaica, then have Jamaica sell 13 Sugar and buy two more Textiles. This lets Jamaica meet its needs, pay £5 tax and afford its first development upgrade; India remains one Food short and enters unrest. The demo restores the saved game and trade timer when exited.
- Added a welcome page and Back buttons throughout the tutorial. Going back restores the demo state at that step, including phase actions and scripted trades. Resource type and trade steps now highlight their full card sections; consumption results highlight both India and Jamaica. Removed the separate example-trade and Sugar-sale explanations while keeping those scripted trades behind the scenes. Combined needs and consumption into one action step, and folded unrest's development restriction into the Development explanation.
- Added a welcome card that appears after the teacher chooses the number of teams. It explains the goals of earning money and developing a territory, how resource production and needs work, and offers a direct link into the How to Play tutorial.
