const NavBar = () => {
    return (
      <>
      <nav className="navbar navbar-expand-lg navbar-light bg-dark-subtle">
        <a className="navbar-brand ps-3" href="#">
          <img src="GudangKu.png" alt="GudangKu" width="100" height="auto" />
        </a>
        <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav">
            <li className="nav-item active">
              <a className="nav-link" href="/">Beranda</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/DataPinjam">Data peminjaman</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/riwayat">Riwayat Peminjaman</a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="/alat">Alat & Jenis barang</a>
            </li>
          </ul>
        </div>
      </nav>
      </>
    );
  }
   export default NavBar;