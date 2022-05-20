Feature: Screenshots

Scenario: Screenshots affect the rendering of elements on the page
  Given I have reached the test site
  When I scroll a bit
    And I take a screenshot
  Then you should notice elements bouncing around and rendering weird