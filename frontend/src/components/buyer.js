import React, { useState } from "react";
import axios from "axios";
import DisplayCart from './displayCart'
import iphone11 from '../images/iphone11.jpg';
import '../cssStyle/cssstyle.css'
import macbookpro from '../images/macbookpro.jpg'
import iphone13 from "../images/iphone13.jpg"
import samsung  from '../images/samsung-galaxy-m51.jpg'
import macmin  from '../images/mac-min.jpg'
import applewatch  from '../images/applewatch.jpg'

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
            <img src={iphone13} alt = "logo"></img>
                
                <p className="gclass">product Name: iPhone 13 Pro: Smooth, responsive Super Retina XDR display with ProMotion. Huge camera system upgrade for dramatic new possibilities. Exceptional durability. 
                The ultrafast A15 Bionic chip. And breakthrough battery life. Let’s Pro. </p>
                <a href="https://www.apple.com/iphone-13-pro/">Learn more </a>

                <p className="gclass">price: 2500</p>

                
                <button className="buttonCart" onClick={handleAddButtonClick("iphone 13", 2000)}>
                    Add to Cart
                </button>
            </div>

            <div className="divbuttommargin">
                
                <img src={samsung} alt = "logo"></img>
                <p className="gclass">product Name: Samsung Galaxy M31 </p>
                <p className="gclass">With the Samsung Galaxy M31 - Samsung re-introduces the powerful 6000 mAh battery along with all round features comprising of a 64 MP rear camera in Quad camera set up and an immersive samoled screen.

                    Screen Size: 6.4″, Weight: 6.74 oz, Display Resolution:2340 x 1080, Storage Capacity: 128 GB</p>
                    <a href="https://www.gsmarena.com/samsung_galaxy_m31-10079.php/">Learn more </a>
                    <p className="gclass">price: 1500</p>
                
                <button className="buttonCart" onClick={handleAddButtonClick("Samsung", 2000)}>
                    Add to Cart
                </button>
            </div>

            <div className="divbuttommargin">
            
                <img src={macbookpro} alt = "logo"></img>
                
                <p className="gclass">product Name: MacBook Pro </p>
                <p className="gclass">The Apple M1 chip gives the 13‑inch MacBook Pro speed and power beyond belief. With up to 2.8x CPU performance. 
                    Up to 5x the graphics speed. Our most advanced Neural Engine for up to 11x faster machine learning. And up to 20 
                    hours of battery life so you can go all day. It’s our most popular pro notebook, taken to a whole new level.</p>
                    <a href="https://www.apple.com/macbook-pro-13/">Learn more </a>
                    <p className="gclass">price: 2500</p>
               
                <button className="buttonCart" onClick={handleAddButtonClick("iphone 13", 2000)}>
                    Add to Cart
                </button>
            </div>

            <div className="divbuttommargin">
                <img src={applewatch} alt = "logo"></img>
                
                <p className="gclass">product Name: Apple Watch:Graphite Stainless Steel Case with Milanese Loop
                    The stainless steel case is durable and polished to a shiny, mirror-like finish.

                    The Milanese Loop is made from a smooth stainless steel mesh that’s fully magnetic, so it’s infinitely 
                    adjustable for a perfect fit. </p>
                    <p className="gclass">Connectivity What’s the difference between GPS and GPS + Cellular? GPS + Cellular
                    Make calls and send messages with just your Apple Watch. Works with Family Setup.</p>
                    <a href="https://www.apple.com/watch/">Learn more </a>
                <p className="gclass">price: 500</p>
                <button className="buttonCart" onClick={handleAddButtonClick("iphone 13", 2000)}>
                    Add to Cart
                </button>
            </div>

            <div className="divbuttommargin">
                <img src={iphone11} alt = "logo"></img>
                
                <p className="gclass">product Name: iPhone 13 </p>
                <p className="gclass">price: 2000</p>
                <button className="buttonCart" onClick={handleAddButtonClick("iphone 13", 2000)}>
                    Add to Cart
                </button>
            </div>

            <div className="divbuttommargin">
                <img src={macmin} alt = "logo"></img>
                
                <p className="gclass">product Name: Mac min: </p>
                <p className="gclass">price: 100</p>
                
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


