import NavBar from "./Template/Navbar";
import Footer from "./Template/Footer";
import { pinjam } from "./database/db";


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
                        <th>ID Barang</th>
                        <th>Jenis Barang</th>
                        <th>Batas waktu Pinjam</th>
                    </tr>
                </thead>
                <tbody>
        {
                pinjam.map((data) => (
                    <tr>
                        <th>{data.id_pinjam}</th>
                        <th>{data.admin}</th>
                        <th>{data.nama}</th>
                        <th>{data.kelas}</th>
                        <th>{data.no_tlp}</th>
                        <th>{data.id_barang}</th>
                        <th>{data.jenis}</th>
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