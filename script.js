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

var hourContainers = $(".col-2");
hourContainers.each(function(index){
    console.log($(this).children('textarea'))
    let rowHour = $(this).attr('id');
    console.log(rowHour);
    //referenceing the split id in position 1 from 0
});
    //jquery method loop over divs
//     $( "time-block" ).each(function() {
//         var timeBlock = $("#row").attr("value")
//         console.log(timeBlock)
//       });
//     if(currentDate < timeBlock ){
//     $(this).addClass("#past")
//     }
//     else if(currentDate === timeBlock){
//         $(this).removeClass("#past")
//         $(this).addClass("#present")
//     }
//     else if(currentDate > timeBlock){
//         $(this).removeClass("#present")
//         $(this).addClass("#future")
//     }
// };

//hourContainers();
