export default function StickyMenu(selector = '.header-area') {
    document.addEventListener('scroll', () => {
        const element = document.querySelector(selector);
        if (element) {
            if (document.body.scrollTop > 40 || document.documentElement.scrollTop > 40) {
                element.classList.add('menu-fixed');
            } else {
                element.classList.remove('menu-fixed');
            }
        }
    });
}
