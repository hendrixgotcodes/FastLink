import { Avatar } from '@material-ui/core'
import React from 'react'
import { useState } from 'react'
import UITab from '../../../utils/UITab'
import UITables from '../../../utils/UITables'

import {useDispatch} from 'react-redux'
import {userSliceActions} from '../../../../store/features/userSlice'

export default function Admin() {

    const dispatch = useDispatch()

    const [state, setState] = useState({
        formShown: false,
        requested: [
            {
                name: "Maxwell Koomson",
                amountBorrowed: 100,
                time: 12,
                interest: 20,
                amountToBePaid: 120
            },
            {
                name: "Kwesi Adama",
                amountBorrowed: 200,
                time: 12,
                interest: 40,
                amountToBePaid: 240
            },
            {
                name: "Kwaku Asiamah",
                amountBorrowed: 300,
                time: 12,
                interest: 50,
                amountToBePaid: 350
            }
        ]
    })

    const handleSignOut = ()=>{

        dispatch(userSliceActions.logOut())

    }

    return (
        <div>

            <div className="navbar">

                <div className="navbar_center">

                    <div className="avatar_wrapper">
                        <Avatar /> <span id="username">Admin</span>
                    </div>

                    <button 
                        className="btn btn--md btn--complementary"
                        onClick = {handleSignOut}
                        >
                            Logout
                    </button>

                </div>

                <div className="dashboard_body">

                    <div className="center">

                        <div className="content">

                            <div className="tab_wrapper">

                                {/* <UITab tabNames={["Requested", "Approved"]}>
                                    <div index={0}>1 One</div>
                                    <div index={1} >2 Two</div>
                                    <div index={2} >3 Three</div>
                                </UITab> */}
                                <UITab tabNames={["Requested Loans", "Approved Loans", "Paid"]}>

                                    <UITables 
                                        index={0} 
                                        tableHeads={["Name", "Amount Borrowed", "Time (In Months)", "Amount To Be Paid (GHc)"]} 
                                        >
                                        
                                        {state.requested.map(request => (
                                            <tr className="table_body_item pd">
                                                <td className="table_data">{request.name}</td>
                                                <td className="table_data">{request.amountBorrowed}</td>
                                                <td className="table_data">{request.time}</td>
                                                {/* <td className="table_data">{request.interest}</td> */}
                                                <td className="table_data">{request.amountToBePaid}</td>
                                            </tr>
                                        ))}

                                    </UITables>

                                    <UITables 
                                        index={1} 
                                        tableHeads={["Name", "Amount Borrowed", "Time (In Months)", "Amount Paid (GHc)"]} 
                                        >
                                        
                                        {state.requested.map(request => (
                                            <tr className="table_body_item pd">
                                                <td className="table_data">{request.name}</td>
                                                <td className="table_data">{request.amountBorrowed}</td>
                                                <td className="table_data">{request.time}</td>
                                                {/* <td className="table_data">{request.interest}</td> */}
                                                <td className="table_data">{request.amountToBePaid}</td>
                                            </tr>
                                        ))}

                                    </UITables>

                                    


                                </UITab>

                            </div>
                        </div>

                    </div>

                </div>


            </div>
            
        </div>
    )
}
