/* feedreader.js
 *
 * This is the spec file that Jasmine will read and contains
 * all of the tests that will be run against your application.
 */

/* We're placing all of our tests within the $() function,
 * since some of these tests may require DOM elements. We want
 * to ensure they don't run until the DOM is ready.
 */
$(function() {
    /* This is our first test suite - a test suite just contains
    * a related set of tests. This suite is all about the RSS
    * feeds definitions, the allFeeds variable in our application.
    */
    describe('RSS Feeds', function() {
        /* This is our first test - it tests to make sure that the
         * allFeeds variable has been defined and that it is not
         * empty. Experiment with this before you get started on
         * the rest of this project. What happens when you change
         * allFeeds in app.js to be an empty array and refresh the
         * page?
         */
        it('are defined', function() {
            expect(allFeeds).toBeDefined();
            expect(allFeeds.length).not.toBe(0);
        });


         it('URL is defined and URL is not empty', function() {
            /* Loops through each feed */
            allFeeds.forEach(function(feeds) {
                expect(feeds.url).toBeDefined();
                expect(feeds.url.length).not.toBe(0);
            });

         });


         it('Name is defineed and is not empty', function() {
            allFeeds.forEach(function(feeds) {
                expect(feeds.name).toBeDefined();
                expect(feeds.name.length).not.toBe(0);
            });
         });
    });


        /*Test expects feed name to be defined, and expects feed name length not
        to be 0.  This test passes, now 3 specs, 0 failures. When a feed's
        name is deleted, the test fails until it is restored.*/

    /* TODO: Write a new test suite named "The menu" */

    describe('The menu', function() {

        /* TODO: Write a test that ensures the menu element is
         * hidden by default. You'll have to analyze the HTML and
         * the CSS to determine how we're performing the
         * hiding/showing of the menu element.
         */

         it('is hidden by default', function() {
             expect($('body').hasClass('menu-hidden')).toBe(true);
         });

         /*HTML body initializes with class 'menu-hidden', this
         class is toggled each time the hamburger icon is clicked, by app.js lines 131,132.
         Above test expects class 'menu-hidden' be true by default.  Test passes.
         When HTML body class 'menu-hidden' is altered to 'menu-',
         test fails until 'menu-hidden' is restored.  4 specs 0 failures.*/

         /* TODO: Write a test that ensures the menu changes
          * visibility when the menu icon is clicked. This test
          * should have two expectations: does the menu display when
          * clicked and does it hide when clicked again.
          */

          it('menu changes visibility when the menu icon is clicked', function() {
              $('.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(false);
              $('.menu-icon-link').click();
                expect($('body').hasClass('menu-hidden')).toBe(true);
          });
    });

}());
