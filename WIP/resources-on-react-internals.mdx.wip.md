---
title: Resources on React js Internals
date: "2019-02-04T22:40:32.169Z"
---

In this post i've just listed out best links which i found so far and helps to dive deeper in React internals.

## Functional Programming(Basics)

As we know that React constantly surged from [Functional Programming](https://en.wikipedia.org/wiki/Functional_programming) paradigm and below are few necessary concepts from FP needs to understand.

- [Purity](https://github.com/hemanth/functional-programming-jargon#purity)
- [Function Composition](https://github.com/hemanth/functional-programming-jargon#function-composition)
- [Side effects](https://github.com/hemanth/functional-programming-jargon#side-effects)
- [Lazy evaluation](https://github.com/hemanth/functional-programming-jargon#lazy-evaluation)
- [Higher-Order Functions (HOF)](https://github.com/hemanth/functional-programming-jargon#higher-order-functions-hof)
- [Immutability](https://en.wikipedia.org/wiki/Immutable_object)
- [Currying](https://github.com/hemanth/functional-programming-jargon#currying)
- [Memoization](https://en.wikipedia.org/wiki/Memoization)

[lodash js](https://github.com/lodash/lodash) / [30-seconds-of-code](https://github.com/30-seconds/30-seconds-of-code) are the best implementation example of FP.


### React Internals

Most of the below links are from [this](https://overreacted.io/react-as-a-ui-runtime/) article by [Dan Abramov](https://mobile.twitter.com/dan_abramov).

- [Host Tree](https://overreacted.io/react-as-a-ui-runtime/#host-tree)
- [Reconciliation](https://reactjs.org/docs/reconciliation.html)
  - [How reconciliation works](https://overreacted.io/react-as-a-ui-runtime/#reconciliation)
  - [react-reconciler](https://github.com/facebook/react/tree/master/packages/react-reconciler)
  - [Lists](https://overreacted.io/react-as-a-ui-runtime/#lists)
- [Renderer](https://overreacted.io/react-as-a-ui-runtime/#renderers)
- [React Components, Elements, and Instances](https://reactjs.org/blog/2015/12/18/react-components-elements-and-instances.html)
  - [React Elements](https://overreacted.io/react-as-a-ui-runtime/#react-elements)
- [Purity](https://overreacted.io/react-as-a-ui-runtime/#purity)
- [Recursion](https://overreacted.io/react-as-a-ui-runtime/#recursion)
- [Inversion of Control](https://overreacted.io/react-as-a-ui-runtime/#inversion-of-control)
- [Lazy Evaluation](https://overreacted.io/react-as-a-ui-runtime/#lazy-evaluation)
- [State](https://overreacted.io/react-as-a-ui-runtime/#state)
  - [How Does setState Know What to Do?](https://overreacted.io/how-does-setstate-know-what-to-do/)
- [Consistency](https://overreacted.io/react-as-a-ui-runtime/#consistency)
- [Memoization](https://overreacted.io/react-as-a-ui-runtime/#memoization)
- [Batching](https://overreacted.io/react-as-a-ui-runtime/#batching)
- [Call Tree](https://overreacted.io/react-as-a-ui-runtime/#call-tree)
- [Context](https://overreacted.io/react-as-a-ui-runtime/#context)
- [Effects](https://overreacted.io/react-as-a-ui-runtime/#effects)
- [Custom Hooks](https://overreacted.io/react-as-a-ui-runtime/#custom-hooks)

## Advanced React

- [The Inner Workings Of Virtual DOM](https://medium.com/@rajaraodv/the-inner-workings-of-virtual-dom-666ee7ad47cf)
- [react-redux-links - react-implementation.md](https://github.com/markerikson/react-redux-links/blob/master/react-implementation.md)
- [Building Your Own React Clone](https://blog.javascripting.com/2016/10/05/building-your-own-react-clone-in-five-easy-steps/)
- [A Virtual DOM and diffing algorithm](https://github.com/Matt-Esch/virtual-dom)
- [Under the hood: React](https://github.com/Bogdan-Lyashenko/Under-the-hood-ReactJS)


Hope that was helpful on your journey.

Thanks.