/*
DOM -> Document Object Model
DOM is a API interface provided by browsers to interact with browsers

page.getByAltText() to locate an element, usually image, by its text alternative.
page.getByRole() to locate by explicit and implicit accessibility attributes.
page.getByText() to locate by text content.
page.getByLabel() to locate a form control by associated label's text.
page.getByPlaceholder() to locate an input by placeholder.

page.getByTitle() to locate an element by its title attribute.
page.getByTestId() to locate an element based on its data-testid attribute (other attributes can be configured). //rarly used & only for data-testid  
 */

import { test, expect, Locator } from "@playwright/test";

test("Locators - getByAltText", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
  // identifies images & [similar element] based on the alt attribute
  const logo: Locator = page.getByAltText("nopCommerce demo store");
  await expect(logo).toBeVisible();
});

test("locators - getByText", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
  const text: Locator = page.getByText("welcome");
  await expect(text).toBeVisible();

  await expect(page.getByText("WELCOME")).toBeVisible(); //single statement
  await expect(page.getByText(/Welcome/i)).toBeVisible(); //Regular insensitive
});

test("locators - getByRole", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/");
  await page.getByRole("link", { name: "Register" }).click();
  //   page.getByRole("heading", { name: "Register" });
  //   await expect(page.getByText("Register")).toBeVisible();
  //   await expect(page.getByRole("heading", { name: "Register" })).toBeVisible();
});

test("locators - getByLabel", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register");
  await expect(page.getByRole("heading", { name: "Register" })).toBeVisible();
  await page.getByLabel("First name:").fill("Manoj");
  await page.getByLabel("Last name:").fill("A");
  await page.getByLabel("Email:").fill("test@gmail.com");
});

test("locators - getByPlaceholder", async ({ page }) => {
  await page.goto("https://demo.nopcommerce.com/register");
  await page.getByPlaceholder("Search store").fill("Apple phone");
});

test("locators - getByTitle", async ({ page }) => {
  await page.goto("https://dd-demo-tau.vercel.app/playwright-practice.html");
  const link: Locator = page.getByTitle("User Title");
  await expect(link).toHaveText(" ");
});

test("locators - getByTestId", async ({ page }) => {
  await page.goto("file:///C:/Users/AMa/Desktop/Learning/JS/Test/app.html");

  await expect(page.getByTestId("page-title")).toHaveText(
    "Playwright TestID Practice",
  );
});
