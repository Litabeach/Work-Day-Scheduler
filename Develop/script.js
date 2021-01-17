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

// array of times
const times = ["9:00am", "10:00am", "11:00am", "12:00pm", "1:00pm","2:00pm","3:00pm","4:00pm","5:00pm"]

// this function paints the rows on the page
function addRows() {
    // select the schedule div from html
    const schedule = $("#schedule")  
    // another way of writing a for loop for the times array. 
    for (time of times) {
        // For each hour block in the array, a new row that includes time, place to input events, and save button is created.
        const row = $("<div class='row'/>")
        const timeDiv = $("<div class='col-lg-2 hour'/>").text(time) 
        // this will be used to save events that the user inputs to local storage
        const event = getEvent(time)  
        const inputDiv =$("<div class='col-lg-8'><textarea></textarea></div>")  //add " + event + " in textarea?
        const saveDiv = $("<div class='col-lg-2'><button class='saveBtn'>Save Button</div>")
        // appending the rows to each other then the schedule div so they appear on the page.
        row.append(timeDiv)
        row.append(inputDiv)
        row.append(saveDiv)
        schedule.append(row)

        // on click event that saves the input in the inputDiv textarea to local storage when save button is pressed.
        saveDiv.click(function() {
            setEvent(time, inputDiv.children("textarea").val())
            // localStorage.setItem("events", inputDiv.children("textarea").val())
        })
    }
}
function getEvent(time) { }  //get event out of local storage and return event for time. handle case where there is no event
function saveEvent(time, event) { } //save event for the time in local storage
function checkTimeColor(inputDiv, time) { } // update classes of time blocks to show how 


// (document).ready(function() {} calls the function when the page loads
$(document).ready(function() { addRows() })

// moment.js
var currentDayDiv = $("#currentDay")
var curentDay = $("<div>");
    currentDay = moment.js()
    currentDayDiv.text("Todays date is " + currentDay);
    currentDayDiv.append(currentDay);









  
    