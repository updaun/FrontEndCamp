const messageContainer = document.querySelector("#d-day-message");
const container = document.querySelector("#d-day-container");

container.style.display = "none";
messageContainer.innerHTML = "<h3>D-Day를 입력해 주세요.</h3>";

const dateFormMaker = function () {
  let inputYear = document.querySelector("#target-year-input").value;
  let inputMonth = document.querySelector("#target-month-input").value;
  let inputDate = document.querySelector("#target-date-input").value;

  const dateFormat = `${inputYear}-${inputMonth}-${inputDate}`;

  return dateFormat;
};

const counterMaker = function () {
  const targetDateInput = dateFormMaker();
  const nowDate = new Date();
  const targetDate = new Date(targetDateInput).setHours(0, 0, 0, 0);
  const remaining = (targetDate - nowDate) / 1000;
  if (remaining === 0 || remaining < 0) {
    console.log("타이머가 종료되었습니다.");
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>타이머가 종료되었습니다.</h3>";
    messageContainer.style.display = "flex";
    return;
  } else if (isNaN(remaining)) {
    console.log("유효한 시간대가 아닙니다.");
    container.style.display = "none";
    messageContainer.innerHTML = "<h3>유효한 시간대가 아닙니다.</h3>";
    messageContainer.style.display = "flex";
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

  let i = 0;
  for (let tag of documentArr) {
    document.getElementById(tag).textContent = remainingObj[timeKeys[i]];
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

const starter = function () {
  container.style.display = "flex";
  messageContainer.style.display = "none";
  counterMaker();
  setInterval(counterMaker, 1000);
  // for (let i = 0; i < 100; i++) {
  //   setTimeout(counterMaker, 1000 * i);
  // }
};
