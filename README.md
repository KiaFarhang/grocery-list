# Node.js Grocery List #

Alright, so I figured it was about time I checked out this Node thing. This one-page web application displays an editable grocery list. The list lives in a JSON file on the server. A page on the script instantly makes an AJAX call to the application server on load, which retrieves and parses the contents of the list file.

You can add and remove list items at any time. However, because I'm cheap and didn't want to spend $7 per month, the list is [hosted on a free Heroku plan.](http://node-grocery-list.herokuapp.com/) That means the list is wiped after 30 minutes of inactivity. Get to the grocery store fast!
