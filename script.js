document.addEventListener('DOMContentLoaded', function () {
    const form = document.getElementById('carForm');
    const submitButton = document.getElementById('submit-button');

    submitButton.addEventListener('click', function () {
        const formData = new FormData(form);

        const carOptions = Array.from(formData.getAll('car_options'));

       
        console.log('Selected Car Options:', carOptions);

       
        fetch('your_server_endpoint_url', {
            method: 'POST',
            body: formData
        })
        .then(response => {
            if (response.ok) {

                alert('Form submitted successfully!');

            } else {

                alert('Error submitting the form.');
            }
        })
        .catch(error => {

            alert('Network error. Please try again.');
        });
    });
});
