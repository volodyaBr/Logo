//Dinamic Adaptive
function DinamicAdaptive() {
    const element = document.querySelectorAll("[data-da]")

    for (let elem of element) {
        dataValue = elem.dataset.da
        let arr = dataValue.split(",")
        const toMoveClass = arr[0]
        const coordinate = arr[1]
        const media = arr[2]
        const toMove = document.querySelector(toMoveClass)
        const parentElement = elem.parentElement
        const positionParent = [...parentElement.children].indexOf(elem)

        if (matchMedia) {
            let screen = window.matchMedia(`(max-width:${media}px)`)
            screen.addListener(adaptive)
            adaptive(screen)
        }

        function adaptive(screen) {
            if (screen.matches) {
                if (!elem.classList.contains("done")) {
                    toMove.insertBefore(elem, toMove.children[Number(coordinate)])
                    elem.classList.add("done")
                }
            } else {
                if (elem.classList.contains("done")) {
                    parentElement.insertBefore(elem, parentElement.children[positionParent])
                    elem.classList.remove("done")
                }
            }
        }
    }
}

DinamicAdaptive();

//-------------------------------------------------------------------------------------------
function ibg() {

    let ibg = document.querySelectorAll(".ibg");
    for (var i = 0; i < ibg.length; i++) {
        if (ibg[i].querySelector('img')) {
            ibg[i].style.backgroundImage = 'url(' + ibg[i].querySelector('img').getAttribute('src') + ')';
        }
    }
}

ibg();

//-------------------------------------------------------------------------------------------
//Burger

const burgerHeader = document.querySelector(".menu__burger")
const navHeader = document.querySelector(".menu__nav")
const body = document.querySelector("body")
const burgerSide = document.querySelector(".menu-page__burger")
const wrapperBurgerSide = document.querySelector(".menu-page__wrapper")
const sideBody = document.querySelector(".menu-page__body")
const pageSide = document.querySelector(".page__side")


burgerHeader.addEventListener("click", e => {
    burgerHeader.classList.toggle("active")
    navHeader.classList.toggle("active")
    body.classList.toggle("active")
})

burgerSide.addEventListener("click", e => {
    wrapperBurgerSide.classList.toggle("active")
    sideBody.classList.toggle("active")
    pageSide.classList.toggle("active")
})

//-------------------------------------------------------------------------------------------
//Submenu

const liList = document.querySelectorAll(".menu-page__list-menu")
const subMenu = document.querySelectorAll(".submenu-page")


if (matchMedia) {
    let screen = window.matchMedia(`(min-width:992px)`)
    screen.addListener(adapt)
    adapt(screen)
}

function adapt(screen) {

    if (screen.matches) {
        for (i = 0; i < liList.length; i++) {
            let li = liList[i]
            li.addEventListener("mouseenter", e => {
                li.classList.add("active")
            })
            li.addEventListener("mouseleave", e => {
                li.classList.remove("active")
            })
        }
    } else {
        for (i = 0; i < liList.length; i++) {
            let li = liList[i]
            li.addEventListener("click", e => {
                li.classList.toggle("active")
            })
        }
    }
}


//-------------------------------------------------------------------------------------------
//Search

const filterButton = document.querySelector(".search-page__filter")
const filterButtonText = document.querySelector(".search-page__filter>span")
const filterMenu = document.querySelector(".menu-search-page")
const filterMenuLinks = document.querySelectorAll(".menu-search-page__link")


document.documentElement.addEventListener("click", e => {
    if (!e.target.closest(".menu-search-page") && !e.target.closest(".search-page__filter")) {
        filterMenu.classList.remove("active")
    }

})

filterButton.addEventListener("click", e => {
    filterMenu.classList.toggle("active")
})

let array = []

filterMenuLinks.forEach(link => {
    link.addEventListener("click", e => {
        link.classList.toggle("active")
        let arr = Array.from(document.querySelectorAll(".menu-search-page__link.active"))
        if (arr.length == 0) filterButtonText.innerHTML = `Везде`
        if (arr.length == 1) filterButtonText.innerHTML = `Вибрано ${arr.length} Категорию`
        if (arr.length > 1) filterButtonText.innerHTML = `Вибрано ${arr.length} Категории`
        if (arr.length > 4) filterButtonText.innerHTML = `Вибрано ${arr.length} Категорий`

    })
})

//-------------------------------------------------------------------------------------------
//slider-page

const swiper = new Swiper('.slider-page__swiper', {
    // Optional parameters
    autoHeight: true,
    speed: 800,
    pagination: {
        el: ".swiper-pagination",
        clickable: true
    },

    autoplay: {
        delay: 2000,
        stopOnLastSlide: false,
        disableOnInteraction: false
    }

});

const bullets = document.querySelectorAll(".paga__slider, .swiper-pagination>span")
const bulletActive = document.querySelector(".paga__slider, .swiper-pagination > .swiper-pagination-bullet-active")
const arrFromBull = Array.from(bullets)
for (let index = 0; index < arrFromBull.length; index++) {
    arrFromBull[index].innerHTML = `<span class="swiper-pagination-bullet_number">${index + 1}</span>`
}

//-------------------------------------------------------------------------------------------
//popularItem

const popularItem = new Swiper('.popular-product-page__slider', {
    // Optional parameters
    speed: 800,
    pagination: {
        el: ".action-popular-product__pagination",
        clickable: false,
        type: "fraction",
    },

    navigation: {
        nextEl: ".action-popular-product__arrow_right",
        prevEl: ".action-popular-product__arrow_left"
    }
});

//-------------------------------------------------------------------------------------------
//sliderFirms

