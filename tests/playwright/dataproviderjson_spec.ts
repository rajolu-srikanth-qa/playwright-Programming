import { test, expect } from '@playwright/test';
 import * as fs from 'fs';
 type RegData={
    firstName:string,
    lastName:string,
    email:string,
    telephone:string,
    password:string,
    subscribeNewsLetter:'YES'|'NO';
 }
 //parse covert js object to looop 
 const registrationData:RegData[]=
 JSON.parse(fs.readFileSync('playwright\tests\data\register.json','utf-8'));


 for(const user of registrationData){


  test(`login test for `,async ({page})=>{

    await page.goto('https://tutorialsninja.com/demo/index.php?route=account/register');

    await page.getByRole('textbox',{name:'firstname'}).fill(user.firstName);
  
    
  });
}
