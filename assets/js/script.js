let isScrolling = false;

document.addEventListener("DOMContentLoaded", () => {
    setupNavigation();
    setupScrollObserver();

    setupBannerRotation();

    setupServerPopup();

    loadServerData("play.deinserver.de");

    setupSmoothScroll();

    document.getElementById("serverIp")?.addEventListener("click", copyServerIp);
});

function setupNavigation() {
    const sections = document.querySelectorAll("section");
    const navLinks = document.querySelectorAll(".nav-menu li a");

    const updateActiveLink = () => {
        let currentSection = "";

        sections.forEach(section => {
            const sectionTop = section.offsetTop;
            const sectionHeight = section.offsetHeight;
            if (window.scrollY >= sectionTop - sectionHeight / 3) {
                currentSection = section.getAttribute("id");
            }
        });

        navLinks.forEach(link => {
            link.classList.remove("active");
            if (link.getAttribute("href").includes(currentSection)) {
                link.classList.add("active");
            }
        });
    };

    window.addEventListener("scroll", updateActiveLink);
}

function setupScrollObserver() {
    const navbar = document.getElementById("navbar");
    const header = document.getElementById("header");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                navbar.style.opacity = "0";
                navbar.style.pointerEvents = "none";
            } else {
                navbar.style.opacity = "1";
                navbar.style.pointerEvents = "auto";
            }
        });
    }, { threshold: 0.1 });

    if (header) {
        observer.observe(header);
    }
}

function setupBannerRotation() {
    const bannerItem = document.getElementById("banner-item");
    const banners = [
        `<p>📢 Trete unserem <strong>Discord</strong> bei: <a href="https://discord.gg/link" target="_blank">Klick mich!</a></p>`,
        `<p>🎙️ Verbinde dich mit unserem <strong>Teamspeak</strong>: <a href="ts3server://deineTSip">Klick mich!</a></p>`
    ];

    let currentIndex = 0;

    setInterval(() => {
        currentIndex = (currentIndex + 1) % banners.length;
        bannerItem.innerHTML = banners[currentIndex];
    }, 5000);
}

function setupServerPopup() {
    const popup = document.getElementById("server-popup");
    const toggleButton = document.getElementById("toggle-popup");
    const closeButton = document.getElementById("close-popup");

    setTimeout(() => {
        popup?.classList.add("visible");
    }, 1000);

    closeButton?.addEventListener("click", () => {
        popup.classList.remove("visible");
        toggleButton.style.transform = "translateX(0)";
    });

    toggleButton?.addEventListener("click", () => {
        popup.classList.add("visible");
        toggleButton.style.transform = "translateX(100%)";
    });
}

function loadServerData(serverIP) {
    const apiURL = `https://api.mcsrvstat.us/2/${serverIP}`;

    fetch(apiURL)
        .then((response) => response.json())
        .then((data) => {
            if (data.online) {
                document.getElementById("server-icon").src = data.icon || "https://via.placeholder.com/50";
                document.getElementById("server-name").textContent = serverIP;
                document.getElementById("player-count").textContent = data.players.online;
                document.getElementById("max-players").textContent = data.players.max;
            } else {
                document.getElementById("server-status").textContent = "Server ist offline.";
            }
        })
        .catch((error) => console.error("Fehler beim Laden des Server-Status:", error));
}

function setupSmoothScroll() {
    document.addEventListener('wheel', (event) => {
        if (isScrolling) return;

        const sections = Array.from(document.querySelectorAll('section, header'));
        const currentScroll = window.scrollY;
        const windowHeight = window.innerHeight;

        const currentIndex = sections.findIndex((section) => {
            const sectionTop = section.offsetTop;
            const sectionBottom = sectionTop + section.offsetHeight;
            return currentScroll + windowHeight / 2 >= sectionTop && currentScroll + windowHeight / 2 < sectionBottom;
        });

        const direction = event.deltaY > 0 ? 1 : -1;
        const targetIndex = Math.min(
            Math.max(0, currentIndex + direction),
            sections.length - 1
        );

        if (currentIndex !== targetIndex) {
            isScrolling = true;
            sections[targetIndex].scrollIntoView({ behavior: 'smooth' });

            setTimeout(() => {
                isScrolling = false;
            }, 1000);
        }

        event.preventDefault();
    });
}

function copyServerIp() {
    const ipInput = document.getElementById("serverIp");
    if (!ipInput) return;

    ipInput.select();
    ipInput.setSelectionRange(0, 99999);

    navigator.clipboard.writeText(ipInput.value)
        .then(() => alert("IP-Adresse wurde kopiert!"))
        .catch(() => alert("Fehler beim Kopieren der IP-Adresse!"));
}
