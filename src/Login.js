import React from 'react'

import { Button } from '@material-ui/core'

import './Login.css'
import { auth, provider } from './firebase'
import { useDispatch } from 'react-redux'
import { login } from './features/userSlice'

const Login = () => {

    const dispatch = useDispatch();

    const signIn = () => {
        auth.signInWithPopup(provider)
            .then(({ user }) => {
                dispatch(
                    login({ 
                    displayName: user.displayName,
                    email: user.email,
                    photoUrl: user.photoURL
                }))
            })
            .catch((error) => alert(error.message));
    }

  return (
    <div className='login'>
        <div className='login__container'>
            <img src='https://cdn.vox-cdn.com/thumbor/KR-xy8mq5tcusdVMtHKQmkekOVk=/0x0:1320x880/920x613/filters:focal(555x335:765x545):format(webp)/cdn.vox-cdn.com/uploads/chorus_image/image/67798829/newgmaillogo.0.jpg' alt='Gmail' />

            <Button variant='contained' color='primary' onClick={signIn}>Login</Button>
        </div>
    </div>
  )
}

export default Login