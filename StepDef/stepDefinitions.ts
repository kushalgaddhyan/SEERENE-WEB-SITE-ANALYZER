import { Given , When , Then    } from "cucumber";
import{protractor, $, ExpectedConditions} from "protractor";

import chai = require('chai');


import {analyzeWebSite} from "../PageObjects/analyzeWebSite";
import { browser } from "protractor";
import { threadId } from "worker_threads";

let obj = new analyzeWebSite();
chai.use(require('chai-smoothie'));
var expect = chai.expect;
// let EC = protractor.ExpectedConditions;
//     let condition = EC.textToBePresentInElement((obj.Exp),'h1');


  Given('User launches the website analyzer url', async function() {

    await browser.get(obj.baseUrl);
   

});


Then('the page should display the text field and button', async function() {


    await expect(obj.inputUrlTextBox).to.be.present;
    console.log("******************************************");
    console.log("Input text for url is present");
    console.log("******************************************");
    await expect(obj.startBtn).to.be.present;
    console.log("******************************************");
    console.log("Start Button for url analysis is present");
    console.log("******************************************");
});

Then('user validates the page title', async function() {

   await browser.getTitle().then(title=> {
   
    expect(title).to.equal(obj.title);
    console.log("******************************************");
    console.log("The title of the analyzer web site is " + title);
    console.log("******************************************");
   });

});

Given('User enters the input url in the text box', async function(){

     await obj.inputUrlTextBox.sendKeys(obj.inputUrl);

});

Then('User clicks on Start button', async function() {


    await obj.startBtn.click();
    
}) ;

Then('User waits for the results to be displayed',async function(){

    
   //await browser.wait(condition, obj.explicit_Wait);
  await browser.sleep(obj.explicit_Wait);

      
}
);

Then('User validates the results',async function(){

await obj.htmlVersion.getText().then(html_version =>{
    expect(html_version).to.equal(obj.html_version);
    console.log("******************************************");
    console.log("The html version of the result is " + html_version);
    console.log("******************************************");


})

await obj.pageTitle.getText().then(pagetitle =>{
    expect(pagetitle).to.equal(obj.page_title);
    console.log("******************************************");
    console.log("The page Title of the result is " + pagetitle);
    console.log("******************************************");
});


await obj.internalLinks.getText().then(intLinks =>{
    expect(intLinks).to.equal(obj.internal_links);
    console.log("******************************************");
    console.log("The internal links of the result is " + intLinks);
    console.log("******************************************");
});


await obj.externalLinks.getText().then(extLinks =>{
    expect(extLinks).to.equal(obj.external_links);
    console.log("******************************************");
    console.log("The external links of the result is " + extLinks);
    console.log("******************************************");
});


await obj.inaccessibleLinks.getText().then(inacc_Links =>{
    expect(inacc_Links).to.equal(obj.inaccess_links);
    console.log("******************************************");
    console.log("The inaccessible links  of the result is " + inacc_Links);
    console.log("******************************************"); 
});


await obj.loginForm.getText().then(login_form =>{
    expect(login_form).to.equal(obj.login_form);
    console.log("******************************************");
    console.log("The login form of the result is " + login_form);
    console.log("******************************************");
});

await obj.HeaderList.count().then(count => {
    console.log("******************************************");
    console.log("The number of headings in the table is " + count);
    console.log("******************************************");
    console.log("The number of levels of headings in the table is(starting from 0) " + (count-1));
    console.log("******************************************");
});

})















