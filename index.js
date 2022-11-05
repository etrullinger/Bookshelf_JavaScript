/** Separate JS file for registration page/landing page. */

/** checkPassword event occurs when user releases key while typing in the Password
Re-enter input box. It sets attribute pattern of second password input tag to the value 
of the first password input which is required in order to submit registration. The password
must also be minimum 8 characters. If passwords do not match, the font color and input box border
are set to red. If the passwords do match, they are set to green. The rest of the input fields must
contain at least one character in order to submit registration. Once registration is completed, 
user is redirected to the Bookshelf page. */
function checkPassword() {
    var passwordInput = document.querySelector('#passwordInput');
    var passwordRepeatInput = document.querySelector('#passwordRepeatInput');
    passwordRepeatInput.setAttribute('pattern', `${passwordInput.value}`);
    if (passwordRepeatInput.value === passwordInput.value) {
        passwordRepeatInput.style.color = 'green';
        passwordRepeatInput.style.border = '2px solid green';
    } else {
        passwordRepeatInput.style.color = 'red';
        passwordRepeatInput.style.border = '2px solid red';
    }
}

/** Harry Potter themed audio added to registration page. 
Set to loop once played. Play/pause and mute/unmute buttons
added to top left of page and event listeners added to them. 
addEventListener used to create an autoplay effect upon click event 
on one of the input fields. */
const music = document.querySelector('#harrypotteraudio');
const playPause = document.querySelector('#playPause');
const muteUnmute = document.querySelector('#muteUnmute');
const inputFields = document.querySelectorAll('.registrationField');


for (let i = 0; i < inputFields.length; i++) {
    inputFields[i].addEventListener('click', function autoPlay() {
        music.play();
        playPause.textContent = 'Pause';
        for (let i = 0; i < inputFields.length; i++) {
            inputFields.removeEventListener('click', autoPlay)
        };
    });
}

playPause.addEventListener('click', (event) => {
    if (playPause.textContent === 'Play') {
        playPause.textContent = 'Pause';
        music.play();
    } else {
        playPause.textContent = 'Play';
        music.pause();
    }
})

muteUnmute.addEventListener('click', (event) => {
    if (muteUnmute.textContent === 'Mute') {
        muteUnmute.textContent = 'Unmute';
    } else {
        muteUnmute.textContent = 'Mute';
    }
})