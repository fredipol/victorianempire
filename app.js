// ============================================================
// VICTORIAN EMPIRE GAME
// GAME DATA AND TEACHER CONTROL PANEL
// ============================================================


// ============================================================
// 1. GAME STATE
// ============================================================

let gameState = {

    round: 1,

    phase: "production",

    britainWealth: 25,

    numberOfTeams: null

};


// ============================================================
// 2. TRADE PHASE TIMER
// ============================================================

const tradeDurationSeconds = 180;

let tradeTimeRemaining = tradeDurationSeconds;

let tradeTimerInterval = null;


// ============================================================
// 3. LAST GAME ACTION
// ============================================================

let lastChanges = {};

let lastSales = {};

let lastMoneyFromSales = {};

let lastNeedsMet = {};

let lastTaxesPaid = {};


// ============================================================
// 4. EXPANDED RESOURCE SECTIONS
// ============================================================

let expandedResources = {};

let tutorialSession = null;

let tutorialStepIndex = 0;

let tutorialHighlightElement = null;

let tutorialHighlightElements = [];

let tutorialStepSnapshots = [];


// ============================================================
// 5. RESOURCE LIST
// ============================================================

const resources = {

    // --------------------------------------------------------
    // FOOD RESOURCES
    // --------------------------------------------------------

    wheat: {
        name: "Wheat",
        type: "food",
        value: 1
    },

    meat: {
        name: "Meat",
        type: "food",
        value: 1
    },

    rice: {
        name: "Rice",
        type: "food",
        value: 1
    },


    // --------------------------------------------------------
    // MANUFACTURED GOODS
    // --------------------------------------------------------

    textiles: {
        name: "Textiles",
        type: "manufactured",
        value: 3
    },

    machinery: {
        name: "Machinery",
        type: "manufactured",
        value: 5
    },


    // --------------------------------------------------------
    // LUXURY RESOURCES
    // --------------------------------------------------------

    cotton: {
        name: "Cotton",
        type: "luxury",
        value: 2
    },

    wool: {
        name: "Wool",
        type: "luxury",
        value: 2
    },

    tea: {
        name: "Tea",
        type: "luxury",
        value: 2
    },

    sugar: {
        name: "Sugar",
        type: "luxury",
        value: 2
    },

    spices: {
        name: "Spices",
        type: "luxury",
        value: 2
    },

    timber: {
        name: "Timber",
        type: "luxury",
        value: 2
    }

};


const resourceCategoryNames = {
    food: "Food",
    manufactured: "Manufactured",
    luxury: "Luxury"
};


// ============================================================
// 6. BASIC NEEDS
// ============================================================

const developmentNeeds = {

    1: { food: 2, manufactured: 2, luxury: 2 },
    2: { food: 3, manufactured: 3, luxury: 3 },
    3: { food: 4, manufactured: 4, luxury: 4 },
    4: { food: 5, manufactured: 5, luxury: 5 }

};


const developmentCosts = {

    1: {
        money: 20,
        resources: { textiles: 2 }
    },

    2: {
        money: 35,
        resources: { machinery: 2 }
    },

    3: {
        money: 55,
        resources: { machinery: 4 }
    }

};


const britishTaxRate = 0.2;


// ============================================================
// 7. MANUFACTURED GOOD PRICES
// ============================================================

const manufacturedPrices = {

    textiles: 3,

    machinery: 5

};


// ============================================================
// 8. DEVELOPMENT LEVELS
// ============================================================

const developmentLevels = {

    1: "Basic",

    2: "Developing",

    3: "Industrial",

    4: "Advanced"

};


const developmentDescriptions = {

    1: "Most people grow food or gather useful materials, such as cotton, timber, tea and sugar. The territory has no factories for manufacturing.",

    2: "People still grow food and gather materials. Some also work in workshops, turning materials into simple made goods, such as textiles.",

    3: "Many people work in factories, producing more complicated goods, such as machinery. The territory still grows some food or gathers some materials.",

    4: "The territory makes lots of goods in factories. It doesn't grow its own food, and gathers only a few natural resources, so it needs to trade to feed its people."

};


// ============================================================
// 9. TERRITORIES
// ============================================================

const territories = {

    india: {

        name: "India",

        money: 8,

        development: 1,

        unrest: false,

        resources: {

            cotton: 6,
            tea: 4,
            rice: 0

        },

        productionByLevel: {

            1: {
                cotton: 4,
                tea: 2,
                rice: 1
            },

            2: {
                cotton: 3,
                tea: 2,
                rice: 1,
                textiles: 2
            },

            3: {
                cotton: 2,
                tea: 1,
                rice: 1,
                textiles: 3,
                machinery: 1
            },

            4: {
                textiles: 4,
                machinery: 3,
                cotton: 1
            }

        }

    },


    canada: {

        name: "Canada",

        money: 14,

        development: 1,

        unrest: false,

        resources: {

            wheat: 6,
            timber: 4,
            wool: 2

        },

        productionByLevel: {

            1: {
                wheat: 4,
                timber: 2,
                wool: 1
            },

            2: {
                wheat: 3,
                timber: 2,
                wool: 1,
                textiles: 1
            },

            3: {
                wheat: 2,
                timber: 1,
                wool: 1,
                textiles: 2,
                machinery: 2
            },

            4: {
                textiles: 3,
                machinery: 3,
                timber: 1
            }

        }

    },


    ceylon: {

        name: "Ceylon",

        money: 12,

        development: 1,

        unrest: false,

        resources: {

            rice: 5,
            tea: 6

        },

        productionByLevel: {

            1: {
                rice: 4,
                tea: 3
            },

            2: {
                rice: 3,
                tea: 3,
                textiles: 1
            },

            3: {
                rice: 2,
                tea: 2,
                textiles: 2,
                machinery: 1
            },

            4: {
                textiles: 3,
                machinery: 3,
                tea: 1
            }

        }

    },


    jamaica: {

        name: "Jamaica",

        money: 11,

        development: 1,

        unrest: false,

        resources: {

            sugar: 12,
            tea: 0,
            wheat: 0

        },

        productionByLevel: {

            1: {
                sugar: 4,
                tea: 2,
                wheat: 1
            },

            2: {
                sugar: 3,
                tea: 2,
                wheat: 1,
                textiles: 2
            },

            3: {
                sugar: 2,
                tea: 1,
                wheat: 1,
                textiles: 3,
                machinery: 1
            },

            4: {
                textiles: 4,
                machinery: 2,
                sugar: 1
            }

        }

    },


    australia: {

        name: "Australia",

        money: 16,

        development: 1,

        unrest: false,

        resources: {

            wheat: 6,
            meat: 2,
            wool: 6

        },

        productionByLevel: {

            1: {
                wheat: 3,
                meat: 1,
                wool: 3
            },

            2: {
                wheat: 2,
                meat: 1,
                wool: 2,
                textiles: 2
            },

            3: {
                wheat: 1,
                meat: 1,
                wool: 1,
                textiles: 2,
                machinery: 2
            },

            4: {
                textiles: 3,
                machinery: 3,
                wool: 1
            }

        }

    },


    newZealand: {

        name: "New Zealand",

        money: 13,

        development: 1,

        unrest: false,

        resources: {

            meat: 6,
            wool: 6,
            timber: 2

        },

        productionByLevel: {

            1: {
                meat: 3,
                wool: 3,
                timber: 1
            },

            2: {
                meat: 2,
                wool: 2,
                timber: 1,
                textiles: 2
            },

            3: {
                meat: 1,
                wool: 2,
                timber: 1,
                textiles: 2,
                machinery: 2
            },

            4: {
                textiles: 3,
                machinery: 3,
                timber: 1
            }

        }

    },


    egypt: {

        name: "Egypt",

        money: 12,

        development: 1,

        unrest: false,

        resources: {

            rice: 4,
            cotton: 8

        },

        productionByLevel: {

            1: {
                rice: 2,
                cotton: 4
            },

            2: {
                rice: 2,
                cotton: 3,
                textiles: 2
            },

            3: {
                rice: 1,
                cotton: 2,
                textiles: 3,
                machinery: 1
            },

            4: {
                textiles: 4,
                machinery: 2,
                cotton: 1
            }

        }

    },


    goldCoast: {

        name: "Gold Coast",

        money: 10,

        development: 1,

        unrest: false,

        resources: {

            rice: 2,
            timber: 6,
            spices: 6

        },

        productionByLevel: {

            1: {
                rice: 1,
                timber: 3,
                spices: 3
            },

            2: {
                rice: 1,
                timber: 2,
                spices: 2,
                textiles: 1
            },

            3: {
                rice: 1,
                timber: 1,
                spices: 1,
                textiles: 2,
                machinery: 1
            },

            4: {
                spices: 1,
                textiles: 3,
                machinery: 3
            }

        }

    }

};


const initialTerritories =
    JSON.parse(
        JSON.stringify(territories)
    );


// ============================================================
// 10. TRADE TIMER FUNCTIONS
// ============================================================

function formatTradeTime(seconds) {

    const minutes =
        Math.floor(seconds / 60);

    const remainingSeconds =
        seconds % 60;

    return (
        `${minutes}:` +
        `${String(remainingSeconds).padStart(2, "0")}`
    );

}


// ------------------------------------------------------------
// UPDATE TIMER DISPLAY
// ------------------------------------------------------------

