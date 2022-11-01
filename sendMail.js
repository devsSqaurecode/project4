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
  
    if (name === "" || email === "" || phone === "" || country === "" || arrivalDate === "" || departureDate === "" || numberOfAdults === "none" || numberOfChildren === "none") {
      console.log("Formed not filled completely. Not sending any mail")
      window.alert("Please fill the entire form.")
    } else {
      if(comments === "") comments = "No comments from the sender"
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
        console.log(contactParams)
        document.getElementById("name").value = ""
        document.getElementById("email").value = ""
        document.getElementById("phone").value = ""
        document.getElementById("Country").value = ""
        document.getElementById("Arrival").value = ""
        document.getElementById("Departure").value = ""
        document.getElementById("Adults").value = ""
        document.getElementById("Children").value = ""
        document.getElementById("Comments").value = ""
    
    }
  }