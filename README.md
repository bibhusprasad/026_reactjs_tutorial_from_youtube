# 026_reactjs_tutorial_from_youtube

<https://www.youtube.com/playlist?list=PL8p2I9GklV463WUKdVzUZ17IDZ3SwoSTu>

------------------------

react-basic
------------------------

### 01. Initial Setup

>npm create vite

>npm run dev

[Initial Commit](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/aeb22cb48bc1cb382a55c34f610c356ed39394aa)

### 02. Components

* Must be start with capital letter

[First Component in React](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/15ccb57b8bd5db7d0c320ad69dce7a646a803a51)

[Another Component in React](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/37c09e48adf186748003ccc247c0bf7308be6b09)

### 03. Import and Export

### Export

* We can export one Default export like "export default App;". This is called default export.
* But we can export as many as Named Exports like "export function Profile() {}"
* Multiple Named export like "export { Settings, UserKey };"

### Import

Same for import

* //default import
* import Login from "./UserComponent";
* //multiple named imports
* import { Profile, Settings, UserKey } from "./UserComponent";

[Import and Export](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/6f06466098e70a11be2726b119670eb25e5b6111)

### 04. JSX in React

* JSX is a syntax extension for JavaScript thats lets you write HTML-like markup inside a JS file.

![plot](/images-for-note/04.JSX.png?raw=true)

[JSX Component Intro](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/f4a4752ceca78f4291c60f428ebb7ce6f9f5572b)

[JSX Component Exercise 1](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/d8d8795f89edb19c92d9b8b183b7c11fa209038f)

### JSX with Curly Braces

[JSX with Curly Braces](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/b0eaf5d9be2ae2c2d9f6081c4d292793772e3680)

[Click Event and Function Call](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/c78651e59c4f8077baf4c9b41dea18b0d1fa851a)

### 05. State in React

* State is a container to store data like variable
* This is mutable and dynamic
* We have to import it when we want to use it
* It re-render component automatically so that data can visible on UI

### Hooks in React JS

* Hooks are the special feature for functional component
* Hooks let you use different React features from your components
  * State
  * Life Cycle methods
  * Side effects etc..
* example useState, useId

[Pre Use case Before starting State](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/845ea216ae836a9d10f541edb1a06248e72a2cd1)

[React State in Action](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/074858ce32301a67fd1f36fdcebcef2405bc9a29)

### 06. Basic Conditions in React

### Toggle or Hide and Show in React

[Toggle or Hide and Show in React](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/eff4293cab2e825a042089fcf0d6140db69f2137)

### Multiple Conditions in React

[Multiple Conditions else if](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/a9f5b6fac333a3256f4b6da73e15b6bc82f0d693)

### 07. Props in React

* Props is used to pass data from one component to another component

[Props in React in Action](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/db7be8d5260ac47f8ba4f834f3bd28b7e9fe50aa)

### Pass jsx in Props

[Pass jsx in props](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/d85f4338ff39754b5f82b2f4057b7c8304ef92e4)

### 08. Get Input field Value

[Get Input field Value](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/0333f5eb86ae254060d228af7d155b829d193dce)

### 09. Control Component

* A Controlled component is a form whose input filed value is controlled bt React's state
  * Store input filed value in state
  * Use change handler with input field
  * Value attribute attached with State