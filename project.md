# Victorian Empire Game

## 1. Project Overview

**Victorian Empire Game** is a browser-based classroom simulation
designed for **Year 6 pupils (approximately 10--11 years old)**.

The game is intended to help children explore how an imperial economy
works by managing a fictionalised set of British imperial territories.
Each team controls one territory and makes decisions about:

-   producing resources;
-   earning money by selling resources to Britain;
-   trading resources;
-   buying manufactured goods;
-   meeting basic consumption needs;
-   responding to the consequences of unmet needs;
-   eventually developing their territory.

The game is primarily a **teacher-controlled classroom simulation**,
rather than a competitive computer game. The teacher advances the
phases, while pupils make decisions for their assigned territories.

At startup, the teacher selects 4–8 teams (four by default). Each team
controls one territory. Teams are assigned the first selected territories
in the game's territory list; unused territories are hidden and do not
produce or consume resources.

The game screen has an optional guided tutorial. It runs through a fresh
demo round, beginning with a welcome and highlighting the interface as the
player produces, trades, consumes resources, reviews taxes, develops a
territory and starts the next round. Each step has Back navigation, and
returning to an earlier step restores the demo to that point. The tutorial
saves and restores the current game state and trade timer when it ends or is
exited. Example trades happen in the background: every active territory buys
two Textiles, Canada gives Jamaica one Wheat, and Jamaica sells Sugar to
Britain and buys two more Textiles. India receives no extra Food, so it is the
only territory expected to enter unrest; Jamaica can pay tax and afford its
first development upgrade.

The design deliberately prioritises: - simple rules; - visible cause and
effect; - short action cycles; - concrete resource quantities; - limited
choices; - readable visual feedback; - classroom manageability.

The intended educational purpose is to make economic relationships,
resource distribution, industrialisation, trade and imperial dependency
tangible rather than purely abstract.

------------------------------------------------------------------------

## 2. Intended Users

### Primary users

**Year 6 pupils**, working in teams.

The interface and mechanics are designed around children aged
approximately ten. Instructions therefore need to be short, concrete and
immediately understandable.

### Teacher

The teacher acts as the game's controller.

The teacher: - starts each phase; - advances the game; - submits the
trade phase; - controls when production and consumption are resolved; -
can manually adjust money and resources where necessary; - observes the
results with the class.

The teacher-facing interface therefore needs to be robust enough to
survive real classroom use, where several children may be talking,
decisions may be made imperfectly, and the teacher may need to correct a
state manually.

------------------------------------------------------------------------

## 3. Core Educational Concept

The simulation is built around a simple economic loop:

> **Produce → sell and trade → consume → reflect → repeat**

The important conceptual relationship is:

> **A territory needs resources to meet its population's needs, but the
> resources it needs may not be the resources it produces.**

This creates a reason for trade.

The game is intended eventually to demonstrate that territories at
different levels of economic development have different productive
capacities and economic relationships.

The game should allow pupils to observe consequences rather than simply
being told them.

------------------------------------------------------------------------

## 4. Current Gameplay Loop

Each round currently follows these phases:

### 1. Production Phase

The teacher presses **PRODUCE**.

Every territory produces its configured production quantities. Production
adds goods to the territory's stock but does not add money.

If a territory has unrest, its production is currently halved.

The production results are then shown in a temporary production report.

------------------------------------------------------------------------

### 2. Production Report

The game displays what each territory produced. Territories can earn
money by selling goods during the Trade Phase.

The teacher presses **CONTINUE** to move to the Trade Phase.

------------------------------------------------------------------------

### 3. Trade Phase

Teams decide how to use their money and resources. During this phase,
they can sell one unit of any resource to Britain per click. The resource
is removed from the territory and its listed value is added to the
territory's money. They can repeat sales while they have stock.

At present, the main manufactured-good purchases are:

-   **Buy Textiles** for £3
-   **Buy Machinery** for £5

