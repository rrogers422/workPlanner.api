//declared time variables
var currentDate = $('#currentDay');

//display for current date//
currentDate.text(moment().format('MMM Do, YYYY'));

//Function that calls past,present, future 
var hourContainers = $(".row");
hourContainers.each(function(index) {
    console.log($(this).children('textarea'))
    let rowHour = $(this).attr('id');

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

//Variable for local storage
var saveSchedule = window.localStorage;
var saveInfo = [];
//var i = 0;
let textInfo

/*.on click function to save info thats input to local strage 
sets variables to grab value from the text area and the attribute on ID
pushes into a string in local*/

$('.saveBtn').on('click', function () {
    let textInfo = $(this).siblings('textarea').val();
    let rowId = $(this).attr('id');
    saveInfo.push({ rowId, textInfo });
    saveSchedule.setItem('textInfo', JSON.stringify(saveInfo))
});


var displayInfo = [];
if (saveSchedule.length > i) {
    displayInfo = JSON.parse(saveSchedule.getItem('saveInfo'));
    for (var i = 0; i < displayInfo.length; i++) {
        $('$.row)').children('textarea').val(displayInfo[i].textInput)
    }
};


//Comment lines are rough drafts of local storage and onclick funtion/inputs

// var saveSchedule = window.localStorage;
// var saveInfo = [$('this').children('textArea').addClass("col-8")];
// var i = x;
// //onclick function to set value to variable and save it to local storage 

// $('.saveBtn').on('click', function(x){
//     if(saveSchedule) {
//         localStorage.setItem("textArea"+i, JSON.stringify(saveInfo));{
//         for(var i = 0; i < saveSchedule.length, i++;){
//             saveInfo = saveSchedule.getItem(key, 'textArea' +i);
//             console.log(JSON.parse(saveInfo))}
//         }
//     }
//     });




// $('.saveBtn').on('click', funtion(index){
//         saveSchedule.push({$('this').siblings('textarea').value();
//         saveSchedule.push($('this').attr('id'));
//         saveSchedule.setItem(JSON.stringify('saveInfo'))
//         }):

// //save time and value to variable, then use local storage line 
// function plannerText(){
// //saving to local storage using jquery click function(not finished)//
// $('.saveBtn').on('click', function (){
// saveInfo.push()
// //take value of text area, pusg into array//
// })
// localStorage.setItem("saveInfo", JSON.stringify(saveInfo))