let accordian = document.getElementsByClassName("FAQ__title");

for (let i = 0; i < accordian.length; i++) {
  accordian[i].addEventListener("click", function () {
    if (this.childNodes[1].classList.contains("fa-plus")) {
      this.childNodes[1].classList.remove("fa-plus");
      this.childNodes[1].classList.add("fa-times");
    } else {
      this.childNodes[1].classList.remove("fa-times");
      this.childNodes[1].classList.add("fa-plus");
    }

    let content = this.nextElementSibling;
    if (content.style.maxHeight) {
      content.style.maxHeight = null;
    } else {
      content.style.maxHeight = content.scrollHeight + "px";
    }
  });
}



document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.getElementById('inputtext');
  const errorMsg = document.getElementById('error-msg');
  const errorText = document.getElementById('error-text');

  emailInput.addEventListener('input', function() {
      const emailValue = emailInput.value;
      if (!emailValue) {
          errorText.textContent = 'Email is required.';
          errorMsg.style.display = 'flex';
      } else if (!validateEmail(emailValue)) {
          errorText.textContent = 'Please enter a valid email address.';
          errorMsg.style.display = 'flex';
      } else {
          errorMsg.style.display = 'none';
      }
  });

  function validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
  }
});



document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.getElementById('email-input');
  const errorMsg = document.getElementById('error-msg');
  const errorText = document.getElementById('error-text');

  emailInput.addEventListener('input', function() {
      const emailValue = emailInput.value;
      if (!emailValue) {
          errorText.textContent = 'Email is required.';
          errorMsg.style.display = 'flex';
      } else if (!validateEmail(emailValue)) {
          errorText.textContent = 'Please enter a valid email address.';
          errorMsg.style.display = 'flex';
      } else {
          errorMsg.style.display = 'none';
      }
  });

  function validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
  }
});


document.addEventListener('DOMContentLoaded', function() {
  const emailInput = document.getElementById('email-input2');
  const errorMsg = document.getElementById('error-msg2');
  const errorText = document.getElementById('error-text2');

  emailInput.addEventListener('input', function() {
      const emailValue = emailInput.value;
      if (!emailValue) {
          errorText.textContent = 'Email is required.';
          errorMsg.style.display = 'flex';
      } else if (!validateEmail(emailValue)) {
          errorText.textContent = 'Please enter a valid email address.';
          errorMsg.style.display = 'flex';
      } else {
          errorMsg.style.display = 'none';
      }
  });

  function validateEmail(email) {
      const re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
      return re.test(email);
  }
});