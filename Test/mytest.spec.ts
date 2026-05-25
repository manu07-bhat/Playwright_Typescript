import { test, expect } from "@playwright/test";

/*  //syntax
test("title",()=>{
  
})
*/

//FIXTURE - GLOBAL VARIABLE = PAGE, BROWSER
test("verify page ttle", async ({ page }) => {
  await page.goto("https://automationexercise.com/");
  await expect(page).toHaveTitle("Automation Exercise");

  const title = await page.title();
  console.log("Page title:", title);
});
