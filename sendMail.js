(function () {
    // https://dashboard.emailjs.com/admin/account
    emailjs.init("FFo2q6VxrmCTr4eVp");
  })();
  function sendMail() {
    let name = document.getElementById("name").value;
    let email = document.getElementById("email").value;
    let phone = document.getElementById("phone").value;
    let country = document.getElementById("Country").value;
    let arrivalDate = document.getElementById("Arrival").value;
    let departureDate = document.getElementById("Departure").value;
    let numberOfAdults = document.getElementById("Adults").value;
    let numberOfChildren = document.getElementById("Children").value;
    let comments = document.getElementById("Comments").value;
  
    if (name === "" || email === "" || phone === "" || country === "" || arrivalDate === "" || departureDate === "" || numberOfAdults === "" || numberOfChildren === "" || comments === "") {
      window.alert("Fill all the details.");
    } else {
  
      let contactParams = {
        from_name: name,
        email: email,
        phNumber: phone,
        country: country,
        arrivalDate: arrivalDate,
        departureDate: departureDate,
        adults: numberOfAdults,
        children: numberOfChildren,
        comments: comments
      };
      emailjs
        .send("service_1bpenmo", "template_n36s0z5", contactParams)
        .then(function (res) {});
    }
  }