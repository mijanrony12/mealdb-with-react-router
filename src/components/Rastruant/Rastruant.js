import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import Meal from '../Meal/Meal';

const Rastruant = () => {
    const [ meals, setMeals ] = useState([])


    
    useEffect(() => {
        fetch('https://www.themealdb.com/api/json/v1/1/search.php?s=')
            .then(res => res.json())
        .then(data=> setMeals(data.meals))
    },[])
    return (
        <div>
            <div className="row">
                           {
                                meals.map(meal => <Meal meal={meal}></Meal>)
                           }
                </div>
        </div>
    );
};

export default Rastruant;