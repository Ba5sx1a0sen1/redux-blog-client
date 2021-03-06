import React, { Component } from 'react';
import TextField from 'material-ui/TextField';
import CoverImageUpload from "./CoverImageUpload"

class BasicForm extends Component {
    constructor(props) {
        super(props);
        this.state = {
            file: ''
        };
    }
    getBasicFormInputValue() {
        const name = this.refs.name.getValue()
        const content = this.refs.content.getValue()
        const file = this.state.file

        console.log({ name, content, file })
        return { name, content, file }
    }

    getImage = (file) => {//拿到子组件的file
        this.setState({
            file: file
        })
    }

    render() {
        let styles = {
            root: {
                padding: '20px',
                marginTop: '32px',
                backgroundColor: '#fff',
                boxShadow: '0 0 0 1px rgba(200, 215, 225, 0.5), 0 1px 2px #e9eff3'
            },
            textField: {
                display: 'block',
                fontSize: '.85em',
                width: '100%'
            }
        }

        return (
            <div style={styles.root}>
                <TextField
                    defaultValue={this.props.post ? this.props.post.name : ''}
                    ref='name' floatingLabelText='标题' style={styles.textField} />
                <div style={{ marginTop: '15px', marginBottom: '15px' }}>
                    <TextField
                        defaultValue={this.props.post ? this.props.post.content : ''}
                        ref='content' floatingLabelText="内容" multiLine={true} rows={3} style={styles.textField} />
                </div>
                <CoverImageUpload
                    image={this.props.post ? this.props.post.cover : ''}
                    handleImage={this.getImage} tip="上传图片" />
            </div>
        );
    }
}

export default BasicForm