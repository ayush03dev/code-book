import React from "react";
import { Button, Modal } from "react-bootstrap";
import { connect } from "react-redux";
import { closeLink } from "../../actions/modalActions";

function LinkModal({ closeLink, linkModal, link }) {

    const handleClose = () => {
        closeLink();
    }

    const handleClick = (link) => {
        navigator.clipboard.writeText(`http://localhost:3000/snippet/${link}`);
        closeLink();
    }

    return (
        <>
            <Modal show={linkModal} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Snippet Saved</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <a href={`/snippet/${link}`}>http://localhost:3000/snippet/{link}</a>
                </Modal.Body>
                <Modal.Footer>
                    <Button onClick={() => navigator.clipboard.writeText(`http://localhost:3000/snippet/${link}`)}>Copy to Clipboard</Button>
                </Modal.Footer>
            </Modal>
        </>);
};

const mapStateToProps = (state) => ({
    linkModal: state.modal.linkModal,
    link: state.modal.link
});

export default connect(mapStateToProps, { closeLink })(LinkModal);

