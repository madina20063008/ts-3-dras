
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import user from '../assets/User.svg';
import bag from '../assets/Bag.png';
import location from '../assets/Location.png';
import heart from '../assets/heart.png';
import clock from '../assets/clock.png';
import logout from '../assets/logout.png';
import star from '../assets/star.png';

interface UserData {
    name: string;
    surname: string;
    email: string;
    username: string;
    phone: string;
}

const Dashboard: React.FC = () => {
    const navigate = useNavigate();
    const [userData, setUserData] = useState<UserData>({
        name: '',
        surname: '',
        email: '',
        username: '',
        phone: ''
    });

    useEffect(() => {
        const loggedInUser = sessionStorage.getItem('loggedInUser');
        if (loggedInUser) {
            try {
                const parsedUser = JSON.parse(loggedInUser);
                const storedUser = localStorage.getItem(parsedUser.email);
                if (storedUser) {
                    const fullUser: UserData = JSON.parse(storedUser);
                    setUserData({
                        name: fullUser.name || '',
                        surname: fullUser.surname || '',
                        email: fullUser.email || '',
                        username: fullUser.username || '',
                        phone: fullUser.phone || ''
                    });
                }
            } catch (error) {
                console.error('Error parsing user data:', error);
            }
        }
    }, []);

    const handleLogout = () => {
        sessionStorage.removeItem('loggedInUser');
        navigate('/login');
    };

    return (
        <div>
            <div className="w-[1100px] mx-auto mt-[120px] flex gap-[100px]">
                <ul className='text-[18px] p-4 bg-[#FBFBFB] w-[250px]'>
                    <h3 className='font-bold text-[22px]'>My Account</h3>
                    <li className='flex gap-2 mt-[20px]'><img src={user} alt="" className='w-6' />Account Details</li>
                    <li className='flex gap-2 mt-[20px]'><img src={bag} alt="" className='w-6' />My Products</li>
                    <li className='flex gap-2 mt-[20px]'><img src={location} alt="" className='w-6' />Address</li>
                    <li className='flex gap-2 mt-[20px]'><img src={heart} alt="" className='w-7' />Wishlist</li>
                    <li className='flex gap-2 mt-[20px]'><img src={clock} alt="" className='w-7' />Track Order</li>

                    <li
                        className='flex gap-2 text-red-500 mt-[40px] cursor-pointer'
                        onClick={handleLogout}
                    >
                        <img src={logout} alt="" className='w-7' />Log out
                    </li>
                </ul>

                <div>
                    <h3 className='font-bold text-[22px] p-4'>Track your Orders</h3>
                    <div className="flex gap-[30px]">
                        <div>
                            <div>
                                <label className='flex mt-4'><img src={star} alt="" className='w-2 h-2 mt-2 mr-2' />First name</label>
                                <input
                                    type="text"
                                    placeholder='Type your first name ...'
                                    className='mt-2 block p-2 w-[300px] hover:border-blue-500 rounded-lg'
                                    value={userData.name}
                                    readOnly
                                />
                            </div>
                            <div>
                                <label className='flex mt-4'><img src={star} alt="" className='w-2 h-2 mt-2 mr-2' />Email address</label>
                                <input
                                    type="email"
                                    placeholder='Type your email address ...'
                                    className='mt-2 block p-2 w-[300px] hover:border-blue-500 rounded-lg'
                                    value={userData.email}
                                    readOnly
                                />
                            </div>
                            <div>
                                <label className='flex mt-4'><img src={star} alt="" className='w-2 h-2 mt-2 mr-2' />Username</label>
                                <input
                                    type="text"
                                    placeholder='Type your username ...'
                                    className='mt-2 block p-2 w-[300px] hover:border-blue-500 rounded-lg'
                                    value={userData.username}
                                    readOnly
                                />
                            </div>
                        </div>
                        <div>
                            <div>
                                <label className='flex mt-4'><img src={star} alt="" className='w-2 h-2 mt-2 mr-2' />Last name</label>
                                <input
                                    type="text"
                                    placeholder='Type your last name ...'
                                    className='mt-2 block p-2 w-[300px] hover:border-blue-500 rounded-lg'
                                    value={userData.surname}
                                    readOnly
                                />
                            </div>
                            <div>
                                <label className='flex mt-4'><img src={star} alt="" className='w-2 h-2 mt-2 mr-2' />Phone Number</label>
                                <input
                                    type="tel"
                                    placeholder='Type your phone number ...'
                                    className='mt-2 block p-2 w-[300px] hover:border-blue-500 rounded-lg'
                                    value={userData.phone}
                                    readOnly
                                />
                            </div>
                            <div>
                                <label className='flex mt-4'><img src={star} alt="" className='w-2 h-2 mt-2 mr-2' />Profile photo</label>
                                <input
                                    type="file"
                                    className='mt-2 block p-2 w-[300px] hover:border-blue-500 rounded-lg'
                                />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Dashboard;
