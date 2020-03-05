class Form1 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      password:''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
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
          <input type="text" placeholder="name please" name="name" value={this.state.name} onChange={this.handleChange}></input>
        </label>
        <label>
          <input type="text" placeholder="email please" name="email" value={this.state.email} onChange={this.handleChange}></input>
        </label>
        <label>
          <input type="text" placeholder="password please" name="password" value={this.state.password} onChange={this.handleChange}></input>
        </label>
        <input type="submit" value="Next"></input>
      </form>

    )
  }
}

export default Form1;