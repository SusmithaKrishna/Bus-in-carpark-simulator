$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("src/test/java/features/BusPositionAfterMoveClick.feature");
formatter.feature({
  "line": 1,
  "name": "BusPositionAfterMove",
  "description": "This feature will test the position of the bus after clicking Move",
  "id": "buspositionaftermove",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at \u003cxAxis\u003e, \u003cyAxis\u003e, \u003cface\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;",
  "rows": [
    {
      "cells": [
        "xAxis",
        "yAxis",
        "face"
      ],
      "line": 11,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;1"
    },
    {
      "cells": [
        "3",
        "3",
        "east"
      ],
      "line": 12,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;2"
    },
    {
      "cells": [
        "1",
        "1",
        "west"
      ],
      "line": 13,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;3"
    },
    {
      "cells": [
        "0",
        "0",
        "north"
      ],
      "line": 14,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;4"
    },
    {
      "cells": [
        "0",
        "0",
        "north"
      ],
      "line": 15,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;5"
    },
    {
      "cells": [
        "0",
        "4",
        "north"
      ],
      "line": 16,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;6"
    },
    {
      "cells": [
        "0",
        "0",
        "south"
      ],
      "line": 17,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;7"
    },
    {
      "cells": [
        "0",
        "4",
        "south"
      ],
      "line": 18,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;8"
    },
    {
      "cells": [
        "0",
        "0",
        "east"
      ],
      "line": 19,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;9"
    },
    {
      "cells": [
        "0",
        "4",
        "east"
      ],
      "line": 20,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;10"
    },
    {
      "cells": [
        "0",
        "0",
        "west"
      ],
      "line": 21,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;11"
    },
    {
      "cells": [
        "0",
        "4",
        "west"
      ],
      "line": 22,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;12"
    },
    {
      "cells": [
        "1",
        "1",
        "north"
      ],
      "line": 23,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;13"
    },
    {
      "cells": [
        "2",
        "2",
        "south"
      ],
      "line": 24,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;14"
    },
    {
      "cells": [
        "3",
        "3",
        "east"
      ],
      "line": 25,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;15"
    },
    {
      "cells": [
        "1",
        "1",
        "west"
      ],
      "line": 26,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;16"
    },
    {
      "cells": [
        "4",
        "0",
        "north"
      ],
      "line": 27,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;17"
    },
    {
      "cells": [
        "4",
        "4",
        "north"
      ],
      "line": 28,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;18"
    },
    {
      "cells": [
        "0",
        "0",
        "north"
      ],
      "line": 29,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;19"
    },
    {
      "cells": [
        "0",
        "4",
        "north"
      ],
      "line": 30,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;20"
    },
    {
      "cells": [
        "0",
        "0",
        "south"
      ],
      "line": 31,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;21"
    },
    {
      "cells": [
        "0",
        "4",
        "south"
      ],
      "line": 32,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;22"
    },
    {
      "cells": [
        "0",
        "0",
        "east"
      ],
      "line": 33,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;23"
    },
    {
      "cells": [
        "0",
        "4",
        "east"
      ],
      "line": 34,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;24"
    },
    {
      "cells": [
        "0",
        "0",
        "west"
      ],
      "line": 35,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;25"
    },
    {
      "cells": [
        "0",
        "4",
        "west"
      ],
      "line": 36,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;26"
    },
    {
      "cells": [
        "4",
        "0",
        "north"
      ],
      "line": 37,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;27"
    },
    {
      "cells": [
        "4",
        "4",
        "north"
      ],
      "line": 38,
      "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;28"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 85048593401,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 3, 3, east",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 5851101299,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 17
    },
    {
      "val": "3",
      "offset": 20
    },
    {
      "val": "east",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 7944523399,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 91486199,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 1087700299,
  "status": "passed"
});
formatter.after({
  "duration": 2596559100,
  "status": "passed"
});
formatter.before({
  "duration": 70537794401,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 1, 1, west",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 1119845200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 17
    },
    {
      "val": "1",
      "offset": 20
    },
    {
      "val": "west",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 6685302000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 369079600,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 1171877799,
  "status": "passed"
});
formatter.after({
  "duration": 2461142300,
  "status": "passed"
});
formatter.before({
  "duration": 49383144801,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 0, 0, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 582001200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 17
    },
    {
      "val": "0",
      "offset": 20
    },
    {
      "val": "north",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 2429527000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 84966400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 824152400,
  "status": "passed"
});
formatter.after({
  "duration": 1317137299,
  "status": "passed"
});
formatter.before({
  "duration": 40733712901,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 0, 0, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 865026601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 17
    },
    {
      "val": "0",
      "offset": 20
    },
    {
      "val": "north",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 6238745900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 5084730000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 6205940300,
  "status": "passed"
});
formatter.after({
  "duration": 2470321700,
  "status": "passed"
});
formatter.before({
  "duration": 33493471101,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 0, 4, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 462337501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 17
    },
    {
      "val": "4",
      "offset": 20
    },
    {
      "val": "north",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 2995504500,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 105166200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 189596199,
  "status": "passed"
});
formatter.after({
  "duration": 604027800,
  "status": "passed"
});
formatter.before({
  "duration": 17368469200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 0, 0, south",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 700612501,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 17
    },
    {
      "val": "0",
      "offset": 20
    },
    {
      "val": "south",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 867364999,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 227223499,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 2481859300,
  "error_message": "java.lang.AssertionError: Unexpected Behaviour found\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat Steps.StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved(StepsToMoveBusByOneStep.java:110)\r\n\tat ✽.Then compare actual report with expected report when moved(src/test/java/features/BusPositionAfterMoveClick.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 253352900,
  "status": "passed"
});
formatter.before({
  "duration": 21531409901,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 0, 4, south",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 182361699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 17
    },
    {
      "val": "4",
      "offset": 20
    },
    {
      "val": "south",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 20989163100,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 5087246800,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 5376654800,
  "error_message": "org.junit.ComparisonFailure: Expected result is The bus is currently parked at X: 0 and Y: 3, facing south ,but actual result is The bus is currently parked at X: 1 and Y: 4, facing south expected:\u003c...rently parked at X: [0 and Y: 3], facing south\u003e but was:\u003c...rently parked at X: [1 and Y: 4], facing south\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat Steps.StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved(StepsToMoveBusByOneStep.java:118)\r\n\tat ✽.Then compare actual report with expected report when moved(src/test/java/features/BusPositionAfterMoveClick.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1422908700,
  "status": "passed"
});
formatter.before({
  "duration": 20034649599,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 0, 0, east",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 1064392701,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 17
    },
    {
      "val": "0",
      "offset": 20
    },
    {
      "val": "east",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 1095259800,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 108030900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 529853699,
  "status": "passed"
});
formatter.after({
  "duration": 3193902800,
  "status": "passed"
});
formatter.before({
  "duration": 19587536601,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 0, 4, east",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 680907700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 17
    },
    {
      "val": "4",
      "offset": 20
    },
    {
      "val": "east",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 907913000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 224710501,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 1313202299,
  "status": "passed"
});
formatter.after({
  "duration": 594322001,
  "status": "passed"
});
formatter.before({
  "duration": 20485524700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 0, 0, west",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 318612400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 17
    },
    {
      "val": "0",
      "offset": 20
    },
    {
      "val": "west",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 837042100,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 102252301,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 174915100,
  "status": "passed"
});
formatter.after({
  "duration": 327388201,
  "status": "passed"
});
formatter.before({
  "duration": 15278869800,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 0, 4, west",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 237917100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 17
    },
    {
      "val": "4",
      "offset": 20
    },
    {
      "val": "west",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 998591001,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 125144001,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 57126901,
  "status": "passed"
});
formatter.after({
  "duration": 2092394300,
  "status": "passed"
});
formatter.before({
  "duration": 19701761300,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 1, 1, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 1339581801,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 17
    },
    {
      "val": "1",
      "offset": 20
    },
    {
      "val": "north",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 1009530400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 144946501,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 979598700,
  "status": "passed"
});
formatter.after({
  "duration": 979237400,
  "status": "passed"
});
formatter.before({
  "duration": 18974992299,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 2, 2, south",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 1459003600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 17
    },
    {
      "val": "2",
      "offset": 20
    },
    {
      "val": "south",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 1059764600,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 113094700,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 1114300901,
  "error_message": "org.junit.ComparisonFailure: Expected result is The bus is currently parked at X: 2 and Y: 1, facing south ,but actual result is The bus is currently parked at X: 3 and Y: 2, facing south expected:\u003c...rently parked at X: [2 and Y: 1], facing south\u003e but was:\u003c...rently parked at X: [3 and Y: 2], facing south\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat Steps.StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved(StepsToMoveBusByOneStep.java:118)\r\n\tat ✽.Then compare actual report with expected report when moved(src/test/java/features/BusPositionAfterMoveClick.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1265820700,
  "status": "passed"
});
formatter.before({
  "duration": 19918580600,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 3, 3, east",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 677852699,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 17
    },
    {
      "val": "3",
      "offset": 20
    },
    {
      "val": "east",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 1124235400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 156019599,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 352148499,
  "status": "passed"
});
formatter.after({
  "duration": 552176500,
  "status": "passed"
});
formatter.before({
  "duration": 11746174000,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 1, 1, west",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 124757300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 17
    },
    {
      "val": "1",
      "offset": 20
    },
    {
      "val": "west",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 976539500,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 110328700,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 468525099,
  "status": "passed"
});
formatter.after({
  "duration": 949776000,
  "status": "passed"
});
formatter.before({
  "duration": 10508349000,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 4, 0, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 126530799,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 17
    },
    {
      "val": "0",
      "offset": 20
    },
    {
      "val": "north",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 955382399,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 112059400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 264398700,
  "status": "passed"
});
formatter.after({
  "duration": 483012999,
  "status": "passed"
});
formatter.before({
  "duration": 8071421100,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;18",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 4, 4, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 165425600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 17
    },
    {
      "val": "4",
      "offset": 20
    },
    {
      "val": "north",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 822815500,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 125719099,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 116913900,
  "status": "passed"
});
formatter.after({
  "duration": 358930499,
  "status": "passed"
});
formatter.before({
  "duration": 7062134699,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;19",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 0, 0, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 161596700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 17
    },
    {
      "val": "0",
      "offset": 20
    },
    {
      "val": "north",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 791866500,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 110861900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 234054200,
  "status": "passed"
});
formatter.after({
  "duration": 373115200,
  "status": "passed"
});
formatter.before({
  "duration": 10692802299,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;20",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 0, 4, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 165342600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 17
    },
    {
      "val": "4",
      "offset": 20
    },
    {
      "val": "north",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 932535600,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 127051200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 66000000,
  "status": "passed"
});
formatter.after({
  "duration": 292116100,
  "status": "passed"
});
formatter.before({
  "duration": 10399514800,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;21",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 0, 0, south",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 223027800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 17
    },
    {
      "val": "0",
      "offset": 20
    },
    {
      "val": "south",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 908705000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 112930999,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 41144201,
  "error_message": "java.lang.AssertionError: Unexpected Behaviour found\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat Steps.StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved(StepsToMoveBusByOneStep.java:110)\r\n\tat ✽.Then compare actual report with expected report when moved(src/test/java/features/BusPositionAfterMoveClick.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 334009300,
  "status": "passed"
});
formatter.before({
  "duration": 9664235301,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;22",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 0, 4, south",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 177738000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 17
    },
    {
      "val": "4",
      "offset": 20
    },
    {
      "val": "south",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 978906199,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 183949800,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 584435000,
  "error_message": "org.junit.ComparisonFailure: Expected result is The bus is currently parked at X: 0 and Y: 3, facing south ,but actual result is The bus is currently parked at X: 1 and Y: 4, facing south expected:\u003c...rently parked at X: [0 and Y: 3], facing south\u003e but was:\u003c...rently parked at X: [1 and Y: 4], facing south\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat Steps.StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved(StepsToMoveBusByOneStep.java:118)\r\n\tat ✽.Then compare actual report with expected report when moved(src/test/java/features/BusPositionAfterMoveClick.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 284945100,
  "status": "passed"
});
formatter.before({
  "duration": 15660109799,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;23",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 0, 0, east",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 245914100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 17
    },
    {
      "val": "0",
      "offset": 20
    },
    {
      "val": "east",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 865599899,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 106079700,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 367422100,
  "status": "passed"
});
formatter.after({
  "duration": 226717800,
  "status": "passed"
});
formatter.before({
  "duration": 11442242700,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;24",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 0, 4, east",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 741081599,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 17
    },
    {
      "val": "4",
      "offset": 20
    },
    {
      "val": "east",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 930715900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 97009600,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 258071699,
  "status": "passed"
});
formatter.after({
  "duration": 235217400,
  "status": "passed"
});
formatter.before({
  "duration": 5756392200,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;25",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 0, 0, west",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 155670601,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 17
    },
    {
      "val": "0",
      "offset": 20
    },
    {
      "val": "west",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 941041300,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 138311601,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 73717799,
  "status": "passed"
});
formatter.after({
  "duration": 321000800,
  "status": "passed"
});
formatter.before({
  "duration": 6049948601,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;26",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 0, 4, west",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 219569301,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 17
    },
    {
      "val": "4",
      "offset": 20
    },
    {
      "val": "west",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 930997500,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 102051400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 53396800,
  "status": "passed"
});
formatter.after({
  "duration": 404244601,
  "status": "passed"
});
formatter.before({
  "duration": 6947789600,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;27",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 4, 0, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 117873201,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 17
    },
    {
      "val": "0",
      "offset": 20
    },
    {
      "val": "north",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 939578200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 124398401,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 580411899,
  "status": "passed"
});
formatter.after({
  "duration": 249677599,
  "status": "passed"
});
formatter.before({
  "duration": 8579540901,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Test for position of Bus after clicking move button",
  "description": "",
  "id": "buspositionaftermove;test-for-position-of-bus-after-clicking-move-button;;28",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 5,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 6,
  "name": "place the bus at 4, 4, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click move",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report when moved",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 143904800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 17
    },
    {
      "val": "4",
      "offset": 20
    },
    {
      "val": "north",
      "offset": 23
    }
  ],
  "location": "StepsToMoveBusByOneStep.placeTheBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 1078387400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 139280401,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 76861400,
  "status": "passed"
});
formatter.after({
  "duration": 393398401,
  "status": "passed"
});
});