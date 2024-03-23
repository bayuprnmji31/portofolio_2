
const text = "BAYU PURNAMA AJI";
const charactersArray = text.split('');

console.log(charactersArray);

document.addEventListener("DOMContentLoaded", function() {
    const navbarLinks = document.querySelectorAll(".navbar-nav .nav-link");
    const navbar = document.querySelector(".navbar");

    // Tambahkan event listener untuk setiap link pada navbar
    navbarLinks.forEach(function(navLink) {
        navLink.addEventListener("click", function() {
            navbarLinks.forEach(function(link) {
                link.classList.remove("active");
            });
            this.classList.add("active");
        });
    });

    // Tambahkan event listener untuk mendeteksi saat halaman digulir
    window.addEventListener("scroll", function() {
        const scrollPosition = window.scrollY;
        const sections = document.querySelectorAll("section");
        
        sections.forEach(function(section) {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.clientHeight;
            
            if (scrollPosition >= sectionTop && scrollPosition < sectionTop + sectionHeight) {
                navbarLinks.forEach(function(link) {
                    link.classList.remove("active");
                });
                const sectionId = section.getAttribute("id");
                document.querySelector(`.navbar-nav .nav-link[href="#${sectionId}"]`).classList.add("active");
            }
        });

        // Tambahkan kelas 'scrolled' pada navbar saat digulir ke bawah
        if (scrollPosition > 50) { 
            navbar.classList.add("scrolled");
        } else {
            navbar.classList.remove("scrolled");
        }
    });
});

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

  function toggleTheme() {
    // Periksa apakah tema saat ini adalah dark mode
    var isDarkMode = document.body.classList.contains('dark-mode');
    
    // Ubah tema berdasarkan status saat ini
    if (isDarkMode) {
        document.body.classList.remove('dark-mode');
        document.getElementById('theme-toggle').innerHTML = '<i class="fas fa-moon"></i>';
    } else {
        document.body.classList.add('dark-mode');
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

  typeText();

  // Fungsi untuk menyesuaikan posisi gambar dan teks
  const gambar = document.getElementById('gambar');
  const teks = document.querySelector('.beranda-img p');
  if (gambar && teks) {
      gambar.style.marginTop = "10px";
      teks.style.marginBottom = "10px";
  }

  $('.carousel').carousel({
      interval: 5000
  });

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
  const sections = document.querySelectorAll("section");
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

      const header = document.querySelector("header");
      header.classList.toggle("sticky", window.scrollY > 100);

    //   menuIcon.classList.remove("bx-x");
      navbar.classList.remove("active");
  });

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
          style: "color: black; font-weight: 300;"
      },
      email: {
          element: emailInput,
          label: "Silakan masukkan alamat email anda",
          style: "color: black; font-weight: 300;"
      },
      message: {
          element: messageInput,
          label: "Silakan masukkan pesan anda",
          style: "color: black; font-weight: 300;"
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

  // Tambahkan event listener untuk form submit
  contactForm.addEventListener('submit', function(event) {
      event.preventDefault();

      const nameValue = nameInput.value;
      const emailValue = emailInput.value;
      const messageValue = messageInput.value;

      const formDataItem = {
          name: nameValue,
          email: emailValue,
          message: messageValue
      };

      formData.push(formDataItem);

      contactForm.reset();

      successAlert.classList.remove('d-none');
      setTimeout(function() {
          successAlert.classList.add('d-none');
      }, 5000);

      console.log(formData);
  });
});

document.addEventListener("DOMContentLoaded", function() {
    const contactForm = document.getElementById("contactForm");

    const handleSubmit = function(event) {
        event.preventDefault();

        const name = document.getElementById("name").value;
        const email = document.getElementById("email").value;
        const message = document.getElementById("message").value;

        const data = {
            name: name,
            email: email,
            message: message
        };
        localStorage.setItem("contactData", JSON.stringify(data));

        const successAlert = document.getElementById("successAlert");
        successAlert.classList.remove("d-none");

        contactForm.reset();
    };

    contactForm.addEventListener("submit", handleSubmit);
});



