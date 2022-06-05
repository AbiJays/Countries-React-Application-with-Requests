import React from "react";

const CountryDetails = ({selectedCountry}) => {

    if (typeof selectedCountry != "undefined"){

        return(
            <>
            <h3>Flag: {selectedCountry.flag}</h3>
            <h3>Capital: {selectedCountry.capital}</h3>
            <p>Common Name: {selectedCountry.name.common}</p>
            </>
        )
        }
}


        /* {typeof selectedCountry != undefined ?
            // <h3>Country: {selectedCountry.flag}</h3>
            // (<h3>Name: {selectedCountry.name.common}</h3>)
            :
            (<p></p>)
        } */

export default CountryDetails;