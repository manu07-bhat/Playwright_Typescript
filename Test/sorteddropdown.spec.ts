import { test, expect, Locator } from "@playwright/test";

test("sorteddropdown", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/2018/09/automation-form.html",
    { waitUntil: "domcontentloaded" },
  );

  //   const dropdown_option: Locator = page.locator("#animals>option");
  const dropdown_option: Locator = page.locator("#colors>option");
  //   console.log(await dropdown_option.allTextContents());

  const opt_text: string[] = (await dropdown_option.allTextContents()).map(
    (text) => text.trim(),
  );

  const original_arry: String[] = [...opt_text];
  const sorted_list: string[] = [...opt_text].sort();

  console.log("original_arry", original_arry);
  console.log("sorted_list", sorted_list);

  expect(original_arry).toEqual(sorted_list);
  await page.waitForTimeout(5000);
});
