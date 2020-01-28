let boxes = $(".container div");
let move = 2;
let box1 = $("#box1")
let box2 = $("#box2")
let box3 = $("#box3")
let box4 = $("#box4")
let box5 = $("#box5")
let box6 = $("#box6")
let box7 = $("#box7")
let box8 = $("#box8")
let box9 = $("#box9")

$ (() => {
//win function that will also clear the board
    const getWinner = () => {
        
        if ($(box1).text() !== "" && $(box1).text() === $(box2).text() && $(box1).text() === $(box3).text()) {
            $(boxes).empty()
            move = 2
            $(".turn").text("X's Turn").css("font-size", "40px").css("background", "hsl(206, 49%, 61%)").css("font-weight", "bold")
            alert("Winner")
        }
        else if ($(box4).text() !== "" && $(box4).text() === $(box5).text() && $(box4).text() === $(box6).text()) {
            $(boxes).empty()
            move = 2
            $(".turn").text("X's Turn").css("font-size", "40px").css("background", "hsl(206, 49%, 61%)").css("font-weight", "bold")
            alert("Winner")
        }
        else if ($(box7).text() !== "" && $(box7).text() === $(box8).text() && $(box7).text() === $(box9).text()) {
            $(boxes).empty()
            move = 2
            $(".turn").text("X's Turn").css("font-size", "40px").css("background", "hsl(206, 49%, 61%)").css("font-weight", "bold")
            alert("Winner")
        }
        else if ($(box1).text() !== "" && $(box1).text() === $(box5).text() && $(box1).text() === $(box9).text()) {
            $(boxes).empty()
            move = 2
            $(".turn").text("X's Turn").css("font-size", "40px").css("background", "hsl(206, 49%, 61%)").css("font-weight", "bold")
            alert("Winner")
        }
        else if ($(box3).text() !== "" && $(box3).text() === $(box5).text() && $(box3).text() === $(box7).text()) {
            $(boxes).empty()
            move = 2
            $(".turn").text("X's Turn").css("font-size", "40px").css("background", "hsl(206, 49%, 61%)").css("font-weight", "bold")
            alert("Winner")
        }
        else if ($(box1).text() !== "" && $(box1).text() === $(box4).text() && $(box1).text() === $(box7).text()) {
            $(boxes).empty()
            move = 2
            $(".turn").text("X's Turn").css("font-size", "40px").css("background", "hsl(206, 49%, 61%)").css("font-weight", "bold")
            alert("Winner")
        }
        else if ($(box2).text() !== "" && $(box2).text() === $(box5).text() && $(box2).text() === $(box8).text()) {
            $(boxes).empty()
            move = 2
            $(".turn").text("X's Turn").css("font-size", "40px").css("background", "hsl(206, 49%, 61%)").css("font-weight", "bold")
            alert("Winner")
        }
        else if ($(box3).text() !== "" && $(box3).text() === $(box6).text() && $(box3).text() === $(box9).text()) {
            $(boxes).empty()
            move = 2
            $(".turn").text("X's Turn").css("font-size", "40px").css("background", "hsl(206, 49%, 61%)").css("font-weight", "bold")
            alert("Winner")
        }
    }

//click function for x and o
   $(".container div").click(function () {
            ////if move is 2 and square is empty, this will print x
            if (move % 2 === 0 && $(this).text() === "" && $(this).text() === "") {
                $(this).text("X")
                move = 3;
                $(".turn").text("O's Turn").css("font-size", "40px").css("background", "hsl(206, 49%, 61%)").css("font-weight", "bold")
                getWinner()
            }
            //if move is 3 and square is empty, this will print o
            //calls fuunction getWinner
            //changes the text so player knows whos turn it is
            else if (move % 3 === 0 && $(this).text() === "" && $(this).text() === "") {
                $(this).text("O")
                move = 2;
                $(".turn").text("X's Turn").css("font-size", "40px").css("background", "hsl(206, 49%, 61%)").css("font-weight", "bold");
                getWinner();   
            }
    })


    //clears the board and changes to X;s turn
    const clearBoard = () =>{
        $(boxes).empty();
        $(".turn").text("X's Turn").css("font-size", "40px").css("background", "hsl(206, 49%, 61%)").css("font-weight", "bold");
        moves = 2;
    }

    $("button").on("click", clearBoard)
        

//how do i keep all the css the same when using on.clicks
    //when i click each box, the x's turn changes size and weight.
    //also the background color changes.
})