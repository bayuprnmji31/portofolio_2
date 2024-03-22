// document.addEventListener('DOMContentLoaded', function() {
//     // Ambil elemen navbar
//     var navbar = document.querySelector('.navbar');
//     const scrollToTopButton = document.getElementById('scroll-to-top');

//     // Fungsi untuk menambahkan atau menghapus kelas 'sticky' sesuai dengan posisi scroll
//     function stickyNavbar() {
//         if (window.pageYOffset >= navbar.offsetTop) {
//             navbar.classList.add('sticky');
//         } else {
//             navbar.classList.remove('sticky');
//         }
//     }

//     // Panggil fungsi stickyNavbar saat halaman dimuat dan saat pengguna melakukan scroll
//     window.addEventListener('scroll', stickyNavbar);

//     const themeToggle = document.getElementById('theme-toggle');

//     // Fungsi untuk mengubah tema saat tombol ditekan
//     function toggleTheme() {
//         // Periksa apakah tema saat ini adalah dark mode
//         const isDarkMode = document.body.classList.contains('dark-mode');

//         // Ubah tema berdasarkan status saat ini
//         if (isDarkMode) {
//             // Jika dark mode aktif, matikan dark mode
//             document.body.classList.remove('dark-mode');
//             document.body.classList.add('light-mode');
//             // Mengubah ikon menjadi ikon untuk dark mode
//             themeToggle.innerHTML = '<i class="fas fa-moon"></i>';
//         } else {
//             // Jika dark mode tidak aktif, aktifkan dark mode
//             document.body.classList.remove('light-mode');
//             document.body.classList.add('dark-mode');
//             // Mengubah ikon menjadi ikon untuk light mode
//             themeToggle.innerHTML = '<i class="fas fa-sun"></i>';
//         }
//         // Simpan status dark mode di local storage
//         localStorage.setItem('isDarkMode', !isDarkMode);
//     }

//     // Tambahkan event listener untuk tombol tema toggle
//     themeToggle.addEventListener('click', toggleTheme);

//     // Memeriksa status dark mode saat pertama kali halaman dimuat
//     const isDarkMode = localStorage.getItem('isDarkMode');
//     if (isDarkMode === 'true') {
//         toggleTheme(); // Jika dark mode aktif, panggil fungsi untuk mengubah tema
//     }

//     // Fungsi untuk membuat efek teks yang diketik
//     const typingTextElement = document.getElementById('typing-text');
//     const textToType = "Seorang Motivator dan Inspiratif";
//     let index = 0;

//     function typeText() {
//         typingTextElement.textContent = textToType.slice(0, index);
//         index++;

//         if (index > textToType.length) {
//             index = 0;
//         }

//         setTimeout(typeText, 100);
//     }

//     // Mulai animasi
//     typeText();

//     // Fungsi untuk menyesuaikan posisi gambar dan teks
//     const gambar = document.getElementById('gambar');
//     const teks = document.querySelector('.beranda-img p');
//     if (gambar && teks) {
//         gambar.style.marginTop = "10px";
//         teks.style.marginBottom = "10px";
//     }

//     // Inisialisasi carousel
//     $('.carousel').carousel({
//         interval: 5000
//     });

//     // Tambahkan event listener untuk ikon menu
//     const menuIcon = document.getElementById('box-menu');
//     const navbar = document.querySelector('.navbar');

//     if (menuIcon) {
//         menuIcon.addEventListener('click', function() {
//             navbar.classList.toggle('active');

//             if (navbar.classList.contains('active')) {
//                 scrollToTopButton.classList.remove('show');
//             } else {
//                 scrollToTopButton.classList.add('show');
//             }
//         });
//     }

//     // Tambahkan event listener untuk tombol scroll ke atas
//     if (scrollToTopButton) {
//         scrollToTopButton.addEventListener('click', function() {
//             window.scrollTo({
//                 top: 0,
//                 behavior: 'smooth'
//             });
//         });
//     }

//     // Tambahkan class "active" pada link navbar saat di-scroll
//     const navLinks = document.querySelectorAll("header nav a");

//     window.addEventListener('scroll', function() {
//         navLinks.forEach((link) => {
//             const sectionId = link.getAttribute("href").substring(1);
//             const section = document.getElementById(sectionId);

//             if (section.offsetTop <= window.scrollY && section.offsetTop + section.offsetHeight > window.scrollY) {
//                 link.classList.add("active");
//             } else {
//                 link.classList.remove("active");
//             }
//         });

//         // Atur class "sticky" pada header saat di-scroll
//         navbar.classList.toggle("sticky", window.scrollY > 100);

//         // Sembunyikan ikon dan navbar saat link scroll ditekan
//         menuIcon.classList.remove("bx-x");
//         navbar.classList.remove("active");
//     });

//     // Tambahkan efek "scroll reveal"
//     const scrollRevealElements = document.querySelectorAll(".scroll-reveal");

//     function revealElements() {
//         scrollRevealElements.forEach((element) => {
//             if (isInViewport(element)) {
//                 element.classList.add("reveal-in-view");
//             }
//         });
//     }

//     window.addEventListener("scroll", revealElements);
//     revealElements();
// });

// // Fungsi untuk mengecek apakah elemen dalam tampilan
// function isInViewport(element) {
//     const rect = element.getBoundingClientRect();
//     return (
//         rect.top >= 0 &&
//         rect.left >= 0 &&
//         rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
//         rect.right <= (window.innerWidth || document.documentElement.clientWidth)
//     );
// }


// document.addEventListener('DOMContentLoaded', function() {
//     const formInputs = {
//         name: {
//             label: "Silakan masukkan nama Anda",
//         },
//         email: {
//             label: "Silakan masukkan email Anda",
//         },
//         message: {
//             label: "Silakan masukkan pesan Anda",
//         }
//     };

//     // Atur teks dan gaya untuk setiap input form
//     for (const inputName in formInputs) {
//         if (formInputs.hasOwnProperty(inputName)) {
//             const input = formInputs[inputName];
//             const inputElement = document.getElementById(inputName);
//             if (inputElement) {
//                 inputElement.placeholder = input.label;
//                 inputElement.style.color = "black"; // Atur warna teks menjadi hitam
//             }
//         }
//     }
// });