function updateTradeTimerDisplay() {

    const timerElement =
        document.getElementById(
            "trade-timer"
        );


    if (!timerElement) {

        return;

    }


    timerElement.textContent =
        formatTradeTime(
            tradeTimeRemaining
        );


    timerElement.classList.toggle(
        "trade-timer-warning",
        tradeTimeRemaining <= 60
    );


    timerElement.classList.toggle(
        "trade-timer-expired",
        tradeTimeRemaining === 0
    );

}


// ------------------------------------------------------------
// STOP TIMER
// ------------------------------------------------------------

function stopTradeTimer() {

    if (
        tradeTimerInterval !== null
    ) {

        clearInterval(
            tradeTimerInterval
        );

        tradeTimerInterval = null;

    }

}


// ------------------------------------------------------------
// START TIMER
// ------------------------------------------------------------

function startTradeTimer(resetRemaining = true) {

    stopTradeTimer();


    if (resetRemaining) {

        tradeTimeRemaining =
            tradeDurationSeconds;

    }


    updateTradeTimerDisplay();


    tradeTimerInterval =
        setInterval(() => {

            if (
                gameState.phase !==
                "trade"
            ) {

                stopTradeTimer();

                return;

            }


            if (
                tradeTimeRemaining > 0
            ) {

                tradeTimeRemaining--;

                updateTradeTimerDisplay();

            }

            else {

                stopTradeTimer();

            }

        }, 1000);

}


// ============================================================
// 11. RESOURCE FUNCTIONS
// ============================================================

function getResourceType(
    resourceID
) {

    return resources[
        resourceID
    ].type;

}


// ============================================================
// 12. CALCULATE RESOURCE TOTALS
// ============================================================

function getResourceTotals(
    territory
) {

    const totals = {

        food: 0,

        manufactured: 0,

        luxury: 0

    };


    for (
        const resourceID
        in territory.resources
    ) {

        const amount =
            territory.resources[
                resourceID
            ];


        const type =
            getResourceType(
                resourceID
            );


        totals[type] +=
            amount;

    }


    return totals;

}


// ============================================================
// 13. CHANGE MONEY
// ============================================================

const coinClinkSound = new Audio("sounds/coin-clink.mp3");
coinClinkSound.preload = "auto";

const gameSounds = {
    action: new Audio("sounds/action-click.mp3"),
    develop: new Audio("sounds/develop.mp3"),
    unrest: new Audio("sounds/unrest.mp3"),
    resource: new Audio("sounds/resource-pop.mp3")
};

function playGameSound(name, volume = 1) {

    const sound = gameSounds[name];

    if (!sound) {

        return;

    }

    sound.volume = volume;
    sound.currentTime = 0;
    sound.play().catch(() => {});

}

function changeMoney(
    territoryID,
    amount
) {

    if (gameState.phase !== "trade") {

        return;

    }

    territories[
        territoryID
    ].money += amount;

    coinClinkSound.currentTime = 0;
    coinClinkSound.play().catch(() => {});


    displayGame();

}


// ============================================================
// 14. CHANGE RESOURCE MANUALLY
// ============================================================

function changeResource(
    territoryID,
    resourceID,
    amount
) {

    if (gameState.phase !== "trade") {

        return;

    }

    const territory =
        territories[
            territoryID
        ];


    const currentAmount =
        territory.resources[
            resourceID
        ] || 0;


    const newAmount =
        currentAmount + amount;


    if (
        newAmount < 0
    ) {

        return;

    }


    territory.resources[
        resourceID
    ] = newAmount;

    playGameSound("resource", 0.55);


    displayGame();

}


// ============================================================
// 15. CHANGE RESOURCE WITHOUT DISPLAYING
// ============================================================

function changeResourceWithoutDisplay(
    territoryID,
    resourceID,
    amount
) {

    const territory =
        territories[
            territoryID
        ];


    const currentAmount =
        territory.resources[
            resourceID
        ] || 0;


    const newAmount =
        currentAmount + amount;


    if (
        newAmount < 0
    ) {

        return;

    }


    territory.resources[
        resourceID
    ] = newAmount;


    if (
        !lastChanges[
            territoryID
        ]
    ) {

        lastChanges[
            territoryID
        ] = {};

    }


    if (
        !lastChanges[
            territoryID
        ][resourceID]
    ) {

        lastChanges[
            territoryID
        ][resourceID] = 0;

    }


    lastChanges[
        territoryID
    ][resourceID] += amount;

}


// ============================================================
// 16. CLEAR LAST CHANGES
// ============================================================

function clearLastChanges() {

    lastChanges = {};

    lastSales = {};

    lastMoneyFromSales = {};

    lastNeedsMet = {};

    lastTaxesPaid = {};

}


// ============================================================
// 17. BUY MANUFACTURED GOOD
// ============================================================

function buyManufacturedGood(
    territoryID,
    resourceID,
    refreshDisplay = true
) {

    if (
        gameState.phase !==
        "trade"
    ) {

        return;

    }


    const territory =
        territories[
            territoryID
        ];


    const price =
        manufacturedPrices[
            resourceID
        ];


    if (
        price === undefined
    ) {

        return;

    }


    if (
        territory.money < price
    ) {

        return;

    }


    territory.money -=
        price;

    gameState.britainWealth +=
        price;


    territory.resources[
        resourceID
    ] =
        (
            territory.resources[
                resourceID
            ] || 0
        ) + 1;


    if (refreshDisplay) {

        coinClinkSound.currentTime = 0;
        coinClinkSound.play().catch(() => {});

        displayGame();

    }

}


// ============================================================
// 18. SELL RESOURCE TO BRITAIN
// ============================================================

function sellResourceToBritain(
    territoryID,
    resourceID,
    refreshDisplay = true
) {

    if (
        gameState.phase !== "trade"
    ) {

        return;

    }


    const territory =
        territories[
            territoryID
        ];


    const resource =
        resources[
            resourceID
        ];


    if (
        !territory ||
        !resource ||
        (territory.resources[resourceID] || 0) < 1 ||
        gameState.britainWealth < resource.value
    ) {

        return;

    }


    changeResourceWithoutDisplay(
        territoryID,
        resourceID,
        -1
    );


    territory.money +=
        resource.value;

    gameState.britainWealth -=
        resource.value;


    if (!lastSales[territoryID]) {

        lastSales[territoryID] = {};

    }


    lastSales[territoryID][resourceID] =
        (lastSales[territoryID][resourceID] || 0) + 1;


    lastMoneyFromSales[territoryID] =
        (lastMoneyFromSales[territoryID] || 0) + resource.value;


    if (refreshDisplay) {

        displayGame();

    }

}


// ============================================================
// 19. PRODUCE RESOURCES
// ============================================================

function produceResources() {

    if (
        gameState.phase !==
        "production"
    ) {

        return;

    }


    clearLastChanges();


    for (const territoryID of getActiveTerritoryIDs()) {

        const territory =
            territories[
                territoryID
            ];

        const productionForLevel =
            territory.productionByLevel[
                territory.development
            ];


        for (
            const resourceID
            in productionForLevel
        ) {

            const normalAmount =
                productionForLevel[
                    resourceID
                ];


            // ------------------------------------------------
            // UNREST HALVES PRODUCTION
            // ------------------------------------------------

            let amountProduced =
                normalAmount;


            if (
                territory.unrest
            ) {

                amountProduced =
                    Math.floor(
                        normalAmount / 2
                    );

            }


            // ------------------------------------------------
            // ADD PRODUCED RESOURCES
            // ------------------------------------------------

            changeResourceWithoutDisplay(
                territoryID,
                resourceID,
                amountProduced
            );


        }

    }


    gameState.phase =
        "productionReport";


    displayGame();

    advanceTutorialAfterAction("produce");

}


// ============================================================
// 20. CONTINUE AFTER PRODUCTION
// ============================================================

function continueAfterProduction() {

    if (
        gameState.phase !==
        "productionReport"
    ) {

        return;

    }


    clearLastChanges();


    gameState.phase =
        "trade";


    if (tutorialSession) {

        tradeTimeRemaining =
            tradeDurationSeconds;

    } else {

        startTradeTimer();

    }


    displayGame();

    advanceTutorialAfterAction("continue");

}


// ============================================================
// 21. SUBMIT TRADES
// ============================================================

function submitTrades() {

    if (
        gameState.phase !==
        "trade"
    ) {

        return;

    }


    stopTradeTimer();


    lastChanges = {};

    lastNeedsMet = {};


    gameState.phase =
        "consumption";


    displayGame();

    advanceTutorialAfterAction("submit");

}


// ============================================================
// 22. FIND MOST ABUNDANT RESOURCE
// ============================================================

function findMostAbundantResource(
    territory,
    resourceType
) {

    let mostAbundantResource =
        null;


    let highestAmount = 0;


    for (
        const resourceID
        in resources
    ) {

        const resource =
            resources[
                resourceID
            ];


        if (
            resource.type !==
            resourceType
        ) {

            continue;

        }


        const amount =
            territory.resources[
                resourceID
            ] || 0;


        if (
            amount >
            highestAmount
        ) {

            highestAmount =
                amount;


            mostAbundantResource =
                resourceID;

        }

    }


    return mostAbundantResource;

}


