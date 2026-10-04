import {test,expect} from '@playwright/test';
test('static dropdown-selectby label,value and index',async({page})=>{
    await page.goto('https://testautomationpractice.blogspot.com/');
    const countryDropdown = page.locator('#country');
    //1.Select by visble test(label)
    await countryDropdown.selectOption({label:'India'});
    await expect (countryDropdown).toHaveValue('india');

    //2.select by underlying<Option value ="....">
    await countryDropdown.selectOption({value:'uk'});
    await expect(countryDropdown).toContainText('United Kingdom');

    //3.select by position in the list(0.based index)
    await countryDropdown.selectOption({index:2});
    const optionAtindex2 =(await countryDropdown.locator('option').nth(2).textContent())?.trim();
    await expect(countryDropdown.locator('option:checked')).toHaveText(optionAtindex2??'');

    //4.confirm the full option list contains on Expected entry
    const alloptionsText = await countryDropdown.locator('option').allTextContents();
    expect(alloptionsText.map(t=>t.trim())).toContain('Japan');
})