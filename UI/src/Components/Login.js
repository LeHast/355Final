


import React, { useState, useEffect, useCallback } from 'react';
import API from '../API_Interface/API_Interface.js';
import FormControl from '@mui/material/FormControl';
import TextField from '@mui/material/TextField';
import Button from '@mui/material/Button';
import Box from '@mui/material/Box';
import Divider from '@mui/material/Divider';
import MediaCard from '../Components/Cards/MediaCard';


const myStyles = {
    color: 'blue',
    fontSize: '16px',
    backgroundColor: 'lightgray',
    display: 'flex',    
    flexDirection: 'column',
    alignItems: 'center',
    padding: '30px',
};


export default function Login() {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [verifyUser, setVerifyUser] = useState(false);
    const [authFailed, setAuthFailed] = useState(false);
    const [user, setUser] = useState(undefined);

    const handleInputChange = (event, inputType) => {
        if (inputType === 'username') {
            setUsername(event.target.value);
        } else if (inputType === 'password') {
            setPassword(event.target.value);
        }

        setAuthFailed(false);

        if (event.key === 'Enter') {
            setVerifyUser(true);
        }
    };

    const handleLogout = useCallback(() => {
        // Add any necessary logic for logging out (clearing user data, etc.)
        setUser(undefined);
    }, []);

    useEffect(() => {
        const api = new API();

        async function getUserInfo() {
            try {
                const userInfo = await api.getUserInfo(username);

                if (userInfo.status === 'OK' && password === userInfo.user.user_password) {
                    setUser(userInfo.user);
                } else {
                    setVerifyUser(false);
                    setAuthFailed(true);
                }
            } catch (error) {
                console.error('Error during login:', error);
            }
        }

        if (verifyUser && username.length > 0 && password.length > 0) {
            getUserInfo();
        } else if (!verifyUser) {
            // If not verifying user, perform logout logic
            handleLogout();
        }
    }, [verifyUser, username, password, handleLogout]);

    const handleLogoutClick = () => {
        // Clear the input fields and initiate logout
        setUsername('');
        setPassword('');
        setVerifyUser(false); // This ensures that the login form is displayed after logout
        handleLogout();
    };

    return (
        <div style={myStyles}>
            {user !== undefined ? (
                // Display the authenticated user's content
                <>
                    <MediaCard user={user} />
                    <Box mt={2}>
                        <Button variant="outlined" size="medium" onClick={handleLogoutClick}>
                            Logout
                        </Button>
                    </Box>
                </>
            ) : (
                // Display the login form when no user is authenticated
                <>
                    <Box display="flex" justifyContent="left" alignItems="left" mt={10}>
                        <FormControl>
                            <TextField
                                error={authFailed}
                                id="outlined-error-helper-text-username"
                                label="Username"
                                placeholder=""
                                value={username}
                                helperText={authFailed ? 'Authentication failed' : 'Only for existing users!'}
                                onChange={(event) => handleInputChange(event, 'username')}
                            />
                        </FormControl>
                        <Divider />
                    </Box>

                    <Box display="flex" justifyContent="left" alignItems="left" mt={2}>
                        <FormControl>
                            <TextField
                                type="password"
                                error={authFailed}
                                id="outlined-error-helper-text-password"
                                label="Password"
                                placeholder=""
                                value={password}
                                helperText={authFailed ? 'Authentication failed' : ''}
                                onChange={(event) => handleInputChange(event, 'password')}
                            />
                        </FormControl>
                    </Box>

                    <Box display="flex" justifyContent="left" alignItems="left" mt={2}>
                        <Button variant="outlined" size="medium" onClick={() => setVerifyUser(true)}>
                            Log-in
                        </Button>
                    </Box>
                </>
            )}
        </div>
    );
}