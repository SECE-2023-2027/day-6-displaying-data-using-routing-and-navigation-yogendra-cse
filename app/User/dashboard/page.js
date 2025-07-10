import React from 'react'
export const metadata = {
    title:'Dashboard - Facebook',
    description: 'This is a user dashboard for Facebook'
}

const Dashboardpage = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
            <div className="bg-white shadow-lg rounded-lg p-8 w-full max-w-md">
                <h1 className="text-3xl font-bold mb-4 text-gray-800">Dashboard</h1>
                <p className="text-gray-600">Welcome to your dashboard page.</p>
                </div>
            </div>
    )
}

export default Dashboardpage
