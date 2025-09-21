function getFormvalue() {
    //Write your code here
  event.preventDefault();

    // Get the values from the first name and last name input fields
    const firstName = document.getElementById("fname").value;
    const lastName = document.getElementById("lname").value;

    // Concatenate the names and display the full name in an alert
    alert(`${firstName} ${lastName}`);
}