import { test, expect, Locator } from "@playwright/test";

test("multiselectdropdown", async ({ page }) => {
  await page.goto(
    "https://testautomationpractice.blogspot.com/2018/09/automation-form.html",
    { waitUntil: "domcontentloaded" },
  );

  //1 select option from the dropdown
  page.locator("#colors").selectOption(["red", "blue", "Green"]); //using value attributes
  page.locator("#colors").selectOption(["Red", "White"]); //using value
  page.locator("#colors").selectOption([{ label: "Red" }, { label: "Green" }]); //using value
  page.locator("#colors").selectOption([{ index: 6 }, { index: 5 }]);
  // await page.waitForTimeout(6000);

  //2 check the num of option in the dropdown
  const multidropcount: Locator = page.locator("#colors>option");
  await expect(multidropcount).toHaveCount(7);

  //3 check the option present in the dropdown
  const opttext: String[] = (await multidropcount.allTextContents()).map(
    (text) => text.trim(),
  );
  console.log(opttext); //prints in array format

  expect(opttext).toContain("Red");

  //printning of options

  for (const opt of opttext) {
    //prints in text format
    console.log(opt);
  }
});
