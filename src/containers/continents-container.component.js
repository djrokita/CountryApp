import React, { Component } from "react";
import { connect } from "react-redux";
import CountryFlagList from "../presentational/flag-list.component";
import { deleteCountry, setContinent } from "../actions/actions-countries";

class ContinentsContainer extends Component {
  chooseContinent(event) {
    this.props.dispatch(setContinent(event.target.value));
  }
  deleteCountry(id) {
    this.props.dispatch(deleteCountry(id));
  }
  componentDidMount() {
    this.props.dispatch(setContinent("Europa"));
  }
  render() {
    return (
      <div>
        <select onChange={(e) => this.chooseContinent(e)}>
          <option value="Europa">Europa</option>
          <option value="Afryka">Afryka</option>
        </select>
        <CountryFlagList
          countries={this.props.visibleCountries}
          deleteCountry={this.deleteCountry.bind(this)}
        />
      </div>
    );
  }
}

const mapStateToProps = (store) => ({
  visibleCountries: store.countriesReducer.visibleCountries
});

export default connect(mapStateToProps)(ContinentsContainer);
