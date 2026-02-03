#  St. Trinity Playwright TypeScript Framework

## ⚙️ Setup Instructions

### Clone the project

```bash
git https://github.com/ibrahimyreyes/ibrahimyreyes-sttrinity-tech-exam.git
cd ibrahimyreyes-sttrinity-tech-exam
```

### Install dependencies

```bash
npm install
```

### Install playwright browsers

```bash
npx playwright install --with-deps
```

| Parameter  | Description                  | Example Value         |
|------------|------------------------------|-----------------------|
| BASE_URL   | The base URL for the application | "https://www.saucedemo.com" |


## 🏃‍♂️ Running Tests

Run tests:

```bash
npm run test
```

Run the test with UI mode:

```bash
npm run test:ui
```

## 📊 Viewing Test Results

### Install Allure Commandline To View Test results

#### For Windows:

Follow the instructions [here](https://scoop.sh/) to install Scoop.<br>
Run the following command to install Allure using Scoop:

```bash
scoop install allure
```

#### For Mac:

```bash
brew install allure
```

### View Results Locally:

```bash
allure serve allure-results
```
### View Results Locally from Github Actions artifact:

```bash
1. Download and extract zip file from Github Actions artifacts
2. Navigate to the location where you extracted the zip file using cmd
3. Issue this command: allure generate .\allure-results --clean -o allure-report
4. Issue this command: npx allure open allure-report
```

## ℹ️  View Help And Other CLI Options

```bash
npx playwright test --help
```
### Run Linting tool

```bash
npm run lint
```

