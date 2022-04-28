let ans = document.getElementById("answer");
function check(){
var rad = document.getElementsByName("r1");

    if(rad[0].checked){
        ans.innerHTML = "No think again!";    
    }
    else if(rad[1].checked){
        ans.innerHTML = "Yes!";
    }
    else if(rad[2].checked){
        ans.innerHTML = "No!";
    }
}

