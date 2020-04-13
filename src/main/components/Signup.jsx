import React from 'react';
import Axios from "axios";
import ErrorBoundary from './ErrorBoundary'

class SignUp extends React.Component {
    
    constructor(props){
        super(props);
        this.state = {
            error: ""
        }
    }

    handleSubmit(e){
        e.preventDefault();
        let data = {
            "Firstname": this.FirstName.value,
            "LastName": this.LastName.value,
            "Email": this.Email.value,
            "Mobile": this.Mobile.value,
            "Username": this.Username.value
        }
        Axios.post('http://127.0.0.1:8000/authenticate/signup/', data, {"params": {"Username": this.Username.value}})
        .then(res =>{
            if(res.status === 200){
                this.props.history.push('/authenticate')
            }            
        })
        .catch(error =>{
            this.setState({
                error: error
            })
            setTimeout(() => {
                this.setState({
                    error: ""
                })
            }, 3000);
        })
    }

    render() {
        return (
            <div>
                <ErrorBoundary error={this.state.error} />
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>
                    First Name:
                    <input type="text" id="firstname" ref={(input) => this.FirstName = input} required></input>
                    </label>
                    <label>
                    Last Name:
                    <input type="text" id="lastname" ref={(input) => this.LastName = input} required></input>
                    </label>
                    <label>
                    Email:
                    <input type="text" id="email" ref={(input) => this.Email = input} required></input>
                    </label>
                    <label>
                    Mobile:
                    <input type="text" id="mobile" ref={(input) => this.Mobile = input} required></input>
                    </label>
                    <label>
                    Username:
                    <input type="text" id="username" ref={(input) => this.Username = input} required></input>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
            </div>
        )
    }
}

export default SignUp;