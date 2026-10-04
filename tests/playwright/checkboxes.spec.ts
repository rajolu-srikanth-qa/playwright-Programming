import { test, expect } from '@playwright/test';

const checkboxurl='https://the-internet.herokuapp.com/checkboxes';

test('verify checkboxes', async ({page})=>{

  await page.goto(checkboxurl);

  const checkboxes = page.locator('//input[@type="checkbox"]');

  await expect(checkboxes).toHaveCount(2);//2

  const checkbox1=checkboxes.nth(0);
   const checkbox2=checkboxes.nth(1);

   await expect(checkbox1).not.toBeChecked(); //unchecked
    await expect(checkbox2).not.toBeChecked();

    await checkbox1.check(); //check 
    await expect(checkbox1).toBeChecked(); //i expect it to be checked

    await checkbox2.check(); //check 
    await expect(checkbox2).toBeChecked(); //i expect it to be checked

    
    await checkbox2.uncheck(); //check 
    await expect(checkbox2).not.toBeChecked(); //i expect it to be checked


    //get alll the checkboxes in the page and click on all the checkboxes 

    const allcheckboxes = await checkboxes.all();

    for(const checkbox of allcheckboxes){

      await checkbox.check();
      await expect(checkbox).toBeChecked();


      //visibility //isenabled //
    }

});