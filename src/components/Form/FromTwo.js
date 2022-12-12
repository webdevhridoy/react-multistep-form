import React from 'react';
import { useForm } from 'react-hook-form';
import { FiUser } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import darkLogo from '../../asset/andela-logo-dark.png';

const FromTwo = () => {
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
                        <h2 className='font-serif text-lg md:text-2xl text-center text-gray-700 px-6 md:px-20'>Select your <span className='text-[#56c870] italic'>primary </span> skill
                        </h2>
                    </div>
                    <div className='p-5 md:p-0'>
                        <form onSubmit={handleSubmit(handleSignIn)}>
                            <div className="form-control w-full text-left mt-2 ">
                                <div className='flex items-center border-2 rounded p-1'>
                                    <select className=" text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-full pl-9"
                                        id="country" name="country">
                                        <option className="input-field" value="[Javascript] React">[Javascript] React</option>
                                        <option className="input-field" value="[Javascript] Angular">[Javascript] Angular</option>
                                        <option className="input-field" value="[Javascript] Vue">[Javascript] Vue</option>
                                        <option className="input-field" value="[Javascript] Node.js">[Javascript] Node.js</option>
                                        <option className="input-field" value="[Cross-Platform] React Native">[Cross-Platform] React Native</option>
                                        <option className="input-field" value="Python">Python</option>
                                        <option className="input-field" value="Ruby">Ruby</option>
                                        <option className="input-field" value="Golang">Golang</option>
                                        <option className="input-field" value="DevOps">DevOps</option>
                                        <option className="input-field" value="DevOps (AWS)">DevOps (AWS)</option>
                                        <option className="input-field" value="DevSecOps">DevSecOps</option>
                                        <option className="input-field" value="Cloud Engineering">Cloud Engineering</option>
                                        <option className="input-field" value="Cloud Engineering (AWS)">Cloud Engineering (AWS)</option>
                                        <option className="input-field" value="SRE">SRE</option>
                                        <option className="input-field" value="Java">Java</option>
                                        <option className="input-field" value="C/Embedded">C/Embedded</option>
                                        <option className="input-field" value="QA">QA</option>
                                        <option className="input-field" value="Elixir">Elixir</option>
                                        <option className="input-field" value="Scala">Scala</option>
                                        <option className="input-field" value="PHP">PHP</option>
                                        <option className="input-field" value=".NET">.NET</option>
                                        <option className="input-field" value="iOS">iOs</option>
                                        <option className="input-field" value="Android">Android</option>
                                        <option className="input-field" value="Flutter">Flutter</option>
                                        <option className="input-field" value="Unity">Unity</option>
                                        <option className="input-field" value="Blockchain">Blockchain</option>
                                        <option className="input-field" value="Data Engineering">Data Engineering</option>
                                        <option className="input-field" value="Data Analyst">Data Analyst</option>
                                        <option className="input-field" value="Data Science">Data Science</option>
                                        <option className="input-field" value="Salesforce - Admin">Salesforce - Admin</option>
                                        <option className="input-field" value="Salesforce - Architect">Salesforce - Architect</option>
                                        <option className="input-field" value="Salesforce - BA/PM/PO">Salesforce - BA/PM/PO</option>
                                        <option className="input-field" value="Salesforce - Commerce Cloud">Salesforce - Commerce Cloud</option>
                                        <option className="input-field" value="Salesforce - Developer">Salesforce - Developer</option><option className="input-field" value="Salesforce - Marketer">Salesforce - Marketer</option>
                                        <option className="input-field" value="Mulesoft">Mulesoft</option>
                                        <option className="input-field" value="UX Writer">UX Writer</option>
                                        <option className="input-field" value="UX Researcher">UX Researcher</option>
                                        <option className="input-field" value="UI/UX Designer">UI/UX Designer</option>
                                        <option className="input-field" value="UI(Visual) Designer">UI(Visual) Designer</option>
                                        <option className="input-field" value="Interaction Designer">Interaction Designer</option>
                                        <option className="input-field" value="Digital Project Manager">Digital Project Manager</option>
                                        <option className="input-field" value="Technical Product Manager">Technical Product Manager</option>
                                        <option className="input-field" value="Product Manager">Product Manager</option>
                                        <option className="input-field" value="Product Owner">Product Owner</option>
                                        <option className="input-field" value="Scrum Master">Scrum Master</option>
                                    </select>
                                </div>
                            </div>
                            <div className='my-10'>
                                <div className='flex justify-center items-center'>
                                    <img className='w-2/5 md:hidden block py-8' src={darkLogo} alt="" />
                                </div>
                                <h2 className='font-serif text-lg md:text-2xl text-center text-gray-700 px-6 md:px-20'>Years of experience with this skill
                                </h2>
                            </div>
                            <div className="form-control w-full text-left mt-2 ">
                                <div className='flex justify-center items-center'>
                                    <div className='cursor-pointer border-2 rounded p-1 px-3 mr-5 border-[1px solid rgb(220, 226, 249)]'>&lt;1 year</div>
                                    <div className='cursor-pointer border-2 rounded p-1 px-3 mr-5 border-[1px solid rgb(220, 226, 249)]'>1-2 years</div>
                                    <div className='cursor-pointer border-2 rounded p-1 px-3 mr-5 border-[1px solid rgb(220, 226, 249)]'>3-5 years</div>
                                    <div className='cursor-pointer border-2 rounded p-1 px-3 mr-5 border-[1px solid rgb(220, 226, 249)]'>6-10 years</div>
                                    <div className='cursor-pointer border-2 rounded p-1 px-3 mr-5 border-[1px solid rgb(220, 226, 249)]'>&gt;10 years</div>
                                </div>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FromTwo;