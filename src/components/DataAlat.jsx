import NavBar from "./Template/Navbar";
import Footer from "./Template/Footer";
import { datas } from "./database/db";


const DataAlat = () =>{
    return (
        <>
        <NavBar />
        <div className="container">
            <h1 className="mt-3">Data Alat &Barang</h1>


            <div className="mb-2 mt-2 d-md-flex justify-content-md-end">
                <a href="/tambahData"><button type="button" className="btn btn-success">Tambah Data</button></a>
            </div>
            <table className="table">
                <thead>
                    <tr className="table-primary">
                        <th>No</th>
                        <th>ID Jenis</th>
                        <th >ID Barang</th>
                        <th>Nama</th>
                        <th>Stok</th>
                        <th>Edit</th>
                        <th>Hapus</th>
                    </tr>
                </thead>
                <tbody>
        {
                datas.map((data, index) => (
                    <tr key={index}>
                        <th>{index + 1}</th>
                        <th>{data.id_jenis}</th>
                        <th>{data.id}</th>
                        <th>{data.nama}</th>
                        <th>{data.stok}</th>
                        <th><a href="/editData"><button type="button" className="btn btn-primary">Edit</button></a></th>
                        <th><button type="button" className="btn btn-danger">Hapus</button></th>
                    </tr>
        ))
        }
                </tbody>
            </table>
        </div>
        <Footer />
        </>
    )
}

export default DataAlat;