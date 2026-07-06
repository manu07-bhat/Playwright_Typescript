import { test, expect, Locator } from "@playwright/test";

test("Assignment_myntra", async ({ page }) => {
  await page.goto("https://www.myntra.com/", {
    waitUntil: "domcontentloaded",
    timeout: 60000,
  });
  await page.locator("div input").fill("Shirts");
  await page.waitForTimeout(2000);
  const option: Locator = page.locator('ul[class="desktop-group"]>li');
  //   await page.waitForTimeout(3000);
  console.log(await option.count());

  const count: number = await option.count();
//   await option.nth(2).click();

  //select Shirts men XI
  for (let i = 0; i < count; i++) {
    const text = await option.nth(i).innerText();
    if (text === "Shirts Tops") {
      await option.nth(i).click();
      break;
    }
  }
});
