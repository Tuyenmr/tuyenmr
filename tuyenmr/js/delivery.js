let username = document.querySelector("#username");
let phone = document.querySelector("#phone");
let city = document.querySelector("#city");
let district = document.querySelector("#district");
let address = document.querySelector("#address");
let form = document.querySelector("#form");
console.log(form);
function showError(input, message) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.add("err");
  small.innerText = message;
}
function showSuccess(input) {
  let parent = input.parentElement;
  let small = parent.querySelector("small");
  parent.classList.remove("err");
  small.innerText = "";
}
function checkrong(listInput) {
  let isEmptyErr = false;
  listInput.forEach((input) => {
    input.value = input.value.trim();
    if (!input.value) {
      isEmptyErr = true;
      showError(input, "ko dc de trong");
    } else {
      showSuccess(input);
    }
  });
  return isEmptyErr;
}
function chekcEmail(input) {
  var regex =
    /^([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)@([0-9a-zA-Z]([-_\\.]*[0-9a-zA-Z]+)*)[\\.]([a-zA-Z]{2,9})$/;
  input.value = input.value.trim();

  let isEmalErr = !regex.test(input.value);
  if (regex.test(input.value)) {
    showSuccess(input);
  } else {
    showError(input, "Email Invalid");
  }
  return isEmalErr;
}
function checkLength(input, max, min) {
  input.value = input.value.trim();
  if (input.value.length < min) {
    showError(input, `phai co it nhat ${min} ky tu`);
    return true;
  }
  if (input.value.length > min) {
    showError(input, `khong dc qua  ${max} ky tu`);
    return true;
  }
  return false;
}
form.addEventListener("submit", function (e) {
  e.preventDefault();
  let isrong = checkrong([username, phone, city, district, address]);
  let isEmalErr = chekcEmail(phone);
  let isUsernamelengtErr = checkLength(username, 10, 3);
  let isCitylengtErr = checkLength(city, 10, 3);
  let isdistrictlengtErr = checkLength(district, 10, 3);
  let isaddresslengtErr = checkLength(address, 10, 3);
});
