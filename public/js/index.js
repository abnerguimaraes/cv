var linkedIn = document.getElementById('lknLinked');
var mail     = document.getElementById('lknMail');
var langText = document.getElementById('langText');
var langImg  = document.getElementById('langImg');
var cvIng    = document.getElementById('contentIngles');
var cvPort   = document.getElementById('contentPortugues');

linkedIn.addEventListener('click', function(){
    window.open('https://www.linkedin.com/in/abnerguimaraes/', '_blank')
});

mail.addEventListener('click', function(){
    window.open('mailto:guimaraesabner@gmail.com', '_blank');
});

langText.addEventListener('click', function(){
    showHide(langText.getAttribute('lang'));
});

langImg.addEventListener('click', function(){
    showHide(langImg.getAttribute('lang'));
});

function showHide(lang) {
    if (lang == 'port') {
        langText.innerHTML = 'Eng';
        langText.setAttribute('lang', 'ingl');
        langImg.setAttribute('src', './img/english.png');
        langImg.setAttribute('lang', 'ingl');
        cvPort.style.display = 'none';
        cvIng.style.display = 'flex';

    } else {
        langText.innerHTML = 'Port';
        langText.setAttribute('lang', 'port');
        langImg.setAttribute('src', './img/portugues.png');
        langImg.setAttribute('lang', 'port');
        cvPort.style.display = 'flex';
        cvIng.style.display = 'none';
    }
}