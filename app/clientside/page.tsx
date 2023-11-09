"use client"
import {useEffect, useLayoutEffect} from "react"
import { sessionStatus } from "../utils/session"
import { redirect } from "next/navigation"
import WithAuth from "../components/WithAuth"
// import 


const ClientSide = ()=>{

    // useEffect(()=>{
    //     const session = sessionStatus
    //     if(!session) redirect("/")
    // })


    // useLayoutEffect(()=>{
    //     const session = sessionStatus
    //     if(!session) redirect("/")
    // },[])

    return <WithAuth>This page is protected route on client side</WithAuth>
}

export default ClientSide