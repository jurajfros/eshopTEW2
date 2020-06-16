import React from 'react';

import OneCard from '../atoms/OneCard';

const AdminCard = ({

    productId,
    productName,
    productCategory,
    productDescription,
    productPrice,
    onDeleteClicked,
    onEditClicked,
    onEditSaveClicked,
    editedproductId,
    editedproductName,
    editedproductCategory,
    editedproductDescription,
    editedproductPrice,
    setproductName,
    setproductCategory,
    setproductDescription,
    setproductPrice
}) =>{

    const renderEditView = () => {
        return (
                <OneCard key={editedproductId}>
                    <p><b>Product name:</b></p>
                    <input type="text" value={editedproductName} onChange={event => setproductName(event.target.value)} placeholder='Product Name'/>
                    <p><b>Category:</b></p>
                    <input type="text" value={editedproductCategory} onChange={event => setproductCategory(event.target.value)} placeholder='Product Category'/>
                    <p><b>Description:</b></p>
                    <input type="text" value={editedproductDescription} onChange={event => setproductDescription(event.target.value)} placeholder='Product Description'/>
                    <p><b>Price:</b></p>
                    <input type="text" value={editedproductPrice} onChange={event => setproductPrice(event.target.value)} placeholder='Product Price'/>

                    <button onClick={onEditSaveClicked}>Save</button>
                </OneCard>
        );
    };

    const renderNormalView = () => {
        return (<OneCard key={productId}>
                    <p><b>Product name:</b> {productName}</p>
                    <p><b>Category:</b> {productCategory}</p>
                    <p><b>Description:</b> {productDescription}</p>
                    <p><b>Price:</b> {productPrice} $</p>
                    <button onClick={onEditClicked}>Update</button>
                    <button onClick={onDeleteClicked}>Delete</button>
                </OneCard>
                );
    };

    return(
        <div>
            {productId === editedproductId ? renderEditView() : renderNormalView()}
        </div>
    );
};

export default AdminCard;