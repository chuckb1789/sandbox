# Query Strings

When you make an HTTP GET request, you can add parameters to the
request using _query strings_.  These strings become parameters to the web app.

The syntax is fairly simple:

the URL:

http://api.openweathermap.org/data/2.5/weather

?	starts the _query string_

Paramaters then are name=value, like

lat=40		lat=40

&			separates parameters

So the whole URL, with lat=40, lon=-105, APPID= that horrid long number is:


http://api.openweathermap.org/data/2.5/weather?lat=40&lon=-105&APPID=1bce853ef4079568fbb4ecbaf73b1de7


WARNING: if you want to have spceial characters, like " " (a blank) or & or ? or some other
characters, the query must be "URL Encoded". You don't need to deal with that right now (probably)
but let me know if you need it.
