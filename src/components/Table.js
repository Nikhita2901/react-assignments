import React from 'react';
import TableRow from './TableRow';

class Table extends React.Component{
    constructor(props) {
        super(props);
        this.state = {
            rows: [{index: 0, name: "Sindhu", job:"Manager"}, {index: 1, name: "Namratha", job:"Lead"},{index: 1, name: "Nikhita", job:"Developer"}],
            rowIndex: 1,
        }

        this.addRow = this.addRow.bind(this)
        this.removeRow = this.removeRow.bind(this)
    }

   addRow(){
        var {rows, rowIndex} = this.state
        rows[rowIndex] = {index: rowIndex, name: "React", job:"Tester"};
        rowIndex = rowIndex + 1;
        this.setState({rows, rowIndex}) 
        // Or 
        // this.setState({rows: rows, rowIndex : rowIndex})
    }

    removeRow(index){
        var {rows} = this.state
        if(rows.length > 1){
            rows.splice(index, 1);
        }

        this.setState({rows})
    }

    render() {
        return (
            <div>
                <table>
                    <thead>
                        <tr>
                            <th>Sr No.</th>
                            <th>Name</th>
                            <th>Job</th>
                            <th>Action</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            this.state.rows.map((row, index) => 
                                <TableRow key={index} row={row} rowindex = {index + 1} handleRemove={this.removeRow}></TableRow>
                            )
                        }

                    </tbody>

                </table>
                {/* <button onClick={this.addRow}>+ Add</button> */}
            </div>
        )
    }
}

export default Table