const sliderFirms = new Swiper('.slider-firms__slider', {
    // Optional parameters
    observer: true,
    observerParents: true,
    speed: 500,
    slidesPerView: 5,
    spaceBetween: 0,
    loop: true,
    navigation: {
        nextEl: ".slider-firms__next",
        prevEl: ".slider-firms__prev"
    },

    breakpoints: {
        200: {
            slidesPerView: 1,
        },
        490: {
            slidesPerView: 2,
        },
        680: {
            slidesPerView: 3,
        },
        992: {
            slidesPerView: 4,
        },
        1180: {
            slidesPerView: 5,
        }
    }
});


//Basket
if (document.querySelector(".basket__button_delivery")) {
    const basketButtonDelivery = document.querySelector(".basket__button_delivery")
    const basketButtonFast = document.querySelector(".basket__button_fast")
    const basketBlockDelivery = document.querySelector(".basket__delivery")
    const basketBlockFast = document.querySelector(".basket__delivery-fast")


    basketButtonDelivery.addEventListener("click", e => {
        basketButtonDelivery.classList.add("active")
    })

    basketButtonFast.addEventListener("click", e => {
        basketButtonFast.classList.add("active")
    })

    document.documentElement.addEventListener("click", e => {
        if (e.target.closest(".basket__button") && !e.target.closest(".basket__button_delivery")) {
            basketButtonDelivery.classList.remove("active")
        }
        if (e.target.closest(".basket__button") && !e.target.closest(".basket__button_fast")) {
            basketButtonFast.classList.remove("active")
        }
        if (basketButtonDelivery.classList.contains("active")) {
            basketBlockDelivery.classList.add("active")
        } else {
            basketBlockDelivery.classList.remove("active")
        }
        if (basketButtonFast.classList.contains("active")) {
            basketBlockFast.classList.add("active")
        } else {
            basketBlockFast.classList.remove("active")
        }
    })
}
//-------------------------------------------------------------------------------------------

//-------------------------------------------------------------------------------------------
//sliderPrice


//-------------------------------------------------------------------------------------------
//FilterArrow

const spanTitleFilter = document.querySelectorAll(".section-filter__title>span")
const bodyFlilter = document.querySelectorAll(".section-filter__body")
spanTitleFilter.forEach(span => {
    span.addEventListener("click", e => {
        span.classList.toggle("active")
        spanParent = span.parentElement
        parent = spanParent.parentElement.children
        spanParent.classList.toggle("active")
        for (let i = 0; i < parent.length; i++) {
            for (let y = 0; y < bodyFlilter.length; y++) {
                if (parent[i] == bodyFlilter[y]) {
                    bodyFlilter[y].classList.toggle("active")
                }
            }
        }
    })
})

//-------------------------------------------------------------------------------------------
//FilterCheckbox

const FilterCheckboxes = document.querySelectorAll(".filter-checkbox__checkbox")
const FilterCheckboxesInput = document.querySelectorAll(".filter-checkbox__checkbox>input")


for (let i = 0; i < FilterCheckboxes.length; i++) {
    FilterCheckbox = FilterCheckboxes[i]
    FilterCheckboxChildren = FilterCheckbox.children
    for (let j = 0; j < FilterCheckboxChildren.length; j++) {
        FilterCheckboxesInput.forEach(input => {
            if (FilterCheckboxChildren[j] == input) {
                if (input.checked) {
                    input.parentElement.classList.add("active")
                }
            }
        })
    }

}

FilterCheckboxes.forEach(FilterCheckbox => {
    FilterCheckbox.addEventListener("click", e => {
        if (FilterCheckbox.classList.contains("active")) {
            FilterCheckboxesInput.forEach(input => {
                for (let j = 0; j < FilterCheckbox.children.length; j++) {
                    if (FilterCheckbox.children[j] == input) {
                        input.checked = false
                    }
                }
            })
        } else {
            FilterCheckboxesInput.forEach(input => {
                for (let j = 0; j < FilterCheckbox.children.length; j++) {
                    if (FilterCheckbox.children[j] == input) {
                        input.checked = true
                    }
                }
            })
        }
        FilterCheckbox.classList.toggle("active")
    })
})

//-------------------------------------------------------------------------------------------
//Tiles

if (document.querySelector(".sort-catalog__tile_cube")) {
    const tileLine = document.querySelector(".sort-catalog__tile_line")
    const tileCube = document.querySelector(".sort-catalog__tile_cube")

    tileLine.addEventListener("click", e => {
        tileLine.classList.add("active")
    })

    tileCube.addEventListener("click", e => {
        tileCube.classList.add("active")
    })

    document.documentElement.addEventListener("click", e => {
        if (!e.target.closest(".sort-catalog__tile_line") && e.target.closest(".sort-catalog__tile")) {
            tileLine.classList.remove("active")
        }
        if (!e.target.closest(".sort-catalog__tile_cube") && e.target.closest(".sort-catalog__tile")) {
            tileCube.classList.remove("active")
        }
    })
}
//-------------------------------------------------------------------------------------------

const goods = new Swiper('.goods-catalog__slider', {
    // Optional parameters
    speed: 800,
    pagination: {
        el: ".pagination-catalog__pagination",
        clickable: true,
        type: "bullets",
        renderBullet: function (index, currentClass) {
            let current = document.querySelector(".swiper-pagination-bullet-active")
            return `<span class="${currentClass}">${index + 1}</span>`
        },

    },
    //
    navigation: {
        nextEl: ".pagination-catalog__arrow_next",
        prevEl: ".pagination-catalog__arrow_prev"
    }
});

//-------------------------------------------------------------------------------------------
//-------------------------------------------------------------------------------------------
