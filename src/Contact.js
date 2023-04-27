import React,{useState} from 'react';

const Contact = () => {
    const [userData,setUserData]=useState({
        firstName:"",
        lastName:"",
        phone:"",
        email:"",
        address:"",
        message:"",
    });

    let name, value;
    const postUserData=(event)=>{
        name=event.target.name;
        value=event.target.value;
        setUserData({...userData,[name]:value});
    };

    // connect with firebase
    const submitData=async (event)=>{
        event.preventDefault();
        const {firstName,lastName,phone,email,address,message}=userData;
        if(firstName && lastName && phone && email && address && message){
        const res= await fetch('https://reactfirebasewebsite-da438-default-rtdb.firebaseio.com/userDataRecords.json',
        {
            method:'POST',
            headers:{
                "Content-Type":"application/json",
            },
            body:JSON.stringify({
                firstName,lastName,phone,email,address,message,
            })
        }
        );
        if(res){
            setUserData({
                firstName:"",
                lastName:"",
                phone:"",
                email:"",
                address:"",
                message:"",
            })
            alert('Data Stored')
        }else{
            alert('plz fill the data');
        }
    }else{
        alert('plz fill the data');
    }
    }
  return (
    <>
      <section className='contactus-section'>
        <div className='container'>
            <div className='row'>
                <div className='col-12 col-lg-10 mx-auto'>
                    <div className='row'>
                        <div className='contact-leftside col-12 col-lg-5'>
                            <h1 className='main-heading fw-bold'>Connect With Our <br/> Sales Team</h1>
                            <p className='main-hero-para'>
                            The href attribute requires a valid value to be accessible. Provide a valid, navigable address as the href value. If you cannot 
                            provide a valid href
                            </p>
                            <figure>
                                <img src='./images/hero1.jpg' alt='contactUsImg' className='img-fluid'/>
                            </figure>
                        </div>

                        {/* contact right side */}
                        
                        <div className='contact-rightside col-12 col-lg-7'>
                            <form method='POST'>
                                <div className='row'>
                                    <div className='col-12 col-lg-6 contact-input-field'>
                                        <input type='text' placeholder='First Name' name='firstName' value={userData.firstName} onChange={postUserData} className='form-control'/>
                                    </div>
                                    <div className='col-12 col-lg-6 contact-input-field'>
                                        <input type='text' placeholder='Last Name' name='lastName' value={userData.lastName} onChange={postUserData} className='form-control'/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12 col-lg-6 contact-input-field'>
                                        <input type='text' placeholder='Phone Number' name='phone' value={userData.phone} onChange={postUserData} className='form-control'/>
                                    </div>
                                    <div className='col-12 col-lg-6 contact-input-field'>
                                        <input type='email' placeholder='Email ID' name='email' value={userData.email} onChange={postUserData} className='form-control'></input>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <input type='text' placeholder='Add Address' name='address' value={userData.address} onChange={postUserData} className='form-control contact-input-field'/>
                                    </div>
                                </div>
                                <div className='row'>
                                    <div className='col-12'>
                                        <input type='text' placeholder='Enter your message' name='message' value={userData.message} onChange={postUserData} className='form-control '/>
                                    </div>
                                </div>
                                <div class="form-check">
                                <input class="form-check-input" type="checkbox" value="" id="flexCheckDefault"/>
                                <label class="form-check-label" className='main-hero-para'>
                                  I agree that the QuickPay may contact me at the email address or phone number above
                                </label>
                                </div>
                                <button type='submit' className='btn btn-style w-100' onClick={submitData}>Submit</button>
                            </form>
                        </div>
                    </div>
                </div>
            </div>
        </div>
      </section>
    </>
  )
}

export default Contact;
