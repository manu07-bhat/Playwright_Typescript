import { test, expect, Locator } from "@playwright/test";

test("Autosuggest_Dropdown", async ({ page }) => {
  await page.goto("https://www.flipkart.com/", {
    waitUntil: "domcontentloaded",
  });

  await page.locator('span[role="button"]').click();

  await page.locator("input[name='q']").first().fill("smart"); //search text
  //get all  suggested options > ctrl+shift+p
  await page.waitForTimeout(5000);
  const options: Locator = page.locator("ul>li");

  const count = await options.count();
  console.log("number of autosuggested option", count);
  console.log(await options.nth(5).innerText());

  for (let i = 0; i < count; i++) {
    // console.log(await options.nth(i).innerText());
    console.log(await options.nth(i).textContent());
    // console.log(await options.nth(i).allTextContents());
  }

  //click on smartphone option
  for (let i = 0; i < count; i++) {
    const text = await options.nth(i).innerText();
    if (text === "smartphone") {
      await options.nth(i).click();
      await page.waitForTimeout(3000);
      break;
    }
  }
});
