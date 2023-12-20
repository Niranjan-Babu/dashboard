import { Product, User } from "./model"
import { connectToDb } from "./utils";

export const fetchUser = async (q)=>{
    const regex = new RegExp(q,"i");
    try{
        connectToDb();
        const users = await User.find({username:{$regex:regex}});
        return users
    }
    catch (err){
        console.log(err)
        throw new Error("Failed to fetch users!")
    }
}
export const fetchProduct = async (q)=>{
    const regex = new RegExp(q,"i");
    try{
        connectToDb();
        const product = await Product.find({title:{$regex:regex}});
        return product
    }
    catch (err){
        console.log(err)
        throw new Error("Failed to fetch users!")
    }
}

export const fetchSingleUser = async (id)=>{
    try{
        connectToDb();
        const user = await User.findById(id);
        return user
    }
    catch (err){
        console.log(err)
    }
}

export const fetchSingleProduct = async (id)=>{
    try{
        connectToDb();
        const product = await Product.findById(id);
        return product
    }
    catch (err){
        console.log(err)
    }
}