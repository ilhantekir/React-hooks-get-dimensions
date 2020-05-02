# React hooks get dimensions

React-hooks-get-dimensions is a helpful to get a react component's or window dimensions.
Uses a [`Window: resize event`](https://developer.mozilla.org/en-US/docs/Web/API/Window/resize_event) to detect when an element's dimensions have changed.


## Install

`yarn add react-hooks-get-dimensions`

`npm install react-hooks-get-dimensions --save`

## Measure Component

### Example

```javascript
import  React, { useRef } from  'react';
import  GetDimensions  from  'react-hooks-get-dimensions';
const  App = () => {
const  componentRef = useRef()
const { width, height } = GetDimensions(componentRef);
return (
     <div ref={componentRef}>
         <p>width: {width}px</p>
         <p>height: {height}px</p>
     </div>
)}
export  default  App;
```


## Measure Viewport

### Example

```javascript
import  GetDimensions  from  'react-hooks-get-dimensions';
const  App = () => {
const { width, height } = GetDimensions();
return (
     <div>
          <p>width: {width}px</p>
          <p>height: {height}px</p>
     </div>
)}
export  default  App;
```
