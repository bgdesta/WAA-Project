import React, { useState, useEffect } from "react";

// import UserService from "../services/user.service";
import EventBus from "../common/EventBus";
import accountService from "../services/account.service";

const AdminLandingPage = () => {
  const [sellerAccounts, setSellerAccounts] = useState([{}]);

  function handleVerify(id) {
    accountService.verifySellerAccounts(id).then(
      (res) => {
        setSellerAccounts(res.data);
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
  }

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
          <thead>
            <tr>
              <th>Username</th>
              <th>Email</th>
              <th>Account Status</th>
            </tr>
          </thead>

          {sellerAccounts.map((acct, index) => {
            return (
              <tbody>
                <tr key={acct.id}>
                  <td>{acct.username}</td>
                  <td>{acct.email}</td>
                  <td>{acct.status}</td>
                  <td>
                    <button
                      name="verification-btn"
                      id="verification-btn"
                      onClick={() => handleVerify(acct.id)}
                    >
                      Verify Account
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

export default AdminLandingPage;
