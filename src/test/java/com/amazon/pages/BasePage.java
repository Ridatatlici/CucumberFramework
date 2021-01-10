package com.amazon.pages;

import com.amazon.utilities.Driver;
import org.openqa.selenium.WebElement;
import org.openqa.selenium.support.CacheLookup;
import org.openqa.selenium.support.FindAll;
import org.openqa.selenium.support.FindBy;
import org.openqa.selenium.support.PageFactory;
import org.openqa.selenium.support.ui.ExpectedConditions;
import org.openqa.selenium.support.ui.WebDriverWait;

public abstract class BasePage {

    public BasePage() {
        PageFactory.initElements(Driver.get(), this);
    }

    @FindBy(xpath = "//input[@id='twotabsearchtextbox']")
    public WebElement searcInputBox;

    @FindBy(xpath = "//input[@id='nav-search-submit-button']")
    public WebElement searchIcon;

    @FindBy(css = "#nav-cart")
    public WebElement basket;

    @FindBy(css = "#nav-orders")
    public WebElement ordersAndReturn;


    /**
     * When you click amazon logo , refreshes the page
     */
    @FindBy(css = "#nav-logo-sprites")
    public WebElement amazonLogo;

    @FindBy(css = "#searchDropdownBox")
    public WebElement catagories;

    @FindBy(id = "//a[@id='nav-link-accountList']")
    public WebElement Account;

    @FindBy(css = "div[class='loader-mask shown']")
    @CacheLookup
    protected WebElement loaderMask;

    @FindBy(css = "#nav-item-signout")
    public WebElement logoutButton;

    /**
     * @return page name, for example: Amazon Giriş Yap or Amazon: Araba
     */
    public String getPageTitle() {
        //ant time we are verifying page name, or page subtitle, loader mask appears
        waitUntilLoaderScreenDisappear();

        return Driver.get().getTitle();
    }


    /**
     * Waits until loader screen present. If loader screen will not pop up at all,
     * NoSuchElementException will be handled  bu try/catch block
     * Thus, we can continue in any case.
     */
    public void waitUntilLoaderScreenDisappear() {
        try {
            WebDriverWait wait = new WebDriverWait(Driver.get(), 5);
            wait.until(ExpectedConditions.invisibilityOf(loaderMask));
        } catch (Exception e) {
            e.printStackTrace();
        }

    }

}
