import NavBar from "./Template/Navbar";
import Footer from "./Template/Footer";
import { riwayat } from "./database/db";


const DataPinjam = () => {

    return (
        <>

        <NavBar />
        <div className="container">
            <h1 className="py-3">Data Peminjaman</h1>

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
                        <th>waktu Kembali</th>
                    </tr>
                </thead>
                <tbody>
        {
                riwayat.map((data) => (
                    <tr>
                        <th>{data.id_pinjam}</th>
                        <th>{data.admin}</th>
                        <th>{data.nama}</th>
                        <th>{data.kelas}</th>
                        <th>{data.no_tlp}</th>
                        <th>{data.id_barang}</th>
                        <th>{data.jenis}</th>
                        <th>{data.durasi}</th>
                        <th>{data.kembali}</th>
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