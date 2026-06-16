import { test, expect, Locator } from "@playwright/test";

test("css_selector_id", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/", {
    waitUntil: "domcontentloaded",
  });
  //tag & Id
  const searchbox: Locator = page.locator("input#small-searchterms");
  await searchbox.fill("giftcard");
  await page.locator("input#small-searchterms").fill("t-shirt");
  await page.waitForTimeout(3000);
});

test("css_selector_class", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/", {
    waitUntil: "domcontentloaded",
  });
  //tag & class
  const searchbox: Locator = page.locator(".search-box-text");
  await searchbox.fill("computer");
  await page.waitForTimeout(2000);
  await page.locator("input#small-searchterms").fill("t-shirt");
  await page.waitForTimeout(5000);
});

test("css_selector_attributes", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/", {
    waitUntil: "domcontentloaded",
  });
  //tag & attributes
  const searchbox: Locator = page.locator("input[name=q]");
  await searchbox.fill("PC");
  await page.waitForTimeout(2000);
  await page.locator("[value='Search store']").fill("mobile");
  await page.waitForTimeout(5000);
});
