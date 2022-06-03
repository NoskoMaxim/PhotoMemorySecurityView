import {Card} from "react-bootstrap";
import {BsChat} from "react-icons/bs";
import img from "../1.JPG"
import {useState} from "react";
import Photo from "./Photo";

export default function PhotoCardFeed() {
    const [modalShow, setModalShow] = useState(false);

    const handleClose = () => setModalShow(false);
    const handleShow = () => setModalShow(true);

    let publication = {
        text: "Some quick example text to build on the card title and make up the bulk of the card's content.",
        nickname: "Multiplication",
        img: img,
        dada: "03.06.2022"
    };

    return (
        <>
            <Card style={{width: '25rem'}} className={"mb-3"} >
                <Card.Header className="pt-1 pb-1">{publication.nickname}</Card.Header>
                <Card.Img variant="top" onClick={handleShow} src={publication.img} style={{cursor: "pointer"}}/>
                <Card.Body className="pt-1 pb-1">
                    <Card.Text className={"mb-1 "}>{publication.nickname}: {publication.text}</Card.Text>
                    <div className={"text-center"}>
                        <BsChat className={"mb-1"} style={{cursor: "pointer"}} onClick={handleShow}/>
                    </div>
                </Card.Body>
                <Card.Footer className={"text-muted text-end pt-1 pb-1"}>{publication.dada}</Card.Footer>
            </Card>

            <Photo show={modalShow} onHide={() => handleClose()} publication={publication}/>
        </>
    )
}