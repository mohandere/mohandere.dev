---
title: Reactjs application dev tips
date: "2020-07-15T22:40:32.169Z"
---


In this article, I've summarized a few tips for writing better Reactjs applications. I've collected these tips while working on React projects over time. I hope this will be helpful to you.


### Tip

Some important *principles and patterns/concepts*

- [SOLID](https://blog.bitsrc.io/solid-principles-every-developer-should-know-b3bfa96bb688)  principles
- [Single Responsibility Principle](https://en.wikipedia.org/wiki/Single_responsibility_principle)
- [Model–view–controller](https://en.wikipedia.org/wiki/Model%E2%80%93view%E2%80%93controller)
- [Publish–subscribe pattern](https://en.wikipedia.org/wiki/Publish%E2%80%93subscribe_pattern)
- Tree data structure
- [Functional Programming Fundamentals](https://www.matthewgerstman.com/tech/functional-programming-fundamentals/)

A component should ideally only do one thing. If it ends up growing, it should be decomposed into smaller subcomponents.

*Benefits of web components*
- Reusable
- Maintainable
- Platform independent.
- Composability - compose applications using smaller chunks
- Encapsulation mechanism - Private scope
- Extensibility
- Testing
- Productivity


### Tip

Knowing *How to think in React.*

For how to, read this [Thinking in React](https://reactjs.org/docs/thinking-in-react.html) offical documentation page.


### Tip

*JS concepts*

- [Objects, Array, Collections](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch3.md#chapter-3-objects)
- [Modules](https://devhints.io/es6#modules)
- Arrow function
- Spread operator
- Destructuring Assignment
- Objects, Array, Collections - merging
- Objects, Array, Collections - shallow and deep comparison
- [Classes](https://github.com/getify/You-Dont-Know-JS/blob/master/this%20%26%20object%20prototypes/ch4.md#building)
- [Promises](https://developers.google.com/web/fundamentals/primers/promises)


### Tip

*Create Tiny Components That Just Do One Thing!*

Keep your components small, try to break down UI into smaller components and think of making one more generic.

Small components are easier to understand, test, and maintain.

Understand [container and presentational components](https://medium.com/@dan_abramov/smart-and-dumb-components-7ca2f9a7c7d0)


### Tip

*Use `React.PureComponent` if your component doesn't implement `componentShouldUpdate` method.*

```jsx
class Home extends React.PureComponent`
// instead
`class Home extends React.Component`
```

### Tip

Use `refs` instead of `state` if you don't want to re-render component.



### Tip

*Prefer functional components(and hooks) unless you need class components.*
[React hooks](https://reactjs.org/docs/hooks-intro.html) will solves the problem of needing life cycle method.


### Tip

If you are doing any async calls from `componentDidMount`, then might see below warning in your console.

> Warning: Can't perform a React state update on an unmounted component. This is a no-op, but it indicates a memory leak in your application. To fix, cancel all subscriptions and asynchronous tasks in the componentWillUnmount method.

To fix this please follow this link - https://www.robinwieruch.de/react-warning-cant-call-setstate-on-an-unmounted-component/

### Tip

While rendering lists, you need to pass 'key' prop while iterating over items, don't use current index as key instead, try to use unique value(number or string) from current item or use extenal unique id generation libs like -

```jsx
import shortid from  "shortid";

<Comment  key={shortid.generate()} /> OR
<Comment  key={comment.ID} />

```


### Tip

*Dependency optimization - Don't import whole library if you need only few functions from it.*

Example

```jsx
import _ from 'lodash;
// instead do
import toString from 'lodash/toString';
```

### Tip

*Split code with `React.lazy` and use `Suspense` for off-screen components.*

You can also use route-based and/or component-based code splitting techniques.


```jsx
import React, { lazy, Suspense } from 'react';
const AvatarComponent = lazy(() => import('./AvatarComponent'));
const renderLoader = () => <p>Loading</p>;
const DetailsComponent = () => (
  <Suspense fallback={renderLoader()}>
    <AvatarComponent />
  </Suspense>
)
```
How to - [link](https://web.dev/code-splitting-suspense)


### Tip

*Use `React.Fragment` over unnecessary `<div>`*

Don't add unnecessary dom element if you just want to wrap code.

Example -

```jsx
render() {
  return (
    <React.Fragment>
      Some text.
      <h2>A heading</h2>
    </React.Fragment>
  );
}
```


### Tip

*Rendering large dataset? You can virtualize large lists.(think of tweets of Twitter)*

[react-window](https://github.com/bvaughn/react-window) comes with components for efficiently rendering large lists and tabular data.

How to - [link](https://web.dev/virtualize-long-lists-react-window/)

### Tip

*Use `constructor` to bind event handlers instead of `render` function.*

```jsx
class Products extends Component {
  constructor(props) {
    super(props);
    this.state = {
      activeProductIndex: 0
    };
    this.onProductSelect = this.onProductSelect.bind(this);
  }
  ...
}
```

### Tip

*Don't fetch it again, intead store it in global state/cache it.*

For this you can use -
- React's [context api](https://reactjs.org/docs/context.html) to manage state of you sub-tree
- global state management frameworks like [redux](https://redux.js.org)
- libraries like [react-query](https://github.com/tannerlinsley/react-query) to fetch data and cache it.
- etc

```jsx
componentDidMount() {
  let { users } = this.props;
  // Means we've already fetched users, don't do it again
  if (users.length) {
    return;
  }
  // Get users from server
  this.props.getUsers();
}
```

### Tip

Always use [ErrorBoundary](https://reactjs.org/docs/error-boundaries.html) to catch app runtime errors.


### Tip

Try to avoid HOCs and Render props whenever possible. To solve such use-cases prefer React hooks.

### Tip

Use [react-devtool](https://reactjs.org/blog/2019/08/15/new-react-devtools.html) to debug performance.

### Tip

*Analyze your bundle size and code bloat*

Use [Source map explorer](https://www.npmjs.com/package/source-map-explorer)

```javascript
source-map-explorer bundle.min.js
source-map-explorer bundle.min.js bundle.min.js.map
source-map-explorer '*.js'
```
How to - [link](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Tip

use `useMemo` and `useCallback` hooks to memorize heavy compulations, to cache repetitive components to prevent unnecessary re-renders.

### Tip

*Try not use dom manipulation libraries like [jQuery](http://jquery.com/), prefer plain javascript over.*

May [YOU MIGHT NOT NEED JQUER](http://youmightnotneedjquery.com/) project will help here!

Well don't access DOM directly, instead use refs api.

### Tip

Use [Testing library](https://testing-library.com/docs/react-testing-library/intro) instead of Enzyme or any other testing library. Reason is [here](https://testing-library.com/docs/react-testing-library/intro#the-problem).

### Tip

[Don't test implementation details](https://kentcdodds.com/blog/testing-implementation-details)

### Tip

*Don't pass it/store it, if you don't need it!*

Don't pass unnecessary props to child components, don't save unnecessary states if you don't need them!

```jsx
render() {
  return (
    <>
      <WrappedComponent {...this.props} />
    </>
  )
}
```

### Tip

Data mutation can cost, use [pure functions](https://en.wikipedia.org/wiki/Pure_function) and DRY.

Use [Lodash js](https://lodash.com/) utility library for all kind of operations.

### Tip

Prefer [css-in-js](https://cssinjs.org/?v=v10.0.0-alpha.16) libraries like [styled-components](https://www.styled-components.com/) over css/less/scss files.

“CSS-in-JS” refers to a pattern where CSS is composed using JavaScript instead of defined in external files. Read a comparison of CSS-in-JS libraries [here](https://github.com/MicheleBertoli/css-in-js).

### Tip

*Better to organize your app.*

How to - [link](https://medium.com/@alexmngn/how-to-better-organize-your-react-applications-2fd3ea1920f1)

### Tip

Use [classnames](https://www.npmjs.com/package/classnames) for naming dynamic class names or conditionally joining classNames together.

or can prefer [clsx](https://www.npmjs.com/package/clsx).

### Tip

Prefer [composition over inheritance](https://en.wikipedia.org/wiki/Composition_over_inheritance).

### Tip

Use `Link` instead of `router.push` because there is a huge problem when it comes to accessibility here.

```jsx
function ClickButton(props) {
  return (
    <Link to="/next-page">
      <span>Go to next page</span>
    </Link>
  );
}
```

### Tip

Create new `useEffect` block to seprate concerns.

```jsx
useEffect(() => {
  // Data fetching
}, []);

useEffect(() => {
  // Some other logic
}, []);

```

### Tip

*Use service worker for caching assets.*

How to - [link](https://web.dev/precache-with-workbox-react/)

[Workbox](https://developers.google.com/web/tools/workbox/) is tool to generate service worker.


### Tip

*Understand React internals, VDOM.*

Read [React as a UI Runtime](https://overreacted.io/react-as-a-ui-runtime/)


Hope above tips will be helpful for you to write better React apps.


Thanks.