Purchases: - increase the relevant resource; - subtract the price from
the territory's money; - are only available during the Trade Phase.

The resource list expands during Trade so players can see and sell their
goods. Each sell button shows the money earned for one unit. A trade
summary records goods sold to Britain and money earned during the phase.
Britain's wealth is shown in a separate, full-width card below the
territory cards. It starts at £25, increases when territories buy
manufactured goods from Britain, and decreases when Britain buys resources
from territories. Britain cannot buy a resource if it does not have enough
money to pay for it, so its balance cannot fall below zero.

A three-minute countdown timer has been added as a
**classroom-management aid**.

Important:

**The timer does not end the phase.**

When it reaches 0:00: - trades are not automatically submitted; - the
game does not advance; - the teacher must still press **SUBMIT TRADES**.

The timer resets to three minutes for each new Trade Phase.

------------------------------------------------------------------------

### 4. Consumption Phase

The teacher presses **CONSUME**.

Every territory attempts to meet three categories of basic need:

-   food;
-   manufactured goods;
-   luxury resources.

Current requirement per round:

  Need                   Required
  -------------------- ----------
  Food                          2
  Manufactured goods            2
  Luxury resources              2

The game consumes the most abundant resource within each category first.

For example, if a territory has several food resources, the game uses
the largest available food stock first.

The game records whether each category of need was successfully met.

------------------------------------------------------------------------

### 5. Consumption Report

The game displays what was consumed.

The report then tells pupils whether:

**Basic Needs Sufficiently Met**

or:

**Basic Needs Not Sufficiently Met**

If needs were not met, the game also identifies the missing
category/categories:

-   Not enough food
-   Not enough manufactured goods
-   Not enough luxury resources

This is intended to make the cause of the subsequent consequence
explicit to ten-year-olds.

------------------------------------------------------------------------

### 6. Review & Development Phase

The internal phase remains named `reflection` in the JavaScript. The
player-facing phase name is **Review & Development Phase**.

The name covers both reviewing the round and deciding whether to develop
a territory, without presenting the phase as a punitive stage.

The current phase is therefore a transition point before the next round.

The player-facing instruction is:

> Check the results, pay tax, and choose whether to develop.

When the game enters Review & Development, Britain automatically collects
20% of each active territory's money, rounded down to the nearest whole
pound. The tax is collected before teams can develop. Each payment appears
on that territory's card, and the amount collected is added to Britain's
wealth. The tax cannot create debt or unrest; a territory with less than
£5 pays no tax that round.

------------------------------------------------------------------------

### 7. Next Round

The teacher presses **NEXT ROUND**.

The round number increases and the game returns to Production.

------------------------------------------------------------------------

## 5. Resources

Resources are divided into three broad economic categories.
The expandable resource list marks each resource with a thin, colored
stripe. A compact F/M/L key in the existing resource heading identifies
Food, Manufactured and Luxury; hovering over a key letter shows its full
category name.

### Food

Food resources are worth **£1 each**.

Current food resources:

-   Wheat
-   Meat
-   Rice

### Luxury Resources

Luxury resources are worth **£2 each**.

Current luxury resources:

-   Cotton
-   Wool
-   Tea
-   Sugar
-   Spices
-   Timber

### Manufactured Goods

Manufactured resources have higher monetary values.

  Resource      Value
  ----------- -------
  Textiles         £3
  Machinery        £5

The distinction is deliberately simple for the target age group.

Britain's current buying prices are:

> **Food = £1**\
> **Luxury = £2**\
> **Textiles = £3**\
> **Machinery = £5**

Selling one unit to Britain adds its price to the territory's money.

------------------------------------------------------------------------

## 6. Money and Income

Territories earn money by selling resources to Britain during the Trade
Phase. Production itself adds resources but does not generate money.

When a territory sells a resource:

> units sold × resource price = money earned

