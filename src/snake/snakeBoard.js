//state
//snake positions (linked list of adjacent cells)
//prev last space
//speed of tick
import React, { Component } from "react";

class SnakeBoard extends Component {
    //min-x, min-y, width, height
    viewBox = [window.innerWidth / -2, 100 - window.innerHeight, window.innerWidth, window.innerHeight];
    board = <div>lol</div>;

    constructor(props) {
        super(props)
        console.log(this.props.size)
        this.board = this.constructBoard();
    }

    cellStyle2 = {
        border: '1px solid #555',
        width: '50px',
        height: '50px',
        lineHeight: '50px',
        textAlign: 'center',
        borderColor: '#0073e6',
        backgroundColor: '#4da6ff'
    };

    cellStyle1 = {
        border: '1px solid #555',
        width: '50px',
        height: '50px',
        lineHeight: '50px',
        textAlign: 'center',
        borderColor: '#0073e6',
        backgroundColor: 'DodgerBlue'
    };

    constructBoard() {
        let tbody = []
        console.log(this.props.size);
        for (let i = 0; i < this.props.size; i++) {
            let cells = []
            for (let j = 0; j < this.props.size; j++) {
                let id = this.props.size * i + j
                let currStyle = this.cellStyle1
                if ((i % 2 != 0 && j % 2 == 0) || (i % 2 == 0 && j % 2 != 0)) {
                    currStyle = this.cellStyle2
                }
                cells.push(
                    <td style={currStyle}
                        key={id}
                        //TODO: onClick={}
                    ></td>
                );
            }
            tbody.push(<tr key={i}>{cells}</tr>)
        }

        let table = <table><tbody>{tbody}</tbody></table>
        return table;
    }

    render() {
        return (
            this.board
            // <svg viewBox={this.viewBox}>
            //     <defs>
            //         <pattern id="grid" width="80" height="80" patternUnits="userSpaceOnUse">
            //             <rect width="80" height="80" fill="url(#smallGrid)" />
            //             <path d="M 80 0 L 0 0 0 80" fill="none" stroke="gray" strokeWidth="2" />
            //         </pattern>
            //     </defs>

            //     <rect width="100%" height="100%" fill="url(#grid)" />
            // </svg>
        );
    }

}
export default SnakeBoard;

