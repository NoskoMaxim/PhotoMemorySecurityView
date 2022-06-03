import {Button, Card, CardGroup, CardImg, Form, Modal} from "react-bootstrap";
import {BsChat} from "react-icons/bs";

export default function Photo(props) {
    return (
        <Modal
            show={props.show}
            onHide={props.onHide}
            size="lg"
            aria-labelledby="contained-modal-title-vcenter"
            centered
        >
            <CardGroup>
                <Card className={"border-0"}><CardImg variant="top" src={props.publication.img}/></Card>
                <Card style={{width: '1rem'}}>
                    <Card.Header>{props.publication.nickname}</Card.Header>
                    <Card.Body className="pt-1 pb-1">
                        <Card.Text
                            className={"mb-1 "}>{props.publication.nickname}: {props.publication.text} </Card.Text>
                        <div className={"text-center"}>
                            <BsChat className={"mb-1"}/>
                        </div>
                    </Card.Body>
                    <Card.Footer className={"pt-0 pb-1"} style={{border: "white", background: "white"}}>
                        <Form>
                            <Form.Group className="mb-0 d-flex" controlId="form.formControlAddComment">
                                <Form.Control
                                    className={"me-2 ms-1"}
                                    style={{border: "white"}}
                                    type="comment"
                                    placeholder="Add comment"
                                    autoFocus
                                />
                                <Button variant="outline-secondary" className={"me-1"}>Add</Button>
                            </Form.Group>
                        </Form>
                    </Card.Footer>
                    <Card.Footer className={"text-muted text-end pt-1 pb-1"}>{props.publication.dada}</Card.Footer>
                </Card>
            </CardGroup>
        </Modal>
    );
}