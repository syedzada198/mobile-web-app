$(document).on("pagecreate", function() {
    $("#myform").on("submit", function(event) {
        event.preventDefault(); 
        if (this.checkValidity()) { 
            $("#popup").popup("open", {
                positionTo: "window",
                transition: "pop"
            });
        }
    });
});


$(document).ready(function() {
    var images = ["hostel1.jpg", "hostel2.jpg", "hostel3.jpg", "hostel4.jpg"];
    var imageRow = $(".image-row");
    $.each(images, function(index, value) {
        var imageWrapper = $("<div>").addClass("image-wrapper");
        var image = $("<img>").attr("src", "assets/img/" + value).attr("alt", "error");
        imageWrapper.append(image);
        imageRow.append(imageWrapper);
    });
    var accommodation = [
        "1. <strong>Room:</strong> Experience comfort and convenience in our cozy hostel rooms.",
        "2. <strong>Wifi:</strong> We're committed to providing our students with top-notch WiFi connectivity for seamless learning experiences."
    ];
    var accoP = $(".acco-p");
    $.each(accommodation, function(index, value) {
        var paragraph = $("<p>").html(value);
        accoP.append(paragraph);
    });
});
