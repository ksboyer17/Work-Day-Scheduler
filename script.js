//document ready code
// set click listener
$(document).ready(function(){
    $(".saveBtn").on("click",function (){
        var text = $(this).siblings(".description").val();
        var time = $(this).parent().attr("id");

        localStorage.setItem(time, text);
    })

//pulling the current time
function timeBlockUpdater() {
    //getting current hour
     var currentHour = moment().hour();
     console.log("in time block updater",currentHour);

    //loop over time blocks to provide color coding 
            $(".time-block").each(function() {
                var blockOfTime = parseInt($(this).attr("id").split("-")[1]);
                console.log(blockOfTime);
            //include functions to change colors for past, present, future
            if (blockOfTime === currentHour) {
                $(this).addClass("present");
                $(this).removeClass("future");
                $(this).removeClass("past");
            }
            else if (blockOfTime > currentHour) {
                $(this).removeClass("present");
                $(this).addClass("future");
                $(this).removeClass("past");
            }
            else {
                $(this).removeClass("present");
                $(this).removeClass("future");
                $(this).addClass("past");
                    
            }
         })
    }



//calling function from line 16
timeBlockUpdater();


//save text information to local storage
$("#hour-8 .description").val(localStorage.getItem("hour-8"));
$("#hour-9 .description").val(localStorage.getItem("hour-9"));
$("#hour-10 .description").val(localStorage.getItem("hour-10"));
$("#hour-11 .description").val(localStorage.getItem("hour-11"));
$("#hour-12 .description").val(localStorage.getItem("hour-12"));
$("#hour-13 .description").val(localStorage.getItem("hour-13"));
$("#hour-14 .description").val(localStorage.getItem("hour-14"));
$("#hour-15 .description").val(localStorage.getItem("hour-15"));
$("#hour-16 .description").val(localStorage.getItem("hour-16"));
$("#hour-17 .description").val(localStorage.getItem("hour-17"));


})


//Date on the page
var currentDay = moment().format('dddd, MMM Do YYYY LT');
$("#currentDay").html(currentDay);




