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
            "name": this.name.value
        }
        Axios.post('http://127.0.0.1:8000/authenticate/signup/', data)
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
            <div className="register">
                <ErrorBoundary error={this.state.error} />
                <form onSubmit={(e) => this.handleSubmit(e)}>
                    <label>
                    Name:
                    <input type="text" id="name" className="form-control" ref={(input) => this.name = input} required></input>
                    </label>
                    <input type="submit" value="Submit"/>
                </form>
        </div>
        )
    }
}

export default SignUp;