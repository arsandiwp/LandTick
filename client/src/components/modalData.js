import { Modal, ModalBody } from "react-bootstrap";
import { Link } from "react-router-dom";

const DataTiket = ({ show, showData }) => {
  const handleClose = () => showData(false);
  return (
    <Modal show={show} onHide={handleClose}>
      <ModalBody>
        <p className="text-center">
          Tiket anda berhasil di tambahkan silahkan segera melakukan pembayaran{" "}
          <Link to="/tiketsaya" style={{textDecoration:"none"}}>
            <b>disini</b>
          </Link>
        </p>
      </ModalBody>
    </Modal>
  );
};

export default DataTiket;
