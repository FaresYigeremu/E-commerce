/* eslint-disable */
import React, {useEffect} from "react";
import "./App.css";
import Header from "./Header";
import Home from "./Home";
import Checkout from "./Checkout";
import {BrowserRouter as Router, Switch, Route} from "react-router-dom";
import Login from "./Login";
import {auth} from "./firebase";
import {useStateValue} from "./StateProvider";
import Payment from "./Payment";
import {loadStripe} from "@stripe/stripe-js";
import {Elements} from "@stripe/react-stripe-js";
import Orders from "./Orders";
import Footer from "./Footer";
const promise = loadStripe(
    "pk_test_51Pus4KBUPgMzEiCzXxCU0PVPOTkmagN2v1i580IgpsxSAqPQwCIgJKgCvS7mnlBSCu8e34CfV8pSIpL8Uvjv0qYx00QvDpjX2f",
);

/**
* The main App component.
* This component is responsible for rendering the main application view.
* It is also responsible for setting the user state in the data layer when
* the user logs in or out.
* The component renders a BrowserRouter component with four routes:
* - /Login: renders the Login component
* - /orders: renders the Orders component
* - /checkout: renders the Checkout component
* - /payment: renders the Payment component
* - /: renders the Home component
* @return {JSX.Element} - The main App component.
* The component also renders a Header component on each route.
* The component uses the useStateValue hook to get the user state from the
* data layer and the dispatch function to set the user state.
* The component uses the useEffect hook to set the user state when the
* component mounts and when the user logs in or out.
*/ 
function App() {
  const [{}, dispatch] = useStateValue();

  useEffect(() => {
    // will only run once when the app component loads...

    auth.onAuthStateChanged((authUser) => {
      // console.log("THE USER IS >>> ", authUser);

      if (authUser) {
        // the user just logged in / the user was logged in

        dispatch({
          type: "SET_USER",
          user: authUser,
        });
      } else {
        // the user is logged out
        dispatch({
          type: "SET_USER",
          user: null,
        });
      }
    });
  }, []);

  return (
    // BEM
    <Router>
      <div className="app">
        <Switch>
          <Route path="/Login">
            <Login />
          </Route>
          <Route path="/orders">
            <Header />
            <Orders />
          </Route>
          <Route path="/checkout">
            <Header />
            <Checkout />
          </Route>
          <Route path="/payment">
            <Header />
            <Elements stripe={promise}>
              <Payment />
            </Elements>
          </Route>
          <Route path="/">
            <Header />
            <Home />
            <Footer />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
