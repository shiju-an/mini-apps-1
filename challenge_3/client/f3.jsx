class Form3 extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      creditcard: '',
      expirydate: '',
      cvv: '',
      billingzipcode: ''
    };
    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleChange = this.handleChange.bind(this)
  }

  handleSubmit(e) {
    e.preventDefault();
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
          <input type="text" placeholder="credit card" name="creditcard" value={this.state.creditcard} onChange={this.handleChange}></input>
        </label>
        <label>
          <input type="text" placeholder="expiry date" name="expirydate" value={this.state.expirydate} onChange={this.handleChange}></input>
        </label>
        <label>
          <input type="text" placeholder="cvv" name="cvv" value={this.state.cvv} onChange={this.handleChange}></input>
        </label>
        <label>
          <input type="text" placeholder="billing zip code" name="billingzipcode" value={this.state.billingzipcode} onChange={this.handleChange}></input>
        </label>
        {/* <input type="submit" value="Purchase"></input> */}
      </form>
    )
  }
}

export default Form3;