const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");
const savedDate = localStorage.getItem("saved-date");
const intervalIdArr = [];

container.style.display = "none";
messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요.</h3>";

const dateFormMaker = function () {
  let inputYear = document.querySelector("#target-year-input").value;
  let inputMonth = document.querySelector("#target-month-input").value;
  let inputDate = document.querySelector("#target-date-input").value;

  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;

  return dateFormat;
};

const counterMaker = function (data) {
  if (data !== savedDate) {
    localStorage.setItem("saved-date", data);
  }
  const nowDate = new Date();
  const targetDate = new Date(data).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;
  if (remaining === 0 || remaining < 0) {
    console.log("타이머가 종료되었습니다.");
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  } else if (isNaN(remaining)) {
    console.log("유효한 시간대가 아닙니다.");
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
    messageContainer.style.display = "flex";
    setClearInterval();
    return;
  }

  const remainingObj = {
    remainingDate: Math.floor(remaining / 3600 / 24),
    remainingHour: Math.floor((remaining / 3600) % 24),
    remainingMinute: Math.floor((remaining / 60) % 60),
    remainingSecond: Math.floor(remaining % 60),
  };

  const documentArr = ["days", "hours", "minutes", "seconds"];

  const timeKeys = Object.keys(remainingObj);

  const format = function (time) {
    if (time < 10) {
      return `0${time}`;
    }
    return time;
  };

  let i = 0;
  for (let tag of documentArr) {
    const remainingTime = format(remainingObj[timeKeys[i]]);
    document.getElementById(tag).textContent = remainingTime;
    i++;
  }

  // const documentObj = {
  //   days: document.getElementById("days"),
  //   hours: document.getElementById("hours"),
  //   minutes: document.getElementById("minutes"),
  //   seconds: document.getElementById("seconds"),
  // };

  // let i = 0;
  // for (let key in documentObj) {
  //   documentObj[key].textContent = remainingObj[timeKeys[i]];
  //   // i = i + 1;
  //   i++;
  // }

  // const docKeys = Object.keys(documentObj);
  // for (let i = 0; i < timeKeys.length; i = i + 1) {
  //   documentObj[docKeys[i]].textContent = remainingObj[timeKeys[i]];
  // }

  // documentObj.days.textContent = remainingObj.remainingDate;
  // documentObj.hours.textContent = remainingObj.remainingHour;
  // documentObj.minutes.textContent = remainingObj.remainingMinute;
  // documentObj.seconds.textContent = remainingObj.remainingSecond;
};

const starter = function (targetDateInput) {
  if (!targetDateInput) {
    targetDateInput = dateFormMaker();
  }
  container.style.display = "flex";
  messageContainer.style.display = "none";
  setClearInterval();
  counterMaker(targetDateInput);
  const intervalId = setInterval(() => {
    counterMaker(targetDateInput);
  }, 1000);
  intervalIdArr.push(intervalId);
  // console.log(intervalIdArr);
};

const setClearInterval = function () {
  localStorage.removeItem("saved-date");
  for (let i = 0; i < intervalIdArr.length; i++) {
    clearInterval(intervalIdArr[i]);
  }
  intervalIdArr.length = 0;
};

const resetTimer = function () {
  container.style.display = "none";
  messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요.</h3>";
  messageContainer.style.display = "flex";
  setClearInterval();
};

if (savedDate) {
  starter(savedDate);
} else {
  container.style.display = "none";
  messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요.</h3>";
}
