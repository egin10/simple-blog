import React, { Component } from 'react'
import './FormPost.css'

export default class FormPost extends Component {
    constructor(props) {
        super(props)

        this.state = {
            formData: {
                userId: Math.ceil(Math.random() * 3),
                title: '',
                body: '',
                likes: 0,
                dislikes: 0
            }
        }
    }

    render() {
        return (
            <div className="form">
                <h3>Add new post</h3>
                <hr />
                <label htmlFor="title">Title</label>
                <input type="text" name="title" className="form-input" placeholder="Title of post" />
                <label htmlFor="body">Content</label>
                <textarea name="body" cols="30" rows="10" placeholder="Content of post..."></textarea>
                <button className="btn-save">Save</button>
            </div>
        )
    }
}