//declared variables
var currentDate = $('#currentDay');
var saveInfo = [];
//var timeBlock = $("#time-block").data("value")
//var moment = moment();


//display for current date//
currentDate.text(moment().format('MMM Do, YYYY'));

// //save time and value to variable, then use local storage line 
// function plannerText(){
// //saving to local storage using jquery click function(not finished)//
// $('.saveBtn').on('click', function (){
// saveInfo.push()
// //take value of text area, pusg into array//
// })
// localStorage.setItem("saveInfo", JSON.stringify(saveInfo));

var hourContainers = $(".row");
hourContainers.each(function(index) {
    console.log($(this).children('textarea'))
    let rowHour = $(this).attr('id');
    //referenceing the split id in position 1 from 0

    if(moment().hour() < rowHour ){
    $(this).children('textarea').addClass("future")
    }
    else if(moment().hour() == rowHour){
        $(this).children('textarea').addClass("present")
    }
    else if(moment().hour() > rowHour){
        $(this).children('textarea').addClass("future")
    }
});

//hourContainers();
