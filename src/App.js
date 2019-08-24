import React, {useEffect, useState} from 'react';
import './App.css';
import Recipe from './Recipe'

const App =() => {

const APP_ID = "86d03d82"
const APP_KEY = "d4fdeba0a4c092b01a0e145a11163d19"
const REQ = 
`https://api.edamam.com/search?q=chicken&app_id=${APP_ID}&app_key=${APP_KEY}`

// A better way of state setting
//const [counter, setCounter] = useState(0);
const[recipes, setRecipes] = useState([]);
const[search, setSearch] = useState("")
const[query, setQuery] = useState('')

useEffect( () =>{
  getRecipes();
}, [query])

const getRecipes = async () => {
  const response = await fetch(
    `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}`)
  const data = await response.json();
  setRecipes(data.hits)
  console.log(data.hits)

  // The older way was like this:
  // fetch('https://api.edaman.com....')
  // .then(response => {
  //   response.json()
  // })
}

const updateSearch = e =>{
  setSearch(e.target.value)
}

const getSearch = e => {
  e.preventDefault();
  setQuery(search)
  setSearch('')
  console.log('getSearch running...')
}
  return(
    <div className="App">
      <form onSubmit={getSearch} className='search-form'>
        <input className="search-bar" 
        type="text"
        value={search}
        onChange={updateSearch}/>

        <button className="search-button" type="submit">
          Search
        </button>
      </form>
      {recipes.map(recipe => (
        <Recipe title={recipe.recipe.label}
        calories={recipe.recipe.calories} 
        image={recipe.recipe.image}
        ingrs = {recipe.recipe.ingredients} />
      ))}
    </div>
  )
}

export default App;
