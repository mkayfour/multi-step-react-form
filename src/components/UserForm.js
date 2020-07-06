import React, { useState } from 'react';
import FormUserDetails from './FormUserDetails';

import FormDataContext from '../context/FormDataContext';
import FormPersonalDetails from './FormPersonalDetails';
import ConfirmPage from './ConfirmPage';
import SuccessPage from './SuccessPage';

export default function UserForm() {
  //   const formData = useContext(formDataContext);

  const [step, setStep] = useState(1);
  const [firstName, setFirstName] = useState('');
  const [lastName, setLastName] = useState('');
  const [email, setEmail] = useState('');
  const [occupation, setOccupation] = useState('');
  const [city, setCity] = useState('');
  const [bio, setBio] = useState('');

  const prevStep = () => {
    setStep(step - 1);
  };

  const nextStep = () => {
    setStep(step + 1);
  };

  const values = {
    firstName,
    lastName,
    email,
    occupation,
    city,
    bio,
    setFirstName,
    setLastName,
    setCity,
    setBio,
    setOccupation,
    setEmail,
    nextStep,
    prevStep
  };

  switch (step) {
    case 1:
      return (
        <FormDataContext.Provider value={values}>
          <FormUserDetails />
        </FormDataContext.Provider>
      );
    case 2:
      return (
        <FormDataContext.Provider value={values}>
          <FormPersonalDetails />
        </FormDataContext.Provider>
      );
    case 3:
      return (
        <FormDataContext.Provider value={values}>
          <ConfirmPage />
        </FormDataContext.Provider>
      );

    case 4:
      return (
        <FormDataContext.Provider value={values}>
          <SuccessPage />
        </FormDataContext.Provider>
      );

    default:
      return <h1>Nothing Found</h1>;
  }
}
