import NavBar from "./Template/Navbar";
import Footer from "./Template/Footer";

const Pinjam = () => {

    return(
    <>
    <NavBar />
    <container className="mx-auto d-flex justify-content-center align-items-center w-100">

        <div className="card" style={{ width: '18rem' }}>
        <img src="Projector.png" className="card-img-top" alt="" />
        <h3>Proyektor 1</h3>
        </div>

        <div className="containe w-50">

        <h1>Proyektor 1</h1>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Eius, veritatis necessitatibus itaque iusto odit et adipisci alias, non vitae atque impedit praesentium nostrum consequatur molestias?</p>

        <form action="POST">

            <div className="mb-3">
                <label className="form-label">Nama Peminjam :<input type="text" placeholder="Masukkan nama peminjam" className="form-control" /></label>
            </div>
            <div className="mb-3">
                <label className="form-label">Kelas :<input type="text" placeholder="Masukkan kelas peminjam" className="form-control" /></label>
            </div>

        </form>

        
        </div>

    </container>
    
    <Footer />
    </>
    )
}

export default Pinjam