var groupmates = [
    {
        "name": "Александр",
        "surname": "Иванов",
        "group": "БВТ1702",
        "marks": [4, 3, 5]
    },
    {
        "name": "Иван",
        "surname": "Петров",
        "group": "БСТ1702",
        "marks": [4, 4, 4]
    },
    {
        "name": "Кирилл",
        "surname": "Смирнов",
        "group": "БАП1801",
        "marks": [5, 5, 5]
    }
];

var rpad = function(str, length) {
  str = str.toString();
  while (str.length < length)
    str = str + ' ';
  return str;
};

var printStudents = function(students){
console.log(
rpad("Имя", 15),
rpad("Фамилия", 15),
rpad("Группа", 8),
rpad("Оценки", 20)
);

for (var i = 0; i<=students.length-1; i++){
console.log(
rpad(students[i]['name'], 15),
rpad(students[i]['surname'], 15),
rpad(students[i]['group'], 8),
rpad(students[i]['marks'], 20)
);
}
console.log('\n');
};
printStudents(groupmates);

var filterStudents = function(students, group, minGrade) {
  var filteredStudents = [];
  for (var i = 0; i < students.length; i++) {
    var marks = students[i]['marks'];
    var sum = 0;
    for (var j = 0; j < marks.length; j++) {
      sum += marks[j];
    }
    var average = sum / marks.length;
    if (students[i]['group'] === group && average >= minGrade) {
      filteredStudents.push(students[i]);
    }
  }
  return filteredStudents;
};

/*var group = prompt("Введите название группы:");
var minGradeStr = prompt("Введите минимальную среднюю оценку:");
var minGrade = parseFloat(minGradeStr);
var filteredStudents = filterStudents(groupmates, group, minGrade);
printStudents(filteredStudents);*/
