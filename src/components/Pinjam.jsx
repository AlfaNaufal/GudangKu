import NavBar from "./Template/Navbar";
import Footer from "./Template/Footer";
import { useEffect, useState } from "react";
import { datas } from './database/db' 
import { useParams } from "react-router-dom";

const Pinjam = () => {
    const {id} = useParams()
    return(
    <>
    <NavBar />
    <container className="mx-auto d-flex justify-content-center align-items-center w-100">

        {/* <div className="card" style={{ width: '18rem' }}>
        <img src="Projector.png" className="card-img-top" alt="" />
        <h3>Proyektor 1</h3>
        </div> */}

        <div className="container mt-3 w-100 ">

            <div className="w-50 mx-auto">
                <h1 className="mb-2">Form peminjaman</h1>
                <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, veritatis necessitatibus itaque iusto odit et adipisci alias, non vitae atque impedit praesentium nostrum consequatur molestias?</p>
            </div>

            <form action="POST" className="mx-auto mb-5 w-50">

                <div className="mb-3">
                    <label className="form-label w-100">Nama Peminjam <input type="text" placeholder="Masukkan nama peminjam" className="form-control w-100" /></label>
                </div>
                <div className="mb-3">
                    <label className="form-label w-100">Kelas <input type="text" placeholder="Masukkan kelas peminjam" className="form-control w-100" /></label>
                </div>
                <div className="mb-3">
                    <label className="form-label w-100">No. Tlp <input type="number" placeholder="Masukkan No. Tlp peminjam" className="form-control w-100" /></label>
                </div>
                <div className="mb-3">
                    <label className="form-label w-100">ID Barang <input type="text" readOnly value={id} placeholder="ID barang" className="form-control w-100" /></label>
                </div>
                <div className="mb-3">
                    <label className="form-label w-100">Nama Barang <input type="text" placeholder="Masukkan nama barang" className="form-control w-100" /></label>
                </div>
                <div className="mb-3">
                    <label className="form-label w-100">Durasi <input type="time" placeholder="Masukkan durasi peminjaman" className="form-control w-100" /></label>
                </div>
                    <button className="btn btn-primary">Pinjam</button>
            </form>

        
        </div>

    </container>
    
    <Footer />
    </>
    )
}

export default Pinjam