import React from 'react'

function AdminPanel() {
    return (
        <>
            <div class="w-full h-[700px] flex justify-center pt-[100px]">
                <div class=" shadow-lg w-2/4 h-[400px] text-center flex items-center justify-center "><div>
                    <h1>Are you Admin</h1>
                    <input class="bg-gray-200 border rounded focus:outline-none text-xs font-medium leading-none text-gray-800 py-3 w-full pl-3 mt-2" type="text" />
                    <br />
                    <button class="focus:ring-2 focus:ring-offset-2 focus:ring-indigo-700 text-sm font-semibold leading-none text-white focus:outline-none bg-indigo-700 border rounded hover:bg-indigo-600 py-4 w-full mt-3">
                        Submit
                    </button>
                </div>
                </div>
            </div>
        </>
    )
}

export default AdminPanel
