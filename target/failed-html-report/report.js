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
      "name": "@smoke"
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
      "name": "@smoke"
    }
  ]
});
formatter.before({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d87.0.4280.141)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MAC-MacBook-Air\u0027, ip: \u0027fe80:0:0:0:1c:3c6d:9c94:4e3f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/01/_d4rgngs0zg...}, goog:chromeOptions: {debuggerAddress: localhost:54833}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true, webdriver.remote.sessionid: d9fbbbb0c400c696d336a3104fb...}\nSession ID: d9fbbbb0c400c696d336a3104fbf58d1\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver$RemoteWebDriverOptions$RemoteWindow.maximize(RemoteWebDriver.java:837)\n\tat com.amazon.step_definitions.Hooks.setUp(Hooks.java:17)\n",
  "status": "failed"
});
formatter.step({
  "name": "User able to go to website",
  "keyword": "Given "
});
formatter.match({
  "location": "com.amazon.step_definitions.LoginStepDefs.user_able_to_go_to_website()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should able to hover over account area",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.LoginStepDefs.user_should_able_to_hover_over_account_area()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should able to click login button",
  "keyword": "And "
});
formatter.match({
  "location": "com.amazon.step_definitions.LoginStepDefs.user_should_able_to_click_login_button()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be able to see login page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.amazon.step_definitions.LoginStepDefs.user_should_be_able_to_see_login_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "the user enters \"ridatat@gmail.com\" and \".07sDet+\"",
  "keyword": "When "
});
formatter.match({
  "location": "com.amazon.step_definitions.LoginStepDefs.the_user_enters_and(java.lang.String,java.lang.String)"
});
formatter.result({
  "status": "skipped"
});
formatter.step({
  "name": "user should be on the main page",
  "keyword": "Then "
});
formatter.match({
  "location": "com.amazon.step_definitions.LoginStepDefs.user_should_be_on_the_main_page()"
});
formatter.result({
  "status": "skipped"
});
formatter.after({
  "error_message": "org.openqa.selenium.NoSuchWindowException: no such window: window was already closed\n  (Session info: chrome\u003d87.0.4280.141)\nBuild info: version: \u00273.141.59\u0027, revision: \u0027e82be7d358\u0027, time: \u00272018-11-14T08:17:03\u0027\nSystem info: host: \u0027MAC-MacBook-Air\u0027, ip: \u0027fe80:0:0:0:1c:3c6d:9c94:4e3f%en0\u0027, os.name: \u0027Mac OS X\u0027, os.arch: \u0027x86_64\u0027, os.version: \u002710.15.7\u0027, java.version: \u002714.0.1\u0027\nDriver info: org.openqa.selenium.remote.RemoteWebDriver\nCapabilities {acceptInsecureCerts: false, browserName: chrome, browserVersion: 87.0.4280.141, chrome: {chromedriverVersion: 86.0.4240.22 (398b0743353ff..., userDataDir: /var/folders/01/_d4rgngs0zg...}, goog:chromeOptions: {debuggerAddress: localhost:54833}, javascriptEnabled: true, networkConnectionEnabled: false, pageLoadStrategy: normal, platform: MAC, platformName: MAC, proxy: Proxy(), setWindowRect: true, strictFileInteractability: false, timeouts: {implicit: 0, pageLoad: 300000, script: 30000}, unhandledPromptBehavior: dismiss and notify, webauthn:virtualAuthenticators: true, webdriver.remote.sessionid: d9fbbbb0c400c696d336a3104fb...}\nSession ID: d9fbbbb0c400c696d336a3104fbf58d1\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance0(Native Method)\n\tat java.base/jdk.internal.reflect.NativeConstructorAccessorImpl.newInstance(NativeConstructorAccessorImpl.java:62)\n\tat java.base/jdk.internal.reflect.DelegatingConstructorAccessorImpl.newInstance(DelegatingConstructorAccessorImpl.java:45)\n\tat java.base/java.lang.reflect.Constructor.newInstanceWithCaller(Constructor.java:500)\n\tat java.base/java.lang.reflect.Constructor.newInstance(Constructor.java:481)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.createException(W3CHttpResponseCodec.java:187)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:122)\n\tat org.openqa.selenium.remote.http.W3CHttpResponseCodec.decode(W3CHttpResponseCodec.java:49)\n\tat org.openqa.selenium.remote.HttpCommandExecutor.execute(HttpCommandExecutor.java:158)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:552)\n\tat org.openqa.selenium.remote.RemoteWebDriver.execute(RemoteWebDriver.java:609)\n\tat org.openqa.selenium.remote.RemoteWebDriver.getScreenshotAs(RemoteWebDriver.java:295)\n\tat com.amazon.step_definitions.Hooks.tearDown(Hooks.java:23)\n",
  "status": "failed"
});
});