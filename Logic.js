let ddate = new Date()
function convertTo12HourFormat(time24) {
    // تقسيم الوقت إلى الساعات والدقائق
    const [hours24, minutes] = time24.split(':').map(Number);

    // تحديد ما إذا كان الوقت AM أو PM
    const period = hours24 >= 12 ? 'PM' : 'AM';
    // تحويل الساعات إلى تنسيق 12 ساعة
    const hours12 = hours24 % 12 || 12;
    // تنسيق الوقت بالتنسيق 12 ساعة
    return `${hours12}:${minutes.toString().padStart(2, '0')} ${period}`;
}
// Date OF Day
let date = new Date()
        let spans = document.querySelectorAll(".box span");
// GET Data
function getData (City , Date) {
    axios.get(`https://api.aladhan.com/v1/timingsByCity/:date=${Date}?country=eg&city=${City}`)
    .then((respons)=>{
        // Time 
        let timinges = respons.data.data.timings
        // Date
        let dateOfDay = respons.data.data.date.readable
        // Add Date To Local Storage
        localStorage.setItem("Date" , dateOfDay)
        if (localStorage.getItem("Date")) {
            let date = document.querySelector(".date")
            date.textContent = localStorage.getItem("Date")
        }
        // Weekday
        let weekDay = respons.data.data.date.hijri.weekday.ar
        // Add To Local Storage
        localStorage.setItem("WeekDay" , weekDay)
        let day = document.querySelector(".day")
        if (localStorage.getItem("WeekDay")) {
            day.textContent = localStorage.getItem("WeekDay")
        }
        // City

        // Spans Moaqit

        // Looping in Data
            for(let key in timinges) {  
                // Looping In Spans
                spans.forEach((e)=>{
                    if (e.className == key) {
                        // Add Data To Local Storage
                    localStorage.setItem(e.className ,convertTo12HourFormat(timinges[key]))
                        if (localStorage.getItem(e.className)) {
                            e.textContent = localStorage.getItem(e.className)
                        }
                    }
                })
            }
    })

}
        let day = document.querySelector(".day")
        if (localStorage.getItem("WeekDay")) {
            day.textContent = localStorage.getItem("WeekDay")
        }
if (localStorage.getItem("Date")) {
    let date = document.querySelector(".date")
    date.textContent = localStorage.getItem("Date")
    }
spans.forEach((e)=>{
    if (localStorage.getItem(e.className)) {
            e.textContent = localStorage.getItem(e.className)
        }
    if (!localStorage.getItem(e.className)) {
        getData("Cairo" , date)
    }
})

function select () {
    let mohafazat = document.querySelectorAll(".change p")
    mohafazat.forEach((e)=>{
        e.addEventListener("click", ()=> {
            getData(e.className , date)
            // City
            localStorage.setItem("City" , e.textContent)
            if(localStorage.getItem("City")) {
                    let city = document.querySelector(".city")
                    city.textContent = localStorage.getItem("City")
}
        })
    })
}
if(localStorage.getItem("City")) {
    let city = document.querySelector(".city")
    city.textContent = localStorage.getItem("City")
}
select()
let change = document.querySelector(".selected")
let selectt = document.querySelector(".select")
let click = true
change.onclick = function (e) {
    if(click == true) {
        selectt.style.height = "auto"
        click = false
    }else {
        selectt.style.height = "40px"
        click = true
    }


}

