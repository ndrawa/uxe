import React from 'react';

function Table(props) {
    return (
        <div>
        <h2>Tracking</h2>
        <table className="table">
            <thead>
                <tr>
                {/* <th scope="col">#</th> */}
                <th scope="col">Time</th>
                {/* <th scope="col">No. Transaction</th> */}
                {/* <th scope="col">No. Batch</th> */}
                {/* <th scope="col">Total</th> */}
                <th scope="col">Receiver</th>
                {/* <th scope="col">Sender</th> */}
                </tr>
            </thead>
            <tbody id="trackingList">
                { props.items }
            </tbody>
            </table>
        </div>
    )
}

export default Table;

