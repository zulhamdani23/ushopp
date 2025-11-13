import "./DaftarMitra.css";
import { useState, useEffect } from "react";
import { Table, Button, Form, InputGroup, Pagination } from "react-bootstrap";
import  api from "../services/api"; // pastikan alias @ sudah diset, atau pakai ../api/mitraApi
import MitraAddModal from "./AddMitra";

const DaftarMitra = () => {
  const [search, setSearch] = useState("");
  const [mitraList, setMitraList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [showModal, setShowModal] = useState(false);
  const [mode, setMode] = useState("add");
  const [selectedMitra, setSelectedMitra] = useState(null);

  const handleAdd = () => {
    setSelectedMitra(null);
    setMode("add");
    setShowModal(true);
  };

  const handleEdit = (mitra) => {
    setSelectedMitra(mitra);
    setMode("edit");
    setShowModal(true);
  };

  const loadMitra = async () => {
    const data = await api.getMitraList();
    setMitraList(data);
  };

  // fetch data pas awal render
  useEffect(() => {
    const fetchData = async () => {
      const data = await api.getMitraList();
      // console.log({data})
      // setMitraList(data);
      loadMitra();
      setLoading(false);
    };
    fetchData();
  }, []);

  const filtered = mitraList.filter((m) =>
    m.nama?.toLowerCase().includes(search.toLowerCase())
  );

  if (loading) {
    return <p style={{ textAlign: "center" }}>Loading data mitra...</p>;
  }


  return (
    <div className="daftar-mitra-container">
      <div className="header-mitra">
        <div>
          <h5 className="title">Mitra</h5>
          <p className="subtitle">Daftar mitra yang bergabung</p>
        </div>
        {/* <button className="btn-purple" onClick={() => setShowModal(true)}> */}
        <button className="btn-purple" onClick={handleAdd}>
          Tambah Mitra Baru
        </button>
      </div>

      <InputGroup className="search-box">
        <Form.Control
          placeholder="Cari"
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </InputGroup>

      <div className="table-container">
        <Table bordered hover responsive>
          <thead>
            <tr>
              <th>NAMA MITRA</th>
              <th>EMAIL</th>
              <th>NO TELEPON</th>
              <th>ALAMAT</th>
              <th>TANGGAL BERGABUNG</th>
              <th>AKSI</th>
            </tr>
          </thead>
          <tbody>
            {filtered.length === 0 ? (
              <tr>
                <td colSpan="6" style={{ textAlign: "center" }}>
                  Tidak ada data ditemukan
                </td>
              </tr>
            ) : (
              filtered.map((m, i) => (
                <tr key={m.id}>
                  <td>{m.nama}</td>
                  <td>{m.email}</td>
                  <td>{m.telepon}</td>
                  <td>{m.alamat}</td>
                  <td>{m.tgl}</td>
                  <td>
                    <Button size="sm" variant="info" className="btn-edit me-2"  onClick={() => handleEdit(m)}>
                      Edit
                    </Button>
                    <Button size="sm" variant="danger" className="btn-hapus">
                      Hapus
                    </Button>
                  </td>
                </tr>
              ))
            )}
          </tbody>
        </Table>
      </div>

      {/* <MitraAddModal show={showModal} onHide={() => setShowModal(false)} onSuccess={loadMitra}/>
      <MitraFormModal show={showModal} onHide={() => setShowModal(false)} mitra={selectedMitra} mode="edit" /> */}
        <MitraAddModal
        show={showModal}
        onHide={() => setShowModal(false)}
        mitra={selectedMitra}
        mode={mode}
        // refreshData={fetchMitra} // biar abis edit/tambah bisa reload data
      />

      <div className="pagination-footer">
        <span>Showing 1 to 7 of 50 entries</span>
        <Pagination size="sm" className="mb-0">
          <Pagination.Prev />
          <Pagination.Item active>1</Pagination.Item>
          <Pagination.Item>2</Pagination.Item>
          <Pagination.Item>3</Pagination.Item>
          <Pagination.Item>4</Pagination.Item>
          <Pagination.Item>5</Pagination.Item>
          <Pagination.Next />
        </Pagination>
      </div>
    </div>
  );
};

export default DaftarMitra;
