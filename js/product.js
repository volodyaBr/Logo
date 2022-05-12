if (document.querySelector(".product__slider")) {
    const productSlider = new Swiper('.product__slider', {
        // Optional parameters
        pagination: {
            el: ".slider-product__pagination",
            clickable: true,
        }
    });
}
    const imgSliderPhoto = document.querySelectorAll(".slider-product__img")
    const sliderPhotoDots = document.querySelectorAll(".slider-product__pagination .swiper-pagination-bullet")

    for (let i = 0; i < imgSliderPhoto.length; i++) {
        let url = imgSliderPhoto[i].querySelector("img").getAttribute("src")
        sliderPhotoDots[i].style.backgroundImage = `url("${url}")`
    }

//----------------------------------------------

const productArrowLeft = document.querySelector(".conts-product__arrow_left")
const productArrowRight = document.querySelector(".conts-product__arrow_right")

productArrowLeft.addEventListener("click", e => {
    let productInput = document.querySelector(".conts-product__input input")
    let value = Number(productInput.value)
    if (value < 2) return false
    productInput.value = value - 1
})

productArrowRight.addEventListener("click", e => {
    let productInput = document.querySelector(".conts-product__input input")
    let value = Number(productInput.value)
    productInput.value = value + 1
})

let productInput = document.querySelector(".conts-product__input input")
if (productInput.value < 1) {
    productInput.value = 1
}

productInput.addEventListener("change", e => {
    if (productInput.value < 1) {
        productInput.value = 1
    }
    if (isNaN(productInput.value)) {
        productInput.value = 1
    }
})

//----------------------------------------------------------------

const buttDescription = document.querySelector(".action-product__butt_description")
const buttCharacterictic = document.querySelector(".action-product__butt_characteristic")
const blockDescription = document.querySelector(".action-product__description")
const blockCharacterictic = document.querySelector(".action-product__characteristic")

buttDescription.addEventListener("click", e => {
    buttDescription.classList.add("active")
})

buttCharacterictic.addEventListener("click", e => {
    buttCharacterictic.classList.add("active")
})

document.documentElement.addEventListener("click", e => {
    if (e.target.closest(".action-product__butt_characteristic")) {
        buttDescription.classList.remove("active")
    }
    if (e.target.closest(".action-product__butt_description")) {
        buttCharacterictic.classList.remove("active")
    }
    if (buttCharacterictic.classList.contains("active")) {
        blockCharacterictic.classList.add("active")
    } else {
        blockCharacterictic.classList.remove("active")
    }
    if (buttDescription.classList.contains("active")) {
        blockDescription.classList.add("active")
    } else {
        blockDescription.classList.remove("active")
    }
})
//----------------------------------------------------------------
const simmiliarProductSlider = new Swiper('.similar-product__slider', {
    // Optional parameters
    loop: true,
    simulateTouch: true,
    breakpoints: {
        200: {
            slidesPerView: 1,
            spaceBetween: 30,
        },
        480: {
            spaceBetween: 30,
            slidesPerView: 2,
        },
        830: {
            spaceBetween: 0,
            slidesPerView: 3,
        },
    }
});