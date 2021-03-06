//variables declaration
var user = "";
let tasks = [];

//load data from storage
if ("data" in localStorage) {
    tasks = localStorage.getItem('data');
    tasks = JSON.parse(tasks);
}
else {
    tasks = []
}

//load data into time slots
$(document).ready(function () {
    for (i = 0; i < tasks.length; i++) {
        obj = tasks[i]
        time = obj.time;
        info = obj.info;
        $(".task[time='" + time + "']").html(info);
    }
    console.log(tasks)
});

//check date and time and display
setInterval(function () {
    let now = moment().format("dddd, MMMM Do YYYY, HH:mm:ss a");
    $(dateInfo).html(now)
}, 1000)

//check for name in storage or prompt
if ("user" in localStorage) {
    user = localStorage.getItem("user");
    $("h2").html("Welcome back " + user);
}
else {
    user = prompt("What is your name?");
    console.log(user);
    $("h2").html("Welcome " + user);
    localStorage.setItem("user", user);
}

//color timing nav
setInterval(function () {
    $(".nav-item").each(function () {
        let test = moment().hour(10).format("H")
        let hour = moment().format("H");
        let declared = $(this).text().trim().slice(0, 2);
        let thisParent = $(this).parent().parent();
        if (declared === hour) {
            $(this).children().css("background-color", "var(--yellow-light)");
        }
        if (declared < hour) {
            $(this).children().css("background-color", "var(--red-light)");
        }
        if (declared > hour) {
            $(this).children().css("background-color", "var(--green-light)");
        }
    })
}, 100)

//color timing background
setInterval(function () {
    $("section").each(function () {
        let test = moment().hour(10).format("H")
        let hour = moment().format("H");
        let declared = $(this).first().text().trim().slice(0, 2);
        if (declared === hour) {
            $(this).css("background-color", "var(--yellow-light)");
        }
        if (declared < hour) {
            $(this).css("background-color", "var(--red-light)");
        }
        if (declared > hour) {
            $(this).css("background-color", "var(--green-light)");
        }
    })
}, 100)

// color timing time slots
setInterval(function () {
    $(".timeSlot").each(function () {
        let test = moment().hour(10).minute(25).format("H:mm").slice(0, 4);
        let hour = moment().format("H:mm").slice(0, 4);
        let declared = $(this).text().trim().slice(0, 4);
        if (declared === hour) {
            $(this).css("background-color", "var(--yellow-li)");
        }
        if (declared < hour) {
            $(this).css("background-color", "var(--red-li)");
        }
        if (declared > hour) {
            $(this).css("background-color", "var(--green-li)");
        }
    })
}, 100)

//color timing timeBox
setInterval(function () {
    $(".timeBox").each(function () {
        let test = moment().hour(10).format("H")
        let hour = moment().format("H");
        let declared = $(this).text().trim().slice(0, 2);
        if (declared === hour) {
            $(this).css("background-color", "var(--yellow-light)");
        }
        if (declared < hour) {
            $(this).css("background-color", "var(--red-light)");
        }
        if (declared > hour) {
            $(this).css("background-color", "var(--green-light)");
        }
    })
}, 100)


//editting of task on click
$(".timeList").on("click", "p.task", function (e) {
    var text = $(this).text().trim();
    var time = $(this).attr("time");

    if (text === "Enter task here")
        text = "";

    let $textInput = $("<input>").addClass("task").attr("maxlength", "69").attr("time", time).val(text);
    $(this).replaceWith($textInput);
    $textInput.trigger("focus");
});

//behavior on blur
$(".timeList").on("blur", "input.task", function (e) {
    var text = $(this).val().trim();
    var time = $(this).attr("time");
    if (text === "") text = "Enter task here";
    var $taskP = $("<p>").addClass("task hour m-auto").attr("time", time).text(text);

    $(this).replaceWith($taskP);
});

//save data on click
$("li").on("click", "button", function () {
    let wrap = $(this).parents("li");
    let info = $(wrap).find("p").text().trim();
    let timeDeclared = $(wrap).find(".slotMinutes").text().trim();
    let task = {};
    task.time = timeDeclared;
    task.info = info;
    add(task);
    localStorage.setItem("data", JSON.stringify(tasks))

})

//saves to new array or replaces old data from array
function add(task) {
    let addNewTask = true;
    let obj = tasks.find(element => {
        if (element.time === task.time) {
            element.info = task.info
            addNewTask = false
        }
    });

    console.log('addNewTask', addNewTask)
    if (addNewTask) {
        tasks.push(task)
    }
    console.log('tasks', tasks);
}

