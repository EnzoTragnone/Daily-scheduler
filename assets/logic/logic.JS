//variables declaration
var tasks = [];
var user = "";
save = [
    a = [{}, {}, {}, {}, {}],
    b = [{}, {}, {}, {}, {}],
    c = [{}, {}, {}, {}, {}],
    d = [{}, {}, {}, {}, {}],
    e = [{}, {}, {}, {}, {}],
    f = [{}, {}, {}, {}, {}],
    g = [{}, {}, {}, {}, {}],
    h = [{}, {}, {}, {}, {}],
]

$("li").on("click", "button", function () {
    let wrap = $(this).parents("li");
    let info = $(wrap).find("p").text().trim();
    let time = $(wrap).find(".slotMinutes").text().trim();
    task = {};
    task.time = time;
    task.info = info;
    console.log(task)
})

//load data from memory
$(document).ready(function () {

})


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
        if (declared === test) {
            $(this).children().css("background-color", "var(--yellow-light)");
        }
        if (declared < test) {
            $(this).children().css("background-color", "var(--red-light)");
        }
        if (declared > test) {
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
        if (declared === test) {
            $(this).css("background-color", "var(--yellow-light)");
        }
        if (declared < test) {
            $(this).css("background-color", "var(--red-light)");
        }
        if (declared > test) {
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
        if (declared === test) {
            $(this).css("background-color", "var(--yellow-li)");
        }
        if (declared < test) {
            $(this).css("background-color", "var(--red-li)");
        }
        if (declared > test) {
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
        if (declared === test) {
            $(this).css("background-color", "var(--yellow-light)");
        }
        if (declared < test) {
            $(this).css("background-color", "var(--red-light)");
        }
        if (declared > test) {
            $(this).css("background-color", "var(--green-light)");
        }
    })
}, 100)


//editting of tasks
$(".timeList").on("click", "p.task", function (e) {
    var text = $(this).text().trim();
    var time = $(this).attr("time");

    if (text === "Enter task here")
        text = "";

    let $textInput = $("<input>").addClass("task").attr("maxlength", "69").attr("time", time).val(text);
    $(this).replaceWith($textInput);
    $textInput.trigger("focus");
});

$(".timeList").on("blur", "input.task", function (e) {
    var text = $(this).val().trim();
    var time = $(this).attr("time");
    if (text === "") text = "Enter task here";
    var $taskP = $("<p>").addClass("task hour m-auto").attr("time", time).text(text);

    $(this).replaceWith($taskP);
});


// const arr = [{ id: 1, username: 'fred' }, { id: 2, username: 'bill' }, { id: 3, username: 'ted' }];

// function add(arr, name) {
//     const { length } = arr;
//     const id = length + 1;
//     const found = arr.some(el => el.username === name);
//     if (!found) arr.push({ id, username: name });
//     return arr;
// }

// console.log(add(arr, 'ted'));