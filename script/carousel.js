const testimonials = document.querySelector('.testimonials');
const scroller = testimonials.querySelector('.scroller');
const nextBtn = testimonials.querySelector('.btn-carousel.next');
const prevBtn = testimonials.querySelector('.btn-carousel.prev');
const itemWidth = testimonials.querySelector('.item-carousel').clientWidth;

nextBtn.addEventListener('click', scrollToNextItem);
prevBtn.addEventListener('click', scrollToPrevItem);

function scrollToNextItem() {
    if (scroller.scrollLeft < (scroller.scrollWidth - itemWidth))

        scroller.scrollBy({ left: itemWidth, top: 0, behavior: 'smooth' });
    else
        scroller.scrollTo({ left: 0, top: 0, behavior: 'smooth' });
}
function scrollToPrevItem() {
    if (scroller.scrollLeft != 0)

        scroller.scrollBy({ left: -itemWidth, top: 0, behavior: 'smooth' });
    else

        scroller.scrollTo({ left: scroller.scrollWidth, top: 0, behavior: 'smooth' });
}