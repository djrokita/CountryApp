export const GET_COUNTRY = "GET_COUNTRY";
export const GET_COUNTRIES = "GET_COUNTRIES";
export const DELETE_COUNTRY = "DELETE_COUNTRY";
export const SEARCH_COUNTRY = "SEARCH_COUNTRY";
export const SET_CONTINENT = "SET_CONTINENT";

export const getCountry = (id) => ({
  type: GET_COUNTRY,
  id
});

export const getCountries = () => ({
  type: GET_COUNTRIES
});

export const deleteCountry = (id) => ({
  type: DELETE_COUNTRY,
  id
});

export const searchCountry = (text) => ({
  type: SEARCH_COUNTRY,
  text
});

export const setContinent = (name) => ({
  type: SET_CONTINENT,
  name
});
