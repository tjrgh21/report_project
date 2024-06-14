const API_KEY = 'de7a849d0989c517807ff0dc553f051e'

const button = document.querySelector('.button');
const tempSection = document.querySelector('.temperature');
const feels_like = document.querySelector('.feels_like');
const placeSection = document.querySelector('.place');
const wind_speed = document.querySelector('.wind');
const humidity = document.querySelector('.humidity');
const descSection = document.querySelector('.description');
const iconSection = document.querySelector('.icon');

button.addEventListener('click', () => {
    console.log(button);
});

button.addEventListener('click', () => {
    navigator.geolocation.getCurrentPosition(success, fail);
});

const success = (position) => {
    const latitude = position.coords.latitude;
    const longitude = position.coords.longitude;

    getWeather(latitude, longitude);
};

const fail = () => {
    alert("좌표를 받아올 수 없음");
}

const getWeather = (lat, lon) => {
    fetch(
        `https://api.openweathermap.org/data/2.5/weather?lat=${lat}&lon=${lon}&appid=${API_KEY}&units=metric&lang=kr`
    )
    .then((response) => {
        return response.json();
    })

    .then((json) => {
        const temperature = json.main.temp;
        const feel = json.main.feels_like;
        const place = json.name;
        const wind = json.wind.speed;
        const humiditys = json.main.humidity;
        const description = json.weather[0].description;
        const icon = json.weather[0].icon;
        const iconURL = `http://openweathermap.org/img/wn/${icon}@2x.png`;

        tempSection.innerText = temperature+`°C`;
        feels_like.innerText = feel+`°C`;
        placeSection.innerText = place;
        wind_speed.innerText = wind+` m/s`;
        humidity.innerText = humiditys+`%`;
        descSection.innerText = description;
        iconSection.setAttribute('src', iconURL);

        console.log(json);
    })

    .catch((error) => {
        alert(error);
    });
}


function update(){
    alert('업데이트가 필요합니다.');
}