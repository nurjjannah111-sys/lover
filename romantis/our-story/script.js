/* =====================================================
   OUR STORY - Romantic Website
   Revised Version
===================================================== */

document.addEventListener("DOMContentLoaded", () => {

    /* ======================================
       DATA & CONFIG
    ====================================== */
    const girlfriendName = "Deniska ❤️";
    const anniversary = new Date("2026-01-02T00:00:00");

    const letterText = `Hai Sayang ❤️

Kalau kamu sedang membaca surat ini,
berarti kamu sudah sampai di bagian yang paling aku tunggu.

Jujur, aku tidak pernah menyangka kalau sebuah pesan sederhana
yang aku kirim lewat Instagram pada tanggal 2 Januari 2026
akan membawa kita sejauh ini.

Terima kasih karena sudah membalas pesanku waktu itu.
Terima kasih karena sudah mau mengenalku.
Terima kasih karena sudah hadir dalam hidupku.

Aku masih ingat bagaimana rasanya menunggu setiap balasanmu.
Rasanya sederhana, tapi selalu berhasil membuat hariku lebih indah.

Lalu tibalah hari yang selama ini aku tunggu...

2 Juli 2026.

Hari dimana akhirnya aku bisa bertemu denganmu di Jogja.
Semua rasa gugup yang ada di dalam pikiranku
langsung berubah menjadi rasa bahagia
ketika akhirnya aku melihatmu secara langsung.

Dan pada tanggal 21 Juli 2026,
kita memutuskan untuk berjalan bersama.

Sejak hari itu, aku tahu kalau aku ingin menjaga hubungan ini sebaik mungkin.

Mungkin aku bukan laki-laki yang sempurna.
Aku masih sering melakukan kesalahan.
Masih sering membuatmu kesal.
Masih sering membuatmu menunggu.

Tetapi percayalah...
Tidak pernah sedikit pun aku berniat untuk berhenti mencintaimu.

Terima kasih sudah bertahan sejauh ini.
Terima kasih sudah menjadi rumah tempat aku bercerita.

Semoga hubungan kita selalu dipenuhi kebahagiaan.
Dan semoga suatu hari nanti,
aku bisa menggenggam tanganmu bukan hanya sebagai pacar,
tetapi sebagai pasangan hidup.

Aku sayang kamu, Deniska.

Selamanya ❤️`;

    /* ======================================
       LOADING SCREEN
    ====================================== */
    const loading = document.getElementById("loading");
    if (loading) {
        setTimeout(() => {
            loading.style.opacity = "0";
            setTimeout(() => {
                loading.style.display = "none";
            }, 800);
        }, 2500);
    }

    /* ======================================
       OPENING SCREEN
    ====================================== */
    const opening = document.getElementById("opening");
    const startBtn = document.getElementById("startBtn");
    const main = document.getElementById("main");

    if (startBtn && opening) {
        startBtn.addEventListener("click", () => {
            opening.classList.add("hide");
            if (main) main.classList.remove("hide");

            // Auto play music
            if (music) {
                music.play().catch(() => {});
                isPlaying = true;
                if (playMusicBtn) playMusicBtn.innerHTML = "⏸️";
            }

            setTimeout(() => {
                opening.style.display = "none";
            }, 1000);
        });
    }

    /* ======================================
       MUSIC PLAYER
    ====================================== */
    const music = document.getElementById("music");
    const playMusicBtn = document.getElementById("playMusic");
    let isPlaying = false;

    if (music && playMusicBtn) {
        playMusicBtn.addEventListener("click", () => {
            if (!isPlaying) {
                music.play().catch(() => {});
                playMusicBtn.innerHTML = "⏸️";
                isPlaying = true;
            } else {
                music.pause();
                playMusicBtn.innerHTML = "▶️";
                isPlaying = false;
            }
        });
    }

    // Auto play on first click anywhere
    window.addEventListener("click", () => {
        if (music && !isPlaying) {
            music.play().catch(() => {});
            isPlaying = true;
            if (playMusicBtn) playMusicBtn.innerHTML = "⏸️";
        }
    }, { once: true });

    /* ======================================
       COUNTDOWN TIMER
    ====================================== */
    const daysEl = document.getElementById("days");
    const hoursEl = document.getElementById("hours");
    const minutesEl = document.getElementById("minutes");
    const secondsEl = document.getElementById("seconds");

    function updateCountdown() {
        if (!daysEl) return;
        const now = new Date();
        const diff = now - anniversary;

        const d = Math.floor(diff / (1000 * 60 * 60 * 24));
        const h = Math.floor((diff / (1000 * 60 * 60)) % 24);
        const m = Math.floor((diff / (1000 * 60)) % 60);
        const s = Math.floor((diff / 1000) % 60);

        daysEl.textContent = d;
        hoursEl.textContent = h;
        minutesEl.textContent = m;
        secondsEl.textContent = s;
    }

    updateCountdown();
    const countdownInterval = setInterval(updateCountdown, 1000);

    /* ======================================
       ENVELOPE & TYPING EFFECT
    ====================================== */
    const envelope = document.getElementById("envelope");
    const typingArea = document.getElementById("typingText");
    let typingIndex = 0;
    let opened = false;

    function typingEffect() {
        if (!typingArea) return;
        if (typingIndex < letterText.length) {
            typingArea.innerHTML += letterText.charAt(typingIndex);
            typingIndex++;
            setTimeout(typingEffect, 30);
        }
    }

    if (envelope) {
        envelope.addEventListener("click", () => {
            if (opened) return;
            opened = true;
            envelope.classList.add("open");
            setTimeout(() => {
                typingEffect();
            }, 900);
        });
    }

    /* ======================================
       HEART RAIN
    ====================================== */
    const heartContainer = document.getElementById("hearts");
    const heartList = ["❤️", "💖", "💕", "💗", "💓", "💞"];

    function createHeart() {
        if (!heartContainer) return;
        const heart = document.createElement("div");
        heart.className = "heart";
        heart.innerHTML = heartList[Math.floor(Math.random() * heartList.length)];
        heart.style.left = Math.random() * 100 + "vw";
        heart.style.fontSize = (20 + Math.random() * 20) + "px";
        heart.style.animationDuration = (4 + Math.random() * 3) + "s";
        heartContainer.appendChild(heart);

        setTimeout(() => {
            if (heart.parentNode) heart.remove();
        }, 7000);
    }

    const heartInterval = setInterval(createHeart, 300);

    /* ======================================
       ROSE PETALS
    ====================================== */
    function createRose() {
        const rose = document.createElement("div");
        rose.className = "rose";
        rose.innerHTML = "🌹";
        rose.style.left = Math.random() * 100 + "vw";
        rose.style.animationDuration = (6 + Math.random() * 4) + "s";
        document.body.appendChild(rose);

        setTimeout(() => {
            if (rose.parentNode) rose.remove();
        }, 10000);
    }

    const roseInterval = setInterval(createRose, 2500);

    /* ======================================
       CURSOR HEART (Throttled)
    ====================================== */
    let lastHeartTime = 0;
    document.addEventListener("mousemove", (e) => {
        const now = Date.now();
        if (now - lastHeartTime < 100) return; // Limit to 10 hearts per second
        lastHeartTime = now;

        const heart = document.createElement("div");
        heart.className = "cursor-heart";
        heart.innerHTML = "❤️";
        heart.style.left = e.clientX + "px";
        heart.style.top = e.clientY + "px";
        document.body.appendChild(heart);

        setTimeout(() => {
            if (heart.parentNode) heart.remove();
        }, 700);
    });

    /* ======================================
       STARS BACKGROUND
    ====================================== */
    const stars = document.getElementById("stars");
    if (stars) {
        for (let i = 0; i < 120; i++) {
            const star = document.createElement("div");
            star.className = "star";
            const size = Math.random() * 3 + 1;
            star.style.width = size + "px";
            star.style.height = size + "px";
            star.style.left = Math.random() * 100 + "vw";
            star.style.top = Math.random() * 100 + "vh";
            star.style.animationDuration = (1 + Math.random() * 3) + "s";
            stars.appendChild(star);
        }
    }

    /* ======================================
       SCROLL ANIMATION
    ====================================== */
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.1 });

    document.querySelectorAll(".section").forEach(section => {
        observer.observe(section);
    });

    /* ======================================
       TIMELINE ANIMATION
    ====================================== */
    const timelineObserver = new IntersectionObserver((entries) => {
        entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
                setTimeout(() => {
                    entry.target.classList.add("show");
                }, index * 200);
            }
        });
    }, { threshold: 0.2 });

    document.querySelectorAll(".timeline-item").forEach(item => {
        timelineObserver.observe(item);
    });

    /* ======================================
       GALLERY SLIDER
    ====================================== */
    const sliderTrack = document.querySelector(".slider-track");
    const slides = document.querySelectorAll(".slide");
    const nextBtn = document.querySelector(".next");
    const prevBtn = document.querySelector(".prev");
    let currentSlide = 0;
    let slideInterval;

    function updateSlider() {
        if (!sliderTrack) return;
        sliderTrack.style.transform = `translateX(-${currentSlide * 100}%)`;
    }

    function nextSlide() {
        currentSlide++;
        if (currentSlide >= slides.length) currentSlide = 0;
        updateSlider();
    }

    function prevSlide() {
        currentSlide--;
        if (currentSlide < 0) currentSlide = slides.length - 1;
        updateSlider();
    }

    if (nextBtn) nextBtn.addEventListener("click", () => {
        nextSlide();
        resetSlideTimer();
    });

    if (prevBtn) prevBtn.addEventListener("click", () => {
        prevSlide();
        resetSlideTimer();
    });

    function startSlideTimer() {
        slideInterval = setInterval(nextSlide, 4000);
    }

    function resetSlideTimer() {
        clearInterval(slideInterval);
        startSlideTimer();
    }

    if (slides.length) startSlideTimer();

    /* ======================================
       LIGHTBOX
    ====================================== */
    const lightbox = document.getElementById("lightbox");
    const lightboxImage = document.getElementById("lightboxImage");
    const closeLightbox = document.getElementById("closeLightbox");

    document.querySelectorAll(".slide img").forEach(img => {
        img.addEventListener("click", () => {
            if (!lightbox) return;
            lightbox.style.display = "flex";
            if (lightboxImage) lightboxImage.src = img.src;
        });
    });

    if (closeLightbox) {
        closeLightbox.onclick = () => {
            if (lightbox) lightbox.style.display = "none";
        };
    }

    if (lightbox) {
        lightbox.onclick = (e) => {
            if (e.target === lightbox) lightbox.style.display = "none";
        };
    }

    /* ======================================
       100 REASONS
    ====================================== */
    const reasons = [
        "Karena senyummu selalu membuat hariku lebih indah. ❤️",
        "Karena kamu adalah orang pertama yang ingin aku ceritakan saat terjadi sesuatu.",
        "Karena kamu selalu berhasil membuatku tenang.",
        "Karena kamu menerima aku apa adanya.",
        "Karena kamu selalu membuatku merasa dicintai.",
        "Karena kamu adalah alasan aku tersenyum setiap hari.",
        "Karena setiap chat darimu selalu aku tunggu.",
        "Karena pertemuan kita di Instagram mengubah hidupku.",
        "Karena aku tidak pernah menyesal mengirim pesan pertama kepadamu.",
        "Karena kamu adalah Deniska yang selalu aku banggakan.",
        "Karena aku selalu nyaman saat berbicara denganmu.",
        "Karena kamu selalu mendukung apa yang aku lakukan.",
        "Karena kamu membuatku ingin menjadi pribadi yang lebih baik.",
        "Karena tawamu selalu membuatku ikut bahagia.",
        "Karena kamu selalu ada saat aku membutuhkanmu.",
        "Karena kamu adalah rumah bagiku.",
        "Karena kamu selalu membuatku merasa berarti.",
        "Karena kamu membuat hari-hariku lebih berwarna.",
        "Karena aku selalu merindukanmu.",
        "Karena aku selalu ingin membuatmu bahagia.",
        "Karena pertemuan kita di Jogja adalah salah satu hari paling membahagiakan dalam hidupku.",
        "Karena aku tidak pernah bosan mendengar suaramu.",
        "Karena aku suka melihatmu tersenyum.",
        "Karena kamu begitu istimewa bagiku.",
        "Karena kamu adalah hadiah terbaik dari Tuhan.",
        "Karena kamu selalu sabar menghadapiku.",
        "Karena kamu membuatku percaya pada cinta.",
        "Karena kamu membuatku merasa lengkap.",
        "Karena aku selalu bangga memiliki kamu.",
        "Karena kamu selalu menjadi alasan aku berjuang.",
        "Karena aku ingin tumbuh bersamamu.",
        "Karena kamu membuatku percaya bahwa cinta itu nyata.",
        "Karena kamu selalu mengerti aku.",
        "Karena kamu selalu berusaha memahami perasaanku.",
        "Karena kamu membuatku merasa aman.",
        "Karena kamu selalu membuatku tertawa.",
        "Karena aku suka semua tentangmu.",
        "Karena kamu selalu terlihat cantik di mataku.",
        "Karena kamu membuatku semangat setiap hari.",
        "Karena aku selalu ingin mendengar kabarmu.",
        "Karena kamu membuatku belajar mencintai dengan tulus.",
        "Karena kamu adalah cerita terbaikku.",
        "Karena kamu membuatku merasa pulang.",
        "Karena aku ingin selalu berada di sisimu.",
        "Karena aku percaya kita bisa melewati semuanya bersama.",
        "Karena kamu selalu membuatku bangga.",
        "Karena aku ingin menjadi alasan senyummu.",
        "Karena aku ingin menjagamu.",
        "Karena aku ingin menemanimu dalam suka maupun duka.",
        "Karena aku ingin melihatmu bahagia selamanya.",
        "Karena kamu adalah orang yang selalu aku pilih.",
        "Karena aku ingin membuat banyak kenangan bersamamu.",
        "Karena aku tidak pernah bosan mencintaimu.",
        "Karena kamu adalah bagian terindah dalam hidupku.",
        "Karena cintaku kepadamu terus bertambah setiap hari.",
        "Karena kamu adalah doa yang dikabulkan.",
        "Karena kamu membuatku percaya pada masa depan.",
        "Karena kamu selalu spesial bagiku.",
        "Karena aku ingin terus belajar menjadi pasangan yang lebih baik.",
        "Karena aku ingin selalu memelukmu.",
        "Karena aku ingin selalu menggenggam tanganmu.",
        "Karena aku ingin terus melihatmu tersenyum.",
        "Karena kamu membuatku merasa hidup.",
        "Karena kamu adalah semangatku.",
        "Karena aku mencintai semua kekuranganmu.",
        "Karena kamu mencintai semua kekuranganku.",
        "Karena kita saling melengkapi.",
        "Karena aku ingin selalu ada untukmu.",
        "Karena kamu selalu ada di doaku.",
        "Karena aku ingin membangun masa depan bersamamu.",
        "Karena aku ingin terus menemanimu sampai tua.",
        "Karena aku ingin menjadi pelindungmu.",
        "Karena aku ingin menjadi tempat pulangmu.",
        "Karena aku ingin menjadi alasan bahagiamu.",
        "Karena aku ingin terus memperjuangkan hubungan ini.",
        "Karena aku ingin terus belajar bersamamu.",
        "Karena aku ingin melihat semua impianmu terwujud.",
        "Karena aku percaya kita diciptakan untuk saling bertemu.",
        "Karena kamu membuatku percaya pada takdir.",
        "Karena aku bersyukur dipertemukan denganmu.",
        "Karena setiap detik bersamamu sangat berharga.",
        "Karena aku ingin selalu membuatmu bangga.",
        "Karena aku ingin menjadi laki-laki terbaik untukmu.",
        "Karena aku ingin terus mencintaimu tanpa syarat.",
        "Karena aku ingin terus memilihmu setiap hari.",
        "Karena aku ingin terus menggenggam tanganmu.",
        "Karena aku ingin selalu berada di sampingmu.",
        "Karena aku ingin menjadi alasan kamu tersenyum.",
        "Karena aku ingin kita tetap bersama apa pun yang terjadi.",
        "Karena aku tidak pernah berhenti mencintaimu.",
        "Karena kamu adalah Deniska.",
        "Karena tidak ada alasan untuk berhenti mencintaimu.",
        "Karena aku selalu memilihmu.",
        "Karena aku mencintaimu hari ini.",
        "Karena aku akan mencintaimu besok.",
        "Karena aku akan mencintaimu minggu depan.",
        "Karena aku akan mencintaimu tahun depan.",
        "Karena aku ingin menua bersamamu.",
        "Karena aku ingin selamanya bersamamu.",
        "Karena... aku sayang kamu, Deniska. ❤️"
    ];

    const reasonCard = document.getElementById("reasonCard");
    const nextReason = document.getElementById("nextReason");
    let reasonIndex = 0;

    if (nextReason) {
        nextReason.addEventListener("click", () => {
            if (!reasonCard) return;
            reasonCard.classList.remove("show");
            setTimeout(() => {
                reasonIndex++;
                if (reasonIndex >= reasons.length) reasonIndex = 0;
                reasonCard.innerHTML = reasons[reasonIndex];
                reasonCard.classList.add("show");
            }, 200);
        });
    }

    /* ======================================
       CHAT ANIMATION
    ====================================== */
    const chats = document.querySelectorAll(".chat");
    const chatObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const delay = entry.target.style.getPropertyValue("--delay") || "0s";
                entry.target.style.transitionDelay = delay;
                entry.target.classList.add("show");
            }
        });
    }, { threshold: 0.2 });

    chats.forEach(chat => chatObserver.observe(chat));

    /* ======================================
       FIREWORKS
    ====================================== */
    const canvas = document.getElementById("fireworks");
    let ctx = null;

    if (canvas) {
        ctx = canvas.getContext("2d");
        canvas.width = window.innerWidth;
        canvas.height = window.innerHeight;

        window.addEventListener("resize", () => {
            canvas.width = window.innerWidth;
            canvas.height = window.innerHeight;
        });
    }

    const particles = [];

    function randomColor() {
        const colors = ["#ff4d8d", "#ff8fab", "#ffd166", "#7ef9ff", "#ffffff"];
        return colors[Math.floor(Math.random() * colors.length)];
    }

    function explode(x, y) {
        if (!ctx) return;
        for (let i = 0; i < 80; i++) {
            particles.push({
                x: x,
                y: y,
                dx: (Math.random() - 0.5) * 10,
                dy: (Math.random() - 0.5) * 10,
                size: Math.random() * 4 + 2,
                alpha: 1,
                color: randomColor()
            });
        }
    }

    function animateFireworks() {
        if (!ctx) return;
        ctx.clearRect(0, 0, canvas.width, canvas.height);

        for (let i = particles.length - 1; i >= 0; i--) {
            const p = particles[i];
            p.x += p.dx;
            p.y += p.dy;
            p.alpha -= 0.015;

            ctx.globalAlpha = p.alpha;
            ctx.fillStyle = p.color;
            ctx.beginPath();
            ctx.arc(p.x, p.y, p.size, 0, Math.PI * 2);
            ctx.fill();

            if (p.alpha <= 0) particles.splice(i, 1);
        }

        ctx.globalAlpha = 1;
        requestAnimationFrame(animateFireworks);
    }

    if (canvas) animateFireworks();

    /* ======================================
       LOVE BUTTON & FINAL SCREEN
    ====================================== */
    const loveBtn = document.getElementById("loveBtn");
    const finalScreen = document.getElementById("finalScreen");
    const closeFinal = document.getElementById("closeFinal");
    const videoSection = document.getElementById("videoSection");
    const loveVideo = document.getElementById("loveVideo");

    if (loveBtn) {
        loveBtn.addEventListener("click", () => {
            loveBtn.innerHTML = "❤️ FOREVER ❤️";

            // Fireworks effect
            for (let i = 0; i < 8; i++) {
                setTimeout(() => {
                    explode(
                        Math.random() * window.innerWidth,
                        Math.random() * window.innerHeight / 2
                    );
                }, i * 350);
            }

            // Play video if exists, otherwise show final screen
            if (loveVideo && videoSection) {
                videoSection.classList.add("show");
                loveVideo.play().catch(() => {});
            } else if (finalScreen) {
                setTimeout(() => finalScreen.classList.add("show"), 3000);
            }
        });
    }

    if (closeFinal) {
        closeFinal.onclick = () => {
            if (finalScreen) finalScreen.classList.remove("show");
        };
    }

    // Video ended handler
    if (loveVideo) {
        loveVideo.addEventListener("ended", () => {
            if (videoSection) videoSection.classList.remove("show");
            if (finalScreen) finalScreen.classList.add("show");
        });
    }

    /* ======================================
       BOOK OF MEMORIES
    ====================================== */
    const pages = document.querySelectorAll(".memory-page");
    const nextPage = document.getElementById("nextPage");
    const prevPage = document.getElementById("prevPage");
    let currentPage = 0;

    function showPage() {
        if (!pages.length) return;
        pages.forEach((page, index) => {
            page.classList.toggle("active", index === currentPage);
        });
    }

    if (nextPage) {
        nextPage.addEventListener("click", () => {
            currentPage++;
            if (currentPage >= pages.length) currentPage = 0;
            showPage();
        });
    }

    if (prevPage) {
        prevPage.addEventListener("click", () => {
            currentPage--;
            if (currentPage < 0) currentPage = pages.length - 1;
            showPage();
        });
    }

    showPage();

    /* ======================================
       GIFT BOX
    ====================================== */
    const giftBox = document.getElementById("giftBox");
    const giftMessage = document.getElementById("giftMessage");

    if (giftBox) {
        giftBox.addEventListener("click", () => {
            giftBox.classList.add("open");
            if (giftMessage) giftMessage.classList.add("show");
        });
    }

    /* ======================================
       BACK TO TOP
    ====================================== */
    const topButton = document.getElementById("backToTop");

    if (topButton) {
        window.addEventListener("scroll", () => {
            if (window.scrollY > 500) {
                topButton.classList.add("show");
            } else {
                topButton.classList.remove("show");
            }
        });

        topButton.onclick = () => {
            window.scrollTo({ top: 0, behavior: "smooth" });
        };
    }

    /* ======================================
       PARALLAX EFFECT
    ====================================== */
    window.addEventListener("scroll", () => {
        const y = window.scrollY;
        document.querySelectorAll(".parallax").forEach(item => {
            item.style.transform = `translateY(${y * 0.15}px)`;
        });
    });

    /* ======================================
       IMAGE LAZY LOAD EFFECT
    ====================================== */
    const images = document.querySelectorAll("img");
    const imageObserver = new IntersectionObserver(entries => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("show");
            }
        });
    });

    images.forEach(img => imageObserver.observe(img));

    /* ======================================
       CONSOLE MESSAGE
    ====================================== */
    console.log("%c❤️ OUR STORY READY ❤️", "font-size:24px;color:#ff4d8d;font-weight:bold;");
    console.log("Website berhasil dimuat. Dibuat dengan penuh cinta untuk Deniska ❤️");

});