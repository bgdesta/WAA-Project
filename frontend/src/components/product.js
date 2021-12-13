import React, { useState } from "react";
import axios from "axios";
import Form from "react-validation/build/form";
import Input from "react-validation/build/input";
import CheckButton from "react-validation/build/button";

export default function Product() {
  const [product, setProduct] = useState({
    prodname: "",
    prodmodel: "",
    serialnum: "",
    description: "",
    unitprice: 0,
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProduct((prevState) => ({
      ...prevState,
      [name]: value,
    }));
  };

  function productRegistrationHandler(event) {
    event.preventDefault();

    let productData = {
      name: product.prodname,
      model: product.prodmodel,
      serialnum: product.serialnum,
      description: product.description,
      unitprice: parseFloat(product.unitprice),
    };
    console.log("Supplied data: " + JSON.stringify(productData));
    axios
      .post("http://localhost:8080/products", productData)
      .then((res) => {
        console.log(res.status);
        console.log(res.data);
      })
      .catch((error) => {
        console.log("Failed to write data to DB! " + error);
      });
  }

  return (
    <div className="container card card-container">
      <div>
        <h2>Product Registration</h2>
      </div>
      <Form>
        <div className="form-group">
          <label htmlFor="prodname">Product Name</label>
          <Input
            type="text"
            className="form-control"
            name="prodname"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="prodmodel">Model</label>
          <Input
            type="text"
            className="form-control"
            name="prodmodel"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="serialnum">Serial Number</label>
          <Input
            type="text"
            className="form-control"
            name="serialnum"
            onChange={handleChange}
          />
        </div>

        <div className="form-group">
          <label htmlFor="unitprice">Unit Price</label>
          <Input
            type="text"
            className="form-control"
            name="unitprice"
            onChange={handleChange}
          />
        </div>
        <div className="form-group">
          <label htmlFor="description">Description</label>
          <Input
            type="text"
            className="form-control"
            name="description"
            onChange={handleChange}
          />
        </div>
        <br />
        <div className="btn btn-primary prod-btn">
          <Input
            className="prod-btn"
            value="Save Product"
            type="submit"
            onClick={productRegistrationHandler}
          />
        </div>
      </Form>
    </div>
  );
}
