INFO:
Programming Language: Java 8
Project Build Management Tool : Maven
Automate Browser : Selenium WebDriver 3.141.59
Testing Framework Type: Behavior Driven Development(BDD) - Data-Driven Testing(DDT)
    -Test Case's are written in Gherkin
    - implementing DDT by using Scenario Outlines and Examples
Structure : Page Object Model Design Pattern
            Singleton Design Pattern (for Driver)
Reporting Tool:
    - Cucumber HTML Report with Maven Surefire
        File type: cucumber.json
        * If you execute the code with maven life cycle by using (verify)  generate Cucumber HTML report
          or execute with terminal "mvn verify"  generate Cucumber HTML report
        * You can see all detail about the execution which are each step, % fail - pass
    - Default HTML Report
        * If you can execute with the CukesRunner class , only create Default HTML report

You can change browser type in the configuration.properties file. ConfigurationReader help us to read this file.

Terminal : u can use mvn verify -Dbrowser=BROWSERTYPE or
            u can change tag without using IDEA mvn verify -Dcucumber.options='--tags @smoke OR whatever u want'

My Driver Class Capabilities :  - Parallel execution
                                - Support many different type of browser
                                - Remote driver (Selenium Grid or Jenkins)
      * I created one local hub and node in my local by using terminal
                 - For hub : java -jar selenium-server-standalone-3.141.59.jar -role hub
           (*Creating connection between Hub and Node)
                 - For node : java -Dwebdriver.chrome.driver="chromedriver" -jar selenium-server-standalone-3.141.59.jar -role node
                                                                                        -hub http://localhost:4444/grid/register/
CI/CD - Jenkins :

        -In the , *Source Code Management Section I feed the our script  by using Git Repository
                  *Build Trigger section I use cron expression for scheduling the execute
                  *Build section I choose Invoke Top-level Maven target 'cause my test script developed by using Maven and written Java
                  *Post-build Actions I set the report mech. and e-mail notifications/alert

About rerun.txt file : Whenever the test case failed , wrote the test case info then Failed cukes runner run again

