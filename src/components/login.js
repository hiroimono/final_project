import React from 'react';
import axios from '../axios';
import { Link} from 'react-router-dom';

export default class Login extends React.Component {

    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.login = this.login.bind(this);
        this.state = {
            error: false
        };
    }

    handleChange (e) {
        console.log("e.target.name: ", e.target.name);
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    login (e) {
        // console.log('This is login button!!!');
        e.preventDefault();
        console.log("this.state: ", this.state);
        const userLoginInfo = {
            email: this.state.email,
            password: this.state.password
        };
        // console.log(name, surname, email, password);
        console.log('user: ', userLoginInfo);
        axios
            .post('/login', userLoginInfo)
            .then((res) => {
                if (res.data.success) {
                    console.log('/login, data of loggedin user: ', res.data);
                    location.replace("/");
                } else {
                    this.setState({ error: true });
                }

            })
            .catch((err) => {
                console.log('/login axios error: ', err);
                this.setState({ error: true });
            });
    }


    render(){
        return (
            <div className="container" style = {{ width: '400px', marginTop: '200px'}}>
                { this.state.error && <p style = {{fontSize: '20px', textAlign: 'center'}}>Something went wrong. Please try again!</p> }
                <form>
                    <div className="form-group">
                        <label htmlFor="email">Email address</label>
                        <input type="email" className="form-control" id="email" aria-describedby="emailHelp" autoComplete="email" placeholder="Enter your email address"
                            name="email"
                            onChange={ this.handleChange }
                        />
                        <small id="emailHelp" className="form-text text-muted">We will never share your email with anyone else.</small>
                    </div>
                    <div className="form-group">
                        <label htmlFor="password">Password</label>
                        <input type="password" className="form-control" id="password" autoComplete="password" placeholder="Enter a password"
                            name="password"
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div style = {{ textAlign: 'center' }}>
                        <button type="submit" className="btn btn-primary"
                            onClick={ this.register }
                        >Register</button>
                    </div>
                </form>
                <p style = {{textAlign: 'center'}}>Have not you registered yet? <Link to="/"> Register </Link></p>
            </div>
        );
    }
}
