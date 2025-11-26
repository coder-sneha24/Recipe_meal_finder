import { useEffect, useState } from "react";

import './App.css';
import Recipe from "./Recipe";

function App() {

  // const APP_ID="900da95e";
  // const APP_KEY="40698503668e0bb3897581f4766d77f9";
  const [recipe, setRecipe] = useState([])
const [search,setSearch]=useState("");

  useEffect(() => {
    console.log(recipe, "sneha");
  }, [])

  const getRecipes = async () => {
    const response = await fetch("https://www.themealdb.com/api/json/v1/1/filter.php?c="+search)
    const data = await response.json()
    setRecipe(data.meals)
    console.log(data)

  }

  
  
const handleSubmit=(e)=>{
  e.preventDefault();
  getRecipes()

}
 


  return (
    <div className="App">
      <form className="search-form" onSubmit={handleSubmit}>
        <input className="search-bar" type="text" value={search} onChange={(e)=>setSearch(e.target.value)}/>
        <button className="search-button" type="submit">Search</button>
      </form>
      {
        recipe?.map(recipes => (
          <Recipe strMeal={recipes.strMeal} idMeal={recipes.idMeal}
            strMealThumb={recipes.strMealThumb
            }

          />
        ))
      }
    </div>
  );
}

export default App;
