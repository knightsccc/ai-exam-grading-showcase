const { expect, test } = require("@playwright/test");

test("defaults to Chinese, supports review interaction, and switches to English", async ({
  page,
}) => {
  await page.goto("/");

  await expect(page.locator(".synthetic-label")).toBeVisible();
  await expect(page.locator(".synthetic-label")).toContainText(
    "仅使用合成数据",
  );
  await expect(
    page.getByText("公开脱敏项目展示", { exact: false }),
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
    "已确认这条合成复核记录",
  );

  await page.locator('[data-language="en"]').click();
  await expect(page.getByRole("heading", { level: 1 })).toHaveText(
    "Evidence-first exam evaluation",
  );
  await expect(page.locator(".synthetic-label")).toContainText(
    "Synthetic data only",
  );
  await expect(page.locator("#trace-input")).toHaveText(
    "Clear response region",
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
