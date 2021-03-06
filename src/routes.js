import React from "react";
import { Route, IndexRoute } from "react-router";
import Navigation from "./presentational/navigation.component";
import Home from "./presentational/home.component";
import CountriesFlagContainer from './containers/flag-container.component';
import Contact from "./presentational/contact.component";
import CountryDetailsContainer from './containers/country-detail-container.component';
import NotFound from "./presentational/not-found.component";
import ContinentsContainer from './containers/continents-container.component';

export default (
  <Route path="/" component={Navigation}>
    <IndexRoute component={Home} />
    <Route path="/countries"> 
    	<IndexRoute component={CountriesFlagContainer} />
    	<Route path='country/:id' component={CountryDetailsContainer} />
    </Route>
	<Route path='continents' component={ContinentsContainer} />
    <Route path="/contact" component={Contact} />
    <Route path="*" component={NotFound} />
  </Route>
);
