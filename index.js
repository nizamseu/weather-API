const API_key = "78fb9dae76bd04cfe5ba7aca206fa506";

search = () => {
  const inputField = document.getElementById("inputField");
  const inputValue = inputField.value;

  inputField.value = "";
  if (inputValue !== "") {
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${inputValue}&appid=${API_key}`;

    fetch(url)
      .then((res) => res.json())
      .then((data) => displayWeather(data));
  }
};

// loadData = ()=> {

//     const url = `https://api.openweathermap.org/data/2.5/weather?q=comilla&appid=${API_key}`

//     fetch(url)
//     .then(res=>res.json())
//     .then(data=> displayWeather(data))

// }
// loadData();

displayWeather = (data) => {
  if (data.name !== undefined) {
    const city = document.getElementById("city");
    const tempp = document.getElementById("temp");
    const tempType = document.getElementById("tempType");
    const imgIcon = document.getElementById("icon");

    const curruntTemp = data?.main?.temp - 273.15;
    const temp = curruntTemp.toFixed(2);

    tempp.innerText = temp;
    city.innerText = data.name;
    tempType.innerText = data.weather[0].main;
    const url = `http://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
    imgIcon.setAttribute("src", url);
    console.log(temp);
  }
};
