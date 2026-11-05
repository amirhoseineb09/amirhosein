/* =================================
   INTERNET MUSEUM
   Interactive JavaScript
================================= */

// 1. Language toggle

const languageBtn = document.querySelector(".language-btn");

let isEnglish = false;

if (languageBtn) {
    languageBtn.addEventListener("click", function () {
        isEnglish = !isEnglish;

        if (isEnglish) {
            document.documentElement.lang = "en";
            document.documentElement.dir = "ltr";
            languageBtn.textContent = "فارسی";
        } else {
            document.documentElement.lang = "fa";
            document.documentElement.dir = "rtl";
            languageBtn.textContent = "English";
        }
    });
}


// 2. Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// 3. Card animation

const cards = document.querySelectorAll(
    ".category-card, .story-card"
);

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

cards.forEach(function (card) {
    card.classList.add("hidden");
    observer.observe(card);
});


// 4. Search system

const searchInput = document.querySelector("#museum-search");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const searchText = this.value.toLowerCase();

        document.querySelectorAll(".story-card").forEach(function (card) {
            const cardText = card.textContent.toLowerCase();

            if (cardText.includes(searchText)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
}


// 5. Welcome message

console.log(
    "%c WELCOME TO INTERNET MUSEUM ",
    "background:#38e5df;color:#071017;padding:12px;font-size:18px;font-weight:bold;"
);

console.log("Explore the mysteries of the world.");


// 6. Back to top

const backToTop = document.querySelector("#back-to-top");

if (backToTop) {
    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}
/* =================================
   INTERNET MUSEUM
   Interactive JavaScript
================================= */

// 1. Language toggle

const languageBtn = document.querySelector(".language-btn");

let isEnglish = false;

if (languageBtn) {
    languageBtn.addEventListener("click", function () {
        isEnglish = !isEnglish;

        if (isEnglish) {
            document.documentElement.lang = "en";
            document.documentElement.dir = "ltr";
            languageBtn.textContent = "فارسی";
        } else {
            document.documentElement.lang = "fa";
            document.documentElement.dir = "rtl";
            languageBtn.textContent = "English";
        }
    });
}


// 2. Smooth scrolling

document.querySelectorAll('a[href^="#"]').forEach(function (link) {
    link.addEventListener("click", function (event) {
        const target = document.querySelector(this.getAttribute("href"));

        if (target) {
            event.preventDefault();

            target.scrollIntoView({
                behavior: "smooth"
            });
        }
    });
});


// 3. Card animation

const cards = document.querySelectorAll(
    ".category-card, .story-card"
);

const observer = new IntersectionObserver(function (entries) {
    entries.forEach(function (entry) {
        if (entry.isIntersecting) {
            entry.target.classList.add("show");
        }
    });
}, {
    threshold: 0.15
});

cards.forEach(function (card) {
    card.classList.add("hidden");
    observer.observe(card);
});


// 4. Search system

const searchInput = document.querySelector("#museum-search");

if (searchInput) {
    searchInput.addEventListener("input", function () {
        const searchText = this.value.toLowerCase();

        document.querySelectorAll(".story-card").forEach(function (card) {
            const cardText = card.textContent.toLowerCase();

            if (cardText.includes(searchText)) {
                card.style.display = "";
            } else {
                card.style.display = "none";
            }
        });
    });
}


// 5. Welcome message

console.log(
    "%c WELCOME TO INTERNET MUSEUM ",
    "background:#38e5df;color:#071017;padding:12px;font-size:18px;font-weight:bold;"
);

console.log("Explore the mysteries of the world.");


// 6. Back to top

const backToTop = document.querySelector("#back-to-top");

if (backToTop) {
    backToTop.addEventListener("click", function () {
        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });
    });
}