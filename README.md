# BankTransaction
Sample bank transaction page using Angular, jQuery, and Bootstrap.

=== General Info ===
Front-End framework used: Angular, jQuery, Bootstrap.
Tools used: Grunt, Scss.
To run the page, just go to web folder and open TransactionPage.html.

=== Reason to choose the technology ===
Angular:
- Ability to load new content without reloading the whole page.
- The use of templates which makes the application more maintainable in the future.
- Good extensibility. It allows developers to create custom element or attributes using customised directive.

Jquery:
- Simple syntax (eg. selecting DOM elements)
- Cross browser compatibility

Bootstrap:
- Provide responsive design.
- Cross browser compatibility.
- Saves time (eg. the navigation bar at this application).

Grunt:
- Easily concat the separated javascript and CSS.
- It can compress your CSS, javascript, and even image. Make them smaller thus provide better performance.

Scss: 
- Only handles by one HTTP request.
- Mixins makes the code more reusable.
- Reusable variables.

=== 1: JavaScript ===
The unit test is available in the tests folder. The test is done using Karma/Jasmine/Angular-mock.

=== 2: HTML and CSS ===
The page already tested on Google Chrome and Internet Explorer 11. The reason why these two browser were chosen is because according to www.netmarketshare.com, those two have the most user. A more detailed statistic can be seen at https://www.netmarketshare.com/browser-market-share.aspx?qprid=2&qpcustomd=0. 

The web page is responsive as well, thanks to bootstrap media query. It still displays properly even until the browser's width is reduced to as low as 367px.