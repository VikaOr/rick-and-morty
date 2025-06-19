import React from 'react'
import { useState, useEffect } from 'react'; 

import './home.css'
import CharactersCards from '../CharactersCards/CharactersCards';






export default function Home(props) {
    const [value, setValue] = useState("");
    let persons = props.props;

    const filteredPeople = persons.filter(n => n.name.includes(value));
    
    
  return (
    <>
    <form className='search-form'>
        <input 
        tipe= "text"
        placeholder='Search'
        className='search-input'
        onChange={(event)=> setValue(event.target.value)}
        />
      </form>

    <div className='container--content'>
        
      {filteredPeople.map((person) => <CharactersCards props = {person}/>)}
    </div>
    </>
    
  )
}
