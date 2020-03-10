"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const cucumber_1 = require("cucumber");
const chai = require("chai");
const analyzeWebSite_1 = require("../PageObjects/analyzeWebSite");
const protractor_1 = require("protractor");
let obj = new analyzeWebSite_1.analyzeWebSite();
chai.use(require('chai-smoothie'));
var expect = chai.expect;
// let EC = protractor.ExpectedConditions;
//     let condition = EC.textToBePresentInElement((obj.Exp),'h1');
cucumber_1.Given('User launches the website analyzer url', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.get(obj.baseUrl);
    });
});
cucumber_1.Then('the page should display the text field and button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield expect(obj.inputUrlTextBox).to.be.present;
        console.log("******************************************");
        console.log("Input text for url is present");
        console.log("******************************************");
        yield expect(obj.startBtn).to.be.present;
        console.log("******************************************");
        console.log("Start Button for url analysis is present");
        console.log("******************************************");
    });
});
cucumber_1.Then('user validates the page title', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield protractor_1.browser.getTitle().then(title => {
            expect(title).to.equal(obj.title);
            console.log("******************************************");
            console.log("The title of the analyzer web site is " + title);
            console.log("******************************************");
        });
    });
});
cucumber_1.Given('User enters the input url in the text box', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield obj.inputUrlTextBox.sendKeys(obj.inputUrl);
    });
});
cucumber_1.Then('User clicks on Start button', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield obj.startBtn.click();
    });
});
cucumber_1.Then('User waits for the results to be displayed', function () {
    return __awaiter(this, void 0, void 0, function* () {
        //await browser.wait(condition, obj.explicit_Wait);
        yield protractor_1.browser.sleep(obj.explicit_Wait);
    });
});
cucumber_1.Then('User validates the results', function () {
    return __awaiter(this, void 0, void 0, function* () {
        yield obj.htmlVersion.getText().then(html_version => {
            expect(html_version).to.equal(obj.html_version);
            console.log("******************************************");
            console.log("The html version of the result is " + html_version);
            console.log("******************************************");
        });
        yield obj.pageTitle.getText().then(pagetitle => {
            expect(pagetitle).to.equal(obj.page_title);
            console.log("******************************************");
            console.log("The page Title of the result is " + pagetitle);
            console.log("******************************************");
        });
        yield obj.internalLinks.getText().then(intLinks => {
            expect(intLinks).to.equal(obj.internal_links);
            console.log("******************************************");
            console.log("The internal links of the result is " + intLinks);
            console.log("******************************************");
        });
        yield obj.externalLinks.getText().then(extLinks => {
            expect(extLinks).to.equal(obj.external_links);
            console.log("******************************************");
            console.log("The external links of the result is " + extLinks);
            console.log("******************************************");
        });
        yield obj.inaccessibleLinks.getText().then(inacc_Links => {
            expect(inacc_Links).to.equal(obj.inaccess_links);
            console.log("******************************************");
            console.log("The inaccessible links  of the result is " + inacc_Links);
            console.log("******************************************");
        });
        yield obj.loginForm.getText().then(login_form => {
            expect(login_form).to.equal(obj.login_form);
            console.log("******************************************");
            console.log("The login form of the result is " + login_form);
            console.log("******************************************");
        });
        yield obj.HeaderList.count().then(count => {
            console.log("******************************************");
            console.log("The number of headings in the table is " + count);
            console.log("******************************************");
            console.log("The number of levels of headings in the table is(starting from 0) " + (count - 1));
            console.log("******************************************");
        });
    });
});
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoic3RlcERlZmluaXRpb25zLmpzIiwic291cmNlUm9vdCI6IiIsInNvdXJjZXMiOlsiLi4vLi4vU3RlcERlZi9zdGVwRGVmaW5pdGlvbnMudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBQSx1Q0FBa0Q7QUFHbEQsNkJBQThCO0FBRzlCLGtFQUE2RDtBQUM3RCwyQ0FBcUM7QUFHckMsSUFBSSxHQUFHLEdBQUcsSUFBSSwrQkFBYyxFQUFFLENBQUM7QUFDL0IsSUFBSSxDQUFDLEdBQUcsQ0FBQyxPQUFPLENBQUMsZUFBZSxDQUFDLENBQUMsQ0FBQztBQUNuQyxJQUFJLE1BQU0sR0FBRyxJQUFJLENBQUMsTUFBTSxDQUFDO0FBQ3pCLDBDQUEwQztBQUMxQyxtRUFBbUU7QUFHakUsZ0JBQUssQ0FBQyx3Q0FBd0MsRUFBRTs7UUFFOUMsTUFBTSxvQkFBTyxDQUFDLEdBQUcsQ0FBQyxHQUFHLENBQUMsT0FBTyxDQUFDLENBQUM7SUFHbkMsQ0FBQztDQUFBLENBQUMsQ0FBQztBQUdILGVBQUksQ0FBQyxtREFBbUQsRUFBRTs7UUFHdEQsTUFBTSxNQUFNLENBQUMsR0FBRyxDQUFDLGVBQWUsQ0FBQyxDQUFDLEVBQUUsQ0FBQyxFQUFFLENBQUMsT0FBTyxDQUFDO1FBQ2hELE9BQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMsQ0FBQztRQUMxRCxPQUFPLENBQUMsR0FBRyxDQUFDLCtCQUErQixDQUFDLENBQUM7UUFDN0MsT0FBTyxDQUFDLEdBQUcsQ0FBQyw0Q0FBNEMsQ0FBQyxDQUFDO1FBQzFELE1BQU0sTUFBTSxDQUFDLEdBQUcsQ0FBQyxRQUFRLENBQUMsQ0FBQyxFQUFFLENBQUMsRUFBRSxDQUFDLE9BQU8sQ0FBQztRQUN6QyxPQUFPLENBQUMsR0FBRyxDQUFDLDRDQUE0QyxDQUFDLENBQUM7UUFDMUQsT0FBTyxDQUFDLEdBQUcsQ0FBQywwQ0FBMEMsQ0FBQyxDQUFDO1FBQ3hELE9BQU8sQ0FBQyxHQUFHLENBQUMsNENBQTRDLENBQUMs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