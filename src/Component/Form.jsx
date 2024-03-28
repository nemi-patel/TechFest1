import React, { useEffect, useState } from "react";
import axios from "axios";
import "../CSS/Form.css";
import { FaUser } from "react-icons/fa";
import { MdEmail } from "react-icons/md";
import { BsTelephoneFill } from "react-icons/bs";
import { FaBuildingColumns } from "react-icons/fa6";
import { TbZoomMoney } from "react-icons/tb";
import { MdOutlineNumbers } from "react-icons/md";
import Navbar from "./Navbar";
import { Link } from "react-router-dom";

function Form() {
  const [formData, setFormData] = useState({
    name: "",
    college_name: "",
    phone_number: "",
    email: "",
    college_year: "",
    address: "",
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = () => {
    try {
      axios
        .post("http://127.0.0.1:8000/api/forms/", formData)
        .then((data) => {})
        .catch((error) => {
          console.log(error);
        });
      alert("Form submitted successfully:", formData.data);
      <Link to="/form" />;
    } catch (error) {
      // throw error;
      console.error("Error submitting form:", error);
      alert("Error submitting form. Please try again.");
    }
  };
  return (
    <>
      {/* <Navbar/> */}
      <div className="body-form">
        <div className="wrapper-form">
          <div className="reg-form">
            <h1 className="reg-form-h1">Registration</h1>
            <div className="input-box-form">
              <div className="input-field-form">
                <input
                  type="text"
                  placeholder="Full Name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                />
                <FaUser className="icon-form" />
              </div>
              <div className="input-field-form">
                <input
                  type="email"
                  placeholder="Enter Email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
                <MdEmail className="icon-form" />
              </div>
            </div>

            <div className="input-box-form">
              <div className="input-field-form">
                <input
                  type="text"
                  placeholder="Contact number"
                  name="phone_number"
                  value={formData.phone_number}
                  onChange={handleChange}
                  required
                />
                <BsTelephoneFill className="icon-form" />
              </div>
              <div className="input-field-form">
                <input
                  type="text"
                  placeholder="Collage name"
                  name="college_name"
                  value={formData.college_name}
                  onChange={handleChange}
                  required
                />
                <FaBuildingColumns className="icon-form" />
              </div>
            </div>

            <div className="input-box-form">
              <div className="input-field-form">
                <input
                  type="text"
                  placeholder="Collage year"
                  name="college_year"
                  value={formData.college_year}
                  onChange={handleChange}
                  required
                />
                <MdOutlineNumbers className="icon-form" />
              </div>
              <div className="input-field-form">
                <input
                  type="text"
                  placeholder="Adress"
                  name="address"
                  value={formData.address}
                  onChange={handleChange}
                  required
                />
                <FaBuildingColumns className="icon-form" />
              </div>
              {/* <div className="input-field-form">
                <select
                  id="paymentMethod"
                  name="paymentMethod"
                  className="input"
                  value={formData.name}
                  onChange={handleChange}
                  required>
                  <option value="" disabled selected>
                    Select payment method
                  </option>
                  <option value="creditCard" className="option_value">
                    Credit Card
                  </option>
                  <option value="debitCard" className="option_value">
                    Debit Card
                  </option>
                  <option value="paypal" className="option_value">
                    PayPal
                  </option>
                </select>
              </div> */}
            </div>
            <button type="submit" className="btn-form" onClick={handleSubmit}>
              Register
            </button>
            <br />
            <Link to="/home">
              <button type="button" className="btn-form">
                Back
              </button>
            </Link>
          </div>
        </div>
      </div>
    </>
  );
}
export default Form;
