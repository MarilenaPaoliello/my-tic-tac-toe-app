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
        <button className="square" onClick={()=>this.setS({value:"X"})}>
            {this.state.value} 
        </button>
        );
    }
}

class Board extends React.Component {
    renderSquare(i) {
        // passing a prop called value to the Square
      return <Square value={i} />;
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
