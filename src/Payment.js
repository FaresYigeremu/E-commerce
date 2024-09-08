import React, { useEffect, useState } from "react";
import "./Payment.css";
import { useStateValue } from "./StateProvider";
import CheckoutProduct from "./CheckoutProduct";
import { Link, useHistory } from "react-router-dom";
import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import CurrencyFormat from "react-currency-format";
import { getBasketTotal } from "./reducer";
import axios from "./axios";
function Payment() {
  const [{ basket, user }, dispatch] = useStateValue();
  const [streetAddress, setStreetAddress] = useState("");
  const [locationAddress, setLocationAddress] = useState("");
  const history = useHistory()
  const [succeeded, setSucceeded] =useState(false);
  const [processing, setProcessing] = useState("");
  const [error, setError] = useState(null);
  const [disabled, setDisabled] = useState(true);
  const [clientSecret, setClientSecret] = useState(true);

  useEffect(() => {
      const getClientSecret = async () => {
        const response = await axios({
          method: 'post',
          // Stripe expects the total in a currencies subunits
          url: `/payments/create?total=${getBasketTotal(basket)*100}`
        });
        setClientSecret(response.data.clientSecret)
      }
      getClientSecret();

  }, [basket])

  console.log('The secret is >>>', clientSecret)

  const stripe = useStripe();
  const elements = useElements();

  const handleChange = (event) => {
    //listen for changex
    //and display any errors as type card detailes
    setDisabled(event.empty);
    setError(event.error ? event.error.message : "");
  };
  const handleSubmit = async (event) => {
    event.preventDefault();
    setProcessing(true);
    
    const payload = await stripe.confirmCardPayment(clientSecret, {
      payment_method: {
        card: elements.getElement(CardElement)
      }
    }).then(({ paymentIntent }) => {
    // paymentc confiramtion = paymentIntent. get it now?
    setSucceeded(true);
    setError(null);
    setProcessing(false);

    dispatch({
      type: 'EMPTY_BASKET'
    })

    history.replace('/orders')
  })
  };
  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(<Link to="/checkout">{basket?.length} items</Link>)
        </h1>
        {/*Payment section - delivery address */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Delivery Address</h3>
          </div>
          <div className="payment__address">
            <p>{user?.email}</p>
            {/** I want to implement it here the input method
             */}
            <form onSubmit={handleSubmit}>
              <label htmlFor="street-address">Street Address:</label>
              <input
                type="text"
                id="street-address"
                name="street-address"
                value={streetAddress}
                onChange={(event) => setStreetAddress(event.target.value)}
                autoComplete="address-line1"
              />

              <label htmlFor="location-address">Location Address:</label>
              <input
                type="text"
                id="location-address"
                name="location-address"
                value={locationAddress}
                onChange={(event) => setLocationAddress(event.target.value)}
                autoComplete="address-line2"
              />

              <button type="submit">Save Address</button>
            </form>
          </div>
        </div>
        {/*Payment section - Review Items */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Review items and delivery</h3>
          </div>
          <div className="payment__items">
            {basket.map((item) => (
              <CheckoutProduct
                id={item.id}
                title={item.title}
                image={item.image}
                price={item.price}
                rating={item.rating}
              />
            ))}
          </div>
        </div>
        {/*Payment section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h3>Payment Method</h3>
          </div>
          <div className="payment__details">
            {/** Stripe integration */}
            <form onSubmit={handleSubmit}>
              <CardElement onChange={handleChange} />
              
              <div className="payment__priceContainer">
                <CurrencyFormat
                  renderText={(value) => (
                  <h3>Order Total: {value}</h3>
  )}
                  decimalScale={2}
                  value={getBasketTotal(basket)}
                  displayType={"text"}
                  thousandSeparator={true}
                  prefix={"$"}
                />
                <button disabled={processing || disabled || succeeded}>
                  <span>{processing ? <p>Processing</p> : "Buy Now"}</span>
                   </button>
              </div>
              {/** if any mismatch then it is error */}
              {error && <div>{error}</div>}
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Payment;
