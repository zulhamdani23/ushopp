import "./DaftarMitra.css"
import { useState } from "react";
import { Table, Button, Form, InputGroup, Pagination } from "react-bootstrap";


const DaftarMitra = () => {
  const [search, setSearch] = useState("");

  const mitraList = [
    { nama: "KUMON", email: "kumon@mail.com", telepon: "0912918238", alamat: "Bekasi", tgl: "10 Agustus 2019" },
    { nama: "SEMPOA", email: "sempoa@mail.com", telepon: "0919293812", alamat: "Jakarta", tgl: "10 Juni 2019" },
    { nama: "JARIMATIKA", email: "jarimatika@mail.com", telepon: "0818273125", alamat: "Depok", tgl: "10 Januari 2019" },
    { nama: "APIQ", email: "apiq@mail.com", telepon: "0213828372", alamat: "Bogor", tgl: "10 Maret 2019" },
  ];

  const filtered = mitraList.filter((m) =>
    m.nama.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="daftar-mitra-container">
      <div className="header-mitra">
        <div>
          <h5 className="title">Mitra</h5>
          <p className="subtitle">Daftar mitra yang bergabung</p>
        </div>
        <button class="btn-purple">
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
            {filtered.map((m, i) => (
              <tr key={i}>
                <td>{m.nama}</td>
                <td>{m.email}</td>
                <td>{m.telepon}</td>
                <td>{m.alamat}</td>
                <td>{m.tgl}</td>
                <td>
                  <Button size="sm" variant="info" className="btn-edit me-2">
                    Edit
                  </Button>
                  <Button size="sm" variant="danger" className="btn-hapus">
                    Hapus
                  </Button>
                </td>
              </tr>
            ))}
          </tbody>
        </Table>
      </div>

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
