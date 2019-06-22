import React, { Component } from 'react'
import axios from 'axios'

//style
import './FormPost.css'

export default class FormPost extends Component {
    state = {
        url: "https://json-server-simple-blog.herokuapp.com",
        // url: "http://localhost:3001",
        formData: {
            title: '',
            body: ''
        }
    }

    handleChangeInput = e => {
        let newFormData = this.state.formData
        newFormData[e.target.name] = e.target.value
        this.setState({ formData: newFormData })
    }

    handleSubmit = () => {
        let date = new Date()
        let newData = {
            userId: Math.ceil(Math.random() * 3),
            id: date.getTime(),
            title: this.state.formData.title,
            body: this.state.formData.body,
            likes: 0,
            dislikes: 0
        }
        this.postNewDataAPI(newData)
    }

    postNewDataAPI = (newData) => {
        let cleanForm = { title: '', body: '' }
        axios.post(`${this.state.url}/posts`, newData)
            .then(res => {
                this.setState({ formData: cleanForm })
            })
        alert('New Post has added.')
        document.location.href = "/article"
    }

    render() {
        return (
            <div className="form">
                <h3>ADD NEW POST</h3>
                <hr />
                <label htmlFor="title">TITLE</label><br />
                <input type="text" name="title" className="form-input"
                    value={this.state.formData.title}
                    placeholder="Title of post"
                    onChange={this.handleChangeInput} /><br />
                <label htmlFor="body">CONTENT</label><br />
                <textarea name="body" cols="30" rows="10"
                    value={this.state.formData.body}
                    placeholder="Content of post..."
                    onChange={this.handleChangeInput}></textarea><br />
                <button className="btn-save" onClick={this.handleSubmit}>SAVE</button>
            </div>
        )
    }
}