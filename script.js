//Person object with name and semester information
let person = {
  //Set variables
  firstName: "Emma",
  lastName : "Prager",
  id : "Fall 2019 Courses",
  //Functions to return data
  fullName : function() {
    return this.firstName + " " + this.lastName;
  },
  semester : function() {
    return this.id;
  }
};

// Display data from the object (name and semester)
console.log(person.fullName());
console.log(person.semester());

//Add listener to the function courses
window.addEventListener("load", courses);

//Create function courses
function courses() {
  //Iterate through each item in arrays and write to document (bold the course codes)
  let i = 0;
  for(i=0; i<category.length; i++) {
    document.write(category[i].bold() + "-".bold() + number[i].bold() + " ");
    document.write(title[i] + "<br/>");
  }
  
}

//Declare variables for courses in arrays
let category = ["CS", "CS", "ITM", "ITMD", "MATH"];
let number = ["411", "450", "301", "562", "332"];
let title = ["Computer Graphics", "Operating Systems", "Intro OS and Hardware I", "Web Site App Development", "Elementary Linear Algebra"];
