function initial_score(){
	var c=localStorage.computer;
	var u=localStorage.user;
	var d=localStorage.draw;
	if(!localStorage.computer)
	{
		c = 0;
	}
	else if(!localStorage.user){
		u = 0;
	}
	else if(!localStorage.draw){
		d = 0;
	}

	$("#you").text("Win : "+u);
	$("#cmp").text("Lost : "+c);
	$("#draw").text("Draw : "+d);
}
var init = function () {
	var val=$( window ).width();
	initial_score();

};

window.onload = init;
var a1; 
var a2;
var a3;
var b1;
var b2;
var b3;
var c1;
var c2;
var c3;
var win=0;
var x=1;
var game;
var turn = 0; 

function multiplayer(obj)
{

	//$("#you").text("You : "+localStorage.user);
	//$("#cmp").text("Computer : "+localStorage.computer);
	//$("#draw").text("Drawn : "+localStorage.draw);
	//console.log(obj)
	initial_score();
	if(game=="multi")
	{
		if(x%2 == 1)
		{
			x++;
			$("#"+obj).text("x");
			checkboard();
			checkresult();
		}
		else
		{
			x++;
			$("#"+obj).text("o");
			checkboard();
			checkresult();
		}
	}
	else if(game=="single")
	{
	
		if (turn == 0) 
		{
			$("#"+obj).text("x");
			checkboard();
			checkresult();
			turn = 1;
			if(win != 1)
			{
				compMove();
				checkboard();
				checkresult();
			}
 


		}
	}

}
function restart(){

    a1 = $('#a1').text("");
    b1 = $('#b1').text("");
    c1 = $('#c1').text("");
    a2 = $('#a2').text("");
    b2 = $('#b2').text("");
    c2 = $('#c2').text("");
    a3 = $('#a3').text("");
    b3 = $('#b3').text("");
    c3 = $('#c3').text("");
	
	x=1;
	turn=0;
	win=0;
	$("#score").css({"display":"none"});
	

}

function home(){
	$("#home").css("display", "block");
	$("#game").css("display", "none");
	$("#score").css({"display":"none"});
}
	
function startgame(value)
{
    a1 = $('#a1').text("");
    b1 = $('#b1').text("");
    c1 = $('#c1').text("");
    a2 = $('#a2').text("");
    b2 = $('#b2').text("");
    c2 = $('#c2').text("");
    a3 = $('#a3').text("");
    b3 = $('#b3').text("");
    c3 = $('#c3').text("");
	
	x=1;
	turn=0;
	win=0;
	$("#score").css({"display":"none"});


	$("#home").css("display", "none");
	$("#game").css("display", "block");
	if(value == 'multi')
	{
		game="multi";
	}
	else if(value == 'single')
	{
		game="single";
	
	}
	
}

function checkboard(){
    a1 = $('#a1').html();
    a2 = $('#a2').html();
    a3 = $('#a3').html();
    b1 = $('#b1').html();
    b2 = $('#b2').html();
    b3 = $('#b3').html();
    c1 = $('#c1').html();
    c2 = $('#c2').html();
    c3 = $('#c3').html();
}

