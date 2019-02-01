function currenLink(linkClass,currentLinkClass,containerId){
    // Get the container element
var btnContainer = document.getElementById(containerId);

// Get all buttons with class="btn" inside the container
var btns = btnContainer.getElementsByClassName(linkClass);

// Loop through the buttons and add the active class to the current/clicked button
for (var i = 0; i < btns.length; i++) {
  btns[i].addEventListener("click", function() {
    var current = document.getElementsByClassName(currentLinkClass);
    current[0].className = current[0].className.replace(" "+currentLinkClass, "");
    this.className +=" "+currentLinkClass;
  });
}
}
currenLink("nav-link","active","nav-menu");

///////////////
/*ji= new XMLHttpRequest();
ji.open("GET",'info.json',true);
ji.send();
ji.onload=function(){
  info=JSON.parse(ji.responseText);
  info.projects.forEach(element => {
    project=Object.keys(element);
    console.log(project)
      
  });
}*/
////////////
var myinfo={"projects":[{"Responsive Web Design Projects":[
    {"name":"Tribute Page","url":"","pic":"","description":""},
    {"name":"Product Landing Page","url":"","pic":"","description":""},
    {"name":"Survery Form","url":"","pic":"","description":""},
    {"name":"Portfolio Template","url":"","pic":"","description":""},
    {"name":"Technical Documentation Page","url":"","pic":"","description":""}

],
"Javascript Algorithms":[
    {"name":"Roman Numeral Converter","url":"","pic":"","description":""},
    {"name":"Palindrome Checker","url":"","pic":"","description":""},
    {"name":"Caesars Cipher","url":"","pic":"","description":""},
    {"name":"Javascript Calculator","url":"","pic":"","description":""},
    {"name":"100 Doors","url":"","pic":"","description":""}

]
}]};
var projectsection=document.getElementById("projects");
myinfo.projects.forEach(x=>{
   var projectsc=Object.keys(x);
projectsc.forEach(x1=>{
    

    let h1=cEle("h1",x1);
    let projectsContainer_div=cEle("div");
   x[x1].forEach(x=>{
    let projectName_h4=cEle("h4",x.name);
    let project_div=cEle("div",[projectName_h4]);

       projectsContainer_div.appendChild(project_div);
   })

    let div=cEle("div",[h1,projectsContainer_div]);console.log()
    projectsection.appendChild(div);
})
})
