import { test, expect } from "@playwright/test";

test("verify page URL", async ({ page }) => {
  await page.goto("https://automationexercise.com/");
  await expect(page).toHaveURL(/automation/);

  const url = await page.url();
  console.log("Page URL:", page.url());
});
