//arrays
tasks = [];
user = "";
time = [];
//load data from memory
114



//check date and time
setInterval(function () {
    let now = moment().format("dddd, MMMM Do YYYY, HH:mm:ss a");
    $(dateInfo).html(now)
}, 1000)

//check for name
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

setInterval(function () {
    $(".nav-item").each(function () {
        let test = moment().hour(13).minute(0).format("H:mm")
        let hour = moment().format("H");
        let declared = $(this).text().trim();
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
}, 1000)

//check for tasks date adn time

//color decided on time
setInterval(function () {
    $(".hour").each(function () {
        let test = moment().hour(13).minute(0).format("H:mm")
        let hour = moment().format("H");
        let declared = $(this).text().trim();
        let thisParent = $(this).parent().parent();
        if (declared === test) {
            $(this).parent().parent().css("background-color", "var(--yellow-light)");
            $(this).parent().css("background-color", "var(--yellow-dark)");
        }
        if (declared < test) {
            $(this).parent().parent().css("background-color", "var(--red-light)");
            $(this).parent().css("background-color", "var(--red-dark)");
        }
        if (declared > test) {
            $(this).parent().parent().css("background-color", "var(--green-light)");
            $(this).parent().css("background-color", "var(--green-dark)");
        }
    })
}, 1000)




//display tasks, name and date time and color change

//nav bar quick


//save

//save to memory