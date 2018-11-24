Feature: To check if bus position is as expected after clicking right button

  Scenario Outline: Test for position of Bus after clicking right button
    Given load bus in a car park page
    And to test Right Click button place bus initially at <xAxis>, <yAxis>, <face>
    And click right
    Then compare actual report with expected report after right click

    Examples:
      |xAxis  |yAxis  |face |
      |1      |3      |north|
      |2      |2      |east |
      |3      |1      |south|
      |1      |2      |west |
      |4      |2      |north|
      |4      |2      |west |