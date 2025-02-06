// form validation
const authform = document.getElementById("authform");
const name = document.getElementById("name");
const email = document.getElementById("email");
const phoneNumber = document.getElementById("phoneNumber");
const massage = document.getElementById("massage");
const errorMassage = document.getElementById("error");
const successMassage = document.getElementById("succesMassage");


authform.addEventListener("submit", (event) => {
  event.preventDefault();

  name.addEventListener("input", clearError)
  email.addEventListener("input", clearError)
  phoneNumber.addEventListener("input", clearError)

  if(name.value.trim() === ''){
    errorMassage.textContent = 'Please enter your name';
    name.focus();
    return
  } if(email.value.trim() === ''){
    errorMassage.textContent = 'Please enter a email address';
    email.focus();
    return
  } if(phoneNumber.value.trim() === ''){
    errorMassage.textContent = 'Please enter a phone number';
    phoneNumber.focus();
    return
  }if(massage.value.trim() === ''){
    errorMassage.textContent = 'Please enter your massage';
    massage.focus();
    return
  }else{
    successMassage.textContent = 'Your massage was successfully applied';
  }

  name.value = '';
  email.value = '';
  phoneNumber.value = '';
  massage.value = '';
  clearError()
});

massage.addEventListener('input', (e) => {
    if (massage.value.length > 250) {
      errorMassage.textContent = "Message cannot be longer than 250 characters.";
      e.target.value = e.target.value.slice(0, 250);
      return;
    } else {
      errorMassage.textContent = "";
    }
})

function clearError() {
    errorMassage.textContent = '';
}