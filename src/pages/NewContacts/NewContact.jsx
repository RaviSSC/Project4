import React from "react";
import { useForm } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import { getUser } from '../../utilities/users-service';


export default function NewContact() {
  const [user, setUser] = useState(getUser());
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    firstName: user.firstname,
    lastName: user.lastname,
    email: user.email,
  });

  function handleChange(e) {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  }

  function handleSubmit(e) {
    e.preventDefault();
  }
  function handleCancel() {
    navigate('../App/App');
  }

  return (
    <div className="container" style={{ maxWidth: "400px" }}>
      <h1>Create new contact</h1>
      <hr />
      <form onSubmit={handleSubmit}>
        <div className="contact-form">
          <label>First Name</label>
          <input
            name="firstName"
            type="text"
            required
            value={formData.firstName}
            onChange={handleChange}
          />
        </div>




        <div className="contact-form">
          <label>Last Name</label>
          <input
            name="lastname"
            type="text"
            required
            value={formData.lastname}
            onChange={handleChange}
          />
        </div>

        <div className="contact-form">
          <label>Company</label>
          <input
            name="company"
            type="text"
            required
            value={formData.company}
            onChange={handleChange}
          />
        </div>
        <div className="contact-form">
          <label>role</label>
          <input
            name="role"
            type="text"
            required
            value={formData.role}
            onChange={handleChange}
          />
        </div>
        <div className="contact-form">
          <label>email</label>
          <input
            name="email"
            type="text"
            required
            value={formData.email}
            onChange={handleChange}
          />
        </div>






        <div className="btn-group">
          <input type="submit" value="Submit" className="btn btn-primary" />
          <button
            type="button"
            onClick={handleCancel}
            className="btn btn-secondary"
          >
            Cancel
          </button>
        </div>
      </form>
    </div>
  );
}
