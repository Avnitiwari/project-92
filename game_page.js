player1_name = localStorage.getItem("player1_name");
player2_name = localStorage.getItem("player2_name");

player1_score=0;
player2_score=0;

document.getElementById("player1_name").innerHTML=player1_name +":";
document.getElementById("player2_name").innerHTML=player2_name +":";

document.getElementById("player1_score").innerHTML=player1_score;
document.getElementById("player2_score").innerHTML=player2_score;

document.getElementById("player_question").innerHTML="Question turn -"+player1_name;
document.getElementById("player_answer").innerHTML="Answer turn -"+player2_name;

function send(){

    number1=document.getElementById("number1").value;
    number2=document.getElementById("number2").value;
    actual_answer=parseInt(number1) * parseInt(number2);
    

    charAt1=word.charAt1(1)
    console.log(charAt1);

    length_divide_2 = Math.floor(word.lenth/2);
    charAt2=word.charAT(length_divide_2);
    console.log(charAt2);

    remove_charAT1=word.replace(charAt1,"_");
    remove_charAT2=remove_charAT1.replace(charAt2,"_");
    remove_charAT3=remove_charAT2.replace(charAt3,"_");
    console.log(charAt3);

    question_number="<h4>"+number1+"x"+number2+"</h4>";
    input_box="<br>answer : <input type='text' id='input_check_box'>";
    check_button="<br><br><button class='btn btn-info' onclick='check()'>check</button>";
    row=question_number+input_box+check_button;
    document.getElementById("number1").value ="";
    document.getElementById("number2").value ="";

    function check()
    {
        get_answer=document.getElementById("input_check_box").value;
        if(get_answer==actual_answer)
        {
            if(answer_turn=="player1_name")
            {
               update_player1_score=player1_score +1;
                document.getElementById("player1_score").innerHTML=update_player1_score;

        
            }
            else
            {
                update_player2_score=player2_score +1;
                document.getElementById("player2_score").innerHTML=update_player2_score;

            }
        }
        if(question_turn=="player1_name")
        {
            question_turn="player2_name"
            document.getElementById("player_question").innerHTML="Question Turn-"+player2_name;

        }
        else
        {
            question_turn="player1_name"
            document.getElementById("player_question").innerHTML="Questionturn-"+player1_name;

    
        }
        if(answer_turn=="player1_name")
        {
           answer_turn="player2_name"
            document.getElementById("player_answer").innerHTML="answerturn-"+player2_name;

        }
        else
        {
           answer_turn="player1_name"
            document.getElementById("player_answer").innerHTML="answerturn-"+player1_name;


    
        }
        document.getElementById("output").innerHTML="";
    }
}