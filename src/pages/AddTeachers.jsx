const AddTeachers = () => {
    return (
        <div className="w-[100%] h-[full] shadow-2xl m-1 rounded">
            <h1 className="text-center text-4xl">Add Teachers</h1>
            <div className="grid grid-cols-4 m-4 max-[1200px]:grid-cols-3 max-[800px]:grid-cols-2 max-[450px]:grid-cols-1">
                <fieldset className="fieldset m-1 w-[270px] max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full">
                  <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Enter Your First Name:</legend>
                    <input type="text" className="input w-full " placeholder="Type here" />
                </fieldset>

                <fieldset className="fieldset m-1 w-[270px] max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full">
                    <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Enter Your Date of Birth:</legend>
                    <input type="date" className="input w-full " placeholder="Type here" />
                </fieldset>

                <fieldset className="fieldset m-1 w-[270px] max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full">
                    <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Enter Your Qualification:</legend>
                    <input type="text" className="input w-full " placeholder="Type here" />
                </fieldset>

                <fieldset className="fieldset m-1 w-[270px] max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full">
                    <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Any Teaching Exprience:</legend>
                    <input type="text" className="input w-full " placeholder="Type here" />
                </fieldset>

                <fieldset className="fieldset m-1 w-[270px] max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full">
                    <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Enter Your  Address:</legend>
                    <input type="text" className="input w-full " placeholder="Type here" />
                </fieldset>

                <fieldset className="fieldset m-1 w-[270px] max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full">
                    <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Enter Your Contact Number:</legend>
                    <input type="text" className="input w-full " placeholder="Type here" />
                </fieldset>

                <fieldset className="fieldset m-1 w-[270px] max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full">
                    <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Enter Your Email:</legend>
                    <input type="email" className="input w-full  " placeholder="Type here" />
                </fieldset>

            </div>

            <div className="btnn-container flex justify-start items-start m-4 ">
                <button className="btn btn-neutral p-3  text-xl m-4">Submit</button>
            </div>

        </div>
    )
}
export default AddTeachers;

