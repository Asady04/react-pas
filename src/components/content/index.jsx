import React from "react";
import { Route, Switch } from "react-router";
import Banner from "./banner";
import Category from "./category";
import Nav from "./nav";
import Populer from './populer'

export default function Content(props) {
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
    props.getAll(image, harga, pesan, nama)
    return(
        <React.Fragment>
            <header className='h-2/10 w-full'><Banner/></header>
            <nav className='h-2/10 w-full mb-20'><Nav/></nav>
            <section className='h-6/10 w-full'>
                <Switch>
                    <Route path='/category/:id'>
                        <Category getAll={getAll}/>
                    </Route>
                    <Route path='/'>
                        <Populer getAll={getAll}/>
                    </Route>
                </Switch>
            </section>
        </React.Fragment>
    )
}