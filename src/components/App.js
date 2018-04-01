import React from "react"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import PropTypes from "prop-types"
import Radium, { StyleRoot } from "radium"
import Header from "./shared/Header"

class App extends React.Component {
    getChildContext() {
        return { muiTheme: getMuiTheme() }
    }

    getStyles() {
        const styles = {
            root: {
                paddingTop: '50px',
                minHeight: '400px'
            }
        }
        return styles
    }

    render() {
        const styles = this.getStyles()
        return (
            <StyleRoot>{/*用来支持组件内联样式的媒体查询功能更*/}
                <div style={styles.root}>
                    <Header />
                    {this.props.children}
                </div>
            </StyleRoot>
        )
    }
}

App.childContextTypes = {
    muiTheme: PropTypes.object.isRequired
}

export default Radium(App)