import { Avatar } from '@material-ui/core'
import React from 'react'
import { useState } from 'react';

import '../../../../css/pages/dashboard/CustomerDashboard.css';
import UITab from '../../../utils/UITab';
import UITables from '../../../utils/UITables';

export default function CustomerDashboard() {

    const [state, setState] = useState({
        formShown: false
    })

    const handleFormVisibility = ()=>{

        if(state.formShown === true){
            setState({
                formShown: false
            })
        }else{
            setState({
                formShown: true
            })
        }

    }

    // const 

    return (
        <div>

            <div className="navbar">

                <div className="navbar_center">

                    <div className="avatar_wrapper">
                        <Avatar /> <span id="username">Godwin Owusu</span>
                    </div>

                    <button 
                        className="btn btn--md btn--complementary"
                        >
                            Logout
                    </button>

                </div>


            </div>

            <div className="dashboard_body">

                <div className="center">

                    <div className="banner">
                        <button 
                            className="btn btn--primary btn--md btn--rnd"
                            onClick={handleFormVisibility}
                            >
                                Get a loan
                        </button>
                    </div>

                    <div className="content">

                        <div className={state.formShown === true ? "form_wrapper" : "form_wrapper form_wrapper--hidden"}>

                            <form action="" className="form">

                                <div className="form_fields">

                                    <label htmlFor="name" className="fm_label">
                                        Amount
                                        <input type="number" name="" id="" className="form_tb"/>
                                    </label>

                                    <label htmlFor="name" className="fm_label">
                                        Time (In Months)
                                        <input type="number" name="" id="" className="form_tb"/>
                                    </label>

                                    <span className="span-sp">You will pay: <span id="amount_to_be_paid"></span></span>


                                </div>

                                <button className="btn btn--md btn--complementary btn--blk">Proceed</button>

                            </form>

                        </div>

                        <div className="tab_wrapper">

                            {/* <UITab tabNames={["Requested", "Approved"]}>
                                <div index={0}>1 One</div>
                                <div index={1} >2 Two</div>
                                <div index={2} >3 Three</div>
                            </UITab> */}
                            <UITab tabNames={["Requested Loans", "Approved Loans"]}>

                                <UITables index={0} />
                                <UITables index={1} />


                            </UITab>

                        </div>
                    </div>
                    
                    {/* <form action="" className="form">

                        <div className="form_fields">

                            <label htmlFor="name" className="fm_label">
                                Amount
                                <input type="number" name="" id="" className="form_tb"/>
                            </label>

                            <label htmlFor="name" className="fm_label">
                                Time (In Months)
                                <input type="number" name="" id="" className="form_tb"/>
                            </label>

                            <span className="span-sp">You will pay: <span id="amount_to_be_paid"></span></span>

                            <label htmlFor="name" className="fm_label">
                                Name
                                <input type="text" name="" id="" className="form_tb"/>
                            </label>

                            <label htmlFor="name" className="fm_label">
                                Phone
                                <input type="tel" name="" id="" className="form_tb"/>
                            </label>


                        </div>

                        <button className="btn btn--md btn--complementary btn--blk">Proceed</button>

                    </form> */}

                </div>

            </div>
            
        </div>
    )
}
