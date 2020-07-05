let studentpage=function()
{
    let txtname=element(by.name("name"));
    let txtcontact= element(by.name("contact"));
    let txtsubject= element(by.name("subject"));
    let txtmark= element(by.name("marks"));
    let submit=element(by.css('input[value="Submit"]'));

    this.get=function(url)
    {
        browser.get(url);
    }

    this.setName=function(name)
    {
        txtname.sendKeys(name);
    }

    this.setContact=function(contact)
    {
        txtcontact.sendKeys(contact);
    }

    this.setSubject=function(subject)
    {
        txtsubject.element(by.xpath("//option[text()='"+subject+"']")).click();
    }

    this.setMark=function(mark)
    {
        txtmark.sendKeys(mark);
    }

    this.clkSubmit=function()
    {
        submit.click();
    }

    this.verifyResult=function(name,contact,subject,mark)
    {
      let rows=  element.all(by.tagName('tr'));

    let tablename= rows.get(0).element(by.xpath("//td[2]")).getText();
    let tablecontact= rows.get(0).element(by.xpath("//td[3]")).getText();
    let tablesubject= rows.get(0).element(by.xpath("//td[4]")).getText();
    let tablemarks= rows.get(0).element(by.xpath("//td[5]")).getText();

    expect(tablename).toBe(name);
    expect(tablecontact).toBe(contact);
    expect(tablesubject).toBe(subject);
    expect(tablemarks).toBe(mark);

    }

};

module.exports=new studentpage();