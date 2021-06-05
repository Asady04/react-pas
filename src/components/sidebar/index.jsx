import React from "react";
import mobil from '../../images/sidebar/car.png'

export default function Sidebar(props) {
    const cart = [
        {image: props.image, nama: props.nama, harga:props.harga, total: props.pesan}
    ]
    console.log(cart)
    return(
        <React.Fragment>
            <nav className='fixed h-full w-1/4 bg-gray-50'>
                <div className="pl-10 mt-10 mr-10">
                    <h1 className='text-2xl font-bold'>Pesanan Saya</h1>
                    <div className="bg-purple-500 text-white p-4 rounded-xl mt-5 w-full font-poppins">
                        <p>Mr.Siliwangi</p>
                        <h1 className='text-2xl mt-2 mb-2'>Rp. 1.000.000,-</h1>
                        <p>0 8 * * * * * * * * 1 1</p>
                    </div>
                    <div className="mt-6 font-bold">
                        {cart.map((c, id)=>(
                            c.total * c.harga === 0 ? <div></div> :
                            <div className="flex mt-3 items-center justify-between" key={id}>
                                <img src={c.image} alt={c.nama} className='rounded-xl w-1/5'/>
                                <p className='text-sm'>{c.total}</p>
                                <p className="text-sm">x</p>
                                <p className="text-sm">{c.nama}</p>
                                <p className="text-sm text-gray-400">{c.harga * c.total}</p>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-between mt-10 items-center font-bold">
                        <div className="bg-yellow-100 rounded-xl p-5 pr-1">
                            <img className='w-1/2' src={mobil} alt={mobil} />
                        </div>
                        <p className='text-sm'>Majapahit, Sumareccon</p>
                        <p className="text-xs text-gray-400">Gratis</p>
                    </div>
                    <div className="w-full mt-5 font-bold">
                        <div className="flex justify-between items-center mb-5">
                        <p className="text-xs">Total:</p>
                        <p className="text-2xl font-poppins">Rp. {props.harga * props.pesan}</p>
                        </div>
                        <button className="bg-yellow-300 w-full rounded-2xl p-5 font-bold">Pesan</button>
                    </div>
                </div>
            </nav>
        </React.Fragment>
    )
}