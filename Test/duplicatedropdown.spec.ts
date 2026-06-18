import { test, expect, Locator } from "@playwright/test";

test("Duplicate_dropdown", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/2018/09/automation-form.html",
    { waitUntil: "domcontentloaded" },
  );

  const dropdown_option: Locator = page.locator("#colors>option");

  //   const dropdown_option: Locator = page.locator("#animals>option");

  const opt_text: string[] = (await dropdown_option.allTextContents()).map(
    (text) => text.trim(),
  );

  const myset = new Set<string>(); //SET - duplicates not allowed
  const duplicates: string[] = []; // array - duplicates are allowed

  for (const text of opt_text) {
    if (myset.has(text)) {
      duplicates.push(text);
    } else {
      myset.add(text);
    }
  }

  if (duplicates.length > 0) {
    console.log("duplicates found", duplicates);
  } else {
    console.log("no duplicates found");
  }
  console.log("Duplicates", duplicates);

  expect(duplicates.length).toBe(0);
});
