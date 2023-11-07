document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('feedback');
    const submitButton = document.querySelector('.btn__feedback__submit');

    form.addEventListener('submit', function (event) {
        let isValid = true;

        // Checking required fields
        const requiredFields = document.querySelectorAll('[required]');
        requiredFields.forEach((field) => {
            if (!field.value.trim()) {
                isValid = false;
                const fieldName = field.getAttribute('name');
                const errorElement = document.getElementById(`${fieldName}-error`);
                errorElement.style.display = 'block';

                field.value = 'Це поле обов\'язкове';
                field.style.color = 'red'; 
                event.preventDefault(); 
            } else {
                const fieldName = field.getAttribute('name');
                const errorElement = document.getElementById(`${fieldName}-error`);
                errorElement.style.display = 'none';
            }
        });

        // Showing and hiding eror messages
        const errorMessage = document.getElementById('error-message');
        if (!isValid) {
            errorMessage.style.display = 'block';
            event.preventDefault(); 
        } else {
            errorMessage.style.display = 'none';
        }
    });

    // Add an event handler to clear the error text when the input field is clicked
    const inputFields = document.querySelectorAll('[required]');
    inputFields.forEach((field) => {
        field.addEventListener('click', function () {
            const fieldName = field.getAttribute('name');
            const errorElement = document.getElementById(`${fieldName}-error`);
            errorElement.style.display = 'none';
            if (field.value === 'Це поле обов\'язкове') {
                field.value = '';
                field.style.color = ''; 
            }
        });
    });
    $(document).ready(function () {
        // Ініціалізація Slick Slider
        $(".single-item").slick({
          dots: true,
          infinite: true,
          speed: 500,
          slidesToShow: 1,
          slidesToScroll: 1,
          fade: true,
          autoplay: true,
          autoplaySpeed: 4000,
        });
      
        // Обробник для кнопки "Previous"
        $(".prev-slide").on("click", function () {
          $(".single-item").slick("slickPrev");
        });
      
        // Обробник для кнопки "Next"
        $(".next-slide").on("click", function () {
          $(".single-item").slick("slickNext");
        });
    });
});    