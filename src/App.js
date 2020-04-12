import React from 'react';
import Main from "./main/main";
// import Footer from "./main/footer";

class App extends React.Component {
//   constructor(props) {
//     super(props);
//     this.state = {
//       loading: false,
//       error: false,
//       loggedIn: false
//     };
//   }

//   componentDidMount() {
//     if(sessionStorage.getItem("token")){
//       this.setState({
//           loggedIn: true
//       })
//     }
//     setTimeout(() => this.setState({ loading: true }), 1000);
//   }

  render() {
    return (
      <React.Fragment>
        <div>
            <Main />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
