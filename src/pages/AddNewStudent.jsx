


const AddNewStudent = () => {

  return (
    <div className="w-full h-[100vh] bg-white flex justify-center items-start">
      <div className="w-[90%] h-[85vh] overflow-y-auto bg-white p-1 shadow-2xl m-2 rounded ">
        <h1 className="text-center text-4xl text-left">Addmission From</h1>
        <fieldset className="fieldset flex flex-row feildset-vertical">
          <legend className="fieldset-legend text-2xl text-left  label">Name of Student's:</legend>
          <input type="text" className="input  " placeholder="FIRST" />
          <input type="text" className="input  " placeholder="LAST" />
        </fieldset>
        <fieldset className="fieldset flex flex-row">
          <legend className="fieldset-legend text-2xl text-left  label">Class you want to apply for:</legend>
          <input type="text" className="input w-full" />
        </fieldset>
        <fieldset className="fieldset flex flex-row">
          <legend className="fieldset-legend text-2xl text-left  label">Student's DOB:</legend>
          <input type="date" className="input w-full" />
        </fieldset>
        <fieldset className="fieldset flex flex-row feildset-vertical">
          <legend className="fieldset-legend text-2xl text-left  label">Parent / Guardian Name :</legend>
          <input type="text" className="input  " placeholder="FIRST" />
          <input type="text" className="input  " placeholder="LAST" />
        </fieldset>
        <fieldset className="fieldset flex flex-row">
          <legend className="fieldset-legend text-2xl text-left  label">Current Address:</legend>
          <input type="text" className="input w-full" />
        </fieldset>
        <fieldset className="fieldset flex flex-row feildset-vertical">
          <input type="text" className="input  " placeholder="City" />
          <input type="text" className="input  " placeholder="Region" />
        </fieldset>
        <fieldset className="fieldset flex flex-row feildset-vertical">
          <input type="text" className="input  " placeholder="Postal Code" />
          <input type="text" className="input  " placeholder="Countery" />
        </fieldset>
        <fieldset className="fieldset flex flex-row">
          <legend className="fieldset-legend text-2xl text-left  label">Phone Number:</legend>
          <input type="number" className="input w-full" />
        </fieldset>
         <fieldset className="fieldset flex flex-row">
          <legend className="fieldset-legend text-2xl text-left  label">Email:</legend>
          <input type="email" className="input w-full" />
        </fieldset>
        <div className="w-full  h-auto flex justify-center items-center">   
                <button className="btn btn-primary  label ">Submit</button>
        </div>  

      </div>
    </div>
  )
}
export default AddNewStudent