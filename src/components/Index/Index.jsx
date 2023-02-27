import React from 'react'
import NavBar from '../NavBar/NavBar'
import Header from '../NavBar/Header'
import Main from '../Main/Main'
import FormSignUp from '../FormSignUp/FormSignUp.jsx'

export default function Index() {
  return (
    <div>
       <Header/>
       <Main/>
         <FormSignUp/>
    </div>
  )
}
