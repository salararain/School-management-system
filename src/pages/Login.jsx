

const Login = () => {
    return (
        <div className="w-full h-[100vh] bg-white flex justify-center items-center">
            <div className="w-96 h-80 bg-white rounded text-center p-1 m-2 shadow-xl">
                <h1 className="text-2xl">Sign In</h1>
                <fieldset className="fieldset flex justify-center items-center ">
                    <legend className="fieldset-legend text-left text-xl ">Email</legend>
                    <input type="Email" className="input w-full " placeholder="Type here" />
                    {/* <p className="label">Optional</p> */}
                </fieldset>
                <fieldset className="fieldset flex justify-center items-center ">
                    <legend className="fieldset-legend text-left text-xl ">Password</legend>
                    <input  type="Password" className="input w-full" placeholder="Type here" />
                    {/* <p className="label">Optional</p> */}
                </fieldset>
                <button className="btn btn-primary w-full">Sign in</button>
                <p className="text-sm text-gray-500 mt-2">
                    Don't have an account? <a href="./components/layout.jsx" className="text-blue-500 hover:underline">Sign up</a>
                </p>
            </div>
        </div>
    )
}
export default Login