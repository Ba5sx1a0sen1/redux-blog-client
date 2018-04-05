import React from "react"
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from "react-redux"
import PostItem from "./posts/PostItem"


class DashBoard extends React.Component {
    constructor() {
        super()
        this.state = {}
    }

    getStyles() {
        return {
            root: {
                maxWidth: '720px',
                //    border:'1px solid red',
                margin: '0 auto'
            },
            actions: {
                marginTop: '32px',
                marginBottom: '32px',
                textAlign: 'center'
            }
        }
    }

    render() {
        const PostList = this.props.posts.map((post,i)=>{
            return <PostItem key={i} post={post} />
        })
        const styles = this.getStyles()
        console.log(PostList)
        console.log(this.props)
        return (
            <div style={styles.root}>
                <div style={styles.actions}>
                    管理员控制面板页面
                    <Link to='/posts/new'>
                        <RaisedButton label='添加新文章' primary={true} />
                    </Link>
                </div>
                { PostList }
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        posts:state.posts
    }
}

export default connect(mapStateToProps)(DashBoard)