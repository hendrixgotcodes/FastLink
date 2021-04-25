import React from 'react'
import {Link} from 'react-router-dom'

import '../../css/pages/Signup.css'

export default function Signup() {
    return (
        <div className="body">

            <section className="section--signup">

                <form action="" className="form">

                    <div className="form_header">
                        <h1 className="form_header h1-md">Sign Up</h1>
                        <p>Register to begin your loan process</p>
                    </div>

                    <div className="form_fields">

                        <label htmlFor="name" className="fm_label">
                            Name (Surname, First, Others)
                            <input type="number" name="" id="" className="form_tb"/>
                        </label>

                        <div className="radio_label" >
                            Marital Status
                            <label htmlFor="">
                                <span>
                                    <input value="married" type="radio" name="maritalstatus" id=""/>Married
                                </span>
                                <span>
                                    <input value="single" checked type="radio" name="maritalstatus" id=""/>Single
                                </span>
                            </label>
                        </div>

                        <label htmlFor="name" className="fm_label">
                            Date Of Birth
                            <input type="date" name="" id="" className="form_tb"/>
                        </label>

                        <label htmlFor="name" className="fm_label">
                            Address
                            <input type="text" name="" id="" className="form_tb"/>
                        </label>

                        <label htmlFor="name" className="fm_label">
                            Email
                            <input type="text" name="" id="" className="form_tb"/>
                        </label>

                        <label htmlFor="name" className="fm_label">
                            Phone
                            <input type="tel" name="" id="" className="form_tb"/>
                        </label>


                    </div>

                    <button className="btn btn--md btn--complementary btn--blk">Proceed</button>

                    </form>

                

                <div className="dimmer"></div>

            </section>
            
        </div>
    )
}
