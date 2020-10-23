// Generate Pin & Button Pin Configure
document.getElementById("pinGenerate").addEventListener("click", function(){
    document.getElementById("pinInput").value = Math.round(Math.random() * 1000000);   
})

buttonHandler("operator", "buttonInput");
buttonHandler("number", "buttonInput");

function buttonHandler(product, id){
    let button = document.getElementsByClassName(product);
    for(let i = 0; i < button.length; i ++){
        button[i].addEventListener("click", function(){
        let output = document.getElementById(id).value;

        if(product == "operator" && id == "buttonInput" && this.id == "clear"){
            document.getElementById(id).value = "";
        }
        else if(product == "operator" && id == "buttonInput" && this.id == "backSpace"){
            output = output.substr(0, output.length-1);
            document.getElementById(id).value = output;
        }
        else if(product == "number" && id == "buttonInput"){
            if(product != NaN){
                output = output + this.id;
                document.getElementById(id).value = output;
            }
    }
})
}
}




// Submit Configure
let clicks = 0;
document.getElementById("submit").addEventListener("click", function(){
    let pinInput = document.getElementById("pinInput").value;
    let buttonInput = document.getElementById("buttonInput").value;

    if(pinInput == buttonInput && pinInput != "" && buttonInput != ""){
            document.getElementById("matched").style.display = "block";
            document.getElementById("notMatched").style.display = "none";
            document.getElementById("pinInput").value = "";
            document.getElementById("buttonInput").value = "";
            
            function secret(){
                document.getElementById("secretDoor").style.display = "block";
                document.getElementById("pin").style.display = "none";
                document.getElementById("notify").style.display = "none";
            }
            setTimeout(secret, 2000);

            
            if(pinInput == buttonInput){
                document.getElementById("clickCounter").style.display = "none";
            }
    }

    else if(pinInput != buttonInput && pinInput != "" && buttonInput != ""){
        document.getElementById("notMatched").style.display = "block";
        document.getElementById("matched").style.display ="none";
        document.getElementById("buttonInput").value = "";
    }

    else if(pinInput == "" && buttonInput == ""){
        alert("Please Generate Pin Number");
        document.getElementById("clickCounter").style.display = "none";
    };


    if(clicks == 3 && pinInput != buttonInput){
        alert("Exceed the Maximum Number of Click. You Lost Access........");
        document.getElementById("submit").style.display = "none";
    }

    clicks += 1;
    document.getElementById("clickCounter").innerText = clicks + " " + "Try Left";
})

