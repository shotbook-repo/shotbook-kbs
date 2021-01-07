import React, {ReactDOM} from "react";

class MyForm extends React.Component {
    constructor(props) {
      super(props);
      this.state = {
        username: '',
        age: null,
      };
    }
    myChangeHandler = (event) => {
      let nam = event.target.name;
      let val = event.target.value;
      this.setState({[nam]: val});
    }
    render() {
      return (
        <form>
        <h1>Both of the components: {this.state.username} {this.state.age}</h1>
        <p>equipment1</p>
        <input
          type='text'
          name='username'
          onChange={this.myChangeHandler}
        />
        <p>equipment2</p>
        <input
          type='text'
          name='age'
          onChange={this.myChangeHandler}
        />
        </form>
      );
    }
  }
  
  //to call this form into the API we just use this.state.target and it'll be saved
  

  export default MyForm;