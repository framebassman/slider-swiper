const sliderLine = document.querySelector(".slider-line");
const prevButton = document.querySelector(".button-prev");
const nextButton = document.querySelector(".button-next");
const dots = document.querySelectorAll(".dot");

let position = 0;
let dotIndex = 0;

// Функция установки активной пуговки

const activeDot = (index) => {
    dots.forEach((item) => {
        item.classList.remove("active")
    })

    dots[index].classList.add("active");
}

// Деативизация кнопок в пограничных значениях

const disablingNextAndPrevButtons = (index) => {
    if (index === 0) {
        prevButton.setAttribute("disabled", "");
        nextButton.removeAttribute("disabled");
    } else if (index === 4) {
        nextButton.setAttribute("disabled", "");
        prevButton.removeAttribute("disabled");
    } else {
        nextButton.removeAttribute("disabled");
        prevButton.removeAttribute("disabled");
    }
}

// Переключение на кнопку некст

const nextSlide = () => {
    if (position > (-(dots.length - 1) * 200)) {
        position -= 200;
        dotIndex = dotIndex +1;
    } else {
        position = 0;
        dotIndex = 0;
    }

    sliderLine.style.left = position + "px";

    activeDot(dotIndex);

    disablingNextAndPrevButtons(dotIndex);
}

// Переключение на кнопку прев

const prevSlide = () => {
    if (position < 0) {
        position +=200;
        dotIndex = dotIndex - 1;
    } else {
        position = (-(dots.length - 1) * 200);
        dotIndex = dots.length - 1;
    }

    sliderLine.style.left = position + "px";

    activeDot(dotIndex);

    disablingNextAndPrevButtons(dotIndex);
}

// Переключение пуговками

dots.forEach(
    (item, index) => {
        item.addEventListener("click", () => {
            position = -200 * index;
            sliderLine.style.left = position + "px";

            dotIndex = index;
            activeDot(dotIndex);

            disablingNextAndPrevButtons(dotIndex);
        })
    }
)

nextButton.addEventListener("click", nextSlide);
prevButton.addEventListener("click", prevSlide);
