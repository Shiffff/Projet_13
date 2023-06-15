import React from "react";
import "./profil.css";
import Account from "../../components/Account/Account";
import EditName from "../../components/EditNameForm/EditName";

const Profil = () => {
  const accountArray = [
    {
      title: "Argent Bank Checking (x8349)",
      amount: "$2,082.79",
      amountDescription: "Available Balance",
    },
    {
      title: "Argent Bank Savings (x6712)",
      amount: "$10,928.42",
      amountDescription: "Available Balance",
    },
    {
      title: "Argent Bank Credit Card (x8349)",
      amount: "$184.30",
      amountDescription: "Current Balance",
    },
  ];

  return (
    <main className="main bg-dark">
      <EditName />
      <h2 className="sr-only">Accounts</h2>
      {accountArray.map((account, key) => {
        return (
          <Account
            title={account.title}
            amount={account.amount}
            amountDescription={account.amountDescription}
            key={key}
          />
        );
      })}
    </main>
  );
};

export default Profil;
