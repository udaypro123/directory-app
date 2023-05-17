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
    if (names === "" || dob === "" || (mobileno !== "" && mobileno.length === 10) || (adharno !== "" && adharno.length === 12) || age === "") {
      alert("please fill complete details")
    } else {
      dispatch(addpersondata({
        ...addperdata,
        names: names,
        dob: dob,
        adharno: mobileno,
        mobileno: adharno,
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



        <div className="row mt-4">
          <div className="col">
            <table className="table table-bordered border-dark">
              <thead className='thead'>
                <tr>
                  <th>Name</th>
                  <th>Date Of Birth</th>
                  <th>Adhar Number</th>
                  <th>Mobile Number</th>
                  <th>Age</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody className='tbody'>
                {
                  addperdata && addperdata.map((ele, id) => {
                    return (
                      <Fragment key={ id }>
                        <tr>
                          <td className='names'>{ ele.names }</td>
                          <td>{ ele.dob }</td>

                          <td>{ ele.adharno }</td>
                          <td>{ ele.mobileno }</td>

                          <td>{ ele.age }</td>

                          <td> <button className='btn2'>save</button> <button className='btn2' onClick={ () => deletehandle(id) }> delete </button></td>
                        </tr>
                      </Fragment>
                    )
                  })
                }
              </tbody>
              <tbody>
                <tr>
                  <td><input type="text" value={ names } onChange={ (e) => setNames(e.target.value) } /></td>

                  <td><input type="text" value={ dob } onChange={ (e) => setDob(e.target.value) } /></td>


                  <td><input type="number" value={ adharno } onChange={ (e) => {
                    setAdharno(e.target.value)
                  } } /></td>

                  <td><input type="number" value={ mobileno } onChange={ (e) => {
                    setMobileno(e.target.value)
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
