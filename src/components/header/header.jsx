import React from 'react';
import logo from '../../images/header/logo.png'
import hati from '../../images/header/hati.png'
import kubus from '../../images/header/kubus.png'
import orang from '../../images/header/orang.png'
import angka from '../../images/header/angka.png'

function Header(){
    const dipojok = [
        {image: hati},
        {image: kubus},
        {image: angka},
        {image: orang},
        
    ]
    return(
        <React.Fragment>
            <nav className='w-full h-1/10 flex fixed bg-white z-10'>
                <section className="w-3/4 flex items-center px-2">
                    <div className="w-1/3">
                        <img src={logo} alt={logo} />
                    </div>
                    <div className="w-2/3 relative">
                        <svg className="left-3 top-2.5 w-6 h-6 absolute" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" /></svg>
                        <input type="text" className="w-full text-lg pl-14 py-2 rounded-full bg-gray-50" placeholder='Cari Makan Bang?'/>
                    </div>
                </section>
                <section className='w-1/4 h-full'>
                    <div className="h-full flex items-center justify-between pr-5 pl-20 bg-gray-50">
                        {dipojok.map((i,id)=>(
                            <div key={id}><img src={i.image} alt={i.image} className="w-1/2 " /></div>
                        ))}
                    </div>  
                </section>
            </nav>
        </React.Fragment>
    )
}

export default Header 