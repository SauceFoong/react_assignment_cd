import * as Yup from 'yup';
import applicationFormModel from './applicationFormModel';

const {
    formField:{
        fullName,
        birthDate,
        age,
        gender,
        email,
        phoneNumber,
        address
    } 
} = applicationFormModel

export default [
    Yup.object().shape({
        [fullName.name]: Yup.string().required('Full name required').max(10),
        [age.name]: Yup.string().required('age required'),
        [gender.name]: Yup.string().required('gender required')
      })
    ,
    Yup.object().shape({
        [email.name]: Yup.string().required('Email required'),
        [phoneNumber.name]: Yup.string().required('Phone Number required'),
        [address.name]: Yup.string().required('Address required')
      })


];


// Yup.object().shape({
//     fullName: Yup.string().max(50).required('Full name is required'),
//     email: Yup.string().email('It must be a valid email').max(50).required('Email is required'),
//     phoneNumber: Yup.string().min(6,'Phone number must be at least 6 numbers').max(20,'Phone number must be at most 20 numbers').required('Phone number is required'),

    
// })