For example, selling 3 units of a £2 luxury resource earns £6. The sold
goods leave the territory's stock, so players must choose between
keeping resources to meet needs, trading them, or selling them for money.

The term **income** should be used in the interface. Avoid the phrase
"new money".

------------------------------------------------------------------------

## 7. Development Levels

Every territory currently starts at **Development Level 1**. There are
four development levels, each with a player-facing description and a
different production schedule and amount of goods needed each round.

During the Review & Development Phase, a territory can develop if it can afford
the next level and is not in unrest. The Develop button stays visible
during the phase and displays its cost; it is disabled until the
territory has enough money and the required goods and is not in unrest.
The upgrade costs are:

  Upgrade      Money cost   Resources required
  ------------ ------------ ------------------
  Level 1 to 2  £20          2 Textiles
  Level 2 to 3  £35          2 Machinery
  Level 3 to 4  £55          4 Machinery

The listed resources must be in the territory's stock and are used up
when it develops. The development-level tooltip and Develop button show
the next upgrade's cost. Developing immediately changes the
territory's level; its new
production is used in the next Production Phase, and its new needs in
the next Consumption Phase. A territory cannot develop beyond Level 4.

### Level 1 · Basic

Most people grow food or gather useful materials, such as cotton,
timber, tea and sugar. The territory has no factories for
manufacturing.

**Needs each round:** 2 food, 2 manufactured goods, 2 luxury goods.

### Level 2 · Developing

People still grow food and gather materials. Some also work in
workshops, turning materials into simple made goods, such as textiles.

**Needs each round:** 3 food, 3 manufactured goods, 3 luxury goods.

### Level 3 · Industrial

Many people work in factories, producing more complicated goods, such
as machinery. The territory still grows some food or gathers some
materials.

**Needs each round:** 4 food, 4 manufactured goods, 4 luxury goods.

### Level 4 · Advanced

The territory makes lots of goods in factories. It doesn't grow its own
food, and gathers only a few natural resources, so it needs to trade to
feed its people.

**Needs each round:** 5 food, 5 manufactured goods, 5 luxury goods.

------------------------------------------------------------------------

## 8. Unrest

The game currently has one simple unrest state:

> **Unrest: yes/no**

A territory enters unrest when it fails to meet all three categories of
basic need during Consumption.

If the territory successfully meets all three categories of need in a
later Consumption Phase, unrest disappears.

### Effects of unrest

Unrest currently:

-   halves production;
-   leaves consumption requirements unchanged.

Production is rounded down using `Math.floor()` when halved.

For example:

-   normal production = 5
-   unrest production = 2

The purpose is to create a simple feedback loop:

> unmet needs → unrest → lower production → greater economic difficulty

Unrest is shown visually with:

-   an **UNREST** label;
-   an ominous red border around the territory card.

------------------------------------------------------------------------

## 9. Current Territories

The game currently contains eight territories, displayed in this order:

1. India
2. Canada
3. Ceylon
4. Jamaica
5. Australia
6. New Zealand
7. Egypt
8. Gold Coast

Each territory begins with money reflecting a simplified historical
context, rather than an equal starting balance. These are classroom game
values, not estimates of the territories' actual treasuries:

-   **India:** £8
-   **Gold Coast:** £10
-   **Jamaica:** £11
-   **Ceylon:** £12
-   **Egypt:** £12
-   **New Zealand:** £13
-   **Canada:** £14
-   **Australia:** £16

All territories can therefore afford two Textiles at £3 each from the
start. The values cluster around £12, while giving the territories
different starting positions. The lower balances represent territories
where colonial extraction or concentrated export wealth limited the money
available locally; the higher balances reflect settler-colony economies
with more local government and investment. The amounts are deliberately
stylized for play, not a claim that one territory's actual treasury was a
specific amount richer than another's.

