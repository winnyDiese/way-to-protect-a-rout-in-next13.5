import { redirect } from "next/navigation"
import { sessionStatus } from "../utils/session"

const serverSide = ()=>{
    const session = sessionStatus
    if(!session) redirect("/")
    return <div>This is a server component </div>
}

export default serverSide