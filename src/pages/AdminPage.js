import React, { useState, useEffect } from "react";
import { useHistory } from 'react-router-dom';

import AdminPageButton from "../components/atoms/AdminPageButton";

import Layout from "../components/organisms/Layout";
import Header from "../components/organisms/Header";
import Heading from "../components/organisms/Heading";
import AdminCard from "../components/organisms/AdminCard";
import Api from "../api/api";
import OneCard from '../components/atoms/OneCard';

const AdminPage = () => {

    const [productName, setProductName] = useState('');
    const [productCategory, setProductCategory] = useState('');
    const [productDescription, setProductDescription] = useState('');
    const [productPrice, setProductPrice] = useState('');

    const [editedProductId, setEditedProductId] = useState(0);
    const [editedProductName, setEditedProductName] = useState('');
    const [editedProductCategory, setEditedProductCategory] = useState('');
    const [editedProductDescription, setEditedProductDescription] = useState('');
    const [editedPproductPrice, setEditedProductPrice] = useState('');


    const { push } = useHistory();
    const goToUserPage = () => {
      push(`/`);
    };

    const[productData, setProductData] = useState({product: []});
    
    useEffect(() => {
        const searchData = async () => {
            await Api().get().then(result => {
                setProductData({
                      product: result.data
                });
            });
        };
        searchData();
    }, []);


    const handleOnDeleteClicked = async (id) => {
        await Api().delete(`delete/${id}`);
        refreshPage();
      };
    
      const handleOnEditClicked = id => {
        setEditedProductId(id);

        const editProduct = productData.product.find(product => product.productId === id);

        setEditedProductName(editProduct.productName);
        setEditedProductCategory(editProduct.category);
        setEditedProductDescription(editProduct.description);
        setEditedProductPrice(editProduct.piecePrice);
      };
    
      const handleOnEditSaveClicked = async () => {
        await Api().put(`update`, {
            productId: editedProductId,
            productName: editedProductName,
            category: editedProductCategory,
            description: editedProductDescription,
            piecePrice: parseFloat(editedPproductPrice),
            productImage: "nn"
        });

        setEditedProductId(0);
        refreshPage();
      };

      const handleAddProductClicked = async () => {
        
        await Api().post(``, {
            productId: 0,
            productName: productName,
            category: productCategory,
            description: productDescription,
            piecePrice: parseFloat(productPrice),
            productImage: "nn"
        });

        refreshPage();
    };

    const refreshPage = () => {
        window.location.reload(false);
    };

    const renderProducts = () => 
    productData.product.map(({productId, productName, category, description, piecePrice}) => (
        <AdminCard
            key = {productId}
            productId = {productId}
            productName = {productName}
            productCategory = {category}
            productDescription= {description}
            productPrice = {piecePrice}
            onDeleteClicked = {() => handleOnDeleteClicked(productId)}
            onEditClicked = {() => handleOnEditClicked(productId)}
            onEditSaveClicked = {() => handleOnEditSaveClicked(productId)}
            editedproductId = {editedProductId}
            editedproductName = {editedProductName}
            editedproductCategory = {editedProductCategory} 
            editedproductDescription = {editedProductDescription}
            editedproductPrice = {editedPproductPrice}
            setproductName = {setEditedProductName} 
            setproductCategory = {setEditedProductCategory}
            setproductDescription = {setEditedProductDescription}
            setproductPrice = {setEditedProductPrice}
        />
    ));

    const renderAddProduct = () => (
        <OneCard>
                    <input placeholder="Product" type="text" onChange={event => setProductName(event.target.value)} value={productName}/>
                    <input placeholder="Category" type="text" onChange={event => setProductCategory(event.target.value)} value={productCategory}/>
                    <input placeholder="Description" type="text" onChange={event => setProductDescription(event.target.value)} value={productDescription}/>
                    <input placeholder="Price" type="text" onChange={event => setProductPrice(event.target.value)} value={productPrice}/>
                    <button onClick={() => handleAddProductClicked()}>Add</button>
        </OneCard>
    );
   
    return(
        <Layout>
            <Heading>
                <Header/>
                <AdminPageButton onClick={goToUserPage}>User Page</AdminPageButton>
            </Heading>
            {renderAddProduct()}
            {renderProducts()}
        </Layout>
    );
};

export default AdminPage;