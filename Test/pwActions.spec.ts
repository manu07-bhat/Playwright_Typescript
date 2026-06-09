import { test, expect, Locator } from "@playwright/test";

test("input_Actions", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const textbox1: Locator = page.locator("#name");
  await expect(textbox1).toBeVisible();
  await expect(textbox1).toBeEnabled();
  //   await expect(textbox1).toBeDisabled();

  const maxlen = await textbox1.getAttribute("maxlength"); //return value
  expect(maxlen).toBe("15");

  await textbox1.fill("jonny bro");

  console.log("inserted text", await textbox1.textContent()); //return empty
  console.log("Input Val ue ", await textbox1.inputValue());
  expect(await textbox1.inputValue()).toBe("jonny bro");
});

test("Radio_button", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const male_radiobtn: Locator = page.locator("#male");
  await expect(male_radiobtn).toBeVisible();
  await expect(male_radiobtn).toBeEnabled();
  await male_radiobtn.check();
  await expect(male_radiobtn).toBeChecked(); //most used

  expect(await male_radiobtn.isChecked()).toBe(true);
});

test.only("check_box", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  //select sepcific checkbox using getbylable
  const sundaychechbox: Locator = page.getByLabel("Sunday");
  await sundaychechbox.check();
  await expect(sundaychechbox).toBeChecked();

  //select all the checkbox & check wether checked or not

  const days: string[] = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];

  console.log(days.length);

  const checkboxes: Locator[] = days.map((index) => page.getByLabel(index));
  expect(checkboxes.length).toBe(7);

  for (const checkboxs of checkboxes) {
    await checkboxs.check();
    await expect(checkboxs).toBeChecked();
  }

  //   for (let i = 0; i < days.length; i++) {
  //     await page.getByLabel(days[i]).check();
  //     let day: Locator = page.getByLabel(days[i]);
  //     await expect(day).toBeChecked();
  //     await page.waitForTimeout(2000);
  //   }

  //select last 3 checkboxes

  for (const checkboxs of checkboxes.slice(-3)) {
    await checkboxs.uncheck();
    await expect(checkboxs).not.toBeChecked();

    await page.waitForTimeout(1000);
  }

  // toggle checkbox if checked- uncheck || if unchecked - checked

  for (const checkboxs of checkboxes) {
    if ((await checkboxs.isChecked()) === false) {
      await checkboxs.check();
      await expect(checkboxs).toBeChecked();
    } else {
      await checkboxs.uncheck();
      await expect(checkboxs).not.toBeChecked();

      //   await page.waitForTimeout(2000);
    }
  }

  // ramdomely select checkbox - using index (1,3,6) & assert

  const indx = [1, 3, 6];
  for (const i of indx) {
    await checkboxes[i].check();
    await expect(checkboxes[i]).toBeChecked();
  }

  // select the checkbox based on the label
  const weekname: String = "friday";

  for (const label of days) {
    if (label.toLowerCase() === weekname.toLowerCase()) {
      const checkbox: Locator = page.getByLabel(label);
      await checkbox.check();
      await expect(checkbox).toBeChecked();
    }
  }
});
