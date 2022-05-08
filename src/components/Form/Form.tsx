import React, { useState } from 'react'
import { saveUser } from '../../config/api'

const Form = ({ ViewModal, setViewModal }: any) => {
    const [user, setuser] = useState({})
    // const cerrarModal = () => {
    //     viewModal(false)
    // }
    const onChangeInputs = (e: any) => {
        const { name, value } = e.target
        setuser({ ...user, [name]: value })
    }
    const handleSubmit = async (e: any) => {
        e.preventDefault()
        await saveUser(user)
        setViewModal()
    }
    return (
        <>
            {ViewModal ? <>
                <div
                    className="justify-center items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none"
                >
                    <div className="relative w-auto my-6 mx-auto max-w-3xl">
                        {/*content*/}
                        <div className="border-0 rounded-lg shadow-lg relative flex flex-col w-full bg-white outline-none focus:outline-none">
                            {/*header*/}
                            <div className="flex items-start justify-between p-5 border-b border-solid border-slate-200 rounded-t">
                                <h3 className="text-3xl font-semibold">
                                    Agregar usuario
                                </h3>
                                <button
                                    className="p-1 ml-auto bg-transparent border-0 text-black opacity-5 float-right text-3xl leading-none font-semibold outline-none focus:outline-none"
                                    onClick={() => setViewModal(false)}
                                >
                                    <span className="bg-transparent text-black opacity-5 h-6 w-6 text-2xl block outline-none focus:outline-none">
                                        ×
                                    </span>
                                </button>
                            </div>
                            {/*body*/}
                            <div className="relative p-6 flex-auto">
                                <form onSubmit={handleSubmit} className="w-full max-w-lg">
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-first-name">
                                                Nombres
                                            </label>
                                            <input
                                                onChange={(e) => onChangeInputs(e)}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-red-500 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white"
                                                id="grid-first-name"
                                                type="text"
                                                placeholder="Ingresar el nombre del usuario"
                                                name='name'
                                                required
                                            />
                                            <p className="text-red-500 text-xs italic">Rellenar estos campos.</p>
                                        </div>
                                        <div className="w-full md:w-1/2 px-3">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-last-name">
                                                Apellidos
                                            </label>
                                            <input
                                                onChange={(e) => onChangeInputs(e)}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-last-name"
                                                type="text"
                                                placeholder="Ingresar el apellido del usuario"
                                                name='lastname'
                                                required
                                            />
                                        </div>
                                    </div>
                                    <div className="flex flex-wrap -mx-3 mb-6">
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-password">
                                                Edad
                                            </label>
                                            <input
                                                onChange={(e) => onChangeInputs(e)}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 mb-3 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-number"
                                                type="number"
                                                placeholder="Ingresar la edad del usuario"
                                                name='age'
                                                required
                                            />
                                            <p className="text-gray-600 text-xs italic">Hola mundo</p>
                                        </div>
                                        <div className="w-full md:w-1/2 px-3 mb-6 md:mb-0">
                                            <label className="block uppercase tracking-wide text-gray-700 text-xs font-bold mb-2" htmlFor="grid-city">
                                                Fecha de nacimiento
                                            </label>
                                            <input
                                                onChange={(e) => onChangeInputs(e)}
                                                className="appearance-none block w-full bg-gray-200 text-gray-700 border border-gray-200 rounded py-3 px-4 leading-tight focus:outline-none focus:bg-white focus:border-gray-500"
                                                id="grid-date"
                                                type="date"
                                                placeholder="Fecha"
                                                name='datebirth'
                                                required />
                                        </div>
                                    </div>
                                    {/*footer*/}
                                    <div className="flex items-center justify-end p-6 border-t border-solid border-slate-200 rounded-b">
                                        <button
                                            className="text-red-500 background-transparent font-bold uppercase px-6 py-2 text-sm outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="button"
                                            onClick={() => setViewModal()}
                                        >
                                            Cerrar
                                        </button>
                                        <button
                                            className="bg-emerald-500 text-white active:bg-emerald-600 font-bold uppercase text-sm px-6 py-3 rounded shadow hover:shadow-lg outline-none focus:outline-none mr-1 mb-1 ease-linear transition-all duration-150"
                                            type="submit"
                                        >
                                            Guardar usuario
                                        </button>
                                    </div>
                                </form>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="opacity-25 fixed inset-0 z-40 bg-black"></div>

            </> : null}
        </>


    )
}

export default Form