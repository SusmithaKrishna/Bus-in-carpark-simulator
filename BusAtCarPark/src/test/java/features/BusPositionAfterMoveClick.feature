Feature: BusPositionAfterMove
  This feature will test the position of the bus after clicking Move

  Scenario Outline: Test for position of Bus after clicking move button
    Given load bus in a car park page
    And place the bus at <xAxis>, <yAxis>, <face>
    And click move
    Then compare actual report with expected report when moved

    Examples:
      |xAxis  |yAxis  |face   |
      |3      |	3     |	east  |
      |1      |	1     |	west  |
      |0      |	0     |	south |
      |0      |	4     |	south |
      |1      |	1     |	north |
      |2      |	2     |	south |
      |3      |	3     |	east  |
      |1      |	1     |	west  |




