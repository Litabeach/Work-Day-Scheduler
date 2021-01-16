// utilize moment.js, this and then(?)
// write an event listener that when 'save' button is clicked, takes info from text area and saves it to local storage
// use sibling to get to the text area?
// need to include todays date and time
// write a function that changes the color of the timeblock according to the current time


// moment.js stuff:
// moment().format("dddd, MMMM Do YYYY");

// const today = moment();
// console.log(today.format());

// set textarea to local storage
// var event = localStorage.setItem("event", textarea)

// on click event to save what is in the text area
$(".saveBtn").on("click", function(){
    var notes = $('#ok')
    localStorage.setItem("notes", ok)
});


  
    