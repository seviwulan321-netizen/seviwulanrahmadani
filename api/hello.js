export default function handler(req, res) {
  
  // Izinkan akses dari browser
  res.setHeader('Access-Control-Allow-Origin', '*');
  
  // Kirim response JSON
  res.status(200).json({
    status: "success",
    message: "Halo! API berjalan dengan baik 🚀",
    waktu: new Date().toLocaleString('id-ID', {
      timeZone: 'Asia/Jakarta',
      dateStyle: 'full',
      timeStyle: 'short'
    }),
    info: {
      developer: "Developer Baru",
      teknologi: ["Node.js", "Vercel", "JavaScript"],
      versi: "1.0.0"
    }
  });
}
