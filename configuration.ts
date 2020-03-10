import {Config, browser} from 'protractor'
import * as reporter from "cucumber-html-reporter"


export let config: Config = {
    directConnect:true,
    
    framework: 'custom',
   
    frameworkPath: require.resolve('protractor-cucumber-framework'),
    
    onComplete: () => {
     
      var options = {
        theme: 'bootstrap',
        jsonFile: './cucumberreport.json',
        output: './cucumber_Report.html',
        reportSuiteAsScenarios: true,
        launchReport: false,
        metadata: {
            "App Version":"0.3.2",
            "Test Environment": "STAGING",
            "Browser": "Chrome  54.0.2840.98",
            "Platform": "Windows 10",
            "Parallel": "Scenarios",
            "Executed": "Remote"
        }
      };

      reporter.generate(options);
    },
    capabilities: {
        browserName: 'chrome',
        chromeOptions: { 'args': ['incognito','--no-sandbox','--disable-gpu','--disable-web-security','--DNS-prefetch-disable']}
           },
    
    specs: ['../Features/WebSiteAnalyzer.feature'],

    
    cucumberOpts: {
        
      require: ['./StepDef/*.js' ],

        format: 'json:cucumberReport.json',

      },
      

  onPrepare: function() {
    browser.driver.manage().window().maximize();
      
    
    
  },

      jasmineNodeOpts: {
        showColors: true,
    },

}; 
