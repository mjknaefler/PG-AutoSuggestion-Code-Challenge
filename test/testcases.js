const { expect } = require("chai");
describe('Test case to practice auto suggestions in web elements', async () => {
    it('Verify user can select value from auto-suggestion', async () => {
        /**
         * 1. Launch hotels.com  
         * 2. Enter 'new' in the destination
         * 3. Select 'Newport Beach' from auto-suggestion.
         */

        //1. Launch hotels.com  
        await browser.url('https://hotels.com/');
        await browser.pause(2000);
        //2. Enter 'new' in the destination
        await $('//button[@aria-label="Going to"]').click();
        await browser.pause(2000);

        await $('//input[@data-stid="destination_form_field-menu-input"]').setValue('newp');
        await browser.pause(2000);

        //3. Select 'Newport Beach' from auto-suggestion.
        const allSuggestions = await $$('//ul[@class="uitk-action-list no-bullet"]//li//button[@data-stid="destination_form_field-result-item-button"]');
        for (const suggestion of allSuggestions){
            const suggestionText = await suggestion.getAttribute("aria-label");
            if(suggestionText.startsWith('Newport Beach')){
                await suggestion.click();
                break;
            }
        }
        await browser.pause(5000);
    });
});