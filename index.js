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


var myinfo={"objectif":["/I'am Afef Drissi","Je suis Afef Drissi",
"Vous pouvez trouver ici des projets Web que j'ai récemment créés avec JS, SASS / CSS3 et HTML5.",
"/Je suis actuellement à la recherche d'un poste dans le domaine de développement/design web. Je maitrise les technologies du developpement web, Ainsi que les outils de conception graphique",
"/I design and build websites using HTML5, SASS and Vanilla JS",

      ],
  "projects":[{
    "PSD TO HTML/CSS/JS":[
      {"name":"Fusion","url":"https://afefdrissi.github.io/fusion/","pic":"","description":""},
      {"name":"Mark","url":"https://afefdrissi.github.io/mark/","pic":"","description":""}
    
    ],
    "Responsive Web Design Projects":[
        {"name":"Product Landing Page","url":"https://afefdrissi.github.io/plp","pic":"","description":""},
        {"name":"Technical Documentation Page","url":"https://afefdrissi.github.io/tdp/","pic":"","description":""},
    
    
    {"name":"Portfolio Template","url":"https://afefdrissi.github.io/pt/index.html","pic":"","description":""},
    {"name":"Survery Form","url":"","pic":"","description":""},
    {"name":"Tribute Page","url":"","pic":"","description":""}


],
"Javascript Algorithms":[
    {"name":"Roman Numeral Converter","url":"https://afefdrissi.github.io/jsAlgos/index.html#algo-3","pic":"","description":""},
    {"name":"Palindrome Checker","url":"https://afefdrissi.github.io/jsAlgos/index.html#algo-1","pic":"","description":""},
    {"name":"Caesars Cipher","url":"https://afefdrissi.github.io/jsAlgos/index.html#algo-2","pic":"","description":""},
    {"name":"Javascript Calculator","url":"","pic":"","description":""},
    {"name":"100 Doors","url":"","pic":"","description":""}

],

}]};
///////////////
ji= new XMLHttpRequest();
ji.open("GET",'https://afefdrissi.github.io/afefdrissi/info.json',true);
ji.send();
ji.onload=function(){
  myinfo=JSON.parse(ji.responseText);

}
////////////
var objectif=document.getElementById("objectif");
myinfo.objectif.forEach(x=>{
  if(x[0]!='/'){
    let p=cEle("p",x+'.');
objectif.appendChild(p);
  }

})
var projectsection=document.getElementById("projects");
myinfo.projects.forEach(x=>{
   var projectsc=Object.keys(x);
projectsc.forEach(x1=>{
    

    let h1=cEle("h1",x1);
    let projectsContainer_div=cEle("div");
   x[x1].forEach(x=>{
     if (x.url!="")
   { let projectName_h4=cEle("h4",x.name);
    let project_a=cEle("a",[projectName_h4]);
    project_a.href=x.url;
    let project_div=cEle("div",[project_a]);

       projectsContainer_div.appendChild(project_div);}
   })

    let div=cEle("div",[h1,projectsContainer_div]);console.log()
    projectsection.appendChild(div);
})
})
