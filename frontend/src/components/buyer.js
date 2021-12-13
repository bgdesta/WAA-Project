import React, { useState } from "react";
import axios from "axios";

function Buyer() {

    const [purchase, setPurchase] = useState({ name: "", shippingaddress: "", billingaddress: "" });



    const [items, setItems] = useState([]);

    // handle click event of the button to add item
    const addMoreItem = (e1, e2) => {

        setItems(prevItems => [...prevItems, {
            id: prevItems.length,
            productname: e1,
            price: e2
           
        }]);
    }


    const handleChange = e => {
        const { name, value } = e.target;
        setPurchase(prevState => ({
            ...prevState,
            [name]: value
        }));
    };


    function purchaseHandler(event) {
        event.preventDefault();


        let purchaseData = {
            name: purchase.name,
            shippingaddress: purchase.shippingaddress,
            billingaddress: purchase.billingaddress,

        };

        axios
            .post("http://localhost:8080/buy", purchaseData)
            .then((res) => {
                console.log(res.status);
                console.log(res.data);
            })
            .catch((error) => {
                console.log("Failed to write data to DB! " + error);
            });
    }


    return (
        <div>
            <div>
                <h2 className="h3class">purchase products</h2>
            </div>

            <div className="divbuttommargin">
                <label className="labels">Name:</label>
                <input
                    className="inputclass"
                    value={purchase.name}
                    type="text"
                    onChange={handleChange}
                    name="name"
                />

            </div>

            <div className="divbuttommargin">
                <label className="labels">Shipping Address:</label>
                <input
                    className="inputclass"
                    value={purchase.shippingaddress}
                    type="text"
                    onChange={handleChange}
                    name="shippingaddress"
                />
            </div>

            <div className="divbuttommargin">
                <label className="labels">Billing Address:</label>
                <input
                    className="inputclass"
                    value={purchase.billingaddress}
                    type="text"
                    onChange={handleChange}
                    name="billingaddress"
                />
            </div>

            <h2>Select Products</h2>

            {/* <button onclick="{addMoreItem}">Add More</button> */}

            <div className="divbuttommargin">
                <label>product Name: iPhone 13    price: 2000</label>
                <button onClick={addMoreItem("iphone 13", 2000)}>
               
                Add to Cart

                </button>   
            </div>
            <div>
                <input

                    className="clickbutton"
                    value="Save Product"
                    type="button"
                    onChange={purchaseHandler}

                />
            </div>        
        </div>
    )
}
export default Buyer;