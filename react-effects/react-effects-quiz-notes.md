# react-effects-quiz-notes

## Quiz Questions

Answer the following questions in the provided markdown file before turning in this exercise:

- When is a component "mounted" to the DOM?
  when it's inserted into the DOM for the 1st time, during initial render

- What is a React Effect?
  lets you perform side effects in function components

- When should you use an Effect and when should you not use an Effect?
  USE: need to perform side effects (fetching data, updating DOM, subscribe to external systems)
  DONT USE: when side effect logic can be computed in render function (derived state, simple calcs, etc)

- When do Effects run?
  initial (when component mounts) + updates
  you can control when effects run with DEPENDENCIES

- What function is used to declare an Effect?
  useEffect is a hook
  useEffect(callback, dependencies)
  callback can be called the 'effect function'

- What are Effect dependencies and how do you declare them?
  Dependency: anything you effect uses that is declared outside the function itself
  they are values that the Effect depends on, declared in the 2nd argument of useEffect as an array[]
  EX: useEffect(() => {
  // Effect logic
  }, [dependency1, dependency2]);

- Why would you want to clean up from an Effect?
  to avoid memory leaks (allocate memory and want to let it go) (doesnt leak out it accumulates )
  remove event listeners, cancel network requests, clean up subscriptions when a component unmounts or dependencies change, start an interval (timer) and want to stop it

- How do you clean up from an Effect?
  return a cleanup function from the useEffect() callback

EX:
useEffect(() => {
setInterval
const handleResize = () => console.log(window.innerWidth);
window.addEventListener('resize', handleResize);

// Cleanup function
return () => {
clearInterval
window.removeEventListener('resize', handleResize);
};
}, []);

- When does the cleanup function run?
  before the next Effect runs (if dependencies change), and when the component is unmounted from the DOM
  effect is balanced with a cleanup

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
