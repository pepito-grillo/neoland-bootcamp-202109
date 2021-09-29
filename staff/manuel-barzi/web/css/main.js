var darkLightButton = document.getElementById('switch')
var registerPanel = document.getElementById('register')

var darkLightStatus = 'light'

darkLightButton.onclick = function() {
    if (darkLightStatus === 'light') {
        darkLightStatus = 'dark'

        darkLightButton.innerText = '🌞'

        registerPanel.classList.remove('panel--light')
        registerPanel.classList.add('panel--dark')
    } else {
        darkLightStatus = 'light'

        darkLightButton.innerText = '🌚'

        registerPanel.classList.remove('panel--dark')
        registerPanel.classList.add('panel--light')
    }
}

