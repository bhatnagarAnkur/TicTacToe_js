const message = document.getElementById("message");
let currentPlayer = "X";
let isXChance = true;

$(function () {

  $("div.cell").on("click", function () {
    if (!Checkwinner()) {
      if ($(this).text() == "") {
        currentPlayer = currentPlayer === "X" ? "O" : "X";
        message.textContent = `Player ${currentPlayer}'s Turn`;
        if (isXChance) {
          $(this).text("X");
        } else {
          $(this).text("O");
        }
        Checkwinner();
        isXChance = !isXChance;
      }
    }
  });
});

const Checkwinner = () => {
  //check first row
  if (
    $("#1").text() != "" &&
    $("#1").text() == $("#2").text() &&
    $("#2").text() == $("#3").text()
  ) {
    $("#1").css("background-color", "green");
    $("#2").css("background-color", "green");
    $("#3").css("background-color", "green");
    alert($("#1").text() + " wins!");
    return true;
  }
  //check second row
  else if (
    $("#4").text() != "" &&
    $("#4").text() == $("#5").text() &&
    $("#5").text() == $("#6").text()
  ) {
    $("#4").css("background-color", "green");
    $("#5").css("background-color", "green");
    $("#6").css("background-color", "green");
    alert($("#4").text() + " wins!");
    return true;
  }
  //check third row
  else if (
    $("#7").text() != "" &&
    $("#7").text() == $("#8").text() &&
    $("#8").text() == $("#9").text()
  ) {
    $("#7").css("background-color", "green");
    $("#8").css("background-color", "green");
    $("#9").css("background-color", "green");
    alert($("#7").text() + " wins!");
    return true;
  }
  //check first column
  else if (
    $("#1").text() != "" &&
    $("#1").text() == $("#4").text() &&
    $("#4").text() == $("#7").text()
  ) {
    $("#1").css("background-color", "green");
    $("#4").css("background-color", "green");
    $("#7").css("background-color", "green");
    alert($("#1").text() + " wins!");
    return true;
  }
  //check second column
  else if (
    $("#2").text() != "" &&
    $("#2").text() == $("#5").text() &&
    $("#5").text() == $("#8").text()
  ) {
    $("#2").css("background-color", "green");
    $("#5").css("background-color", "green");
    $("#8").css("background-color", "green");
    alert($("#2").text() + " wins!");
    return true;
  }
  //check third column
  else if (
    $("#3").text() != "" &&
    $("#3").text() == $("#6").text() &&
    $("#6").text() == $("#9").text()
  ) {
    $("#3").css("background-color", "green");
    $("#6").css("background-color", "green");
    $("#9").css("background-color", "green");
    alert($("#3").text() + " wins!");
    return true;
  }
  //check first diagonal
  else if (
    $("#1").text() != "" &&
    $("#1").text() == $("#5").text() &&
    $("#5").text() == $("#9").text()
  ) {
    $("#1").css("background-color", "green");
    $("#5").css("background-color", "green");
    $("#9").css("background-color", "green");
    alert($("#1").text() + " wins!");
    return true;
  }
  //check second diagonal
  else if (
    $("#3").text() != "" &&
    $("#3").text() == $("#5").text() &&
    $("#5").text() == $("#7").text()
  ) {
    $("#3").css("background-color", "green");
    $("#5").css("background-color", "green");
    $("#7").css("background-color", "green");
    alert($("#3").text() + " wins!");
    return true;
  } else return false;
};

const restartGame=()=>{
    alert("Game Restarted!");
    $("div.cell").text("");
    $("div.cell").css("background-color", "white");

    message.textContent = `Player ${currentPlayer}'s Turn`;
}
