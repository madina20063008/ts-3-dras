
import React, { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { FaFacebookF, FaGoogle, FaQrcode } from 'react-icons/fa';
import search from '../assets/search.png';
import bell from '../assets/bell.png';
import savat from '../assets/savat.png';
import button from '../assets/button.png';
import green from '../assets/green.svg';
import { signInWithGoogle } from '../../Firebase';

interface User {
  name: string;
  surname: string;
  email: string;
  password: string | null;
}

const Navbar: React.FC = () => {
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  const [isRegister, setIsRegister] = useState<boolean>(false);
  const [name, setName] = useState<string>('');
  const [surname, setSurname] = useState<string>('');
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [confirmPassword, setConfirmPassword] = useState<string>('');
  const [user, setUser] = useState<User | null>(null);

  const navigate = useNavigate();

  useEffect(() => {
    const loggedInUser = sessionStorage.getItem('loggedInUser');
    if (loggedInUser) {
      setUser(JSON.parse(loggedInUser));
    }
  }, []);

  const singInwithGoogle = async () => {
    try {
      const result = await signInWithGoogle();
      const firebaseUser = result.user;

      const userData: User = {
        name: firebaseUser.displayName?.split(' ')[0] || '',
        surname: firebaseUser.displayName?.split(' ')[1] || '',
        email: firebaseUser.email || '',
        password: null,
      };

      const existingUser = localStorage.getItem(userData.email);
      if (!existingUser) {
        localStorage.setItem(userData.email, JSON.stringify(userData));
      }

      sessionStorage.setItem('loggedInUser', JSON.stringify(userData));
      setUser(userData);
      alert('Login successful with Google!');
      setIsModalOpen(false);
    } catch (error: any) {
      console.error('Google Sign-In Error:', error.message);
      alert('Google Sign-In failed. Please try again.');
    }
  };

  const handleRegister = () => {
    if (password !== confirmPassword) {
      alert('Passwords do not match!');
      return;
    }

    const existingUser = JSON.parse(localStorage.getItem(email) || 'null');
    if (existingUser) {
      alert('User already exists with this email!');
      return;
    }

    const newUser: User = { name, surname, email, password };
    localStorage.setItem(email, JSON.stringify(newUser));

    alert('Registration successful! You can now log in.');
    setIsRegister(false);
  };

  const handleLogin = () => {
    const savedUser = JSON.parse(localStorage.getItem(email) || 'null');
    if (savedUser && savedUser.password === password) {
      setUser(savedUser);
      sessionStorage.setItem('loggedInUser', JSON.stringify(savedUser));
      alert('Login successful!');
      setIsModalOpen(false);
    } else {
      alert('Invalid email or password!');
    }
  };

  return (
    <div>
      <nav className="w-[1100px] mx-auto flex justify-between items-center bg-white border-b px-6 py-3 fixed top-0 left-1/2 transform -translate-x-1/2 z-20">
        <img src={green} alt="Logo" />
        <div className="space-x-6 font-semibold text-[18px]">
          <a href="#" className="text-gray-600">Home</a>
          <a href="#" className="text-gray-600">Blog</a>
        </div>
        <div className="space-x-4 flex items-center">
          <img src={search} alt="Search" />
          <img src={bell} alt="Notifications" />
          <img src={savat} alt="Cart" />
          <button
            onClick={() => {
              if (user) {
                navigate('/dashboard');
              } else {
                setIsModalOpen(true);
                setIsRegister(false);
              }
            }}
            className="bg-green-600 text-white px-4 py-2 rounded-lg flex items-center"
          >
            <img src={button} alt="User Icon" className="mr-2" />
            {user ? user.name : 'Login'}
          </button>
        </div>
      </nav>

      {isModalOpen && (
        <div
          className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50 z-50"
          onClick={() => setIsModalOpen(false)}
        >
          <div
            className="bg-white p-6 rounded-lg w-[400px] relative"
            onClick={(e) => e.stopPropagation()}
          >
            <button
              onClick={() => setIsModalOpen(false)}
              className="absolute top-3 right-3 text-gray-500 hover:text-gray-700"
            >
              ✖
            </button>
            <div className="flex justify-center space-x-4 mb-4">
              <button
                className={`text-lg font-semibold ${!isRegister ? 'text-green-600' : 'text-gray-500'}`}
                onClick={() => setIsRegister(false)}
              >
                Login
              </button>
              <span>|</span>
              <button
                className={`text-lg font-semibold ${isRegister ? 'text-green-600' : 'text-gray-500'}`}
                onClick={() => setIsRegister(true)}
              >
                Register
              </button>
            </div>

            {!isRegister ? (
              <>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  Enter your email and password to login.
                </p>
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Email"
                  className="w-full border px-3 py-2 rounded-md mb-2"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Password"
                  className="w-full border px-3 py-2 rounded-md mb-2"
                />
                <button onClick={handleLogin} className="w-full bg-green-600 text-white py-2 rounded-md mt-4">
                  Login
                </button>

                <div className="w-full max-w-xs mx-auto">
                  <div className="flex items-center my-4">
                    <hr className="flex-grow border-t" />
                    <span className="mx-2 text-gray-500 text-sm">Or login with</span>
                    <hr className="flex-grow border-t" />
                  </div>

                  <div className="flex flex-col gap-3">
                    <button className="flex items-center gap-3 border rounded px-4 py-2 hover:bg-gray-100 transition">
                      <FaFacebookF className="text-blue-600" />
                      <span>Login with Facebook</span>
                    </button>

                    <button className="flex items-center gap-3 border rounded px-4 py-2 hover:bg-gray-100 transition" onClick={singInwithGoogle}>
                      <FaGoogle className="text-red-500" />
                      <span>Login with Google</span>
                    </button>

                    <button className="flex items-center gap-3 border rounded px-4 py-2 hover:bg-gray-100 transition">
                      <FaQrcode />
                      <span>Login with QR Code</span>
                    </button>
                  </div>
                </div>
              </>
            ) : (
              <>
                <p className="text-gray-600 text-sm mb-4 text-center">
                  Enter your details to create an account.
                </p>
                <input
                  type="text"
                  value={name}
                  onChange={(e) => setName(e.target.value)}
                  placeholder="Name"
                  className="w-full border px-3 py-2 rounded-md mb-2"
                />
                <input
                  type="text"
                  value={surname}
                  onChange={(e) => setSurname(e.target.value)}
                  placeholder="Surname"
                  className="w-full border px-3 py-2 rounded-md mb-2"
                />
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  placeholder="Enter your email address"
                  className="w-full border px-3 py-2 rounded-md mb-2"
                />
                <input
                  type="password"
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                  placeholder="Enter your password"
                  className="w-full border px-3 py-2 rounded-md mb-2"
                />
                <input
                  type="password"
                  value={confirmPassword}
                  onChange={(e) => setConfirmPassword(e.target.value)}
                  placeholder="Confirm your password"
                  className="w-full border px-3 py-2 rounded-md mb-2"
                />
                <button onClick={handleRegister} className="w-full bg-green-600 text-white py-2 rounded-md mt-4">
                  Register
                </button>

                <div className="w-full max-w-xs mx-auto">
                  <div className="flex items-center my-4">
                    <hr className="flex-grow border-t" />
                    <span className="mx-2 text-gray-500 text-sm">Or register with</span>
                    <hr className="flex-grow border-t" />
                  </div>

                  <div className="flex flex-col gap-3">
                    <button className="flex items-center gap-3 border rounded px-4 py-2 hover:bg-gray-100 transition">
                      <FaFacebookF className="text-blue-600" />
                      <span>Register with Facebook</span>
                    </button>

                    <button className="flex items-center gap-3 border rounded px-4 py-2 hover:bg-gray-100 transition" onClick={singInwithGoogle}>
                      <FaGoogle className="text-red-500" />
                      <span>Register with Google</span>
                    </button>
                  </div>
                </div>
              </>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default Navbar;

