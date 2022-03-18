//Date formating at top of page
$("#currentDay").text(moment().format("MMMM D YYYY"));

var tasks = {};

var loadTasks = function() {
    if (!tasks) {
        tasks = {
            hour9: [],
            hour10: [],
            hour11: [],
            hour12: [],
            hour13: [],
            hour14: [],
            hour15: [],
            hour16: [],
            hour17: [],
        }
    };

    //TODO add a jquery each loop to populate our persistent tasks
};

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
