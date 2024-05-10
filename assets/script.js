// function submitForm() {
//     document.getElementById("popup").style.display = "block";
//   }

// $(document).ready(function () {
//     var images = ["hostel1.jpg", "hostel2.jpg", "hostel3.jpg", "hostel4.jpg"];
//     var imageRow = $(".image-row");
//     $.each(images, function (index, value) {
//         var imageWrapper = $("<div>").addClass("image-wrapper");
//         var image = $("<img>").attr("src", "assets/img/" + value).attr("alt", "error");
//         imageWrapper.append(image);
//         imageRow.append(imageWrapper);
//     });
//     var accommodation = [
//         "1. <strong>Hostel Accommodation:</strong> Hostel accommodation comprises budget-friendly lodging options that typically feature dormitory-style rooms with shared facilities such as bathrooms and communal areas. They are popular among backpackers and budget travelers seeking affordable accommodation.",
//         "2. <strong>Resort Accommodation:</strong> Resort accommodation refers to expansive properties offering a wide range of amenities and recreational facilities, such as swimming pools, golf courses, spas, and entertainment options. Resorts are designed to provide guests with a comprehensive vacation experience, often situated in scenic locations like beaches or mountains.",
//         "3. <strong>Bed and Breakfast (B&B) Accommodation:</strong>  Bed and Breakfast accommodation involves staying in a private home or small inn where guests are provided with overnight accommodation and breakfast the following morning. B&Bs offer a personalized experience with hosts often sharing local knowledge and hospitality.",
//         "4. <strong>Wifi:</strong> We're committed to providing our students with top-notch WiFi connectivity for seamless learning experiences.",
//         "5. <strong>Room:</strong> Experience comfort and convenience in our cozy hostel rooms.",
//     ];
//     var accoP = $(".acco-p");
//     $.each(accommodation, function (index, value) {
//         var paragraph = $("<p>").html(value);
//         accoP.append(paragraph);
//     });
// });
// addRequiredAttribute();

// function validateForm() {
//     var name = document.getElementById("name").value;
//     var email = document.getElementById("email").value;
//     var subject = document.getElementById("subject").value;
//     var message = document.getElementById("message").value;

//     if (name === "" || email === "" || subject === "" || message === "") {
//         return false;
//     }
//     function isValidPhoneNumber(phoneNumber) {
//         var phoneRegex = /^\+\d{10,}$/;
//         return phoneRegex.test(phoneNumber);
//     }
//     function isValidEmail(email) {
//         var emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
//         return emailRegex.test(email);
//     }

//     document.getElementById("successMessage").style.display = "block";

//     return true;

// }




