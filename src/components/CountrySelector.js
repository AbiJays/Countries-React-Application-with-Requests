import React from "react";

const CountrySelector = ({countries, handleCountryChange}) => {

    const handleChange = (event) => {
        handleCountryChange(event.target.value)
    }

    const countryOptions = countries.map((country) => {
            return <option key= {country.name.offical} value={country.name.offical}>{country.name.official}</option>
        })

    return(
        <select onChange={handleChange}>
            {countryOptions}
        </select>
    )
}

export default CountrySelector;