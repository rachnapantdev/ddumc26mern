import axios from "axios"

export const getAllUsers = async()=>{
    let resp = await axios.get("http://localhost:9000/");
    return await resp.data
}

export const storeUserInfo = async(data)=>{
    await axios.post("http://localhost:9000/save",data).then(()=>{
        alert('Data has been saved')
    }).catch(err=>{
        console.log(err);
        
    })
}

export const deleteUser = async(id)=>{
    console.log(id);
    
   let user =  await axios.delete("http://localhost:9000/remove/"+id)
    console.log(user);
    
   return user;

}