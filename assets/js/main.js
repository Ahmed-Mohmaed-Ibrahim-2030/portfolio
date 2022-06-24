// const { Typed } = require("./typed");

function preventScroll(e) {
    e.preventDefault();
    e.stopPropagation();

    return false;
}

function disable() {
    document.querySelector("main").addEventListener('wheel', preventScroll);
}

function enable() {
    document.querySelector("main").removeEventListener('wheel', preventScroll);
}

function menuClick(e) {
    document.getElementById("menu-btn").click();
    enable();
}



function showSidebar(e) {
    e.preventDefault();
    let menu = document.getElementById('menu');
    console.log(e.target.children[0]);
    menu.classList.toggle("fa-solid")
    menu.classList.toggle("fa-xmark")
    menu.classList.toggle("fa-solid");
    menu.classList.toggle("fa-bars");
    let side = document.getElementById("sidebar");

    side.classList.toggle("d-none");
    side.style.height = "100vh";
    side.style.overflow = "hidden";
    // for (let i of document.getElementsByTagName("section")) {
    //     i.style.display = "none";
    // }
    document.getElementById("sec-home").style.display = "block";
    // side.classList.add("position-absolute");
    disable();
    // e.scrollIntoView({ behavior: "smooth", block: "start" });

}


// let jobs = document.querySelector("span.typed").getAttribute("data-typed-items");
let carrer = setInterval(function() {
    let count = 0;
    // for (let i of jobs) {
    //     innerCu = setInterval(function() {
    //         document.querySelector("span.typed-cursor").innerHTML += i[count++];
    //     }, Math.round(1000 / i.length))
    //     if (count >= i.length) {
    //         clearInterval(innerCu);
    //         document.querySelector("span.typed-cursor").innerHTML = "";
    //     }
    // }
    document.querySelector("span.typed-cursor").classList.toggle("typed-cursor--blink");
}, 1000)
var typed = new Typed('#typed', {
    strings: ["Developer", "Designer", "Freelancer"],
    backSpeed: 40,
    typedSpeed: 40,
    loop: true,
    shuffle: true
});
let apps = {
    all: ["portfolio-1.jpg", "portfolio-2.jpg", "portfolio-3.jpg", "portfolio-4.jpg", "portfolio-5.jpg", "portfolio-6.jpg", "portfolio-7.jpg", "portfolio-8.jpg", "portfolio-9.jpg"],
    app: ["portfolio-1.jpg", "portfolio-2.jpg", "portfolio-3.jpg"],
    card: ["portfolio-4.jpg", "portfolio-5.jpg", "portfolio-6.jpg"],
    web: ["portfolio-7.jpg", "portfolio-8.jpg", "portfolio-9.jpg"]
}
console.log(apps)

function createApp(src) {
    let app = document.createElement("div");
    let img = document.createElement("img");
    img.src = src;
    img.classList.add("w-100");
    app.appendChild(img);
    let hoverDiv = document.createElement("div");
    hoverDiv.classList.add("py-2", "pe-lg-0", "pe-2", "px-md-1", "px-4", "row", "row-cols-2", "position-absolute", "bottom-0", "mx-auto", "d-none");
    hoverDiv.style = "width:90% !important;box-sizing:content-box !important ;background-color:RGB(72,178,225) !important";
    hoverDiv.innerHTML = `
    <a class="col text-light text-center text-decoration-none">
   +
    </a>
    <a class="col text-center">
    <i class="fa-solid fa-link text-light" />
    </a>`;
    app.appendChild(hoverDiv);
    console.log(app.children[app.children.length - 1]);
    app.onmousemove = function() {
        app.children[app.children.length - 1].classList.remove("d-none");
        console.log(app.children[app.children.length - 1]);
    }
    app.onmouseleave = function() {
        app.children[app.children.length - 1].classList.add("d-none");
    }
    app.classList.add("mt-2", "position-relative", "col-md");
    return app;
}
for (let i of apps["all"]) {
    document.getElementById("apps").appendChild(createApp("./assets/images/portfolio/" + i));
}

function printApp(e) {
    document.getElementById("apps").innerHTML = "";
    e.preventDefault();
    // e.target.classList.toggle("text-dark", "text-info")
    for (let i of apps[e.target.getAttribute("data-type")]) {
        document.getElementById("apps").appendChild(createApp("./assets/images/portfolio/" + i));
    }
    // if (document.getElementById("apps").children.length > 0) {

    //     let hoverDiv = document.createElement("div");
    //     hoverDiv.classList.add("bg-primary", "row", "row-cols-2", "position-absolute", "bottom-0");
    //     hoverDiv.innerHTML = `
    //     <a class="col"><i className="fa-solid fa-link text-light" />
    //     </a>
    //     <a class="col"><i className="fa-solid fa-link text-light" />
    //     </a>
    //     `;
    //     for (let i of document.getElementById("apps").children) {
    //         i.addEventListener("mouseover", function() {
    //             i.appendChild(hoverDiv);
    //         })
    //         i.addEventListener("mouseout", function() {
    //             i.removeChild(hoverDiv);
    //         })
    //     }
    // }
}