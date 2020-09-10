import React, {useState} from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import styles from '../components/main.module.css';
import axios from 'axios';

// pokemon api fetch component
const PokemonAPI = (props) => {

    // pokemon url
    const apiURL = "https://pokeapi.co/api/v2/pokemon/?offset=0&limit=2000";

    // set pokemon state
    const [pokemons, setPokemons] = useState([]);

    // get list
    const listPokemons = (e) => {
            
        // do axios get
        axios.get(apiURL).then((response) =>{
            
            // set data 
            setPokemons(response.data.results);
        
            // catch errors
        }).catch(err => {

            // console log out
            console.log("ERROR:", err.response.status, err.response.statusText);

        })

    }

    // return
    return(
        <div className={styles.wrapper}>

            <p className='text-center'>
                <button className="btn btn-info" type="button" onClick={listPokemons}>Get Pokemons via Axios</button>
            </p>

            <table className="table table-dark">
                <thead>
                    <tr>
                    <th scope="col">Pokemon Name</th>
                    </tr>
                </thead>
                <tbody>
                    {pokemons.map((pokes, i)=>{

                       return(
                        <tr key={i}>
                            <td>{pokes.name}</td>
                        </tr>
                       )

                    })}
                </tbody>
            </table>
        </div>
    )

}

// export
export default PokemonAPI; 