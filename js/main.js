var tried = 3;
var generateBtn = document.getElementById("generate-btn");
generateBtn.addEventListener("click",function(){
    var newPin = Math.random()*(9999 - 1000) + 1000;
    newPin = parseInt(newPin);
    document.getElementById("generated-pin").value = newPin;
    $("#unmatch-notification").hide();
    $("#match-notification").hide();
});
var clicking = document.getElementById("calc-body");
clicking.addEventListener("click",function(event){
    var btnName = event.target.id;
    var typedPin = document.getElementById("typed-pin").value;
    var x = btnName.charAt(btnName.length-1);
    console.log();
    if(x=='c'){
        document.getElementById("typed-pin").value = "";
    }
    else if(x=='d'){
        var afterDelete = typedPin.slice(0,-1);
        document.getElementById("typed-pin").value = afterDelete;

    }
    else if(x=='t'){
        tried -= 1;
        var typedPin = document.getElementById("typed-pin").value;
        var generatedPin = document.getElementById("generated-pin").value;
        console.log(typedPin + "  " + generatedPin);
        if(typedPin == generatedPin){
            $("#match-notification").show();
            document.getElementById("typed-pin").value ="";
            document.getElementById("generated-pin").value = "";
            tried = 3;
            location.reload();
        }
        else{
            $("#unmatch-notification").show();
            if(tried == 0){
                alert("You don't have chances anymore.\nPlease Contact our Customer Care Survice.");
                location.reload();
            }
        }
        document.getElementById("trial").innerText = tried;
    }
    else{
        document.getElementById("typed-pin").value = typedPin+x;
    }
});