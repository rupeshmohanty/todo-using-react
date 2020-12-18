import React, { Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Redirect } from 'react-router';

class Home extends Component{
    constructor(props) {
        super(props);
        this.delete = this.delete.bind(this);
        this.state = {
            blogs: [],
            redirect: false
        };
    }

    delete(delId) {
        axios.get('http://localhost/Blog-api/delete-blog.php?id='+delId)
        .then(
            ({data}) => {
                if(data.deleteStatus === 1) {
                    console.log('Deleted')
                    this.setState({
                        redirect: true
                    })
                }
            }
        )
        .catch(err => console.log(err))
    }

    componentDidMount() {
        axios.get('http://localhost/Blog-api/view-blog.php')
        .then(({data}) => {
            if(data.success === 1) {
                this.setState({
                    blogs: data.blogs.reverse()
                })
            }
        })
        .catch(error => {
            console.log(error);
        })
    }

    render() {
        if(this.state.redirect) {
            console.log('Works');
        }

        const viewBlog = this.state.blogs.map((blog) => {
            return(
                <div className = "card">
                    <div className = "card-header">
                        Posted at { blog.createdAt }
                    </div>
                    <div className = "card-body">
                        <h5 className = "card-title">Student Name :- { blog.name }</h5>
                        <p class="card-text">{ blog.wish }</p>
                        <button onClick = { this.delete(blog.id) } className = "btn btn-danger">Delete</button>
                    </div>
                </div>
            );
        });
        return(
            <div className = "container">
                { viewBlog }
            </div>
        );
    }
}

export default Home;