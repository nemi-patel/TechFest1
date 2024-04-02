import React, { useState, useEffect } from "react";
import "../CSS/Payment.css";

function Payment() {
  const [paymentMethod, setPaymentMethod] = useState(null);
  const [file, setFile] = useState(null);
  const [dropdownVisible, setDropdownVisible] = useState(false);

  const handlePaymentOption = (option) => {
    setPaymentMethod(option);
    setDropdownVisible(false);
    if (option === "cheque") {
      document.getElementById("uploadImage").style.display = "block";
    } else {
      document.getElementById("uploadImage").style.display = "none";
    }
  };

  const handleFileUpload = (event) => {
    setFile(event.target.files[0]);
  };

  const handlePaymentSubmit = async () => {
    try {
      const formData = new FormData();
      formData.append("payment_method", paymentMethod);
      if (file) {
        formData.append("cheque_photo", file);
      }
      const response = await fetch("http://127.0.0.1:8000/api/payments/", {
        method: "POST",
        body: formData,
      });
      const data = await response.json();
      alert("Your payment was successful!");
    } catch (error) {
      console.error("Error submitting payment:", error);
      alert("Error submitting payment. Please try again.");
    }
  };

  return (
    <>
      <div className="payment-container">
        <div className="dropdown">
          <button
            className="dropdown-btn"
            data-aos="zoom-out-right"
            data-aos-easing="linear"
            data-aos-duration="1500"
            onClick={() => setDropdownVisible(!dropdownVisible)}>
            Select Payment Method
          </button>
          {dropdownVisible && (
            <div className="dropdown-content" data-aos="zoom-out-left"
            data-aos-easing="linear"
            data-aos-duration="1500">
              <button onClick={() => handlePaymentOption("cheque")}>
                Pay with Cheque
              </button>
              <button onClick={() => handlePaymentOption("debit card")}>
                Pay with Debit Card
              </button>
              <button onClick={() => handlePaymentOption("cash")}>
                Pay with Cash
              </button>
            </div>
          )}
        </div>
        <div
          id="uploadImage"
          className="upload-image"
          style={{ display: "none" }} >
          <input type="file" onChange={handleFileUpload} />
        </div>
        <button className="submit-btn" onClick={handlePaymentSubmit} data-aos="zoom-out-left"
            data-aos-easing="linear"
            data-aos-duration="1500">
          Make Payment
        </button>
      </div>
    </>
  );
}

export default Payment;
