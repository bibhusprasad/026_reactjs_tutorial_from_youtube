
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

* Ignore App.jsx and index.css file changes. Refactored the code after create store changes.

[Implement Slice](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/624a1c184ffee51efdc54148d3f005504f4db169)

### 03. Create Store

[Implement Store](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/43925cb1809353026431d6c47b1d59a8b6258554)

### 04. Add Task

[Add Task](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/4d7b60dcb725740cb6faf8ba69bfb22a09cc208e)

### 05. Display All Task

[Display All Task](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/b886eabda31fc207d6ed82af1546cea5e08b8019)

### 06. Implement filter and toggle task

[Implement filter and toggle task](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/198476682995b66a2ce6287d617177002bcd6550)

### 06. Implement delete task
