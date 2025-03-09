const students = [
    { name: "John", score: 85 },
    { name: "Emma", score: 92 },
    { name: "David", score: 78 }
  ];

  students.foreach(student => {
    student.passed = student.score >= 80;
  });
  
  
  Array.prototype.foreachall=function(func){
    for(let i of this){
        func(i)
    }
  }

  students.foreachall(student => {
    student.passed = student.score >= 80;
  });

  console.log(students);