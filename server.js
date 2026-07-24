const express = require('express');
const path = require('path');
const app = express();

// Serve file-file static dari folder "public"
app.use(express.static(path.join(__dirname, 'public')));

// Route utama
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

// API sederhana
app.get('/api/salam', (req, res) => {
    const waktu = new Date().toLocaleTimeString('id-ID', {
        timeZone: 'Asia/Jakarta'
    });
    res.json({
        pesan: 'Halo dari server!',
        waktu: waktu
    });
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log(`Server berjalan di port ${PORT}`);
});
