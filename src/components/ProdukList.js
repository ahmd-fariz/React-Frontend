import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const ProdukList = () => {
  const [produks, setProduk] = useState([]);

  useEffect(() => {
    getProduks();
  }, []);

  const getProduks = async () => {
    const response = await axios.get("http://localhost:5000/produks");
    setProduk(response.data);
  };

  const deleteProduk = async (id) => {
    try {
      await axios.delete(`http://localhost:5000/produks/${id}`);
      getProduks();
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="columns mt-5 is-centered">
      <div className="column is-half">
        <Link to={`add`} className="button is-success">
        Add New
      </Link>
        <table className="table is-striped is-fullwidth">
          <thead>
            <tr>
              <th>No</th>
              <th>Name</th>
              <th>Harga</th>
              <th>Deskripsi Produk</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {produks.map((produk, index) => (
              <tr key={produk.id}>
                <td>{index + 1}</td>
                <td>{produk.name}</td>
                <td>{produk.harga}</td>
                <td>{produk.deskripsi}</td>
                <td>
                  <Link
                    to={`edit/${produk.id}`}
                    className="button is-small is-info mr-2"
                  >
                    Edit
                  </Link>
                  <button
                    onClick={() => deleteProduk(produk.id)}
                    className="button is-small is-danger"
                  >
                    Delete
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ProdukList;
