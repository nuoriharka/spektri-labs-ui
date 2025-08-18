import { test, expect } from "@playwright/test";

test("logo cloud renders", async ({ page }) => {
  await page.goto("/");
  const logos = page.locator('section svg[role="img"]');
  await expect(logos).toHaveCount(11);
  await expect(page.getByLabel("Stripe")).toBeVisible();
});
