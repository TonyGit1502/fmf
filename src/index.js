import './styles.scss'

const switcherIds = ['img1', 'img2', 'img3', 'img4', 'img5', 'img6', 'img7', 'img8', 'img9'];
const slideActionIds = ['prev', 'next'];

let currentSlideId = 1;
let currentSlide = document.querySelector(`#slide-${currentSlideId}`);
let currentSlideSwitch = document.querySelector(`#img${currentSlideId}`);

init();

function init() {
    currentSlideSwitch.classList.add('slide-switch-active');

    slideActionIds.forEach((action) => {
        const el = document.getElementById(action);

        if (action === 'prev') {
           el.addEventListener('click', previousSlide.bind(null, action));
        } else {
           el.addEventListener('click', nextSlide.bind(null, action));
        }
    });

    setHandlers(switcherIds, selectSlide);
}

function setHandlers(collection, callback) {
    collection.forEach((item) => {
        const element = document.getElementById(item);

        element.addEventListener('click', callback.bind(null, item));
    })
}


function selectSlide(slideName) {
    const slideId = parseInt(slideName.split("img").pop());
    const foundSlide = document.querySelector(`#slide-${slideId}`);
    const selectedSlideSwitch = document.querySelector(`#img${slideId}`);

    currentSlideId = slideId;

    changeStyles(foundSlide, selectedSlideSwitch);
}

function previousSlide(action) {
    if (currentSlideId === 1 && action === 'prev') {
        return;
    }

    const foundSlide = document.querySelector(`#slide-${currentSlideId - 1}`);
    const selectedSlideSwitch = document.querySelector(`#img${currentSlideId - 1}`);

    currentSlideId -= 1;

    changeStyles(foundSlide, selectedSlideSwitch);
}

function nextSlide(action) {
    if (currentSlideId === switcherIds.length && action === 'next') {
        return;
    }

    const foundSlide = document.querySelector(`#slide-${currentSlideId + 1}`);
    const selectedSlideSwitch = document.querySelector(`#img${currentSlideId + 1}`);

    currentSlideId += 1;

    changeStyles(foundSlide, selectedSlideSwitch);
}


function changeStyles(slide, slideSwitch) {
    currentSlideSwitch.classList.remove('slide-switch-active');
    currentSlide.classList.remove('active');

    currentSlide = slide ;
    currentSlideSwitch = slideSwitch;

    currentSlide.classList.add('active');
    currentSlideSwitch.classList.add('slide-switch-active');
}
