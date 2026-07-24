// ================================
// CEK STATUS API OTOMATIS
// ================================
async function cekAPI() {
  const statusEl = document.getElementById('api-status');
  
  // Tampilkan loading
  statusEl.className = 'api-loading';
  statusEl.innerHTML = '⏳ Menghubungi server...';

  try {
    const response = await fetch('/api/hello');
    const data = await response.json();

    // Tampilkan hasil
    statusEl.className = 'api-sukses';
    statusEl.innerHTML = `
      ✅ <strong>Status:</strong> ${data.status}<br/>
      💬 <strong>Pesan:</strong> ${data.message}<br/>
      🕐 <strong>Waktu:</strong> ${data.waktu}<br/>
      👨‍💻 <strong>Developer:</strong> ${data.info.developer}
    `;

  } catch (error) {
    statusEl.className = 'api-error';
    statusEl.innerHTML = `
      ❌ Gagal terhubung ke server<br/>
      <small>${error.message}</small>
    `;
  }
}

// Panggil saat halaman dimuat
window.addEventListener('DOMContentLoaded', () => {
  // Cek API setelah 1 detik
  setTimeout(cekAPI, 1000);
});


// ================================
// FORM KONTAK
// ================================
function kirimPesan() {
  const nama = document.getElementById('nama').value.trim();
  const email = document.getElementById('email').value.trim();
  const pesan = document.getElementById('pesan').value.trim();
  const notif = document.getElementById('notif');

  // Validasi kosong
  if (!nama || !email || !pesan) {
    notif.textContent = '❌ Semua field harus diisi!';
    notif.className = 'notif gagal';
    return;
  }

  // Validasi format email
  const emailValid = /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
  if (!emailValid) {
    notif.textContent = '❌ Format email tidak valid!';
    notif.className = 'notif gagal';
    return;
  }

  // Simulasi berhasil kirim
  notif.innerHTML = `
    ✅ Terima kasih <strong>${nama}</strong>! 
    Pesan kamu sudah diterima.
  `;
  notif.className = 'notif sukses';

  // Kosongkan form
  document.getElementById('nama').value = '';
  document.getElementById('email').value = '';
  document.getElementById('pesan').value = '';

  // Sembunyikan notif setelah 5 detik
  setTimeout(() => {
    notif.style.display = 'none';
  }, 5000);
}


// ================================
// EFEK NAVBAR SAAT SCROLL
// ================================
window.addEventListener('scroll', () => {
  const navbar = document.querySelector('.navbar');
  
  if (window.scrollY > 80) {
    navbar.style.boxShadow = 
      '0 4px 20px rgba(79, 158, 255, 0.1)';
  } else {
    navbar.style.boxShadow = 'none';
  }
});


// ================================
// ANIMASI SKILL BAR SAAT TERLIHAT
// ================================
const observer = new IntersectionObserver((entries) => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.style.animationPlayState = 'running';
    }
  });
}, { threshold: 0.5 });

document.querySelectorAll('.skill-isi').forEach(bar => {
  bar.style.animationPlayState = 'paused';
  observer.observe(bar);
});
