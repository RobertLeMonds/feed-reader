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

            /* Loops through each feed to make sure URL is defined and URL isn't empty */

            allFeeds.forEach(function(feeds) {
                expect(feeds.url).toBeDefined();
                expect(feeds.url.length).not.toBe(0);
            });

        });

        /* Loops through each feed to ensure name is defined and not empty */
        it('Name is defineed and is not empty', function() {
            allFeeds.forEach(function(feeds) {
                expect(feeds.name).toBeDefined();
                expect(feeds.name.length).not.toBe(0);
            });
        });
    });

    /* Test Suite named "The Menu" */


    describe('The Menu', function() {



        it('is hidden by default', function() {
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });


        it('menu changes visibility when the menu icon is clicked', function() {
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(false);
            $('.menu-icon-link').click();
            expect($('body').hasClass('menu-hidden')).toBe(true);
        });
    });

    /* Test suite named "Initial Entries" */

    describe('Initial Entries', function() {
        beforeEach(function(done) {
            loadFeed(0, done);
        });

        it('feed container called and has at least one entry', function() {
            expect($('.feed .entry').length).not.toBe(0);
        });

        /* Test suite name "New Feed Selection" */

        describe('New Feed Selection', function() {
            var $initialFeed,
                $newFeed;

            beforeEach(function(done) {
                loadFeed(0, function() {
                    $initialFeed = $('.feed').html();
                    done();
                });
            });

            beforeEach(function(done) {
                loadFeed(1, function() {
                    $newFeed = $('.feed').html();
                    done();
                });
            });

            it('after new feed is loaded, content is changed ', function(done) {
                expect($initialFeed).not.toEqual($newFeed);
                done();
            });


        });
    });


}());