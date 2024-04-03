import React from 'react';
import Table from 'react-bootstrap/Table';
import 'bootstrap/dist/css/bootstrap.min.css';

const UserTable = () => {
    const userData = JSON.parse(localStorage.getItem('userData'));

    return (
        <div>
            <h2 className="text-center">User Table</h2>
            {userData ? (
                <Table>
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Date of Birth</th>
                            <th>Password</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <td>{userData.name}</td>
                            <td>{userData.email}</td>
                            <td>{new Date(userData.dob).toLocaleDateString()}</td>
                            <td>{userData.password}</td>
                        </tr>
                    </tbody>
                </Table>
            ) : (
                <p>No user data available.</p>
            )}
        </div>
    );
};

export default UserTable;
