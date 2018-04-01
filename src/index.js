import React from "react"
import ReactDom from "react-dom"
import getMuiTheme from "material-ui/styles/getMuiTheme"
import RaisedButton from "material-ui/RaisedButton"
import PropTypes from "prop-types"

import injectTapEventPlugin from "react-tap-event-plugin"
injectTapEventPlugin()


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
            <div style={styles.root}>
                <RaisedButton 
                    label="Redux博客"
                    primary={true}
                />
            </div>
        )
    }
}

App.childContextTypes={
    muiTheme:PropTypes.object.isRequired
}

ReactDom.render(<App />, document.getElementById('root'))