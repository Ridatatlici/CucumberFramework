package com.amazon.step_definitions;

import com.amazon.pages.LoginPage;
import com.amazon.pages.MainPage;
import com.amazon.utilities.Driver;
import io.cucumber.java.en.And;
import io.cucumber.java.en.Then;
import org.junit.Assert;
import org.openqa.selenium.interactions.Actions;

public class LogoutStepDefs {
    @And("user should be able to click logout button")
    public void user_should_be_able_to_click_logout_button() {
        Actions actions = new Actions(Driver.get());
        actions.moveToElement(new LoginPage().signoutHoverover);
       new MainPage().logoutButton.click();
    }

    @Then("user should be able to login page")
    public void user_should_be_able_to_login_page() {
        Assert.assertEquals("Amazon Giriş Yap",new MainPage().getPageTitle());
    }

}
