import { test, expect, Locator } from "@playwright/test";

test("Hiddenbootstrap", async ({ page }) => {
  await page.goto(
    "https://opensource-demo.orangehrmlive.com/web/index.php/auth/login",
  );
  //login
  await page.locator("input[name='username']").fill("Admin");
  await page.locator("input[name='password']").fill("admin123");
  await page.locator("button[type='submit']").click();
  //click PIM
  await page.getByRole("link", { name: "PIM" }).click();
  await page.waitForTimeout(2000);

  await page.locator("form i").nth(2).click();
  await page.waitForTimeout(2000);
  //capture all the options from dropdown

  const options: Locator = page.locator("div[role='listbox'] span");
  await expect(page.locator('[role="listbox"]')).toBeVisible();
  console.log(await options.count());

  //print all the options
  //   console.log(await options.allTextContents());
  const count: number = await options.count();

  for (let i = 0; i < count; i++) {
    console.log(await options.nth(i).innerText());
    console.log(await options.nth(i).textContent());
  }
  //select /click option
  for (let i = 0; i < count; i++) {
    const text = await options.nth(i).innerText();
    if (text === "Automation Tester") {
      await options.nth(i).click();
      break;
    }
  }
  await page.waitForTimeout(5000);
});
