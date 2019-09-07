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
