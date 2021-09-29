import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Meal from '../Meal/Meal';
import './Rastruant.css'

const Rastruant = () => {
    const [ meals, setMeals ] = useState([])
    const [ searhText, setSearchText ] = useState(' ')
    const [mealItem, setMealItem]=useState([])
    
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => res.json())
            .then(data => {
                setMeals(data.meals)
                setMealItem(data.meals)
            })
    }, [])

    useEffect(() => {
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searhText}`
        fetch(url)
            .then(res => res.json())
        .then(data =>setMealItem(data.meals))
    },[searhText])
    
    const getSearchValue = e => {
        const searchTextValue = e.target.value;
           setSearchText(searchTextValue)
    }
    return (
        <div>
            <div className="container">
                              <div className="search-box">
                                         <input  onChange={getSearchValue} type="text" placeholder="Search your favorite" />
                               </div>
                   <div className="row mb-3">
                           {
                                mealItem.map(meal => <Meal meal={meal}></Meal>)
                           }
                </div>
            </div>
        </div>
    );
};

export default Rastruant;