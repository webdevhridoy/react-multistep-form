import React from 'react';
import { useForm } from 'react-hook-form';
import { FiUser } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import darkLogo from '../../asset/andela-logo-dark.png';

const FromThree = () => {
    const { register, formState: { errors }, handleSubmit } = useForm();

    const handleSignIn = (data) => {
        console.log('na ghumabo na');
    };
    return (
        <div className='flex flex-col md:flex-row justify-center items-center'>
            <div className='w-full md:w-4/5'>
                <div className='flex justify-center flex-col items-center mx-auto max-w-[39.5rem]'>
                    <div>
                        <div className='flex justify-center items-center'>
                            <img className='w-2/5 md:hidden block py-8' src={darkLogo} alt="" />
                        </div>
                        <h2 className='font-serif text-lg md:text-2xl text-center text-gray-700 px-6 md:px-20'>More about you
                        </h2>
                    </div>
                    <div className='p-5 md:p-0'>
                        <form onSubmit={handleSubmit(handleSignIn)}>
                            <div className="form-control w-full text-left mt-2 ">
                                <label htmlFor="email" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 py-4 block pl-3 label-text">
                                    English proficiency
                                </label>
                                <div className='relative flex items-center border-2 rounded p-1'>
                                    <div className='absolute w-5 h-5 ml-3 mt-2'>
                                        <FaMapMarkerAlt></FaMapMarkerAlt>
                                    </div>
                                    <select
                                        className=" text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-full pl-9"
                                        id="country" name="country">
                                        <option className="input-field" value="Select..">Select..</option>
                                        <option className="input-field" value="Native">Native</option>
                                        <option className="input-field" value="Advance C1/C2">Advance C1/C2</option>
                                        <option className="input-field" value="Intermediate B1/B2">Intermediate B1/B2</option>
                                        <option className="input-field" value="Beginner A1/A2">Beginner A1/A2</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-control w-full text-left mt-2 ">
                                <label htmlFor="email" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 py-4 block pl-3 label-text">
                                    Total years of work experience
                                </label>
                                <div className='relative flex items-center border-2 rounded p-1'>
                                    <div className='absolute w-5 h-5 ml-3 mt-2'>
                                        <FaMapMarkerAlt></FaMapMarkerAlt>
                                    </div>
                                    <select
                                        className=" text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-full pl-9"
                                        id="country" name="country">
                                        <option className="input-field" value="Select..">Select..</option>
                                        <option className="input-field" value="0-3-yrs-professional experience">0-3 yrs professional experience</option>
                                        <option className="input-field" value="3-8-yrs-professional experience">3-8 yrs professional experience</option>
                                        <option className="input-field" value="8-12-yrs-professional experience">8-12 yrs professional experience</option>
                                        <option className="input-field" value="12+-yrs-professional experience">12+ yrs professional experience</option>

                                    </select>
                                </div>
                            </div>
                            <div className="form-control w-full text-left mt-2 ">
                                <label htmlFor="email" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 py-4 block pl-3 label-text">
                                    How did you hear about us? (optional)
                                </label>
                                <div className='relative flex items-center border-2 rounded p-1'>
                                    <div className='absolute w-5 h-5 ml-3 mt-2'>
                                        <FaMapMarkerAlt></FaMapMarkerAlt>
                                    </div>
                                    <select
                                        className=" text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-full pl-9"
                                        id="country" name="country">
                                        <option className="input-field" value="Job Posts">Job Posts</option>
                                        <option className="input-field" value="Social Media">Social Media</option>
                                        <option className="input-field" value="Search Engine">Search Engine</option>
                                        <option className="input-field" value="Advertising">Advertising</option>
                                        <option className="input-field" value="News">News</option>
                                        <option className="input-field" value="Email">Email</option>
                                        <option className="input-field" value="In-Person Event">In-Person Event</option>
                                        <option className="input-field" value="Word of mouth">Word of mouth</option>
                                        <option className="input-field" value="Referral by Andelan">Referral by Andelan</option>
                                        <option className="input-field" value="Referral by Others">Referral by Others</option>
                                        <option className="input-field" value="Other">Other</option>
                                    </select>
                                </div>
                            </div>
                            <div className="form-control w-full text-left mt-2 ">
                                <label htmlFor="email" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 py-4 block pl-3 label-text">
                                    Upload your resume <badge>Only PDF files are accepted</badge>
                                </label>
                                <div className='relative flex items-center border-2 rounded p-1'>
                                    <input type="file" className="file-input w-full max-w-xs" />
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FromThree;