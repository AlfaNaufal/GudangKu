import NavBar from "./Template/Navbar";
import Footer from "./Template/Footer";
import { datas } from "../db";

const Home = () => {
  const proyektor = datas.filter((barang) => barang.id_jenis === 1 )
  const bersih = datas.filter((barang) => barang.id_jenis === 2 )
  const speaker = datas.filter((barang) => barang.id_jenis === 3)
  
  return (
    <div className="w-full bg-secondary text-light">
      
      <NavBar />

      <div className="container">
      <h1 className="">Peminjaman Barang</h1>

        <h3>Proyektor</h3>
        <div className="row">
          {
            proyektor.map((proyektor) => (
              <div className="col-md-4 mb-4">
                      <div className="card" style={{ width: '18rem' }}>
                        <img src={proyektor.gambar} className="card-img-top" alt="" />
                        <div className="card-body text-center">
                          <h5 className="card-title">{`Proyektor ${proyektor.id}`}</h5>
                          <a href={`/pinjam/${proyektor.id}`} className="btn btn-primary">
                            Pinjam
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
            speaker.map((suara) => (
              <div className="col-md-4 mb-4">
                      <div className="card" style={{ width: '18rem' }}>
                        <img src={suara.gambar} className="card-img-top" alt="" />
                        <div className="card-body text-center">
                          <h5 className="card-title">{`Speaker ${suara.id}`}</h5>
                          <a href={`/pinjam/${suara.id}`} className="btn btn-primary">
                            Pinjam
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
            bersih.map((bersih) => (
              <div className="col-md-4 mb-4">
                      <div className="card" style={{ width: '18rem' }}>
                        <img src={bersih.gambar} className="card-img-top" alt="" />
                        <div className="card-body text-center">
                          <h5 className="card-title">{bersih.nama}</h5>
                          <a href={`/pinjam/${bersih.id}`} className="btn btn-primary">
                            Pinjam
                          </a>
                        </div>
                      </div>
                    </div>
            ))

          }
        </div>
      </div>



      <Footer />
    </div>
  
  );
};

export default Home;
