import React from 'react'
import {Link} from 'react-router-dom'

export default function Signup() {
    return (
        <div className="body">

            <section className="section">

            <form action="" className="form masthead">

                <div className="form_header">
                    <h1 className="form_header h1-md">How much do you need?</h1>
                    <p>Get this quick cash. No hustle tussle.</p>
                </div>

                <div className="form_fields">

                    <label htmlFor="name" className="fm_label">
                        Name (Surname, First, Others)
                        <input type="number" name="" id="" className="form_tb"/>
                    </label>

                    <label >
                        <label htmlFor="">Marital Status</label>
                        <span>
                            Married <input type="radio" name="" id=""/>
                        </span>
                        <span>
                            Single <input type="radio" name="" id=""/>
                        </span>
                    </label>

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

                </form>

                

                <div className="dimmer"></div>

            </section>
            
        </div>
    )
}
