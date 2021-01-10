$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Basket.feature");
formatter.feature({
  "name": "Basket Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.scenarioOutline({
  "name": "User should be able to put some product on your basket",
  "description": "",
  "keyword": "Scenario Outline"
});
formatter.step({
  "name": "user should able to write \"\u003cproductName\u003e\" on the searching area",
  "keyword": "And "
});
formatter.step({
  "name": "user should able to click search icon",
  "keyword": "And "
});
formatter.step({
  "name": "user should able to see result page",
  "keyword": "Then "
});
formatter.step({
  "name": "user should able to see related product",
  "keyword": "And "
});
formatter.step({
  "name": "user should able to click random item",
  "keyword": "And "
});
formatter.step({
  "name": "user should be able to on the pdp",
  "keyword": "Then "
});
formatter.step({
  "name": "user should be able to add product on your basket",
  "keyword": "And "
});
formatter.step({
  "name": "user should able to click basket icon",
  "keyword": "And "
});
formatter.step({
  "name": "user should see same product",
  "keyword": "Then "
});
formatter.examples({
  "name": "",
  "description": "",
  "keyword": "Examples",
  "rows": [
    {
      "cells": [
        "productName"
      ]
    },
    {
      "cells": [
        "televizyon"
      ]
    },
    {
      "cells": [
        "kumanda"
      ]
    },
    {
      "cells": [
        "pil"
      ]
    }
  ]
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "name": "the user enters \"username\"  \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.amazon.step_definitions.LoginStepDefs.the_user_enters(java.lang.String,java.lang.String)"
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
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to put some product on your basket",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user should able to write \"televizyon\" on the searching area",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.SearchStepDefs.user_should_able_to_write_on_the_searching_area(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should able to click search icon",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.SearchStepDefs.user_should_able_to_click_search_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should able to see result page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.amazon.step_definitions.SearchStepDefs.user_should_able_to_see_result_page()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should able to see related product",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.SearchStepDefs.user_should_able_to_see_related_product()"
});
formatter.result({
  "error_message": "java.lang.AssertionError: expected:\u003c48\u003e but was:\u003c0\u003e\n\tat org.junit.Assert.fail(Assert.java:89)\n\tat org.junit.Assert.failNotEquals(Assert.java:835)\n\tat org.junit.Assert.assertEquals(Assert.java:647)\n\tat org.junit.Assert.assertEquals(Assert.java:633)\n\tat com.amazon.step_definitions.SearchStepDefs.user_should_able_to_see_related_product(SearchStepDefs.java:57)\n\tat ✽.user should able to see related product(file:///Users/mac/IdeaProjects/CucumberFramework/src/test/resources/features/Basket.feature:17)\n",
  "status": "failed"
});
formatter.step({
  "name": "user should able to click random item",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.SearchStepDefs.user_should_able_to_click_random_item()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to on the pdp",
  "keyword": "Then "
});
formatter.match({
  "location": "com.amazon.step_definitions.ProductDetailStepDefs.user_should_be_able_to_on_the_pdp()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to add product on your basket",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.ProductDetailStepDefs.user_should_be_able_to_add_product_on_your_basket()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should able to click basket icon",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.BasketStepDefs.user_should_able_to_click_basket_icon()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should see same product",
  "keyword": "Then "
});
formatter.match({
  "location": "com.amazon.step_definitions.BasketStepDefs.user_should_see_same_product()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
formatter.background({
  "name": "",
  "description": "",
  "keyword": "Background"
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
  "name": "the user enters \"username\"  \"password\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.amazon.step_definitions.LoginStepDefs.the_user_enters(java.lang.String,java.lang.String)"
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
  "status": "passed"
});
formatter.scenario({
  "name": "User should be able to put some product on your basket",
  "description": "",
  "keyword": "Scenario Outline",
  "tags": [
    {
      "name": "@wip"
    }
  ]
});
formatter.step({
  "name": "user should able to write \"kumanda\" on the searching area",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.SearchStepDefs.user_should_able_to_write_on_the_searching_area(java.lang.String)"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should able to click search icon",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.SearchStepDefs.user_should_able_to_click_search_icon()"
});
formatter.result({
  "status": "passed"
});
formatter.step({
  "name": "user should able to see result page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.amazon.step_definitions.SearchStepDefs.user_should_able_to_see_result_page()"
});
