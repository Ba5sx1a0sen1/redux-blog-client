import React from "react"
import {connect} from "react-redux"
import PostItem from "./posts/PostItem"

class Home extends React.Component{
    render(){
        const styles={
            root:{
                maxWidth:'720px',
                margin:'30px auto'
            }
        }

        const PostList = this.props.posts.map((post,i)=>{
            return <PostItem key={i} post={post}/>
        })


        return (
            <div style={styles.root}>
                {PostList}
            </div>
        )
    }
}

function mapStateToProps(state){
    return {
        posts:state.posts
    }
}

export default connect(mapStateToProps)(Home)