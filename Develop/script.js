// moment.js current day
var currentDayDiv = $("#currentDay")
var curentDay = $("<div>");
currentDay = moment().format("dddd, MMMM Do");
currentDayDiv.text(currentDay);

// moment.js current hour
var currentHour = moment().format("H")
var curentHour = $("<div>");

var timeBlocks = JSON.parse(localStorage.getItem("events")) ||
    [   //array of objects
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
    // select the schedule div from html, set it to variable schedule
    var schedule = $("#schedule")
    // another way of writing a for loop for the timeBlocks array. 
    for (timeBlock of timeBlocks) {
        // For each object in the array timeBlocks, add a new row that includes time, textbox to input events, and save button is created.
        var row = $("<div class='row'/>")
        var timeDiv = $("<div class='col-1 hour'/>").text(timeBlock.hour)
        var inputDiv = $("<textarea class='col-12'>" + timeBlock.event + "</textarea>")
        var saveDiv = $("<button class='col-1 saveBtn'><i class='fas fa-save'></i>")

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

        // appending the rows to each other then the schedule div so they appear on the page.
        row.append(timeDiv)
        row.append(inputDiv)
        row.append(saveDiv)
        schedule.append(row)

        // on click event that saves the input in the inputDiv textarea to local storage when save button is pressed.
        saveDiv.click(function () {
            for (var i = 0; i < timeBlocks.length; i++) {
                if (timeBlocks[i].hour === $(this).siblings(".hour").text()) {
                    timeBlocks[i].event = $(this).siblings(".col-10").val()
                    localStorage.setItem("events", JSON.stringify(timeBlocks))

                }
            }
        })
    }
}

// $(document).ready(function () makes the function available when the page loads.
$(document).ready(function () { addRows() });







