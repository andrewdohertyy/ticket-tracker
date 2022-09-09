import React from 'react'


const AddUser = (props) => {

    const {handleSubmit, setUserName, setUserRole} = props


  return (
    <div className="newUser">
        <fieldset className="newUser__field">
            <legend>Add New User</legend>
                <form className="newUser__form" onSubmit={handleSubmit} action="./Data/team">
                Name:  
                <input placeholder='First and Last Name' className="newUser__user" type="text"  
                onChange={setUserName} />
                <br/>
                Role:  
                <input placeholder='Job Title' className="newUser__role" type="text"  
                onChange={setUserRole} />
                <br />
                <button className="newUser__button">Add User</button>
                </form>
        </fieldset>
    </div>
    )
  }
export default AddUser