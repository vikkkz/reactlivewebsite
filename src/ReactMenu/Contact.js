import React from 'react';

function Contact() {
  
  return (
    <>
    <div className='my-5'>
    <h1 className='text-center'>Contact us</h1>
    </div>
    <div className='container contact_div'>
    <div className='row'>
    <div className='col-md-6 col-10 mx-auto'>
    <form>
    
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
  Email address
  </label>
  <input 
  type="email" 
  class="form-control" 
  id="exampleFormControlInput1" 
  placeholder="name@example.com" 
  />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
  Full name
  </label>
  <input 
  type="text" 
  class="form-control" 
  id="exampleFormControlInput1" 
  placeholder="enter your name" 
  />
</div>
<div class="mb-3">
  <label for="exampleFormControlInput1" class="form-label">
  Phone number
  </label>
  <input 
  type="number" 
  class="form-control" 
  id="exampleFormControlInput1" 
  placeholder="mobile number" 
  />
</div>
<div class="mb-3">
  <label for="exampleFormControlTextarea1" class="form-label">
  Message
  </label>
  <textarea 
  class="form-control" 
  id="exampleFormControlTextarea1" 
  rows="3"></textarea>
  
  <div class="col-12">
    <button class="btn btn-primary" type="submit">Submit form</button>
  </div>
</div>
    </form>
    </div>
    </div>
    
    </div>
    // <div className="container-fluid nav_bg">
    //   <div className="row">
    //   <div className="col-10 mx-auto">
        
    
    // </div>
    // </div>
    // </div>
    
    
    </>
  );
}

export default Contact;