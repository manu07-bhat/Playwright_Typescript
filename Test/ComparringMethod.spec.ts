import { test, expect, Locator } from "@playwright/test";

test("M1", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  const product: Locator = page.locator('h2[class="product-title"]');

  // 1. Innertext() vs textcontent()
  console.log(await product.nth(2).innerText()); //extract the plain text eliminating the blank spacess
  console.log(await product.nth(2).textContent()); //extract all the text even with the spacess
  console.log(await product.count(), "\n------------------");

  const count: number = await product.count();

  for (let i = 0; i < count; i++) {
    // console.log(await product.nth(i).innerText());
    const productcount: string | null = await product.nth(i).textContent();
    console.log(productcount?.trim());
  }
});

test("M2", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  const product: Locator = page.locator('h2[class="product-title"]');

  // 2. allInnertext() vs alltextcontent()

  const productname1: string[] = await product.allInnerTexts(); //array
  console.log(productname1);
  const productname2: string[] = await product.allTextContents(); //array
  console.log(productname2);

  const trimmedproduct: string[] = productname2.map((text) => text.trim());
  console.log("affter trimmed", trimmedproduct);
});

test("M3", async ({ page }) => {
  await page.goto("https://demowebshop.tricentis.com/");
  const product: Locator = page.locator('h2[class="product-title"]');

  // 2. all()
  const productlocator: Locator[] = await product.all();
  // console.log(productlocator);
  console.log(await productlocator[1].innerText());

  //for of
  for (let produc of productlocator) {
    console.log(await produc.innerText());
  }

  //for in
  for (let i in productlocator) {
    console.log(await productlocator[i].innerText());
  }
});
