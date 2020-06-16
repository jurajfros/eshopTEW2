import React from 'react';

import OneCard from '../atoms/OneCard';

const AddProductCard = () => {


    return(
            <OneCard>
                    <input placeholder="Product" type="text" onChange={event => setProductName(event.target.value)} value={productName}/>
                    <input placeholder="Category" type="text" onChange={event => setCategory(event.target.value)} value={category}/>
                    <input placeholder="Description" type="text" onChange={event => setDescription(event.target.value)} value={description}/>
                    <input placeholder="Price" type="text" onChange={event => setPiecePrice(event.target.value)} value={piecePrice}/>
                    <button onClick={() => Add(productName,category,description,piecePrice)}>Add</button>
            </OneCard>
    );
};

export default AddProductCard;