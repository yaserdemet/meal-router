import HomeStyle from "./Home.style";
import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../../components/header/Header";

const Home = () => {
  const mealTypes=["Breakfast","Lunch","Dinner","Snack","Teatime"]
  const [query, setQuery] = useState("");
  const [selectedMeal, setSelectedMeal] = useState(mealTypes[0]);
  const [recipes, setRecipes] = useState([]);

  const APP_ID = "9df041a6";
  const APP_KEY = "77c7ceb1a4c40d69998fc15e99950338";
  const url = `https://api.edamam.com/search?q=${query}&app_id=${APP_ID}&app_key=${APP_KEY}&mealType=${selectedMeal}`;

  const getData = async () => {
    try{
      const { data } = await axios.get(url);
      // *  axios veriyi data keyi ile gönderir. Bu sebeple destructre edip aldık
      console.log(data.hits);
      setRecipes(data.hits);
    }
    catch(err){
      console.log(err);
    }
   
  };

  console.log(recipes);

 

  return( <div>
    <Header  getData={getData()} setQuery={setQuery} setSelectedMeal={setSelectedMeal} mealTypes={mealTypes}/>
  </div>)
};

export default Home;
