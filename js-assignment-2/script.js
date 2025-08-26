const student_grades = [85, 92, 78, 90, 88, 49, 23, 80];

function getAverage(grades){
    let sum = 0;
    for (let i = 0; i < grades.length; i++){
        sum += grades[i];
    }
    average = sum / grades.length;
    if (average >= 50){
        console.log(`the average is succeeeding with an average score of ${average}`)
    }
    else{
        console.log(`the average is failing with an average score of ${average}`)
    }

}

function filterPassed(grades){
    resultedArray = grades.filter(checkPassed)

    function checkPassed(grade){
        return grade >= 50;
    }
    return resultedArray;
}

function doubleGrades(grades){
    newArray = grades.map(addTen)

    function addTen(grade){
        if ( (100 - grade) > 10 ){
            return grade + 10;
        }
        else{
            return grade + 100 - grade;
        }
    }

    return newArray;
}

console.log(getAverage(student_grades));
console.log(filterPassed(student_grades));
console.log(doubleGrades(student_grades));