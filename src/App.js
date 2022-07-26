import React from "react"
import GlobStyle from "./styled"
import Header from "./components/header/header"
import Main from "./components/main/main.js"
export default function App(){
    return(
        <>
            <GlobStyle/>
            <Header/>
            <Main/>
        </>
    )
}