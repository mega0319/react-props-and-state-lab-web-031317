const React = require('react');

class Filters extends React.Component {
  constructor(props) {
    super();
    this.state = props.filters
  }

  handleChange(e){
    this.props.onChangeType(e.target.value)
    this.setState({
      type: e.target.value
    })
  }

  // petsClick(){
  //   this.props.onFindPetsClick()
  // }

  render() {
    return (
      <div className="ui form">
        <h3>Animal type</h3>
        <div className="field">
          <select onChange={(e) => this.handleChange(e)} name="type" id="type" value={this.state.type}>
            <option value="all">All</option>
            <option value="cat">Cats</option>
            <option value="dog">Dogs</option>
            <option value="micropig">Micropigs</option>
          </select>
        </div>

        <div className="field">
          <button onClick={() => this.props.onFindPetsClick()} className="ui secondary button">Find pets</button>
        </div>
      </div>
    );
  }
}

module.exports = Filters;
