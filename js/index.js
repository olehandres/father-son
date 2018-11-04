document.querySelector('.form input[type=submit]').addEventListener('click', submitForm);

function submitForm (e) {
    e.preventDefault();
    const xhr = new XMLHttpRequest();
    xhr.onreadystatechange = function() {
        if (xhr.readyState === 4 && xhr.status === 200) {
            document.querySelector('.form').innerHTML = '<h2>Thanks for the reservation!</h2>';
            } else if (xhr.readyState === 4 && xhr.status !== 200) {
              document.querySelector('.form').innerHTML += '<h2>Error, please try again!</h2>';
            }
        }
        xhr.open('POST', 'reservation.php',true);
        const form = document.querySelector('.form');
        const data = new FormData(form);
        xhr.send(data);
    
}