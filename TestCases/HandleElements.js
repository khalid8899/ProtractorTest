describe("Test case2", function()
{
  /*  it("add new user",function()
    {
      //  browser.get("http://www.trycatchclasses.com/code/demo/angular_crud/#");
        var url="http://www.trycatchclasses.com/code/demo/angular_crud/#";
        browser.get(url);
        browser.sleep(3000);
        let abc = browser.switchTo().alert();
        abc.accept();
        browser.manage().window().maximize();
        element(by.css('span[ng-click="addUser()"]')).click();

        browser.executeScript('window.scrollTo(0,10000);').then(function () {
        console.log('++++++SCROLLED Down+++++');
        });
        browser.sleep(3000);
        var fname=element(by.model("UserFirstname"));
        fname.sendKeys("khalid");
        element(by.model("UserLastname")).sendKeys("shaikh");
        element(by.model("UserType")).sendKeys("6");
        element(by.model("UserActive")).click();
        element(by.css('input[ng-click="AddUpdateUser()"]')).click();
        browser.sleep(3000);
        let alert= browser.switchTo().alert();
      //  expect(alert.getText()).toEqual("OK");
        alert.accept();
        browser.sleep(3000);
        //drop down
        element(by.model("search.type")).element(by.css('option[value="number:5"]')).click();
        browser.sleep(3000);


    }) */

    beforeAll(function()
    {   
        
        browser.get("https://dassdevarajan.github.io/demo-app/ ");
        browser.sleep(5000);
    })


    it("view prduct details",function()
    {
       element.all(by.tagName('tr')).last().element(by.id('view')).click();
       browser.sleep(2000);
       expect(element(by.tagName('h3')).getText()).toBe('Product View')
       expect(element.all(by.tagName('tr')).get(0).element(by.tagName('td')).getText()).toBe("1001 Activities Book");

    })

    it("go back to prd", function()
    {
       element(by.id('list-menu')).click();
       expect( element(by.tagName('h3')).getText()).toBe("Product List");
       

    })

    it("delete product", function()
    {
        element.all(by.tagName('tr')).get(1).element(by.id('delete')).click();
        browser.sleep(3000);
    })
    

});