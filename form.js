window.onload = setForm;

function setForm() {
   document.forms[0].onsubmit = function() {
      if (this.checkValidity()) alert("Thank you for taking the time to review our company.");
      return false;
   }
}