const studentName = document.querySelector("#student-name");
const grade1 = document.querySelector("#grade1");
const grade2 = document.querySelector("#grade2");
const grade3 = document.querySelector("#grade3");

const calculateButton = document.querySelector("#calculate-button");
const resetButton = document.querySelector("#reset-button");

const result = document.querySelector("#result");
const studentResult = document.querySelector("#student-result");
const averageResult = document.querySelector("#average-result");
const statusResult = document.querySelector("#status-result");


calculateButton.addEventListener("click", () => {

    const name = studentName.value.trim();

    const gradeOne = Number(grade1.value);
    const gradeTwo = Number(grade2.value);
    const gradeThree = Number(grade3.value);


    if (
        name === "" ||
        grade1.value === "" ||
        grade2.value === "" ||
        grade3.value === ""
    ) {
        alert("Please complete all fields.");
        return;
    }


    const average =
        (gradeOne + gradeTwo + gradeThree) / 3;


    studentResult.textContent =
        `Student: ${name}`;

    averageResult.textContent =
        `Average: ${average.toFixed(2)}`;


    if (average >= 75) {

        statusResult.textContent =
            "Status: Passed";

    } else {

        statusResult.textContent =
            "Status: Failed";

    }


    result.style.display = "block";

});

resetButton.addEventListener("click", () => {

    studentName.value = "";
    grade1.value = "";
    grade2.value = "";
    grade3.value = "";

    result.style.display = "none";

});