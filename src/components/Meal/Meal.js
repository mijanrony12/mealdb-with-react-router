import React from 'react';
import { Button, Card } from 'react-bootstrap';
import { Link, useHistory } from 'react-router-dom';

const Meal = (props) => {
    console.log(props.meal)
    const history =useHistory()
    const {strMealThumb,strMeal,strInstructions,idMeal}=props.meal


    const handleClick = () => {
      
         history.push(`/rastruant/${idMeal}`)
    }
    return (
        
            <div className="col-md-4">
                       <Card style={{ width: '18rem' }}>
                            <Card.Img variant="top" src={strMealThumb} />
                            <Card.Body>
                                <Card.Title>{strMeal}</Card.Title>
                                <Card.Text>
                                            { strInstructions.slice(0,100)}
                             </Card.Text>
                                 <Link to={`/rastruant/${idMeal}`}>
                                      <Button className="mb-3" variant="primary">Go Details</Button>
                                </Link>
                                 <br />
                                     <Button onClick={handleClick} variant="primary">visit Details</Button>
                            </Card.Body>
                   </Card>
           </div>
       
    );
};

export default Meal;