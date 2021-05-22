import React from 'react';
//const Card = ({country}) => { modele parfois utiliser à la place de props
const Card = (props) => {

    const{country} = props; // => on déstructure pour arreter de faire country. quelque chose
  
    const numberFormat = (x) => {
        return x.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ")
    }


    return (
        <li className="card">
            <img src={country.flag} alt="flag" />
            <div className="data-container">
                <ul>
                    <li>{country.name}</li>
                    <li>{country.capital}</li>
                    <li>Pop. {numberFormat(country.population)}</li>
                </ul>
            </div>

        </li>
    );
};

export default Card;