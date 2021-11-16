const LoginPage = require('../pageobjects/login.page');
const SecurePage = require('../pageobjects/secure.page');
//const DashboardPage = require('../page/dashboard.page');

describe('My Login application', () => {
    it('should login with valid credentials', async () => {
        await LoginPage.open();
        await LoginPage.login('superadmin@wtm.dev', 'S3cr@t1234!');
        await expect(browser).toHaveUrl('https://staging-squadbay.marines.com/dashboard');
    });
});

    it('should log the user out', () => {
        const btnLogout = $('a[href="/logout-link"]')
        //await DashboardPage.logout();
    });

