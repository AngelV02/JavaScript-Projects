
function validateForm() {
    // Get the value of the input field
    const inputVal = document.querySelector('#formGroupExampleInput').value;
  
    // Check if the input field is empty
    if (inputVal === '') {
      // Alert the user
      alert('Please fill out all form fields.');
      // Prevent the form from submitting
      return false;
    }
  }
  
