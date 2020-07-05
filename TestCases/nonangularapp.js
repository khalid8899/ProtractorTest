describe("ny suite", function()
{

    it("non angular app", function()
    {   
        //add below step for running non angular app
      //  browser.waitForAngularEnabled(false);
       browser.ignoreSynchronization=true;
       //end

        browser.get("http://demowebshop.tricentis.com/");
        browser.manage().window().maximize();
        element(by.id('small-searchterms')).sendKeys("laptop ");
        browser.sleep(3000);
        element(by.className('ui-menu-item')).element(by.tagName('a')).click();
        browser.sleep(3000);
    //    element(by.xpath("(//input[@type='submit'])[1]")).click();
        browser.sleep(3000);
        expect(element(by.css('img[alt="Picture of 14.1-inch Laptop"]')).isPresent()).toBe(true);

    })


})