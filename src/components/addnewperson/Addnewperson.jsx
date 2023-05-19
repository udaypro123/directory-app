import { useDispatch, useSelector } from 'react-redux'
import { Fragment } from 'react'
import './addnewperson.css'
import { addpersondata, deletepesron } from '../reddux/addPersonSlice'
import { useState } from 'react'


const Addnewperson = () => {

  const [names, setNames] = useState("")
  const [dob, setDob] = useState("")
  const [mobileno, setMobileno] = useState("")
  const [adharno, setAdharno] = useState("")
  const [age, setAge] = useState("")

  const dispatch = useDispatch()
  const { addperdata } = useSelector((state) => state.addperson)
  console.log(addperdata)


  const handledata = () => {
    // if (names === "" || dob === "" || mobileno.length === 10 || adharno.length === 12 || age === "") {
    //   alert("please fill complete details")
    // }
    if (names==="" || names.length<3 ||names.length>40 || (/^[a-zA-Z]+ [a-zA-Z]+$/).test(names)===false){
      alert("Enter your Full Name must have space between FirstName and LastName")
    } else if (dob === "" || /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/.test(dob)===false) {
      alert("plase enter your date of birth dd/mm/yyyy or dd-mm-yyyy ")
    } else if (mobileno==="" ||  /^(0|[+91]{3})?[6-9][0-9]{9}$/.test(mobileno)===false) {
      alert("plase enter your 10 digit  mobile number ")
    } else if (adharno==="" ||  /^[2-9]{1}[0-9]{3}[0-9]{4}[0-9]{4}$/.test(adharno)===false) {
      alert("plase enter your 12 digits adhar no. first number satrt with greater than 1 ")
    } else if (age === "" || age < 5) {
      alert("plase enter your Age < 5 ")
    } else {
      dispatch(addpersondata({
        ...addperdata,
        names: names,
        dob: dob,
        adharno: adharno,
        mobileno: mobileno,
        age: age,
        id: Date.now()
      }))
      setNames(" ")
      setDob(" ")
      setAdharno(" ")
      setMobileno(" ")
      setAge(" ")
    }

  }

  const deletehandle = (id) => {
    dispatch(deletepesron(id))
  }



  return (
    <>
      <div className="container mainpart">
        <div className="row">
          <div className="col-md-3 col-sm-6 col-9 row1">Add New Person</div>
        </div>



        <div className="container">
          <div className="row mt-4">
            <div className="col">
              <table className="table table-bordered border-dark">
                <thead className='thead'>
                  <tr>
                    <th>Name</th>
                    <th>Date Of Birth</th>
                    <th>Mobile Number</th>
                    <th>Adhar Number</th>
                    <th>Age</th>
                    <th>Actions</th>
                  </tr>
                </thead>

                <tbody>
                  
                    {
                      addperdata && addperdata.map((ele, id) => {
                        return (
                          <Fragment key={ id }>
                            <tr className='trmain'>
                              <td className='names'>{ ele.names }</td>
                              <td>{ ele.dob }</td>

                              <td>{ ele.mobileno }</td>
                              <td>{ ele.adharno }</td>

                              <td>{ ele.age }</td>

                              <td> <button className='btn2'>save</button> <button className='btn2' onClick={ () => deletehandle(id) }> delete </button></td>
                            </tr>
                          </Fragment>
                        )
                      })
                    }
                  


                  <tr className='inputetext'>
                    <td><input type="text" value={ names } onChange={ (e) => setNames(e.target.value) } /></td>

                    <td><input type="text" value={ dob } onChange={ (e) => setDob(e.target.value) } /></td>



                    <td><input type="text" value={ mobileno } onChange={ (e) => {
                      setMobileno(e.target.value)
                    } } /></td>

                    <td><input type="text" value={ adharno } onChange={ (e) => {
                      setAdharno(e.target.value)
                    } } /></td>



                    <td className='age'><input type="number" value={ age } onChange={ (e) => {
                      setAge(e.target.value)
                    } } /></td>

                    <td><button className='btn2'>save</button><button className='btn2'>delete</button> </td>
                  </tr>

                </tbody>
              </table>
            </div>
          </div>
        </div>


        <div className="row">
          <div className="col btndiv">
            <button type="button" className="btn btn-primary" onClick={ handledata }>Add</button>
          </div>
        </div>
      </div>
    </>
  )
}

export default Addnewperson;