// ============================================================
// 22. CONSUME ONE RESOURCE TYPE
// ============================================================

function consumeResourceType(
    territoryID,
    resourceType,
    amountRequired
) {

    const territory =
        territories[
            territoryID
        ];


    let amountStillNeeded =
        amountRequired;


    while (
        amountStillNeeded > 0
    ) {

        const resourceID =
            findMostAbundantResource(
                territory,
                resourceType
            );


        if (
            resourceID === null
        ) {

            break;

        }


        const available =
            territory.resources[
                resourceID
            ] || 0;


        const amountToConsume =
            Math.min(
                available,
                amountStillNeeded
            );


        changeResourceWithoutDisplay(
            territoryID,
            resourceID,
            -amountToConsume
        );


        amountStillNeeded -=
            amountToConsume;

    }


    return (
        amountStillNeeded === 0
    );

}


// ============================================================
// 23. CONSUME RESOURCES
// ============================================================

function consumeResources() {

    if (
        gameState.phase !==
        "consumption"
    ) {

        return;

    }


    lastChanges = {};

    lastNeedsMet = {};


    for (const territoryID of getActiveTerritoryIDs()) {

        const territory =
            territories[
                territoryID
            ];

        const wasUnrestful = territory.unrest;


        const needs =
            developmentNeeds[
                territory.development
            ];


        const foodMet =
            consumeResourceType(
                territoryID,
                "food",
                needs.food
            );


        const manufacturedMet =
            consumeResourceType(
                territoryID,
                "manufactured",
                needs.manufactured
            );


        const luxuryMet =
            consumeResourceType(
                territoryID,
                "luxury",
                needs.luxury
            );


        lastNeedsMet[
            territoryID
        ] = {

            food: foodMet,

            manufactured:
                manufacturedMet,

            luxury:
                luxuryMet

        };


        // ----------------------------------------------------
        // UNREST
        // ----------------------------------------------------

        const allNeedsMet =
            foodMet &&
            manufacturedMet &&
            luxuryMet;


        if (
            allNeedsMet
        ) {

            territory.unrest =
                false;

        }

        else {

            territory.unrest =
                true;

            if (!wasUnrestful) {

                playGameSound("unrest", 0.55);

            }

        }

    }


    gameState.phase =
        "consumptionReport";


    displayGame();

    advanceTutorialAfterAction("consume");

}


// ============================================================
// 24. CONTINUE AFTER CONSUMPTION
// ============================================================

function collectBritishTaxes() {

    lastTaxesPaid = {};


    for (const territoryID of getActiveTerritoryIDs()) {

        const territory =
            territories[territoryID];

        const taxPaid = Math.floor(
            Math.max(territory.money, 0) * britishTaxRate
        );

        territory.money -= taxPaid;
        gameState.britainWealth += taxPaid;
        lastTaxesPaid[territoryID] = taxPaid;

    }

}

function continueAfterConsumption() {

    if (
        gameState.phase !==
        "consumptionReport"
    ) {

        return;

    }


    clearLastChanges();


    gameState.phase =
        "reflection";


    collectBritishTaxes();


    displayGame();

    advanceTutorialAfterAction(
        "continueConsumption"
    );

}


// ============================================================
// 25. DEVELOP TERRITORY
// ============================================================

function canAffordDevelopment(
    territory
) {

    if (
        gameState.phase !== "reflection" ||
        territory.unrest ||
        territory.development >= 4
    ) {

        return false;

    }


    const cost =
        developmentCosts[
            territory.development
        ];


    if (
        !cost ||
        territory.money < cost.money
    ) {

        return false;

    }


    return Object.keys(cost.resources).every(
        resourceID =>
            (territory.resources[resourceID] || 0) >=
            cost.resources[resourceID]
    );

}


function developTerritory(
    territoryID
) {

    if (
        gameState.phase !== "reflection"
    ) {

        return;

    }


    const territory =
        territories[
            territoryID
        ];


    if (
        !territory ||
        !canAffordDevelopment(territory)
    ) {

        return;

    }


    const cost =
        developmentCosts[
            territory.development
        ];


    territory.money -=
        cost.money;


    for (const resourceID in cost.resources) {

        territory.resources[resourceID] -=
            cost.resources[resourceID];

    }


    territory.development++;

    playGameSound("develop");


    displayGame();


    const developedCard =
        document.querySelector(
            `[data-territory-id="${territoryID}"]`
        );


    if (developedCard) {

        developedCard.classList.add(
            "development-highlight"
        );


        developedCard.addEventListener(
            "animationend",
            () => {
                developedCard.classList.remove(
                    "development-highlight"
                );
            },
            { once: true }
        );

    }


    advanceTutorialAfterAction("develop");

}


// ============================================================
// 26. NEXT ROUND
// ============================================================

function nextRound() {

    if (
        gameState.phase !==
        "reflection"
    ) {

        return;

    }


    clearLastChanges();


    gameState.round++;


    gameState.phase =
        "production";


    displayGame();

    advanceTutorialAfterAction("nextRound");

}


// ============================================================
// 27. GET CURRENT YEAR
// ============================================================

function getCurrentYear() {

    return (
        1836 +
        gameState.round
    );

}


// ============================================================
// 28. GET DEVELOPMENT NAME
// ============================================================

function getDevelopmentName(
    level
) {

    return (
        developmentLevels[
            level
        ] ||
        "Unknown"
    );

}


function formatDevelopmentCost(cost) {

    const resourceCosts = Object.entries(cost.resources)
        .filter(([, amount]) => amount > 0)
        .map(
            ([resourceID, amount]) =>
                `${amount} ${resources[resourceID].name}`
        );


    return [
        `£${cost.money}`,
        ...resourceCosts
    ].join(" + ");

}


function getDevelopmentTooltip(
    level
) {

    const needs =
        developmentNeeds[
            level
        ];

    const nextLevelCost =
        developmentCosts[level];

    const upgradeCostDescription =
        nextLevelCost
            ? `Next upgrade costs ${formatDevelopmentCost(nextLevelCost)}.`
            : "This is the highest development level.";


    return (
        `${developmentDescriptions[level]} ` +
        `Needs each round: ${needs.food} food, ` +
        `${needs.manufactured} manufactured goods, ` +
        `${needs.luxury} luxury goods. ` +
        upgradeCostDescription
    );

}


// ============================================================
// 29. GET PHASE TITLE
// ============================================================

function getPhaseTitle() {

    switch (
        gameState.phase
    ) {

        case "production":

            return "Production Phase";


        case "territoryBriefing":

            return "Territory Briefing";


        case "productionReport":

            return "Production Complete";


        case "trade":

            return "Trade Phase";


        case "consumption":

            return "Consumption Phase";


        case "consumptionReport":

            return "Consumption Complete";


        case "reflection":

            return "Review & Development Phase";


        default:

            return "";

    }

}


// ============================================================
// 30. GET PHASE INSTRUCTION
// ============================================================

function getPhaseInstruction() {

    switch (
        gameState.phase
    ) {

        case "production":

            return "Press Produce to add this round's resources.";


        case "territoryBriefing":

            return "Check each territory's starting money, needs and what it produces each round. Press Begin Round 1 when your teams are ready.";


        case "productionReport":

            return "See what each territory produced.";


        case "trade":

            return "Sell resources to Britain or trade with other territories.";


        case "consumption":

            return "Press Consume to meet your territory's needs.";


        case "consumptionReport":

            return "See what each territory used and whether needs were met.";


        case "reflection":

            return "Check the results, pay tax, and choose whether to develop.";


        default:

            return "";

    }

}


// ============================================================
// 31. BUILD PRODUCTION REPORT
// ============================================================

function buildProductionReport(
    territoryID,
    territory
) {

    let reportHTML = "";


    const changes =
        lastChanges[
            territoryID
        ] || {};


    for (
        const resourceID
        in changes
    ) {

        const amount =
            changes[
                resourceID
            ];


        if (
            amount <= 0
        ) {

            continue;

        }


        const resource =
            resources[
                resourceID
            ];


        reportHTML += `

            <div class="report-line positive">

                <strong>+</strong>

                ${amount}

                ${resource.name}

            </div>

        `;

    }


    return `

        <div class="territory-report">

            <div class="report-title">

                PRODUCTION

            </div>


            ${reportHTML}

        </div>

    `;

}


// ============================================================
// 32. BUILD CONSUMPTION REPORT
// ============================================================

