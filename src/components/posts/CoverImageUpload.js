import React from "react"
import ContentAdd from "material-ui/svg-icons/content/add"

class CoverImageUpload extends React.Component {
    constructor(props) {
        super(props)
        this.state = {
            image: ""
        }
    }
    getStyles() {
        return {
            uploadWrapper: {
                marginTop: '20px',
                marginBottom: '30px',
                width: '180px',
                border: '1px solid #ddd',
                height: '180px',
                backgroundColor: '#f8f8f8',
                textAlign: 'center',
                backgroundImage: `url(${this.state.image})`,
                backgroundSize: 'cover',
                backgroundPosition: 'center center',
                backgroundRepeat: 'no-repeat',
                position:'relative'
            },
            uploadLabel: {
                display: this.state.image ? 'none' : 'block',
                height: '20px',
                lineHeight: '20px',
                fontSize: '13px',
                padding: '80px 0',
                cursor: 'pointer'
            },
            svg: {
                width: '20px',
                height: '20px'
            },
            uploadText: {
                display: 'inline-block',
                verticalAlign: 'top'
            },
            uploadButton: {
                display: 'none'
            },
            uploadLabelAdd: {
                display: this.state.image ? 'block' : 'none',
                backgroundColor: '#ddd',
                height: '24px',
                position: 'absolute',
                top: '0',
                right: '0',
                cursor: 'pointer'
            }
        }
    }
    handleChange = (event) => {
        const file = event.target.files[0]
        if (!file.type.match('image.*')) {
            console.log('请上传格式正确的图片')
        } else {
            const reader = new FileReader()
            reader.onload = (event) => {
                this.setState({
                    image: event.target.result
                },()=>{
                    this.props.handleImage(file)//调用父组件传入的方法
                })
            }
            reader.readAsDataURL(file)
        }
    }
    render() {
        const styles = this.getStyles()
        return (
            <div style={styles.uploadWrapper}>
                <label style={styles.uploadLabelAdd} htmlFor='imageUploadBtn'>
                    <ContentAdd />
                </label>
                <label style={styles.uploadLabel} htmlFor="imageUploadBtn">
                    <ContentAdd style={styles.svg} />
                    <span style={styles.uploadText}>{this.props.tip}</span>
                </label>
                <input onChange={this.handleChange} style={styles.uploadButton} type="file" id="imageUploadBtn" />
            </div>
        )
    }
}

export default CoverImageUpload