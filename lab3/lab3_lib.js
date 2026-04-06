function getCurrentDateString() {
    let d = new Date();
    let days = ["неділя","понеділок","вівторок","середа","четвер","п'ятниця","субота"];
    let months = ["січня","лютого","березня","квітня","травня","червня","липня","серпня","вересня","жовтня","листопада","грудня"];
    return "Дата: " + d.getDate() + " " + months[d.getMonth()] + " " + d.getFullYear() +
        "<br>День тижня: " + days[d.getDay()] +
        "<br>Час: " + d.getHours().toString().padStart(2,'0') + ":" + d.getMinutes().toString().padStart(2,'0');
}

function getDayInfo(date) {
    let days = ["понеділок","вівторок","середа","четвер","п'ятниця","субота","неділя"];
    let day = date.getDay();
    let num = day === 0 ? 7 : day;
    return {dayNumber: num, dayName: days[num-1]};
}

function getDateAgo(n) {
    let d = new Date();
    d.setDate(d.getDate() - n);
    return d;
}

function getLastDay(year, month) {
    return new Date(year, month, 0).getDate();
}

function getSecondsToday() {
    let d = new Date();
    return d.getHours()*3600 + d.getMinutes()*60 + d.getSeconds();
}

function getSecondsToTomorrow() {
    return 86400 - getSecondsToday();
}

function formatDateDDMMYYYY(date) {
    return date.getDate().toString().padStart(2,'0') + "." +
           (date.getMonth()+1).toString().padStart(2,'0') + "." +
           date.getFullYear();
}

function dateDifference(d1, d2) {
    return Math.abs(d2 - d1) / (1000*60*60*24);
}

function formatDate(date) {
    let diff = (new Date() - date)/1000;
    if(diff < 1) return "тільки що";
    if(diff < 60) return Math.floor(diff) + " сек. назад";
    if(diff < 3600) return Math.floor(diff/60) + " хв. назад";
    return formatDateDDMMYYYY(date) + " " + date.getHours().toString().padStart(2,'0') + ":" + date.getMinutes().toString().padStart(2,'0');
}

function parseDateString(str) {
    if(str.includes("-")) return new Date(str);
    if(str.includes(".")) {
        let p = str.split(".");
        return new Date(p[2], p[1]-1, p[0]);
    }
    return null;
}

function formatDateLang(lang) {
    let d = new Date();
    return d.toLocaleString(lang, {weekday:'long', year:'numeric', month:'long', day:'numeric', hour:'2-digit', minute:'2-digit', second:'2-digit'});
}
