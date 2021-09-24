import Modal from 'react-bootstrap/Modal';

const ModalVaccine = ({ handleClose, show}) => {

  return (
    <div className ={showHideClassName}>
        <Modal.Dialog>
  <Modal.Header closeButton>
    <Modal.Title>Modal title</Modal.Title>
  </Modal.Header>

  <Modal.Body>
    <p>Modal body text goes here.</p>
  </Modal.Body>

  <Modal.Footer>
    <button variant="secondary" onClick={handleClose}>Close</button>
    <button variant="primary">Save changes</button>
  </Modal.Footer>
</Modal.Dialog>
    </div>
  );
};

export default ModalVaccine;