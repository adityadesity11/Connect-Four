var player1 = prompt("Player 1: Enter Your Name, You will be Blue");
var playerColor1 = 'rgb(86,151,255)';
var player2 = prompt("Player 2: Enter Your Name, You will be Red");
var playerColor2 = 'rgb(237,45,73)';
var gameOn = true;
var table = $('table tr');




function reportWin(rowNum,colNum)
{
    console.log("You won starting at this row");
    console.log(rowNum);
    console.log(colNum);
}
// function changeColor(rowIndex,colIndex,color)
// {
//     // return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
//     return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
// }
function changeColor(rowIndex,colIndex,color) {
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color',color);
  }
function returnColor(rowIndex,colIndex)
{
    // return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');
    return table.eq(rowIndex).find('td').eq(colIndex).find('button').css('background-color');

}
function checkBottom(colIndex)
{
    var colorReport = returnColor(5,colIndex);
    for(var row=5; row>-1;row--)
    {
        colorReport = returnColor(row,colIndex);
        if(colorReport==='rgb(128,128,128)')  // GRAY color code;
        {
            return row;
        }
    }
}
function checkBottom(colIndex) {
    var colorReport = returnColor(5,colIndex);
    var row;
    for ( row = 5; row > -1; row--) {
      colorReport = returnColor(row,colIndex);
      if (colorReport === 'rgb(128, 128, 128)') {
        return row;
      }
    }
  }
function colorMatchCheck(one,two,three,four)
{
    // return (one===two&&one===three&&one===four &&one!=='rgb(128,128,128)'&&one !== undefined);
    return (one===two && one===three && one===four && one !== 'rgb(128, 128, 128)' && one !== undefined);

}

function horizontalWincheck(){
    for(var row=0;row<6;row++)
    {
        for(var col=0;col<4;col++)
        {
            if(colorMatchCheck(returnColor(row,col),returnColor(row,col+1),returnColor(row,col+2),returnColor(row,col+3)))
            {
                console.log('Horizontal');
                reportWin(row,col);
                return true;
            }
            else{continue;}
        }
    }
}
function verticalwinCheck()
{
    for(var col=0;col<7;col++)
    {
        for(var row=0;row<3;row++)
        {
            if(colorMatchCheck(returnColor(row,col),returnColor(row+1,col),returnColor(row+2,col),returnColor(row+3,col)))
            {
                console.log("Vertical");
                reportWin(row,col);
                return true;
            }
            else {continue;}
        }
    }
}
function diagonalWincheck()
{
    for(var col=0;col<5;col++)
    {
        for(row =0;row<7;row++)
        {
            if(colorMatchCheck(returnColor(row,col),returnColor(row+1,col+1),returnColor(row+2,col+2),returnColor(row+3,col+3)))
            {
                console.log("Diagonal");
                reportWin(row,col);
                return true;
            }
            else if(colorMatchCheck(returnColor(row,col),returnColor(row-1,col+1),returnColor(row-2,col+2),returnColor(row-3,col+3)))
            {
                console.log("Diagonal");
                reportWin(row,col);
                return true;
            }
            else {continue};
        }
        
    }
}


//Start with player 1;
var currentPlayer = 1;
var currentName = player1;
var currentColor = playerColor1;

$('h3').text(player1+ " it is your turn, pick a column to drop in!");

$('.board button').on('click',function(){
    var col = $(this).closest("td").index();
    var bottomAvail = checkBottom(col);
    changeColor(bottomAvail,col,currentColor);

    if(horizontalWincheck()||verticalwinCheck()||diagonalWincheck()){
        $('h1').text(currentName+ " Your have won");
        $('h1').css('color','red')
        $('h1').css('font-weight','bold')
        // return;
        reportWin(row,col);
        // $('h3').fadeout('fast');
        $('h2').Text('Refresh Your Page to Play Again!');
        // $.('h2').css('background-color','red');
        

    }
    currentPlayer = currentPlayer*(-1);
    if(currentPlayer===1)
    {
        currentName = player1;
        $('h3').text(currentName + " It's your turn");
        currentColor=playerColor1;
        // changeColor(bottomAvail,col,playerColor1);
    }
    else{
        currentName=player2;
        $('h3').text(currentName + " It's your turn");
        currentColor=playerColor2;
    }
})