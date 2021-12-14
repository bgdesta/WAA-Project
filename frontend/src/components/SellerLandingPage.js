import React, { useState, useEffect } from "react";

import EventBus from "../common/EventBus";
import productService from "../services/product.service";

const SellerLandingPage = () => {
  const [products, setProducts] = useState([{}]);

  function handleDelete(id) {
    productService.deleteProduct(id).then(
      (res) => {
        if (res.data === "FAIL_DELETE") {
          alert("Sorry, You can't delete a product that is already sold!");
        } else {
          setProducts(res.data);
        }
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setProducts(_content);
        // if (error.response && error.response.status === 401) {
        //   EventBus.dispatch("logout");
        // }
      }
    );
  }

  useEffect(() => {
    productService.getAllProducts().then(
      (response) => {
        setProducts(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setProducts(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h2>Product List</h2>
        <table>
          <thead>
            <tr>
              <th>Product Name</th>
              <th>Model</th>
              <th>Serial Number</th>
              <th>Product Description</th>
              <th>Status</th>
            </tr>
          </thead>

          {products.map((prod, index) => {
            return (
              <tbody>
                <tr key={prod.id}>
                  <td>{prod.name}</td>
                  <td>{prod.model}</td>
                  <td>{prod.serialnum}</td>
                  <td>{prod.description}</td>
                  <td>{prod.status}</td>
                  <td>
                    <button
                      name="verification-btn"
                      id="verification-btn"
                      onClick={() => handleDelete(prod.id)}
                    >
                      Delete Product
                    </button>
                  </td>
                </tr>
              </tbody>
            );
          })}
        </table>
      </header>
    </div>
  );
};

export default SellerLandingPage;
