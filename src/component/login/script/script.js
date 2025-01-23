import '../css/style.css';

export const executeScript = () => {
  $(document).ready(function() {
    $('.card-fade').addClass('show');
  });
}