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
    $('#btn13').on('click', function() {
        var text13 = $('#13').val();
        localStorage.setItem('#13', text13);
        console.log(localStorage.getItem('#13', text13) + " has been saved to local storage for later use. (1PM)");
    });
    
    // 2PM
    $('#btn14').on('click', function() {
        var text14 = $('#14').val();
        localStorage.setItem('#14', text14);
        console.log(localStorage.getItem('#14', text14) + " has been saved to local storage for later use. (2PM)");
    });
    
    // 3PM
    $('#btn15').on('click', function() {
        var text15 = $('#15').val();
        localStorage.setItem('#15', text15);
        console.log(localStorage.getItem('#15', text15) + " has been saved to local storage for later use. (3PM)");
    });
    
    // 4PM
    $('#btn16').on('click', function() {
        var text16 = $('#16').val();
        localStorage.setItem('#16', text16);
        console.log(localStorage.getItem('#16', text16) + " has been saved to local storage for later use. (4PM)");
    });
    
    // 5PM
    $('#btn17').on('click', function() {
        var text17 = $('#17').val();
        localStorage.setItem('#17', text17);
        console.log(localStorage.getItem('#17', text17) + " has been saved to local storage for later use. (5PM)");
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
    $('#13').text(localStorage.getItem('#13'));
    // 2PM
    $('#14').text(localStorage.getItem('#14'));
    // 3PM
    $('#15').text(localStorage.getItem('#15'));
    // 4PM
    $('#16').text(localStorage.getItem('#16'));
    // 5PM
    $('#17').text(localStorage.getItem('#17'));
    }

    // Changes timeblock colors
    $(function() {
        console.log("Initializing the timeblock color function.");
        var currentHour = moment().hour();
        console.log("The current hour is: " + currentHour);
    }); displayLocal();
});