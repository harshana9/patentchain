import React, { useState, useEffect, Component } from 'react';

class CountryList extends Component {
    render(){
        /*const countryList = [];
        const [data, setData] = useState(null);

        useEffect(() => {
        fetch('https://restcountries.com/v3.1/all?fields=name')
            .then(response => response.json())
            .then(json => setData(json))
            .catch(error => console.error(error));
        }, []);

        this.state.data.forEach((country) => {
            let name = `${country.name.common}`;
            countryList.push(<option value={name} >{name}</option>)
            //userList.push(<User name={name} avatar={avatar} email={email} key={key} />);
        });

        return(countryList);*/

        return null
    }
}

export default CountryList

