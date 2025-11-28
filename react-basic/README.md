# [Home Readme file](.././README.md)

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

[Control Component in React](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/8a0ee87bf7f2c93ffeaabbacb6fd6a1503e05305)

### 10. Handle checkbox in React

[Handle checkbox in React](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/789f3f22e04786eb35c4e5128a82c9de927bcc65)

### Handle radio button and dropdown in React

[Handle Radio Button and dropdown in React](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/e8f3fe15eea1ebcce2dd7a318bb21aa31553647e)

### Handle Loop in React Jsx

[Handle Loop in React Jsx](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/bbeaf7d404af5c880e07c9b575e8dd25b870f0cd)

### Reuse Component inside loop

[Reuse Component inside loop](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/88b670953a5ea01ab826504a2d8283830da0c2e6)

### Exercise

[Exercise change clock color on dropdown value](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/a8ef9551480f15a7d5d1d5af1070cbb87a127ec3)

### Handle Nested Loop in React Jsx

[Handle Nested Loop in React Jsx](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/f18c433e1c27b050d045f84f645d4b01448d9271)

### 11. Intro to Hooks in React js

* To archive State, life cycle, other features in functional component we can use hooks
  * useState
  * useEffect
  * useContext
  * useRef
  * useReducer
  * etc... also we can create custom hook

### useEffect

* remove side effects inside component
* remove side effect from outside component
* use to fetch data
* use as life cycle method
* use for DOM manipulation ....

#### Syntax

![plot](/images-for-note/11.syntax-useeffect.png?raw=true)

[Pre Hook side effects inside component](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/f90ee16215c6cc3f2c2c04bb9f3e29cc7aa653ea)

![plot](/images-for-note/11.useeffect-allusecase.png?raw=true)

[Hook side useEffect Intro](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/4d1b02e612d1a96d96da94f01f097f81f3c48160)

[Handle props with useEffect](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/eae518b2dbc6c78f540705dc3413596f18592d23)

### useEffect hook for life cycle

#### Component life cycle

![plot](/images-for-note/11.component-lifecycle.png?raw=true)

![plot](/images-for-note/11.useeffect-lifecycle.png?raw=true)

[React life cycle using useEffect](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/62323f1edec876110651cf1edadd965b33d10c0b)

### 12. Styling inside React using CSS

* Inline Style
* External Style
* CSS Modules
* Styled components
* External CSS Library or Framework

### Inline Styling in React

![plot](/images-for-note/12.Inline-styling.png?raw=true)

[Inline Styling in React](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/d681c22dd267fea7f6afc11cce9b064090aff3fb)

### Dynamic and Conditional Inline Style

[Dynamic and Conditional Inline Style](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/7c74a6f3a7c5830afb520988f4c505054e2e1cda)

### External Styling in React

[External Styling in React](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/443be6a0ac4b45aabc0b38ddf98850daa1839e25)

### Style with CSS Module

[Style with CSS Module](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/bd47bcc12fb6d480d26321d22a6535a447dead51)

### Style Component

>npm i styled-components

[Styled Component](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/891ed8f7fdae7f732853d21a60964bcd4e3f6d84)

### Add Bootstrap in React

>npm install react-bootstrap bootstrap

[Add Bootstrap in React](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/b324b263e546b9284fa876c208dcc24ca91e9a3f)

### 13. useRef Hook

* used to control input filed inside React

[useRef React Hook](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/f15a921689489b5da28e4d9da37d79cbc8aa5787)

### Uncontrolled Component

[Uncontrolled Component using useRef Hook](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/7dc8b3dcabac9821fe87936dd79e1c2a22b4abab)

### 14. Pass Function as Component as Props

[Pass Function in Component as Props](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/423b16bd404205e6f17dc3df7060450124165a46)

### ForwardRef in React

[ForwardRef in React Before V19 and After V19](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/1dc399167384f0f650ffe6eba781e24cef96f04f)

### 15. useFormStatus React Hook

* Only work with Form

[useFormStatus React Hook](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/d3e2450a5a8c7ae2fc93fa410aa64bc51e2d19ed)

### useTransition React Hook

* work without form

[useTransition React Hook](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/63a2e8e8c969b574cc2d36b0a415a939f84a00b4)

### 16. Drived State in React JS

* State that is calculated or derived from other state values or props within your component
* Drived state cna be variable
* No need to extra state only variables or constants are enough

[Drived State in React JS](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/e0238681c6c53c4a35f10a1a3739099b7fe0bee5)

### 17. Lifting State Up in React Js

* Sharing component between state

![plot](/images-for-note/17.lifting-state.png?raw=true)

[Lifting State Up in React Js](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/e7078ee2801c5c3134f4913a98702b6ed8317236)

### 18. Updating Objects in React Js

[Updating Objects in React Js](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/0929185597b41f1cd8425ccc494f72f1405c4fb8)

### Updating Array in React Js

[Updating Array in React Js](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/8d3e42bc5b19ca329e7008e91752365c9aac7f4b)

### 19. useActionState React Hook

* It updates state based on the result of a form action
* It can also used as form validation. see 24 series

[useActionState React Hook](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/c370b108fdf2d3e07d5f66fd1459ec6e1e6399ef)

### useId React Hook

* useId is a React Hook for generating unique IDs that can be passed to accessibility attributes

[useId React Hook](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/983bbfbf1bad70e0ad875c56101ffeef932e8410)

### 20. Fragment in React

* Remove extra parent Elements like div

[Fragment in React](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/3e19177e194c9ac099631569805e526e50520465)

### 21. Rules for React js Hooks

* start with use then use camel case
* Use hooks at top level

![plot](/images-for-note/21.create-hooks.png?raw=true)
![plot](/images-for-note/21.create-hooks-one.png?raw=true)
![plot](/images-for-note/21.create-hooks-two.png?raw=true)

[Rules for React js Hooks](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/a0512ae45388bdf6553ff0bd49a9d5a54556c9a2)

### 22. Context API

* to pass value directly form parent component to last child component

![plot](/images-for-note/22.context-api.png?raw=true)

[Context API](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/a1d739f3a3a46f4131024562a0f4fd8b736cdffe)

### 23. Custom Hook in React

[Custom Hook in React](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/ddd8433dbf05413c100e299c7bffdd880cfe8bc0)

### 24. Validation Input Field using useActionState

[Validation Input Field using useActionState](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/da744c21b2e5e923d52e45055735e33c1ee2ac9c)

### 25. useReducer Hook in React Js

[useReducer Hook in React Js](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/a1d85e3c1261b0ad9305cf524f7bc5364b5c952e)

### 26. Lazy Loading in React Js

[Lazy Loading in React Js](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/76edfb914981748a8fc4d9cbee94277065705a77)

### 27. Call Rest API with use API

[Call Rest API with use API](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/24f9c23c136e3a6b7dd3d75e75959947a067bc71)

### 28. use optimistic hook in React 19

[use optimistic hook in React 19](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/dbc5219afef1eaed42d9fd397dfe5c2f1973b71e)

### 29. Activity in React 19

* The <Activity> is a wrapper component that lets you hide parts of your UI but preserve their state and DOM

[Activity in React 19](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/0885280b94e6d2bdd2faa94c7ecc8f5c6caf1649)

### 30. Hook useEffectEvent in React 19

[Hook useEffectEvent in React 19](https://github.com/bibhusprasad/026_reactjs_tutorial_from_youtube/commit/bfe8b46ee91186c76c578988f9ab7f4f68512b50)