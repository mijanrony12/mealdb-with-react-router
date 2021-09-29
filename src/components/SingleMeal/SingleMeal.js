import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { useHistory } from 'react-router';

const SingleMeal = (props) => {
    const { strMealThumb, strMeal, strInstructions } = props.meal;
     const history=useHistory()
      const handleBtnClick = () => {
         history.push('/rastruant')
    }
    return (
           <Card style={ { width: '20rem' } } className="text-center">
                
                            <Card.Img variant="top" src={strMealThumb} />
                            <Card.Body>
                                <Card.Title>{strMeal}</Card.Title>
                                <Card.Text>
                                            { strInstructions.slice(0,100)}
                             </Card.Text>
                                     <Button onClick={handleBtnClick} variant="primary">Go Rastruant</Button>
                            </Card.Body>
                   </Card>
    );
};

export default SingleMeal;