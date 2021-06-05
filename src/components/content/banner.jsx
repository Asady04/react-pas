import React from "react";
import bannerLogo from '../../images/content/banner.png'

export default function Banner(params) {
    return(
        <React.Fragment>
            <div className="flex items-center px-10 py-2 rounded-2xl" style={{background: "#FFF7ED"}}>
                <div className="w-4/12 flex justify-end pr-5">
                    <img src={bannerLogo} alt={bannerLogo} className="h-24 w-44" />
                </div>
                <div className="w-6/12" style={{color:'#FB6D3A'}}>
                    <h1 className='font-extrabold text-2xl'>Promo Hari Ini</h1>
                    <p className='font-semibold text-lg'>Perut kenyang hati senang</p>
                </div>
            </div>
            <div className="flex items-center justify-center">
                <ul className='flex w-1/12 items-center justify-between mt-4'>
                    <li>
                        <div className="w-2 h-2 rounded-full" style={{background:'#FB6D3A'}}></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full bg-gray-100"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full bg-gray-100"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full bg-gray-100"></div>
                    </li>
                    <li>
                        <div className="w-2 h-2 rounded-full bg-gray-100"></div>
                    </li>
                </ul>
            </div>
        </React.Fragment>
    )
}