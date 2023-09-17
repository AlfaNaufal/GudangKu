import NavBar from "./Template/Navbar";
import Footer from "./Template/Footer";
import { Riwayats } from "../db";



const Riwayat = () => {

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
                    </tr>
                </thead>
                <tbody>
        {
                Riwayats.map((data) => (
                    <tr>
                        <th>{data.id_pinjam}</th>
                        <th>{data.admin}</th>
                        <th>{data.nama}</th>
                        <th>{data.kelas}</th>
                        <th>{data.notlp}</th>
                        <th>{data.barang}</th>
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

export default Riwayat;