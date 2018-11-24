$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("BusPositionAfterChangeingDirectionAndMoved.feature");
formatter.feature({
  "line": 1,
  "name": "To check bus position after direction is changed and moved",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at \u003cxAxis\u003e, \u003cyAxis\u003e, \u003cface\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the \u003cdirection\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;",
  "rows": [
    {
      "cells": [
        "xAxis",
        "yAxis",
        "face",
        "direction"
      ],
      "line": 11,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;1"
    },
    {
      "cells": [
        "0",
        "0",
        "north",
        "left"
      ],
      "line": 13,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;2"
    },
    {
      "cells": [
        "0",
        "4",
        "north",
        "left"
      ],
      "line": 14,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;3"
    },
    {
      "cells": [
        "0",
        "2",
        "north",
        "left"
      ],
      "line": 15,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;4"
    },
    {
      "cells": [
        "0",
        "0",
        "south",
        "left"
      ],
      "line": 16,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;5"
    },
    {
      "cells": [
        "0",
        "3",
        "south",
        "left"
      ],
      "line": 17,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;6"
    },
    {
      "cells": [
        "0",
        "4",
        "south",
        "left"
      ],
      "line": 18,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;7"
    },
    {
      "cells": [
        "0",
        "0",
        "east",
        "left"
      ],
      "line": 19,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;8"
    },
    {
      "cells": [
        "0",
        "1",
        "east",
        "left"
      ],
      "line": 20,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;9"
    },
    {
      "cells": [
        "0",
        "4",
        "east",
        "left"
      ],
      "line": 21,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;10"
    },
    {
      "cells": [
        "0",
        "0",
        "west",
        "left"
      ],
      "line": 22,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;11"
    },
    {
      "cells": [
        "0",
        "3",
        "west",
        "left"
      ],
      "line": 23,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;12"
    },
    {
      "cells": [
        "0",
        "4",
        "west",
        "left"
      ],
      "line": 24,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;13"
    },
    {
      "cells": [
        "1",
        "2",
        "north",
        "left"
      ],
      "line": 25,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;14"
    },
    {
      "cells": [
        "2",
        "1",
        "north",
        "left"
      ],
      "line": 26,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;15"
    },
    {
      "cells": [
        "3",
        "3",
        "north",
        "left"
      ],
      "line": 27,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;16"
    },
    {
      "cells": [
        "1",
        "2",
        "south",
        "left"
      ],
      "line": 28,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;17"
    },
    {
      "cells": [
        "2",
        "1",
        "south",
        "left"
      ],
      "line": 29,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;18"
    },
    {
      "cells": [
        "3",
        "3",
        "south",
        "left"
      ],
      "line": 30,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;19"
    },
    {
      "cells": [
        "1",
        "2",
        "east",
        "left"
      ],
      "line": 31,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;20"
    },
    {
      "cells": [
        "2",
        "1",
        "east",
        "left"
      ],
      "line": 32,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;21"
    },
    {
      "cells": [
        "3",
        "3",
        "east",
        "left"
      ],
      "line": 33,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;22"
    },
    {
      "cells": [
        "1",
        "2",
        "west",
        "left"
      ],
      "line": 34,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;23"
    },
    {
      "cells": [
        "2",
        "1",
        "west",
        "left"
      ],
      "line": 35,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;24"
    },
    {
      "cells": [
        "3",
        "3",
        "west",
        "left"
      ],
      "line": 36,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;25"
    },
    {
      "cells": [
        "4",
        "0",
        "north",
        "left"
      ],
      "line": 37,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;26"
    },
    {
      "cells": [
        "4",
        "4",
        "north",
        "left"
      ],
      "line": 38,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;27"
    },
    {
      "cells": [
        "0",
        "0",
        "north",
        "right"
      ],
      "line": 39,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;28"
    },
    {
      "cells": [
        "0",
        "4",
        "north",
        "right"
      ],
      "line": 40,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;29"
    },
    {
      "cells": [
        "0",
        "2",
        "north",
        "right"
      ],
      "line": 41,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;30"
    },
    {
      "cells": [
        "0",
        "0",
        "south",
        "right"
      ],
      "line": 42,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;31"
    },
    {
      "cells": [
        "0",
        "3",
        "south",
        "right"
      ],
      "line": 43,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;32"
    },
    {
      "cells": [
        "0",
        "4",
        "south",
        "right"
      ],
      "line": 44,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;33"
    },
    {
      "cells": [
        "0",
        "0",
        "east",
        "right"
      ],
      "line": 45,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;34"
    },
    {
      "cells": [
        "0",
        "1",
        "east",
        "right"
      ],
      "line": 46,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;35"
    },
    {
      "cells": [
        "0",
        "4",
        "east",
        "right"
      ],
      "line": 47,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;36"
    },
    {
      "cells": [
        "0",
        "0",
        "west",
        "right"
      ],
      "line": 48,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;37"
    },
    {
      "cells": [
        "0",
        "3",
        "west",
        "right"
      ],
      "line": 49,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;38"
    },
    {
      "cells": [
        "0",
        "4",
        "west",
        "right"
      ],
      "line": 50,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;39"
    },
    {
      "cells": [
        "1",
        "2",
        "north",
        "right"
      ],
      "line": 51,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;40"
    },
    {
      "cells": [
        "2",
        "1",
        "north",
        "right"
      ],
      "line": 52,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;41"
    },
    {
      "cells": [
        "3",
        "3",
        "north",
        "right"
      ],
      "line": 53,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;42"
    },
    {
      "cells": [
        "1",
        "2",
        "south",
        "right"
      ],
      "line": 54,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;43"
    },
    {
      "cells": [
        "2",
        "1",
        "south",
        "right"
      ],
      "line": 55,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;44"
    },
    {
      "cells": [
        "3",
        "3",
        "south",
        "right"
      ],
      "line": 56,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;45"
    },
    {
      "cells": [
        "1",
        "2",
        "east",
        "right"
      ],
      "line": 57,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;46"
    },
    {
      "cells": [
        "2",
        "1",
        "east",
        "right"
      ],
      "line": 58,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;47"
    },
    {
      "cells": [
        "3",
        "3",
        "east",
        "right"
      ],
      "line": 59,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;48"
    },
    {
      "cells": [
        "1",
        "2",
        "west",
        "right"
      ],
      "line": 60,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;49"
    },
    {
      "cells": [
        "2",
        "1",
        "west",
        "right"
      ],
      "line": 61,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;50"
    },
    {
      "cells": [
        "3",
        "3",
        "west",
        "right"
      ],
      "line": 62,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;51"
    },
    {
      "cells": [
        "4",
        "0",
        "north",
        "right"
      ],
      "line": 63,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;52"
    },
    {
      "cells": [
        "4",
        "4",
        "north",
        "right"
      ],
      "line": 64,
      "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;53"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 56185962000,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 0, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 3032214200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "0",
      "offset": 75
    },
    {
      "val": "north",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 2152110800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 85233100,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 105393200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 494251100,
  "status": "passed"
});
formatter.after({
  "duration": 1904891100,
  "status": "passed"
});
formatter.before({
  "duration": 34085399800,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 4, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 624945200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "4",
      "offset": 75
    },
    {
      "val": "north",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 1155240500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 326641800,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 93367900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 94235000,
  "status": "passed"
});
formatter.after({
  "duration": 347894500,
  "status": "passed"
});
formatter.before({
  "duration": 20289392000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 2, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 1330919600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "2",
      "offset": 75
    },
    {
      "val": "north",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 1107480700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 113244900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 99443400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 60055200,
  "status": "passed"
});
formatter.after({
  "duration": 443334300,
  "status": "passed"
});
formatter.before({
  "duration": 14075333100,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 0, south",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 184716700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "0",
      "offset": 75
    },
    {
      "val": "south",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 904565600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 135104700,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 100063000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 750177900,
  "status": "passed"
});
formatter.after({
  "duration": 513120600,
  "status": "passed"
});
formatter.before({
  "duration": 13593930800,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 3, south",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 228777600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "3",
      "offset": 75
    },
    {
      "val": "south",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 889751900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 115041900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 98140300,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 367791000,
  "status": "passed"
});
formatter.after({
  "duration": 255101500,
  "status": "passed"
});
formatter.before({
  "duration": 7951991200,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 4, south",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 168387400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "4",
      "offset": 75
    },
    {
      "val": "south",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 1031667600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 142180500,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 117989400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 547199300,
  "status": "passed"
});
formatter.after({
  "duration": 246421400,
  "status": "passed"
});
formatter.before({
  "duration": 10175711800,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 0, east",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 146996900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "0",
      "offset": 75
    },
    {
      "val": "east",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 851084500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 134101000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 114994900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 280638500,
  "status": "passed"
});
formatter.after({
  "duration": 217051900,
  "status": "passed"
});
formatter.before({
  "duration": 9656884300,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 1, east",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 134543100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "1",
      "offset": 75
    },
    {
      "val": "east",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 862486600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 98242700,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 97908700,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 418718700,
  "status": "passed"
});
formatter.after({
  "duration": 206181000,
  "status": "passed"
});
formatter.before({
  "duration": 7180352700,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;10",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 4, east",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 122730400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "4",
      "offset": 75
    },
    {
      "val": "east",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 914948500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 108130000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 115685800,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 75808000,
  "status": "passed"
});
formatter.after({
  "duration": 228161100,
  "status": "passed"
});
formatter.before({
  "duration": 12759766700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;11",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 0, west",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 935980000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "0",
      "offset": 75
    },
    {
      "val": "west",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 1155137300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 121702500,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 113116500,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 370833700,
  "error_message": "java.lang.AssertionError: Unexpected behaviour\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat Steps.StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection(StepsToTestMovementInChangedDirection.java:148)\r\n\tat ✽.Then compare actual report with expected report after moving in the direction(BusPositionAfterChangeingDirectionAndMoved.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 324708700,
  "status": "passed"
});
formatter.before({
  "duration": 8495655400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;12",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 3, west",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 154362500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "3",
      "offset": 75
    },
    {
      "val": "west",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 922102200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 107709700,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 99400400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 403796000,
  "error_message": "org.junit.ComparisonFailure: Expected result is The bus is currently parked at X: 0 and Y: 2, facing south ,but actual result is The bus is currently parked at X: 1 and Y: 3, facing south expected:\u003c...rently parked at X: [0 and Y: 2], facing south\u003e but was:\u003c...rently parked at X: [1 and Y: 3], facing south\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat Steps.StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection(StepsToTestMovementInChangedDirection.java:154)\r\n\tat ✽.Then compare actual report with expected report after moving in the direction(BusPositionAfterChangeingDirectionAndMoved.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 331533400,
  "status": "passed"
});
formatter.before({
  "duration": 14816332900,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;13",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 4, west",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 294646700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "4",
      "offset": 75
    },
    {
      "val": "west",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 886963600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 114617400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 97175600,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 585711400,
  "error_message": "org.junit.ComparisonFailure: Expected result is The bus is currently parked at X: 0 and Y: 3, facing south ,but actual result is The bus is currently parked at X: 1 and Y: 4, facing south expected:\u003c...rently parked at X: [0 and Y: 3], facing south\u003e but was:\u003c...rently parked at X: [1 and Y: 4], facing south\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat Steps.StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection(StepsToTestMovementInChangedDirection.java:154)\r\n\tat ✽.Then compare actual report with expected report after moving in the direction(BusPositionAfterChangeingDirectionAndMoved.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 555002000,
  "status": "passed"
});
formatter.before({
  "duration": 16054951700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;14",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 1, 2, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 115750500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 72
    },
    {
      "val": "2",
      "offset": 75
    },
    {
      "val": "north",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 964076700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 134411500,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 115731200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 633147500,
  "status": "passed"
});
formatter.after({
  "duration": 312139700,
  "status": "passed"
});
formatter.before({
  "duration": 11784014600,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;15",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 2, 1, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 141815400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 72
    },
    {
      "val": "1",
      "offset": 75
    },
    {
      "val": "north",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 894247100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 137376100,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 104701200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 895943100,
  "status": "passed"
});
formatter.after({
  "duration": 331735200,
  "status": "passed"
});
formatter.before({
  "duration": 11475709200,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;16",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 3, 3, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 1009471100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 72
    },
    {
      "val": "3",
      "offset": 75
    },
    {
      "val": "north",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 920033400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 119565100,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 116349900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 651971800,
  "status": "passed"
});
formatter.after({
  "duration": 1240591600,
  "status": "passed"
});
formatter.before({
  "duration": 12933615700,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;17",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 1, 2, south",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 111329900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 72
    },
    {
      "val": "2",
      "offset": 75
    },
    {
      "val": "south",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 1070385600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 114303700,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 116580000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 243011300,
  "status": "passed"
});
formatter.after({
  "duration": 446442500,
  "status": "passed"
});
formatter.before({
  "duration": 4995564600,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;18",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 2, 1, south",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 96706900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 72
    },
    {
      "val": "1",
      "offset": 75
    },
    {
      "val": "south",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 1025666700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 107562700,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 116590700,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 276845700,
  "status": "passed"
});
formatter.after({
  "duration": 203338400,
  "status": "passed"
});
formatter.before({
  "duration": 9108602100,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;19",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 3, 3, south",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 136730500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 72
    },
    {
      "val": "3",
      "offset": 75
    },
    {
      "val": "south",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 1154774700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 98287000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 98646000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 227034600,
  "status": "passed"
});
formatter.after({
  "duration": 2306442500,
  "status": "passed"
});
formatter.before({
  "duration": 8224576100,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;20",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 1, 2, east",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 149475900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 72
    },
    {
      "val": "2",
      "offset": 75
    },
    {
      "val": "east",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 928039500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 101722000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 99932600,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 442297600,
  "status": "passed"
});
formatter.after({
  "duration": 380458500,
  "status": "passed"
});
formatter.before({
  "duration": 7452478200,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;21",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 2, 1, east",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 97559700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 72
    },
    {
      "val": "1",
      "offset": 75
    },
    {
      "val": "east",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 901653200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 111631100,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 99495300,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 220442700,
  "status": "passed"
});
formatter.after({
  "duration": 203384400,
  "status": "passed"
});
formatter.before({
  "duration": 7985102600,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;22",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 3, 3, east",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 103172100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 72
    },
    {
      "val": "3",
      "offset": 75
    },
    {
      "val": "east",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 912761000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 110774500,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 98789800,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 214408600,
  "status": "passed"
});
formatter.after({
  "duration": 248713300,
  "status": "passed"
});
formatter.before({
  "duration": 9909006500,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;23",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 1, 2, west",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 156598600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 72
    },
    {
      "val": "2",
      "offset": 75
    },
    {
      "val": "west",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 911372900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 123411900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 118968300,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 214904600,
  "error_message": "org.junit.ComparisonFailure: Expected result is The bus is currently parked at X: 1 and Y: 1, facing south ,but actual result is The bus is currently parked at X: 2 and Y: 2, facing south expected:\u003c...rently parked at X: [1 and Y: 1], facing south\u003e but was:\u003c...rently parked at X: [2 and Y: 2], facing south\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat Steps.StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection(StepsToTestMovementInChangedDirection.java:154)\r\n\tat ✽.Then compare actual report with expected report after moving in the direction(BusPositionAfterChangeingDirectionAndMoved.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 191729300,
  "status": "passed"
});
formatter.before({
  "duration": 7659344000,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;24",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 2, 1, west",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 138430300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 72
    },
    {
      "val": "1",
      "offset": 75
    },
    {
      "val": "west",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 941323300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 118699700,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 99208200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 392822400,
  "error_message": "org.junit.ComparisonFailure: Expected result is The bus is currently parked at X: 2 and Y: 0, facing south ,but actual result is The bus is currently parked at X: 3 and Y: 1, facing south expected:\u003c...rently parked at X: [2 and Y: 0], facing south\u003e but was:\u003c...rently parked at X: [3 and Y: 1], facing south\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat Steps.StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection(StepsToTestMovementInChangedDirection.java:154)\r\n\tat ✽.Then compare actual report with expected report after moving in the direction(BusPositionAfterChangeingDirectionAndMoved.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 191767100,
  "status": "passed"
});
formatter.before({
  "duration": 7638439700,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;25",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 3, 3, west",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 118971200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 72
    },
    {
      "val": "3",
      "offset": 75
    },
    {
      "val": "west",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 898865700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 111194400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 99529300,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 259622400,
  "error_message": "org.junit.ComparisonFailure: Expected result is The bus is currently parked at X: 3 and Y: 2, facing south ,but actual result is The bus is currently parked at X: 4 and Y: 3, facing south expected:\u003c...rently parked at X: [3 and Y: 2], facing south\u003e but was:\u003c...rently parked at X: [4 and Y: 3], facing south\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat Steps.StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection(StepsToTestMovementInChangedDirection.java:154)\r\n\tat ✽.Then compare actual report with expected report after moving in the direction(BusPositionAfterChangeingDirectionAndMoved.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 177916600,
  "status": "passed"
});
formatter.before({
  "duration": 6461461900,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;26",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 4, 0, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 166268500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 72
    },
    {
      "val": "0",
      "offset": 75
    },
    {
      "val": "north",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 813251400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 104162000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 101861200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 181808000,
  "status": "passed"
});
formatter.after({
  "duration": 173220100,
  "status": "passed"
});
formatter.before({
  "duration": 5615493000,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;27",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 4, 4, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the left",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 114640400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 72
    },
    {
      "val": "4",
      "offset": 75
    },
    {
      "val": "north",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 842812900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "left",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 118895700,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 100293200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 221484500,
  "status": "passed"
});
formatter.after({
  "duration": 160860600,
  "status": "passed"
});
formatter.before({
  "duration": 6320976100,
  "status": "passed"
});
formatter.scenario({
  "line": 39,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;28",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 0, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 148042600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "0",
      "offset": 75
    },
    {
      "val": "north",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 778532700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 103423900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 102551900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 262440200,
  "status": "passed"
});
formatter.after({
  "duration": 225820600,
  "status": "passed"
});
formatter.before({
  "duration": 13300109600,
  "status": "passed"
});
formatter.scenario({
  "line": 40,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;29",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 4, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 494830800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "4",
      "offset": 75
    },
    {
      "val": "north",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 851204400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 104235300,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 100011800,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 311546700,
  "status": "passed"
});
formatter.after({
  "duration": 174020600,
  "status": "passed"
});
formatter.before({
  "duration": 9256758800,
  "status": "passed"
});
formatter.scenario({
  "line": 41,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;30",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 2, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 230344100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "2",
      "offset": 75
    },
    {
      "val": "north",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 874764900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 103602000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 98346100,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 291220700,
  "status": "passed"
});
formatter.after({
  "duration": 375213400,
  "status": "passed"
});
formatter.before({
  "duration": 12342093700,
  "status": "passed"
});
formatter.scenario({
  "line": 42,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;31",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 0, south",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 100562700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "0",
      "offset": 75
    },
    {
      "val": "south",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 831733200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 99187600,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 98639400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 72406000,
  "status": "passed"
});
formatter.after({
  "duration": 215208500,
  "status": "passed"
});
formatter.before({
  "duration": 8203041700,
  "status": "passed"
});
formatter.scenario({
  "line": 43,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;32",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 3, south",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 116006400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "3",
      "offset": 75
    },
    {
      "val": "south",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 925440000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 122561200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 130688700,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 61217600,
  "status": "passed"
});
formatter.after({
  "duration": 332043200,
  "status": "passed"
});
formatter.before({
  "duration": 8694164900,
  "status": "passed"
});
formatter.scenario({
  "line": 44,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;33",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 4, south",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 235656300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "4",
      "offset": 75
    },
    {
      "val": "south",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 866555900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 111495900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 98875400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 70753800,
  "status": "passed"
});
formatter.after({
  "duration": 290887800,
  "status": "passed"
});
formatter.before({
  "duration": 6131023100,
  "status": "passed"
});
formatter.scenario({
  "line": 45,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;34",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 0, east",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 110856900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "0",
      "offset": 75
    },
    {
      "val": "east",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 797640800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 118963200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 99207000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 28923700,
  "error_message": "java.lang.AssertionError: Unexpected behaviour\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat Steps.StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection(StepsToTestMovementInChangedDirection.java:148)\r\n\tat ✽.Then compare actual report with expected report after moving in the direction(BusPositionAfterChangeingDirectionAndMoved.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 225901100,
  "status": "passed"
});
formatter.before({
  "duration": 6375088200,
  "status": "passed"
});
formatter.scenario({
  "line": 46,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;35",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 1, east",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 86917200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "1",
      "offset": 75
    },
    {
      "val": "east",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 889977600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 127544600,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 119106500,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 220075900,
  "error_message": "org.junit.ComparisonFailure: Expected result is The bus is currently parked at X: 0 and Y: 0, facing south ,but actual result is The bus is currently parked at X: 1 and Y: 1, facing south expected:\u003c...rently parked at X: [0 and Y: 0], facing south\u003e but was:\u003c...rently parked at X: [1 and Y: 1], facing south\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat Steps.StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection(StepsToTestMovementInChangedDirection.java:154)\r\n\tat ✽.Then compare actual report with expected report after moving in the direction(BusPositionAfterChangeingDirectionAndMoved.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 172702400,
  "status": "passed"
});
formatter.before({
  "duration": 7682596700,
  "status": "passed"
});
formatter.scenario({
  "line": 47,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;36",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 4, east",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 125354900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "4",
      "offset": 75
    },
    {
      "val": "east",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 854449200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 109583900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 100152400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 189979500,
  "error_message": "org.junit.ComparisonFailure: Expected result is The bus is currently parked at X: 0 and Y: 3, facing south ,but actual result is The bus is currently parked at X: 1 and Y: 4, facing south expected:\u003c...rently parked at X: [0 and Y: 3], facing south\u003e but was:\u003c...rently parked at X: [1 and Y: 4], facing south\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat Steps.StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection(StepsToTestMovementInChangedDirection.java:154)\r\n\tat ✽.Then compare actual report with expected report after moving in the direction(BusPositionAfterChangeingDirectionAndMoved.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 186551100,
  "status": "passed"
});
formatter.before({
  "duration": 7230395900,
  "status": "passed"
});
formatter.scenario({
  "line": 48,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;37",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 0, west",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 131246100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "0",
      "offset": 75
    },
    {
      "val": "west",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 916283900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 115719400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 115118100,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 204028500,
  "status": "passed"
});
formatter.after({
  "duration": 2312465600,
  "status": "passed"
});
formatter.before({
  "duration": 7272410800,
  "status": "passed"
});
formatter.scenario({
  "line": 49,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;38",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 3, west",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 115814900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "3",
      "offset": 75
    },
    {
      "val": "west",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 940767900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 127325000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 96366800,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 649188300,
  "status": "passed"
});
formatter.after({
  "duration": 549035300,
  "status": "passed"
});
formatter.before({
  "duration": 6730967300,
  "status": "passed"
});
formatter.scenario({
  "line": 50,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;39",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 0, 4, west",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 92912300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "0",
      "offset": 72
    },
    {
      "val": "4",
      "offset": 75
    },
    {
      "val": "west",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 865509800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 96277800,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 99100900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 54150600,
  "status": "passed"
});
formatter.after({
  "duration": 170423700,
  "status": "passed"
});
formatter.before({
  "duration": 5996765400,
  "status": "passed"
});
formatter.scenario({
  "line": 51,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;40",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 1, 2, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 111602900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 72
    },
    {
      "val": "2",
      "offset": 75
    },
    {
      "val": "north",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 951062400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 119366000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 116289100,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 218005500,
  "status": "passed"
});
formatter.after({
  "duration": 217097000,
  "status": "passed"
});
formatter.before({
  "duration": 8231287300,
  "status": "passed"
});
formatter.scenario({
  "line": 52,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;41",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 2, 1, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 131835900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 72
    },
    {
      "val": "1",
      "offset": 75
    },
    {
      "val": "north",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 833308600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 103836600,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 98386700,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 203132600,
  "status": "passed"
});
formatter.after({
  "duration": 205254800,
  "status": "passed"
});
formatter.before({
  "duration": 6305761300,
  "status": "passed"
});
formatter.scenario({
  "line": 53,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;42",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 3, 3, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 96692200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 72
    },
    {
      "val": "3",
      "offset": 75
    },
    {
      "val": "north",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 869354200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 105873700,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 99173400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 203805000,
  "status": "passed"
});
formatter.after({
  "duration": 169774000,
  "status": "passed"
});
formatter.before({
  "duration": 5485239100,
  "status": "passed"
});
formatter.scenario({
  "line": 54,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;43",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 1, 2, south",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 109277800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 72
    },
    {
      "val": "2",
      "offset": 75
    },
    {
      "val": "south",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 981033600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 120079200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 115153000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 234835100,
  "status": "passed"
});
formatter.after({
  "duration": 300830800,
  "status": "passed"
});
formatter.before({
  "duration": 9135750900,
  "status": "passed"
});
formatter.scenario({
  "line": 55,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;44",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 2, 1, south",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 115744500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 72
    },
    {
      "val": "1",
      "offset": 75
    },
    {
      "val": "south",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 1016084600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 116082300,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 99907800,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 395487300,
  "status": "passed"
});
formatter.after({
  "duration": 181732800,
  "status": "passed"
});
formatter.before({
  "duration": 7147843600,
  "status": "passed"
});
formatter.scenario({
  "line": 56,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;45",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 3, 3, south",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 126648300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 72
    },
    {
      "val": "3",
      "offset": 75
    },
    {
      "val": "south",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 994434500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 123786300,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 116749400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 249778300,
  "status": "passed"
});
formatter.after({
  "duration": 208582200,
  "status": "passed"
});
formatter.before({
  "duration": 6423428700,
  "status": "passed"
});
formatter.scenario({
  "line": 57,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;46",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 1, 2, east",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 104067200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 72
    },
    {
      "val": "2",
      "offset": 75
    },
    {
      "val": "east",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 903754700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 111598100,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 99603300,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 225076000,
  "error_message": "org.junit.ComparisonFailure: Expected result is The bus is currently parked at X: 1 and Y: 1, facing south ,but actual result is The bus is currently parked at X: 2 and Y: 2, facing south expected:\u003c...rently parked at X: [1 and Y: 1], facing south\u003e but was:\u003c...rently parked at X: [2 and Y: 2], facing south\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat Steps.StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection(StepsToTestMovementInChangedDirection.java:154)\r\n\tat ✽.Then compare actual report with expected report after moving in the direction(BusPositionAfterChangeingDirectionAndMoved.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 204642100,
  "status": "passed"
});
formatter.before({
  "duration": 10597954700,
  "status": "passed"
});
formatter.scenario({
  "line": 58,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;47",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 2, 1, east",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 495789700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 72
    },
    {
      "val": "1",
      "offset": 75
    },
    {
      "val": "east",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 1479204300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 103748100,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 103710200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 734375800,
  "error_message": "org.junit.ComparisonFailure: Expected result is The bus is currently parked at X: 2 and Y: 0, facing south ,but actual result is The bus is currently parked at X: 3 and Y: 1, facing south expected:\u003c...rently parked at X: [2 and Y: 0], facing south\u003e but was:\u003c...rently parked at X: [3 and Y: 1], facing south\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat Steps.StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection(StepsToTestMovementInChangedDirection.java:154)\r\n\tat ✽.Then compare actual report with expected report after moving in the direction(BusPositionAfterChangeingDirectionAndMoved.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 221750500,
  "status": "passed"
});
formatter.before({
  "duration": 11890097400,
  "status": "passed"
});
formatter.scenario({
  "line": 59,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;48",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 3, 3, east",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 347764500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 72
    },
    {
      "val": "3",
      "offset": 75
    },
    {
      "val": "east",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 1393228500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 128233100,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 116705600,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 236975500,
  "error_message": "org.junit.ComparisonFailure: Expected result is The bus is currently parked at X: 3 and Y: 2, facing south ,but actual result is The bus is currently parked at X: 4 and Y: 3, facing south expected:\u003c...rently parked at X: [3 and Y: 2], facing south\u003e but was:\u003c...rently parked at X: [4 and Y: 3], facing south\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat Steps.StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection(StepsToTestMovementInChangedDirection.java:154)\r\n\tat ✽.Then compare actual report with expected report after moving in the direction(BusPositionAfterChangeingDirectionAndMoved.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 272517700,
  "status": "passed"
});
formatter.before({
  "duration": 7621703300,
  "status": "passed"
});
formatter.scenario({
  "line": 60,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;49",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 1, 2, west",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 138918600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 72
    },
    {
      "val": "2",
      "offset": 75
    },
    {
      "val": "west",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 1009682400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 103966000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 101323500,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 210265200,
  "status": "passed"
});
formatter.after({
  "duration": 303453600,
  "status": "passed"
});
formatter.before({
  "duration": 6854774800,
  "status": "passed"
});
formatter.scenario({
  "line": 61,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;50",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 2, 1, west",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 124321900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 72
    },
    {
      "val": "1",
      "offset": 75
    },
    {
      "val": "west",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 921925300,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 122583300,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 113018900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 217524600,
  "status": "passed"
});
formatter.after({
  "duration": 218611300,
  "status": "passed"
});
formatter.before({
  "duration": 10343510100,
  "status": "passed"
});
formatter.scenario({
  "line": 62,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;51",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 3, 3, west",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 190525700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 72
    },
    {
      "val": "3",
      "offset": 75
    },
    {
      "val": "west",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 959477100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 126532600,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 116318000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 430330700,
  "status": "passed"
});
formatter.after({
  "duration": 229501100,
  "status": "passed"
});
formatter.before({
  "duration": 6363529100,
  "status": "passed"
});
formatter.scenario({
  "line": 63,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;52",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 4, 0, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 162762500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 72
    },
    {
      "val": "0",
      "offset": 75
    },
    {
      "val": "north",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 867789100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 130815900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 118013400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 58681800,
  "status": "passed"
});
formatter.after({
  "duration": 181385700,
  "status": "passed"
});
formatter.before({
  "duration": 9383979500,
  "status": "passed"
});
formatter.scenario({
  "line": 64,
  "name": "Get position of Bus after changing direction and moving bus",
  "description": "",
  "id": "to-check-bus-position-after-direction-is-changed-and-moved;get-position-of-bus-after-changing-direction-and-moving-bus;;53",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test movement of bus after changing direction place bus initially at 4, 4, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click the right",
  "matchedColumns": [
    3
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "move the bus in defined direction",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected report after moving in the direction",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 139126800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 72
    },
    {
      "val": "4",
      "offset": 75
    },
    {
      "val": "north",
      "offset": 78
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.toTestMovementOfBusAfterChangingDirectionPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 933655100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "right",
      "offset": 10
    }
  ],
  "location": "StepsToTestMovementInChangedDirection.clickTheDirection(String)"
});
formatter.result({
  "duration": 122346300,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.moveTheBusInDefinedDirection()"
});
formatter.result({
  "duration": 116015300,
  "status": "passed"
});
formatter.match({
  "location": "StepsToTestMovementInChangedDirection.compareActualReportWithExpectedReportAfterMovingInTheDirection()"
});
formatter.result({
  "duration": 61317200,
  "status": "passed"
});
formatter.after({
  "duration": 194454400,
  "status": "passed"
});
formatter.uri("BusPositionAfterLeftClick.feature");
formatter.feature({
  "line": 1,
  "name": "To check if bus position is as expected after clicking left button",
  "description": "",
  "id": "to-check-if-bus-position-is-as-expected-after-clicking-left-button",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Get position of Bus after clicking left button",
  "description": "",
  "id": "to-check-if-bus-position-is-as-expected-after-clicking-left-button;get-position-of-bus-after-clicking-left-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "place bus initially at \u003cxAxis\u003e, \u003cyAxis\u003e, \u003cface\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click left",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "compare actual report with expected report after left click",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "to-check-if-bus-position-is-as-expected-after-clicking-left-button;get-position-of-bus-after-clicking-left-button;",
  "rows": [
    {
      "cells": [
        "xAxis",
        "yAxis",
        "face"
      ],
      "line": 10,
      "id": "to-check-if-bus-position-is-as-expected-after-clicking-left-button;get-position-of-bus-after-clicking-left-button;;1"
    },
    {
      "cells": [
        "1",
        "3",
        "north"
      ],
      "line": 11,
      "id": "to-check-if-bus-position-is-as-expected-after-clicking-left-button;get-position-of-bus-after-clicking-left-button;;2"
    },
    {
      "cells": [
        "2",
        "2",
        "east"
      ],
      "line": 12,
      "id": "to-check-if-bus-position-is-as-expected-after-clicking-left-button;get-position-of-bus-after-clicking-left-button;;3"
    },
    {
      "cells": [
        "3",
        "1",
        "south"
      ],
      "line": 13,
      "id": "to-check-if-bus-position-is-as-expected-after-clicking-left-button;get-position-of-bus-after-clicking-left-button;;4"
    },
    {
      "cells": [
        "1",
        "2",
        "west"
      ],
      "line": 14,
      "id": "to-check-if-bus-position-is-as-expected-after-clicking-left-button;get-position-of-bus-after-clicking-left-button;;5"
    },
    {
      "cells": [
        "4",
        "2",
        "west"
      ],
      "line": 15,
      "id": "to-check-if-bus-position-is-as-expected-after-clicking-left-button;get-position-of-bus-after-clicking-left-button;;6"
    },
    {
      "cells": [
        "4",
        "2",
        "north"
      ],
      "line": 16,
      "id": "to-check-if-bus-position-is-as-expected-after-clicking-left-button;get-position-of-bus-after-clicking-left-button;;7"
    },
    {
      "cells": [
        "4",
        "2",
        "south"
      ],
      "line": 17,
      "id": "to-check-if-bus-position-is-as-expected-after-clicking-left-button;get-position-of-bus-after-clicking-left-button;;8"
    },
    {
      "cells": [
        "4",
        "2",
        "east"
      ],
      "line": 18,
      "id": "to-check-if-bus-position-is-as-expected-after-clicking-left-button;get-position-of-bus-after-clicking-left-button;;9"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 11484000900,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Get position of Bus after clicking left button",
  "description": "",
  "id": "to-check-if-bus-position-is-as-expected-after-clicking-left-button;get-position-of-bus-after-clicking-left-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "place bus initially at 1, 3, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click left",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "compare actual report with expected report after left click",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 306134900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    },
    {
      "val": "3",
      "offset": 26
    },
    {
      "val": "north",
      "offset": 29
    }
  ],
  "location": "StepsToChangeDirectionUsingLeft.placeBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 1042474400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingLeft.clickLeft()"
});
formatter.result({
  "duration": 105425900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingLeft.compareActualReportWithExpectedReportAfterLeftClick()"
});
formatter.result({
  "duration": 369526600,
  "status": "passed"
});
formatter.after({
  "duration": 343059300,
  "status": "passed"
});
formatter.before({
  "duration": 23245005800,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Get position of Bus after clicking left button",
  "description": "",
  "id": "to-check-if-bus-position-is-as-expected-after-clicking-left-button;get-position-of-bus-after-clicking-left-button;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "place bus initially at 2, 2, east",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click left",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "compare actual report with expected report after left click",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 415677200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 23
    },
    {
      "val": "2",
      "offset": 26
    },
    {
      "val": "east",
      "offset": 29
    }
  ],
  "location": "StepsToChangeDirectionUsingLeft.placeBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 949310800,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingLeft.clickLeft()"
});
formatter.result({
  "duration": 112345600,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingLeft.compareActualReportWithExpectedReportAfterLeftClick()"
});
formatter.result({
  "duration": 476411200,
  "status": "passed"
});
formatter.after({
  "duration": 2081070700,
  "status": "passed"
});
formatter.before({
  "duration": 16054167400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Get position of Bus after clicking left button",
  "description": "",
  "id": "to-check-if-bus-position-is-as-expected-after-clicking-left-button;get-position-of-bus-after-clicking-left-button;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "place bus initially at 3, 1, south",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click left",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "compare actual report with expected report after left click",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 741434400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 23
    },
    {
      "val": "1",
      "offset": 26
    },
    {
      "val": "south",
      "offset": 29
    }
  ],
  "location": "StepsToChangeDirectionUsingLeft.placeBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 953452200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingLeft.clickLeft()"
});
formatter.result({
  "duration": 161082500,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingLeft.compareActualReportWithExpectedReportAfterLeftClick()"
});
formatter.result({
  "duration": 1114999600,
  "status": "passed"
});
formatter.after({
  "duration": 467660400,
  "status": "passed"
});
formatter.before({
  "duration": 10337162700,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Get position of Bus after clicking left button",
  "description": "",
  "id": "to-check-if-bus-position-is-as-expected-after-clicking-left-button;get-position-of-bus-after-clicking-left-button;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "place bus initially at 1, 2, west",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click left",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "compare actual report with expected report after left click",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 211339100,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 23
    },
    {
      "val": "2",
      "offset": 26
    },
    {
      "val": "west",
      "offset": 29
    }
  ],
  "location": "StepsToChangeDirectionUsingLeft.placeBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 990419900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingLeft.clickLeft()"
});
formatter.result({
  "duration": 113030400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingLeft.compareActualReportWithExpectedReportAfterLeftClick()"
});
formatter.result({
  "duration": 327000500,
  "status": "passed"
});
formatter.after({
  "duration": 161041400,
  "status": "passed"
});
formatter.before({
  "duration": 10549785900,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Get position of Bus after clicking left button",
  "description": "",
  "id": "to-check-if-bus-position-is-as-expected-after-clicking-left-button;get-position-of-bus-after-clicking-left-button;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "place bus initially at 4, 2, west",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click left",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "compare actual report with expected report after left click",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 84608900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 23
    },
    {
      "val": "2",
      "offset": 26
    },
    {
      "val": "west",
      "offset": 29
    }
  ],
  "location": "StepsToChangeDirectionUsingLeft.placeBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 20963301200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingLeft.clickLeft()"
});
formatter.result({
  "duration": 5077808500,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingLeft.compareActualReportWithExpectedReportAfterLeftClick()"
});
formatter.result({
  "duration": 5103365700,
  "error_message": "java.lang.AssertionError: Element not found, Unexpected behaviour\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat Steps.StepsToChangeDirectionUsingLeft.compareActualReportWithExpectedReportAfterLeftClick(StepsToChangeDirectionUsingLeft.java:58)\r\n\tat ✽.Then compare actual report with expected report after left click(BusPositionAfterLeftClick.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 891659200,
  "status": "passed"
});
formatter.before({
  "duration": 18748175400,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Get position of Bus after clicking left button",
  "description": "",
  "id": "to-check-if-bus-position-is-as-expected-after-clicking-left-button;get-position-of-bus-after-clicking-left-button;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "place bus initially at 4, 2, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click left",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "compare actual report with expected report after left click",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 727684900,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 23
    },
    {
      "val": "2",
      "offset": 26
    },
    {
      "val": "north",
      "offset": 29
    }
  ],
  "location": "StepsToChangeDirectionUsingLeft.placeBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 865295400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingLeft.clickLeft()"
});
formatter.result({
  "duration": 86818900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingLeft.compareActualReportWithExpectedReportAfterLeftClick()"
});
formatter.result({
  "duration": 112520000,
  "error_message": "java.lang.AssertionError: Element not found, Unexpected behaviour\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat Steps.StepsToChangeDirectionUsingLeft.compareActualReportWithExpectedReportAfterLeftClick(StepsToChangeDirectionUsingLeft.java:58)\r\n\tat ✽.Then compare actual report with expected report after left click(BusPositionAfterLeftClick.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 1910644200,
  "status": "passed"
});
formatter.before({
  "duration": 11293945200,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Get position of Bus after clicking left button",
  "description": "",
  "id": "to-check-if-bus-position-is-as-expected-after-clicking-left-button;get-position-of-bus-after-clicking-left-button;;8",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "place bus initially at 4, 2, south",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click left",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "compare actual report with expected report after left click",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 337433700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 23
    },
    {
      "val": "2",
      "offset": 26
    },
    {
      "val": "south",
      "offset": 29
    }
  ],
  "location": "StepsToChangeDirectionUsingLeft.placeBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 912418000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingLeft.clickLeft()"
});
formatter.result({
  "duration": 72541200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingLeft.compareActualReportWithExpectedReportAfterLeftClick()"
});
formatter.result({
  "duration": 94250100,
  "error_message": "java.lang.AssertionError: Element not found, Unexpected behaviour\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat Steps.StepsToChangeDirectionUsingLeft.compareActualReportWithExpectedReportAfterLeftClick(StepsToChangeDirectionUsingLeft.java:58)\r\n\tat ✽.Then compare actual report with expected report after left click(BusPositionAfterLeftClick.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 249189500,
  "status": "passed"
});
formatter.before({
  "duration": 12404247300,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Get position of Bus after clicking left button",
  "description": "",
  "id": "to-check-if-bus-position-is-as-expected-after-clicking-left-button;get-position-of-bus-after-clicking-left-button;;9",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "place bus initially at 4, 2, east",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click left",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "compare actual report with expected report after left click",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 186074800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 23
    },
    {
      "val": "2",
      "offset": 26
    },
    {
      "val": "east",
      "offset": 29
    }
  ],
  "location": "StepsToChangeDirectionUsingLeft.placeBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 981593500,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingLeft.clickLeft()"
});
formatter.result({
  "duration": 92594000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingLeft.compareActualReportWithExpectedReportAfterLeftClick()"
});
formatter.result({
  "duration": 107681200,
  "error_message": "java.lang.AssertionError: Element not found, Unexpected behaviour\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat Steps.StepsToChangeDirectionUsingLeft.compareActualReportWithExpectedReportAfterLeftClick(StepsToChangeDirectionUsingLeft.java:58)\r\n\tat ✽.Then compare actual report with expected report after left click(BusPositionAfterLeftClick.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 170985200,
  "status": "passed"
});
formatter.uri("BusPositionAfterMoveClick.feature");
formatter.feature({
  "line": 1,
  "name": "BusPositionAfterMove",
  "description": "This feature will test the position of the bus after clicking Move",
  "id": "buspositionaftermove",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button",
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
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;",
  "rows": [
    {
      "cells": [
        "xAxis",
        "yAxis",
        "face"
      ],
      "line": 11,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;1"
    },
    {
      "cells": [
        "3",
        "3",
        "east"
      ],
      "line": 12,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;2"
    },
    {
      "cells": [
        "1",
        "1",
        "west"
      ],
      "line": 13,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;3"
    },
    {
      "cells": [
        "0",
        "0",
        "north"
      ],
      "line": 14,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;4"
    },
    {
      "cells": [
        "0",
        "0",
        "north"
      ],
      "line": 15,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;5"
    },
    {
      "cells": [
        "0",
        "4",
        "north"
      ],
      "line": 16,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;6"
    },
    {
      "cells": [
        "0",
        "0",
        "south"
      ],
      "line": 17,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;7"
    },
    {
      "cells": [
        "0",
        "4",
        "south"
      ],
      "line": 18,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;8"
    },
    {
      "cells": [
        "0",
        "0",
        "east"
      ],
      "line": 19,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;9"
    },
    {
      "cells": [
        "0",
        "4",
        "east"
      ],
      "line": 20,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;10"
    },
    {
      "cells": [
        "0",
        "0",
        "west"
      ],
      "line": 21,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;11"
    },
    {
      "cells": [
        "0",
        "4",
        "west"
      ],
      "line": 22,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;12"
    },
    {
      "cells": [
        "1",
        "1",
        "north"
      ],
      "line": 23,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;13"
    },
    {
      "cells": [
        "2",
        "2",
        "south"
      ],
      "line": 24,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;14"
    },
    {
      "cells": [
        "3",
        "3",
        "east"
      ],
      "line": 25,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;15"
    },
    {
      "cells": [
        "1",
        "1",
        "west"
      ],
      "line": 26,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;16"
    },
    {
      "cells": [
        "4",
        "0",
        "north"
      ],
      "line": 27,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;17"
    },
    {
      "cells": [
        "4",
        "4",
        "north"
      ],
      "line": 28,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;18"
    },
    {
      "cells": [
        "0",
        "0",
        "north"
      ],
      "line": 29,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;19"
    },
    {
      "cells": [
        "0",
        "4",
        "north"
      ],
      "line": 30,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;20"
    },
    {
      "cells": [
        "0",
        "0",
        "south"
      ],
      "line": 31,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;21"
    },
    {
      "cells": [
        "0",
        "4",
        "south"
      ],
      "line": 32,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;22"
    },
    {
      "cells": [
        "0",
        "0",
        "east"
      ],
      "line": 33,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;23"
    },
    {
      "cells": [
        "0",
        "4",
        "east"
      ],
      "line": 34,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;24"
    },
    {
      "cells": [
        "0",
        "0",
        "west"
      ],
      "line": 35,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;25"
    },
    {
      "cells": [
        "0",
        "4",
        "west"
      ],
      "line": 36,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;26"
    },
    {
      "cells": [
        "4",
        "0",
        "north"
      ],
      "line": 37,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;27"
    },
    {
      "cells": [
        "4",
        "4",
        "north"
      ],
      "line": 38,
      "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;28"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8832465200,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;2",
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
  "duration": 365030100,
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
  "duration": 952888200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 214547800,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 620949800,
  "status": "passed"
});
formatter.after({
  "duration": 545326600,
  "status": "passed"
});
formatter.before({
  "duration": 8918263400,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;3",
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
  "duration": 280320200,
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
  "duration": 878756800,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 113721000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 680367700,
  "status": "passed"
});
formatter.after({
  "duration": 172380400,
  "status": "passed"
});
formatter.before({
  "duration": 10364892300,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;4",
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
  "duration": 429140600,
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
  "duration": 813089800,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 95640900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 452884800,
  "status": "passed"
});
formatter.after({
  "duration": 482300800,
  "status": "passed"
});
formatter.before({
  "duration": 14494117000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;5",
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
  "duration": 178813400,
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
  "duration": 812296000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 106634600,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 690788100,
  "status": "passed"
});
formatter.after({
  "duration": 194669800,
  "status": "passed"
});
formatter.before({
  "duration": 16552758300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;6",
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
  "duration": 121128100,
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
  "duration": 1146820200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 108045600,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 65041200,
  "status": "passed"
});
formatter.after({
  "duration": 567351900,
  "status": "passed"
});
formatter.before({
  "duration": 12112907600,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;7",
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
  "duration": 288292500,
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
  "duration": 948808400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 106187700,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 22259400,
  "error_message": "java.lang.AssertionError: Unexpected Behaviour found\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat Steps.StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved(StepsToMoveBusByOneStep.java:110)\r\n\tat ✽.Then compare actual report with expected report when moved(BusPositionAfterMoveClick.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 158039500,
  "status": "passed"
});
formatter.before({
  "duration": 9776650100,
  "status": "passed"
});
formatter.scenario({
  "line": 18,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;8",
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
  "duration": 183965800,
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
  "duration": 908094900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 128868300,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 689406600,
  "error_message": "org.junit.ComparisonFailure: Expected result is The bus is currently parked at X: 0 and Y: 3, facing south ,but actual result is The bus is currently parked at X: 1 and Y: 4, facing south expected:\u003c...rently parked at X: [0 and Y: 3], facing south\u003e but was:\u003c...rently parked at X: [1 and Y: 4], facing south\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat Steps.StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved(StepsToMoveBusByOneStep.java:118)\r\n\tat ✽.Then compare actual report with expected report when moved(BusPositionAfterMoveClick.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 389878600,
  "status": "passed"
});
formatter.before({
  "duration": 14533753700,
  "status": "passed"
});
formatter.scenario({
  "line": 19,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;9",
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
  "duration": 100352000,
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
  "duration": 788744900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 101298900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 636375300,
  "status": "passed"
});
formatter.after({
  "duration": 412858300,
  "status": "passed"
});
formatter.before({
  "duration": 12289658500,
  "status": "passed"
});
formatter.scenario({
  "line": 20,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;10",
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
  "duration": 420978600,
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
  "duration": 977944100,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 106394900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 370035400,
  "status": "passed"
});
formatter.after({
  "duration": 795108000,
  "status": "passed"
});
formatter.before({
  "duration": 14978307200,
  "status": "passed"
});
formatter.scenario({
  "line": 21,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;11",
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
  "duration": 119197700,
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
  "duration": 858496100,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 105928000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 84740500,
  "status": "passed"
});
formatter.after({
  "duration": 355255000,
  "status": "passed"
});
formatter.before({
  "duration": 9750031700,
  "status": "passed"
});
formatter.scenario({
  "line": 22,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;12",
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
  "duration": 335863800,
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
  "duration": 1028906300,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 120008400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 84587600,
  "status": "passed"
});
formatter.after({
  "duration": 226840300,
  "status": "passed"
});
formatter.before({
  "duration": 12598015400,
  "status": "passed"
});
formatter.scenario({
  "line": 23,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;13",
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
  "duration": 104819700,
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
  "duration": 865322500,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 95762700,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 628006100,
  "status": "passed"
});
formatter.after({
  "duration": 260959100,
  "status": "passed"
});
formatter.before({
  "duration": 10413225600,
  "status": "passed"
});
formatter.scenario({
  "line": 24,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;14",
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
  "duration": 450300100,
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
  "duration": 998100200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 107276500,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 279513700,
  "error_message": "org.junit.ComparisonFailure: Expected result is The bus is currently parked at X: 2 and Y: 1, facing south ,but actual result is The bus is currently parked at X: 3 and Y: 2, facing south expected:\u003c...rently parked at X: [2 and Y: 1], facing south\u003e but was:\u003c...rently parked at X: [3 and Y: 2], facing south\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat Steps.StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved(StepsToMoveBusByOneStep.java:118)\r\n\tat ✽.Then compare actual report with expected report when moved(BusPositionAfterMoveClick.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 187554400,
  "status": "passed"
});
formatter.before({
  "duration": 6541983700,
  "status": "passed"
});
formatter.scenario({
  "line": 25,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;15",
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
  "duration": 521404100,
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
  "duration": 954048300,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 132781800,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 197706800,
  "status": "passed"
});
formatter.after({
  "duration": 178803500,
  "status": "passed"
});
formatter.before({
  "duration": 6389882000,
  "status": "passed"
});
formatter.scenario({
  "line": 26,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;16",
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
  "duration": 100873300,
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
  "duration": 1079873600,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 122304200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 163709200,
  "status": "passed"
});
formatter.after({
  "duration": 352991200,
  "status": "passed"
});
formatter.before({
  "duration": 6054341500,
  "status": "passed"
});
formatter.scenario({
  "line": 27,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;17",
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
  "duration": 92260500,
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
  "duration": 918278200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 105736900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 333148300,
  "status": "passed"
});
formatter.after({
  "duration": 236620000,
  "status": "passed"
});
formatter.before({
  "duration": 9160149800,
  "status": "passed"
});
formatter.scenario({
  "line": 28,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;18",
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
  "duration": 870788100,
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
  "duration": 913353200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 107258000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 54188300,
  "status": "passed"
});
formatter.after({
  "duration": 215855000,
  "status": "passed"
});
formatter.before({
  "duration": 8387304400,
  "status": "passed"
});
formatter.scenario({
  "line": 29,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;19",
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
  "duration": 111569600,
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
  "duration": 806905000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 116157200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 296672000,
  "status": "passed"
});
formatter.after({
  "duration": 235549400,
  "status": "passed"
});
formatter.before({
  "duration": 9279386800,
  "status": "passed"
});
formatter.scenario({
  "line": 30,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;20",
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
  "duration": 115692100,
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
  "duration": 840968900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 101451400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 62494500,
  "status": "passed"
});
formatter.after({
  "duration": 258855900,
  "status": "passed"
});
formatter.before({
  "duration": 9949382500,
  "status": "passed"
});
formatter.scenario({
  "line": 31,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;21",
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
  "duration": 389919300,
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
  "duration": 909823200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 120073300,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 28654800,
  "error_message": "java.lang.AssertionError: Unexpected Behaviour found\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat Steps.StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved(StepsToMoveBusByOneStep.java:110)\r\n\tat ✽.Then compare actual report with expected report when moved(BusPositionAfterMoveClick.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 332615700,
  "status": "passed"
});
formatter.before({
  "duration": 7247365200,
  "status": "passed"
});
formatter.scenario({
  "line": 32,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;22",
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
  "duration": 93317700,
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
  "duration": 837921000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 95375700,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 306722200,
  "error_message": "org.junit.ComparisonFailure: Expected result is The bus is currently parked at X: 0 and Y: 3, facing south ,but actual result is The bus is currently parked at X: 1 and Y: 4, facing south expected:\u003c...rently parked at X: [0 and Y: 3], facing south\u003e but was:\u003c...rently parked at X: [1 and Y: 4], facing south\u003e\r\n\tat org.junit.Assert.assertEquals(Assert.java:115)\r\n\tat Steps.StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved(StepsToMoveBusByOneStep.java:118)\r\n\tat ✽.Then compare actual report with expected report when moved(BusPositionAfterMoveClick.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 237331800,
  "status": "passed"
});
formatter.before({
  "duration": 13724266200,
  "status": "passed"
});
formatter.scenario({
  "line": 33,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;23",
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
  "duration": 321703600,
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
  "duration": 841528900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 95090400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 395213800,
  "status": "passed"
});
formatter.after({
  "duration": 397367300,
  "status": "passed"
});
formatter.before({
  "duration": 9027879400,
  "status": "passed"
});
formatter.scenario({
  "line": 34,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;24",
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
  "duration": 314667100,
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
  "duration": 890003300,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 116320900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 402535200,
  "status": "passed"
});
formatter.after({
  "duration": 298728800,
  "status": "passed"
});
formatter.before({
  "duration": 5610954200,
  "status": "passed"
});
formatter.scenario({
  "line": 35,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;25",
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
  "duration": 87181600,
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
  "duration": 812184000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 104864300,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 54819600,
  "status": "passed"
});
formatter.after({
  "duration": 207173300,
  "status": "passed"
});
formatter.before({
  "duration": 13958344400,
  "status": "passed"
});
formatter.scenario({
  "line": 36,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;26",
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
  "duration": 188363900,
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
  "duration": 864280500,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 103443500,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 66993700,
  "status": "passed"
});
formatter.after({
  "duration": 196958400,
  "status": "passed"
});
formatter.before({
  "duration": 8608117200,
  "status": "passed"
});
formatter.scenario({
  "line": 37,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;27",
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
  "duration": 204314200,
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
  "duration": 829528000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 98907200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 338051100,
  "status": "passed"
});
formatter.after({
  "duration": 228316400,
  "status": "passed"
});
formatter.before({
  "duration": 9311419800,
  "status": "passed"
});
formatter.scenario({
  "line": 38,
  "name": "Get position of Bus after clicking move by changing direction using left button",
  "description": "",
  "id": "buspositionaftermove;get-position-of-bus-after-clicking-move-by-changing-direction-using-left-button;;28",
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
  "duration": 116294700,
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
  "duration": 940881900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.clickMove()"
});
formatter.result({
  "duration": 122930200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToMoveBusByOneStep.compareActualReportWithExpectedReportWhenMoved()"
});
formatter.result({
  "duration": 55873000,
  "status": "passed"
});
formatter.after({
  "duration": 213044500,
  "status": "passed"
});
formatter.uri("BusPositionAfterPlaceClick.feature");
formatter.feature({
  "line": 1,
  "name": "BusPosition",
  "description": "This feature will test the position of the Bus in the Car Park",
  "id": "busposition",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 4,
  "name": "Get position of the bus after placement",
  "description": "",
  "id": "busposition;get-position-of-the-bus-after-placement",
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
  "name": "place bus at \u003cxAxis\u003e, \u003cyAxis\u003e, \u003cface\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click place",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected result",
  "keyword": "Then "
});
formatter.examples({
  "line": 10,
  "name": "",
  "description": "",
  "id": "busposition;get-position-of-the-bus-after-placement;",
  "rows": [
    {
      "cells": [
        "xAxis",
        "yAxis",
        "face"
      ],
      "line": 11,
      "id": "busposition;get-position-of-the-bus-after-placement;;1"
    },
    {
      "cells": [
        "1",
        "3",
        "north"
      ],
      "line": 12,
      "id": "busposition;get-position-of-the-bus-after-placement;;2"
    },
    {
      "cells": [
        "2",
        "2",
        "east"
      ],
      "line": 13,
      "id": "busposition;get-position-of-the-bus-after-placement;;3"
    },
    {
      "cells": [
        "3",
        "1",
        "south"
      ],
      "line": 14,
      "id": "busposition;get-position-of-the-bus-after-placement;;4"
    },
    {
      "cells": [
        "1",
        "2",
        "west"
      ],
      "line": 15,
      "id": "busposition;get-position-of-the-bus-after-placement;;5"
    },
    {
      "cells": [
        "4",
        "2",
        "south"
      ],
      "line": 16,
      "id": "busposition;get-position-of-the-bus-after-placement;;6"
    },
    {
      "cells": [
        "4",
        "2",
        "east"
      ],
      "line": 17,
      "id": "busposition;get-position-of-the-bus-after-placement;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8814781400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Get position of the bus after placement",
  "description": "",
  "id": "busposition;get-position-of-the-bus-after-placement;;2",
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
  "name": "place bus at 1, 3, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click place",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected result",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 227023000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    },
    {
      "val": "3",
      "offset": 16
    },
    {
      "val": "north",
      "offset": 19
    }
  ],
  "location": "StepsToPlaceBus.placeBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 796625000,
  "status": "passed"
});
formatter.match({
  "location": "StepsToPlaceBus.clickPlace()"
});
formatter.result({
  "duration": 122973400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToPlaceBus.compareActualReportWithExpectedResult()"
});
formatter.result({
  "duration": 218054000,
  "status": "passed"
});
formatter.after({
  "duration": 224143200,
  "status": "passed"
});
formatter.before({
  "duration": 6719835500,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Get position of the bus after placement",
  "description": "",
  "id": "busposition;get-position-of-the-bus-after-placement;;3",
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
  "name": "place bus at 2, 2, east",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click place",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected result",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 144420000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 13
    },
    {
      "val": "2",
      "offset": 16
    },
    {
      "val": "east",
      "offset": 19
    }
  ],
  "location": "StepsToPlaceBus.placeBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 761603900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToPlaceBus.clickPlace()"
});
formatter.result({
  "duration": 89451900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToPlaceBus.compareActualReportWithExpectedResult()"
});
formatter.result({
  "duration": 293670200,
  "status": "passed"
});
formatter.after({
  "duration": 180557500,
  "status": "passed"
});
formatter.before({
  "duration": 7398073900,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Get position of the bus after placement",
  "description": "",
  "id": "busposition;get-position-of-the-bus-after-placement;;4",
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
  "name": "place bus at 3, 1, south",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click place",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected result",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 159186500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 13
    },
    {
      "val": "1",
      "offset": 16
    },
    {
      "val": "south",
      "offset": 19
    }
  ],
  "location": "StepsToPlaceBus.placeBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 866526500,
  "status": "passed"
});
formatter.match({
  "location": "StepsToPlaceBus.clickPlace()"
});
formatter.result({
  "duration": 104173400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToPlaceBus.compareActualReportWithExpectedResult()"
});
formatter.result({
  "duration": 265768200,
  "status": "passed"
});
formatter.after({
  "duration": 180168300,
  "status": "passed"
});
formatter.before({
  "duration": 8227008000,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Get position of the bus after placement",
  "description": "",
  "id": "busposition;get-position-of-the-bus-after-placement;;5",
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
  "name": "place bus at 1, 2, west",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click place",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected result",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 238516200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 13
    },
    {
      "val": "2",
      "offset": 16
    },
    {
      "val": "west",
      "offset": 19
    }
  ],
  "location": "StepsToPlaceBus.placeBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 870873300,
  "status": "passed"
});
formatter.match({
  "location": "StepsToPlaceBus.clickPlace()"
});
formatter.result({
  "duration": 104353800,
  "status": "passed"
});
formatter.match({
  "location": "StepsToPlaceBus.compareActualReportWithExpectedResult()"
});
formatter.result({
  "duration": 285447200,
  "status": "passed"
});
formatter.after({
  "duration": 195302400,
  "status": "passed"
});
formatter.before({
  "duration": 6048267300,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Get position of the bus after placement",
  "description": "",
  "id": "busposition;get-position-of-the-bus-after-placement;;6",
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
  "name": "place bus at 4, 2, south",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click place",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected result",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 113547200,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 13
    },
    {
      "val": "2",
      "offset": 16
    },
    {
      "val": "south",
      "offset": 19
    }
  ],
  "location": "StepsToPlaceBus.placeBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 888897800,
  "status": "passed"
});
formatter.match({
  "location": "StepsToPlaceBus.clickPlace()"
});
formatter.result({
  "duration": 86091100,
  "status": "passed"
});
formatter.match({
  "location": "StepsToPlaceBus.compareActualReportWithExpectedResult()"
});
formatter.result({
  "duration": 103265200,
  "error_message": "java.lang.AssertionError: Element not found, Unexpected behaviour\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat Steps.StepsToPlaceBus.compareActualReportWithExpectedResult(StepsToPlaceBus.java:55)\r\n\tat ✽.Then compare actual report with expected result(BusPositionAfterPlaceClick.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 177056300,
  "status": "passed"
});
formatter.before({
  "duration": 6765825300,
  "status": "passed"
});
formatter.scenario({
  "line": 17,
  "name": "Get position of the bus after placement",
  "description": "",
  "id": "busposition;get-position-of-the-bus-after-placement;;7",
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
  "name": "place bus at 4, 2, east",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "click place",
  "keyword": "And "
});
formatter.step({
  "line": 8,
  "name": "compare actual report with expected result",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 107953800,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 13
    },
    {
      "val": "2",
      "offset": 16
    },
    {
      "val": "east",
      "offset": 19
    }
  ],
  "location": "StepsToPlaceBus.placeBusAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 925565800,
  "status": "passed"
});
formatter.match({
  "location": "StepsToPlaceBus.clickPlace()"
});
formatter.result({
  "duration": 84118800,
  "status": "passed"
});
formatter.match({
  "location": "StepsToPlaceBus.compareActualReportWithExpectedResult()"
});
formatter.result({
  "duration": 97791100,
  "error_message": "java.lang.AssertionError: Element not found, Unexpected behaviour\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat Steps.StepsToPlaceBus.compareActualReportWithExpectedResult(StepsToPlaceBus.java:55)\r\n\tat ✽.Then compare actual report with expected result(BusPositionAfterPlaceClick.feature:8)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 257830200,
  "status": "passed"
});
formatter.uri("BusPositionAfterRightClick.feature");
formatter.feature({
  "line": 1,
  "name": "To check if bus position is as expected after clicking right button",
  "description": "",
  "id": "to-check-if-bus-position-is-as-expected-after-clicking-right-button",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "line": 3,
  "name": "Get position of Bus after clicking right button",
  "description": "",
  "id": "to-check-if-bus-position-is-as-expected-after-clicking-right-button;get-position-of-bus-after-clicking-right-button",
  "type": "scenario_outline",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test Right Click button place bus initially at \u003cxAxis\u003e, \u003cyAxis\u003e, \u003cface\u003e",
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click right",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "compare actual report with expected report after right click",
  "keyword": "Then "
});
formatter.examples({
  "line": 9,
  "name": "",
  "description": "",
  "id": "to-check-if-bus-position-is-as-expected-after-clicking-right-button;get-position-of-bus-after-clicking-right-button;",
  "rows": [
    {
      "cells": [
        "xAxis",
        "yAxis",
        "face"
      ],
      "line": 10,
      "id": "to-check-if-bus-position-is-as-expected-after-clicking-right-button;get-position-of-bus-after-clicking-right-button;;1"
    },
    {
      "cells": [
        "1",
        "3",
        "north"
      ],
      "line": 11,
      "id": "to-check-if-bus-position-is-as-expected-after-clicking-right-button;get-position-of-bus-after-clicking-right-button;;2"
    },
    {
      "cells": [
        "2",
        "2",
        "east"
      ],
      "line": 12,
      "id": "to-check-if-bus-position-is-as-expected-after-clicking-right-button;get-position-of-bus-after-clicking-right-button;;3"
    },
    {
      "cells": [
        "3",
        "1",
        "south"
      ],
      "line": 13,
      "id": "to-check-if-bus-position-is-as-expected-after-clicking-right-button;get-position-of-bus-after-clicking-right-button;;4"
    },
    {
      "cells": [
        "1",
        "2",
        "west"
      ],
      "line": 14,
      "id": "to-check-if-bus-position-is-as-expected-after-clicking-right-button;get-position-of-bus-after-clicking-right-button;;5"
    },
    {
      "cells": [
        "4",
        "2",
        "north"
      ],
      "line": 15,
      "id": "to-check-if-bus-position-is-as-expected-after-clicking-right-button;get-position-of-bus-after-clicking-right-button;;6"
    },
    {
      "cells": [
        "4",
        "2",
        "west"
      ],
      "line": 16,
      "id": "to-check-if-bus-position-is-as-expected-after-clicking-right-button;get-position-of-bus-after-clicking-right-button;;7"
    }
  ],
  "keyword": "Examples"
});
formatter.before({
  "duration": 8396515100,
  "status": "passed"
});
formatter.scenario({
  "line": 11,
  "name": "Get position of Bus after clicking right button",
  "description": "",
  "id": "to-check-if-bus-position-is-as-expected-after-clicking-right-button;get-position-of-bus-after-clicking-right-button;;2",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test Right Click button place bus initially at 1, 3, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click right",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "compare actual report with expected report after right click",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 165469700,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 50
    },
    {
      "val": "3",
      "offset": 53
    },
    {
      "val": "north",
      "offset": 56
    }
  ],
  "location": "StepsToChangeDirectionUsingRight.toTestRightClickButtonPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 945358700,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingRight.clickRight()"
});
formatter.result({
  "duration": 137539200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingRight.compareActualReportWithExpectedReportAfterRightClick()"
});
formatter.result({
  "duration": 223235000,
  "status": "passed"
});
formatter.after({
  "duration": 173145800,
  "status": "passed"
});
formatter.before({
  "duration": 6578374400,
  "status": "passed"
});
formatter.scenario({
  "line": 12,
  "name": "Get position of Bus after clicking right button",
  "description": "",
  "id": "to-check-if-bus-position-is-as-expected-after-clicking-right-button;get-position-of-bus-after-clicking-right-button;;3",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test Right Click button place bus initially at 2, 2, east",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click right",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "compare actual report with expected report after right click",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 113937000,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "2",
      "offset": 50
    },
    {
      "val": "2",
      "offset": 53
    },
    {
      "val": "east",
      "offset": 56
    }
  ],
  "location": "StepsToChangeDirectionUsingRight.toTestRightClickButtonPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 1059026900,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingRight.clickRight()"
});
formatter.result({
  "duration": 103014100,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingRight.compareActualReportWithExpectedReportAfterRightClick()"
});
formatter.result({
  "duration": 242920400,
  "status": "passed"
});
formatter.after({
  "duration": 225843700,
  "status": "passed"
});
formatter.before({
  "duration": 5737467100,
  "status": "passed"
});
formatter.scenario({
  "line": 13,
  "name": "Get position of Bus after clicking right button",
  "description": "",
  "id": "to-check-if-bus-position-is-as-expected-after-clicking-right-button;get-position-of-bus-after-clicking-right-button;;4",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test Right Click button place bus initially at 3, 1, south",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click right",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "compare actual report with expected report after right click",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 144880600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "3",
      "offset": 50
    },
    {
      "val": "1",
      "offset": 53
    },
    {
      "val": "south",
      "offset": 56
    }
  ],
  "location": "StepsToChangeDirectionUsingRight.toTestRightClickButtonPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 860686400,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingRight.clickRight()"
});
formatter.result({
  "duration": 110651700,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingRight.compareActualReportWithExpectedReportAfterRightClick()"
});
formatter.result({
  "duration": 226943300,
  "status": "passed"
});
formatter.after({
  "duration": 199550100,
  "status": "passed"
});
formatter.before({
  "duration": 8535831100,
  "status": "passed"
});
formatter.scenario({
  "line": 14,
  "name": "Get position of Bus after clicking right button",
  "description": "",
  "id": "to-check-if-bus-position-is-as-expected-after-clicking-right-button;get-position-of-bus-after-clicking-right-button;;5",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test Right Click button place bus initially at 1, 2, west",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click right",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "compare actual report with expected report after right click",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 147085500,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "1",
      "offset": 50
    },
    {
      "val": "2",
      "offset": 53
    },
    {
      "val": "west",
      "offset": 56
    }
  ],
  "location": "StepsToChangeDirectionUsingRight.toTestRightClickButtonPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 944430200,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingRight.clickRight()"
});
formatter.result({
  "duration": 117802700,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingRight.compareActualReportWithExpectedReportAfterRightClick()"
});
formatter.result({
  "duration": 230510300,
  "status": "passed"
});
formatter.after({
  "duration": 225707800,
  "status": "passed"
});
formatter.before({
  "duration": 11728750400,
  "status": "passed"
});
formatter.scenario({
  "line": 15,
  "name": "Get position of Bus after clicking right button",
  "description": "",
  "id": "to-check-if-bus-position-is-as-expected-after-clicking-right-button;get-position-of-bus-after-clicking-right-button;;6",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test Right Click button place bus initially at 4, 2, north",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click right",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "compare actual report with expected report after right click",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 171308600,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 50
    },
    {
      "val": "2",
      "offset": 53
    },
    {
      "val": "north",
      "offset": 56
    }
  ],
  "location": "StepsToChangeDirectionUsingRight.toTestRightClickButtonPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 933648600,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingRight.clickRight()"
});
formatter.result({
  "duration": 83659800,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingRight.compareActualReportWithExpectedReportAfterRightClick()"
});
formatter.result({
  "duration": 108740600,
  "error_message": "java.lang.AssertionError: Element not found, Unexpected behaviour\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat Steps.StepsToChangeDirectionUsingRight.compareActualReportWithExpectedReportAfterRightClick(StepsToChangeDirectionUsingRight.java:58)\r\n\tat ✽.Then compare actual report with expected report after right click(BusPositionAfterRightClick.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 172216800,
  "status": "passed"
});
formatter.before({
  "duration": 11726864900,
  "status": "passed"
});
formatter.scenario({
  "line": 16,
  "name": "Get position of Bus after clicking right button",
  "description": "",
  "id": "to-check-if-bus-position-is-as-expected-after-clicking-right-button;get-position-of-bus-after-clicking-right-button;;7",
  "type": "scenario",
  "keyword": "Scenario Outline"
});
formatter.step({
  "line": 4,
  "name": "load bus in a car park page",
  "keyword": "Given "
});
formatter.step({
  "line": 5,
  "name": "to test Right Click button place bus initially at 4, 2, west",
  "matchedColumns": [
    0,
    1,
    2
  ],
  "keyword": "And "
});
formatter.step({
  "line": 6,
  "name": "click right",
  "keyword": "And "
});
formatter.step({
  "line": 7,
  "name": "compare actual report with expected report after right click",
  "keyword": "Then "
});
formatter.match({
  "location": "StepsToPlaceBus.loadBusInACarParkPage()"
});
formatter.result({
  "duration": 113208400,
  "status": "passed"
});
formatter.match({
  "arguments": [
    {
      "val": "4",
      "offset": 50
    },
    {
      "val": "2",
      "offset": 53
    },
    {
      "val": "west",
      "offset": 56
    }
  ],
  "location": "StepsToChangeDirectionUsingRight.toTestRightClickButtonPlaceBusInitiallyAtXAxisYAxisFace(String,String,String)"
});
formatter.result({
  "duration": 1264571500,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingRight.clickRight()"
});
formatter.result({
  "duration": 83559300,
  "status": "passed"
});
formatter.match({
  "location": "StepsToChangeDirectionUsingRight.compareActualReportWithExpectedReportAfterRightClick()"
});
formatter.result({
  "duration": 96712000,
  "error_message": "java.lang.AssertionError: Element not found, Unexpected behaviour\r\n\tat org.junit.Assert.fail(Assert.java:88)\r\n\tat org.junit.Assert.assertTrue(Assert.java:41)\r\n\tat Steps.StepsToChangeDirectionUsingRight.compareActualReportWithExpectedReportAfterRightClick(StepsToChangeDirectionUsingRight.java:58)\r\n\tat ✽.Then compare actual report with expected report after right click(BusPositionAfterRightClick.feature:7)\r\n",
  "status": "failed"
});
formatter.after({
  "duration": 281302800,
  "status": "passed"
});
});