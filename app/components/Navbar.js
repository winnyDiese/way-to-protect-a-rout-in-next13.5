
import Link from "next/link"

const Navbar = ()=>{
    return <div>
            <ul className="flex m-10 gap-10">
                <Link href="/">
                    <li>Home</li>
                </Link>
                <Link href="/clientside">
                    <li>Client side</li>
                </Link>
                <Link href="/clientsidehoc">
                    <li>Client side with Hoc</li>
                </Link>
                <Link href="/serverside">
                    <li>Server side</li>
                </Link>
                <Link href="/middlewareside">
                    <li>Middleware</li>
                </Link>
            </ul>
    </div>
    
}

export default Navbar