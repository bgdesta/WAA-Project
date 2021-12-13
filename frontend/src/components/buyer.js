import React, { useState } from "react";
import axios from "axios";
import DisplayCart from './displayCart'

export default function Buyer() {

    const [purchase, setPurchase] = useState({ name: "", shippingaddress: "", billingaddress: "" });


    // const [items, setItems] = useState([
    //     { itemName: 'iPhoe pro 13', quantity: 1, isSelected: false },
    //     { itemName: 'MacBook Pro', quantity: 3, isSelected: true },
    //     { itemName: 'Imac', quantity: 2, isSelected: false },
    // ]);

    // const [inputValue, setInputValue] = useState('');

    // const [totalItemCount, setTotalItemCount] = useState(6);
    // const addItem = "";

    // const handleAddButtonClick = (addItem, price) => {
    //     const newItem = {
    //         itemName: addItem,
    //         quantity: 1,
    //         price: price,
    //         isSelected: false,
    //     };
    // }

    // const newItems = [...items, newItem];

    // setItems(newItems);



    // const [items, setItems] = useState([]);

    // // handle click event of the button to add item
    // const addMoreItem = (e1, e2) => {

    //     setItems(prevItems => [...prevItems, {
    //         id: prevItems.length,
    //         productname: e1,
    //         price: e2

    //     }]);
    // }


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







    /////////////////////////////////////////////////////////
    // HINT: each "item" in our list names a name,
	// a boolean to tell if its been completed, and a quantity

	const [items, setItems] = useState([
		{ itemName: 'iPhoe pro 13', quantity: 1, isSelected: false },
		{ itemName: 'MacBook Pro', quantity: 3, isSelected: true },
		{ itemName: 'Imac', quantity: 2, isSelected: false },
	]);

	const [inputValue, setInputValue] = useState('');
	const [totalItemCount, setTotalItemCount] = useState(6);

	const handleAddButtonClick = (itemName, itemPrice) => {
		const newItem = {
			itemName: itemName,
            price:itemPrice,
			quantity: 1,
			isSelected: false,
            
		};

		const newItems = [...items, newItem];
        console.log(newItems);

		//setItems(newItems);
		//setInputValue('');
		//calculateTotal();
	};

	// const handleQuantityIncrease = (index) => {
	// 	const newItems = [...items];

	// 	newItems[index].quantity++;

	// 	setItems(newItems);
	// 	calculateTotal();
	// };

	// const handleQuantityDecrease = (index) => {
	// 	const newItems = [...items];

	// 	newItems[index].quantity--;

	// 	setItems(newItems);
	// 	calculateTotal();
	// };

	// const toggleComplete = (index) => {
	// 	const newItems = [...items];

	// 	newItems[index].isSelected = !newItems[index].isSelected;

	// 	setItems(newItems);
	// };

	// const calculateTotal = () => {
	// 	const totalItemCount = items.reduce((total, item) => {
	// 		return total + item.quantity;
	// 	}, 0);

	// 	setTotalItemCount(totalItemCount);
	// };
    ////////////////////////////////////////////////////////////////////////


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
            <div>
                <h2>Select Products</h2>
            </div>        

            <div className="divbuttommargin">
                <span>product Name: iPhone pro   price: 2000</span>
                <button className="buttonCart" onClick={handleAddButtonClick("iphone 13", 2000)}>
                    Add to Cart
                </button>
            </div>

            <div className="divbuttommargin">
                <span>product Name: Samsung    price: 100</span>
                <button className="buttonCart" onClick={handleAddButtonClick("Samsung", 2000)}>
                    Add to Cart
                </button>
            </div>

            <div className="divbuttommargin">
                <span>product Name: macbookpro    price: 2500</span>
                <button className="buttonCart" onClick={handleAddButtonClick("iphone 13", 2000)}>
                    Add to Cart
                </button>
            </div>

            <div className="divbuttommargin">
                <span>product Name: iPhone 13    price: 2000</span>
                <button className="buttonCart" onClick={handleAddButtonClick("iphone 13", 2000)}>
                    Add to Cart
                </button>
            </div>

            <div className="divbuttommargin">
                <span>product Name: iPhone 13    price: 2000</span>
                <button className="buttonCart" onClick={handleAddButtonClick("iphone 13", 2000)}>
                    Add to Cart
                </button>
            </div>

            <div className="divbuttommargin">
                <span>product Name: iPhone 13    price: 2000</span>
                <button className="buttonCart" onClick={handleAddButtonClick("iphone 13", 2000)}>
                    Add to Cart
                </button>
            </div>


            <div>
                <input

                    className="clickbutton"
                    value="Place Order "
                    type="button"
                    onChange={purchaseHandler}

                />
            </div>
        </div>
    )
}


