import React from "react"
import ReactDom from "react-dom"
import injectTapEventPlugin from "react-tap-event-plugin"
import RenderRouter from "./routes"

import App from "./components/App"

injectTapEventPlugin()

ReactDom.render(<RenderRouter/>, document.getElementById('root'))