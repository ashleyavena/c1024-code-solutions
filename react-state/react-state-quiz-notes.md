# react-state-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- What are _hooks_ in React?
  special functions that let components have access to state features, used to add state into a component.
  Common hooks include:

* useState(): Manages state.
* useEffect: Handles side effects (data fetching)
* useContext: Accesses context values.

- What are the "Rules of Hooks"? (if necessary, re-read the "Pitfall" box in [State](https://react.dev/learn/state-a-components-memory))

1. function name must start with 'use' followed by uppercase letter
2. hooks can only be called by React components & other hooks
3. Call Hooks at the Top Level: all hooks in a component must always be called at the top level of a component, in the same order, CANT call hooks in nested functions/conditionals (ensures hooks are called in the same order every time a component renders)

4. Only Call Hooks from React Functions: Use hooks only within React functional components or custom hooks.

- What is the purpose of state in React?
  State in React is a component's "memory" or data that a component saves so it can modify its output
  lets React create dynamic components that can respond to user input & update what's being displayed to the DOM based on user interactions/variable value changes

- Why can't we just maintain state in a local variable?
  Local variables don’t trigger re-renders when updated. React state, managed through hooks like useState, ensures that UI updates reflect changes automatically.
  We need to tell React what data needs to be saved between component re-renders. Possible by storing the desired data in a state variable that React can persist across re-renders of the component.

- What two actions happen when you call a `state setter` function?

1. State Update: React updates the state with the new value.
2. Re-render Trigger: React re-renders the component with the updated state.
   when you update a state value with a setter function, the new value is cached by React, but the value of the state variable itself is not updated.

- When does the local `state variable` get updated with the new value?
  it's updated after React re-renders the component. State updates in React are asynchronous, changes aren’t immediately reflected in the next line of code, instead it's scheduled to update & triggers a re-render.

## Notes

All student notes should be written here.
In React, a component will be re-rendered when one of the two following things happen:
When a state value is updated in a component
When a component's parent is re-rendered

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
