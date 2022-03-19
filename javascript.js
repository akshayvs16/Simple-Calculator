function btclick(val)
{ console.log("working")
    document.getElementById("screen").value= document.getElementById("screen").value+val
}
function btclear() {
    document.getElementById("screen").value=""
}
function equalclick(){
    var text=document.getElementById("screen").value
    var result=eval(text)
    document.getElementById("screen").value=result
}
function btwelcome(){
    console.log("welcome")
    document.getElementById("screen").style.backgroundColor = "antiquewhite";
    // window.alert("Welcome")
   
    document.getElementById("screen").value=""
    document.getElementById("screen").disabled=false;
    document.getElementById("btb7").disabled=false;
    document.getElementById("btb8").disabled=false;
    document.getElementById("btb9").disabled=false;
    document.getElementById("btby").disabled=false;
    document.getElementById("btb4").disabled=false;
    document.getElementById("btb5").disabled=false;
    document.getElementById("btb6").disabled=false;
    document.getElementById("btbx").disabled=false;
    document.getElementById("btb1").disabled=false;
    document.getElementById("btb2").disabled=false;
    document.getElementById("btb3").disabled=false;
    document.getElementById("btbm").disabled=false;
    document.getElementById("btbd").disabled=false;
    document.getElementById("btbq").disabled=false;
    document.getElementById("btb0").disabled=false;
    document.getElementById("btbp").disabled=false;
}
function btoff(){
    document.getElementById("screen").style.backgroundColor = "black";
    // darkslategray
    document.getElementById("screen").disabled=true;
    document.getElementById("btb7").disabled=true;
    document.getElementById("btb8").disabled=true;
    document.getElementById("btb9").disabled=true;
    document.getElementById("btby").disabled=true;
    document.getElementById("btb4").disabled=true;
    document.getElementById("btb5").disabled=true;
    document.getElementById("btb6").disabled=true;
    document.getElementById("btbx").disabled=true;
    document.getElementById("btb1").disabled=true;
    document.getElementById("btb2").disabled=true;
    document.getElementById("btb3").disabled=true;
    document.getElementById("btbm").disabled=true;
    document.getElementById("btbd").disabled=true;
    document.getElementById("btbq").disabled=true;
    document.getElementById("btb0").disabled=true;
    document.getElementById("btbp").disabled=true;

    document.getElementById("screen").value=""
}