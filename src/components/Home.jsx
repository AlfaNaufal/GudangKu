import NavBar from "./Template/Navbar";
import Footer from "./Template/Footer";
import datas from "../db";

const Home = () => {
  // const datas = [
  //   {
  //     alat: "Proyektor",
  //     gambar: "proyektor.png"
  //   },
  //   {
  //     alat: "Pensil",
  //     gambar: "pensil.png"
  //   }
  // ]
  return (
    // <div className="w-full bg-dark">
      <>
      <NavBar />

      <div className="container">
      <h1 className="">Peminjaman Barang</h1>

        <h3>Proyektor</h3>
        <div className="row">
          {
            datas.proyektor.map((proyektor) => (
              <div className="col-md-4 mb-4">
                      <div className="card" style={{ width: '18rem' }}>
                        <img src={proyektor.gambar} className="card-img-top" alt="" />
                        <div className="card-body text-center">
                          <h5 className="card-title">{`Proyektor ${proyektor.id}`}</h5>
                          <a href="/pinjam" className="btn btn-primary">
                            Cek Ketersediaan
                          </a>
                        </div>
                      </div>
                    </div>
            ))

          }
        </div>
      </div>

      <div className="container">
        <h3>Speaker</h3>
        <div className="row">
          {
            datas.speaker.map((suara) => (
              <div className="col-md-4 mb-4">
                      <div className="card" style={{ width: '18rem' }}>
                        <img src={suara.gambar} className="card-img-top" alt="" />
                        <div className="card-body text-center">
                          <h5 className="card-title">{`Speaker ${suara.id}`}</h5>
                          <a href="/pinjam" className="btn btn-primary">
                            Cek Ketersediaan
                          </a>
                        </div>
                      </div>
                    </div>
            ))

          }
        </div>
      </div>

      <div className="container">
        <h3>Alat Kebersihan</h3>
        <div className="row">
          {
            datas.bersih.map((bersih) => (
              <div className="col-md-4 mb-4">
                      <div className="card" style={{ width: '18rem' }}>
                        <img src={bersih.gambar} className="card-img-top" alt="" />
                        <div className="card-body text-center">
                          <h5 className="card-title">{bersih.nama}</h5>
                          <a href="/pinjam" className="btn btn-primary">
                            Cek Ketersediaan
                          </a>
                        </div>
                      </div>
                    </div>
            ))

          }
        </div>
      </div>



      <Footer />
      </>
  );
};

export default Home;
