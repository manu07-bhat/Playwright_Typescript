//login flipcart & try login with incorrect details & capture the incorrect details

import { test, expect, Locator } from "@playwright/test";

test("flipcart", async ({ page }) => {
  await page.goto("https://www.flipkart.com/account/login?ret=/");

  const input = page.locator("(//input[@type='text'])[2]");

  await input.fill("123456");
  await page.locator("button[class='dSM5Ub Kv3ekh KcXDCU']").click();

  const errormes: Locator = page.locator(
    'span:has-text("Please enter valid Email ID/Mobile number")',
  );
  await page.waitForTimeout(2000);
  await expect(errormes.first()).toBeVisible({ timeout: 3000 });

  console.log(await input.inputValue());
  console.log("error message is: ", await errormes.first().textContent());
});
