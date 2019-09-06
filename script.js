window.addEventListener("load", courses);


function courses() {

  let code = ["CS-411", "CS-450", "ITM-301", "ITMD-562", "MATH-332"]
  let title = ["Computer Graphics", "Operating Systems", "Intro OS and Hardware I", "Web Site App Development", "Elementary Linear Algebra"]

  let i = 0;
  for(i=0; i<code.length; i++) {
    document.write(code[i].bold() + " ");
    document.write(title[i] + "\n");
  }
  
}