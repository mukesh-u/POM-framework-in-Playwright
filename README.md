# Playwright POM Framework

A UI automation framework built using **Playwright** and **TypeScript** following the **Page Object Model (POM)** design pattern.

The framework demonstrates how to create scalable, maintainable, and reusable UI tests by separating page interactions from test logic.

**Application Under Test:**  
https://automationpractice.techwithjatin.com

---

## Tech Stack

- Playwright
- TypeScript
- Node.js
- Git & GitHub
- GitHub Actions (CI/CD)

---

## Framework Structure

```text
pages/
├── HomePage.ts
├── LoginPage.ts
├── MyAccountPage.ts
├── TshirtsPage.ts
├── ProductPage.ts
└── CartPage.ts

tests/
├── login.spec.ts
└── addToCart.spec.ts

data/
└── user.ts
```

---

## Implemented Scenarios

- User Login
- Account Verification
- Navigation to T-Shirts Page
- Add Product to Cart

---

## Run Tests

```bash
npm install
npx playwright install
npx playwright test
```

Run tests in headed mode:

```bash
npx playwright test --headed
```

View the test report:

```bash
npx playwright show-report
```

---

## CI/CD

GitHub Actions is configured to:

- Run on every push
- Run on pull requests
- Run on a scheduled cron job
- Upload Playwright test reports

---

## Author

**Mukesh Upadhyay**  
Software Test Engineer | Playwright | TypeScript
