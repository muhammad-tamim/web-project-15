document.getElementById("day").innerText = getDateOrTime("date")[0]
document.getElementById("month-year").innerText = getDateOrTime("date").splice(1, 4).join(",");