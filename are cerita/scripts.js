document.addEventListener('DOMContentLoaded', () => {
    const modeChatBtn = document.getElementById('mode-chat');
    const modeDukunganBtn = document.getElementById('mode-dukungan');
    const chatSection = document.getElementById('chat-section');
    const dukunganSection = document.getElementById('dukungan-section');
    const dukunganList = document.getElementById('dukungan-list');
    const kirimDukunganBtn = document.getElementById('kirim-dukungan');
    const dukunganNama = document.getElementById('dukungan-nama');
    const dukunganPesan = document.getElementById('dukungan-pesan');

    // Template pesan dukungan inspiratif
    const pesanDukunganTemplate = [
        "Kamu kuat! Setiap tantangan adalah kesempatan untuk tumbuh.",
        "Percaya padamu sendiri. Kamu memiliki kekuatan yang luar biasa di dalam dirimu.",
        "Saat ini mungkin sulit, tapi kamu akan melewatinya. Kamu tidak sendirian.",
        "Setiap langkah kecil yang kamu ambil adalah kemajuan. Tetap semangat!",
        "Kebahagiaan adalah pilihan. Pilih untuk tetap positif dan optimis.",
        "Kamu lebih kuat dari yang kamu pikirkan. Percaya pada dirimu sendiri.",
        "Setiap hari adalah kesempatan baru untuk memulai dan berkembang.",
        "Kamu layak mendapatkan kebahagiaan dan kedamaian.",
        "Masa lalu tidak menentukan masa depanmu. Kamu bisa membuat perubahan.",
        "Meskipun sulit, kamu memiliki kekuatan untuk melewati ini."
    ];

    // Fungsi untuk menambahkan pesan dukungan
    function tambahPesanDukungan(nama, pesan) {
        const pesanDukungan = document.createElement('div');
        pesanDukungan.classList.add('dukungan-pesan');
        pesanDukungan.innerHTML = `
            <span class="nama">${nama || 'Anonim'}</span>
            <p>${pesan}</p>
            <button class="balas-dukungan">Balas Dukungan</button>
        `;
        dukunganList.prepend(pesanDukungan);

        // Tambahkan event listener untuk tombol balas
        pesanDukungan.querySelector('.balas-dukungan').addEventListener('click', () => {
            kirimBalasanDukungan(nama);
        });
    }

    // Fungsi untuk membalas dukungan dengan pesan inspiratif
    function kirimBalasanDukungan(namaPenerima) {
        const pesanInspirasi = pesanDukunganTemplate[
            Math.floor(Math.random() * pesanDukunganTemplate.length)
        ];
        
        tambahPesanDukungan('Ruang Cerita Era', `Balasan untuk ${namaPenerima || 'Sahabat'}: ${pesanInspirasi}`);
    }

    // Event listener untuk mengirim dukungan
    kirimDukunganBtn.addEventListener('click', () => {
        const nama = dukunganNama.value.trim();
        const pesan = dukunganPesan.value.trim();

        if (pesan) {
            tambahPesanDukungan(nama, pesan);
            dukunganNama.value = '';
            dukunganPesan.value = '';

            // Tambahkan respons otomatis dari sistem
            setTimeout(() => {
                kirimBalasanDukungan(nama);
            }, 1500);
        }
    });

    // Tambahkan beberapa pesan dukungan awal
    tambahPesanDukungan('Sahabat Era', 'Hari ini terasa berat, tapi aku percaya aku bisa melewatinya.');
    tambahPesanDukungan('Warrior', 'Setiap tantangan adalah kesempatan untuk berkembang.');

    // Toggle mode antara chat dan dukungan
    modeChatBtn.addEventListener('click', () => {
        modeChatBtn.classList.add('active');
        modeDukunganBtn.classList.remove('active');
        chatSection.classList.add('active');
        dukunganSection.classList.remove('active');
    });

    modeDukunganBtn.addEventListener('click', () => {
        modeDukunganBtn.classList.add('active');
        modeChatBtn.classList.remove('active');
        dukunganSection.classList.add('active');
        chatSection.classList.remove('active');
    });
});