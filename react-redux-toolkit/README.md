
# [Home Readme file](.././README.md)

react-redux-toolkit
------------------------

### 01. Initial Setup

>npm create vite@latest react-redux-toolkit -- --template react

>cd react-redux-toolkit

>npm i react-router

[Initial Commit](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/e7e70555ea77e006c48374b5cb857ac004457650)

![plot](/images-for-note/01.react-redux.png?raw=true)

![plot](/images-for-note/02.react-redux.png?raw=true)

#### Redux vs Redux Toolkit

* Both has same use and purpose
* We need to write more code in Redux
* Redux toolkit is wrapper of redux
* Action and reducer come as slice

#### Redux

* Redux is a state management library used in JavaScript applications (specially React) to manage and centralize application state.

![plot](/images-for-note/03.react-redux.png?raw=true)

#### Redux Toolkit

* Redux Toolkit (RTK) is the official recommended way to write redux logic. It was created to simplify Redux development, address common problems and reduce boilerplate code

* Slice = Action + Reducers

![plot](/images-for-note/04.react-redux.png?raw=true)

![plot](/images-for-note/05.react-redux.png?raw=true)

#### Store

![plot](/images-for-note/06.react-redux.png?raw=true)

#### Provider

![plot](/images-for-note/07.react-redux.png?raw=true)

#### Slice

* Slice = Action + Reducers

* We can a single store for the entire application. It work like centralized data storage for the entire application.
* For Example for Task Manager application
  * Each task is a store. we need to keep it in store.
  * The logic for each Action and Reducer for a task like delete, update, complete is stored in a Slice.

* Take another example Counter application
  * Reducer hold the logic of Increment and decrement part
  * Action will tell whether it need to increase or decrease

#### Install Redux toolkit

>npm install @reduxjs/toolkit react-redux

### 02. Implement Slice

[Implement Slice](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/14ec881938f11e53144d1ca7d73aa32a73cacbcd)

### 03. Implement Store

[Implement Slice](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/4904a57f69ada1700808401d0a92eaa6ec7d2fd6)

### 04. Add Items to cart

[Implement Slice](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/d9b465e0e9e440acf3436be8a2f1d5fbd7f74f08)

[Refactored code]