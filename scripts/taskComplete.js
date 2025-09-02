const buttons = document.getElementsByClassName("task-completed-btn");
const taskNumber = document.getElementById("task-number").innerText;
const taskFinished = document.getElementById("task-finished").innerText;
let integerTaskNumber = parseInt(taskNumber);
let integerTaskFinished = parseInt(taskFinished);

let pendingNum = integerTaskNumber;
let finishednum = integerTaskFinished;

for (let button of buttons) {
    button.addEventListener("click", () => {

        // when click pending task number will be reduce and finished task number will be increase 
        pendingNum--;
        document.getElementById("task-number").innerText = pendingNum;
        finishednum++;
        document.getElementById("task-finished").innerText = finishednum;

        // when reduce a alert show
        alert("Board Update Successfully!")

        // after reducing button will be disabled
        button.setAttribute("disabled", "disabled")

        // show task info to the sidebar active log section
        const taskName = button.parentElement.parentElement.parentElement.querySelector("h2").innerText;

        const container = document.getElementById("completed-task-container");
        const p = document.createElement("p");
        p.classList.add("bg-secondary", "rounded-lg", "p-2.5");
        const time = getDateOrTime()
        p.innerText = `You have completed the task ${taskName} at ${time}`
        container.appendChild(p)

        // if all task donw show a alert
        if (num === 0) {
            alert("congratulation! you completed all the current task")
            return;
        }
    })
}

// if clicked clear history button all history will be removed
document.getElementById("clear-history-btn").addEventListener("click", () => {
    document.getElementById("completed-task-container").innerText = ""
})


