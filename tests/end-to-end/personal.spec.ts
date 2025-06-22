import { test, expect } from "@playwright/test";
import { TEST_SELECTORS } from "#t/const/selectors";

const INVALID_DATA = {
  surname: "a",
  name: "a",
  patronymic: "a",
  email: "invalid",
  telegram: "invalid",
};

const VALID_DATA = {
  surname: "Smith",
  name: "John",
  patronymic: "Michael",
  email: "john.smith@example.com",
  telegram: "@johnsmith",
};

test.describe("Quiz: Person Section", () => {
  test.beforeEach(async ({ page, baseURL }) => {
    await page.goto(baseURL || "http://localhost:3000");

    await page.getByTestId(TEST_SELECTORS.mainPage.startButton).click();
  });

  [
    ["surname", TEST_SELECTORS.quizPage.person.surnameInput],
    ["name", TEST_SELECTORS.quizPage.person.nameInput],
    ["patronymic", TEST_SELECTORS.quizPage.person.patronymicInput],
    ["email", TEST_SELECTORS.quizPage.person.emailInput],
    ["telegram", TEST_SELECTORS.quizPage.person.telegramInput],
  ].forEach(([label, selector]) => {
    test(`should display validation error on empty ${label}`, async ({
      page,
    }) => {
      await page
        .getByTestId(TEST_SELECTORS.quizPage.person.submitButton)
        .click();

      await expect(page.getByTestId(selector)).toHaveAttribute(
        "aria-invalid",
        "true",
      );
    });
  });

  test("should display validation error on invalid email", async ({ page }) => {
    const emailField = page.getByTestId(
      TEST_SELECTORS.quizPage.person.emailInput,
    );
    await emailField.fill("invalid");
    await page.getByTestId(TEST_SELECTORS.quizPage.person.submitButton).click();

    await expect(page.getByText("Email должен быть валидным")).toBeVisible();
  });

  test("should display validation error on invalid telegram", async ({
    page,
  }) => {
    const telegramField = page.getByTestId(
      TEST_SELECTORS.quizPage.person.telegramInput,
    );
    await telegramField.fill("invalid");
    await page.getByTestId(TEST_SELECTORS.quizPage.person.submitButton).click();

    await expect(page.getByText("Тег должен начинаться с @")).toBeVisible();
  });

  test("should proceed on valid values", async ({ page, baseURL }) => {
    const inputs = {
      name: page.getByTestId(TEST_SELECTORS.quizPage.person.nameInput),
      surname: page.getByTestId(TEST_SELECTORS.quizPage.person.surnameInput),
      patronymic: page.getByTestId(
        TEST_SELECTORS.quizPage.person.patronymicInput,
      ),
      email: page.getByTestId(TEST_SELECTORS.quizPage.person.emailInput),
      telegram: page.getByTestId(TEST_SELECTORS.quizPage.person.telegramInput),
    };

    for (const key in inputs) {
      await inputs[key as keyof typeof inputs].fill(
        VALID_DATA[key as keyof typeof VALID_DATA],
      );
    }

    await page.getByTestId(TEST_SELECTORS.quizPage.person.submitButton).click();

    await expect(page).toHaveURL(
      (baseURL || "http://localhost:3000") + "/quiz/profession",
    );
  });

  test("values should be saved, if user click back on next quiz step", async ({
    page,
    baseURL,
  }) => {
    const inputs = {
      surname: page.getByTestId(TEST_SELECTORS.quizPage.person.surnameInput),
      name: page.getByTestId(TEST_SELECTORS.quizPage.person.nameInput),
      patronymic: page.getByTestId(
        TEST_SELECTORS.quizPage.person.patronymicInput,
      ),
      email: page.getByTestId(TEST_SELECTORS.quizPage.person.emailInput),
      telegram: page.getByTestId(TEST_SELECTORS.quizPage.person.telegramInput),
    };

    for (const key in inputs) {
      await inputs[key as keyof typeof inputs].fill(
        VALID_DATA[key as keyof typeof VALID_DATA],
      );
    }

    await page.getByTestId(TEST_SELECTORS.quizPage.person.submitButton).click();
    await page.waitForURL(
      (baseURL || "http://localhost:3000") + "/quiz/profession",
    );
    await page
      .getByTestId(TEST_SELECTORS.quizPage.profession.backButton)
      .click();

    await page.waitForURL(
      (baseURL || "http://localhost:3000") + "/quiz/person",
    );

    for (const key in inputs) {
      await expect(inputs[key as keyof typeof inputs]).toHaveValue(
        VALID_DATA[key as keyof typeof VALID_DATA],
      );
    }
  });
});
