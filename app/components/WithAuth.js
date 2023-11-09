import { useEffect } from "react"
import { sessionStatus } from "../utils/session"
import { redirect } from "next/navigation"


// export default function withAuth(Component: any){
//     return function WithAuth(props: any){
//         const session = sessionStatus
//         useEffect(()=>{
//             if(!session) redirect("/")
//         },[])
        
//         if(!session) return null

//         return <Component {...props} />
//     }
// }

const WithAuth = ({children})=>{
    const session = sessionStatus
    useEffect(()=>{
        if(!session) redirect("/")
    },[])
    
    if(!session) return null

    return (
        <div>{children}</div>
    )
}

export default WithAuth