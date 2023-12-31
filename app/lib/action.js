"use server"
import { redirect } from "next/navigation";
import { User,Product, Transaction,Blog } from "./model";
import { connectToDb } from "./utils";
import {revalidatePath} from "next/cache"
import bcrypt from "bcrypt"





export const updateBlog = async (formData) =>{
   
    const { id,title, createremail, creatername, content, category}=Object.fromEntries(formData);
    console.log(id)
    try{
        connectToDb();
        const updateFields = {
            title,
             createremail,
              creatername,
               content,
                category
        };
        Object.keys(updateFields).forEach(key=>(updateFields[key]===''|| undefined)&& delete updateFields[key])
        await Blog.findByIdAndUpdate(id,updateFields);
    }catch(err){
        console.log(err)
    }
    revalidatePath("/dashboard/products");
    redirect("/dashboard/products")
}

export const deleteBlog = async (formData) =>{
   
    const { id}=Object.fromEntries(formData);

    try{
        connectToDb();
        
    }catch(err){
        console.log(err)
    }
    revalidatePath("/dashboard/products");
}

