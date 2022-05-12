let slider = document.querySelector('.section-filter__slider');

noUiSlider.create(slider, {
    start: [0, 100000],
    tooltips: true,
    connect: true,
    range: {
        'min': 0,
        'max': 200000
    },
    format: {
        from: function (value) {
            return parseInt(value)
        },
        to: function (value) {
            return parseInt(value)
        }
    }
});

const inputFrom = document.querySelector(".enter-section-filter__from")
const inputTo = document.querySelector(".enter-section-filter__to")

function renderInputFrom() {
    if (inputFrom.value !== "") {
        slider.noUiSlider.set([inputFrom.value,])
    }
}

function renderInputTo() {
    if (inputTo.value !== "") {
        slider.noUiSlider.set([, inputTo.value])
    }
}

inputFrom.addEventListener("change", renderInputFrom)
inputTo.addEventListener("change", renderInputTo)