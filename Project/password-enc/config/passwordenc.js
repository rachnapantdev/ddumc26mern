import bcrypt from 'bcrypt';
const SALT_ROUNDS = 11;

export const hashedPassword = async(password)=>{
    try{    
            let hashPass=await bcrypt.hash(password, SALT_ROUNDS);
           return hashPass         

    }catch(err){
        console.log(err);
        
    }
}

export const matchPassword = async(password, dbPassword)=>{
    try{
        let isMatch = await bcrypt.compare(password, dbPassword);
        return isMatch;
    }catch(err){
        console.log(err);
        
    }
}

