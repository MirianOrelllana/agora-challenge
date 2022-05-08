import React from 'react'
export const Table = ({ users }: any) => {
    const titleTable = ["Número", "Nombre", "Apellido", "Edad", "Fecha de nacimiento", "Fecha de la muerte"]

    return (
        <div>Table
            <div className="relative overflow-x-auto shadow-md sm:rounded-lg">
                <table className="w-full text-sm text-left text-gray-500 dark:text-gray-400">
                    <thead className="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                        <tr>
                            {titleTable.map((titulo, index) => (
                                <th key={index} scope="col" className="px-6 py-3">
                                    {titulo}
                                </th>
                            ))}
                        </tr>
                    </thead>
                    <tbody>
                        {users ? users.map((usuario: any, value: any) => (
                            <tr key={usuario.id} className="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                                <th scope="row" className="px-6 py-4">{value + 1}</th>
                                <th scope="row" className="px-6 py-4">{usuario.name ? usuario.name : 'no tiene'}</th>
                                <th scope="row" className="px-6 py-4">{usuario.lastname ? usuario.name : 'no tiene'}</th>
                                <th scope="row" className="px-6 py-4">{usuario.age ? usuario.age : 'no tiene'}</th>
                                <th scope="row" className="px-6 py-4">{usuario.datebirth ? usuario.datebirth : 'no tiene'}</th>
                                <th scope="row" className="px-6 py-4">{usuario.ageDied ? usuario.ageDied : 'no tiene'}</th>
                            </tr>
                        )) : null}
                    </tbody>
                </table>
            </div>

        </div>
    )
}
