import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';
import SingleMeal from '../SingleMeal/SingleMeal';
import './MealDetails.css'

const MealDetail = () => {
    const { idmeal } = useParams();
    const [ mealDetail, setMealDetail ] = useState([])
    useEffect(() => {
        const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMealDetail(data.meals))
    }, [])

    return (
        <div className="div-center">
            {
                mealDetail.map(md => <SingleMeal meal={md}></SingleMeal> )
            }
          
        </div>
    );
};

export default MealDetail;