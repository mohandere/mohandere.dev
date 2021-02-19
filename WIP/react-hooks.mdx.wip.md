---
title: React Hooks
date: "2019-05-18T22:40:32.169Z"
---


## Table of contents
- Motivation
- React hooks
  - useState
  - useEffect
  - useRef
  - useContext
  - useReducer
  - useMomo
  - useCallback
- Custom Hooks


### Motivation

With React it's hard to reuse login among components and seperating concerns especially with class components.

With React we may have faced below challenges with -

- Refactor and test Huge components(because complex components are hard to understand), for example --?
- Don't duplicate logic between different components and lifecycle methods.
- How to share stateful non-visual logic among components.

So if you whith React a while you might be familliar with techniques/patterns like [HOC](https://mohandere.github.io/react/higher-component-in-react/), [render props](https://reactjs.org/docs/render-props.html). These patterns already tried to solve these problems. But using these patterns require you to refactor your component which can be tricky and also harder to follow.

Also HOC or render props can introduce unnecessary nesting into your component tree.


Thats why React came up with React hooks. Hooks aims to solve these problems.

With hooks you can extract stateful logic without changing your component hierarchy and this makes react hooks easy to share among components with [minimum lines of code](https://twitter.com/prchdk/status/1056960391543062528?ref_src=twsrc%5Etfw).

Instead of class, functions seem to be a perfect mechanism for code reuse.

But functions can’t have local React state inside them and Hooks solve exactly that problem.

**Hooks let you use React features (like state) from a function — by doing a single function call. React provides a few built-in Hooks exposing the “building blocks” of React: state, lifecycle, and context.**

**So hooks let you split your component into smaller functions based on what peices are related, rather than forcing split based on life-cycle methods.**


> The goal of React is to empowers developers to spend less time thinking about code, more time thinking about user expericnce. - React Team

----

### What is hook?

Hooks are functions that gives you React features like state and lifecycle methods without classes.

*Hook - Hook functions into React features.*

### Rules to use hooks

  - Only call Hooks at the top level and not inside loops, conditions, or nested functions.
  - Only call Hooks from React function components and not from regular JavaScript functions.
  - Hooks should sit at the top level of your component

These are mandatory rules to follow as they are essential to making Hooks work well.

-----

## React hooks

Let's have overview some of the hooks by React.

### State hook [useState](https://reactjs.org/docs/hooks-state.html)

```jsx
import React, { useState } from 'react'
function AddTodo() {
  const [todo, setTodo] = useState('');
  return (
    <>
    <input type="text" value={todo} onChange={(e) => setTodo(e.target.value)} placeholde="Add todo" />
    </>
  )
```

Example 2 -

```jsx
import React, { useState } from 'react'
function Example() {
  const [name, setName] = useState('');
  const [bio, setBio] = useState('');
  return (
    <form>
      <div className="form-group">
        <input type="text" value={name} onChange={(e) => setName(e.target.value)} placeholde="Enter your name" />
      </div>
      <div className="form-group">
        <textarea onChange={(e) => setBio(e.target.value)} placeholde="Enter your name">{bio}</textarea>
      </div>
    </form>
  )
```

Points to note -

- Call `useState` within functional component only
- We can have multiple `useState` hooks within our functional component
- Order matters for multiple hook calls
- React will preserve state between renders

### Effect hook [useEffect](https://reactjs.org/docs/hooks-effect.html)

You can think of `useEffect` Hook as `componentDidMount`, `componentDidUpdate`, and `componentWillUnmount` combined class lifecycle methods.

The Effect Hook lets you perform side effects in function components like
- Data fetching from server
- Setting up a subscription
- Changing the DOM
- Adding DOM event listeners
- etc


Effect hook singnature -

```jsx
useEffect(() => {
  ...
}, []);
```

Arguments explained -
  1. Callback function, this fn will run after each state update
  2. We can pass an array as an optional argument to skip applying an effect/re-run if values from array haven’t changed between re-renders.

Example 1 -

```jsx
import React, { useState } from 'react'
function Search() {
  const [search, setSearch] = useState('');
  useEffect(() => {
    // You can use latest `search` state value now
    // For example you can filter todos based on seach value
    console.log(`You entered: ${search}`);
  });
  return (
    <>
    <input type="text" value={search} onChange={(e) => setSearch(e.target.value)} placeholde="Search todos" />
    </>
  )
```

Example 2 -

```jsx
const useFetch = (url, defaultData) => {
  const [data, updateData] = useState(defaultData);
  useEffect(async () => {
    const resp = await fetch(url);
    const json = await resp.json();
    updateData(json);
  }, [url]) // This effect will re-run only if `url` value changed between renders
  return data;
}
```

**How can we skip each re-run of `useEffect`?**

We can skip applying an effect if certain values haven’t changed between re-renders. To do so, we can pass an array as an optional second argument to `useEffect`

Example -

```jsx
useEffect(() => {
  document.title = `You clicked ${count} times`;
}, [count]); // Only re-run the effect if count changes
```

Some side effects **needs to be cleaned up before** unmounting component, for example DOM event listeners needs to be removed. On the other hand some don’t(for example api calls).

Points to note -

- We can have multiple `useEffect` in same functional component to to Separate Concerns
- `useEffect` Run on Each Update

-----

### Ref hook [useRef](https://reactjs.org/docs/hooks-reference.html#useref)

### Context hook [useContext](https://reactjs.org/docs/hooks-reference.html#usecontext)

### Reducer hook [useReducer](https://reactjs.org/docs/hooks-reference.html#usereducer)

### Momo hook [useReducer](https://reactjs.org/docs/hooks-reference.html#usemomo)

### Callback hook [useReducer](https://reactjs.org/docs/hooks-reference.html#usecallback)


## Custom Hooks

Custom hooks are same as hooks, but its defined by you!

That is custom hook is -
- JavaScript functions
- prefix with `use`. Example - `useSearch()`
- May call other hooks

Let's have a fun by building custom one! But before that let me remind you that why we using custom hooks.

The one and only purpose of hooks is that, hooks let you extract component logic into reusable functions.

In real world project, we often encountes cases wherein we need to use same logic at multiple places. For example, You are working on shopping website where you have to calculate price of product on quantity change, right?

But there is cart also with added products(but with different UI) and from cart, you can change quantity as well.

Now you can't repeat Product component but you do price calulation logic.

That's when you can use custom hook like -

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";

function Product(props) {
  const {
    quantity,
    handleQuantityChange
  } = usePrice(props.price);

  function handleSubmit(e) {
    // Do what you want here...
    // may be
  }

  return (
    <section>
      <h2>{props.name}</h2>
      <div>{props.sku}</div>
      <div>{props.desc}</div>
      <div>{props.price}</div>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <input type="number" value={quantity} onChange={handleQuantityChange} />
          <button type="submit">Add to basket</button>
        </div>
      </form>
    </section>
  );
}

const usePrice = (defaultPrice) => {
  const [quantity, setQuantity] = useState(0);
  const [price, setPrice] = useState(defaultPrice);

  function handleQuantityChange(e) {
    let newQuantity = Number(e.target.value)
    setQuantity(newQuantity);
    // Your own logic to calculat price
    // May be you want to apply coupon
    let newPrice = (defaultPrice * newQuantity) + 0.25;
    setsetPrice(newPrice);
  }

  return {
    quantity,
    price,
    setQuantity
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TodoApp />, rootElement);
```

Example 2 - Find books by name

```jsx
import React, { Fragment, useState, useEffect } from 'react';
import axios from 'axios';
import filter from 'lodash/filter';

function App() {

  let {
    books,
    setQuery
  } = useBooksApi();

  return (
    <Fragment>
      <input type="text" value={query} onChange={event => setQuery(event.target.value)} />
      <ul>
      {books.map(item => (
        <li key={item.objectID}>
          <a href={item.url}>{item.title}</a>
        </li>
      ))}
      </ul>
    </Fragment>
  );
}

function useBooksApi() {
  const [books, setBooks] = useState([]);
  const [query, setQuery] = useState('');

  useEffect(() => {
    const getBooks = async () => {
      fetch(`http://hn.algolia.com/api/v1/search?query=${query}`)
      .then(response => response.json())
      .then(response => {
        let books = filter(response.hits, o => o.title);
        setBooks(books);
      });
    };
    getBooks();
  }, [query]); // Do run this effect only when `query` changed

  return {
    books,
    setQuery
  }
}
```

Example 3 - Todo App

```jsx
import React, { useState } from "react";
import ReactDOM from "react-dom";

const initialTodoList = [
  "Read you-don't know js book",
  "understand react hooks"
];

function TodoApp() {
  const {
    todo,
    todoList,
    handleInputChange,
    handleSubmit,
    handleRemoveClick
  } = useTodoState();

  return (
    <section>
      <h1>TODO</h1>
      <ul className="todos">
        {todoList.map((item, i) => {
          return (
            <li key={i}>
              {item}
              <button type="button" onClick={() => handleRemoveClick(i)} className="close" />
            </li>
          );
        })}
      </ul>
      <form onSubmit={handleSubmit}>
        <div class="form-group">
          <input type="text" value={todo} onChange={handleInputChange} placeholder="Buy veggies" />
          <button type="submit">Add</button>
        </div>
      </form>
    </section>
  );
}

const useTodoState = () => {
  const [todo, setTodo] = useState("");
  const [todoList, setTodoList] = useState(initialTodoList);

  function handleInputChange(e) {
    setTodo(e.target.value);
  }

  function handleSubmit(e) {
    e.preventDefault();
    setTodoList([...todoList, todo]);
    setTodo('');
  }

  function handleRemoveClick(todoIndex) {
    const newTodoList = todoList.filter((_, i) => i !== todoIndex);
    setTodoList(newTodoList);
  }

  return {
    todo,
    todoList,
    handleInputChange,
    handleSubmit,
    handleRemoveClick
  };
}

const rootElement = document.getElementById("root");
ReactDOM.render(<TodoApp />, rootElement);
```

WIP

Hope that was helpful on your journey.

-----



## References & Credits

- [Making Sense of React Hooks](https://medium.com/@dan_abramov/making-sense-of-react-hooks-fdbde8803889)
- [Facebook developers - Intro to React Hooks](https://developers.facebook.com/videos/2019/intro-to-react-hooks/)
- [A Complete Guide to useEffect](https://overreacted.io/a-complete-guide-to-useeffect/)
- [Youtube video - React Today and Tomorrow and 90% Cleaner React With Hooks](https://www.youtube.com/watch?v=dpw9EHDh2bM)
- [Youtube video - React Today and Tomorrow and 90% Cleaner React With Hooks](https://www.youtube.com/watch?v=dpw9EHDh2bM)