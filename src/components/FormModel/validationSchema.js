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
        [fullName.name]: Yup.string().required('Full Name is required').max(10,"Full Name must be at most 10 characters"),
        [birthDate.name]: Yup.string().required('Birth Date is required'),
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


