import React, { useEffect, useState } from 'react'
import Card from '../../components/Card/Card'
import Form from '../../components/Form/Form'
import { Table } from '../../components/Table/Table'
import { getMediaUser, getUsers } from '../../config/api'

const Inicio = () => {
    const [viewModal, setViewModal] = useState<Boolean>(false)
    const [usuarios, setusuarios] = useState<any>();
    const [quantitymedia, setquantitymedia] = useState<any>()
    useEffect(() => {
        getUsuarios()
        getMedia()
    }, [])

    const getUsuarios = async () => {

        const result = await getUsers()
        setusuarios(result)
    }
    const getDesviation = async() => {
    }

    const getMedia = async() => {
        const media = getMediaUser()
        setquantitymedia(media)
    }

    return (
        <div>
            <nav className="relative flex flex-wrap items-center justify-between px-2 py-3 mb-3">
                <div className='text-sm font-bold leading-relaxed inline-block mr-4 py-2 whitespace-nowrap uppercase'>
                    Lista de usuarios firebase
                </div>

                <button onClick={() => setViewModal(true)} className="block text-white bg-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800" type="button" data-modal-toggle="defaultModal">
                    Crear usuario
                </button>
            </nav>

            <div className="flex flex-wrap">
                {/* <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <Card tittle="Promedio" colorIcon="red" quantity={quantitymedia} description='El promedio de todas las edades'></Card>
                </div>

                <div className="w-full lg:w-6/12 xl:w-3/12 px-4">
                    <Card tittle="titulo" colorIcon="red" quantity='' description='descr'></Card>

                </div> */}
            </div>
            <Form ViewModal={viewModal} setViewModal={() => setViewModal(false)}></Form>
            <Table users = {usuarios}></Table>
        </div>
    )
}

export default Inicio