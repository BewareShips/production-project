import React, { useState } from "react";
import  cl from "./counter.module.scss"

export const Counter = () => {
   const [state, setState] = useState(0);
   return (
      <>
         <div>{state}</div>
         <button className={cl.button} onClick={()=>setState(prev=>prev+1)}>counter +1</button>
      </>
   );
};