function buildConsumptionReport(
    territoryID,
    territory
) {

    let reportHTML = "";


    const changes =
        lastChanges[
            territoryID
        ] || {};


    for (
        const resourceID
        in changes
    ) {

        const amount =
            changes[
                resourceID
            ];


        if (
            amount >= 0
        ) {

            continue;

        }


        const resource =
            resources[
                resourceID
            ];


        reportHTML += `

            <div class="report-line negative">

                <strong>−</strong>

                ${Math.abs(amount)}

                ${resource.name}

            </div>

        `;

    }


    if (
        reportHTML === ""
    ) {

        reportHTML = `

            <div class="report-line">

                No resources consumed

            </div>

        `;

    }


    const needs =
        lastNeedsMet[
            territoryID
        ];


    const allNeedsMet =
        needs &&
        needs.food &&
        needs.manufactured &&
        needs.luxury;


    let needsStatusHTML =
        "";


    if (
        allNeedsMet
    ) {

        needsStatusHTML = `

            <div class="needs-status needs-met">

                Basic Needs Sufficiently Met

            </div>

        `;

    }

    else {

        let missingHTML =
            "";


        if (
            !needs.food
        ) {

            missingHTML += `

                <div>
                    Not enough food
                </div>

            `;

        }


        if (
            !needs.manufactured
        ) {

            missingHTML += `

                <div>
                    Not enough manufactured goods
                </div>

            `;

        }


        if (
            !needs.luxury
        ) {

            missingHTML += `

                <div>
                    Not enough luxury resources
                </div>

            `;

        }


        needsStatusHTML = `

            <div class="needs-status needs-not-met">

                <div>

                    Basic Needs Not Sufficiently Met

                </div>


                <div class="needs-missing">

                    ${missingHTML}

                </div>

            </div>

        `;

    }


    return `

        <div class="territory-report">

            <div class="report-title">

                CONSUMPTION

            </div>


            ${reportHTML}


            ${needsStatusHTML}

        </div>

    `;

}


// ============================================================
// 33. BUILD COMPACT TERRITORY CARD
// ============================================================

const territoryEmblems = {
    india: `<svg viewBox="0 0 24 24"><path d="M12 20c-4.7-2.1-7.1-5.2-7.1-8.2 2.8.1 5.1 1.7 7.1 4.4 2-2.7 4.3-4.3 7.1-4.4 0 3-2.4 6.1-7.1 8.2Z"/><path d="M12 16.2c-2.8-2.1-4.2-4.8-3.7-7.4 1.9.7 3.1 2.2 3.7 4.4.6-2.2 1.8-3.7 3.7-4.4.5 2.6-.9 5.3-3.7 7.4Z"/><path d="M12 5.2v2.1"/></svg>`,
    canada: `<svg viewBox="0 0 24 24"><path d="m12 2 2.1 4.8 3.1-1-.7 3.7 4.4 1.3-4.1 2.1.7 5.1-5.5-2.4-5.5 2.4.7-5.1-4.1-2.1 4.4-1.3-.7-3.7 3.1 1L12 2Z"/><path d="M12 15.6v5"/></svg>`,
    ceylon: `<svg viewBox="0 0 24 24"><path d="M20.5 3.5C12.7 3.4 6.2 6.1 5 11c-.9 3.7 2.2 6.2 5.5 5.1 5.1-1.7 8.4-7 10-12.6Z"/><path d="M4 21c3.6-5.6 7.7-9.1 13.2-12.2"/><path d="m9.2 13.4-.4-4.2m4 1.3.1-4"/></svg>`,
    jamaica: `<svg viewBox="0 0 24 24"><path d="M7 21 9 7m5 14 1-13m-8.1 3.4L4 7m5.5 1L12 4m3 4 3-4m-3.1 7.2 4-2.2"/><path d="M6.2 15.4 9 13m4.4 2.3 2.3-2"/></svg>`,
    australia: `<svg viewBox="0 0 24 24"><path d="m7 4 .6 1.5L9 6l-1.4.5L7 8l-.6-1.5L5 6l1.4-.5L7 4Zm9 5 .6 1.5L18 11l-1.4.5L16 13l-.6-1.5L14 11l1.4-.5L16 9Zm-9 5 .6 1.5L9 16l-1.4.5L7 18l-.6-1.5L5 16l1.4-.5L7 14Zm8 3 .6 1.5L17 18l-1.4.5L15 20l-.6-1.5L13 18l1.4-.5L15 17Z"/></svg>`,
    newZealand: `<svg viewBox="0 0 24 24"><path d="M19.5 3.5C13.2 7.1 8.4 12.8 5 20.5"/><path d="m15.5 6-4.8-.3 2.2 3.9m.1-1.5-5-.1 2.3 4m.2-1.5-4.7.3 2.4 3.4m.2-1.4-4.2 1 2.5 2.8m-.1-1.2-3.6 1.6 2.6 2.2"/></svg>`,
    egypt: `<svg viewBox="0 0 24 24"><circle cx="18" cy="6" r="2.5"/><path d="m3 19 7-11 7 11H3Zm7-11 7 11h4L10 8Z"/><path d="M7 15h6"/></svg>`,
    goldCoast: `<svg viewBox="0 0 24 24"><path d="M3 19h18M5 19V9l7-5 7 5v10M8 19v-5h3v5m3-8h2m-7-4h2m5 1h1"/><path d="M3 9h18"/></svg>`
};

const territoryDescriptions = {
    india: {
        continent: "Asia",
        status: "British Raj",
        environment: "Monsoon plains and forests grow cotton, tea, rice and spices."
    },
    canada: {
        continent: "North America",
        status: "Dominion",
        environment: "Vast forests and fertile plains are rich in timber, wheat and wildlife."
    },
    ceylon: {
        continent: "Asia",
        status: "Crown colony",
        environment: "Tropical hills and plains grow tea, rice and spices."
    },
    jamaica: {
        continent: "North America · Caribbean",
        status: "Crown colony",
        environment: "Warm, fertile land is well suited to sugar cane, coffee and tropical fruits."
    },
    australia: {
        continent: "Oceania",
        status: "Dominion",
        environment: "Wide grasslands and woodlands support sheep, cattle and grain."
    },
    newZealand: {
        continent: "Oceania",
        status: "Dominion",
        environment: "Green grasslands, forests and coasts are rich in wool, timber and fish."
    },
    egypt: {
        continent: "Africa",
        status: "British protectorate",
        environment: "The Nile's fertile banks grow cotton, rice and other crops."
    },
    goldCoast: {
        continent: "Africa",
        status: "Crown colony and protectorate",
        environment: "Tropical forests and rich soils provide timber, rice and spices."
    }
};

function buildTerritoryHeading(id, territory) {
    return `
        <h2>
            <span class="territory-emblem" aria-hidden="true">${territoryEmblems[id]}</span>
            <span>${territory.name}</span>
        </h2>
    `;
}

function buildCompactTerritoryCard(
    id,
    territory
) {

    const totals =
        getResourceTotals(
            territory
        );


    const needs =
        developmentNeeds[
            territory.development
        ];


    const developmentName =
        getDevelopmentName(
            territory.development
        );


    const canDevelop =
        canAffordDevelopment(
            territory
        );


    const nextDevelopmentCost =
        developmentCosts[
            territory.development
        ];


    const canBuyTextiles =
        gameState.phase === "trade" &&
        territory.money >=
            manufacturedPrices.textiles;


    const canBuyMachinery =
        gameState.phase === "trade" &&
        territory.money >=
            manufacturedPrices.machinery;


    return `

        <div
            class="territory territory-${id} ${
                territory.unrest
                    ? "has-unrest"
                    : ""
            } ${gameState.phase === "territoryBriefing" ? "territory-briefing" : ""}"
            data-territory-id="${id}"
        >


            ${buildTerritoryHeading(id, territory)}


            <div
                class="development-indicator"
                title="${getDevelopmentTooltip(territory.development)}"
                tabindex="0"
            >

                Development: ${developmentName}

            </div>


            ${gameState.phase === "territoryBriefing" ? `

                <div class="territory-resource-context">
                    <div class="territory-context-facts">
                        <p><strong>Continent</strong><span>${territoryDescriptions[id].continent}</span></p>
                        <p><strong>Status</strong><span>${territoryDescriptions[id].status}</span></p>
                    </div>
                    <p class="territory-environment">${territoryDescriptions[id].environment}</p>
                </div>

            ` : ""}


            ${gameState.phase === "reflection" ? `

                <button
                    class="develop-button"
                    ${canDevelop ? `onclick="developTerritory('${id}')"` : "disabled"}
                    ${nextDevelopmentCost ? `title="Costs ${formatDevelopmentCost(nextDevelopmentCost)}"` : 'title="Level 4 is the highest development level"'}
                >

                    ${nextDevelopmentCost ? `
                        <span>DEVELOP TO LEVEL ${territory.development + 1}</span>
                        <span class="develop-button-cost">
                            ${formatDevelopmentCost(nextDevelopmentCost)}
                        </span>
                    ` : `
                        <span>MAX LEVEL</span>
                    `}

                </button>

            `
                : ""}


            ${
                territory.unrest
                    ? `

                <div
                    class="unrest-indicator"
                    title="Unrest means the territory did not meet all three needs. Production is halved, and the territory cannot develop. Unrest ends after it meets all three needs in a Consumption Phase."
                    tabindex="0"
                >

                    UNREST

                </div>

            `
                    : ""
            }


            <!-- MONEY -->

            <div class="resource-row money-row">

                <span>
                    ${gameState.phase === "territoryBriefing" ? "Starting money" : "Money"}
                </span>


                <span>

                    ${gameState.phase === "trade" ? `

                    <button onclick="changeMoney('${id}', -1)">
                        −
                    </button>

                    ` : ""}


                    <strong>
                        £${territory.money}
                    </strong>


                    ${gameState.phase === "trade" ? `

                    <button onclick="changeMoney('${id}', 1)">
                        +
                    </button>

                    ` : ""}

                </span>

            </div>


            ${gameState.phase === "reflection" ? `

            <div class="tax-payment-summary">
                Tax paid to Britain: £${lastTaxesPaid[id] || 0}
            </div>

            ` : ""}


            ${gameState.phase === "territoryBriefing" ? "" : `
            <div class="resource-totals-section">

            <!-- RESOURCE TOTALS -->

            <h3>
                <span>Your resources</span>
                <span class="need-heading-hint">Have / Need</span>
            </h3>


            ${[
                ["food", "Food"],
                ["manufactured", "Manufactured goods"],
                ["luxury", "Luxury"]
            ].map(([category, label]) => {
                const amount = totals[category];
                const required = needs[category];
                return `
                    <div class="need-row need-${category}"
                        aria-label="${label}: ${amount} of ${required} required">
                        <span class="need-label">${label}</span>
                        <strong class="need-amount">${amount}<span aria-hidden="true"> / </span>${required}</strong>
                    </div>
                `;
            }).join("")}

            </div>
            `}


            ${gameState.phase === "territoryBriefing" ? buildProductionPreview(territory) : ""}


            ${gameState.phase === "trade" ? `

            <!-- MANUFACTURED GOODS -->

            <div class="purchase-section">

                <h3>

                    Buy Manufactured Goods

                </h3>


                <button
                    onclick="
                        buyManufacturedGood(
                            '${id}',
                            'textiles'
                        )
                    "
                    ${
                        canBuyTextiles
                            ? ""
                            : "disabled"
                    }
                >

                    BUY TEXTILES
                    (£${manufacturedPrices.textiles})

                </button>


                <button
                    onclick="
                        buyManufacturedGood(
                            '${id}',
                            'machinery'
                        )
                    "
                    ${
                        canBuyMachinery
                            ? ""
                            : "disabled"
                    }
                >

                    BUY MACHINERY
                    (£${manufacturedPrices.machinery})

                </button>

            </div>


            ` : ""}


            ${buildTradeSalesSummary(id)}


            <!-- RESOURCE EXPANDER -->

            ${gameState.phase === "trade" ? `

            <div class="resource-trading-section">

            <div class="resource-trade-heading">
                <span>Trade Resources</span>
                ${buildResourceCategoryKey()}

            </div>

            ` : gameState.phase === "territoryBriefing" ? "" : `

            <button
                id="resources-toggle-${id}"
                class="resource-toggle"
                onclick="toggleResources('${id}')"
                aria-controls="resources-${id}"
                aria-expanded="${Boolean(expandedResources[id])}"
            >
                <span class="resource-toggle-label">Resources</span>
                <span class="resource-toggle-arrow" aria-hidden="true">${expandedResources[id] ? "▲" : "▼"}</span>
                ${gameState.phase === "territoryBriefing" ? "" : buildResourceCategoryKey()}

            </button>

            `}


            <!-- RESOURCE LIST -->

            <div
                id="resources-${id}"
                class="resource-details ${gameState.phase === "trade" || gameState.phase === "territoryBriefing" || expandedResources[id] ? "expanded" : ""}"
            >

                ${gameState.phase === "territoryBriefing"
                    ? `<h3 class="starting-resources-heading">Starting resources</h3>${buildStartingResourcesPreview(territory)}`
                    : buildResourceList(id, territory)}

            </div>

            ${gameState.phase === "trade" ? `</div>` : ""}


        </div>

    `;

}


