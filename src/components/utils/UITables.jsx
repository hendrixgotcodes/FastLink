import React from 'react'
import '../../css/components/tables.css'

export default function UITables({tableHeads, children}) {
    return (
        <table className="table">

            <thead className="table_head">
                <tr>
                    {tableHeads.map(tableHead =>(
                        <th className="table_header" >{tableHead}</th>
                    ))}
                </tr>
            </thead>

            <tbody className="table_body">
               {children}
            </tbody>

        </table>
    )
}
