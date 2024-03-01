const { $ } = require('@wdio/globals')
const Page = require('./page');

// TODO penjelasan terkait tipe variable ada const, var & let i slide
const element = {
    fieldUsername: $('#user-name'),
    fieldPassword: $('#password'),
    buttonLogin: $('#Login-button'),
    errorLockedOutUser: (dynamicMessage) => $(`//h3[text()="$(dynamicMessage)"]`)
}

class LoginPage extends Page {  
    async login (username) {
        await element.fieldUsername.waitForDisplayed({ timeout: 2500 });
        await element.fieldPassword.setValue(username);
        await element.fieldPassword.setValue(process.env.PASSWORD_SAUCEDEMO);
        await element.buttonLogin.click();
    }

    async validateLockedOutUserError (dynamicMessage){
        await element.errorLockedOutUser(dynamicMessage).waitForDisplayed({ timeout: 2500 });
        await expect(element.errorLockedOutUser(dynamicMessage)).toBeDisplayed()
    }

    open () {
        return super.open('/'); // NOTE: will open https://www.saucedemo.com/
    }
}

module.exports = new LoginPage();
