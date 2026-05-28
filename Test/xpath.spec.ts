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

  let productlist: String[] = await product.allTextContents();
  console.log(await product.allTextContents());
  console.log(productlist[2]);
  console.log("-------------------------");
  for (let i = 0; i < productlist.length; i++) {
    console.log(productlist[i]);
  }
  console.log("-------------------------");
  for (let pt of productlist) {
    console.log(pt);
  }
});

test("Other types of xpath", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");

  //starts-with
  let Buildingproduct: Locator = page.locator(
    "//h2//a[starts-with(@href,'/build')]",
  );
  const count: number = await Buildingproduct.count();
  console.log(count);
  expect(count).toBeGreaterThan(0);

  let sw: String[] = await Buildingproduct.allTextContents();
  for (let pt of sw) {
    console.log(pt);
  }

  //text()
  const reglink = page.locator(" //a[text()='Register']");
  await expect(reglink).toBeVisible();

  const lastopt: Locator = page.locator(
    "//div[@class='column follow-us']//li[last()]",
  );
  await expect(lastopt).toBeVisible();
  console.log(await lastopt.textContent());

  //position()
  const position: Locator = page.locator(
    "//div[@class='column follow-us']//li[position()=2]",
  );
  await expect(position).toBeVisible();
  console.log(await position.textContent());
});
