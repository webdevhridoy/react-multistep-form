import React, { createContext, useState } from 'react';

export const FromContext = createContext();
const FromProvider = ({ children }) => {
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [email, setEmail] = useState("");
    const [country, setCountry] = useState("");

    const fromInfo = {
        firstName,
        setFirstName,
        lastName,
        setLastName,
        email,
        setEmail,
        country,
        setCountry

    };
    return (
        <FromContext.Provider value={fromInfo}>
            {children}
        </FromContext.Provider>
    );
};

export default FromProvider;