The original four territories occupy the first row on a wide desktop
screen. Australia, New Zealand, Egypt and the Gold Coast appear in the
row beneath them. The added territories use only resources already in
the game. Their production schedules are defined for all four
development levels in `app.js`.

Level 1 production profiles:

-   **India:** Cotton 4, Tea 2, Rice 1
-   **Canada:** Wheat 4, Timber 2, Wool 1
-   **Ceylon:** Rice 4, Tea 3
-   **Jamaica:** Sugar 4, Tea 2, Wheat 1
-   **Australia:** Wheat 3, Meat 1, Wool 3
-   **New Zealand:** Meat 3, Wool 3, Timber 1
-   **Egypt:** Rice 2, Cotton 4
-   **Gold Coast:** Rice 1, Timber 3, Spices 3

------------------------------------------------------------------------

## 10. Territory Cards

The game uses a card for each territory.

The card currently contains:

-   territory name;
-   development indicator;
-   unrest indicator where applicable;
-   money;
-   resource totals by category;
-   required amount for each resource category per round;
-   manufactured-good purchase buttons;
-   resource sale controls during Trade;
-   collapsible detailed resource list.

The resource details were deliberately made collapsible because the
screen only has enough practical space for a limited number of cards.

The default card therefore shows summary information rather than every
individual resource.

------------------------------------------------------------------------

## 11. Resource Details Interaction

The detailed resource section of each territory card is collapsible and
opens automatically during Trade so players can sell resources.

The reason is primarily visual:

> The four original territories should fill the first row, with the four
> added territories directly beneath them on a wide desktop screen.

During Trade, the detailed resource list contains plus/minus controls
for teacher adjustment and buttons to sell resources to Britain.

A previous implementation caused clicking a plus/minus button to
collapse the resource section. This was identified as undesirable
behaviour and the event handling was adjusted so that resource controls
do not inadvertently toggle the collapsible section.

The expanded/collapsed state is tracked so that the interface can redraw
without unexpectedly closing an expanded card.

------------------------------------------------------------------------

## 12. Manufactured-Good Purchases

The Trade Phase includes two explicit purchase controls:

### Buy Textiles

Price: **£3**

Effect: - subtract £3; - add 1 Textile.

### Buy Machinery

Price: **£5**

Effect: - subtract £5; - add 1 Machinery.

These controls are disabled outside the Trade Phase.

They are also disabled when the territory cannot afford the relevant
purchase.

This restriction was intentional for classroom-management reasons. The
game should make it visually obvious that buying is part of the Trade
Phase.

------------------------------------------------------------------------

## 13. Interface Design

The interface is deliberately designed as a classroom display rather
than a conventional game interface.

Current visual direction:

-   warm, muted palette;
-   cream/off-white background;
-   differentiated territory card colours;
-   Nunito for most interface text;
-   a thematic serif font for major headings;
-   large, readable action buttons;
-   strong visual hierarchy;
-   high visibility of phase and round;
-   red visual treatment for unrest;
-   large trade timer.

The page header and major territory/action titles use a more thematic
serif style.

The overall visual goal is:

> historical simulation without making the interface look like a dry
> spreadsheet.

------------------------------------------------------------------------

## 14. Classroom Design Principles

The game should be designed around the realities of a classroom.

Important principles:

### Low cognitive load

Children should be able to understand what they are supposed to do
without reading long instructions.

### Strong phase signalling

The current phase should always be obvious.

### Visible cause and effect

When something changes, pupils should be able to see why.

### Teacher retains control

The teacher should determine when phases end.

The trade timer is deliberately **not** an automatic game mechanic.

### Fast resolution

The simulation should not require the teacher to perform large numbers
of calculations manually.

### Forgiving interface

The teacher should be able to correct resource or money values manually
if something goes wrong.

### No unnecessary complexity

The target users are ten-year-olds. A mechanically elegant system that
requires pupils to understand complicated economic abstractions is worse
than a simpler system they can actually reason about.

------------------------------------------------------------------------

