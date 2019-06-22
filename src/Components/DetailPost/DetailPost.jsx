import React, { Component } from 'react'
import axios from 'axios'

//STYLE
import './DetailPost.css'

export default class DetailPost extends Component {
    state = {
        url: "https://json-server-simple-blog.herokuapp.com",
        data: {}
    }

    //-- HANDLER
    handleBack = () => {
        this.props.history.push('/article')
    }

    componentDidMount() {
        axios.get(`${this.state.url}/posts/${this.props.match.params.id}`)
            .then(res => this.setState({ data: res.data }))
    }

    render() {
        let { title, body } = this.state.data
        let { handleBack } = this
        return (
            <div className="detail-post" >
                <h2>{title}</h2>
                <hr />
                <p>{body}</p>
                <button className="btn-back" onClick={handleBack}>BACK</button>
            </div>
        )
    }
}