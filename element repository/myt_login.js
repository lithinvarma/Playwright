exports.Login = class Login {
    constructor(page) {
        this.api=require("/Users/lithin/WebstormProjects/Playwright/backend/API.js")
        this.db=require('/Users/lithin/WebstormProjects/Playwright/backend/db_controller.js')
        this.page = page;
        this.entMobileNumber = page.locator("xpath=//input[@aria-label='Telephone input']");
        this.btnContinue = page.locator("xpath=//*[text()='CONTINUE']");
        this.entOTP = page.locator("xpath=//input[@data-testid='MYT_OTPScreen_OtpInputField']");
    }


}
