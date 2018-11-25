Feature: To check if bus position is as expected after clicking left button

  Scenario Outline: Test for position of Bus after clicking left button
    Given load bus in a car park page
    And place bus initially at <xAxis>, <yAxis>, <face>
    And click left
    Then compare actual report with expected report after left click

    Examples:
      |xAxis  |yAxis  |face |
      |1      |3      |north|
      |1      |2      |west |
      |4      |2      |west |
      |4      |2      |north|
      |4      |2      |south|
      |4      |2      |east |
