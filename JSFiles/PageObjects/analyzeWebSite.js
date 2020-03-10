"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
class analyzeWebSite {
    constructor() {
        this.title = 'Analyzing Web-Sites';
        this.baseUrl = 'http://localhost:9000/';
        this.inputUrlTextBox = protractor_1.element(protractor_1.by.model("mainVm.url"));
        this.startBtn = protractor_1.element(protractor_1.by.xpath("//button[@type='submit']"));
        this.htmlVersion = protractor_1.element(protractor_1.by.repeater("(key, value) in mainVm.elements")).element(protractor_1.by.xpath("//td[contains(text(),'version')]/following-sibling::*"));
        this.pageTitle = protractor_1.element(protractor_1.by.repeater("(key, value) in mainVm.elements")).element(protractor_1.by.xpath("//td[contains(text(),'title')]/following-sibling::*"));
        this.internalLinks = protractor_1.element(protractor_1.by.repeater("(key, value) in mainVm.elements")).element(protractor_1.by.xpath("//td[contains(text(),'internal_links')]/following-sibling::*"));
        this.externalLinks = protractor_1.element(protractor_1.by.repeater("(key, value) in mainVm.elements")).element(protractor_1.by.xpath("//td[contains(text(),'external_links')]/following-sibling::*"));
        this.inaccessibleLinks = protractor_1.element(protractor_1.by.repeater("(key, value) in mainVm.elements")).element(protractor_1.by.xpath("//td[contains(text(),'inaccessible_links')]/following-sibling::*"));
        this.loginForm = protractor_1.element(protractor_1.by.repeater("(key, value) in mainVm.elements")).element(protractor_1.by.xpath("//td[contains(text(),'login-form')]/following-sibling::*"));
        this.wait = 15000;
        this.inputUrl = 'https://www.google.com/';
        this.html_version = 'HTML5';
        this.page_title = 'Google';
        this.internal_links = '17';
        this.external_links = '11';
        this.inaccess_links = '1';
        this.login_form = 'false';
        this.Exp = protractor_1.element(protractor_1.by.xpath("//td[contains(text(),'h1')]"));
        this.explicit_Wait = 20000;
        this.TimeOut_Message = "Element not visible even in 20 seconds";
        this.HeaderList = protractor_1.element.all(protractor_1.by.xpath("//td[starts-with(normalize-space(.), 'h')]"));
    }
}
exports.analyzeWebSite = analyzeWebSite;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYW5hbHl6ZVdlYlNpdGUuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyIuLi8uLi9QYWdlT2JqZWN0cy9hbmFseXplV2ViU2l0ZS50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiOztBQUFBLDJDQUF3RTtBQUV4RSxNQUFhLGNBQWM7SUFrQ3ZCO1FBRUMsSUFBSSxDQUFDLEtBQUssR0FBRyxxQkFBcUIsQ0FBQztRQUNuQyxJQUFJLENBQUMsT0FBTyxHQUFHLHdCQUF3QixDQUFDO1FBQ3hDLElBQUksQ0FBQyxlQUFlLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLFlBQVksQ0FBQyxDQUFDLENBQUM7UUFDdkQsSUFBSSxDQUFDLFFBQVEsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsMEJBQTBCLENBQUMsQ0FBQyxDQUFDO1FBQzlELElBQUksQ0FBQyxXQUFXLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyx1REFBdUQsQ0FBQyxDQUFDLENBQUM7UUFDdEosSUFBSSxDQUFDLFNBQVMsR0FBRyxvQkFBTyxDQUFDLGVBQUUsQ0FBQyxRQUFRLENBQUMsaUNBQWlDLENBQUMsQ0FBQyxDQUFDLE9BQU8sQ0FBQyxlQUFFLENBQUMsS0FBSyxDQUFDLHFEQUFxRCxDQUFDLENBQUMsQ0FBQztRQUNsSixJQUFJLENBQUMsYUFBYSxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsOERBQThELENBQUMsQ0FBQyxDQUFDO1FBQy9KLElBQUksQ0FBQyxhQUFhLEdBQUcsb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw4REFBOEQsQ0FBQyxDQUFDLENBQUM7UUFDL0osSUFBSSxDQUFDLGlCQUFpQixHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLFFBQVEsQ0FBQyxpQ0FBaUMsQ0FBQyxDQUFDLENBQUMsT0FBTyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsa0VBQWtFLENBQUMsQ0FBQyxDQUFDO1FBQ3ZLLElBQUksQ0FBQyxTQUFTLEdBQUksb0JBQU8sQ0FBQyxlQUFFLENBQUMsUUFBUSxDQUFDLGlDQUFpQyxDQUFDLENBQUMsQ0FBQyxPQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQywwREFBMEQsQ0FBQyxDQUFDLENBQUM7UUFDeEosSUFBSSxDQUFDLElBQUksR0FBRyxLQUFLLENBQUM7UUFDbEIsSUFBSSxDQUFDLFFBQVEsR0FBRyx5QkFBeUIsQ0FBQztRQUMxQyxJQUFJLENBQUMsWUFBWSxHQUFHLE9BQU8sQ0FBQTtRQUM1QixJQUFJLENBQUMsVUFBVSxHQUFHLFFBQVEsQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLElBQUksQ0FBQztRQUMzQixJQUFJLENBQUMsY0FBYyxHQUFHLEdBQUcsQ0FBQztRQUMxQixJQUFJLENBQUMsVUFBVSxHQUFHLE9BQU8sQ0FBQztRQUMxQixJQUFJLENBQUMsR0FBRyxHQUFHLG9CQUFPLENBQUMsZUFBRSxDQUFDLEtBQUssQ0FBQyw2QkFBNkIsQ0FBQyxDQUFDLENBQUM7UUFDNUQsSUFBSSxDQUFDLGFBQWEsR0FBRyxLQUFLLENBQUM7UUFDM0IsSUFBSSxDQUFDLGVBQWUsR0FBRyx3Q0FBd0MsQ0FBQztRQUNoRSxJQUFJLENBQUMsVUFBVSxHQUFJLG9CQUFPLENBQUMsR0FBRyxDQUFDLGVBQUUsQ0FBQyxLQUFLLENBQUMsNENBQTRDLENBQUMsQ0FBQyxDQUFDO0lBSXZGLENBQUM7Q0FHSjtBQWhFRCx3Q0FnRUMifQ==