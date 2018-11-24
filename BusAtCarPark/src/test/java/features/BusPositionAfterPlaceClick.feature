Feature: BusPosition
  This feature will test the position of the Bus in the Car Park

  Scenario Outline: Test for position of the bus after clicking place button
    Given load bus in a car park page
    And place bus at <xAxis>, <yAxis>, <face>
    And click place
    Then compare actual report with expected result

    Examples:
      |xAxis  |yAxis  |face |
      |1      |3      |north|
      |2      |2      |east |
      |3      |1      |south|
      |1      |2      |west |
      |4      |2      |south|
      |4      |2      |east |
