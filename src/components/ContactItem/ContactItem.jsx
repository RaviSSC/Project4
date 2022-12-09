import React, { useEffect, useRef, useState , Component} from "react";
import Container from "react-bootstrap/Container";
import { Link } from "react-router-dom";
import axios from "axios";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
// import Card from "react-bootstrap/Card";
// import ChatBox from "../ChatBox/ChatBox";

// export default function contact({ user }) {
  // get all chats

  //set all users
//   useEffect(() => {
//     const getAllContact = async () => {
//       try {
//         let { data } = await axios.get(`api/users`);
//         // do not include logged in user
//         data = data.filter((users) => users._id != user._id);
//         // do not include users with already active chats
//         setAllUsers(data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     getAllUsers();
//   }, []);


export default function ContactList() {
	const [contacts, setContacts] = useState([]);

	useEffect(function () {
		async function getContacts() {
			try {
				const response = await axios.get("/api/contacts");
				setContacts(response.data);
			} catch (error) {
				console.log("error", error);
			}
		}
		getContacts();
	}, []);

  return (
    <div className="container">
      <h2>
        Contacts - List View
        <p>
          <Link to="/contacts/new" className="btn btn-primary">
            Contact Lists
          </Link>
        </p>
      </h2>
      <hr />

      {contacts.map((contact) => {
        return (
          <div
            className="card mb-3"
            style={{ maxWidth: "800px" }}
            key={contact._id}
          >
            <div className="row g-0">
              <div className="col-md-4 pl-5 ">
                {/* <img src="..." className="img-fluid rounded-start" alt="..."> */}
                <h5>Logo</h5>
              </div>
              <div className="col-md-8">
                <div class="card-header">
                  <h5 className="card-title">
                    <Link to={`/contact/${contact._id}`} className="link-line">
                      {contact.firstName}
                    </Link>
                  </h5>
                </div>
                <div className="card-body ">
                  <h6 className="d-flex align-items-center">
                    <i className="bi bi-telephone-fill text-success"></i>
                    <a
                      className="card-subtitle m-2"
                      href={`tel:+${contact.lastName}`}
                    >
                      {contact.phone}
                    </a>
                  </h6>
                  <p className="card-text limit-char">{contact.company}</p>
                  <p className="card-text  d-flex align-items-center">
                    <i className="bi bi-geo-alt-fill text-warning"></i>
                    <small className="text-muted one-liner">
                      {contact.role}
                    </small>
                  </p>

                  {/* <div class="card-footer">
                    <Link
                      to={`/cruds/${crud._id}/edit`}
                      className="btn btn-primary"
                    >
                      Edit
                    </Link>
                    <span>
                      <small>
                        <Link to={`/cruds/${crud._id}`} className="link-line">
                          Read More...
                        </Link>
                      </small>
                    </span>
                  </div> */}
                </div>
              </div>
            </div>
          </div>
        );
      })}
    </div>
  );
}

  // return (
  //   <Container>
  //     <Row>
  //       {this.contact ((contact, idx) => (
  //         <>
  //           <div>{contact.firstname}</div>
  //           <div>{contact.lastname}</div>
  //         </>
  //       ))}
  //     </Row>
  //   </Container>
  // );
