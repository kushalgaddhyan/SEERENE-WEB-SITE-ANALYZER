import {ElementFinder, ElementArrayFinder,element,by} from "protractor";

export class analyzeWebSite{
  
    title:string;
    baseUrl:string;
    inputUrlTextBox:ElementFinder;
    startBtn:ElementFinder;
    htmlVersion:ElementFinder;
    pageTitle:ElementFinder;
    headings:ElementArrayFinder;
    internalLinks:ElementFinder;
    externalLinks:ElementFinder;
    inaccessibleLinks:ElementFinder;
    loginForm:ElementFinder;
    wait:number
    bool_true:boolean;
    bool_false:boolean;
    inputUrl: string;
    html_version:string;
    page_title:string;
    internal_links:string;
    external_links:string;
    inaccess_links:string;
    login_form:string;
    Exp:ElementFinder;
    explicit_Wait:number;
    TimeOut_Message:string;
    HeaderList:ElementArrayFinder;
   

   
    
    
    

    constructor()
    {
     this.title = 'Analyzing Web-Sites';
     this.baseUrl = 'http://localhost:9000/';
     this.inputUrlTextBox = element(by.model("mainVm.url"));
     this.startBtn = element(by.xpath("//button[@type='submit']"));
     this.htmlVersion = element(by.repeater("(key, value) in mainVm.elements")).element(by.xpath("//td[contains(text(),'version')]/following-sibling::*"));
     this.pageTitle = element(by.repeater("(key, value) in mainVm.elements")).element(by.xpath("//td[contains(text(),'title')]/following-sibling::*"));
     this.internalLinks = element(by.repeater("(key, value) in mainVm.elements")).element(by.xpath("//td[contains(text(),'internal_links')]/following-sibling::*"));
     this.externalLinks = element(by.repeater("(key, value) in mainVm.elements")).element(by.xpath("//td[contains(text(),'external_links')]/following-sibling::*"));
     this.inaccessibleLinks = element(by.repeater("(key, value) in mainVm.elements")).element(by.xpath("//td[contains(text(),'inaccessible_links')]/following-sibling::*"));
     this.loginForm =  element(by.repeater("(key, value) in mainVm.elements")).element(by.xpath("//td[contains(text(),'login-form')]/following-sibling::*"));
     this.wait = 15000;
     this.inputUrl = 'https://www.google.com/';
     this.html_version = 'HTML5'
    this.page_title = 'Google';
    this.internal_links = '17';
    this.external_links = '11';
    this.inaccess_links = '1';
    this.login_form = 'false';
    this.Exp = element(by.xpath("//td[contains(text(),'h1')]"));
    this.explicit_Wait = 20000;
    this.TimeOut_Message = "Element not visible even in 20 seconds";
    this.HeaderList =  element.all(by.xpath("//td[starts-with(normalize-space(.), 'h')]"));
     


    }

    
}