import './App.css';
import React, { useEffect, useState } from 'react';
import Header from '../Header/Header';
import { Route, Routes } from 'react-router-dom';
import Friends from '../Friends/Friends';
import AboutUs from '../AboutUs/AboutUs';
import Home from '../Home/Home';
import NotFound from '../NotFound/NotFound';
import FriendDetail from '../../FriendDetail/FriendDetail';
import Countries from '../Countries/Countries';
import Meals from '../Meals/Meals';
import CountryDetail from '../CountryDetail/CountryDetail';

function App() {

  const [meals, setMeals] = useState([])
  console.log(meals);


   const [input, setInput] = useState('');

   console.log(input);
    const handleChange = (event) => {
        setInput(event.target.value);
    }

    // let navigate = useNavigate();

  const [search, setSearch] = useState("")
  console.log(search);

  const getSearch = (input) => {
      setSearch(input);
      setMeals([]);
      setInput('');
  }


  const [loading,  setLoading] = useState(false);


  useEffect(() => {
    setLoading(true);
    fetch(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`)
     .then(response => response.json())
     .then(data => {
          setLoading(false);       
          setMeals(data.meals)
     })
  }
    , [ search ])

    console.log(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);


 


  return (
  <div>
    <Header
      getSearch={getSearch}
      handleChange={handleChange}
      input={input}
    ></Header>
    <Routes>
      <Route path="/" element={<Home></Home>}></Route>
      <Route path="/friends" element={<Friends></Friends>}></Route>
      <Route path="/friends/:id" element={<FriendDetail></FriendDetail>}></Route>
      <Route path="/countries" element={<Countries></Countries>}>
        <Route path=":name" element={<CountryDetail></CountryDetail>}></Route>
      </Route>
      <Route path="/meals" element={<Meals
        meals={meals}
        loading={loading}
      ></Meals>}></Route>
      <Route path="/about" element={<AboutUs></AboutUs>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  </div>
  );
}

export default App;
