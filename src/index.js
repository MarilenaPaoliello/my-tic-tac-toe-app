import React from 'react';
import ReactDOM from 'react-dom/client';
import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css';

//creating buttons (square) to pass to the Board
class Square extends React.Component {
    //setting this.state in the constructor to define the 
    constructor(props){
        //always call super when defining the constructor of a React.Component subclass
        super(props);
        this.state = {
            value: null,
        };
    }
    render() {
        return (
            // passing a function as the onClick prop
            //displaing the current state’s value when clicked
        <button className="square" onClick={()=>this.setState({value:"X"})}>
            {this.state.value} 
        </button>
        );
    }
}

class Board extends React.Component {
    //adding a constructor to set the state 
    //to the board(parent)to pass to the children
    constructor(props){
        super(props);
        this.state = {
            squares: Array(9).fill(null),
        };

    }
    renderSquare(i) {
        //A) passing a prop called value to the Square
      //A)return <Square value={i} />;
      //modifying the method to read the state from the Board's constructor
      return <Square value={this.state.squares[i]} />;
    }
    render(){
        const status = "Next player: "; 
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
