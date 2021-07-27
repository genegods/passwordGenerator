import React, {useState} from 'react'
import {useDispatch, useSelector} from 'react-redux'
import NoAnimate from '../spinner/NoAnimate'
import Animate from '../spinner/Animate'
import { loadData } from '../../redux/passwordRedux/pass.actions'
import {PASS_KEY} from '../../redux/passwordRedux/pass.reducer'

const PasswordApp = () => {
    // initialize useDispatch
    let dispatch = useDispatch()


    // view data from store
    let viewPassword = useSelector((state)=>{
        return state[PASS_KEY]
    })



let [users, setUsers] = useState({
    name: '',
    password: ''
})

// bind inputs
let inputChange = (event) =>{
    setUsers({
        ...users,
        [event.target.name]: event.target.value
    })
}

// handle button
let handleBtn = () =>{
    dispatch(loadData())
    
}



    return (
        <React.Fragment>
            {/* <pre>{JSON.stringify(viewPassword)}</pre> */}
            <div className='card'>
             <div className='card-header'>
                 <h4>RANDOM PASSWORD GENERATOR</h4>
             </div>



             <div className='card-body'>
                 <div className='passwordContainer'>
                     <div className='user'>
                         <i className='fa fa-user'></i>
                         <input
                         name='name'
                         value={users.name}
                         onChange={inputChange}
                         type='text'
                         placeholder='Enter your name' 
                         />
                     </div>

                     {/* password section */}
                     <div className='user'>
                         <i className='fa fa-lock'></i>
                         <input
                         name='password'
                         value={viewPassword.data.data}
                         onChange={inputChange}
                         type='text'
                         placeholder='Enter your password' 
                         />

                         <div className='spinnerContainer'>
                             {
                                 (viewPassword.loading ===true)? <Animate/>:
                                 <NoAnimate/>
                             }
                         </div>
                     </div>

                     <div className='btnsContainer'>
                         <button className='btns' onClick={handleBtn}>GENERATE</button>
                     </div>
                 </div>
             </div>
          </div>

        </React.Fragment>
            
        
    )
}

export default PasswordApp
