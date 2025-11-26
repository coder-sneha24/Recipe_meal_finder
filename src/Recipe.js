import React from "react";
const Recipe=({strMeal,idMeal,strMealThumb})=>{
    return(
        <div>
            <h1>{strMeal}</h1>
<p>{idMeal}</p>
<img src={strMealThumb}/>
        </div>
    )
}
export default Recipe;