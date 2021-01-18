// utilize moment.js, this and then(?)
// write an event listener that when 'save' button is clicked, takes info from text area and saves it to local storage
// use sibling to get to the text area?
// need to include todays date and time
// write a function that changes the color of the timeblock according to the current 

// moment.js current day
var currentDayDiv = $("#currentDay")
var curentDay = $("<div>");
currentDay = moment().format("dddd, MMMM Do YYYY");
currentDayDiv.text("Today's date is " + currentDay);

// moment.js for current hour
var currentHour = moment().format("H")
var curentHour = $("<div>");
console.log(currentHour)

// var timeBlocks = localStorage.get("events")
//     if (!timeBlocks) {
//         timeblocks = createEmptyTimeBlocks()
//     }

// get events data. How to populate it to page? Push this into timeBlocks.event?
var getEvent = JSON.parse(localStorage.getItem("events")) || [];
function getEvent() {
    JSON.parse(localStorage.getItem("events"))
}  //get event out of local storage and return event for time. handle case where there is no event

var timeBlocks = [   //array of objects
    {
        dataHour: 9,
        hour: "9:00am",
        event: ""
    },
    {
        dataHour: 10,
        hour: "10:00am",
        event: ""
    },
    {
        dataHour: 11,
        hour: "11:00am",
        event: ""
    },
    {
        dataHour: 12,
        hour: "12:00pm",
        event: ""
    },
    {
        dataHour: 13,
        hour: "1:00pm",
        event: ""
    },
    {
        dataHour: 14,
        hour: "2:00pm",
        event: ""
    },
    {
        dataHour: 15,
        hour: "3:00pm",
        event: ""
    },
    {
        dataHour: 16,
        hour: "4:00pm",
        event: ""
    },
    {
        dataHour: 17,
        hour: "5:00pm",
        event: ""
    },
]

// this function paints the rows on the page
function addRows() {
    // select the schedule div from html
    var schedule = $("#schedule")
    // another way of writing a for loop for the times array. 
    for (timeBlock of timeBlocks) {   //use for each to get both variables???
        // For each object in the array timeBlocks, a new row that includes time, place to input events, and save button is created.
        var row = $("<div class='row'/>")
        var timeDiv = $("<div class='col-1 hour'/>").text(timeBlock.hour)
        var inputDiv = $("<div'><textarea class = 'col-12'>" + timeBlock.event + "</textarea></div>")

        // change the color of the inputDiv according to the dataHour vs. currentHour
        if (currentHour == timeBlock.dataHour) {
            $(inputDiv).attr("class", "present col-10")
        }

        if (currentHour > timeBlock.dataHour) {
            $(inputDiv).attr("class", "past col-10")
        }

        if (currentHour < timeBlock.dataHour) {
            $(inputDiv).attr("class", "future col-10")
        }

        var saveDiv = $("<div class='col-1'><button class='saveBtn'>Save Button</div>")
        // appending the rows to each other then the schedule div so they appear on the page.
        row.append(timeDiv)
        row.append(inputDiv)
        row.append(saveDiv)
        schedule.append(row)


        // closure
        var hour = timeBlock.dataHour

        // on click event that saves the input in the inputDiv textarea to local storage when save button is pressed.
        saveDiv.click(function () {
            for (timeBlockToSave of timeBlocks) {
                if (timeBlockToSave.dataHour === hour) {
                    timeBlockToSave.event = inputDiv.children("textarea").val()
                    localStorage.setItem("events", JSON.stringify(timeBlocks))
                }
            }
        })
    }
}



// function checkTimeColor() {

//     if (currentHour === timeBlock.dataHour) {
//         $(inputDiv).attr("class", "present")
//     }

//     if (currentHour > timeBlock.dataHour) {
//         $(inputDiv).attr("class", "past")
//     }

//     if (currentHour < timeBlock.dataHour) {
//         $(inputDiv).attr("class", "future")
//     }

// }




// (document).ready(function() {} calls the function when the page loads
$(document).ready(function () { addRows() });
// $(document).ready(function () { checkTimeColor() });
// $(document).ready(function () { getEvent() })
getEvent();
















