import React from 'react'
import Content from '../content'
import Header from '../header/header'
import Sidebar from '../sidebar'

function Layout() {
    const [image,setImage] = React.useState([])
    const [harga,setHarga] = React.useState([])
    const [pesan,setPesan] = React.useState([])
    const [nama,setNama] = React.useState([])
    const getAll= (image,harga,total,nama) =>{
        setNama(nama)
        setImage(image)
        setHarga(harga)
        setPesan(total)
    }
    return(
        <React.Fragment>
            {/* ini bagian header */}
            <div className="h-screen w-screen font-poppins">
                <header className='flex items-center h-1/10 w-full'>
                    <Header/>
                </header>
                <main className='w-full h-full flex'>
                    {/* ini bagian utama */}
                    <section className='w-3/4 h-full p-8'>
                        <Content getAll={getAll}/>
                    </section>
                    {/* ini sidebar */}
                    <section className='w-1/4 h-full'>
                        <Sidebar image={image} harga={harga} pesan={pesan} nama={nama}/>
                    </section>
                </main>
            </div>
        </React.Fragment>
    )
}
export default Layout