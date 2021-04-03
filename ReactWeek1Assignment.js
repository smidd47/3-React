class Student {
    constructor(name, email, community) {
        this.name = name;
        this.email = email;
        this.community = community;
    }
}

const student1 = new Student("Nate", "nate@gmail.com", "San Diego");
const student2 = new Student("Steven", "steve@gmail.com", "Portland");

class Bootcamp {
    constructor(name, level, students = []) {
        this.name = name;
        this.level = level;
        this.students = students;
    }

    registerStudent(studentToRegister) {
        if (!this.students.find(currentStud => currentStud.email === studentToRegister.email)) { 
            this.students.push(studentToRegister);
            console.log(`Registering ${studentToRegister.email} to the bootcamp ${this.name}.`);
        } else {
            console.log(`Student ${studentToRegister.email} already exists in the bootcamp ${this.name}.`);
        }
        return this.students;
    }
}

const bootcamp = new Bootcamp("Nucamp", "beginner")

const test1 = bootcamp.registerStudent(student1);
const test2 = bootcamp.registerStudent(student1);
const test3 = bootcamp.registerStudent(student2);
const test4 = bootcamp2.registerStudent(student3);