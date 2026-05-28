import { test, expect, Locator } from "@playwright/test";

test("dynamic_ele with xpath", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await expect(
    page.locator("//button[@class='start' or @class='stop']"),
  ).toBeVisible();
  await expect(page.locator("//button[starts-with(@name,'st')]")).toBeVisible();
  await expect(
    page.locator("//button[@name='start' or @name='stop']"),
  ).toBeVisible();

  // //button[starts-with(@name,'st')]
  // //button[@class='start' or @class='stop']
  // //button[@name='start' or @name='stop']
  // //button[contains(@name,'st')]

  for (let i = 0; i < 5; i++) {
    let button: Locator = page.locator(
      "//button[@class='start' or @class='stop']",
    );
    await button.click();
    await page.waitForTimeout(2000);
    console.log("button clicked ", await button.textContent());
  }
});

test("dynamic_ele with css", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await expect(
    page.locator("button[class='start'], button[class='stop']"),
  ).toBeVisible();

  for (let i = 0; i < 5; i++) {
    let button: Locator = page.locator(
      "button[class='start'], button[class='stop']",
    );
    await button.click();
    await page.waitForTimeout(2000);
    console.log("button clicked ", await button.textContent());
  }
});

test("dynamic_ele with builtin locator", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  await expect(
    page.locator("button[class='start'], button[class='stop']"),
  ).toBeVisible();

  for (let i = 0; i < 5; i++) {
    let button: Locator = page.getByRole("button", { name: /START|STOP/ });
    await button.click();
    await page.waitForTimeout(2000);
    console.log("button clicked ", await button.textContent());
  }
});
