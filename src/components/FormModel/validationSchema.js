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
        [fullName.name]: Yup.string().required('Full Name is required').max(10),
        [age.name]: Yup.string().required('Age is required').max(3),
        [gender.name]: Yup.string().required('Gender is required')
      })
    ,
    Yup.object().shape({
        [email.name]: Yup.string().email("It must be a valid email").required('Email is required'),
        [phoneNumber.name]: Yup.string().min(6, "Phone number must be at least 6 numbers").max(20,"Phone Number must be at most 20 numbers").required('Phone Number is required'),
        [address.name]: Yup.string().required('Address is required')
      })


];


// Yup.object().shape({
//     fullName: Yup.string().max(50).required('Full name is required'),
//     email: Yup.string().email('It must be a valid email').max(50).required('Email is required'),
//     phoneNumber: Yup.string().min(6,'Phone number must be at least 6 numbers').max(20,'Phone number must be at most 20 numbers').required('Phone number is required'),

    
// })