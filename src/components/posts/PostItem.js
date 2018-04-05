import React from "react"
import Radium from "radium"
import { Settings } from "../../settings"
class PostItem extends React.Component {
    getStyles() {
        return {
            root: {
                margin: '0 auto 24px',
                backgroundColor: '#fff',
                border: '1px solid rgba(200,215,225,.5)',
                boxShadow: '0 1px 2px #e9eff3',
                position: 'relative'
            },
            content: {
                padding: '16px 24px 12px',
                lineHeight: '1.3em'
            },
            name: {
                color: '#2e4453',
                fontWeight: '600',
                fontSize: '1.2em',
                textDecoration: 'none'
            },
            cover: {
                maxHeight: '300px',
                overflowY: 'hidden',
                borderBottom: '1px solid rgba(200, 215, 225, 0.5)'
            },
            image: {
                display: 'block',
                width: '100%'
            }
        }
    }

    render() {
        const styles = this.getStyles()
        return (
            <div style={styles.root}>
                <div style={styles.cover}>
                    <img src={`${Settings.host}/uploads/posts/${this.props.post.cover}`} style={styles.image} alt="我是封面啦啦啦" />
                </div>
                <div style={styles.content}>
                    <div style={styles.name}>
                        {this.props.post.name}
                    </div>
                </div>
            </div>
        )
    }
}

export default Radium(PostItem)