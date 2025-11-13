import { useState, useEffect } from "react";
import { Modal, Button, Form } from "react-bootstrap";
import "./AddMitra.css";
import  api from "../services/api"; //
import Swal from "sweetalert2";

const MitraAddModal = ({ show, onHide, onSuccess, mitra, mode }) => {
  const [formData, setFormData] = useState({
    nama: "",
    email: "",
    telepon: "",
    alamat: "",
    tglBergabung: "",
  });

  
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  useEffect(() => {
  if (mode === "edit" && mitra) {
    setFormData({
      nama: mitra.nama || "",
      email: mitra.email || "",
      telepon: mitra.telepon || "",
      alamat: mitra.alamat || "",
      tglBergabung: mitra.tglBergabung || "",
      kodeReferral: mitra.kodeReferral || "",
    });
  } else {
    setFormData({
      nama: "",
      email: "",
      telepon: "",
      alamat: "",
      tglBergabung: "",
      kodeReferral: "",
    });
  }
}, [mitra, mode]);


  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async(e) => {
    e.preventDefault();
    setErrorMsg("");

    try {
      if (mode == "edit") {
            await api.updateMitra(formData);
            setTimeout(async () => {
                await Swal.fire({
                    icon: "success",
                    title: "Berhasil!",
                    text: "Data mitra berhasil diperbarui.",
                    showConfirmButton: false,
                    timer: 1500,
                });
                onHide();
                if (onSuccess) onSuccess();
            }, 1000);
        } else {
            await api.createMitra(formData);
            setTimeout(async () => {
                await Swal.fire({
                    icon: "success",
                    title: "Berhasil!",
                    text: "Data mitra berhasil disimpan.",
                    showConfirmButton: false,
                    timer: 1500,
                });
                onHide();
                if (onSuccess) onSuccess();
            }, 1000);
        }
    } catch (err) {
      console.error(err);
      Swal.fire({
        icon: "error",
        title: "Gagal Menyimpan",
        text: "Terjadi kesalahan saat menyimpan data. Coba lagi.",
      });
    } finally {
      setLoading(false);
    }
  };

  const handleDiscard = () => {
  setFormData({
    nama: "",
    email: "",
    telepon: "",
    alamat: "",
    tglBergabung: "",
  });
//   onHide(); // tetap tutup modal
};

  return (
    <Modal
      show={show}
      onHide={onHide}
      centered
      size="lg"
      className="modal-tambah-mitra"
    >
      <Modal.Header closeButton>
        <Modal.Title>{mode === "edit" ? "Edit Mitra" : "Tambah Mitra Baru"}</Modal.Title>
      </Modal.Header>
      <Modal.Body>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3">
            <Form.Label>Nama Mitra</Form.Label>
            <Form.Control
              type="text"
              name="nama"
              placeholder="Masukkan nama mitra"
              value={formData.nama}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Email</Form.Label>
            <Form.Control
              type="email"
              name="email"
              placeholder="Alamat email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Nomor Telepon</Form.Label>
            <Form.Control
              type="text"
              name="telepon"
              placeholder="Nomor telepon aktif"
              value={formData.telepon}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Alamat</Form.Label>
            <Form.Control
              as="textarea"
              rows={2}
              name="alamat"
              placeholder="Alamat perusahaan"
              value={formData.alamat}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <Form.Group className="mb-3">
            <Form.Label>Tanggal Bergabung</Form.Label>
            <Form.Control
              type="date"
              name="tglBergabung"
              value={formData.tglBergabung}
              onChange={handleChange}
              required
            />
          </Form.Group>

          <div className="d-flex justify-content-between mt-4">
            <Button variant="light" onClick={handleDiscard}>
              Discard
            </Button>
            <Button
              variant="primary"
              type="submit"
              disabled={loading}
              className="d-flex align-items-center"
            >
              {loading && (
                <Spinner
                  as="span"
                  animation="border"
                  size="sm"
                  role="status"
                  className="me-2"
                />
              )}
              {loading
                ? mode === "edit"
                    ? "Menyimpan Perubahan..."
                    : "Menyimpan..."
                : mode === "edit"
                ? "Save Changes"
                : "Tambah Mitra"}
            </Button>
          </div>
        </Form>
      </Modal.Body>
    </Modal>
  );
};

export default MitraAddModal;
