import React, { useState,setState } from "react";
import axios from "axios";

export default function Product() {

    const [product, setProduct] = useState({ category: "", productname: "", quantity: 0, unitprice: 0 });

    const handleChange = e => {
        const { name, value } = e.target;
        setProduct(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    function productRegistrationHandler(event) {
         event.preventDefault();

    
        let productData = {
          catagory: product.catagory,
          Productname: product.ProductName,
          quantity: parseInt(product.quantity),
          unitprice: parseFloat(product.unitprice),
        };
    
        axios
          .post("http://localhost:8080/product", productData)
          .then((res) => {
            console.log(res.status);
            console.log(res.data);
          })
          .catch((error) => {
            console.log("Failed to write data to DB! " + error);
          });
      }


    return (
        <div >
            <div>
                <h3 className="h3class">product Registration</h3>
            </div>

            <div className="divbuttommargin">
                <label className="labels">Product category:</label>
                <input 
                    className="inputclass"
                    value={product.category}
                    type="text"
                    onChange={handleChange}
                    name="category"
                />

            </div>
            <div className="divbuttommargin">
                <label className="labels">Product Name:</label>
                
                <input 
                    className="inputclass"
                    value={product.productname}
                    type="text"
                    onChange={handleChange}
                    name="productname"
                />

            </div>
            <div className="divbuttommargin" >
            <label className="labels">Quantity:</label>
                
                <input 
                    className="inputclass"
                    value={product.quantity}
                    type="text"
                    onChange={handleChange}
                    name="quantity"
                />
            </div>

            <div className="divbuttommargin">
                <label className="labels">Unit Price:</label>
                
                <input
                    className="inputclass"
                    value={product.unitPrice}
                    type="text"
                    onChange={handleChange}
                    name="unitPrice"
                />

            </div>

            <div>
                <input

                className="clickbutton"            
                value="Save Product"
                type="button"
                onClick = {productRegistrationHandler}
                
            />
                
               
            </div>

            {/* <div >
                <button className="clickbutton"
                    onClick={() => { productRegistrationHandler() }}
                >
                    Save Product
                </button>

            </div> */}
        </div>
    )
}
