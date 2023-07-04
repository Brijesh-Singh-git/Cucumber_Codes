$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/Features/DemoExample.feature");
formatter.feature({
  "name": "feature is to test the Login functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smoketest"
    }
  ]
});
formatter.scenario({
  "name": "Check Login is successful with valid credentials",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smoketest"
    }
  ]
});
formatter.step({
  "name": "user is on the Login Page",
  "keyword": "Given "
});
formatter.match({
  "location": "Step_Definations.DemoSteps.user_is_on_the_Login_Page()"
});
formatter.result({
  "error_message": "io.cucumber.java.PendingException: TODO: implement me\r\n\tat Step_Definations.DemoSteps.user_is_on_the_Login_Page(DemoSteps.java:12)\r\n\tat ✽.user is on the Login Page(file:///G:/INFOSYS%20Lectures%20\u0026%20Codes/CUCUMBER%20CODES/Cucumber_Codes/src/test/resources/Features/DemoExample.feature:6)\r\n",
  "status": "pending"
});
formatter.step({
  "name": "user enters the username and password",
  "keyword": "When "
});
formatter.match({
  "location": "Step_Definations.DemoSteps.user_enters_the_username_and_password()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "Clicks the login button",
  "keyword": "And "
});
formatter.match({
  "location": "Step_Definations.DemoSteps.clicks_the_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user is naviagted to the home page",
  "keyword": "Then "
});
formatter.match({
  "location": "Step_Definations.DemoSteps.the_user_is_naviagted_to_the_home_page()"
});
formatter.result({
  "status": "skipped"
});
});