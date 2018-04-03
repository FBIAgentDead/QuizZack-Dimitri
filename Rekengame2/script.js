const myAssignment = document.getElementById('myAssignment');
const myInput = document.getElementById('myInput');
const btn1 = document.getElementById("btn1");
const input = document.getElementById("input");

let assignments = [];
let goed;
var n = 0;

function init(){
    for(i = 0; i < 10; i++) {
      assignments.push(makeSum())
    }
    myAssignment.innerHTML = assignments[n].numA + " * " + assignments[n].numB;
    console.log(assignments);
}

myInput.addEventListener("keyup", function(evt){
    if(evt.keyCode === 13){
        if(n > 9){
            input.innerHTML = "";
            myInput.value = "";

          myAssignment.innerHTML = "" +
              "    <div>\n" +
              "        <table id=\"myTable\">\n" +
              "            <thead>\n" +
              "                <tr>\n" +
              "                    <th>Assignment</th>\n" +
              "                    <th>Your Answer</th>\n" +
              "                    <th>Correct Answer</th>\n" +
              "                </tr>\n" +
              "            </thead>\n" +
              "            <tr>\n" +
              "                <th>"+ assignments[0].numA + " * " +  assignments[0].numB +"</th>\n" +
              "                <th>"+ assignments[0].jans +"</th>\n" +
              "                <th>"+ assignments[0].ans +"</th>\n" +
              "            </tr>\n" +
              "            <tr>\n" +
              "                <th>"+ assignments[1].numA + " * " +  assignments[1].numB +"</th>\n" +
              "                <th>"+ assignments[1].jans +"</th>\n" +
              "                <th>"+ assignments[1].ans +"</th>\n" +
              "            </tr>\n" +
              "            <tr>\n" +
              "                <th>"+ assignments[2].numA + " * " +  assignments[2].numB +"</th>\n" +
              "                <th>"+ assignments[2].jans +"</th>\n" +
              "                <th>"+ assignments[2].ans +"</th>\n" +
              "            </tr>\n" +
              "            <tr>\n" +
              "                <th>"+ assignments[3].numA + " * " +  assignments[3].numB +"</th>\n" +
              "                <th>"+ assignments[3].jans +"</th>\n" +
              "                <th>"+ assignments[3].ans +"</th>\n" +
              "            </tr>\n" +
              "            <tr>\n" +
              "                <th>"+ assignments[4].numA + " * " +  assignments[4].numB +"</th>\n" +
              "                <th>"+ assignments[4].jans +"</th>\n" +
              "                <th>"+ assignments[4].ans +"</th>\n" +
              "            </tr>\n" +
              "            <tr>\n" +
              "                <th>"+ assignments[5].numA + " * " +  assignments[5].numB +"</th>\n" +
              "                <th>"+ assignments[5].jans +"</th>\n" +
              "                <th>"+ assignments[5].ans +"</th>\n" +
              "            </tr>\n" +
              "            <tr>\n" +
              "                <th>"+ assignments[6].numA + " * " +  assignments[6].numB +"</th>\n" +
              "                <th>"+ assignments[6].jans +"</th>\n" +
              "                <th>"+ assignments[6].ans +"</th>\n" +
              "            </tr>\n" +
              "            <tr>\n" +
              "                <th>"+ assignments[7].numA + " * " +  assignments[7].numB +"</th>\n" +
              "                <th>"+ assignments[7].jans +"</th>\n" +
              "                <th>"+ assignments[7].ans +"</th>\n" +
              "            </tr>\n" +
              "            <tr>\n" +
              "                <th>"+ assignments[8].numA + " * " +  assignments[8].numB +"</th>\n" +
              "                <th>"+ assignments[8].jans +"</th>\n" +
              "                <th>"+ assignments[8].ans +"</th>\n" +
              "            </tr>\n" +
              "            <tr>\n" +
              "                <th>"+ assignments[9].numA + " * " +  assignments[9].numB +"</th>\n" +
              "                <th>"+ assignments[9].jans +"</th>\n" +
              "                <th>"+ assignments[9].ans +"</th>\n" +
              "            </tr>\n" +
              "        </table>\n" +
              "    </div>";

        }
        assignments[n].jans = myInput.value;
        myAssignment.innerHTML = assignments[n].numA + " * " + assignments[n].numB;
        myInput.value = "";
        n++;
    }
    window.setTimeout(3000)
});

function makeSum(){
    let mySum = {};
    mySum.numA = getNumber();
    mySum.numB = getNumber();
    mySum.ans = mySum.numA * mySum.numB;
    myInput.focus();
    return mySum;
}

function StartGame(){
    var x = document.getElementById("wrapper");
    btn1.style.display = "none";
    if (x.style.display === "none"){
        x.style.display = "none";
    }else{
        x.style.display = "block";
    }
}

function getNumber(){
    let number = Math.floor(Math.random()*9)+1;
    return number;
}

init();
