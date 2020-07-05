let studentpage=require('../pages/student')

describe("my suite", function()
{
    it("add record", function()
    {
        studentpage.get("https://www.trycatchclasses.com/code/demo/angular4_crud/");
        studentpage.setName("john");
        studentpage.setContact("3456");
        studentpage.setSubject("CSS")
        studentpage.setMark("100")
        studentpage.clkSubmit();
        browser.sleep(5000);

        studentpage.verifyResult("john","3456","CSS","100");
        browser.sleep(5000);

    })
})