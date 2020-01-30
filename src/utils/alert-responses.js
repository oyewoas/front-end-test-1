import Swal from 'sweetalert2'

const Toast = Swal.mixin({
    toast: true,
    position: 'top-end',
    showConfirmButton: false,
    timer: 3000
  })

//Success Responses
const loginSuccess = () => {
    Toast.fire({
        type: 'success',
        icon: 'success',
        title: 'Logged in successfully'
      })
}

const signupSuccess = () => {
    Toast.fire({
        type: 'success',
        icon: 'success',
        title: 'Signed up successfully'
      })
}

const logOutSuccess = () => {
    Toast.fire({
        type: 'success',
        icon: 'success',
        title: 'Logged out successfully'
      })
}


//Error Responses
const loginError = () => {
    Toast.fire({
        type: 'error',
        icon: 'error',
        title: 'Login error'
      })
}

const logoutError = () => {
    Toast.fire({
        type: 'error',
        icon: 'error',
        title: 'Logout error'
      })
}

const signupError = () => {
    Toast.fire({
        type: 'error',
        icon: 'error',
        title: 'Sign up error'
      })
}

const successResponses = {
    login : loginSuccess,
    logout: logOutSuccess,
    signup: signupSuccess
    
}

const errorResponses ={
    login: loginError,
    logout: logoutError,
    signup: signupError
}

const ALERT_RESPONSES = {
    successResponses,
    errorResponses
}

export default ALERT_RESPONSES