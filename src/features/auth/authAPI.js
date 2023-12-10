// A mock function to mimic making an async request for data
export function createUser(userData) {
  return new Promise(async(resolve) =>{
    const response = await fetch("http://localhost:8080/users",{
      method:'POST',
      body: JSON.stringify(userData),
      headers:{'content-type':'application/json'}
    });
    const data = await response.json();
    //TODO: on server it will return only relevent info of user not password
    resolve({data})
  }
  );
}

 
export function cheakUser(loginInfo) {
  return new Promise(async(resolve, reject) =>{
    const email = loginInfo.email
    const password = loginInfo.password
    const response = await fetch('http://localhost:8080/users?email='+email);
    const data = await response.json();
    console.log({data})
    if(data.length){
        if(password===data[0].password){
          console.log("resolve")
          resolve({data})
        } else{
          console.log("reject")
          reject({message :"wrong credentials"})
        }
        
    } else{
        console.log("notfound")
        reject({message :"user not found"})
    }
    //TODO: on server it will return only relevent info of user not password
    resolve({data})
  }
  );
}