function checkresult(){
	if((a1 == a2 && a1 == a3 && (a1 == "x")) || (b1 == b2 && b1 == b3 && (b1 == "x")) || (c1 == c2 && c1 == c3 && (c1 == "x")) || (a1 == b1 && a1 == c1 && (a1 == "x")) || (a2 == b2 && a2 == c2 && (a2 == "x")) || (a3 == b3 && a3 == c3 && (a3 == "x")) || (a1 == b2 && a1 == c3 && (a1 == "x")) || (a3 == b2 && a3 == c1 && (a3 == "x")) ) 
	{
		win=1;
		//alert("x win")
		
		if(game == "single")
		{
			if(typeof(Storage) !== "undefined") 
			{
				if (localStorage.user) 
				{
					localStorage.user = Number(localStorage.user)+1;
					$("#you").text("Lost : "+localStorage.you);
				} 
				else 
				{
					localStorage.user = 1;
				}
			}
		}
		$("#score").css({"display":"block"});
		$("#win").text("You win : "+localStorage.user);
	}
	else if((a1 == a2 && a1 == a3 && (a1 == "o")) || (b1 == b2 && b1 == b3 && (b1 == "o")) || (c1 == c2 && c1 == c3 && (c1 == "o")) || (a1 == b1 && a1 == c1 && (a1 == "o")) || (a2 == b2 && a2 == c2 && (a2 == "o")) || (a3 == b3 && a3 == c3 && (a3 == "o")) || (a1 == b2 && a1 == c3 && (a1 == "o")) || (a3 == b2 && a3 == c1 && (a3 == "o")))
	{
		win=1;
		//alert("0 Win")
			if(typeof(Storage) !== "undefined") 
			{
				if (localStorage.computer) 
				{
					localStorage.computer = Number(localStorage.computer)+1;
					$("#computer").text("Lost : "+localStorage.computer);
				} 
				else 
				{
					localStorage.computer = 1;
				}
			}
		$("#score").css({"display":"block"});
		$("#win").text("Computer win : "+localStorage.computer);
	}
	else if(((a1 == "x") || (a1 == "o")) && ((b1 == "x") || (b1 == "o")) && ((c1 == "x") || (c1 == "o")) && ((a2 == "x") || (a2 == "o")) && ((b2 == "x") || (b2 == "o")) && ((c2 == "x") || (c2 == "o")) && ((a3 == "x") || (a3 == "o")) && ((b3 == "x") || (b3 == "o")) && ((c3 == "x") || (c3 == "o"))) {
		win=1;
		//alert("Match Tie")
		
			if(typeof(Storage) !== "undefined") 
			{
				if (localStorage.draw) 
				{
					localStorage.draw = Number(localStorage.draw)+1;
					$("#draw").text("Draw : "+localStorage.draw);
				} 
				else 
				{
					localStorage.draw = 1;
				}
			}		
		$("#score").css({"display":"block"});
		$("#win").text("Match Tie : "+localStorage.draw);
	}
	
}


var compMove = function () {

	if(turn == 1)
	{
    if (a1 == "" && ((a3 == "x" && a2 == "x") || (c3 == "x" && b2 == "x") || (c1 == "x" && b1 == "x"))) 
    {
        $('#a1').text("o");
        turn = 0;
    } 
	else 
	{
      if (a2 == "" && ((a1 == "x" && a3 == "x") || (c2 == "x" && b2 == "x"))) {
        $('#a2').text("o");
        turn = 0;
        }
        else{
        if (a3 == "" && ((a1 == "x" && a2 == "x") || (c1 == "x" && b2 == "x") || (c3 == "x" && b3 == "x"))) {
            $('#a3').text("o");
            turn = 0;
        }
            else{
            if (c3 == "" && ((c1 == "x" && c2 == "x") || (a1 == "x" && b2 == "x") || (a3 == "x" && b3 == "x"))) {
                $('#c3').text("o");
                turn = 0;
        }
                else{
                if (c1 == "" && ((c3 == "x" && c2 == "x") || (a3 == "x" && b2 == "x") || (a1 == "x" && b1 == "x"))) {
                    $('#c1').text("o");
                    turn = 0;
        }
                    else{
                    if (c2 == "" && ((c3 == "x" && c1 == "x") || (a2 == "x" && b2 == "x"))) {
                        $('#c2').text("o");
                        turn = 0;
        }
                        else{
                        if (b1 == "" && ((b3 == "x" && b2 == "x") || (a1 == "x" && c1 == "x"))) {
                            $('#b1').text("o");
                            turn = 0;
        }
                            else{
                            if (b3 == "" && ((a3 == "x" && c3 == "x") || (b2 == "x" && b1 == "x"))) {
                                $('#b3').text("o");
                                turn = 0;
        }
                                else{
                                if (b2 == "" && ((a3 == "x" && c1 == "x") || (c3 == "x" && a1 == "x") || (b3 == "x" && b1 == "x") || (c2 == "x" && a2 == "x"))) {
                                    $('#b2').text("o");
                                    turn = 0;
        }
                                   else{ 
                                    if (b2 == "") {
                                        $('#b2').text("o");
                                        turn = 0;
                                       
                                    }
                                        else{
                                        if (a1 == "") {
                                            $('#a1').text("o");
                                            turn = 0;
                                            
                                    }
                                            else{
                                            if (c3 == "") {
                                            $('#c3').text("o");
                                            turn = 0;
                                          
                                    } 
                                                else {
                                                if (c2 == "") {
                                            $('#c2').text("o");
                                            turn = 0;
                                          
                                    }
                                                    else{
                                                    if (b1 == "") {
                                            $('#b1').text("o");
                                            turn = 0;
                                          
                                    }
                                                    }
                                                }
                                            }
                                   
                                    
                                        }
                                   }
                                }
                            }
                        }
                    }
                }
            }
        }
    }	

}
   
};








// firework:
