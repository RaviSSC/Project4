import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link, useNavigate, useParams } from "react-router-dom";
// import contact from "../../../models/contact";

export default function DeleteContact () {
	const [contact, setContact] = useState({});
    const { _id } = useParams();

    const navigate = useNavigate();

        useEffect(function () {
            async function deleteInput() {
                try {
                    const response = await axios.delete(`/api/contacts/${_id}`);
                    setContact(response.data);
                } catch (error) {
                    console.log("error", error);
                }
            }
            deleteInput();
        }, []);

        async function handleDelete() {
            try {
                await axios.delete(`/api/contacts/${_id}`);
                // navigate("/contacts");
            } catch (error) {
                console.error(error);
            }
        }

        {
        return (
            <div className="container">

    
                <p>
                    <b>Firstname</b>: <a href={`${contact.firstName}`}> {contact.firstName} </a>
                </p>
    
                <p>
                    <b>Lastname</b>: {contact.lastName}
                </p>
                <p>
                    <b>Company</b>: {contact.company}
                </p>
                <p>
                    <b>Role</b>: {contact.role}
                </p>
                <p>
                    <b>email</b>: {contact.email}
                </p>
                <p>
                    <small>
                        <b>ID</b>: {contact._id}
                    </small>
                </p>
                <div className="btn-group">
                    <button onClick={handleDelete} className="btn btn-danger">
                        Delete
                    </button>
                    <Link to="/contacts" className="btn btn-secondary">
                        Cancel{" "}
                    </Link>
                </div>
                <hr />
            </div>
        )};

}