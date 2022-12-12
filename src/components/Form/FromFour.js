import React from 'react';
import { useForm } from 'react-hook-form';
import { FiUser } from "react-icons/fi";
import { MdEmail } from "react-icons/md";
import { FaMapMarkerAlt } from "react-icons/fa";
import darkLogo from '../../asset/andela-logo-dark.png';

const FromFour = () => {
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
                        <h2 className='font-serif text-lg md:text-2xl text-center text-gray-700 px-6 md:px-20'>This is Four step
                        </h2>
                    </div>
                    <div className='p-5 md:p-0'>
                        <form onSubmit={handleSubmit(handleSignIn)}>
                            <div className="form-control w-full text-left mt-2 ">
                                <label htmlFor="first-name" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 pb-4 block pl-3 label-text ">
                                    First name
                                </label>
                                <div className='relative flex items-center border-2 rounded p-1'>
                                    <div className='absolute w-5 h-5 ml-3 mt-2'>
                                        <FiUser></FiUser>
                                    </div>
                                    <input
                                        {...register("first-name", { required: "Email Address is required" })}
                                        id='first-name' type="first-name" name="first-name" className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-full pl-9" />
                                </div>
                                {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                            </div>
                            <div className="form-control w-full text-left mt-2 ">
                                <label htmlFor="last-name" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 py-4 block pl-3 label-text">
                                    Last name
                                </label>
                                <div className='relative flex items-center border-2 rounded p-1'>
                                    <div className='absolute w-5 h-5 ml-3 mt-2'>
                                        <FiUser></FiUser>
                                    </div>
                                    <input
                                        {...register("last-name", { required: "Email Address is required" })}
                                        id='last-name' type="last-name" name="last-name" className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-full pl-9" />
                                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                                </div>
                            </div>
                            <div className="form-control w-full text-left mt-2 ">
                                <label htmlFor="email" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 py-4 block pl-3 label-text">
                                    Email
                                </label>
                                <div className='relative flex items-center border-2 rounded p-1'>
                                    <div className='absolute w-5 h-5 ml-3 mt-2'>
                                        <MdEmail></MdEmail>
                                    </div>
                                    <input
                                        {...register("email", { required: "Email Address is required" })}
                                        id='email' type="email" name="email" className="text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-full pl-9" />
                                    {errors.email && <p className='text-red-600' role="alert">{errors.email?.message}</p>}
                                </div>
                            </div>
                            <div className="form-control w-full text-left mt-2 ">
                                <label htmlFor="email" className="text-base font-[sans-serif] font-medium leading-none text-gray-800 py-4 block pl-3 label-text">
                                    Country
                                </label>
                                <div className='relative flex items-center border-2 rounded p-1'>
                                    <div className='absolute w-5 h-5 ml-3 mt-2'>
                                        <FaMapMarkerAlt></FaMapMarkerAlt>
                                    </div>
                                    <select
                                        className=" text-xs font-medium leading-none focus:outline-none focus:ring-0 py-3 w-full pl-9"
                                        id="country" name="country">
                                        <option className="input-field" value="Afghanistan">Afghanistan</option>
                                        <option className="input-field" value="Åland Islands">Åland Islands</option>
                                        <option className="input-field" value="Albania">Albania</option>
                                        <option className="input-field" value="Algeria">Algeria</option>
                                        <option className="input-field" value="American Samoa">American Samoa</option>
                                        <option className="input-field" value="Andorra">Andorra</option>
                                        <option className="input-field" value="Angola">Angola</option>
                                        <option className="input-field" value="Anguilla">Anguilla</option>
                                        <option className="input-field" value="Antarctica">Antarctica</option>
                                        <option className="input-field" value="Antigua and Barbuda">Antigua and Barbuda</option>
                                        <option className="input-field" value="Argentina">Argentina</option>
                                        <option className="input-field" value="Armenia">Armenia</option>
                                        <option className="input-field" value="Aruba">Aruba</option>
                                        <option className="input-field" value="Australia">Australia</option>
                                        <option className="input-field" value="Austria">Austria</option>
                                        <option className="input-field" value="Azerbaijan">Azerbaijan</option>
                                        <option className="input-field" value="Bahamas">Bahamas</option>
                                        <option className="input-field" value="Bahrain">Bahrain</option>
                                        <option className="input-field" value="Bangladesh">Bangladesh</option>
                                        <option className="input-field" value="Barbados">Barbados</option>
                                        <option className="input-field" value="Belarus">Belarus</option>
                                        <option className="input-field" value="Belgium">Belgium</option>
                                        <option className="input-field" value="Belize">Belize</option>
                                        <option className="input-field" value="Benin">Benin</option>
                                        <option className="input-field" value="Bermuda">Bermuda</option>
                                        <option className="input-field" value="Bhutan">Bhutan</option>
                                        <option className="input-field" value="Bolivia">Bolivia</option>
                                        <option className="input-field" value="Bosnia and Herzegovina">Bosnia and Herzegovina</option>
                                        <option className="input-field" value="Botswana">Botswana</option>
                                        <option className="input-field" value="Bouvet Island">Bouvet Island</option>
                                        <option className="input-field" value="Brazil">Brazil</option>
                                        <option className="input-field" value="British Indian Ocean Territory">British Indian Ocean Territory</option>
                                        <option className="input-field" value="Brunei Darussalam">Brunei Darussalam</option>
                                        <option className="input-field" value="Bulgaria">Bulgaria</option>
                                        <option className="input-field" value="Burkina Faso">Burkina Faso</option>
                                        <option className="input-field" value="Burundi">Burundi</option>
                                        <option className="input-field" value="Cambodia">Cambodia</option>
                                        <option className="input-field" value="Cameroon">Cameroon</option>
                                        <option className="input-field" value="Canada">Canada</option>
                                        <option className="input-field" value="Cape Verde">Cape Verde</option>
                                        <option className="input-field" value="Cayman Islands">Cayman Islands</option>
                                        <option className="input-field" value="Central African Republic">Central African Republic</option>
                                        <option className="input-field" value="Chad">Chad</option>
                                        <option className="input-field" value="Chile">Chile</option>
                                        <option className="input-field" value="China">China</option>
                                        <option className="input-field" value="Christmas Island">Christmas Island</option>
                                        <option className="input-field" value="Cocos (Keeling) Islands">Cocos (Keeling) Islands</option>
                                        <option className="input-field" value="Colombia">Colombia</option>
                                        <option className="input-field" value="Comoros">Comoros</option>
                                        <option className="input-field" value="Congo">Congo</option>
                                        <option className="input-field" value="Congo, The Democratic Republic of The">Congo, The Democratic Republic of The</option>
                                        <option className="input-field" value="Cook Islands">Cook Islands</option>
                                        <option className="input-field" value="Costa Rica">Costa Rica</option>
                                        <option className="input-field" value="Cote D'ivoire">Cote D'ivoire</option>
                                        <option className="input-field" value="Croatia">Croatia</option>
                                        <option className="input-field" value="Cuba">Cuba</option>
                                        <option className="input-field" value="Cyprus">Cyprus</option>
                                        <option className="input-field" value="Czech Republic">Czech Republic</option>
                                        <option className="input-field" value="Denmark">Denmark</option>
                                        <option className="input-field" value="Djibouti">Djibouti</option>
                                        <option className="input-field" value="Dominica">Dominica</option>
                                        <option className="input-field" value="Dominican Republic">Dominican Republic</option>
                                        <option className="input-field" value="Ecuador">Ecuador</option>
                                        <option className="input-field" value="Egypt">Egypt</option>
                                        <option className="input-field" value="El Salvador">El Salvador</option>
                                        <option className="input-field" value="Equatorial Guinea">Equatorial Guinea</option>
                                        <option className="input-field" value="Eritrea">Eritrea</option>
                                        <option className="input-field" value="Estonia">Estonia</option>
                                        <option className="input-field" value="Ethiopia">Ethiopia</option>
                                        <option className="input-field" value="Falkland Islands (Malvinas)">Falkland Islands (Malvinas)</option>
                                        <option className="input-field" value="Faroe Islands">Faroe Islands</option>
                                        <option className="input-field" value="Fiji">Fiji</option>
                                        <option className="input-field" value="Finland">Finland</option>
                                        <option className="input-field" value="France">France</option>
                                        <option className="input-field" value="French Guiana">French Guiana</option>
                                        <option className="input-field" value="French Polynesia">French Polynesia</option>
                                        <option className="input-field" value="French Southern Territories">French Southern Territories</option>
                                        <option className="input-field" value="Gabon">Gabon</option>
                                        <option className="input-field" value="Gambia">Gambia</option>
                                        <option className="input-field" value="Georgia">Georgia</option>
                                        <option className="input-field" value="Germany">Germany</option>
                                        <option className="input-field" value="Ghana">Ghana</option>
                                        <option className="input-field" value="Gibraltar">Gibraltar</option>
                                        <option className="input-field" value="Greece">Greece</option>
                                        <option className="input-field" value="Greenland">Greenland</option>
                                        <option className="input-field" value="Grenada">Grenada</option>
                                        <option className="input-field" value="Guadeloupe">Guadeloupe</option>
                                        <option className="input-field" value="Guam">Guam</option>
                                        <option className="input-field" value="Guatemala">Guatemala</option>
                                        <option className="input-field" value="Guernsey">Guernsey</option>
                                        <option className="input-field" value="Guinea">Guinea</option>
                                        <option className="input-field" value="Guinea-bissau">Guinea-bissau</option>
                                        <option className="input-field" value="Guyana">Guyana</option>
                                        <option className="input-field" value="Haiti">Haiti</option>
                                        <option className="input-field" value="Heard Island and Mcdonald Islands">Heard Island and Mcdonald Islands</option>
                                        <option className="input-field" value="Holy See (Vatican City State)">Holy See (Vatican City State)</option>
                                        <option className="input-field" value="Honduras">Honduras</option>
                                        <option className="input-field" value="Hong Kong">Hong Kong</option>
                                        <option className="input-field" value="Hungary">Hungary</option>
                                        <option className="input-field" value="Iceland">Iceland</option>
                                        <option className="input-field" value="India">India</option>
                                        <option className="input-field" value="Indonesia">Indonesia</option>
                                        <option className="input-field" value="Iran, Islamic Republic of">Iran, Islamic Republic of</option>
                                        <option className="input-field" value="Iraq">Iraq</option>
                                        <option className="input-field" value="Ireland">Ireland</option>
                                        <option className="input-field" value="Isle of Man">Isle of Man</option>
                                        <option className="input-field" value="Israel">Israel</option>
                                        <option className="input-field" value="Italy">Italy</option>
                                        <option className="input-field" value="Jamaica">Jamaica</option>
                                        <option className="input-field" value="Japan">Japan</option>
                                        <option className="input-field" value="Jersey">Jersey</option>
                                        <option className="input-field" value="Jordan">Jordan</option>
                                        <option className="input-field" value="Kazakhstan">Kazakhstan</option>
                                        <option className="input-field" value="Kenya">Kenya</option>
                                        <option className="input-field" value="Kiribati">Kiribati</option>
                                        <option className="input-field" value="Korea, Democratic People's Republic of">Korea, Democratic People's Republic of</option>
                                        <option className="input-field" value="Korea, Republic of">Korea, Republic of</option>
                                        <option className="input-field" value="Kuwait">Kuwait</option>
                                        <option className="input-field" value="Kyrgyzstan">Kyrgyzstan</option>
                                        <option className="input-field" value="Lao People's Democratic Republic">Lao People's Democratic Republic</option>
                                        <option className="input-field" value="Latvia">Latvia</option>
                                        <option className="input-field" value="Lebanon">Lebanon</option>
                                        <option className="input-field" value="Lesotho">Lesotho</option>
                                        <option className="input-field" value="Liberia">Liberia</option>
                                        <option className="input-field" value="Libyan Arab Jamahiriya">Libyan Arab Jamahiriya</option>
                                        <option className="input-field" value="Liechtenstein">Liechtenstein</option>
                                        <option className="input-field" value="Lithuania">Lithuania</option>
                                        <option className="input-field" value="Luxembourg">Luxembourg</option>
                                        <option className="input-field" value="Macao">Macao</option>
                                        <option className="input-field" value="Macedonia, The Former Yugoslav Republic of">Macedonia, The Former Yugoslav Republic of</option>
                                        <option className="input-field" value="Madagascar">Madagascar</option>
                                        <option className="input-field" value="Malawi">Malawi</option>
                                        <option className="input-field" value="Malaysia">Malaysia</option>
                                        <option className="input-field" value="Maldives">Maldives</option>
                                        <option className="input-field" value="Mali">Mali</option>
                                        <option className="input-field" value="Malta">Malta</option>
                                        <option className="input-field" value="Marshall Islands">Marshall Islands</option>
                                        <option className="input-field" value="Martinique">Martinique</option>
                                        <option className="input-field" value="Mauritania">Mauritania</option>
                                        <option className="input-field" value="Mauritius">Mauritius</option>
                                        <option className="input-field" value="Mayotte">Mayotte</option>
                                        <option className="input-field" value="Mexico">Mexico</option>
                                        <option className="input-field" value="Micronesia, Federated States of">Micronesia, Federated States of</option>
                                        <option className="input-field" value="Moldova, Republic of">Moldova, Republic of</option>
                                        <option className="input-field" value="Monaco">Monaco</option>
                                        <option className="input-field" value="Mongolia">Mongolia</option>
                                        <option className="input-field" value="Montenegro">Montenegro</option>
                                        <option className="input-field" value="Montserrat">Montserrat</option>
                                        <option className="input-field" value="Morocco">Morocco</option>
                                        <option className="input-field" value="Mozambique">Mozambique</option>
                                        <option className="input-field" value="Myanmar">Myanmar</option>
                                        <option className="input-field" value="Namibia">Namibia</option>
                                        <option className="input-field" value="Nauru">Nauru</option>
                                        <option className="input-field" value="Nepal">Nepal</option>
                                        <option className="input-field" value="Netherlands">Netherlands</option>
                                        <option className="input-field" value="Netherlands Antilles">Netherlands Antilles</option>
                                        <option className="input-field" value="New Caledonia">New Caledonia</option>
                                        <option className="input-field" value="New Zealand">New Zealand</option>
                                        <option className="input-field" value="Nicaragua">Nicaragua</option>
                                        <option className="input-field" value="Niger">Niger</option>
                                        <option className="input-field" value="Nigeria">Nigeria</option>
                                        <option className="input-field" value="Niue">Niue</option>
                                        <option className="input-field" value="Norfolk Island">Norfolk Island</option>
                                        <option className="input-field" value="Northern Mariana Islands">Northern Mariana Islands</option>
                                        <option className="input-field" value="Norway">Norway</option>
                                        <option className="input-field" value="Oman">Oman</option>
                                        <option className="input-field" value="Pakistan">Pakistan</option>
                                        <option className="input-field" value="Palau">Palau</option>
                                        <option className="input-field" value="Palestinian Territory, Occupied">Palestinian Territory, Occupied</option>
                                        <option className="input-field" value="Panama">Panama</option>
                                        <option className="input-field" value="Papua New Guinea">Papua New Guinea</option>
                                        <option className="input-field" value="Paraguay">Paraguay</option>
                                        <option className="input-field" value="Peru">Peru</option>
                                        <option className="input-field" value="Philippines">Philippines</option>
                                        <option className="input-field" value="Pitcairn">Pitcairn</option>
                                        <option className="input-field" value="Poland">Poland</option>
                                        <option className="input-field" value="Portugal">Portugal</option>
                                        <option className="input-field" value="Puerto Rico">Puerto Rico</option>
                                        <option className="input-field" value="Qatar">Qatar</option>
                                        <option className="input-field" value="Reunion">Reunion</option>
                                        <option className="input-field" value="Romania">Romania</option>
                                        <option className="input-field" value="Russian Federation">Russian Federation</option>
                                        <option className="input-field" value="Rwanda">Rwanda</option>
                                        <option className="input-field" value="Saint Helena">Saint Helena</option>
                                        <option className="input-field" value="Saint Kitts and Nevis">Saint Kitts and Nevis</option>
                                        <option className="input-field" value="Saint Lucia">Saint Lucia</option>
                                        <option className="input-field" value="Saint Pierre and Miquelon">Saint Pierre and Miquelon</option>
                                        <option className="input-field" value="Saint Vincent and The Grenadines">Saint Vincent and The Grenadines</option>
                                        <option className="input-field" value="Samoa">Samoa</option>
                                        <option className="input-field" value="San Marino">San Marino</option>
                                        <option className="input-field" value="Sao Tome and Principe">Sao Tome and Principe</option>
                                        <option className="input-field" value="Saudi Arabia">Saudi Arabia</option>
                                        <option className="input-field" value="Senegal">Senegal</option>
                                        <option className="input-field" value="Serbia">Serbia</option>
                                        <option className="input-field" value="Seychelles">Seychelles</option>
                                        <option className="input-field" value="Sierra Leone">Sierra Leone</option>
                                        <option className="input-field" value="Singapore">Singapore</option>
                                        <option className="input-field" value="Slovakia">Slovakia</option>
                                        <option className="input-field" value="Slovenia">Slovenia</option>
                                        <option className="input-field" value="Solomon Islands">Solomon Islands</option>
                                        <option className="input-field" value="Somalia">Somalia</option>
                                        <option className="input-field" value="South Africa">South Africa</option>
                                        <option className="input-field" value="South Georgia and The South Sandwich Islands">South Georgia and The South Sandwich Islands</option>
                                        <option className="input-field" value="Spain">Spain</option>
                                        <option className="input-field" value="Sri Lanka">Sri Lanka</option>
                                        <option className="input-field" value="Sudan">Sudan</option>
                                        <option className="input-field" value="Suriname">Suriname</option>
                                        <option className="input-field" value="Svalbard and Jan Mayen">Svalbard and Jan Mayen</option>
                                        <option className="input-field" value="Swaziland">Swaziland</option>
                                        <option className="input-field" value="Sweden">Sweden</option>
                                        <option className="input-field" value="Switzerland">Switzerland</option>
                                        <option className="input-field" value="Syrian Arab Republic">Syrian Arab Republic</option>
                                        <option className="input-field" value="Taiwan">Taiwan</option>
                                        <option className="input-field" value="Tajikistan">Tajikistan</option>
                                        <option className="input-field" value="Tanzania, United Republic of">Tanzania, United Republic of</option>
                                        <option className="input-field" value="Thailand">Thailand</option>
                                        <option className="input-field" value="Timor-leste">Timor-leste</option>
                                        <option className="input-field" value="Togo">Togo</option>
                                        <option className="input-field" value="Tokelau">Tokelau</option>
                                        <option className="input-field" value="Tonga">Tonga</option>
                                        <option className="input-field" value="Trinidad and Tobago">Trinidad and Tobago</option>
                                        <option className="input-field" value="Tunisia">Tunisia</option>
                                        <option className="input-field" value="Turkey">Turkey</option>
                                        <option className="input-field" value="Turkmenistan">Turkmenistan</option>
                                        <option className="input-field" value="Turks and Caicos Islands">Turks and Caicos Islands</option>
                                        <option className="input-field" value="Tuvalu">Tuvalu</option>
                                        <option className="input-field" value="Uganda">Uganda</option>
                                        <option className="input-field" value="Ukraine">Ukraine</option>
                                        <option className="input-field" value="United Arab Emirates">United Arab Emirates</option>
                                        <option className="input-field" value="United Kingdom">United Kingdom</option>
                                        <option className="input-field" value="United States">United States</option>
                                        <option className="input-field" value="United States Minor Outlying Islands">United States Minor Outlying Islands</option>
                                        <option className="input-field" value="Uruguay">Uruguay</option>
                                        <option className="input-field" value="Uzbekistan">Uzbekistan</option>
                                        <option className="input-field" value="Vanuatu">Vanuatu</option>
                                        <option className="input-field" value="Venezuela">Venezuela</option>
                                        <option className="input-field" value="Viet Nam">Viet Nam</option>
                                        <option className="input-field" value="Virgin Islands, British">Virgin Islands, British</option>
                                        <option className="input-field" value="Virgin Islands, U.S.">Virgin Islands, U.S.</option>
                                        <option className="input-field" value="Wallis and Futuna">Wallis and Futuna</option>
                                        <option className="input-field" value="Western Sahara">Western Sahara</option>
                                        <option className="input-field" value="Yemen">Yemen</option>
                                        <option className="input-field" value="Zambia">Zambia</option>
                                        <option className="input-field" value="Zimbabwe">Zimbabwe</option>
                                    </select>
                                </div>
                            </div>
                            <div className="flex items-center mt-5">
                                <input type="checkbox" name="remember" id="remember" aria-label="Remember me" className="mr-1 rounded-sm focus:ring-gray-400  accent-gray-400" />
                                <p htmlFor="remember" className="acceptance"> I agree to Andela's <span ><a className='acceptance-text' href="#">Terms & Conditions</a></span></p>
                            </div>
                            <div className="flex items-center">
                                <input type="checkbox" name="remember" id="remember" aria-label="Remember me" className="mr-1 rounded-sm focus:ring-gray-400   accent-gray-400" />
                                <p htmlFor="remember" className="acceptance"> I understand that Andela will process my information in accordance with their <span ><a className='acceptance-text' href="#">Privacey Policy.</a></span> I may withdraw my consent through unsubscribe links at any time.</p>
                            </div>

                            <div className='mt-5 text-center'>
                                <button type='submit' className='focus:ring-2 focus:ring-offset-2 text-sm font-semibold leading-none text-white focus:outline-none get-started py-4 px-6 rounded-full'>Get started</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>

        </div>
    );
};

export default FromFour;