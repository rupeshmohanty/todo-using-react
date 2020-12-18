import React,{ Component } from 'react';
import axios from 'axios';
import 'bootstrap/dist/css/bootstrap.min.css';
import christmas from '../assets/images/christmas.jpg';
import '../assets/css/NewComponent.css';

class New extends Component{

    constructor(props) {
        super(props);
        this.onChangeName = this.onChangeName.bind(this);
        this.onChangeWish = this.onChangeWish.bind(this);
        this.onSubmit = this.onSubmit.bind(this);

        this.state = {
            name: '',
            wish: '',
            error: ''
        }
    }

    onChangeName(e) {
        this.setState({
            name: e.target.value
        })
    }

    onChangeWish(e) {
        this.setState({
            wish: e.target.value
        })
    }

    onSubmit(e) {
        e.preventDefault();
        
        const obj = {
            name: this.state.name,
            wish: this.state.wish
        }

        axios.post('http://localhost/blog-api/new-blog.php', obj)
        .then(res => console.log(res.data))
        .catch(error => this.setState({ error: error.message }));
        
        this.setState({
            name: '',
            wish: '',
            message: ''
        })
    }

    render() {
        const error = () => {
            if(this.state.error === '') {
                return(
                    <div className = "alert alert-primary" role = "alert">
                        Way to go!
                    </div>
                );
            } else {
                return(
                    <div className = "alert alert-warning">
                        <h5>{this.state.error}</h5>
                    </div>
                );
            }
        }
        return(
            <div className = "container">
                <div className = "card">
                    <div className = "card-body">
                        <div className = "row">
                            <div className = "col-md-6 form">
                                <h2>
                                    Make a Wish
                                </h2>
                                { error }
                                <form onSubmit = {this.onSubmit}>
                                    <div className = "form-group">
                                        <input className = "form-control" name = "name" placeholder = "Your Name" value = { this.state.name } onChange = { this.onChangeName }/>
                                    </div>
                                    <div className = "form-group">
                                        <input className = "form-control" name = "wish" placeholder = "Make a good wish" value = { this.state.wish } onChange = { this.onChangeWish }/>
                                    </div>
                                    <button className = "btn btn-primary" type = "submit">Submit</button>
                                </form>
                            </div>
                            <div className = "col-md-6">
                                <img src = {christmas} alt = {christmas} width = "500" height = "400"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        );
    }
}

export default New;