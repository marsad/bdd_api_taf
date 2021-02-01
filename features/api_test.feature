Feature: API Test
  Testing API TAF with Postman Echo service

  ##########################################################
  ### Main scenario - doesn't run properly :(            ###
  ##########################################################
  Scenario: Cookies manipulation
    When I set cookies in Postman Echo service
    Then I expect to see provided cookies in the response body
    When I send GET request again
    Then I expect to see cookies which were previously set
    When I delete one cookie
    Then I expect not to see deleted cookie only those remained

  ##########################################################
  ### Additional scenario to check the TAF is functional ###
  ##########################################################
  Scenario: Making a basic GET request to Postman Echo service 
    When I make a simple GET request I expect OK status code

