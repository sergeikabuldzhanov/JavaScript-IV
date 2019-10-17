console.log('\nLAMBDA CLASSES\n\n');


// CODE here for your Lambda Classes

//Base class Person
class Person{
    constructor(personData){
        this.name = personData.name;
        this.age = personData.age;
        this.location = personData.location;
    }
    speak(){
        console.log(`Hello my name is ${this.name}, I am from ${this.location}`);
    }
}

//Child class Instructor
class Instructor extends Person{
    constructor(instructorData){
        super(instructorData);
        this.specialty = instructorData.specialty;
        this.favLanguage = instructorData.favLanguage;
        this.catchPhrase = instructorData.catchPhrase;
    }
    demo(subject){
        console.log(`Today we are learning about ${subject}`);
    }
    grade(student, subject){
        console.log(`${student.name} receives a perfect score on ${subject}`);
    }
    //STRETCH: Randomly changes grade of a student
    gradeStudent(student){
        student.grade = Math.floor(Math.random()*100 + 1);
    }
}

//Child class Student
class Student extends Person{
    constructor(studentData){
        super(studentData);
        this.previousBackground = studentData.previousBackground;
        this.className = studentData.className;
        this.favSubjects = studentData.favSubjects;
        //STRETCH: Assigns random grade between 1 and 100 on creation
        this.grade = Math.floor(Math.random()*100 + 1);
    }
    listSubjects(){
        this.favSubjects.forEach(element => {
            console.log(element);
        });
    }
    PRAssigment(subject){
        console.log(`${this.name} has submitted a PR for ${subject}`)
    }
    sprintChallenge(subject){
        console.log(`${this.name} has begun sprint challenge on ${subject}`)
    }
    //STRETCH: Allows student to graduate if his grade is higher than 70;
    graduateStudent(){
        if(this.grade>70){
            console.log(`${this.name} has graduated from Lambda!`);
        }else{
            console.log(`${this.name}'s grade isn't high enough! Go learn more and try later!`);
        }
    }
}
//Grandchild class ProjectManager
class ProjectManager extends Instructor{
    constructor(pmData){
        super(pmData);
        this.gradClassName = pmData.gradClassName;
        this.favInstructor = pmData.favInstructor;
    }
    standUp(channel){
        console.log(`${this.name} announces to ${channel}, @channel standy times!​​​​​`);
    }
    debugsCode(student, subject){
        console.log(`${this.name} debugs ${student.name}'s code on ${subject}`);
    }
}

//Testing
const fred = new Person({
    name: 'Fred',
    location: 'Bedrock',
    age: 37,
  });

  
  
  const ted = new Instructor({
    name: 'Ted',
    location: 'NYC',
    age: 25,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Don't forget the Yankies`
  });



  const bob = new Student({
    name: 'Bob',
    location: 'London',
    age: 33,
    previousBackground: 'Retail',
    className: 'WEB50',
    favSubjects: ["JavaScript","React","Node.js"]
  });

  const will = new ProjectManager({
    name: 'Will',
    location: 'Paris',
    age: 31,
    favLanguage: 'JavaScript',
    specialty: 'Front-end',
    catchPhrase: `Daily forms please!`,
    gradClassName: 'WEB44',
    favInstructor: 'Ted'
  });

//Person
  fred.speak();

  //Instructor
  ted.speak();
  ted.demo('React I');
  ted.grade(bob, 'React I');

  //Student
  bob.speak();
  bob.listSubjects();
  bob.PRAssigment('React I');
  bob.sprintChallenge('Intro to React')

  //ProjectManager
  will.speak();
  will.standUp('@WEB50_Will');
  will.debugsCode(bob, 'React I');

  //Stretch
  console.log("Bob's grade is " + bob.grade);
  will.gradeStudent(bob);
  console.log("Will has graded Bob's work, now Bob's grade is " + bob.grade);
  bob.graduateStudent();