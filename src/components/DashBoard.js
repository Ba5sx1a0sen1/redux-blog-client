import React from "react"
import { Link } from 'react-router';
import RaisedButton from 'material-ui/RaisedButton';
import {connect} from "react-redux"
import PostItem from "./posts/PostItem"
import {fetchPosts} from "../redux/actions/postAction"


class DashBoard extends React.Component {
    constructor() {
        super()
        this.state = {}
    }
    componentWillMount(){
        if(this.props.posts.length===0){
            this.props.fetchPosts()
        }
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
        return (
            <div style={styles.root}>
                <div style={styles.actions}>
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

export default connect(mapStateToProps,{fetchPosts})(DashBoard)