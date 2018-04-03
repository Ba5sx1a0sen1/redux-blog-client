import React from "react"
import Radium from "radium"
import {Link} from "react-router"
import ActionHome from "material-ui/svg-icons/action/home"
import {connect} from "react-redux"
import {logout} from "../../redux/actions/authAction"
 
class Header extends React.Component{
    constructor(props){
        super(props)
        this.state={}
    }
    logout=(e)=>{
        e.preventDefault()
        this.props.logout()
    }
    render(){
        const {isAuthenticated,currentUser} = this.props.auth
        const styles = {
            header:{
                position:'fixed',
                zIndex:'100',
                top:0,
                right:0,
                left:0,
                backgroundColor:'#00bcd4',
                borderBottom:'1px solid #0079aa',
                height:'47px',
                paddingLeft:'16px',
                paddingRight:'16px',
                display:'flex',
                alignItems:'center',
                justifyContent:'space-between'
            },
            nav:{
                color:'white',
                opacity:'.8',
                fontWeight:'600',
                fontSize:'1em',
                textDecoration:'none',
                ':hover':{
                    cursor:'pointer',
                    textDecoration:'underline'
                },
                paddingLeft:'20px'
            }
        }
        
        
        const LogoutLink = (
            <div>
                <span style={{color:'rgb(255,226,0)',padding:'15px'}}>{currentUser.name}</span>
                <Link to='/' style={styles.nav} onClick={this.logout}>退出</Link>
            </div>
        )

        const LoginLink = (
            <div>
                <Link to='/login' style={styles.nav}>登录</Link>
                <Link to="/signup" style={styles.nav}>注册</Link>
            </div>
        )

        

        return(
            <header style={styles.header}>
                <div>
                    <Link to="/" style={styles.nav} key='1'><ActionHome color="#fff"/></Link>
                </div>
                <div>
                    {
                        isAuthenticated
                        ?LogoutLink
                        :LoginLink
                    }
                </div>
            </header>
        )
    }
}

function mapStateToProps(state){
    return {
        auth:state.auth//只取store中state中的auth
    }
}

export default connect(mapStateToProps,{ logout })(Radium(Header))