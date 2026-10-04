import { test, expect } from '@playwright/test';

test('Search iPhone in Flipkart', async ({ page }) => {

    await page.goto('https://www.flipkart.com');

    await page
        .getByRole('textbox', { name: 'Search for Products, Brands and More' })
        .fill('iphone');

    await page.getByRole('button', { name: 'Search' }).click();

});

/*
 getByRole() Locator – Detailed Explanation
getByRole() is the most recommended locator in Playwright because it finds elements the same way assistive technologies (screen readers) identify them.
It is based on ARIA Roles (Accessible Rich Internet Applications) and the accessible name of an element.
Why Playwright Recommends getByRole()
Instead of locating elements using:
<button id="loginBtn">Login</button>
page.locator('#loginBtn')
Playwright recommends:
page.getByRole('button', { name: 'Login' })
Advantages
✅ More stable
✅ Readable
✅ User-centric
✅ Supports accessibility testing
✅ Less dependent on HTML structure
________________________________________
Syntax
page.getByRole(role)
or
page.getByRole(role, options)
Example:
await page.getByRole('button', { name: 'Login' }).click();
________________________________________
General Structure
page.getByRole('role', {
    name: 'Accessible Name'
})
Role
Tells Playwright what type of element to search.
Examples:
•	button 
•	link 
•	textbox 
•	checkbox 
•	radio 
•	heading 
•	combobox 
•	list 
•	row 
•	cell 
Name
Visible text or accessible name of the element.
________________________________________

*/