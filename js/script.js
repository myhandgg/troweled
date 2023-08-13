// Menu function
const bars = document.querySelector(".bars")

bars.onclick = () => {
    bars.classList.toggle("xmark")
    document.querySelector(".info .buttons").classList.toggle("no-p-m")
    document.querySelector("nav").classList.toggle("show")
    document.querySelector(".parent .info").classList.toggle("no-p-m")
}

// Filter functions

const filterParagraph = document.querySelectorAll(".filter p")

let allDecoractiveImgs = document.querySelectorAll(".img-container img")

filterParagraph.forEach(e => {
    e.addEventListener("click" , () => {
        filterParagraph.forEach(e => {
            e.classList.remove("active")
        })
        e.classList.add("active")
    })
})

document.querySelector('.decorative-filter').onclick = () => {
    showDecorative()
}

document.querySelector('.facades-filter').onclick = () => {
    showFacades()
}

document.querySelector('.perforated-filter').onclick = () => {
    showPerforated()
}

document.querySelector('.railings-filter').onclick = () => {
    showRailings()
}

document.querySelector(".all-filter").onclick = () => {
    showAll()
}

function showDecorative() {
    for (img of allDecoractiveImgs) {
        if (!img.classList.contains("decorative")) {
            img.classList.add("hide")
        } else {
            img.classList.remove("hide")
        }
    }
}

function showFacades() {
    for (img of allDecoractiveImgs) {
        if (!img.classList.contains("facades")) {
            img.classList.add("hide")
        } else {
            img.classList.remove("hide")
        }
    }
}

function showPerforated() {
    for (img of allDecoractiveImgs) {
        if (!img.classList.contains("perforated")) {
            img.classList.add("hide")
        } else {
            img.classList.remove("hide")
        }
    }
}

function showRailings() {
    for (img of allDecoractiveImgs) {
        if (!img.classList.contains("railings")) {
            img.classList.add("hide")
        } else {
            img.classList.remove("hide")
        }
    }
}

function showAll() {
    for (img of allDecoractiveImgs) {
        img.classList.remove("hide")
    }
}

// Auto images scroll

let images = document.querySelector(".images .img-container")

let leftArrow = document.querySelector(".images .left")
let rightArrow = document.querySelector(".images .right")

leftArrow.onclick = () => {
    images.scrollBy(-400 , 0)
}

rightArrow.onclick = () => {
    images.scrollBy(400 , 0)
}

function autoScroll() {
    setInterval(() => {
        images.scrollBy(400 , 0)
    }, 10000);
}

autoScroll()

// Services menu

document.querySelector(".contact-us .service .select").onclick = () => {
    document.querySelector(".contact-us .service ul").classList.toggle("smooth-show")
    document.querySelector(".service .drop-down").classList.toggle("rotate")
}

let allLis = document.querySelectorAll(".contact-us .service ul li")

allLis.forEach(e => {
    e.onclick = () => {
        document.querySelector(".contact-us .select p").textContent = e.textContent
        allLis.forEach(e => {
            e.style.fontWeight = "normal"
        })
        e.style.fontWeight = "bold"
    }
})

// Regular Experssion for inputs

let nameInput = document.querySelector(".name-input")
let phoneInput = document.querySelector(".phone-input")
let emailInput = document.querySelector(".email-input")

let btn = document.querySelector(".send-btn")

let phoneRe = /\d+/
let emailRe = /\w+(\d+)?@(yahoo|gmail|outlook).(com|org|info|net)/

btn.onclick = (e) => {
    checkInputValidation(e)
}

function checkInputValidation(el) {
    if (nameInput.value === "") {
        nameInput.classList.add("warning")
    } else {
        nameInput.classList.remove("warning")
    }
    if (!phoneRe.test(phoneInput.value)) {
        phoneInput.classList.add("warning")
    } else {
        phoneInput.classList.remove("warning")
    }
    if (!emailRe.test(emailInput.value)) {
        emailInput.classList.add("warning")
    } else {
        emailInput.classList.remove("warning")
    }
    if (nameInput.value === "" || !phoneRe.test(phoneInput.value) || !emailRe.test(emailInput.value)) {
        el.preventDefault()
    }
}

// bars function

const testimonialBars = document.querySelectorAll(".testimonial .bars span")
let testimonialBarActive = document.querySelector(".testimonial .bars span.active")

testimonialBars.forEach(e => {
    e.onclick = () => {
        testimonialBars.forEach(e => {
            e.classList.remove("active")
        })
        e.classList.add("active")
    }
})

new Promise((resolve) => {
    let secondBar = testimonialBarActive.nextElementSibling
    setTimeout(() => {
        testimonialBars.forEach(e => {
            e.classList.remove("active")
        })
        secondBar.classList.add("active")
        resolve()
    }, 5000);
})
.then(() => {
    return new Promise((resolve) => {
        let secondBar = testimonialBarActive.nextElementSibling
        setTimeout(() => {
            testimonialBars.forEach(e => {
                e.classList.remove("active")
            })
            secondBar.nextElementSibling.classList.add("active")
            resolve()
        }, 5000);
    })
})
.then(() => {
    return new Promise((resolve) => {
        let secondBar = testimonialBarActive.nextElementSibling
        setTimeout(() => {
            testimonialBars.forEach(e => {
                e.classList.remove("active")
            })
            secondBar.previousElementSibling.classList.add("active")
            resolve()
        }, 5000);
    })
})
.then(() => {
    return new Promise((resolve) => {
        let secondBar = testimonialBarActive.nextElementSibling
        setTimeout(() => {
            testimonialBars.forEach(e => {
                e.classList.remove("active")
            })
            secondBar.classList.add("active")
            resolve()
        }, 5000);
    })
})
.then(() => {
    let secondBar = testimonialBarActive.nextElementSibling
    setTimeout(() => {
        testimonialBars.forEach(e => {
            e.classList.remove("active")
        })
        secondBar.nextElementSibling.classList.add("active")
    }, 5000);
})