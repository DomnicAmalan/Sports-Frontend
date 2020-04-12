import React from "react";

class SignUp extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            name: null
        }
        this.handleChange = this.handleChange.bind(this);
    }

    handleChange(value){
        console.log(value.value)
    }

    render() {
        return (
            <div className="register">
                <input name="name" type="text" onChange={(e) => this.handleChange(e.target)} />
            </div>
        )
    }
}

export default SignUp;