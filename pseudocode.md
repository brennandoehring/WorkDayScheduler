// WHEN I open the planner

- Begin functions as soon as site opens !($document).ready(function())! !DONE!


// THEN the current day is displayed at the top of the calendar

- Create a function that displays the current day in the header using moment.js !DONE!


// WHEN I scroll down
// THEN I am presented with timeblocks for standard business hours

- Create timeblocks labelled between 9AM-5PM (standard business hours) !DONE!


//WHEN I view the timeblocks for that day
//THEN each timeblock is color coded to indicate whether it is in the past, present, or future

- Set timeblock colors based on the current time (moment.js) using the supplied css classes !DONE!


// WHEN I click into a timeblock
// THEN I can enter an event

- Text area for user input !DONE!


// WHEN I click the save button for that timeblock

- Create a click event for the save button based on it's timeblock !DONE!


// THEN the text for that event is saved in local storage

- Save user input into local storage !DONE!


// WHEN I refresh the page
// THEN the saved events persist

- Local storage should be pulled every time the page is opened !DONE!