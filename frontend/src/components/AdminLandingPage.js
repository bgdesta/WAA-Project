import React, { useState, useEffect } from "react";

// import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import accountService from "../services/account.service";

const AdminLandingPage = () => {
  // const [content, setContent] = useState("");
  const [sellerAccounts, setSellerAccounts] = useState([{}]);

  useEffect(() => {
    accountService.getPendingSellerAccounts().then(
      (response) => {
        setSellerAccounts(response.data);
      },
      (error) => {
        const _content =
          (error.response &&
            error.response.data &&
            error.response.data.message) ||
          error.message ||
          error.toString();

        setSellerAccounts(_content);

        if (error.response && error.response.status === 401) {
          EventBus.dispatch("logout");
        }
      }
    );
  }, []);

  return (
    <div className="container">
      <header className="jumbotron">
        <h2>Seller Accounts Waiting for Admin Approval</h2>
        <table>
          <tr>
            <th>Username</th>
            <th>Email</th>
            <th>Account Status</th>
          </tr>
          {sellerAccounts.map((acct, index) => {
            return (
              <tr>
                <td>{acct.username}</td>
                <td>{acct.email}</td>
                <td>{acct.status}</td>
                <td>
                  <button name="verification-btn" id="verification-btn">
                    Verify Account
                  </button>
                </td>
              </tr>
            );
          })}
        </table>
        {/* <h3>{sellerAccounts}</h3> */}
      </header>
    </div>
  );
};

export default AdminLandingPage;
