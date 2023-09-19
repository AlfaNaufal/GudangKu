import { useState, useEffect } from 'react';

function DatabaseConnection() {
  const [connection, setConnection] = useState(null);

  useEffect(() => {
    // Konfigurasi koneksi
    const config = {
      host: 'localhost',
      user: 'root',
      password: '',
      database: 'gudangkudb',
    };

    // Membuat koneksi ketika komponen dimount
    const createConnection = async () => {
      try {
        const conn = await mysql.createConnection(config);
        setConnection(conn);
      } catch (error) {
        console.error('Error connecting to the database:', error);
      }
    };

    // Panggil fungsi pembuatan koneksi
    createConnection();

    // Membersihkan koneksi saat komponen dibongkar
    return () => {
      if (connection) {
        connection.end();
      }
    };
  }, []);

  // Fungsi ini dapat digunakan di komponen lain untuk mendapatkan koneksi database
  const getConnection = () => connection;

  return null; // Kompnen ini tidak merender apa pun, hanya digunakan untuk mengelola koneksi
}

export default DatabaseConnection;