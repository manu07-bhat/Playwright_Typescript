import { test, expect, Locator } from "@playwright/test";

test("dropdown", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/2018/09/automation-form.html",
    { waitUntil: "domcontentloaded" },
  );
  //1 select option from dropdown
  await page.locator("select#country").selectOption("India"); //visible text

  // value   {value:'uk'}
  await page.locator("select#country").selectOption({ value: "uk" });
  //label { label: "uk" }
  await page.locator("select#country").selectOption({ label: "France" });
  //index { index: 3 }
  await page.locator("select#country").selectOption({ index: 3 });

  //2 check the number if options in the dropdown
  const dropdownlist: Locator = page.locator("#country option");
  await expect(dropdownlist).toHaveCount(10);

  //3 check the option present in the dropdown
  const option = "India";
  const dropdown_text: string[] = (await dropdownlist.allTextContents()).map(
    (text) => text.trim(),
  );
  console.log(dropdown_text); // prints in array format

  expect(dropdown_text).toContain(option);

  //4 printning option from dropdown | prints in text format
  for (const i of dropdown_text) {
    console.log(i);
  }
  await page.waitForTimeout(2000);
});
