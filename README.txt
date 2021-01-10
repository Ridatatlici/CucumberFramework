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
    - Default HTML Report
        * If you can execute with the CukesRunner class , only create Default HTML report

You can change browser type in the configuration.properties file. ConfigurationReader help us to read this file.

My Driver Class Capabilities :  - Parallel execution
                                - Support many different type of browser
                                - Remote driver (Selenium Grid or Jenkins)
      * I created one local hub and node in my local by using terminal
                 - For hub : java -jar selenium-server-standalone-3.141.59.jar -role hub
           (*Creating connection between Hub and Node)
                 - For node : java -Dwebdriver.chrome.driver="chromedriver" -jar selenium-server-standalone-3.141.59.jar -role node
                                                                                        -hub http://localhost:4444/grid/register/




