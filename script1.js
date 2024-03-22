// Ambil elemen navbar
var navbar = document.querySelector('.navbar');

// Fungsi untuk menambahkan atau menghapus kelas 'sticky' sesuai dengan posisi scroll
function stickyNavbar() {
    if (window.pageYOffset >= navbar.offsetTop) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky');
    }
}

// Panggil fungsi stickyNavbar saat halaman dimuat dan saat pengguna melakukan scroll
window.addEventListener('scroll', stickyNavbar);


document.addEventListener('DOMContentLoaded', function() {
  const themeToggle = document.getElementById('theme-toggle');
  const isDarkMode = localStorage.getItem('isDarkMode');

  // Fungsi untuk mengubah tema saat tombol ditekan
  // Fungsi untuk mengubah tema
  function toggleTheme() {
    // Periksa apakah tema saat ini adalah dark mode
    var isDarkMode = document.body.classList.contains('dark-mode');
    
    // Ubah tema berdasarkan status saat ini
    if (isDarkMode) {
        // Jika dark mode aktif, matikan dark mode
        document.body.classList.remove('dark-mode');
        // Ubah ikon menjadi ikon untuk dark mode
        document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        // Jika dark mode tidak aktif, aktifkan dark mode
        document.body.classList.add('dark-mode');
        // Ubah ikon menjadi ikon untuk light mode
        document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-sun"></i>';
    }
}

// Tambahkan event listener untuk tombol tema toggle
document.getElementById('theme-toggle').addEventListener('click', toggleTheme);

  // Fungsi untuk membuat efek teks yang diketik
  const typingTextElement = document.getElementById('typing-text');
  const textToType = "Seorang Motivator dan Inspiratif";
  let index = 0;

  function typeText() {
      typingTextElement.textContent = textToType.slice(0, index);
      index++;

      if (index > textToType.length) {
          index = 0;
      }

      setTimeout(typeText, 100);
  }

  // Mulai animasi
  typeText();

  // Fungsi untuk menyesuaikan posisi gambar dan teks
  const gambar = document.getElementById('gambar');
  const teks = document.querySelector('.beranda-img p');
  if (gambar && teks) {
      gambar.style.marginTop = "10px";
      teks.style.marginBottom = "10px";
  }

  // Inisialisasi carousel
  $('.carousel').carousel({
      interval: 5000
  });

  // Tambahkan event listener untuk ikon menu
  const menuIcon = document.getElementById('box-menu');
  const navbar = document.querySelector('.navbar');
  const scrollToTopButton = document.getElementById('scroll-to-top');

  if (menuIcon) {
      menuIcon.addEventListener('click', function() {
          navbar.classList.toggle('active');

          if (navbar.classList.contains('active')) {
              scrollToTopButton.classList.remove('show');
          } else {
              scrollToTopButton.classList.add('show');
          }
      });
  }

  // Tambahkan event listener untuk tombol scroll ke atas
  if (scrollToTopButton) {
      scrollToTopButton.addEventListener('click', function() {
          window.scrollTo({
              top: 0,
              behavior: 'smooth'
          });
      });
  }

  // Tambahkan class "active" pada link navbar saat di-scroll
  const navLinks = document.querySelectorAll("header nav a");
  window.addEventListener('scroll', function() {
      sections.forEach((sec) => {
          const top = window.scrollY;
          const offset = sec.offsetTop - 150;
          const height = sec.offsetHeight;
          const id = sec.getAttribute("id");

          if (top >= offset && top < offset + height) {
              navLinks.forEach((links) => {
                  links.classList.remove("active");
                  const activeLink = document.querySelector("header nav a[href*=" + id + "]");
                  if (activeLink) {
                      activeLink.classList.add("active");
                  }
              });
          }
      });

      // Atur class "sticky" pada header saat di-scroll
      const header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 100);

      // Sembunyikan ikon dan navbar saat link scroll ditekan
      menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
  });

  // Tambahkan efek "scroll reveal"
  const scrollRevealElements = document.querySelectorAll(".scroll-reveal");

  function revealElements() {
      scrollRevealElements.forEach((element) => {
          if (isInViewport(element)) {
              element.classList.add("reveal-in-view");
          }
      });
  }

  window.addEventListener("scroll", revealElements);
  revealElements();
});

// Fungsi untuk mengecek apakah elemen dalam tampilan
function isInViewport(element) {
  const rect = element.getBoundingClientRect();
  return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
  );
}

document.addEventListener('DOMContentLoaded', function() {
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');

  // Definisi objek kolom pengisian
  const formInputs = {
      name: {
          element: nameInput,
          label: "Silakan masukkan nama anda",
          style: "color: black; font-weight: 300;" // Gaya teks hitam tipis
      },
      email: {
          element: emailInput,
          label: "Silakan masukkan alamat email anda",
          style: "color: black; font-weight: 300;" // Gaya teks hitam tipis
      },
      message: {
          element: messageInput,
          label: "Silakan masukkan pesan anda",
          style: "color: black; font-weight: 300;" // Gaya teks hitam tipis
      }
  };

  // Atur teks dan gaya untuk setiap kolom pengisian
  for (const inputName in formInputs) {
      if (formInputs.hasOwnProperty(inputName)) {
          const input = formInputs[inputName];
          input.element.placeholder = input.label;
          input.element.style = input.style;
      }
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const contactForm = document.getElementById('contactForm');
  const nameInput = document.getElementById('name');
  const emailInput = document.getElementById('email');
  const messageInput = document.getElementById('message');
  const successAlert = document.getElementById('successAlert');

  // Buat array untuk menampung data inputan
  let formData = [];

  // Tambahkan event listener untuk form submit
  contactForm.addEventListener('submit', function(event) {
      event.preventDefault(); // Hindari form submit default

      // Dapatkan nilai dari setiap input
      const nameValue = nameInput.value;
      const emailValue = emailInput.value;
      const messageValue = messageInput.value;

      // Buat objek yang berisi data inputan
      const formDataItem = {
          name: nameValue,
          email: emailValue,
          message: messageValue
      };

      // Tambahkan objek ke dalam array formData
      formData.push(formDataItem);

      // Reset form setelah data ditambahkan
      contactForm.reset();

      // Tampilkan pesan sukses
      successAlert.classList.remove('d-none');
      setTimeout(function() {
          successAlert.classList.add('d-none');
      }, 5000);

      // Cetak data input ke konsol
      console.log(formData);
  });
});

$(document).ready(function(){
    $('#contactForm').submit(function(event){
        event.preventDefault(); // Mencegah pengiriman formulir default
  
        // Lakukan pengiriman AJAX untuk mengirim data formulir
        $.ajax({
            url: 'https://example.com/submit', // Ganti dengan URL endpoint yang sesuai
            type: 'POST', // Metode HTTP yang digunakan untuk permintaan
            data: $(this).serialize(), // Serialize data formulir
            success: function(response){ // Fungsi callback untuk menangani permintaan AJAX yang berhasil
                // Tampilkan pesan sukses
                $('#successAlert').removeClass('d-none');
                // Reset formulir
                $('#contactForm')[0].reset();
                // Sembunyikan pesan sukses setelah 5 detik
                setTimeout(function(){
                    $('#successAlert').addClass('d-none');
                }, 5000);
            }
        });
    });
  });
  