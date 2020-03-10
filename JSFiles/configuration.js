"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const protractor_1 = require("protractor");
const reporter = require("cucumber-html-reporter");
exports.config = {
    directConnect: true,
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
                "App Version": "0.3.2",
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
        chromeOptions: { 'args': ['incognito', '--no-sandbox', '--disable-gpu', '--disable-web-security', '--DNS-prefetch-disable'] }
    },
    specs: ['../Features/WebSiteAnalyzer.feature'],
    cucumberOpts: {
        require: ['./StepDef/*.js'],
        format: 'json:cucumberReport.json',
    },
    onPrepare: function () {
        protractor_1.browser.driver.manage().window().maximize();
    },
    jasmineNodeOpts: {
        showColors: true,
    },
};
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiY29uZmlndXJhdGlvbi5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbIi4uL2NvbmZpZ3VyYXRpb24udHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6Ijs7QUFBQSwyQ0FBMEM7QUFDMUMsbURBQWtEO0FBR3ZDLFFBQUEsTUFBTSxHQUFXO0lBQ3hCLGFBQWEsRUFBQyxJQUFJO0lBRWxCLFNBQVMsRUFBRSxRQUFRO0lBRW5CLGFBQWEsRUFBRSxPQUFPLENBQUMsT0FBTyxDQUFDLCtCQUErQixDQUFDO0lBRS9ELFVBQVUsRUFBRSxHQUFHLEVBQUU7UUFFZixJQUFJLE9BQU8sR0FBRztZQUNaLEtBQUssRUFBRSxXQUFXO1lBQ2xCLFFBQVEsRUFBRSx1QkFBdUI7WUFDakMsTUFBTSxFQUFFLHdCQUF3QjtZQUNoQyxzQkFBc0IsRUFBRSxJQUFJO1lBQzVCLFlBQVksRUFBRSxLQUFLO1lBQ25CLFFBQVEsRUFBRTtnQkFDTixhQUFhLEVBQUMsT0FBTztnQkFDckIsa0JBQWtCLEVBQUUsU0FBUztnQkFDN0IsU0FBUyxFQUFFLHNCQUFzQjtnQkFDakMsVUFBVSxFQUFFLFlBQVk7Z0JBQ3hCLFVBQVUsRUFBRSxXQUFXO2dCQUN2QixVQUFVLEVBQUUsUUFBUTthQUN2QjtTQUNGLENBQUM7UUFFRixRQUFRLENBQUMsUUFBUSxDQUFDLE9BQU8sQ0FBQyxDQUFDO0lBQzdCLENBQUM7SUFDRCxZQUFZLEVBQUU7UUFDVixXQUFXLEVBQUUsUUFBUTtRQUNyQixhQUFhLEVBQUUsRUFBRSxNQUFNLEVBQUUsQ0FBQyxXQUFXLEVBQUMsY0FBYyxFQUFDLGVBQWUsRUFBQyx3QkFBd0IsRUFBQyx3QkFBd0IsQ0FBQyxFQUFDO0tBQ3BIO0lBRVIsS0FBSyxFQUFFLENBQUMscUNBQXFDLENBQUM7SUFHOUMsWUFBWSxFQUFFO1FBRVosT0FBTyxFQUFFLENBQUMsZ0JBQWdCLENBQUU7UUFFMUIsTUFBTSxFQUFFLDBCQUEwQjtLQUVuQztJQUdMLFNBQVMsRUFBRTtRQUNULG9CQUFPLENBQUMsTUFBTSxDQUFDLE1BQU0sRUFBRSxDQUFDLE1BQU0sRUFBRSxDQUFDLFFBQVEsRUFBRSxDQUFDO0lBSTlDLENBQUM7SUFFRyxlQUFlLEVBQUU7UUFDZixVQUFVLEVBQUUsSUFBSTtLQUNuQjtDQUVKLENBQUMifQ==