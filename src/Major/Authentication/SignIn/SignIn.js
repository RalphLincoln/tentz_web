import React, { useState } from 'react';
import { OutlinedInput, InputAdornment, IconButton, makeStyles } from '@material-ui/core';
import { Visibility, VisibilityOff} from '@material-ui/icons';
import './signin.css';

import Logo from '../../../Images/tentzwhite.png';

const useStyles = makeStyles((theme) => ({
    input2: {
        webkitBorderRadius: "35px",
        mozBorderRadius: "35px",
        borderRadius: "35px !important",
        marginTop: "40px",
        height: "58px",
        backgroundColor: "#1C1D21",
        color: "#fff",
        fontFamily: "Poppins",
    },
    icon: {
        color: "#fff"
    },

}));

const SignIn = () => {
    const classes = useStyles();
    const [loading, setLoading] = useState(false);
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState("");
    const [showPassword, setShowPassword] = useState(false);

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
    }
    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword)
    }
    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };
    return (
        <div className='container'>
            <div className='d-flex pt-5 justify-content-center'>
                <img src={ Logo } className="img-fluid logoss" alt='logo'/>
            </div>

            <form className='col-lg-7 mx-auto'>

                <input onChange={ handleEmailChange } className='custom_form_control mt-5' placeholder='Email' type='text'/>

                <OutlinedInput id="outlined-basic" className={ classes.input2 } placeholder="Password"
                   style={{ width: "100%" }}
                   value={ password }
                   onChange={ handlePasswordChange }
                   type={ showPassword ? 'text' : 'password' }
                   variant="outlined"
                   endAdornment={ <InputAdornment position="end">
                       <IconButton className={ classes.icon} aria-label="toggle password visibility"
                                   onClick={ handleClickShowPassword }
                                   onMouseDown={ handleMouseDownPassword } edge="end">
                           { showPassword ? <Visibility/> : <VisibilityOff sx={{ color: "$fff" }}/> }
                       </IconButton>
                   </InputAdornment>}
                />
            </form>

        </div>
    )
}
export default SignIn;