document.addEventListener("DOMContentLoaded", function() {
    // Select the elements
    var wofButton = document.getElementById("wof_button");
    var wofModal = document.getElementById("wof_modal");
    var wofClose = document.getElementById("wof_close");

    // Check if the elements exist
    if (wofButton && wofModal && wofClose) {
        // Add the event listeners
        wofButton.addEventListener("click", function() {
            wofModal.style.display = "block";
        });
        wofClose.addEventListener("click", function() {
            wofModal.style.display = "none";
        });
    }
});
