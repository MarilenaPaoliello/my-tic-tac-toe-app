import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//A)creating buttons (square) to pass to the Board
// class Square extends React.Component {
    //B deleting the constructor because Square no longer keeps track of the game’s state
    //A) setting this.state in the constructor to define the status
    /* constructor(props){
        //A) always call super when defining the constructor of a React.Component subclass
        super(props);
        this.state = {
            value: null,
        };
    } */
/*     render() {
        return ( */
            // passing a function as the onClick prop
            //displaing the current state’s value when clicked
/*         <button 
            className="square" 
            onClick={()=>this.props.onClick({value:"X"})}
        >
        {this.props.value} 
        </button>
        );
    }
}
 */
//C) replacing Square class with function component 
function Square(props) {
    return (
      <button className="square" onClick={props.onClick}>
        {props.value}
      </button>
    );
  }
class Board extends React.Component {
    //adding a constructor to set the state 
    //to the board(parent)to pass to the children
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
            //adding a boolena to set the first move to be “X” by default
            xIsNext: true,
        };

    }
    //adding a method to store into the Board the square status change
    manageClick(i){
        const squares = this.state.squares.slice();
        //B) modifing in order to ignore a click
        // if someone has won the game or if the square is filled
        if (calculateWinner(squares) || squares[i]) {
            return;
          }
          //*
        
        //A)adding condition with xIsNext to flip from X to O
        squares[i] = this.state.xIsNext ? 'X' : 'O';
        this.setState({
          squares: squares,
          xIsNext: !this.state.xIsNext,
        });
    }
    renderSquare(i) {
        //A) passing a prop called value to the Square
      //A)return <Square value={i} />;
      //modifying the method to read the state from the Board's constructor
      return <Square 
        value={this.state.squares[i]}
        //passing down a function from  Board to Square
        //Square will call manageClick(i) when clicked 
        onClick={()=>this.manageClick(i)} 
      />;
    }
    render(){
        //A)updating status to displays which player has the next turn
        //const status = "Next player is: " + (this.state.xIsNext ? 'X' : 'O'); 

        //B) calling calculateWinner(squares) to check if the winner has won
        const winner = calculateWinner(this.state.squares);
        let status;
        if(winner){
            status= "winner is: " + winner; 
        }else{
            status="Next player" + (this.state.xIsNext ? 'X' : 'O');
        }
        return(
            <div>
                <div className="status">{status}</div>
                <div className="board-row">
                    {/* defining a number in each square in the rendered output */}
                    {this.renderSquare(0)}
                    {this.renderSquare(1)}
                    {this.renderSquare(2)}
                </div>
                <div className="board-row">
                    {this.renderSquare(3)}
                    {this.renderSquare(4)}
                    {this.renderSquare(5)}
                </div>
                <div className="board-row">
                    {this.renderSquare(6)}
                    {this.renderSquare(7)}
                    {this.renderSquare(8)}
                </div>            </div>
        )
    }
}
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<Board />);
//adding helper function to check for a winner 
function calculateWinner(squares) {
    const lines = [
      [0, 1, 2],
      [3, 4, 5],
      [6, 7, 8],
      [0, 3, 6],
      [1, 4, 7],
      [2, 5, 8],
      [0, 4, 8],
      [2, 4, 6],
    ];
    for (let i = 0; i < lines.length; i++) {
      const [a, b, c] = lines[i];
      if (squares[a] && squares[a] === squares[b] && squares[a] === squares[c]) {
        return squares[a];
      }
    }
    return null;
  }
