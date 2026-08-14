const { expect, test } = require("@playwright/test");

test("keeps the public boundary visible and supports review interaction", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.getByText("Synthetic data only")).toBeVisible();
  await expect(
    page.getByText("Public portfolio artifact.", { exact: false }),
  ).toBeVisible();

  await page.locator('[data-case="SYN-031"]').click();
  await expect(page.locator("#selected-case-title")).toHaveText(
    "SYN-031 · Q09",
  );
  await expect(page.locator("#suggested-score")).toHaveText("4 / 5");

  await page.locator('[data-filter="language"]').click();
  await expect(page.locator('[data-case="SYN-014"]')).toBeHidden();
  await expect(page.locator("#selected-case-title")).toHaveText(
    "SYN-022 · Q03",
  );

  await page.locator("#confirm-case").click();
  await expect(page.locator("#action-feedback")).toContainText(
    "Synthetic review confirmed",
  );
});

test("fits within the viewport without horizontal overflow", async ({ page }) => {
  await page.goto("/");

  const dimensions = await page.evaluate(() => ({
    clientWidth: document.documentElement.clientWidth,
    scrollWidth: document.documentElement.scrollWidth,
  }));

  expect(dimensions.scrollWidth).toBeLessThanOrEqual(dimensions.clientWidth);
});
