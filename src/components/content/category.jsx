import axios from "axios"
import React from "react"
import { NavLink, useParams } from "react-router-dom"
import Popup from 'reactjs-popup'

export default function Category(props) {
    const [populer, setPopuler] = React.useState([])
    const [angka, setAngka] = React.useState(0)
    const [image,setImage] = React.useState([])
    const [harga,setHarga] = React.useState([])
    const [pesan,setPesan] = React.useState([])
    const [nama,setNama] = React.useState([])
    props.getAll(image,harga,pesan,nama)
    let {id} = useParams()
    const getPopuler = async (id) => {
        try {
            const url = `https://belajar-react.smkmadinatulquran.sch.id/api/populer/8?page=${id}`
            const response = await axios.get(url)
            console.log(response)
            setPopuler(response.data.data)
        } catch (error) {
            console.log(error)
        }
    }
    React.useEffect(()=>{
        getPopuler(id)
    },[id])
    return(
        <React.Fragment>
            <div className="mt-10">
                <div className=" flex items-center justify-between">
                    <h1 className='font-extrabold text-2xl'>Populer</h1>
                </div>
                <div>
                    <ul className='flex items-center flex-wrap overflow-auto w-full'>
                        {populer.map((c, id)=>(
                            <li className={`flex-none relative w-3/10 h-full m-3`} key={id}>
                                <Popup trigger={
                                    <img className={`rounded-xl w-full h-32`} src={c.image} alt={c.name} />
                                } modal>
                                    {(
                                        <div className="modal rounded-xl bg-white shadow-lg p-5 w-96 font-poppins">
                                            <img className='w-full h-32 rounded-xl' src={c.image} alt={c.name}/>
                                            <div className="flex justify-between font-bold mt-5">
                                                <h1 className="text-lg">{c.name}</h1>
                                                <h1 className="text-lg">Rp. {c.harga}</h1>
                                            </div>
                                            <div className="mt-5 text-sm">
                                                {`${c.name} adalah hidangan yg bisa dinikmati oleh segala usia, hidangan dengan rating ${c.rating} ini sangat populer baik bagi wanita atau pria makanan ini memerlukan waktu sekitar ${c.waktu} hingga dikirimkan`}
                                            </div>
                                            <p className="font-bold mt-5">{`stok: ${c.jumlah}`}</p>
                                            <div className="mt-5 flex items-center justify-between">
                                                <div className="flex items-center justify-between bg-yellow-100 rounded-lg p-1">
                                                    <button disabled={c.pesan == 0} onClick={()=>{
                                                        setAngka(c.pesan--)
                                                        c.jumlah++
                                                    }} className={`text-xl bg-white p-2 rounded-lg`}>-</button>
                                                    <p className="m-3">{c.pesan}</p>
                                                    <button disabled={c.jumlah == 0} onClick={()=>{
                                                        setAngka(c.pesan++)
                                                        c.jumlah--
                                                    }} className='text-xl bg-white p-2 rounded-lg'>+</button>
                                                </div>
                                                <button onClick={()=>{
                                                    setImage(c.image)
                                                    setNama(c.name)
                                                    setHarga(c.harga)
                                                    setPesan(c.pesan)
                                                }} className="bg-yellow-300 font-bold p-4 rounded-xl">Tambah Pesanan</button>
                                            </div>
                                        </div>
                                    )}
                                </Popup>
                                <p className='bg-gray-50 rounded-full absolute bottom-20 left-2 p-3 text-xs font-bold'>{c.waktu}</p>
                                <p className=' font-bold text-xl mt-5 justify-center'>{c.name}</p>
                                <div className="flex justify-between mt-2">
                                    <div className="flex">
                                        <i className="far fa-star"></i>
                                        <p className='font-bold text-sm'>{c.rating}</p>
                                    </div>
                                    <p className='font-bold text-sm'>Rp. {c.harga}</p>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}