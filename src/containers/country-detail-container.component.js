import React, { component } from 'react';
import { connect } from 'react-redux';
import CountryDetails from '../presentational/country-details.component';
import { getCountry } from '../actions/actions-countries';

class CountryDetailsContainer extends Component {
	constructor(props) {
		super{props}
	}
	componentDidMount() {
		this.props.dispatch(getCountry(this.props.params.id));
	}
	render() {
		return (
			<CountryDetails country={this.props.selectedCountry} />
		)
	}
}

const mapStateToProps = store => ({
	selectedCountry: store.countriesReducer.selectedCountry
});

export default connect(mapStateToProps)(CountryDetailsContainer);