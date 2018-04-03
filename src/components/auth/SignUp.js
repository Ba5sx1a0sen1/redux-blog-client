import React from "react"
import TextField from "material-ui/TextField"
import RaisedButton from "material-ui/RaisedButton"
import Radium from "radium"

class SignUp extends React.Component {
    constructor(props) {
        super(props)
        this.state = {

        }
    }

    getStyles() {
        return {
            root: {
                // border:'5px solid red',
                textAlign: 'center',
                boxShadow: '0px 0px 20px 1px rgba(15,161,149,0.75)',
                padding: '0 1em 1em',
                margin: '30px 16px',
                '@media(min-width:400px)': {
                    width: '400px',
                    margin: '30px auto'
                }
            },
            label: {
                fontWeight: '600',
                fontSize: '1em',
                lineHeight: '40px'
            },
            textField: {
                display: 'block',
                width: '100%',
                fontSize: '.9em'
            },
            button: {
                width: '130px',
                height: '40px',
                marginTop: '30px',
                marginBottom: '15px'
            },
            a: {
                fontSize: '.8em',
                textDecoration: 'none',
                color: 'grey',
                ':hover': { color: '#00bcd4' }
            }
        }
    }

    render() {
        let styles = this.getStyles()
        return (
            <div style={styles.root}>
                <form>
                    <TextField style={styles.textField} floatingLabelText="用户名" />
                    <TextField style={styles.textField} type="password" floatingLabelText="密码" />
                    <TextField style={styles.textField} type="password" floatingLabelText="确认密码" />
                    <RaisedButton
                        primary={true}
                        style={styles.button}
                        labelStyle={styles.label}
                        type="submit"
                        label="注册" />
                </form>
            </div>
        )
    }
}

export default Radium(SignUp)