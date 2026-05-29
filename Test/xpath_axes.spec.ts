import { test, expect, Locator } from "@playwright/test";

test("Xpath Axes", async ({ page }) => {
  await page.goto("https://www.w3schools.com/html/html_tables.asp", {
    waitUntil: "domcontentloaded",
  });

  //1 self axes
  const country: Locator = page.locator("//td[text()='Mexico']/self::td");
  await expect(country).toHaveText("Mexico");
  //2 parent
  const row: Locator = page.locator("//td[text()='Mexico']/parent::tr");
  await expect(row).toBeVisible();
  await expect(row).toContainText("Francisco Chang Mexico");
  console.log(await row.textContent());

  //3 child
  const child: Locator = page.locator(
    "//table[@id='customers']//tr[2]/child::td",
  );
  await expect(child).toHaveCount(3);

  //4 ancestor
  const table: Locator = page.locator("//td[text()='Germany']/ancestor::table");
  await expect(table).toHaveAttribute("id", "customers");
  //5 decendamt
  const table2 = page.locator("//table[@id='customers']/descendant::td");
  await expect(table2).toHaveCount(18);
  //6 following

  const follow: Locator = page.locator(
    "//td[text()='Germany']/following::td[1]",
  );
  await expect(follow).toHaveText("Centro comercial Moctezuma");
  //7 following-sibling

  const follow_sibling = page.locator(
    "//td[text()='Germany']/following-sibling::td",
  );
  await expect(follow_sibling).toHaveCount(0);
  //8 preceding-sibling axes

  const preceding_sib: Locator = page.locator(
    "//td[text()='Germany']/preceding-sibling::td",
  );
  await expect(preceding_sib).toHaveCount(2);

  //9 preceding axes
  const preceding: Locator = page.locator(
    "//td[text()='Mexico']/preceding::td",
  );
  await expect(preceding.first()).toContainText("Alfreds Futterkiste");

  console.log(await preceding.allTextContents());
});
