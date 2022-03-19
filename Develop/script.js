//Date formating at top of page
$("#currentDay").text(moment().format("MMMM D YYYY"));

//Save button logic that grabs information from nearby elements and sets to localStorage
$(".saveBtn").on("click", function(){
    var text = $(this).prev().text();
    var time = $(this).parent().attr("id");

    localStorage.setItem(time, text);
});

//Function that allows user to click on the blank space within a time block to add a task
$(".task-group").on("click", ".planned-task", function(){
    var text = $(this)
        .text()
        .trim();
    var textInput = $("<textarea>")
        .addClass("col-10")
        .addClass("border")
        .addClass("border-dark")
        .addClass("form-control")
        .val(text);
        $(this).replaceWith(textInput);
        textInput.trigger("focus");
});

//Recreates original span element with the text entered by user.
$(".task-group").on("blur", "textarea", function(){
    var text = $(this)
        .val()
        .trim();

    var taskSpan = $("<span>")
        .addClass("col-10")
        .addClass("border")
        .addClass("border-dark")
        .addClass("planned-task")
        .text(text);

    $(this).replaceWith(taskSpan);
});

//Loads the saved data for each hour block from local storage
$("#task-9").text(localStorage.getItem("hour-9"));
$("#task-10").text(localStorage.getItem("hour-10"));
$("#task-11").text(localStorage.getItem("hour-11"));
$("#task-12").text(localStorage.getItem("hour-12"));
$("#task-13").text(localStorage.getItem("hour-13"));
$("#task-14").text(localStorage.getItem("hour-14"));
$("#task-15").text(localStorage.getItem("hour-15"));
$("#task-16").text(localStorage.getItem("hour-16"));
$("#task-17").text(localStorage.getItem("hour-17"));