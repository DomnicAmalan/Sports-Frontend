import React from 'react';
import { Alert } from 'reactstrap';

class ErrorBoundary extends  React.Component{
    render(){
        console.log(this.props.error, "yyyyy")
        return(
            <React.Fragment>
                {this.props.error ? <div>
                    <Alert color="warning">
                        This is a danger alert — check it out!
                    </Alert>
                    </div> : ""}
          </React.Fragment>
        )
    }
}

export default ErrorBoundary;