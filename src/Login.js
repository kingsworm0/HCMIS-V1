import React from 'react'
import './login.css'
// import Header from "./Header.js"
import LocalHospitalIcon from '@mui/icons-material/LocalHospital';
import LockIcon from '@mui/icons-material/Lock';
import PersonIcon from '@mui/icons-material/Person';
import LockResetIcon from '@mui/icons-material/LockReset';
function Login() {
  return (
	<div className='login'>
		<center>
		<h1> <LocalHospitalIcon/>Login HMCIS</h1>
			<form action="/auth" method="post">
				<label for="username">
			<PersonIcon />
				</label>
				<input type="text"  name="email" placeholder="Enter Email" id="username" required />
				<label for="password">
					<LockIcon/>
				</label>
				<input type="password" name="password" placeholder="Enter Password" id="password" required />
				<input type="submit"  value="Login" />
				<div class="reset">
					<span>
					<LockResetIcon />
					</span>
				<span class="reset">Forgot password<a href="#"> reset ?</a></span>
				</div>
			</form>
		</center>
    </div>
  )
}

export default Login