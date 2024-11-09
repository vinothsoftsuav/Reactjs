import { useCallback, useEffect, useState } from "react";
import Child from "./child";

export default function Useeffect() {
  const [count, setcount] = useState(0);
  const [Theme, settheme] = useState(false);
 console.log(Theme);

  const getitem =  useCallback(()=>{
    return [count + 1, count + 2, count + 3];
   },[count])

function handleclick(){
    settheme((curr)=>!curr)
}
  const theme = {
    backgroundColor: Theme ? "blue" : "red",
    color: Theme ? "white " : "black",
  };

  return (
    <>
      <div className="" style={theme}>
        <button onClick={()=>handleclick()}>Toggle</button>

        <h2>count is {count}</h2>
        <Child items={getitem}/>
      </div>
    </>
  );
}
