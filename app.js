
function resetForm() {
    document.getElementById("userForm").reset();
  }

  document.getElementById("userForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    var firstName = document.getElementById("firstName").value;
  var lastName = document.getElementById("lastName").value;
  var email = document.getElementById("email").value;
  var phone = document.getElementById("phone").value;
  var dob = document.getElementById("dob").value;
  var gender = document.getElementById("gender").value;
  var address = document.getElementById("address").value;

    let card = `
    
      <div class="card mb-3 fixed-height-card d-inline m-2 " data-aos="fade-down"
      data-aos-easing="linear"
      data-aos-duration="1500" >
      <img src="img/blank-profile-picture-973460_640.webp" class="card-img-top fixed-height-img "  style="height: 200px;"alt="Product Image">
        <div class="card-body">
          <h5 class="card-title">user info</h5>
          <p class="card-text">First Name:${firstName}</p>
          <p class="card-text">last Name:${lastName}</p>
          <p class="card-text">Email: ${email}</p>
          <p class="card-text">Phone: ${phone}</p>
          <p class="card-text">Date of Birth: ${dob}</p>
          <p class="card-text">Gender: ${gender}</p>
          <p class="card-text">Address: ${address}</p>
        </div>
      </div>
      
    `;

    document.getElementById("resultCards").insertAdjacentHTML("beforeend", card);
    resetForm();
  });
