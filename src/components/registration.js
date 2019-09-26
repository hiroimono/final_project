import React from 'react';
import axios from '../axios';
import { Link} from 'react-router-dom';

export default class Registration extends React.Component {
    constructor(props){
        super(props);
        this.handleChange = this.handleChange.bind(this);
        this.register = this.register.bind(this);
        this.isAccepted = this.isAccepted.bind(this);
        this.state = {
            error: false,
            isAccepted : false
        };
    }

    handleChange (e) {
        // console.log("e.target.name: ", e.target.name);
        this.setState({
            [e.target.name]: e.target.value,
        });
    }

    isAccepted(e) {
        if(e.target.checked)
        {
            this.setState({
                isAccepted: true
            });
        } else {
            this.setState({
                isAccepted: false
            });
        }
    }

    register (e) {
        e.preventDefault();
        console.log("this.state: ", this.state);
        const user = {
            name : this.state.name,
            surname: this.state.surname,
            email: this.state.email,
            password: this.state.password
        };
        // console.log(name, surname, email, password);
        console.log('user: ', user);
        if(this.state.isAccepted == true) {
            axios
                .post('/register-user', user)
                .then((res) => {
                    if(res.data.success){
                        console.log('/register, data of registered user: ', res.data);
                        location.replace("/welcome#/login");
                    } else {
                        this.setState({error: true});
                    }
                })
                .catch(function(err){
                    console.log('/register axios error: ', err);
                    this.setState({error: true});
                });
        } else {
            console.log('/register isLogin error');
            this.setState({error: true});
        }

    }

    render(){
        return (
            <div className="container" style = {{ width: '400px', marginTop: '120px', color:'white' }}>
                { this.state.error && <p style = {{fontSize: '20px', textAlign: 'center'}}>Something went wrong. Please try again!</p> }
                <form>
                    <div className="form-group">
                        <label htmlFor="name">Name</label>
                        <input type="text" className="form-control" id="name" autoComplete="name" placeholder="Enter your name"
                            name="name"
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div className="form-group">
                        <label htmlFor="surname">Surname</label>
                        <input type="text" className="form-control" id="surname" autoComplete="surname" placeholder="Enter your surname"
                            name="surname"
                            onChange={ this.handleChange }
                        />
                    </div>
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
                        <input type="password" className="form-control" id="password" autoComplete="current-password" placeholder="Enter a password"
                            name="password"
                            onChange={ this.handleChange }
                        />
                    </div>
                    <div className="form-check" style = {{ textAlign: 'center' }}>
                        <input type="checkbox" className="form-check-input" id="exampleCheck1"
                            name='isAccepted'
                            onClick={ this.isAccepted }/>
                        <label className="form-check-label" htmlFor="exampleCheck1">I agree to the <a href="#">terms and conditions</a></label>
                    </div>
                    <div style = {{ textAlign: 'center' }}>
                        <button type="submit" className="btn btn-primary"
                            onClick={ this.register }
                        >Create an Account</button>
                    </div>
                </form>
                <p style = {{textAlign: 'center'}}>Already a member? <Link to="/login"> Login </Link></p>
            </div>
        );
    }
}
