import { tns } from './tiny-slider.min.js';

const slider = tns({
    container: '.carousel__inner',
    items: 1,
    slideBy: 'page',
    autoplay: false,
    controls: false,
    nav: false
});

document.querySelector('.prev').addEventListener('click', () => slider.goTo('prev'));
document.querySelector('.next').addEventListener('click', () => slider.goTo('next'));


function tabs() {
    const tabs = document.querySelectorAll('.catalog__tab'),
        contentTabs = document.querySelectorAll('.catalog__content');

    function removeClassActive(element, classActive) {
        element.forEach(item => {
            item.classList.remove(classActive);
        });
    }

    removeClassActive(tabs, 'catalog__tab_active');
    removeClassActive(contentTabs, 'catalog__content_active');


    tabs[0].classList.add('catalog__tab_active');
    contentTabs[0].classList.add('catalog__content_active');


    tabs.forEach((item, i) => {

        item.addEventListener('click', (e) => {
            removeClassActive(tabs, 'catalog__tab_active');
            removeClassActive(contentTabs, 'catalog__content_active');

            if (e.target.parentElement == item) {
                item.classList.add('catalog__tab_active');
                contentTabs[i].classList.add('catalog__content_active');
            }

        });
    });

}

tabs();

function toggleSlideJS(itemsClass) {
    const
        links = document.querySelectorAll(itemsClass),
        content = document.querySelectorAll('.catalog-item__content'),
        list = document.querySelectorAll('.catalog-item__list');


    links.forEach((link, i) => {
        link.addEventListener('click', (e) => {
            e.preventDefault();
            if (e.target == link) {
                content[i].classList.toggle('catalog-item__content_active');
                list[i].classList.toggle('catalog-item__list_active');
            }
        });
    });


}
toggleSlideJS('.catalog-item__link');
toggleSlideJS('.catalog-item__back');
