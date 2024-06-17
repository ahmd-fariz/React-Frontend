import React, { useState, useEffect } from "react";
import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";

const EditProduk = () => {
  const [name, setName] = useState("");
  const [harga, setHarga] = useState("");
  const [deskripsi, setDeskripsi] = useState("");
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getProdukById();
  }, []);

  const updateProduk = async (e) => {
    e.preventDefault();
    try {
      await axios.patch(`http://localhost:5000/produks/${id}`, {
        name,
        harga,
        deskripsi,
      });
      navigate("/produks");
    } catch (error) {
      console.log(error);
    }
  };

  const getProdukById = async () => {
    const response = await axios.get(`http://localhost:5000/produks/${id}`);
    setName(response.data.name);
    setHarga(response.data.harga);
    setDeskripsi(response.data.deskripsi);
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <form onSubmit={updateProduk}>
          <div className="field">
            <label className="label">Name</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Name"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Harga</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={harga}
                onChange={(e) => setHarga(e.target.value)}
                placeholder="Harga"
              />
            </div>
          </div>
          <div className="field">
            <label className="label">Deskripsi</label>
            <div className="control">
              <input
                type="text"
                className="input"
                value={deskripsi}
                onChange={(e) => setDeskripsi(e.target.value)}
                placeholder="Deskripsi"
              />
            </div>
          </div>
          <div className="field">
            <button type="submit" className="button is-success">
              Save
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default EditProduk;
