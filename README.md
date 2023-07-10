# DemoQa

This repository contains a suite of automated tests written using Cypress and TypeScript. These tests are designed to validate the functionality of Demoqa application and ensure its quality. Also API of the https://emissions-api.org/ was checked

The following scenarios were covered:

### Test 1:
1. Log in by using the following credentials: username: ivf, pass: Demoqa@12
2. Add to Your Collection the 4th book from the list having O'Reilly Media as a
publisher
3. Once the book is successfully added to your collection, navigate to your profile
4. Confirm that the book present in your profile’s collection has the same author and
title as the one chosen at step 2

### Test 2:
1. Navigate to the Profile
2. (If any) Delete all the existing books from the list
3. Assert that the list of books in your collection is empty

### API Testing:
For this part, the following API: https://emissions-api.org/ was verified:
1. Get the list of available products from the relevant endpoint
2. Select a random product and use it to get the range of data available
3. Using that product and the time range you got from the 2nd step, get all the available statistics
4. Check that all the properties of the value object are numbers

# Prerequisites
Before running the tests, ensure that you have the following software installed:

Download and install code editor eg Visual Studio Code
Node.js: Download and Install Node.js

# Getting Started
To get started with running the automated tests, follow these steps:

1. Clone this repository to your local machine: `git clone <repository-url>`
2. Navigate to the project directory: `cd userPath/Demoqa`
3. Install the project dependencies: `npm install`
4. To run the test with UI interface run `npx cypress open`, choose browser and choose `ui` or `api`

## Note: some tests are failing
The api test may fall due to server response time. Setting limitation for response doesn't help.

The first UI test fails due to inability to click *Add to collection button*. This may occur due to add that is shown on the screen like `Securepubads.g.doubleclick.net`