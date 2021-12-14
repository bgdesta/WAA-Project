import React, { useState, useEffect } from "react";

import EventBus from "../common/EventBus";
import orderService from "../services/order.service";
import productService from "../services/order.service";

const ViewOrders = () => {
  const [orders, setOrders] = useState([{}]);
  const [orderStatus, setOrderStatus] = useState([
    {
      status: "",
    },
  ]);

  function handleCancel(id) {
    orderService.cancelOrder(id).then(
      (res) => {
        if (res.data === "FAIL_CANCEL") {
          alert("Sorry, You can't delete a product that is already sold!");
        } else {
          setOrders(res.data);
        }
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setOrders(_content);
        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }

  function handleChangeStatus(id) {
    orderService.changeStatus(id).then(
      (res) => {
        if (res.data === "FAIL_CANCEL") {
          alert("Sorry, You can't delete a product that is already sold!");
        } else {
          setOrderStatus(res.data);
        }
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();
        setOrders(_content);
        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }
  useEffect(() => {
    productService.getAllOrders().then(
      (response) => {
        setOrders(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setOrders(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h2>Order List</h2>
        <table>
          <thead>
            <tr>
              <th>Date of Order</th>
              <th>Status</th>
              <th>Billing Address</th>
              <th>Shipping Address</th>
            </tr>
          </thead>

          {orders.map((ord, index) => {
            return (
              <tbody>
                <tr key={ord.id}>
                  <td>{ord.name}</td>
                  <td>{ord.model}</td>
                  <td>{ord.serialnum}</td>
                  <td>{ord.description}</td>
                  <td>{ord.status}</td>
                  <td>
                    {ord.status === "ORDERED" ? (
                      <button
                        name="cancel-btn"
                        id="cancel-btn"
                        onClick={() => handleCancel(ord.id)}
                      >
                        Cancel Order
                      </button>
                    ) : (
                      <div></div>
                    )}
                  </td>
                  <td>
                    {ord.status === "ORDERED" || ord.status === "SHIPPED" ? (
                      <select name="orderStat" id="orderStat">
                        <option value="">Select New Order Status</option>
                        <option value="ORDERED">ORDERED</option>
                        <option value="SHIPPED">SHIPPED</option>
                        <option value="DELIVERED">DELIVERED</option>
                      </select>
                    ) : (
                      <div></div>
                    )}

                    <button
                      name="change-status-btn"
                      id="change-status-btn"
                      onClick={() => handleChangeStatus(ord.id)}
                    >
                      Change Status
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

export default ViewOrders;
