var landingContainer = document.querySelector('.landing')
var signupContainer = document.querySelector('.signup')

var signupButton = landingContainer.querySelectorAll('button')[1]

signupButton.onclick = function() {
    landingContainer.classList.add('container--off')

    signupContainer.classList.remove('container--off')
}