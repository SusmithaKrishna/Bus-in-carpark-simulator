Feature: To check bus position after direction is changed and moved

  Scenario Outline: Test for position of Bus after changing direction, and moving bus
    Given load bus in a car park page
    And to test movement of bus after changing direction place bus initially at <xAxis>, <yAxis>, <face>
    And click the <direction>
    And move the bus in defined direction
    Then compare actual report with expected report after moving in the direction

    Examples:
      |xAxis  |yAxis  |face   |direction  |

      |0      |	0     |	north |	left      |
      |0      |	4     |	north |	left      |
      |0      |	2     |	north |	left      |
      |0      |	0     |	south |	left      |
      |0      |	3     |	south |	left      |
      |0      |	4     |	south |	left      |
      |0      |	0     |	east  |	left      |
      |0      |	1     |	east  |	left      |
      |0      |	4     |	east  |	left      |
      |0      |	0     |	west  |	left      |
      |0      |	3     |	west  |	left      |
      |0      |	4     |	west  |	left      |
      |1      |	2     |	north |	left      |
      |2      |	1     |	north |	left      |
      |3      |	3     |	north |	left      |
      |1      |	2     |	south |	left      |
      |2      |	1     |	south |	left      |
      |3      |	3     |	south |	left      |
      |1      |	2     |	east  |	left      |
      |2      |	1     |	east  |	left      |
      |3      |	3     |	east  |	left      |
      |1      |	2     |	west  |	left      |
      |2      |	1     |	west  |	left      |
      |3      |	3     |	west  |	left      |
      |4      |	0     |	north |	left      |
      |4      |	4     |	north |	left      |
      |0      |	0     |	north |	right     |
      |0      |	4     |	north |	right     |
      |0      |	2     |	north |	right     |
      |0      |	0     |	south |	right     |
      |0      |	3     |	south |	right     |
      |0      |	4     |	south |	right     |
      |0      |	0     |	east  |	right     |
      |0      |	1     |	east  |	right     |
      |0      |	4     |	east  |	right     |
      |0      |	0     |	west  |	right     |
      |0      |	3     |	west  |	right     |
      |0      |	4     |	west  |	right     |
      |1      |	2     |	north |	right     |
      |2      |	1     |	north |	right     |
      |3      |	3     |	north |	right     |
      |1      |	2     |	south |	right     |
      |2      |	1     |	south |	right     |
      |3      |	3     |	south |	right     |
      |1      |	2     |	east  |	right     |
      |2      |	1     |	east  |	right     |
      |3      |	3     |	east  |	right     |
      |1      |	2     |	west  |	right     |
      |2      |	1     |	west  |	right     |
      |3      |	3     |	west  |	right     |
      |4      |	0     |	north |	right     |
      |4      |	4     |	north |	right     |