function buildProductionPreview(territory) {

    const schedule =
        territory.productionByLevel[territory.development] || {};

    const producedItems = buildResourcePreviewItems(schedule);

    return `
        <section class="territory-production-preview" aria-label="What this territory produces each round">
            <h3>Produces each round</h3>
            <div class="production-preview-list">
                ${producedItems}
            </div>
        </section>
    `;

}


function buildStartingResourcesPreview(territory) {

    return `
        <div class="production-preview-list starting-resources-preview">
            ${buildResourcePreviewItems(territory.resources)}
        </div>
    `;

}


function buildResourcePreviewItems(resourceAmounts) {

    return Object.entries(resourceAmounts)
        .filter(([resourceID, amount]) => resources[resourceID] && amount > 0)
        .map(([resourceID, amount]) => {
            const resource = resources[resourceID];
            return `
                <span class="production-preview-item produces-${resource.type}">
                    <span>${resource.name}</span>
                    <strong>${amount}</strong>
                </span>
            `;
        })
        .join("");

}


function buildTradeSalesSummary(
    territoryID
) {

    if (
        ![
            "trade",
            "consumptionReport"
        ].includes(gameState.phase) ||
        !lastSales[territoryID]
    ) {

        return "";

    }


    const soldItems =
        Object.entries(
            lastSales[territoryID]
        ).map(
            ([resourceID, amount]) =>
                `${amount} ${resources[resourceID].name}`
        );


    return `

        <div class="trade-sales-summary">

            <strong>Sold to Britain:</strong>
            ${soldItems.join(", ")}
            · Income from sales: £${lastMoneyFromSales[territoryID] || 0}

        </div>

    `;

}


// ============================================================
// 34. BUILD RESOURCE LIST
// ============================================================

function buildResourceCategoryKey() {

    return `
        <span class="resource-category-key" aria-label="Resource categories">
            <span class="resource-key-food">Food</span>
            <span class="resource-key-manufactured">Manufactured</span>
            <span class="resource-key-luxury">Luxury</span>
        </span>
    `;

}

function buildResourceList(
    id,
    territory,
    hideEmptyResources = false
) {

    let resourceHTML =
        "";


    for (
        const resourceID
        in resources
    ) {

        const resource =
            resources[
                resourceID
            ];


        const amount =
            territory.resources[
                resourceID
            ] || 0;

        if (hideEmptyResources && amount <= 0) {

            continue;

        }


        resourceHTML += `

            <div
                class="resource-row resource-row-${resource.type} resource-${resourceID}"
                title="${resourceCategoryNames[resource.type]} resource"
            >

                <span class="resource-name">
                    ${resource.name}
                </span>


                <span>

                    ${gameState.phase === "trade" ? `

                    <button
                        onclick="changeResource('${id}', '${resourceID}', -1)"
                    >
                        −
                    </button>

                    ` : ""}


                    <strong>

                        ${amount}

                    </strong>


                    ${gameState.phase === "trade" ? `

                    <button
                        onclick="changeResource('${id}', '${resourceID}', 1)"
                    >
                        +
                    </button>

                    ` : ""}


                    ${gameState.phase === "trade" ? `

                    <button
                        class="sell-resource-button"
                        onclick="sellResourceToBritain('${id}', '${resourceID}')"
                        ${amount > 0 && gameState.britainWealth >= resource.value ? "" : "disabled"}
                        ${gameState.britainWealth < resource.value ? 'title="Britain does not have enough money to buy this resource"' : ""}
                    >
                        SELL £${resource.value}
                    </button>

                    ` : ""}

                </span>

            </div>

        `;

    }


    return resourceHTML;

}


// ============================================================
// 35. TOGGLE RESOURCE SECTION
// ============================================================

function toggleResources(
    territoryID
) {

    const element =
        document.getElementById(
            `resources-${territoryID}`
        );


    if (!element) {

        return;

    }


    element.classList.toggle(
        "expanded"
    );


    expandedResources[
        territoryID
    ] =
        element.classList.contains(
            "expanded"
        );

    const toggleButton = document.getElementById(
        `resources-toggle-${territoryID}`
    );

    if (toggleButton) {

        toggleButton.setAttribute(
            "aria-expanded",
            String(expandedResources[territoryID])
        );

        const arrow = toggleButton.querySelector(
            ".resource-toggle-arrow"
        );

        if (arrow) {

            arrow.textContent = expandedResources[territoryID] ? "▲" : "▼";

        }

    }

}


// ============================================================
// 36. DISPLAY GAME
// ============================================================

const game =
    document.getElementById(
        "game"
    );


function getActiveTerritoryIDs() {

    return Object.keys(territories).slice(
        0,
        gameState.numberOfTeams
    );

}


function startGame() {

    const selectedTeamCount =
        Number(
            document.getElementById(
                "number-of-teams"
            ).value
        );


    if (
        !Number.isInteger(selectedTeamCount) ||
        selectedTeamCount < 6 ||
        selectedTeamCount > Object.keys(territories).length
    ) {

        return;

    }


    gameState.numberOfTeams =
        selectedTeamCount;

    gameState.phase = "territoryBriefing";

    expandedResources = {};

    for (const territoryID of getActiveTerritoryIDs()) {

        expandedResources[territoryID] = true;

    }


    displayGame();

}


function beginFirstRound() {

    if (gameState.phase !== "territoryBriefing") {

        return;

    }

    gameState.phase = "production";
    expandedResources = {};
    displayGame();

}


