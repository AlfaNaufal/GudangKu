import NavBar from "./Template/Navbar";
import Footer from "./Template/Footer";
import { DataPinjams } from "../db";



const DataPinjam = () => {

    return (
        <>

        <NavBar />
        <div className="container">
            <h1>Data Peminjaman</h1>

            <table className="table">
                <thead>
                    <tr className="table-primary">
                        <th >ID Peminjaman</th>
                        <th>Admin</th>
                        <th>Nama Peminjam</th>
                        <th>Kelas</th>
                        <th>No. Tlp</th>
                        <th>Nama Barang</th>
                        <th>Batas waktu Pinjam</th>
                    </tr>
                </thead>
                <tbody>
        {
                DataPinjams.map((data) => (
                    <tr>
                        <th>{data.id_pinjam}</th>
                        <th>{data.admin}</th>
                        <th>{data.nama}</th>
                        <th>{data.kelas}</th>
                        <th>{data.notlp}</th>
                        <th>{data.barang}</th>
                        <th>{data.durasi}</th>
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

export default DataPinjam;