import React, { useState } from "react";
import axios from "axios";
import iphone11 from "../images/iphone11.jpg";
import "../cssStyle/cssstyle.css";
import macbookpro from "../images/macbookpro.jpg";
import iphone13 from "../images/iphone13.jpg";
import samsung from "../images/samsung-galaxy-m51.jpg";
import macmin from "../images/mac-min.jpg";
import applewatch from "../images/applewatch.jpg";

export default function Buyer() {
  const [purchase, setPurchase] = useState({
    // name: "",
    shippingaddress: "",
    billingaddress: "",
  });

  const [cart, setCart] = useState([]);

  const purchaseProfileHandler = (e) => {
    const { name, value } = e.target;
    setPurchase((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function placeOrderHandler(event) {
    event.preventDefault();
    console.log(JSON.parse(localStorage.getItem("user")).id);
    let purchaseData = {
      user_id: JSON.parse(localStorage.getItem("user")).id,
      // name: purchase.name,
      shipping_address: purchase.shippingaddress,
      billing_address: purchase.billingaddress,
      ordered_date: new Date().toLocaleDateString(),
      shipped_date: new Date().toLocaleDateString(),
      productList: cart,
    };
    console.log(cart);

    axios
      .post("http://localhost:8080/orders", purchaseData)
      .then((res) => {
        alert("Ordered placed!");
      })
      .catch((error) => {
        console.log("Failed to write data to DB! " + error);
      });
  }

  //const [inputValue, setInputValue] = useState("");
  //const [totalItemCount, setTotalItemCount] = useState(6);

  ///////////////////////////////////////////////////
  const addToCartHandler = (itemName, model, serial, itemPrice) => {
    const newItem = {
      name: itemName,
      model: model,
      serialnum: serial,
      unitprice: itemPrice,
    };
    const newItems = [...cart, newItem];
    //cart = newItems
    // Object.assign(cart, newItems);
    setCart(newItems);
  };

  function removeFromCart(productName) {
    cart.splice(
      cart.findIndex((item) => item.itemName === productName),
      1
    );
    console.log(cart);
  }

  return (
    <div>
      <div>
        <h2 className="h3class">purchase products</h2>
      </div>

      <div className="divbuttommargin">
        <label className="labels">Shipping Address:</label>
        <input
          className="inputclass"
          value={purchase.shippingaddress}
          type="text"
          onChange={purchaseProfileHandler}
          name="shippingaddress"
        />
      </div>

      <div className="divbuttommargin">
        <label className="labels">Billing Address:</label>
        <input
          className="inputclass"
          value={purchase.billingaddress}
          type="text"
          onChange={purchaseProfileHandler}
          name="billingaddress"
        />
      </div>
      <div>
        <h2>Select Products</h2>
      </div>

      <div className="divbuttommargin">
        <img src={iphone13} alt="logo"></img>

        <p className="gclass">product Name: iPhone 13 Pro</p>
        <p className="gclass">
          {" "}
          <b>Features:</b> Smooth, responsive Super Retina XDR display with
          ProMotion. Huge camera system upgrade for dramatic new possibilities.
          Exceptional durability. The ultrafast A15 Bionic chip. And
          breakthrough battery life. Let???s Pro.{" "}
        </p>
        <a href="https://www.apple.com/iphone-13-pro/">Learn more </a>

        <p className="gclass">price: 2500</p>

        <button
          className="buttonCart"
          onClick={() =>
            addToCartHandler("iPhone 13 Pro", "PNX2-iPhone13", "SN1234", 2000)
          }
        >
          Add to Cart
        </button>

        <button
          className="buttonCart"
          onClick={() => removeFromCart("iPhone 13 Pro")}
        >
          Remove from Cart
        </button>
      </div>

      <div className="divbuttommargin">
        <img src={samsung} alt="logo"></img>
        <p className="gclass">product Name: Samsung Galaxy M31 </p>
        <p className="gclass">
          With the Samsung Galaxy M31 - Samsung re-introduces the powerful 6000
          mAh battery along with all round features comprising of a 64 MP rear
          camera in Quad camera set up and an immersive samoled screen. Screen
          Size: 6.4???, Weight: 6.74 oz, Display Resolution:2340 x 1080, Storage
          Capacity: 128 GB
        </p>
        <a href="https://www.gsmarena.com/samsung_galaxy_m31-10079.php/">
          Learn more{" "}
        </a>
        <p className="gclass">price: 1500</p>

        <button
          className="buttonCart"
          onClick={() =>
            addToCartHandler(
              "Samsung Galaxy M31",
              "SNGX2-Samsung",
              "SN4789",
              3000
            )
          }
        >
          Add to Cart
        </button>

        <button
          className="buttonCart"
          onClick={() => removeFromCart("Samsung Galaxy M31")}
        >
          Remove from Cart
        </button>
      </div>

      <div className="divbuttommargin">
        <img src={macbookpro} alt="logo"></img>

        <p className="gclass">product Name: MacBook Pro </p>
        <p className="gclass">
          The Apple M1 chip gives the 13???inch MacBook Pro speed and power beyond
          belief. With up to 2.8x CPU performance. Up to 5x the graphics speed.
          Our most advanced Neural Engine for up to 11x faster machine learning.
          And up to 20 hours of battery life so you can go all day. It???s our
          most popular pro notebook, taken to a whole new level.
        </p>
        <a href="https://www.apple.com/macbook-pro-13/">Learn more </a>
        <p className="gclass">price: 2500</p>

        <button
          className="buttonCart"
          onClick={() =>
            addToCartHandler("MacBook Pro", "SNMAC-MC2", "SN454789", 3200)
          }
        >
          Add to Cart
        </button>

        <button
          className="buttonCart"
          onClick={() => removeFromCart("MacBook Pro")}
        >
          Remove from Cart
        </button>
      </div>

      <div className="divbuttommargin">
        <img src={applewatch} alt="logo"></img>

        <p className="gclass">
          product Name: Apple Watch: Graphite Stainless Steel Case with Milanese
          Loop The stainless steel case is durable and polished to a shiny,
          mirror-like finish. The Milanese Loop is made from a smooth stainless
          steel mesh that???s fully magnetic, so it???s infinitely adjustable for a
          perfect fit.
        </p>
        <p className="gclass">
          Connectivity What???s the difference between GPS and GPS + Cellular? GPS
          + Cellular Make calls and send messages with just your Apple Watch.
          Works with Family Setup.
        </p>
        <a href="https://www.apple.com/watch/">Learn more </a>
        <p className="gclass">price: 500</p>
        <button
          className="buttonCart"
          onClick={() =>
            addToCartHandler("Apple Watch", "SNAPPL-WCH", "SN102789", 500)
          }
        >
          Add to Cart
        </button>
        <button
          className="buttonCart"
          onClick={() => removeFromCart(" Apple Watch")}
        >
          Remove from Cart
        </button>
      </div>

      <div className="divbuttommargin">
        <img src={iphone11} alt="logo"></img>

        <p className="gclass">product Name: iPhone 11 </p>
        <p className="gclass">
          <b>Features: </b>A new dual-camera system captures more of what you
          see and love. The fastest chip ever in a smartphone and all-day
          battery life let you do more and charge less.?? And it features the
          highest-quality video in a smartphone, so your memories look better
          than ever. The iPhone 11 comes in 6 stunning color options and
          features a gorgeous 6.1-inch all-screen Liquid Retina LCD. Get the
          most of it with Verizon, the nation's most awarded network.
        </p>
        <a href="https://www.apple.com/iphone-11/specs/">Learn more </a>
        <p className="gclass">price: 1000</p>
        <button
          className="buttonCart"
          onClick={() =>
            addToCartHandler("iPhone 11", "APP2HJ", "SN85748", 1000)
          }
        >
          Add to Cart
        </button>
      </div>

      <div className="divbuttommargin">
        <img src={macmin} alt="logo"></img>

        <p className="gclass">product Name: Mac Min: </p>
        <p className="gclass">
          {" "}
          Apple Mac Mini Desktop Intel Core i5 2.6GHz (MGEN2LL/A ) 8GB Memory,
          1TB Hard Drive, ThunderBolt (Renewed)
        </p>
        <p className="gclass">
          <b>Fearures: </b>Eighth-generation quad-core Intel Core i3 Intel UHD
          Graphics 630, 8GB 2666MHz DDR4, Ultrafast SSD storage, Four
          Thunderbolt 3 (USB-C) ports, one HDMI 2.0 port, and two USB 3 ports
          Gigabit Ethernet and 802.11ac Wi-Fi The latest version of macOS
        </p>

        <a href="https://www.apple.com/iphone-11/specs/">Learn more </a>
        <p className="gclass">price: 500</p>

        <button
          className="buttonCart"
          onClick={() =>
            addToCartHandler("Mac Min", "MACMIN", "SN443748", 2340)
          }
        >
          Add to Cart
        </button>

        <button
          className="buttonCart"
          onClick={() => removeFromCart("Mac Min")}
        >
          Remove from Cart
        </button>
      </div>

      <div>
        <button className="clickbutton" onClick={placeOrderHandler}>
          Place Order
        </button>
      </div>
    </div>
  );
}
