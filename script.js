// Time array
var timeArray = {
    "9AM": "", 
    "10AM": "",
    "11AM": "",
    "12PM": "",
    "1PM": "",
    "2PM": "",
    "3PM": "",
    "4PM": "",
    "5PM": "",
};

// Initializes upon page opening
$(document).ready(function() {
    console.log("Let's begin!");

    // Displays the current day at the bottom of the header
    $('#currentDay').text(moment().format('LL'));
    console.log("Date has been pushed.");

    // Changes timeblock colors
    function timeblockColorSet() {
        console.log("Initializing timeblockColorSet function.");
        

    }
});