import '../css/style.css';

export const executeScript = () => {
  const header = document.querySelector('.main-header');
  header.style.backgroundColor = `rgba(11, 100, 119, 1)`;

  window.addEventListener('scroll', () => {
    const scrollPosition = window.scrollY;

    if (scrollPosition < 60) {
      header.style.backgroundColor = `rgba(11, 100, 119, 1)`;
    } else {
      if (scrollPosition < 300) {
        const opacity = Math.min(scrollPosition / 500, 1);
        header.style.backgroundColor = `rgba(33, 58, 87, ${opacity})`;
      } else if (scrollPosition >= 300) {
        const opacity = Math.min(300 / 300, 1);
        header.style.backgroundColor = `rgba(33, 58, 87, ${opacity})`;
      }
    }
  });
}