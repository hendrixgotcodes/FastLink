import {createSlice} from '@reduxjs/toolkit';

const userSlice = createSlice({

    name: "user",
    initialState: {

        loggedIn: false,
        userProps: {

        }

    },
    reducers: {

        logIn: (state)=>{
            state.loggedIn = true
        },
        logOut: (state)=>{
            state.loggedIn = false
        },
        setUserProps: (state, props)=>{
            state.userProps = props
        }

    }

})

export const userSliceActions = userSlice.actions;
export const selectUserLoginState = (state)=> state.user.loggedIn
export const selectUserPropsState = (state)=> state.user.userProps
export default userSlice.reducer