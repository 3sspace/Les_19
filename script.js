let age = prompt(
    "Enter your age",
    'Age?'
    );
let answer;
if (age <= 17) {
    answer = "Do you study at school?";
} else if (age > 17 && age < 25) {
    answer = "Do you study at university?";
} else if (age >= 25 && age < 60) {
    answer="Do you have a job?"
} else {answer = "What are you doing?";
}
console.log(answer);