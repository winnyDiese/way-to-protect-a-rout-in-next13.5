"use client"

import WithAuth from "../components/WithAuth"
import {useLayoutEffect} from "react"

const ClientSideHoc = ()=>{

    return (
        <WithAuth>Page Client Side Hoc </WithAuth>
    )
}

export default ClientSideHoc