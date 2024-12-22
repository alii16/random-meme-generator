const express = require('express');
const axios = require('axios');
const cors = require('cors');

const app = express();
const PORT = 3000;

app.use(cors()); // Mengizinkan semua domain untuk akses API

// Endpoint untuk mendapatkan meme acak
app.get('/api/random-meme', async (req, res) => {
  try {
    const response = await axios.get('https://meme-api.com/gimme');
    const meme = response.data; // Data meme dari API
    res.json(meme);
  } catch (error) {
    console.error('Error fetching meme:', error.message);
    res.status(500).json({ error: 'Gagal mengambil meme' });
  }
});

// Menjalankan server
app.listen(PORT, () => {
  console.log(`Server berjalan di http://localhost:${PORT}`);
});


