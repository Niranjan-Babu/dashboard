import { Product, Transaction, User,Blog } from "./model"
import { connectToDb } from "./utils";

export const fetchUser = async (q,page)=>{
    const regex = new RegExp(q,"i");

    const ITEM_PER_PAGE = 2
    try{
        connectToDb();
        const count = await Blog.find({creatername:{$regex:regex}}).count();
        const users = await Blog.find({creatername:{$regex:regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE*(page-1));
        return{count, users}
    }
    catch (err){
        console.log(err)
    }
}

export const fetchBlog = async (q,page)=>{
    const regex = new RegExp(q,"i");
    const ITEM_PER_PAGE = 8;
    
    try{
        connectToDb();
        const count = await Blog.find({title:{$regex:regex}}).count();
        const blogs = await Blog.find({title:{$regex:regex}}).limit(ITEM_PER_PAGE).skip(ITEM_PER_PAGE*(page-1));
        
        return {count,blogs};
        
    }
    catch (err){
        console.log(err)
    }
}
export const fetchSingleBlog = async (id)=>{
    try{
        connectToDb();
        const blog = await Blog.findById(id);
        return blog
    }
    catch (err){
        console.log(err)
    }
}
