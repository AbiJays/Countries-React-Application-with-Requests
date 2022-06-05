// everything we need in order to select and display countries
import React, { useEffect, useState } from "react";
import CountrySelector from "../components/CountrySelector";
import CountryDetails from "../components/CountryDetails";

const CountryContainer = () => {

    const [countries, setCountries] = useState([]);
    const [selectedCountry, setSelectedCountry] = useState({});

    const getCountries = () => {
        console.log("Getting data")
        fetch("https://restcountries.com/v3.1/all")
        .then (response => response.json())
        .then(data => setCountries(data))
    }

    const handleCountryChange = (countryName) => {
        const foundCountry = countries.find((country) => country.name.official === countryName)
        console.log(selectedCountry)
        setSelectedCountry(foundCountry)
    }

    useEffect(() => {
        getCountries();
    }, []);

    return(
        <>
            <h1>Country Countries</h1>
            <CountrySelector countries={countries} handleCountryChange={handleCountryChange}/>
            <CountryDetails selectedCountry={selectedCountry}
            />
        </>
    )
}
export default CountryContainer;