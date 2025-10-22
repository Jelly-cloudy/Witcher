const button = document.getElementById('language');

const surnameEl = document.getElementById('surname');
const nameEl = document.getElementById('name');
const fatherNameEl = document.getElementById('father-name');
const placeEl = document.getElementById('place');

const translations = {
    surname: "Antonova",
    name: "Elizaveta",
    fatherName: "Antonovna",
    place: "St. Petersburg, Russia"
};

let isEnglish = false;

function ChangeLanguage()
{
    if (!isEnglish) {surnameEl.textContent = translations.surname;
        nameEl.textContent = translations.name;
        fatherNameEl.textContent = translations.fatherName;
        placeEl.textContent = translations.place;
        button.textContent = "Русская версия";
        isEnglish = true;}

    else {surnameEl.textContent = "Антонова";
        nameEl.textContent = "Елизавета";
        fatherNameEl.textContent = "Антоновна";
        placeEl.innerHTML = "г. Санкт-Петербург<br>Россия";
        button.textContent = "Английская версия";
        isEnglish = false;}
}

button.addEventListener('click', ChangeLanguage);