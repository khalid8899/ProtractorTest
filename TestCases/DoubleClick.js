describe("double click", function()
{
  /*  it("double click", function()
    {   browser.waitForAngularEnabled(false);
        browser.get("http://testautomationpractice.blogspot.com/");
        browser.sleep(3000);
        browser.manage().window().maximize();
        browser.sleep(3000);
        var button= element(by.xpath("//button[contains(text(),'Copy Text')]"));

       //1st approach
  /*     browser.actions().mouseMove(button).doubleClick().perform();
       browser.sleep(3000);  */

       //2nd approach
   //    browser.actions().doubleClick(button).perform(); 

 //   })  

 /*   it("right click", function()
    {
        browser.waitForAngularEnabled(false);
        browser.get("https://swisnl.github.io/jQuery-contextMenu/demo.html");
        browser.manage().window().maximize();
        browser.sleep(3000);
        var btn= element(by.className("context-menu-one btn btn-neutral"));
        browser.actions().click(btn, protractor.Button.RIGHT).perform();
        browser.sleep(5000);
        element(by.xpath("//span[text()='Edit']/..")).click();

    })*/

    it("drag drop", function()
    {
        browser.get("https://codef0rmer.github.io/angular-dragdrop/#!/");
        browser.manage().window().maximize();
        browser.sleep(3000);

        var source= element(by.model("list1"));
        var target= element.all(by.model("list2")).get(0);
        browser.actions().dragAndDrop(source,target).perform();
        browser.sleep(5000);

    })
})