// Time array for timeblocks
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

    // Save button click listeners
    // 9AM
    $('#btn9').on('click', function() {
        var text9 = $('#9').val();
        localStorage.setItem('#9', text9);
        console.log(localStorage.getItem('#9', text9) + " has been saved to local storage for later use. (9AM)");
    });

    // 10AM
    $('#btn10').on('click', function() {
        var text10 = $('#10').val();
        localStorage.setItem('#10', text10);
        console.log(localStorage.getItem('#10', text10) + " has been saved to local storage for later use. (10AM)");
    });
    
    // 11AM
    $('#btn11').on('click', function() {
        var text11 = $('#11').val();
        localStorage.setItem('#11', text11);
        console.log(localStorage.getItem('#11', text11) + " has been saved to local storage for later use. (11AM)");
    });
    
    // 12PM
    $('#btn12').on('click', function() {
        var text12 = $('#12').val();
        localStorage.setItem('#12', text12);
        console.log(localStorage.getItem('#12', text12) + " has been saved to local storage for later use. (12PM)");
    });
    
    // 1PM
    $('#btn1').on('click', function() {
        var text1 = $('#1').val();
        localStorage.setItem('#1', text1);
        console.log(localStorage.getItem('#1', text1) + " has been saved to local storage for later use. (1PM)");
    });
    
    // 2PM
    $('#btn2').on('click', function() {
        var text2 = $('#2').val();
        localStorage.setItem('#2', text2);
        console.log(localStorage.getItem('#2', text2) + " has been saved to local storage for later use. (2PM)");
    });
    
    // 3PM
    $('#btn3').on('click', function() {
        var text3 = $('#3').val();
        localStorage.setItem('#3', text3);
        console.log(localStorage.getItem('#3', text3) + " has been saved to local storage for later use. (3PM)");
    });
    
    // 4PM
    $('#btn4').on('click', function() {
        var text4 = $('#4').val();
        localStorage.setItem('#4', text4);
        console.log(localStorage.getItem('#4', text4) + " has been saved to local storage for later use. (4PM)");
    });
    
    // 5PM
    $('#btn5').on('click', function() {
        var text5 = $('#5').val();
        localStorage.setItem('#5', text5);
        console.log(localStorage.getItem('#5', text5) + " has been saved to local storage for later use. (5PM)");
    });

    // Displays all saved local storage in text areas
    function displayLocal() {
    console.log("Displaying local storage values...");
    // 9AM
    $('#9').text(localStorage.getItem('#9'));
    // 10AM
    $('#10').text(localStorage.getItem('#10'));
    // 11AM
    $('#11').text(localStorage.getItem('#11'));
    // 12PM
    $('#12').text(localStorage.getItem('#12'));
    // 1PM
    $('#1').text(localStorage.getItem('#1'));
    // 2PM
    $('#2').text(localStorage.getItem('#2'));
    // 3PM
    $('#3').text(localStorage.getItem('#3'));
    // 4PM
    $('#4').text(localStorage.getItem('#4'));
    // 5PM
    $('#5').text(localStorage.getItem('#5'));
    }

    // Changes timeblock colors
    function timeblockColorSet() {
        console.log("Initializing timeblockColorSet function.");
        var currentHour = moment().hour();
    } timeblockColorSet; displayLocal();
});