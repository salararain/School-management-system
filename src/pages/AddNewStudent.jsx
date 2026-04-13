


const AddNewStudent = () => {

  return (
    <div className="w-[100%] h-[100vh] bg-white ">
      <div className="w-[100%] h-auto  p-1 m-1 shadow-2xl m-1 rounded ">
        <h1 className="text-center text-4xl">Addmission From</h1>
        <div className="grid grid-cols-4 m-4  max-[1200px]:grid-cols-3 max-[800px]:grid-cols-2 max-[450px]:grid-cols-1">
          <fieldset className="fieldset  m-1  w-[270px]   max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full">
            <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Student's First Name:</legend>
            <input type="text" className="input w-full " placeholder="Type here" />
          </fieldset>
          <fieldset className="fieldset  m-1 w-[270px] max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full ">
            <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Student's Last Name:</legend>
            <input type="text" className="input w-full " placeholder="Type here" />

          </fieldset>
          <fieldset className="fieldset  m-1 w-[270px]  max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full ">
            <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Student's Date of Birth:</legend>
            <input type="date" className="input w-full " placeholder="Type here" />

          </fieldset>
          <fieldset className="fieldset  m-1 w-[270px]  max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full ">
            <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">class you want to apply for:</legend>
            <input type="text" className="input w-full " placeholder="Type here" />

          </fieldset>
        
           <fieldset className="fieldset  m-1  w-[270px]   max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full">
            <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Parent/ Gurdian Name:</legend>
            <input type="text" className="input w-full " placeholder="Type here" />
          </fieldset>
          <fieldset className="fieldset  m-1 w-[270px] max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full ">
            <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Parent/ Gurdian Contact:</legend>
            <input type="text" className="input w-full " placeholder="Type here" />

          </fieldset>
          <fieldset className="fieldset  m-1 w-[270px]  max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full ">
            <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Student contact number:</legend>
            <input type="text" className="input w-full " placeholder="Type here" />

          </fieldset>
          <fieldset className="fieldset  m-1 w-[270px]  max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full ">
            <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Parent/Student email:</legend>
            <input type="email" className="input w-full  " placeholder="Type here" />

          </fieldset>
        
                    <fieldset className="fieldset  m-1  w-[270px]   max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full">
            <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Current Address:</legend>
            <input type="text" className="input w-full " placeholder="Type here" />
          </fieldset>
          <fieldset className="fieldset  m-1 w-[270px] max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full ">
            <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Postal Code :</legend>
            <input type="text" className="input w-full " placeholder="Type here" />

          </fieldset>
          <fieldset className="fieldset  m-1 w-[270px]  max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full ">
            <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Region:</legend>
            <input type="text" className="input w-full  " placeholder="Type here" />

          </fieldset>
          <fieldset className="fieldset  m-1 w-[270px]  max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full ">
            <legend className="fieldset-legend text-left text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Country:</legend>
            <input type="email" className="input w-full  " placeholder="Type here" />

          </fieldset>
      </div>
        <div className="btnn-container flex justify-center items-end  m-4 ">
          <button className="btn btn-primary  w-[270px]  max-[850px]:w-52 max-[650px]:w-48 max-[450px]:w-full p-1  text-xl max-[850px]:text-base max-[650px]:text-sm max-[450px]:text-xl">Submit</button>
        </div>
        

      </div>
    </div>
  )
}
export default AddNewStudent