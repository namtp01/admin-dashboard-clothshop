import React from 'react'
import EditCategory from '../components/Categories/EditCategory'
import Header from './../components/Header'
import Sidebar from './../components/sidebar'

const CategoriesEditScreen = ({ match }) =>
{
    const categoryId = match.params.id
    return (
        <>
            <Sidebar />
            <main className='main-wrap'>
                <Header />
                <EditCategory categoryId={categoryId} />
            </main>
        </>
    )
}

export default CategoriesEditScreen
