import React, { useRef }  from 'react';
import { useGetDimensions } from 'react-hooks-get-dimensions'

const  App = () => {
  const  componentRef = useRef()
  const { width, height } = useGetDimensions(componentRef);
  return (
       <div ref={componentRef}>
           <p>width: {width}px</p>
           <p>height: {height}px</p>
       </div>
  )}
  export  default  App;