import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import Alert from "react-bootstrap/Alert";
import React, { useState } from "react";


const Home = () => {
    const [email, setEmail] = useState("")
    const [showSuccess, setShowSuccess] = useState({ message: "", type: "success" })

    const handleSubscribe = (e) => {
        e.preventDefault();
        if (email === "") {
            setShowSuccess({ message: "Empty email is not allowed... Actually it doesn't even need an email, just type anything at all come on", type: "danger" })
        }
        else {
            setShowSuccess({ message: "Thank you for subscribing!", type: "success"})
            setEmail("")
        }
    };


    function handleInput(event) {
        setEmail(event.target.value)
    }
   
    return (
        <div>
            <h1>Learning React</h1>
            <Card>
                <Card.Body>What am I even doing?</Card.Body>
            </Card>
            <Card>
                <Card.Body>
            <Form onSubmit={handleSubscribe}>
                <div>
                <label>
                    Subscribe to the newsletter to surely receive incredible updates:                  
                </label>
                </div>
                <input className="emailfield" type="text" placeholder="example@example.com" value={email} onChange={handleInput}/>
                <div> 
                <Button className="button1" type="button" onClick={handleSubscribe}>Subscribe</Button>
                </div>
                
            </Form>
            {showSuccess.message && (
                <Alert variant={showSuccess.type}>{showSuccess.message}</Alert>
            )}
                       
            </Card.Body>
            </Card>

        </div>
    );
  };
 
  export default Home;