$(document).ready(function() {var formatter = new CucumberHTML.DOMFormatter($('.cucumber-report'));formatter.uri("file:src/test/resources/features/Logout.feature");
formatter.feature({
  "name": "Logout Functionality",
  "description": "",
  "keyword": "Feature",
  "tags": [
    {
      "name": "@smokee"
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
formatter.scenario({
  "name": "User should able to logout",
  "description": "",
  "keyword": "Scenario",
  "tags": [
    {
      "name": "@smokee"
    }
  ]
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
  "name": "user should be able to click logout button",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.LogoutStepDefs.user_should_be_able_to_click_logout_button()"
});
formatter.result({
  "error_message": "org.openqa.selenium.NoSuchElementException: no such element: Unable to locate element: {\"method\":\"css selector\",\"selector\":\"#nav-item-signout\"}\n  (Session info: chrome\u003d87.0.4280.141)\nFor documentation on this error, please visit: https://www.seleniumhq.org/exceptions/no_such_element.html\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MAC-MacBook-Air\u0027, ip: \u0027fe80:0:0:0:1c:3c6d:9c94:4e3f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u00271.8.0_231\u0027\nDriver info: org.openqa.selenium.chrome.ChromeDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 87.0.4280.88 (89e2380a3e36c..., userDataDir: /var/folders/01/_d4rgngs0zg...}, goog:chromeOptions: {debuggerAddress: localhost:59427}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true}\nSession ID: f9e00dd02b8a42182cc1e198317a41e6\n*** Element info: {Using\u003dcss selector, value\u003d#nav-item-signout}\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat sun.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat sun.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.lang.reflect.Constructor.newInstance(Constructor.java:423)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.service.DriverCommandExecutor.execute(DriverCommandExecutor.java:83)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:323)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElementByCssSelector(RemoteWebDriver.java:420)\n\tat org.openqa.selenium.By$ByCssSelector.findElement(By.java:431)\n\tat org.openqa.selenium.remote.RemoteWebDriver.findElement(RemoteWebDriver.java:315)\n\tat org.openqa.selenium.support.pagefactory.DefaultElementLocator.findElement(DefaultElementLocator.java:69)\n\tat org.openqa.selenium.support.pagefactory.internal.LocatingElementHandler.invoke(LocatingElementHandler.java:38)\n\tat com.sun.proxy.$Proxy18.click(Unknown Source)\n\tat com.amazon.step_definitions.LogoutStepDefs.user_should_be_able_to_click_logout_button(LogoutStepDefs.java:16)\n\tat ✽.user should be able to click logout button(file:///Users/mac/IdeaProjects/CucumberFramework/src/test/resources/features/Logout.feature:14)\n",
  "status": "failed"
});
formatter.step({
  "name": "user should be able to login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.amazon.step_definitions.LogoutStepDefs.user_should_be_able_to_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.embedding("image/png", "embedded0.png", "screenshot");
formatter.after({
  "status": "passed"
});
});