function showWelcomeCard(isReminder = false) {

    if (gameState.numberOfTeams === null) {

        return;

    }


    game.inert = true;

    document.body.insertAdjacentHTML(
        "beforeend",
        `
            <div
                id="welcome-overlay"
                class="tutorial-overlay"
                aria-hidden="true"
            ></div>
            <section
                id="welcome-card"
                class="tutorial-box welcome-card"
                role="dialog"
                aria-modal="true"
                aria-labelledby="welcome-title"
                aria-describedby="welcome-description"
            >
                <div class="setup-kicker">British Empire Trading Game</div>
                <h2 id="welcome-title">${isReminder ? "Your objectives" : "Welcome to the game"}</h2>
                <p id="welcome-description">
                    Your two goals are:
                </p>
                <ul class="welcome-objectives">
                    <li>
                        <strong>Earn money:</strong> Sell extra resources to
                        Britain, then use the money to buy goods your territory
                        needs.
                    </li>
                    <li>
                        <strong>Develop your territory:</strong> Save money and
                        goods to reach higher levels.
                    </li>
                </ul>
                <p>
                    Each territory produces and uses resources every round.
                    Try to produce more than your people need, so you have
                    extra resources to sell or trade.
                </p>
                <p>
                    ${isReminder
                        ? 'For a guided tour, choose “How to Play”.'
                        : '<strong>New to the game?</strong> Choose “How to Play” for a guided tour.'}
                </p>
                <div class="tutorial-footer welcome-card-actions">
                    <button
                        type="button"
                        class="tutorial-exit"
                        onclick="closeWelcomeCard(false, '${isReminder ? "open-objectives" : "open-tutorial"}')"
                    >
                        GOT IT
                    </button>
                    <button
                        type="button"
                        class="tutorial-dismiss"
                        onclick="closeWelcomeCard(true)"
                    >
                        HOW TO PLAY
                    </button>
                </div>
            </section>
        `
    );


    document.addEventListener(
        "keydown",
        handleWelcomeCardKeydown
    );

    document.querySelector(
        "#welcome-card .tutorial-dismiss"
    )?.focus();

}


function closeWelcomeCard(
    openTutorial = false,
    returnFocusId = "open-tutorial"
) {

    document.getElementById("welcome-overlay")?.remove();
    document.getElementById("welcome-card")?.remove();
    document.removeEventListener(
        "keydown",
        handleWelcomeCardKeydown
    );

    game.inert = false;

    if (openTutorial) {

        showTutorial();

    } else {

        document.getElementById(returnFocusId)?.focus();

    }

}


function handleWelcomeCardKeydown(event) {

    if (event.key === "Escape") {

        closeWelcomeCard();
        return;

    }


    if (event.key !== "Tab") {

        return;

    }


    const buttons = [
        ...document.querySelectorAll(
            "#welcome-card button"
        )
    ];

    const currentIndex = buttons.indexOf(
        document.activeElement
    );

    const increment = event.shiftKey ? -1 : 1;

    const nextIndex = currentIndex < 0
        ? 0
        : (currentIndex + increment + buttons.length) % buttons.length;

    event.preventDefault();
    buttons[nextIndex]?.focus();

}


const tutorialSteps = [
    {
        title: "Welcome to the game",
        text: "Welcome! This quick guide follows one example round. You will see how territories produce, trade, meet their needs and develop. You can leave the guide at any time and return to your game.",
        target: ".phase-tracker",
        kind: "next"
    },
    {
        title: "Phase tracker",
        text: "Follow the bar at the top. It shows the round, year and current phase. Read the instruction, then use the button on the right when it is time to continue.",
        target: ".phase-tracker",
        kind: "next"
    },
    {
        title: "Territory cards",
        text: "Each team has a territory card. Use your card to see what your territory owns, makes and needs.",
        target: ".territory",
        kind: "next"
    },
    {
        title: "Money",
        text: "Money helps your team trade. Spend it to buy made goods, or earn money by selling resources to Britain.",
        target: ".money-row",
        kind: "next"
    },
    {
        title: "Resource types",
        text: "Resources have three types: Food, Manufactured goods and Luxury goods.",
        target: ".territory-india .resource-totals-section",
        kind: "next"
    },
    {
        title: "Open the resource list",
        text: "Open Resources to see every resource and how many you have. The colour coding indicates what type each resource is.",
        target: ".territory-india .resource-details",
        kind: "next",
        expandResources: true
    },
    {
        title: "Produce",
        text: "Press Produce to add this round's production to each territory's resource stocks.",
        target: "#phase-action-button",
        kind: "action",
        action: "produce"
    },
    {
        title: "Production values",
        text: "These numbers show what each territory made this round. The resources have been added to its stock.",
        target: ".territory-report",
        kind: "next"
    },
    {
        title: "Continue to trade",
        text: "When you've looked at the production, press Continue to move to the Trade Phase.",
        target: "#phase-action-button",
        kind: "action",
        action: "continue"
    },
    {
        title: "Buy manufactured goods",
        text: "Here you can buy Textiles or Machinery from Britain. They cost money, so check your balance before buying.",
        target: ".purchase-section",
        kind: "next"
    },
    {
        title: "Trade resources",
        text: "Use plus and minus to record trades between teams. You can also sell resources to Britain for money. The teacher records any trades arranged between teams here.",
        target: ".territory-india .resource-trading-section",
        kind: "next",
        applyDemoTrades: true
    },
    {
        title: "Submit trades",
        text: "When your teams have finished trading, press Submit Trades. The game will then check what each territory needs.",
        target: "#phase-action-button",
        kind: "action",
        action: "submit"
    },
    {
        title: "Needs and consumption",
        text: "Each row shows how many resources the territory has and how many it needs. Press Consume to see what happens.",
        targets: [".territory-india .need-row", "#phase-action-button"],
        actionTarget: "#phase-action-button",
        kind: "action",
        action: "consume"
    },
    {
        title: "Consumption results",
        text: "The report shows what each territory used and whether it met all three basic needs. India is short of Food; Jamaica met its needs.",
        targets: [".territory-india", ".territory-jamaica"],
        kind: "next"
    },
    {
        title: "India is in unrest",
        text: "India did not have enough Food, so it is in unrest. Unrest halves its production. It ends after the territory meets all three needs in a later round.",
        target: ".territory-india .unrest-indicator",
        kind: "next"
    },
    {
        title: "Continue to Review & Development",
        text: "When everyone has checked the consumption results, press Continue.",
        target: "#phase-action-button",
        kind: "action",
        action: "continueConsumption"
    },
    {
        title: "Tax is collected",
        text: "Each territory pays 20% of its current money, rounded down. Jamaica paid £5; the card shows each territory's payment.",
        target: ".territory-jamaica .tax-payment-summary",
        kind: "next"
    },
    {
        title: "Britain's wealth",
        text: "Britain earns money by selling manufactured goods and collecting tax. It spends money when it buys resources from territories.",
        target: ".britain-wealth-card",
        kind: "next"
    },
    {
        title: "Development",
        text: "Development means changing a territory's economy so it can make different goods and produce more. As it reaches higher levels, its production grows significantly and shifts towards made goods. The next level costs £20 and two Textiles. A territory in unrest, like India, cannot develop. Jamaica has met its needs and can afford the cost; press its Develop button to advance it.",
        target: ".territory-jamaica .develop-button",
        actionTarget: ".territory-jamaica .develop-button",
        kind: "action",
        action: "develop"
    },
    {
        title: "Jamaica is Developing",
        text: "Jamaica spent £20 and two Textiles to develop from Basic to Developing. From the next Production Phase, it makes Textiles as well as raw materials. Its production grows significantly as it develops further. It now needs 3 of each resource type each round.",
        target: ".territory-jamaica .development-indicator",
        kind: "next"
    },
    {
        title: "Start the next round",
        text: "Press Next Round. The round and year will advance, and the game will return to Production.",
        target: "#phase-action-button",
        kind: "action",
        action: "nextRound"
    },
    {
        title: "Tutorial preview complete",
        text: "That was one example round. Press Got It to return to the game you were playing before the tutorial.",
        target: ".phase-tracker",
        kind: "finish"
    }
];


function cloneGameData(value) {

    return JSON.parse(
        JSON.stringify(value)
    );

}


function captureTutorialDemoState() {

    return {
        gameState: cloneGameData(gameState),
        territories: cloneGameData(territories),
        lastChanges: cloneGameData(lastChanges),
        lastSales: cloneGameData(lastSales),
        lastMoneyFromSales: cloneGameData(lastMoneyFromSales),
        lastNeedsMet: cloneGameData(lastNeedsMet),
        lastTaxesPaid: cloneGameData(lastTaxesPaid),
        expandedResources: cloneGameData(expandedResources),
        tradeTimeRemaining,
        tradesApplied: tutorialSession?.tradesApplied || false
    };

}


function restoreTutorialDemoState(snapshot) {

    restoreTerritories(snapshot.territories);
    gameState = cloneGameData(snapshot.gameState);
    lastChanges = cloneGameData(snapshot.lastChanges);
    lastSales = cloneGameData(snapshot.lastSales);
    lastMoneyFromSales = cloneGameData(snapshot.lastMoneyFromSales);
    lastNeedsMet = cloneGameData(snapshot.lastNeedsMet);
    lastTaxesPaid = cloneGameData(snapshot.lastTaxesPaid);
    expandedResources = cloneGameData(snapshot.expandedResources);
    tradeTimeRemaining = snapshot.tradeTimeRemaining;

    if (tutorialSession) {

        tutorialSession.tradesApplied = snapshot.tradesApplied;

    }

    displayGame();

}


function restoreTerritories(snapshot) {

    for (const territoryID in snapshot) {

        Object.assign(
            territories[territoryID],
            cloneGameData(snapshot[territoryID])
        );

    }

}


