# react-routing-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- How does the browser URL change when navigating through a Single Page App? How does a user expect the URL to change as they navigate through a browser app?

navigating between views updates the browser's URL without a full page reload, by using the browser's History API

Users expect the URL to reflect the current view or page:

Descriptive paths (e.g., /products, /about)
Dynamic segments reflecting specific content (e.g., /products/123)
Search query parameters (e.g., ?search=shoes)
Bookmarkable URLs that restore the same view when reloaded

- What NPM package can be used to make navigating a React app behave as users expect?
  The most popular package is React Router, installed via:
  npm install react-router-dom

- Which React Router component(s) can be used to set up your app's navigation?
  Key components:

BrowserRouter: Wraps the entire app and manages URL changes.
Routes: Groups route definitions.
Route: Defines a specific route and its corresponding component.
Link: Creates navigation links without page reloads.
NavLink: Similar to Link, but allows for active styling.

- How does React Router match the browser URL to one of your app's React components?
  React Router uses a declarative approach:

-checks each defined <Route> path from the top of the Routes list.
It uses path matching rules, supporting exact and partial matches.
When a match is found, it renders the associated component.

- What is the purpose of React Router's `Outlet` component?
  acts as a placeholder for rendering child routes inside a parent route, allows nesting routes while keeping the layout of the parent

- What React Router hook is used to access route path dynamic segments (those that start with `:` in the `path`)?
  The useParams() hook retrieves dynamic segments from the current route
  const { id } = useParams();

- What React Router hook is used to navigate programmatically?
  The useNavigate() hook allows navigation from within a component:
  const navigate = useNavigate();
  navigate("/home");

## Notes

All student notes should be written here.

How to write `Code Examples` in markdown

for JS:

```javascript
const data = 'Howdy';
```

for HTML:

```html
<div>
  <p>This is text content</p>
</div>
```

for CSS:

```css
div {
  width: 100%;
}
```