## 15. Current JavaScript Structure

The game is currently implemented as a single JavaScript application.

Major conceptual sections include:

1.  Game state
2.  Resource catalogue
3.  Basic needs
4.  Manufactured-good prices
5.  Development levels
6.  Territory data
7.  Resource calculation functions
8.  Money/resource adjustment functions
9.  Production
10. Trade
11. Consumption
12. Unrest
13. Reports
14. Territory-card rendering
15. Game rendering
16. Phase transitions

The game is currently state-driven through:

``` javascript
gameState = {
    round: 1,
    phase: "production"
};
```

The phase determines which controls are displayed and which actions are
allowed.

------------------------------------------------------------------------

## 16. Important State Variables

The main game state includes:

### `gameState`

Controls the current round and phase.

### `territories`

Contains the persistent state of every territory, including:

-   name;
-   money;
-   development level;
-   unrest state;
-   current resources;
-   production quantities.

### `resources`

Defines each resource's:

-   display name;
-   economic category;
-   monetary value.

### `developmentNeeds`

Defines how much of each resource category is required each round.

### `manufacturedPrices`

Defines purchase prices for manufactured goods.

### `lastChanges`

Stores resource changes for production and consumption reports.

### `lastSales` and `lastMoneyFromSales`

Store the resources sold to Britain and the money earned during Trade.

### `lastNeedsMet`

Stores whether each category of need was met.

### `expandedResources`

Stores which territory resource sections are currently expanded.

------------------------------------------------------------------------

## 17. Trade Timer

The intended trade timer implementation uses:

``` javascript
const tradeDurationSeconds = 180;
```

The timer:

-   starts when the Trade Phase begins;
-   updates once per second;
-   displays minutes and seconds;
-   changes visual state during the final minute;
-   displays an expired state at 0:00;
-   stops when trades are submitted;
-   never automatically advances the game.

The timer is therefore a **teacher aid**, not an economic mechanic.

------------------------------------------------------------------------

## 18. Current Game Balance

The current territory values and production values are **not final**.

They were chosen during development to make the system function and
demonstrate the mechanics.

The following areas still require balancing:

-   whether the historically themed starting-money differences are fair
    and playable;
-   starting resource quantities;
-   production quantities;
-   relative value of resources;
-   manufactured-good prices;
-   basic-needs requirements;
-   development effects;
-   unrest effects;
-   trade incentives;
-   territory differences.

Balance should eventually be tested by playing through multiple rounds
and checking whether:

1.  territories can realistically meet needs;
2.  trade is necessary rather than optional;
3.  money remains useful;
4.  production differences create meaningful choices;
5.  unrest is consequential but recoverable;
6.  development levels create understandable economic differences;
7.  no territory is effectively doomed from the starting position.

------------------------------------------------------------------------

## 19. Major Unfinished Features

### Development balance

Development now changes production and consumption needs, and eligible
territories can develop during Reflection. The production schedules and
upgrade costs still need balancing through classroom play.

### Review & Development phase

The internal phase is `reflection`; the player-facing name is **Review &
Development Phase**. The phase instruction is **Check the results, pay
tax, and choose whether to develop.**

### Territory balancing

Jamaica's current values are placeholders.

All territory values will eventually need balancing.

### Potential further economic mechanics

Possible future mechanics may include:

-   development changing production efficiency;
-   development affecting what manufactured goods can be produced;
-   different production capacities;
-   changes in trade relationships;
-   more explicit imperial economic dependency;
-   historical events;
-   population or demand changes.

These should only be added if they strengthen the educational objective
without making the simulation too complicated for Year 6.

------------------------------------------------------------------------

## 20. Known Design Decisions That Should Not Be Accidentally Reversed

### Money is not a finite shared pool

Britain pays territories for resources sold during Trade.

Do not revert to a fixed finite economy unless the game design is
deliberately reconsidered.

### Income is the preferred terminology

