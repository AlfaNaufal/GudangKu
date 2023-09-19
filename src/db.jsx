export const admin =
    {
        id : 1,
        nama : "admin1",
        pw : "admin1"
    }

export const jenis = [
    {
        id_jenis : 1,
        nama : "proyektor",
    },
    {
        id_jenis : 2,
        nama : "speaker",
    },
    {
        id_jenis : 3,
        nama : "alatbersih",
    }
]

export const pinjam = [
    {
        id_pinjam : 1,
        admin : admin.nama,
        nama : "John",
        kelas : "XI RPL 1",
        no_tlp : "0897865643",
        id_barang : "1",
        jenis : jenis[0].nama,
        durasi : "11.15"
    },
    {
        id_pinjam : 2,
        admin : admin.nama,
        nama : "Jane",
        kelas : "XII TKJ 2",
        no_tlp : "0894532167",
        id_barang : "2",
        jenis : jenis[0].nama,
        durasi : "10.30"
    },
    {
        id_pinjam : 3,
        admin : admin.nama,
        nama : "Doe",
        kelas : "X AK 5",
        no_tlp : "0874567895",
        id_barang : "1",
        jenis : jenis[1].nama,
        durasi : "08.00"
    },
]

export const riwayat = [
    {
        id_kembali : 1,
        id_pinjam : 1,
        admin : admin.nama,
        nama : "John",
        kelas : "XI RPL 1",
        no_tlp : "0897865643",
        id_barang : "1",
        jenis : jenis[0].nama,
        durasi : "11.15",
        kembali : "11.00"
    },
    {
        id_kembali : 2,
        id_pinjam : 2,
        admin : admin.nama,
        nama : "Jane",
        kelas : "XII TKJ 2",
        no_tlp : "0894532167",
        id_barang : "2",
        jenis : jenis[0].nama,
        durasi : "10.30",
        kembali : "10.30"
    },
    {
        id_kembali : 3,
        id_pinjam : 3,
        admin : admin.nama,
        nama : "Doe",
        kelas : "X AK 5",
        no_tlp : "0874567895",
        id_barang : "1",
        jenis : jenis[1].nama,
        durasi : "08.00",
        kembali : "08.00"
    },
]

export const datas = [
    {
        id_jenis : jenis[0].id_jenis,
        id : "1",
        nama : "proyektor 1",
        stok : 1,
        gambar : "Projector.png"
    },
    {
        id_jenis : jenis[0].id_jenis,
        id : "2",
        nama : "proyektor 2",
        stok : 1,
        gambar : "Projector.png"
        
    },
    {
        id_jenis : jenis[0].id_jenis,
        id : "3",
        nama : "proyektor 3",
        stok : 1,
        gambar : "Projector.png"
        
    },
    {
        id_jenis : jenis[0].id_jenis,
        id : "4",
        nama : "proyektor 4",
        stok : 1,
        gambar : "Projector.png"
        
    },
    {
        id_jenis : jenis[0].id_jenis,
        id : "5",
        nama : "proyektor 5",
        stok : 1,
        gambar : "Projector.png"
        
    },
    {
        id_jenis : jenis[0].id_jenis,
        id : "6",
        nama : "proyektor 6",
        stok : 1,
        gambar : "Projector.png"
        
    },

    {
        id_jenis : jenis[1].id_jenis,
        id : "1",
        nama : "speaker 1",
        stok : 1,
        gambar : "speaker.jpg"
    },
    {
        id_jenis : jenis[1].id_jenis,
        id : "2",
        nama : "speaker 2",
        stok : 1,
        gambar : "speaker.jpg"
    },
    {
        id_jenis : jenis[1].id_jenis,
        id : "3",
        nama : "speaker 3",
        stok : 1,
        gambar : "speaker.jpg"
    },

    {
        id_jenis : jenis[2].id_jenis,
        id : "1",
        nama : "Sapu",
        stok : 1,
        gambar : "sapu.png"
        
    },
    {
        id_jenis : jenis[2].id_jenis,
        id : "2",
        nama : "Pengki",
        stok : 1,
        gambar : "pengki.png"
        
    },
    {
        id_jenis : jenis[2].id_jenis,
        id : "3",
        nama : "Pel",
        stok : 1,
        gambar : "pel.png"
        
    },
]

 export const DataPinjams = [
    {
        id_pinjam : "1",
        admin : "admin1",
        nama : "Habib",
        kelas : "XII RPL 1",
        notlp : "0812346790",
        idbarang : "1",
        barang : "proyektor",
        durasi : "10.45",
        tgl : "15-09-2023"
    },
    {
        id_pinjam : "2",
        admin : "admin1",
        nama : "Putraw",
        kelas : "XII RPL 3",
        notlp : "0867895431",
        idbarang : "1",
        barang : "sapu",
        durasi : "09.30",
        tgl : "17-09-2023"
    },
    {
        id_pinjam : "3",
        admin : "admin1",
        nama : "Adrian",
        kelas : "XIII AK 5",
        notlp : "0873578293",
        idbarang : "1",
        barang : "Pengki",
        durasi : "08.00",
        tgl : "22-09-2023"
    },
    {
        id_pinjam : "4",
        admin : "admin1",
        nama : "Rizky",
        kelas : "XI TKJ 1",
        notlp : "0852891723",
        idbarang : "1",
        barang : "Proyektor",
        durasi : "09.30",
        tgl : "20-09-2023"
    },
    {
        id_pinjam : "5",
        admin : "admin1",
        nama : "Wijaya",
        kelas : "X KA 1",
        notlp : "0881975247",
        idbarang : "1",
        barang : "sapu",
        durasi : "08.00",
        tgl : "22-09-2023"
    },
]


export const Riwayats = [

    {
        id_pinjam : "3",
        admin : "admin1",
        nama : "Adrian",
        kelas : "XIII AK 5",
        notlp : "0873578293",
        barang : "Pengki",
        durasi : "08.00",
        tgl : "22-09-2023"
    },
    {
        id_pinjam : "5",
        admin : "admin1",
        nama : "Wijaya",
        kelas : "X KA 1",
        notlp : "0881975247",
        barang : "sapu",
        durasi : "08.00",
        tgl : "22-09-2023"
    },
]



