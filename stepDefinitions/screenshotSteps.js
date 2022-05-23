import { Given, When, Then } from '@cucumber/cucumber';

// Helpers
import scrollDown from 'helpers/elementInteraction/scrollDown';

Given('I have reached the test site', async function () {
  await browser.url("https://www.github.com");
});

When('I scroll a bit', async function () {
  console.error("Scrolling down")
  await scrollDown();
  console.error("Scrolling down")
  await scrollDown();
});

When('I take a screenshot', async function () {
  console.error("Taking screenshot")
  await browser.saveScreenshot("./test.png");
});

Then('you should notice elements bouncing around and rendering weird', async function () {
  // Have to use your eyes for this
  await browser.pause(15000);
});
