import React, { useState } from "react";
import "../css/style.css";
import { UserIcon } from "@heroicons/react/24/solid";
import Footer from "../components/Footer";
import { Link } from "react-router-dom";

import { GiHamburgerMenu } from "react-icons/gi";
import { AiFillCloseCircle } from "react-icons/ai";
import axios from "axios";

function CreateUser() {
  const [toggleMenu, setToggleMenu] = useState(false);

  const [form, setForm] = useState({
    name: "",
    no: "",
    email: "",
    address: "",
    role: "admin",
    username: "",
    password: "",
    confirmPassword: "",
  });

  const handleChange = (event) => {
    const { name, value } = event.target;
    setForm((prevForm) => ({
      ...prevForm,
      [name]: value,
    }));
  };

  const handleSubmit = async (event) => {
    console.log(form);
    event.preventDefault();
    const textRegex = /^[a-zA-Z\s]+$/;
    const noRegex = /^[0-9]{10}$/;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const pwRegex =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()_+}{"?><,./;'[\]\\|=-]).{8,}$/;

    // Perform validation on form data
    if (form.name === "") {
      alert("Name is required");
      document.querySelector('input[name="name"]').focus();
      return;
    } else if (!textRegex.test(form.name)) {
      alert("Name should contain letters");
      document.querySelector('input[name="name"]').focus();
      return;
    }
    if (form.no === "") {
      alert("Contact No is required");
      document.querySelector('input[name="no"]').focus();
      return;
    } else if (!noRegex.test(form.no)) {
      alert("Contact No should be 10 digits");
      document.querySelector('input[name="no"]').focus();
      return;
    }
    if (form.email === "") {
      alert("Email is required");
      document.querySelector('input[name="email"]').focus();
      return;
    } else if (!emailRegex.test(form.email)) {
      alert("Email is not valid");
      document.querySelector('input[name="email"]').focus();
      return;
    }
    if (form.address === "") {
      alert("Address is required");
      document.querySelector('input[name="address"]').focus();
      return;
    }
    if (form.username === "") {
      alert("Username is required");
      document.querySelector('input[name="username"]').focus();
      return;
    }
    if (form.password === "") {
      alert("Password is required");
      document.querySelector('input[name="password"]').focus();
      return;
    } else if (form.password.length < 6) {
      alert("Password should be more than 6 characters");
      document.querySelector('input[name="password"]').focus();
      return;
    } else if (!pwRegex.test(form.password)) {
      alert("Password is not valid");
      document.querySelector('input[name="password"]').focus();
      return;
    }
    if (form.confirmPassword === "") {
      alert("Confirm Password is required");
      document.querySelector('input[name="confirmPassword"]').focus();
      return;
    } else if (form.password !== form.confirmPassword) {
      alert("Password does not match");
      document.querySelector('input[name="confirmPassword"]').focus();
      return;
    }

    const payload = {
      name: form.name,
      contactNumber: form.no,
      email: form.email,
      role: form.role,
      username: form.username,
      password: form.password,
      address: form.address,
    };

    // Send a post request to the signup endpoint.
    try {
      const response = await axios.post(
        "http://localhost:3000/api/auth/signup",
        payload
      );

      // If the request is successful, display success message and clear the form
      if (response.data) {
        console.log("User created successfully");
        alert("Created User Successfully");

        setForm({
          name: "",
          no: "",
          email: "",
          address: "",
          role: "admin",
          username: "",
          password: "",
          confirmPassword: "",
        });
      }
    } catch (error) {
      console.error("Error occurred while creating user:", error);
      alert("Failed to create user. Please try again.");
    }
  };
  return (
    <div className="body">
      <header>
        <div class="navbar">
          <div class="logo">
            <Link to="/">
              CMC<font color="white">Dumpster</font>
            </Link>
          </div>
          <ul class="links">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="/create-user">Create User</Link>
            </li>
            <li>
              <Link to="/add-article">Add Article</Link>
            </li>
            <li>
              <Link to="/add-garbage-spot">Add Garbage Spot</Link>
            </li>
          </ul>

          <Link className="userprofile-largescreen" to="/user-profile">
            <UserIcon
              id="headerUserIcon"
              color="white"
              width="1.2rem"
              style={{ marginLeft: "10" }}
            />
          </Link>
          <div class="app__navbar-smallscreen">
            <Link className="userprofile-smallscreen" to="/user-profile">
              <UserIcon
                id="headerUserIcon"
                color="white"
                width="1.2rem"
                style={{ marginLeft: "10" }}
              />
            </Link>
            <GiHamburgerMenu
              color="#fff"
              fontsize={27}
              onClick={() => setToggleMenu(true)}
            />
            {toggleMenu && (
              <div className="app__navbar-smallscreen_overlay flex__center slide-bottom">
                <AiFillCloseCircle
                  fromSzie={27}
                  className="overlay__close"
                  onClick={() => setToggleMenu(false)}
                />
                <ul class="smallscreen-links">
                  <li>
                    <Link to="/">Home</Link>
                  </li>
                  <li>
                    <Link to="/create-user">Create User</Link>
                  </li>
                  <li>
                    <Link to="/add-article">Add Article</Link>
                  </li>
                  <li>
                    <Link to="/add-garbage-spot">Add Garbage Spot</Link>
                  </li>
                </ul>
              </div>
            )}
          </div>
        </div>
      </header>
      <div class="createUser">
        <form
          action="#"
          name="createForm"
          id="createForm"
          onSubmit={handleSubmit}
        >
          <h1>Create Account</h1>
          <input
            type="text"
            name="name"
            placeholder="Name"
            value={form.name}
            onChange={handleChange}
          />
          <input
            type="text"
            name="no"
            placeholder="Contact No"
            value={form.no}
            onChange={handleChange}
          />
          <input
            type="text"
            name="email"
            placeholder="Email"
            value={form.email}
            onChange={handleChange}
          />
          <input
            type="text"
            name="address"
            placeholder="Address"
            value={form.address}
            onChange={handleChange}
          />
          <select
            name="role"
            value={form.role}
            onChange={handleChange}
            style={{
              width: "25vw",
              height: "3.5vw",
              borderRadius: "1vw",
              backgroundColor: "rgba(181, 175, 175, 0.4)",
              color: "white",
              padding: "0.5vw",
              margin: "1vw",
              fontSize: "1.2vw",
              appearance: "button",
            }}
          >
            <option value="admin" id="btnAdmin">
              Admin
            </option>
            <option value="gcap" id="btnGCap">
              GCap
            </option>
            <option value="gtf" id="btnGTF">
              GTF
            </option>
          </select>
          <input
            type="text"
            name="username"
            placeholder="Username"
            value={form.username}
            onChange={handleChange}
          />
          <input
            type="password"
            name="password"
            placeholder="Password"
            value={form.password}
            onChange={handleChange}
          />
          <input
            type="password"
            name="confirmPassword"
            placeholder="Confirm Password"
            value={form.confirmPassword}
            onChange={handleChange}
          />
          <button class="btnCreateUser" type="submit" name="create" id="create">
            CREATE
          </button>
        </form>
      </div>
      <Footer />
    </div>
  );
}

export default CreateUser;
