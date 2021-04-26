import React from 'react'

import '../../css/pages/Signin.css'

import {useSelector, useDispatch} from 'react-redux'
import {userSliceActions} from '../../store/features/userSlice'


export default function Signin() {

    const dispatch = useDispatch()

    const handleLogin = ()=>{

        dispatch(userSliceActions.logIn())

    }

    return (
        <div className="body">

            <section className="section--signin">

                <form action="" className="form">

                    <div className="form_header">
                        <h1 className="form_header h1-md">Login</h1>
                        <p>Access Your Account</p>
                    </div>

                    <div className="form_fields">

                        <label htmlFor="name" className="fm_label">
                            Email
                            <input type="text" name="" id="" className="form_tb"/>
                        </label>

                        <label htmlFor="name" className="fm_label">
                            Password
                            <input type="password" name="" id="" className="form_tb"/>
                        </label>
                        
                        <div className="radio_label" >
                            <input type="checkbox" name="" id=""/> Login as admin
                        </div>

                        {/* <label htmlFor="">
                            <span>
                                <input type="checkbox" name="" id=""/> Login as admin
                            </span>
                            
                        </label> */}


                    </div>

                    <button 
                        className="btn btn--md btn--complementary btn--blk"
                        onClick={handleLogin}
                        >Sign In
                    </button>

                    </form>

                

                <div className="dimmer"></div>

            </section>
            
        </div>
    )
}
