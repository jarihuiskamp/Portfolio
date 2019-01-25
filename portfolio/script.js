let closeModal = document.getElementsByClassName('closeModal');
let images = document.getElementsByClassName('mdImage');
let modal = document.getElementsByClassName('modal');

for(let i = 0; i < images.length; i++) {
    images[i].addEventListener('click', function() {
        modal[i].style.display = 'block';
    });
}

for(let i = 0; i < modal.length; i++){
    closeModal[i].addEventListener('click', function() {
        modal[i].style.display = 'none';
    });
}

