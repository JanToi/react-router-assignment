import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";


const Contact = () => {
    return (
      <div>
      <h1 className="contactH">Contact Me</h1>
        <Card className="contactCard">
          <Card.Header>Contact Me</Card.Header>
          <Card.Body>Choose your favorite hatemail below:</Card.Body>
        </Card>
        <Card className="contactCard">
          <Card.Header>General Venting</Card.Header>
          <Card.Body>For venting your regular frustrations, please email me at:</Card.Body>
          <div>
          <Button className="contactButton" variant="danger">general@venting.com</Button>
          </div>
        </Card>
        <Card className="contactCard">
          <Card.Header>Feedback</Card.Header>
          <Card.Body>If you want to leave feedback with your hate, send it here:</Card.Body>
          <div>
            <Button className="contactButton" variant="info">feedback@venting.com</Button>
          </div>
        </Card>
        <Card className="contactCard">
          <Card.Header>Need help?</Card.Header>
          <Card.Body>So do I, send me an email so we can fix this mess together:</Card.Body>
          <div>
            <Button className="contactButton" variant="success">godhelpme@react.com</Button>
          </div>
        </Card>

      </div>
    );

  };
 
  export default Contact;