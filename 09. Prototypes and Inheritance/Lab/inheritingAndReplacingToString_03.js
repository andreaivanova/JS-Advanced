function toStringExtenstion() {
    class Person {
        constructor (name, email){
            this.name = name;
            this.email = email;
        };

         toString(){
             return `${this.constructor.name} (name: ${this.name}, email: ${this.email})`;
         }
     
     }
     
     class Teacher extends Person {
         constructor (name, email, subject){
             super(name, email);
             this.subject = subject;
         }

         toString(){
             return super.toString().slice(0, -1) + `, subject: ${this.subject})`
         }
     }

     class Student extends Person {
         constructor(name, email, course){
             super(name, email);
             this.course = course;
         }

         toString(){
            return super.toString().slice(0, -1) + `, course: ${this.course})`
        }

     }

//      let p1 = new Person('andrea','andrea@mail.bg')
//      let p2 = new Teacher('valentina','valentina@mail.bg','english')
//      let p3 = new Student('ivelin','ivelin@mail.bg','advanced')
//    console.log(p1.toString())
//    console.log(p2.toString())
//    console.log(p3.toString())

  

    return {
        Person,
        Teacher, 
        Student
    }

}

