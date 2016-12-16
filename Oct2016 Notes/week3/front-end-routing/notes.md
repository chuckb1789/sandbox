# Front-end Routing

> Front end routing is adding in the ability to simulate different pages in a single-page application, like we've been building with Angular. We're making changes to our page without refreshing, and we want to be able to navigate between different pages with the same idea.

Angular comes with a basic routing mechanism, `ngRoute`, which you can read about here if you want to: [ngRoute](https://docs.angularjs.org/api/ngRoute/service/$route)

There are other third-party plugins, like one called `ui-router` that are even more flexible: [ui-router](https://github.com/angular-ui/ui-router)

Note that angular routes all begin with a `#` as a route path segment.

### What is Routing?

A route, in general, is just the path you take to get somewhere. That's not specific to web development, but it's one of those words we've latched on because it's a good description – when you're changing URL, when that location bar changes, you're on a new route.

Our router just sets up which routes we want to exist, and points our code to how to make it happen.

This means our Angular app can simulate having multiple pages. Which gives us the ability to make more complex applications. Which is awesome.

Back-end routing will be handled by Express and we'll go over that later in the course.