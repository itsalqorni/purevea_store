// Testimonial Data
const testimonials = [
    {
        name: "Dimas Abdussyahid",
        location: "Bekasi, Indonesia",
        rating: 5.0,
        comment: "Gue biasanya nggak terlalu peduli sama skincare, tapi setelah coba moisturizer Purevea, kulit gue jadi lebih lembap tanpa rasa berminyak. Gampang dipakai, nggak lengket, dan hasilnya mantap!",
        image: "src/img/dimaspic.JPG"
    },
    {
        name: "Firnaz Mustopa Almursalin",
        location: "Surabaya, Indonesia",
        rating: 5.0,
        comment: "Dulu kulit gue sering kering dan kasar, apalagi setelah sering aktivitas di luar. Setelah pakai toner dan probioderm Purevea, kulit jadi lebih sehat dan nggak gampang kusam lagi. Recommended banget!",
        image: "src/img/firnazpic.png"
    },
    {
        name: "Hasan Abdurrahman",
        location: "Depok, Indonesia",
        rating: 5.0,
        comment: "Gue nggak nyangka bakal suka sama skincare, tapi Purevea beneran beda! Serumnya bikin kulit gue lebih fresh dan nggak gampang jerawatan. Worth it banget!",
        image: "src/img/hasan.JPG"
    },
    {
        name: "Husain Abdurrahim",
        location: "Depok, Indonesia",
        rating: 5.0,
        comment: "Pakai sunscreen Purevea bikin wajah gue nggak gampang belang dan tetap nyaman seharian. Teksturnya ringan, nggak bikin muka kilang minyak. Fix jadi andalan gue tiap hari!",
        image: "src/img/hasan.JPG"
    },
    {
        name: "Ibrohim",
        location: "Solo, Indonesia",
        rating: 5.0,
        comment: "Gue sering kerja lembur dan kurang tidur, tapi sejak pakai skincare dari Purevea, wajah gue nggak kelihatan capek lagi. Kulit lebih cerah dan sehat, meskipun aktivitas padat!",
        image: "src/img/ibrohimpic.png"
    },
    {
        name: "Kenaz Saktamulya Wiraputra",
        location: "Pasuruan, Indonesia",
        rating: 5.0,
        comment: "Nggak banyak skincare yang cocok buat cowok tanpa ribet, tapi Purevea ini beda. Cleanser-nya mantap buat bersihin wajah dari polusi, dan moisturizer-nya bikin kulit tetap lembap tanpa terasa berat!",
        image: "src/img/kenazpic.png"
    },
    {
        name: "Uwais Al Qorni",
        location: "Banyuwangi, Indonesia",
        rating: 5.0,
        comment: "✨ Cowok juga butuh skincare! Coba PureVéa! dan rasakan sendiri perubahan kulit yang lebih sehat dan terawat. 💜",
        image: "src/img/Uwaispic.JPG"
    }
    // Add more testimonials if needed
];


document.addEventListener('DOMContentLoaded', function () {
    generateTestimonials(); // Generate testimonials dulu
    initializeSwiper(); // Setelah itu baru jalankan Swiper
});

// Function untuk generate testimonials
function generateTestimonials() {
    const swiperWrapper = document.querySelector('.swiper-wrapper');
   
    testimonials.forEach(testimonial => {
        const slide = document.createElement('div');
        slide.className = 'swiper-slide';
       
        slide.innerHTML = `
            <div class="p-8 border-2 bg-purple-400 border-gray-200 rounded-2xl hover:border-purple-500 transition-all">
                <div class="flex items-center justify-between mb-8">
                    <div class="flex items-center gap-4">
                        <img src="${testimonial.image}" alt="${testimonial.name}" class="w-12 h-12 rounded-full">
                        <div>
                            <h4 class="font-medium text-white text-lg">${testimonial.name}</h4>
                            <p class=" text-white">${testimonial.location}</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-2">
                        <span class="font-medium">${testimonial.rating}</span>
                        <img src="src/img/star.png" alt="star" class="w-4 h-4">
                    </div>
                </div>
                <p class=" text-white">"${testimonial.comment}"</p>
            </div>
        `;
       
        swiperWrapper.appendChild(slide);
    });
}

