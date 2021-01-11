$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Login.feature");
formatter.feature({
  "name": "Login Functionality",
  "description": "",
  "keyword": "Feature"
});
formatter.scenarioOutline({
  "name": "User should able to login with valid credential - Happy Path",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smokee"
    }
  ]
});
formatter.step({
  "name": "User able to go to website",
  "keyword": "Given "
});
formatter.step({
  "name": "user should able to hover over account area",
  "keyword": "And "
});
formatter.step({
  "name": "user should able to click login button",
  "keyword": "And "
});
formatter.step({
  "name": "user should be able to see login page",
  "keyword": "Then "
});
formatter.step({
  "name": "the user enters \"\u003cusername\u003e\" and \"\u003cpassword\u003e\"",
  "keyword": "When "
});
formatter.step({
  "name": "user should be on the main page",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "username",
        "password"
      ]
    },
    {
      "cells": [
        "ridatat@gmail.com",
        ".07sDet+"
      ]
    }
  ]
});
formatter.scenario({
  "name": "User should able to login with valid credential - Happy Path",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@smokee"
    }
  ]
});
formatter.before({
  "status": "passed"
});
formatter.step({
  "name": "User able to go to website",
  "keyword": "Given "
});
formatter.match({
  "location": "com.amazon.step_definitions.LoginStepDefs.user_able_to_go_to_website()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should able to hover over account area",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.LoginStepDefs.user_should_able_to_hover_over_account_area()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should able to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.LoginStepDefs.user_should_able_to_click_login_button()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be able to see login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.amazon.step_definitions.LoginStepDefs.user_should_be_able_to_see_login_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "the user enters \"ridatat@gmail.com\" and \".07sDet+\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.amazon.step_definitions.LoginStepDefs.the_user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should be on the main page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.amazon.step_definitions.LoginStepDefs.user_should_be_on_the_main_page()"
});
formatter.result({
  "error_message": "org.junit.ComparisonFailure: expected:\u003cAmazon[.com.tr: Elektronik, bilgisayar, akıllı telefon, kitap, oyuncak, yapı market, ev, mutfak, oyun konsolları ürünleri ve daha fazlası için internet alışveriş sitesi]\u003e but was:\u003cAmazon[]\u003e\n\tat org.junit.Assert.assertEquals(Assert.java:117)\n\tat org.junit.Assert.assertEquals(Assert.java:146)\n\tat com.amazon.step_definitions.LoginStepDefs.user_should_be_on_the_main_page(LoginStepDefs.java:78)\n\tat ✽.user should be on the main page(file:///Users/mac/IdeaProjects/CucumberFramework/src/test/resources/features/Login.feature:9)\n",
  "status": "failed"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});