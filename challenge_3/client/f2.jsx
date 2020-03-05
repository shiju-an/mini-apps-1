class Form2 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      line1: '',
      line2: '',
      city:'',
      state: '',
      zipcode: '',
      phone: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    this.setState();
  }

  handleChange(e) {
    const value = e.target.value;
    this.setState({
      ... this.state, [e.target.name]: value
    });
  }

  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          <input type="text" placeholder="line1" name="line1" value={this.state.line1} onChange={this.handleChange}></input>
        </label>
        <label>
          <input type="text" placeholder="line2" name="line2" value={this.state.line2} onChange={this.handleChange}></input>
        </label>
        <label>
          <input type="text" placeholder="city" name="cit" value={this.state.city} onChange={this.handleChange}></input>
        </label>
        <label>
          <input type="text" placeholder="state" name="state" value={this.state.state} onChange={this.handleChange}></input>
        </label>
        <label>
          <input type="text" placeholder="zipcode" name="zipcode" value={this.state.zipcode} onChange={this.handleChange}></input>
        </label>
        <label>
          <input type="text" placeholder="phone" name="phone" value={this.state.phone} onChange={this.handleChange}></input>
        </label>
        <input type="submit" value="Next"></input>
      </form>

    )
  }
}

export default Form2;