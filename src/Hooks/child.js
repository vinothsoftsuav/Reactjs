import { useEffect } from "react"

export default function Child({items}){


    useEffect(()=>{

        console.log("ChildComponent was rerendered ")
    },[items])



    return(
        <>
        <h2>Child Component </h2>
        </>
    )
}