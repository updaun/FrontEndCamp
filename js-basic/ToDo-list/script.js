const todoInput = document.querySelector("#todo-input");
const todoList = document.querySelector("#todo-list");

const savedTodoList = JSON.parse(localStorage.getItem("saved-items"));
const savedWeatherData = JSON.parse(localStorage.getItem("saved-weather"));

const createTodo = function (storageData) {
  let todoContents = todoInput.value;
  if (storageData) {
    todoContents = storageData.contents;
  }
  const newLi = document.createElement("li");
  const newSpan = document.createElement("span");
  const newBtn = document.createElement("button");

  newSpan.addEventListener("click", () => {
    newLi.classList.toggle("complete");
    saveItemsFn();
  });
  newBtn.addEventListener("click", () => {
    newLi.classList.toggle("complete");
    saveItemsFn();
  });
  newLi.addEventListener("dblclick", () => {
    newLi.remove();
    saveItemsFn();
  });

  if (storageData?.complete) {
    newLi.classList.add("complete");
  }

  newSpan.textContent = todoContents;
  newLi.appendChild(newBtn);
  newLi.appendChild(newSpan);
  todoList.appendChild(newLi);
  todoInput.value = "";
  saveItemsFn();
};

const keyCodeCheck = function () {
  if (window.event.keyCode === 13 && todoInput.value.trim() !== "") {
    createTodo();
  }
};

const deleteAll = function () {
  const liList = document.querySelectorAll("li");
  for (let li of liList) {
    li.remove();
  }
  saveItemsFn();
};

const saveItemsFn = function () {
  const saveItems = [];

  for (let i = 0; i < todoList.children.length; i++) {
    const todo = todoList.children[i].querySelector("span").textContent;
    const todoObj = {
      contents: todo,
      complete: todoList.children[i].classList.contains("complete"),
    };
    saveItems.push(todoObj);
  }

  //   if (saveItems.length === 0) {
  //     localStorage.removeItem("saved-items");
  //   } else {
  //     localStorage.setItem("saved-items", JSON.stringify(saveItems));
  //   }

  // 삼항 연사자로 변경
  saveItems.length === 0
    ? localStorage.removeItem("saved-items")
    : localStorage.setItem("saved-items", JSON.stringify(saveItems));
};

if (savedTodoList) {
  for (let i = 0; i < savedTodoList.length; i++) {
    createTodo(savedTodoList[i]);
  }
}

const weatherDataActive = function ({ location, weather }) {
  const weatherMainList = [
    "Clear",
    "Clouds",
    "Drizzle",
    "Rain",
    "Snow",
    "Thunderstorm",
  ];
  weather = weatherMainList.includes(weather) ? weather : "Fog";
  const locationNameTag = document.querySelector("#location-name-tag");
  locationNameTag.textContent = location;
  document.body.style.backgroundImage = `url(./images/${weather}.jpg)`;

  if (
    !savedWeatherData ||
    savedWeatherData.location !== location ||
    savedWeatherData.weather !== weather
  ) {
    localStorage.setItem(
      "saved-weather",
      JSON.stringify({ location, weather })
    );
  }
};

const weatherSearch = function ({ latitude, longitude }) {
  fetch(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=acaf80bc178551741d7fb23521c30600`
  )
    .then((res) => {
      return res.json();
    })
    .then((json) => {
      console.log(json.name, json.weather[0].main);
      const weatherData = {
        location: json.name,
        weather: json.weather[0].main,
      };
      weatherDataActive(weatherData);
    })
    .catch((err) => {
      console.error(err);
    });
};

const accessToGeo = function ({ coords }) {
  const { latitude, longitude } = coords;
  // shorthand property
  const positionObj = {
    latitude,
    longitude,
  };
  weatherSearch(positionObj);
};

const askForLocation = function () {
  navigator.geolocation.getCurrentPosition(accessToGeo, (err) => {
    console.log(err);
  });
};

askForLocation();

if (savedWeatherData) {
  weatherDataActive(savedWeatherData);
}
