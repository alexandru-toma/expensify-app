import React from 'react';

const ExpenseListItem = ({ description, amount, createdAt}) => {
    return (
        <div>
            <p> This is the description: {description} </p>
            <p> {amount} - {createdAt} </p>
        </div>
    );
}

export default ExpenseListItem;