Use **income**, not "new money".

### Trade purchases occur only in the Trade Phase

This is intentional for classroom management.

### Trade timer does not end the phase

The teacher remains responsible for pressing **SUBMIT TRADES**.

### Development is not a resource

It should not have plus/minus controls.

It is a static territory status indicator.

### All territories initially start at Development Level 1

Level 1 is **Agricultural**.

### Unrest is a single state

There is no multi-level unrest system currently planned.

### Unrest halves production but not consumption

This creates the intended economic pressure.

### Meeting all needs removes unrest

A territory that successfully meets food, manufactured and luxury needs
in the relevant Consumption Phase loses its unrest status.

------------------------------------------------------------------------

## 21. Educational Narrative

The game is not intended to teach children that historical imperial
economics can be reduced to a literal numerical model.

Instead, it is a simplified simulation designed to make certain
relationships visible:

-   territories have different resources;
-   territories can produce things other territories need;
-   manufactured goods have economic value;
-   money enables purchasing;
-   trade can help solve shortages;
-   failing to meet needs can create instability;
-   instability can reduce production;
-   development changes economic capacity;
-   economic relationships can create dependencies between territories.

The simplification is deliberate.

The central classroom question should ultimately be something like:

> **How does the way a territory produces and trades resources affect
> its development and its relationship with the wider empire?**

------------------------------------------------------------------------

## 22. Technical Handover Notes for Codex

When continuing development:

1.  Treat `app.js` and the CSS as the source of truth for the current
    implementation, but check them against this document because the
    project has been developed iteratively.
2.  Do not assume that every design discussed in conversation has
    already been implemented.
3.  Development-level production and consumption effects are implemented;
    their balance still needs playtesting.
4.  The internal phase is `reflection`; preserve **Review & Development
    Phase** as the player-facing terminology.
5.  The game has eight territories; preserve their order so the original
    four remain in the first row and the additional four appear below.
    Use only resources already present in the resource catalogue.
6.  Avoid introducing new resources casually. The resource vocabulary is
    intentionally small.
7.  Preserve teacher control over phase transitions.
8.  Keep the three-minute Trade timer as a display/classroom-management
    feature only.
9.  Maintain the original four territory cards in the first row and the
    additional four directly below on the main desktop layout.
10. Keep the interface readable for ten-year-olds rather than optimising
    for information density.
11. When changing mechanics, check the educational consequence as well
    as the code consequence.
12. When adding complexity, ask whether the child can understand the
    causal relationship it creates.

------------------------------------------------------------------------

## 23. Current Development Status

The project has moved beyond the prototype stage and has a functioning
core simulation architecture.

### Implemented

-   territory cards;
-   eight territory layout in two rows on a wide desktop screen;
-   resource categories;
-   resource values;
-   production;
-   resource sales to Britain;
-   trade;
-   manufactured-good purchasing;
-   consumption;
-   needs checking;
-   missing-resource reporting;
-   unrest;
-   unrest production penalty;
-   development-level production schedules;
-   development-level consumption needs;
-   Review & Development Phase upgrades and costs;
-   collapsible resource details;
-   teacher manual resource/money controls;
-   production and consumption reports;
-   three-minute Trade Phase timer;
-   classroom-oriented visual design.

### Partially implemented / needs refinement

-   Jamaica balancing;
-   overall game balance;
-   final UI polish;
-   balanced development-level effects.

### Not yet implemented

-   final balancing of territories;
-   final historical/gameplay calibration.

------------------------------------------------------------------------

## 24. Guiding Principle

The game should remain a **teachable simulation rather than becoming a
simulation for its own sake**.

Every mechanic should answer three questions:

1.  **What does the child do?**
2.  **What happens as a result?**
3.  **What historical/economic idea does that make visible?**

If a mechanic makes the code more sophisticated but makes the children's
understanding less clear, it is probably the wrong mechanic.
