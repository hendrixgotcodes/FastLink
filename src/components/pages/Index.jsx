import React from 'react'
import { Link } from 'react-router-dom'

import '../../css/pages/Index.css'

export default function Index() {
    return (
        <div className="body">

            <section className="masthead section">

                <div className="center">

                    <div className="masthead_info masthead_children">

                        <h1 className="primary_header h1-lg">Get A Loan For That Dream Business In <span className="important">24hrs</span></h1>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tempore aut facere natus. Consequatur nemo corporis fugiat, praesentium unde excepturi sed?</p>
                        <Link className="btn btn--lg btn--complementary">How It Works</Link>

                    </div>
                    <div className="masthead_children masthead_form_container">

                        <form action="" className="form">

                            <div className="form_header">
                                <h1 className="form_header h1-md">How much do you need?</h1>
                                <p>Get this quick cash. No hustle tussle.</p>
                            </div>

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

                        </form>

                    </div>

                </div>

                <div className="dimmer"></div>

            </section>
            
        </div>
    )
}