// Function untuk inisialisasi Swiper
function initializeSwiper() {
    const swiper = new Swiper('.testimonialSwiper', {
        slidesPerView: 1,
        spaceBetween: 30,
        loop: true,
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        breakpoints: {
            768: { slidesPerView: 2, spaceBetween: 30 },
            1024: { slidesPerView: 3, spaceBetween: 30 }
        }
    });
}


// Call the function when the document is loaded
document.addEventListener('DOMContentLoaded', generateTestimonials);

document.addEventListener("DOMContentLoaded", function () {
    const header = document.querySelector("header");

    // Animasi fade-in saat halaman dimuat
    header.style.opacity = 0;
    header.style.transform = "translateY(-20px)";
    setTimeout(() => {
        header.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
        header.style.opacity = 1;
        header.style.transform = "translateY(0)";
    }, 200);

    // Shrink effect saat di-scroll
    window.addEventListener("scroll", function () {
        if (window.scrollY > 50) {
            header.classList.add("shadow-lg", "h-16");
            header.classList.remove("h-20");
        } else {
            header.classList.remove("shadow-lg", "h-16");
            header.classList.add("h-20");
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const banner = document.getElementById("banner");
    const heading = banner.querySelector("h1");
    const paragraph = banner.querySelector("p");
    const button = banner.querySelector(".btn");

    // Animasi fade-in & slide-up untuk banner
    banner.style.opacity = 0;
    banner.style.transform = "translateY(30px)";
    setTimeout(() => {
        banner.style.transition = "opacity 1s ease-out, transform 1s ease-out";
        banner.style.opacity = 1;
        banner.style.transform = "translateY(0)";
    }, 300);

    // Efek typing pada judul
    const text = "Kulit Sehat, Glowing, dan Terawat dengan ";
    let index = 0;
    heading.innerHTML = "";
    function typeEffect() {
        if (index < text.length) {
            heading.innerHTML += text.charAt(index);
            index++;
            setTimeout(typeEffect, 50);
        } else {
            heading.innerHTML += `<span class="text-purple-200 hover:text-purple-900 transition shadow">PureVéa</span>`;
        }
    }
    setTimeout(typeEffect, 800); // Mulai setelah banner fade-in

    // Hover effect buat button
    button.addEventListener("mouseover", () => {
        button.style.transform = "scale(1.1)";
        button.style.transition = "transform 0.3s ease-in-out";
    });
    button.addEventListener("mouseout", () => {
        button.style.transform = "scale(1)";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const products = document.querySelectorAll(".bg-purple-100");

    function revealProducts() {
        products.forEach((product, index) => {
            const productTop = product.getBoundingClientRect().top;
            const windowHeight = window.innerHeight;
            if (productTop < windowHeight - 50) {
                setTimeout(() => {
                    product.style.opacity = 1;
                    product.style.transform = "translateY(0)";
                }, index * 150);
            }
        });
    }

    // Set default state
    products.forEach((product) => {
        product.style.opacity = 0;
        product.style.transform = "translateY(50px)";
        product.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";
    });

    // Tambahkan event listener saat scroll
    window.addEventListener("scroll", revealProducts);
    revealProducts(); // Jalankan sekali saat pertama kali
});

document.addEventListener("DOMContentLoaded", function () {
    const aboutSection = document.querySelector("#about");
    const counters = document.querySelectorAll("#about h2");
    let started = false;

    function revealAbout() {
        const aboutTop = aboutSection.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;
        if (aboutTop < windowHeight - 100) {
            aboutSection.style.opacity = 1;
            aboutSection.style.transform = "translateY(0)";
        }

        // Animasi angka counter
        if (!started && aboutTop < windowHeight - 50) {
            counters.forEach((counter) => {
                let target = parseInt(counter.textContent.replace("k", "").replace("+", ""));
                let increment = target / 50; // Sesuaikan kecepatan animasi
                let count = 0;
                let interval = setInterval(() => {
                    if (count >= target) {
                        counter.textContent = target + (counter.textContent.includes("k") ? "k" : "");
                        clearInterval(interval);
                    } else {
                        count += increment;
                        counter.textContent = Math.floor(count) + (counter.textContent.includes("k") ? "k" : "");
                    }
                }, 40);
            });
            started = true;
        }
    }

    // Set default state
    aboutSection.style.opacity = 0;
    aboutSection.style.transform = "translateY(50px)";
    aboutSection.style.transition = "opacity 0.8s ease-out, transform 0.8s ease-out";

    // Event listener saat scroll
    window.addEventListener("scroll", revealAbout);
    revealAbout(); // Jalankan sekali saat pertama kali
});

document.addEventListener("DOMContentLoaded", function () {
    const testimonials = [
        {
            name: "Alya Putri",
            text: "Produk PureVéa benar-benar mengubah kulitku! Sekarang lebih lembut dan glowing.",
            image: "src/img/user1.jpg"
        },
        {
            name: "Budi Santoso",
            text: "Saya sudah mencoba banyak skincare, tapi ini yang terbaik! Sangat recommended.",
            image: "src/img/user2.jpg"
        },
        {
            name: "Cindy Anggraeni",
            text: "Efeknya cepat terasa, kulit lebih terhidrasi dan sehat. Terima kasih PureVéa!",
            image: "src/img/user3.jpg"
        }
    ];

    const swiperWrapper = document.querySelector(".testimonialSwiper .swiper-wrapper");

    testimonials.forEach(testimonial => {
        swiperWrapper.innerHTML += `
            <div class="swiper-slide flex flex-col items-center bg-white rounded-lg shadow-lg p-6 max-w-lg mx-auto text-center">
                <img src="${testimonial.image}" alt="${testimonial.name}" class="w-16 h-16 rounded-full mb-4">
                <p class="text-gray-800 italic">"${testimonial.text}"</p>
                <h4 class="mt-4 font-bold text-lg text-purple-900">${testimonial.name}</h4>
            </div>
        `;
    });

    new Swiper(".testimonialSwiper", {
        loop: true,
        autoplay: {
            delay: 5000,
            disableOnInteraction: false
        },
        effect: "fade",
        navigation: {
            nextEl: ".swiper-button-next",
            prevEl: ".swiper-button-prev"
        },
        pagination: {
            el: ".swiper-pagination",
            clickable: true
        }
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const sections = document.querySelectorAll("section");

    const options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.2,
    };

    const observer = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("animate-show");
                observer.unobserve(entry.target);
            }
        });
    }, options);

    sections.forEach(section => {
        observer.observe(section);
    });
});

// Hover effect
const cards = document.querySelectorAll("#medical .grid div");
cards.forEach(card => {
    card.addEventListener("mouseenter", () => {
        card.style.transform = "scale(1.05)";
        card.style.transition = "transform 0.3s ease-in-out";
    });
    card.addEventListener("mouseleave", () => {
        card.style.transform = "scale(1)";
    });
});

document.addEventListener("DOMContentLoaded", function () {
    const footer = document.querySelector("footer");
    const socialIcons = document.querySelectorAll("footer .fab");

    // Slide-in dari bawah saat scroll + Wave effect
    footer.style.opacity = 0;
    footer.style.transform = "translateY(100px)";
    footer.style.transition = "opacity 1s ease-out, transform 1s ease-out";
    
    const observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                footer.style.opacity = 1;
                footer.style.transform = "translateY(0)";
                footer.style.animation = "waveEffect 1.5s ease-in-out";
                observer.unobserve(entry.target);
            }
        });
    }, { threshold: 0.2 });

    observer.observe(footer);

    // Glowing effect pada ikon sosial media saat hover
    socialIcons.forEach(icon => {
        icon.style.transition = "box-shadow 0.3s ease-in-out, transform 0.3s ease-in-out";
        
        icon.addEventListener("mouseenter", () => {
            icon.style.boxShadow = "0 0 15px rgba(255, 255, 255, 0.8)";
            icon.style.transform = "scale(1.2)";
        });
        
        icon.addEventListener("mouseleave", () => {
            icon.style.boxShadow = "none";
            icon.style.transform = "scale(1)";
        });
    });
});

// Wave effect keyframes
const style = document.createElement("style");
style.innerHTML = `
@keyframes waveEffect {
    0% { transform: translateY(0px); }
    50% { transform: translateY(-5px); }
    100% { transform: translateY(0px); }
}`;
document.head.appendChild(style);



