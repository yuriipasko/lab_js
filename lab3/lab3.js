function showCurrentDate() {
    document.getElementById('currentDate').innerHTML = getCurrentDateString();
}

function showDayInfo() {
    let info = getDayInfo(new Date());
    document.getElementById('dayInfo').innerHTML = "Номер: " + info.dayNumber + "<br>Назва: " + info.dayName;
}

function calcDaysAgo() {
    let n = document.getElementById('daysAgo').value;
    let d = getDateAgo(parseInt(n));
    document.getElementById('daysAgoResult').innerHTML = d;
}

function lastDay() {
    let y = document.getElementById('year').value;
    let m = document.getElementById('month').value;
    document.getElementById('lastDayResult').innerHTML = getLastDay(y, m);
}

function secondsInfo() {
    document.getElementById('secondsResult').innerHTML = "Пройшло: " + getSecondsToday() + "<br>До завтра: " + getSecondsToTomorrow();
}

function formatNow() {
    document.getElementById('formatResult').innerHTML = formatDateDDMMYYYY(new Date());
}

function dateDiff() {
    let d1 = new Date(document.getElementById('date1').value);
    let d2 = new Date(document.getElementById('date2').value);
    document.getElementById('diffResult').innerHTML = dateDifference(d1, d2) + " днів";
}

function formatTest() {
    let d = new Date(new Date() - 65000);
    document.getElementById('formatTestResult').innerHTML = formatDate(d);
}

function parseDate() {
    let str = document.getElementById('dateString').value;
    document.getElementById('parseResult').innerHTML = parseDateString(str);
}

function formatLang() {
    let lang = document.getElementById('lang').value;
    document.getElementById('langResult').innerHTML = formatDateLang(lang);
}