function nextTutorialStep() {

    const currentStep =
        tutorialSteps[tutorialStepIndex];


    if (
        !tutorialSession ||
        currentStep.kind !== "next"
    ) {

        return;

    }


    if (currentStep.applyDemoTrades) {

        applyTutorialDemoTrades();

    }


    tutorialStepIndex++;
    tutorialStepSnapshots.length = tutorialStepIndex;

    renderTutorialStep();

}


function applyTutorialDemoTrades() {

    if (
        !tutorialSession ||
        tutorialSession.tradesApplied
    ) {

        return;

    }


    const textilesPrice =
        manufacturedPrices.textiles;


    for (const territoryID of getActiveTerritoryIDs()) {

        const territory =
            territories[territoryID];

        for (let unit = 0; unit < 2; unit++) {

            if (territory.money < textilesPrice) {

                break;

            }


            territory.money -= textilesPrice;
            gameState.britainWealth += textilesPrice;
            territory.resources.textiles =
                (territory.resources.textiles || 0) + 1;

        }

    }


    const canada = territories.canada;
    const jamaica = territories.jamaica;

    if (
        getActiveTerritoryIDs().includes("canada") &&
        getActiveTerritoryIDs().includes("jamaica") &&
        (canada.resources.wheat || 0) > 0
    ) {

        canada.resources.wheat--;
        jamaica.resources.wheat =
            (jamaica.resources.wheat || 0) + 1;

    }


    if (
        getActiveTerritoryIDs().includes("jamaica")
    ) {

        for (let unit = 0; unit < 13; unit++) {

            sellResourceToBritain(
                "jamaica",
                "sugar",
                false
            );

        }


        for (let unit = 0; unit < 2; unit++) {

            buyManufacturedGood(
                "jamaica",
                "textiles",
                false
            );

        }

    }


    tutorialSession.tradesApplied = true;

    displayGame();

}


function advanceTutorialAfterAction(action) {

    const currentStep =
        tutorialSteps[tutorialStepIndex];


    if (
        !tutorialSession ||
        currentStep.kind !== "action" ||
        currentStep.action !== action
    ) {

        return;

    }


    tutorialStepIndex++;
    tutorialStepSnapshots.length = tutorialStepIndex;

    renderTutorialStep();

}


function positionTutorialBox() {

    const box =
        document.getElementById(
            "tutorial-box"
        );

    const target =
        tutorialHighlightElement;


    if (!box || !target) {

        return;

    }


    const targetRect =
        target.getBoundingClientRect();

    const boxRect =
        box.getBoundingClientRect();

    const gap = 16;

    const spaceBelow =
        window.innerHeight - targetRect.bottom;

    const top =
        spaceBelow >= boxRect.height + gap
            ? targetRect.bottom + gap
            : Math.max(
                16,
                targetRect.top - boxRect.height - gap
            );

    const left = Math.max(
        16,
        Math.min(
            targetRect.left + (targetRect.width - boxRect.width) / 2,
            window.innerWidth - boxRect.width - 16
        )
    );


    box.style.top = `${top}px`;
    box.style.bottom = "auto";
    box.style.left = `${left}px`;
    box.style.transform = "none";

}


function renderTutorialStep() {

    const step =
        tutorialSteps[tutorialStepIndex];

    const box =
        document.getElementById(
            "tutorial-box"
        );


    if (!tutorialSession || !step || !box) {

        return;

    }


    if (step.expandResources) {

        const firstTerritoryID =
            getActiveTerritoryIDs()[0];

        if (!expandedResources[firstTerritoryID]) {

            expandedResources[firstTerritoryID] = true;
            displayGame();

        }

    }


    for (const element of tutorialHighlightElements) {

        element.classList.remove("tutorial-highlight");

    }


    const targetSelectors =
        step.targets || [step.target];

    tutorialHighlightElements = [
        ...new Set(
            targetSelectors.flatMap(selector =>
                [...document.querySelectorAll(selector)]
            )
        )
    ];

    tutorialHighlightElement =
        tutorialHighlightElements[0] || null;


    for (const element of tutorialHighlightElements) {

        element.classList.add("tutorial-highlight");

    }


    if (tutorialHighlightElement) {

        tutorialHighlightElement.scrollIntoView({
            behavior: "smooth",
            block: "nearest",
            inline: "nearest"
        });

    }


    tutorialStepSnapshots[tutorialStepIndex] =
        captureTutorialDemoState();


    document.getElementById(
        "game"
    ).inert = step.kind !== "action";


    const actionInstruction =
        step.kind === "action"
            ? `<div class="tutorial-action-hint">Click the highlighted button to continue.</div>`
            : "";

    const backButton = `
        <button
            type="button"
            class="tutorial-back"
            onclick="previousTutorialStep()"
            ${tutorialStepIndex === 0 ? "disabled" : ""}
        >
            BACK
        </button>
    `;

    const footer =
        step.kind === "next"
            ? `
                ${backButton}
                <button type="button" class="tutorial-dismiss" onclick="nextTutorialStep()">
                    NEXT
                </button>
                <button type="button" class="tutorial-exit" onclick="closeTutorial()">
                    EXIT TUTORIAL
                </button>
            `
            : step.kind === "finish"
                ? `
                    ${backButton}
                    <button type="button" class="tutorial-dismiss" onclick="closeTutorial()">
                        GOT IT
                    </button>
                `
                : `
                    ${backButton}
                    <button type="button" class="tutorial-exit" onclick="closeTutorial()">
                        EXIT TUTORIAL
                    </button>
                `;


    box.innerHTML = `
        <div class="setup-kicker">
            Quick guide · ${tutorialStepIndex + 1} of ${tutorialSteps.length}
        </div>
        <h2 id="tutorial-title">${step.title}</h2>
        <p id="tutorial-description">${step.text}</p>
        ${actionInstruction}
        <div class="tutorial-footer">${footer}</div>
    `;


    const focusTarget =
        box.querySelector(
            ".tutorial-dismiss, .tutorial-exit"
        );

    focusTarget?.focus();


    requestAnimationFrame(
        positionTutorialBox
    );

    setTimeout(
        positionTutorialBox,
        250
    );

}


function previousTutorialStep() {

    if (!tutorialSession || tutorialStepIndex === 0) {

        return;

    }


    tutorialStepIndex--;

    const snapshot =
        tutorialStepSnapshots[tutorialStepIndex];

    if (snapshot) {

        restoreTutorialDemoState(snapshot);

    }


    tutorialStepSnapshots.length = tutorialStepIndex + 1;

    renderTutorialStep();

}


function closeTutorial() {

    if (!tutorialSession) {

        return;

    }


    const savedSession =
        tutorialSession;


    stopTradeTimer();

    restoreTerritories(
        savedSession.territories
    );

    gameState =
        cloneGameData(
            savedSession.gameState
        );

    lastChanges =
        cloneGameData(
            savedSession.lastChanges
        );

    lastSales =
        cloneGameData(
            savedSession.lastSales
        );

    lastMoneyFromSales =
        cloneGameData(
            savedSession.lastMoneyFromSales
        );

    lastNeedsMet =
        cloneGameData(
            savedSession.lastNeedsMet
        );

    lastTaxesPaid =
        cloneGameData(
            savedSession.lastTaxesPaid
        );

    expandedResources =
        cloneGameData(
            savedSession.expandedResources
        );

    tradeTimeRemaining =
        savedSession.tradeTimeRemaining;

    tutorialSession = null;
    tutorialStepIndex = 0;
    tutorialHighlightElement = null;
    tutorialHighlightElements = [];
    tutorialStepSnapshots = [];

    document.getElementById(
        "tutorial-overlay"
    )?.remove();

    document.getElementById(
        "tutorial-box"
    )?.remove();

    document.removeEventListener(
        "keydown",
        handleTutorialKeydown
    );


    document.getElementById(
        "game"
    ).inert = false;


    displayGame();

    if (
        savedSession.tradeTimerWasActive &&
        gameState.phase === "trade"
    ) {

        startTradeTimer(false);

    }


    document.getElementById(
        "open-tutorial"
    )?.focus();

}


function handleTutorialKeydown(event) {

    if (event.key === "Escape") {

        closeTutorial();

    } else if (event.key === "Tab") {

        event.preventDefault();

        const step =
            tutorialSteps[tutorialStepIndex];

        const focusable = [
            ...document.querySelectorAll(
                ".tutorial-box button:not(:disabled)"
            )
        ];

        if (step.kind === "action") {

            const actionTarget = document.querySelector(
                step.actionTarget || step.target
            );

            if (actionTarget && !focusable.includes(actionTarget)) {

                focusable.push(actionTarget);

            }

        }

        const currentIndex =
            focusable.indexOf(document.activeElement);

        const increment = event.shiftKey ? -1 : 1;

        const nextIndex = currentIndex < 0
            ? 0
            : (currentIndex + increment + focusable.length) % focusable.length;

        focusable[nextIndex]?.focus();

    }

}


