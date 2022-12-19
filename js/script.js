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


(function ($) {
    $(function () {

        $('ul.catalog__tabs').on('click', 'li:not(.catalog__tab_active)', function () {
            $(this)
                .addClass('catalog__tab_active').siblings().removeClass('catalog__tab_active')
                .closest('div.container').find('div.catalog__content').removeClass('catalog__content_active').eq($(this).index()).addClass('catalog__content_active');
        });

    });

})(jQuery);


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

// function toggleSlide(item) {
//     $(item).each(function (i) {
//         $(this).on('click', function (e) {
//             e.preventDefault();

//             $('.catalog-item__content').eq(i).toggleClass('catalog-item__content_active');
//             $('.catalog-item__list').eq(i).toggleClass('catalog-item__list_active');


//         });
//     });
// }

// toggleSlide('.catalog-item__link');
// toggleSlide('.catalog-item__back');
