// import React from 'react';
import Form1 from './f1.js';
import Form2 from './f2.js';
import Form3 from './f3.js';

class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentStep: 1,
    };

    this._next = this._next.bind(this);
    this._prev = this._prev.bind(this);
    // this.handleClick = this.handleClick.bind(this);
  }

  _next() {
    let currentStep = this.state.currentStep;
    if (currentStep >= 3) {
      currentStep = 4;
    } else {
      currentStep++;
    }

    this.setState({ currentStep });
  }

  _prev() {
    let currentStep = this.state.currentStep;
    if (currentStep <= 1) {
      currentStep = 1;
    } else {
      currentStep--;
    }

    this.setState({ currentStep });
  }

  nextButton() {
    let currentStep = this.state.currentStep;
    if (currentStep === 1) {
      return (
        <button onClick={this._next}>Checkout</button>
      )
    } else if (currentStep < 4) {
      return (
        <button onClick={this._next}>Next</button>
      )
    } else {
      return (
        <button onClick={this._next}>Submit</button>
      )
    }
    return null;
  }

  // handleClick() {
  //   this.setState();
  // }

  // handleChange(e) {
  //   this.setState({});
  // }

  // componentDidMount() {

  // }

  render() {
    // <div>Hello</div>

    return (
      <div>
        {this.nextButton()}
        <Form1
        currentStep={this.state.currentStep}/>
        <br></br>
        <Form2 currentStep=
        {this.state.currentStep}/>
        <br></br>
        <Form3
        currentStep={this.state.currentStep}/>
      </div>
    )
  }
}

export default App;



console.log('hi');
console.log('cry');
console.log('test');



