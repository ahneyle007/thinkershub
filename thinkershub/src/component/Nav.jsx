
const Nav = ()=> {
    return(
        <>
                <div className=" space-x-2 font-semibold">
                    <p className="flex space-x-2">  
                        <h2 className="text-red-500">Explore</h2>
                        <h2 className="">.</h2>
                        <h2>About Us</h2>
                        <h2>.</h2>
                        <h2>Contact</h2>
                    </p>
                </div>
                
                <div className="flex items-center space-x-3">
                        <button className="bg-gray-200 p-1 px-4 rounded-3xl">Log In</button>
                        <button className="bg-black text-white p-1 px-4 rounded-3xl">Get Started</button>         
                </div>
        </>
    )
}

export default Nav