function showTutorial() {

    if (
        tutorialSession ||
        gameState.numberOfTeams === null
    ) {

        return;

    }


    tutorialSession = {
        gameState: cloneGameData(gameState),
        territories: cloneGameData(territories),
        lastChanges: cloneGameData(lastChanges),
        lastSales: cloneGameData(lastSales),
        lastMoneyFromSales: cloneGameData(lastMoneyFromSales),
        lastNeedsMet: cloneGameData(lastNeedsMet),
        lastTaxesPaid: cloneGameData(lastTaxesPaid),
        expandedResources: cloneGameData(expandedResources),
        tradeTimeRemaining,
        tradeTimerWasActive: tradeTimerInterval !== null
    };


    stopTradeTimer();

    restoreTerritories(
        initialTerritories
    );

    gameState = {
        round: 1,
        phase: "production",
        britainWealth: 25,
        numberOfTeams:
            tutorialSession.gameState.numberOfTeams
    };

    lastChanges = {};
    lastSales = {};
    lastMoneyFromSales = {};
    lastNeedsMet = {};
    lastTaxesPaid = {};
    expandedResources = {};
    tradeTimeRemaining = tradeDurationSeconds;
    tutorialStepIndex = 0;
    tutorialStepSnapshots = [];


    displayGame();

    document.body.insertAdjacentHTML(
        "beforeend",
        `
            <div id="tutorial-overlay" class="tutorial-overlay" aria-hidden="true"></div>
            <section
                id="tutorial-box"
                class="tutorial-box"
                role="dialog"
                aria-modal="true"
                aria-labelledby="tutorial-title"
                aria-describedby="tutorial-description"
            ></section>
        `
    );


    document.addEventListener(
        "keydown",
        handleTutorialKeydown
    );

    renderTutorialStep();

}


function displayGame() {

    const previousTerritoryScrollLeft =
        game.querySelector(".territory-card-row")?.scrollLeft || 0;

    if (gameState.numberOfTeams === null) {

        game.innerHTML = `
            <section class="game-setup">
                <div class="setup-kicker">British Empire Trading Game</div>
                <h1>Choose the Number of Teams</h1>
                <p>Each team will play one territory. The territories are assigned in the order shown in the game.</p>
                <form onsubmit="startGame(); return false;">
                    <label for="number-of-teams">How many teams are playing?</label>
                    <select id="number-of-teams" name="numberOfTeams">
                        <option value="6" selected>6 teams</option>
                        <option value="7">7 teams</option>
                        <option value="8">8 teams</option>
                    </select>
                    <button type="submit">START GAME</button>
                </form>
            </section>
        `;

        return;

    }

    let html = `

        <div class="game-status phase-tracker">

            <div class="round-number">
                <span>Round ${gameState.round}</span>
                <strong>Year ${getCurrentYear()}</strong>
            </div>

            <div class="tracker-center">
                <div class="tracker-game-title">British Empire Trading Game</div>
                <div id="tutorial-phase-title" class="phase-title">${getPhaseTitle()}</div>
                <div class="phase-instruction">${getPhaseInstruction()}</div>
                ${
                    gameState.phase === "trade"
                        ? `
                    <div id="trade-timer" class="trade-timer">
                        ${formatTradeTime(tradeTimeRemaining)}
                    </div>
                `
                        : ""
                }
                <div class="tracker-utility-buttons">
                    <button
                        type="button"
                        id="open-objectives"
                        class="tracker-tutorial-button"
                        onclick="showWelcomeCard(true)"
                    >
                        OBJECTIVES
                    </button>
                    <button
                        type="button"
                        id="open-tutorial"
                        class="tracker-tutorial-button"
                        onclick="showTutorial()"
                    >
                        HOW TO PLAY
                    </button>
                </div>
            </div>

            <div class="tracker-action">

    `;


    // --------------------------------------------------------
    // MAIN ACTION BUTTON
    // --------------------------------------------------------

    if (
        gameState.phase ===
        "territoryBriefing"
    ) {

        html += `

            <button
                id="phase-action-button"
                onclick="beginFirstRound()"
            >

                BEGIN ROUND 1

            </button>

        `;

    }


    else if (
        gameState.phase ===
        "production"
    ) {

        html += `

            <button
                id="phase-action-button"
                onclick="
                    produceResources()
                "
            >

                PRODUCE

            </button>

        `;

    }


    else if (
        gameState.phase ===
        "productionReport"
    ) {

        html += `

            <button
                id="phase-action-button"
                onclick="
                    continueAfterProduction()
                "
            >

                CONTINUE

            </button>

        `;

    }


    else if (
        gameState.phase ===
        "trade"
    ) {

        html += `

            <button
                id="phase-action-button"
                onclick="
                    submitTrades()
                "
            >

                SUBMIT TRADES

            </button>

        `;

    }


    else if (
        gameState.phase ===
        "consumption"
    ) {

        html += `

            <button
                id="phase-action-button"
                onclick="
                    consumeResources()
                "
            >

                CONSUME

            </button>

        `;

    }


    else if (
        gameState.phase ===
        "consumptionReport"
    ) {

        html += `

            <button
                id="phase-action-button"
                onclick="
                    continueAfterConsumption()
                "
            >

                CONTINUE

            </button>

        `;

    }


    else if (
        gameState.phase ===
        "reflection"
    ) {

        html += `

            <button
                id="phase-action-button"
                onclick="
                    nextRound()
                "
            >

                NEXT ROUND

            </button>

        `;

    }


    html += `

        </div>

        </div>

    `;

    const activeTerritoryIDs = getActiveTerritoryIDs();
    // --------------------------------------------------------
    // TERRITORY CARDS
    // --------------------------------------------------------

    const territoryColumns = Math.ceil(activeTerritoryIDs.length / 2);
    html += `<div class="territory-card-row" style="--territory-columns: ${territoryColumns}">`;

    for (const id of activeTerritoryIDs) {

        const territory =
            territories[
                id
            ];


        // ----------------------------------------------------
        // PRODUCTION REPORT
        // ----------------------------------------------------

        if (
            gameState.phase ===
            "productionReport"
        ) {

            html += `

                <div
                    class="territory territory-${id} ${
                        territory.unrest
                            ? "has-unrest"
                            : ""
                    }"
                    data-territory-id="${id}"
                >

                    ${buildTerritoryHeading(id, territory)}


                    <div
                        class="development-indicator"
                        title="${getDevelopmentTooltip(territory.development)}"
                        tabindex="0"
                    >

                        Development: ${getDevelopmentName(territory.development)}

                    </div>


                    ${
                        territory.unrest
                            ? `

                        <div
                            class="unrest-indicator"
                            title="Unrest means the territory did not meet all three needs. Production is halved, and the territory cannot develop. Unrest ends after it meets all three needs in a Consumption Phase."
                            tabindex="0"
                        >

                            UNREST

                        </div>

                    `
                            : ""
                    }


                    ${buildProductionReport(
                        id,
                        territory
                    )}

                </div>

            `;

        }


        // ----------------------------------------------------
        // CONSUMPTION REPORT
        // ----------------------------------------------------

        else if (
            gameState.phase ===
            "consumptionReport"
        ) {

            html += `

                <div
                    class="territory territory-${id} ${
                        territory.unrest
                            ? "has-unrest"
                            : ""
                    }"
                    data-territory-id="${id}"
                >

                    ${buildTerritoryHeading(id, territory)}


                    <div
                        class="development-indicator"
                        title="${getDevelopmentTooltip(territory.development)}"
                        tabindex="0"
                    >

                        Development: ${getDevelopmentName(territory.development)}

                    </div>


                    ${
                        territory.unrest
                            ? `

                        <div
                            class="unrest-indicator"
                            title="Unrest means the territory did not meet all three needs. Production is halved, and the territory cannot develop. Unrest ends after it meets all three needs in a Consumption Phase."
                            tabindex="0"
                        >

                            UNREST

                        </div>

                    `
                            : ""
                    }


                    ${buildConsumptionReport(
                        id,
                        territory
                    )}


                    ${buildTradeSalesSummary(id)}

                </div>

            `;

        }


        // ----------------------------------------------------
        // NORMAL CARD
        // ----------------------------------------------------

        else {

            html +=
                buildCompactTerritoryCard(
                    id,
                    territory
                );

        }

    }


    html += '</div>';

    html += `

        <div class="britain-wealth-card">
            <h2>${gameState.phase === "territoryBriefing" ? "Britain's starting wealth" : "Britain"}</h2>
            <div class="britain-wealth-value">
                £${gameState.britainWealth}
            </div>
        </div>

    `;


    // --------------------------------------------------------
    // DRAW THE GAME
    // --------------------------------------------------------

    game.innerHTML =
        html;

    const territoryCardRow =
        game.querySelector(".territory-card-row");

    if (territoryCardRow) {
        territoryCardRow.scrollLeft = previousTerritoryScrollLeft;
    }

    const phaseActionButton =
        game.querySelector("#phase-action-button");

    if (phaseActionButton) {

        phaseActionButton.addEventListener(
            "click",
            () => playGameSound("action", 0.2),
            { capture: true }
        );

    }


    // --------------------------------------------------------
    // RESTORE EXPANDED RESOURCE SECTIONS
    // --------------------------------------------------------

    for (
        const territoryID
        in expandedResources
    ) {

        if (
            expandedResources[
                territoryID
            ]
        ) {

            const element =
                document.getElementById(
                    `resources-${territoryID}`
                );


            if (element) {

                element.classList.add(
                    "expanded"
                );

            }

        }

    }


    // --------------------------------------------------------
    // REFRESH TIMER DISPLAY
    // --------------------------------------------------------

    if (
        gameState.phase ===
        "trade"
    ) {

        updateTradeTimerDisplay();

    }

}


// ============================================================
// 37. START THE GAME
// ============================================================

displayGame();
