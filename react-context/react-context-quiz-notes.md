# react-context-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What is the purpose of React "context"?
  manages global state (shared values)
  used to share data btw components without having too pass props manually through every level
  ex: user authentication, themes, language settings

- What values can be stored in context?
  any JavaScript values

- How do you create context and make it available to the components?

1. create the context
   import React, { createContext } from 'react';

const MyContext = createContext(); // Create a context object

2. provide the context to components (wrap in provider component)
   const MyProvider = ({ children }) => {
   const sharedValue = { user: "Ashley", isAuthenticated: true };

return (
<MyContext.Provider value={sharedValue}>
{children}
</MyContext.Provider>
);
};

3. wrap your component tree (use top level component like App)
   import React from 'react';
   import { MyProvider } from './MyContext';

const App = () => (
<MyProvider>
<YourComponent />
</MyProvider>
);

- How do you access the context values?
  useContext hook or Context.Consumer component

1. import React, { useContext } from 'react';
   import { MyContext } from './MyContext';

const YourComponent = () => {
const context = useContext(MyContext); // Access the context value

return <div>User: {context.user}</div>;
};

2. import React from 'react';
   import { MyContext } from './MyContext';

const YourComponent = () => (
<MyContext.Consumer>
{context => <div>User: {context.user}</div>}
</MyContext.Consumer>
);

- When would you use context? (in addition to the best answer: "rarely")
  favorites
  changing themes (dark/light)
  user authentication
  language/localization
  shared state in small apps (shopping cart or user preferences)

- Why "rarely"?
  Using context can introduce tight coupling between components, making it harder to maintain, test, or refactor. It is better to manage most state locally within components or use specialized state management libraries for complex applications.

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
