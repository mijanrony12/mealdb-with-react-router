import React from 'react';
import { useParams } from 'react-router';

const MealDetail = () => {
    const {idmeal}=useParams()
    return (
        <div>
                    <h2>this is meal Details</h2>
        </div>
    );
};

export default MealDetail;