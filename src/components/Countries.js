import axios from 'axios'; //installaton de axio avec la cmd npm i -s axios
import React, { useEffect, useState } from 'react';
import Card from './Card';

const Countries = () => {
    const [data,setData] = useState([]);  
    const[sortedData, setSortedData] = useState([]); //pour faire un tri
    const [playOnce, setPlayOnce] = useState(true);
    const [rangeValue, setRangeValue] = useState(40);
    const [selectedRadio, setSelectedRadio] = useState('');
    const radios = ["Africa", "America","Asia","Europe", "Oceania"];

    useEffect(()=>{
        if(playOnce)
        {
            axios
                .get('https://restcountries.eu/rest/v2/all?fields=name;population;region;capital;flag')
                .then((res)=>  {
                    setData(res.data);
                    setPlayOnce(false);
                });
        }
     

        const sortedCountry = () =>{
            const countryObj = Object.keys(data).map((i)=> data[i]);
            const sortedArray = countryObj.sort((a,b) => {
                return b.population - a.population;
            });
            sortedArray.length = rangeValue;
            setSortedData(sortedArray);
        }
        sortedCountry();

    },[data, rangeValue, playOnce]); //callback pour rejouer la fonction à chaque mod dans []
    return (
        <div className="countries">
            <div className="sort-container">
                <input type="range" min="1" max="250"  value={rangeValue}
                    onChange={(e )=> setRangeValue(e.target.value)}
                />
                <ul>
                    {radios.map((radio) => {
                           return(
                               <li key={radio}>
                                   <input id="{radio}" value={radio} type="radio"
                                    checked={radio===selectedRadio} onChange={
                                        (e)=>setSelectedRadio(e.target.value)
                                    }
                                  
                                   />
                                   <label htmlFor="{radio}">{radio}</label>   
                               </li>
                           ) 
                        })
                    }

                </ul>
            </div>
            <div className="cancel">
                {selectedRadio && <h5
                onClick={
                    ()=> setSelectedRadio("")
                }
                 >Annuler recherche</h5>}
                    
            </div>
            <ul className="countries-list">
                {sortedData
                    .filter((country)=>country.region.includes(selectedRadio))
                    .map((country)=>(
                    <Card country={country} key={country.name}/> //on passe une props
                ))}
            </ul>
            
        </div>
    );
 
};

export default Countries;