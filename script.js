// Initializes upon page opening
$(document).ready(function() {
    console.log("Let's begin!");

    // Displays the current day at the bottom of the header
    $('#currentDay').text(moment().format('LL'));
    console.log("Date has been pushed.");
});