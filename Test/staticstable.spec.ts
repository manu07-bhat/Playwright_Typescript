import { test, expect, Locator } from "@playwright/test";

test("tables1", async ({ page }) => {
  await page.goto("https://testautomationpractice.blogspot.com/");
  const wholetable: Locator = page.locator('table[name="BookTable"] tbody');
  await expect(wholetable).toBeVisible();

  //1 count the number of row in a table
  const rows: Locator = wholetable.locator("tr");
  await expect(rows).toHaveCount(7); //approach 1

  const rowcount: number = await rows.count();
  expect(rowcount).toBe(7);

  //2 count the header/column
  const col: Locator = rows.locator("th");
  expect(col).toHaveCount(4);

  const colcount: number = await col.count();
  expect(colcount).toBe(4);
  console.log(colcount);

  // 3 read all data from 2nd row (index 2means 3rd row including header)

  const secrowcells: Locator = rows.nth(2).locator("td");
  const secrowtext: string[] = await secrowcells.allInnerTexts();
  console.log(secrowtext);
  await expect(secrowcells).toHaveText(["Learn Java", "Mukesh", "Java", "500"]);

  //printning second row data
  for (let text of secrowtext) {
    console.log(text, "\n-------------------------------\n");
  }

  //print all the data of the tabel expect the header
  //approach 1
  for (let i = 1; i < rowcount; i++) {
    console.log(await rows.nth(i).innerText());
    // console.log(await rows.nth(i).allInnerTexts());
  }
  console.log("\n-------------------------------\n");
  const allrowdata = await rows.all();
  for (let row of allrowdata.slice(1)) {
    console.log(await row.locator("td").allInnerTexts());
  }
});
