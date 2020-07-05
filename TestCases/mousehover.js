describe("mouse hover", function()
{
    it("login and perform mouse hover", function()
    {   
        browser.waitForAngularEnabled(false);
        browser.get("https://opensource-demo.orangehrmlive.com/");
        browser.sleep(3000);
        browser.manage().window().maximize();
        
        element(by.id("txtUsername")).sendKeys("Admin");
        element(by.id("txtPassword")).sendKeys("admin123");
        element(by.id("btnLogin")).click();
        browser.sleep(3000);

        var admin=element(by.id("menu_admin_viewAdminModule"));
        var submenu=element(by.id("menu_admin_UserManagement"));
        var option=element(by.id("menu_admin_viewSystemUsers"));

        browser.actions().mouseMove(admin).mouseMove(submenu).mouseMove(option).click().perform();
        browser.sleep();




    })
})