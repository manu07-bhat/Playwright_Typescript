import { test, expect, Locator } from "@playwright/test";

test("xpath methods", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  await expect(
    page.locator('//img[@alt="Tricentis Demo Web Shop"]'),
  ).toBeVisible();

  const product: Locator = page.locator("//h2/a[contains(@href,'computer')]");
  var count = await product.count();
  expect(count).toBeGreaterThan(0);
  console.log("product count ", count);

  console.log(await product.first().textContent());
  console.log(await product.last().textContent());
  console.log(await product.nth(3).textContent());
  console.log("-------------------------");

  while (count > 0) {
    count--;
    console.log(await product.nth(count).textContent());
  }
  //   await product.textContent();
});
