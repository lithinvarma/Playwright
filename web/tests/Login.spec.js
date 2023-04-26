// @ts-check
const {Login}=require('/Users/lithin/WebstormProjects/Playwright/element repository/myt_login.js')
const {test} = require('/Users/lithin/WebstormProjects/Playwright/configuration/browserstack/bs_fixture.js');
 test('Open WEBurl', async ({page}) => {
     const login = new Login(page);
     await page.goto('url')
     const number=await login.api.getSettings("api_key")
     console.log(number)
     await login.entMobileNumber.fill("44"+number)
     await login.btnContinue.click()
     var otp=await login.db.fetch("query", "row")
     console.log(otp)
     await login.entOTP.fill(otp)
})
