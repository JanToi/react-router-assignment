import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import Accordion from "react-bootstrap/Accordion";


const Blogs = () => {
    return (
    <div>
    <h1 className="blogheader">Blog Articles</h1>
        <Card className="upperblog">
            <Card.Header>Blogs</Card.Header>
            <Card.Body>Blogs and Dogs</Card.Body>
        </Card>
        <Accordion className="articlelist">
            <Accordion.Item eventKey="0">
                <Accordion.Header>First item</Accordion.Header>
                <Accordion.Body>
                <Card>
                    <Card.Header>Title of the article</Card.Header>
                    <Card.Body>Article preview</Card.Body>
                </Card>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Accordion className="articlelist">
            <Accordion.Item eventKey="1">
                <Accordion.Header>Second item</Accordion.Header>
                <Accordion.Body>
                    <Card>
                        <Card.Header>Title of article 2</Card.Header>
                        <Card.Body>Preview of article 2</Card.Body>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
        <Accordion className="articlelist">
            <Accordion.Item eventKey="2">
                <Accordion.Header>Third item</Accordion.Header>
                <Accordion.Body>
                    <Card>
                        <Card.Header>Final article title</Card.Header>
                        <Card.Body>Preview of final article</Card.Body>
                    </Card>
                </Accordion.Body>
            </Accordion.Item>
        </Accordion>
  </div>
    
    );
  };
 
  export default Blogs;