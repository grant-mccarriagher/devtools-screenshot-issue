export default async function scrollDown () {
  await browser.execute(function() {
    window.scroll(0, window.scrollY + window.innerHeight);
  });

  await browser.pause(500);
}
