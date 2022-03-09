import React from 'react'
import { connect } from 'react-redux'
import { removeUser } from '../actions/userActions'
import Admin from './Admin'
import Customer from './Customer'
import LoginPage from './LoginPage'

export const Main = ({user, removeUser}) => {
  return (
    <div className='container'>
        <h2>{user.usertype}</h2>
        {user.usertype !== "" && <button onClick={()=>{removeUser()}}>logout</button>}
        {user.usertype === "surendra@gmail.com" ? <Admin/> : user.usertype ==="surendra123@gmail.com" ? <Customer/> :  <LoginPage/>}
           
    </div>
  )
}

const mapStateToProps = (state) => ({
    user: state.user
})

const mapDispatchToProps = {}

export default connect(mapStateToProps, {removeUser})(Main)