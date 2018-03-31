import React from "react"
import ReactDom from "react-dom"
import "./index.css"
import Extra from "./Extra"

class App extends React.Component{
    render(){
        return(
            <div>Hello 我是React组件<Extra/></div>
        )
    }
}

ReactDom.render(<App/>,document.getElementById('root'))