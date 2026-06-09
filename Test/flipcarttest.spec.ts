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

//AI with mpdification
test("Flipkart login with invalid credentials", async ({ page }) => {
  // Navigate to Flipkart
  await page.goto("https://www.flipkart.com");

  // Enter incorrect credentials
  await page.fill('input[type="text"]', "wronguser@test.com");
  //   await page.fill('input[type="password"]', 'wrongpassword');

  // Click Login button
  await page.locator('button:has-text("OTP")').click();

  // Wait for error message
  const errorLocator = page.locator(
    'span:has-text("Please enter valid Email ID/Mobile number")',
  );

  await expect(errorLocator).toBeVisible({ timeout: 10000 });

  // Capture error message text
  const errorText = await errorLocator.textContent();
  console.log("Error Message:", errorText);

  // Optional assertion (adjust based on actual message)
  expect(errorText).toContain("enter valid Email ID/Mobile number");

  // Take screenshot for proof
  await page.screenshot({ path: "invalid-login.png", fullPage: true });
});
