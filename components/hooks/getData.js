/* import {useState, useEffect} from 'react'

import { BACKEND_BASE_URL } from '../../variables'

function getData(){
    const [data, setData]=useState([])
    async function getting(){
        const res = await fetch(`${BACKEND_BASE_URL}`)
        const myData = await res.json()
        setData(myData)
    }
    useEffect(()=>{
        getting()
    },[])
    return [data, setData]
}
export default getData */