
# [Home Readme file](.././README.md)

react-rtk-taskmanager
------------------------

### 01. Initial Setup

>npm create vite@latest react-rtk-taskmanager -- --template react

>cd react-rtk-taskmanager

>npm i react-router

>npm install @reduxjs/toolkit react-redux

[Initial Commit](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/3afca1a1311a4003ff2e05e3efac2212d6d45a66)

#### Project Structure

![plot](/images-for-note/p05-01-structure.png?raw=true)

* We can a single store for the entire application. It work like centralized data storage for the entire application.
* For Example for Task Manager application
  * Each task is a store. we need to keep it in store.
  * The logic for each Action and Reducer for a task like delete, update, complete is stored in a Slice.

* Take another example Counter application
  * Reducer hold the logic of Increment and decrement part
  * Action will tell whether it need to increase or decrease

### 02. Implement Slice

[Implement Slice](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/624a1c184ffee51efdc54148d3f005504f4db169)

### 03. Create Store

