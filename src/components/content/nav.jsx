import React from "react";
import { NavLink } from "react-router-dom"
import Semua from '../../images/content/semua.jpg'
import axios from "axios";

export default function Nav(params) {
    const [category, setCategory] = React.useState([])
    const getCategory = async ()=> {
        try {
            const url = `https://belajar-react.smkmadinatulquran.sch.id/api/category/all`
            const response = await axios.get(url)
            console.log(response)
            setCategory(response.data.data)
        } catch (e) {
            
        }
    }
    React.useEffect(()=>{
        getCategory()
    },[])
    return(
        <React.Fragment>
            <div className="mt-10 pr-5">
                <div className=" flex items-center justify-between">
                    <h1 className='font-extrabold text-2xl'>Kategori</h1>
                    <button className='text-xs rounded-full text-white font-bold px-4 py-2' style={{background:'#FB6D3A'}}>Lebih lengkap</button>
                </div>
                <div>
                    <ul className='flex items-center flex-nowrap overflow-auto w-full'>
                        <li className="flex-none relative w-1/4.5 h-full m-5">
                            <img src={Semua} alt={Semua} />
                            <NavLink to={`/`}>
                                <p style={{background:'rgba(1,1,1,.5)'}} className='font-medium absolute rounded-3xl text-2xl w-full text-white h-full flex items-center justify-center top-0'>Semua</p>
                            </NavLink>
                        </li>
                        {category.map((c, id)=>(
                            <li className={`flex-none relative w-1/4.5 h-full m-5`} key={id}>
                                <img className={`rounded-xl w-full h-32`} src={c.img} alt={c.name} />
                                <NavLink to={`/category/${c.id}`}>
                                    <p style={{background:'rgba(1,1,1,.5)'}} className='font-medium absolute rounded-3xl text-2xl w-full text-white h-full flex items-center justify-center top-0'>{c.name}</p>
                                </NavLink>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </React.Fragment>
    )
}