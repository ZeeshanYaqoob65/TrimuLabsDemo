 export const checkFields =(jobTitle,email,desp, jobLocation,applyUrl)=>{
  
    if ( jobTitle == "" || email == "" || desp == ""  || jobLocation == "" || applyUrl == "" ){
      return false;
    }else{
      return true;
    }
  }