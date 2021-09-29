import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory, useParams } from 'react-router';
import { Link } from 'react-router-dom';

const MealDetail = () => {
    const { idmeal } = useParams();
    const [ mealDetail, setMealDetail ] = useState([])
    const history=useHistory()
    useEffect(() => {
        const url=`https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idmeal}`
        fetch(url)
            .then(res => res.json())
            .then(data => setMealDetail(data.meals))
    }, [])
    console.log(mealDetail)
    const handleBtnClick = () => {
         history.push('/rastruant')
    }
    return (
        <div>
            <Card style={ { width: '18rem' } }>
                <h6>ID Number:- { idmeal}</h6>
                            <Card.Img variant="top" src={mealDetail.strMealThumb} />
                            <Card.Body>
                                <Card.Title>{mealDetail.strMeal}</Card.Title>
                                <Card.Text>
                                            { mealDetail.strInstructions}
                             </Card.Text>
                                     <Button onClick={handleBtnClick} variant="primary">Go Rastruant</Button>
                            </Card.Body>
                   </Card>
        </div>
    );
};

export default MealDetail;