import Summary from "../model/Summary.js";
import { fetchSummary } from "../util/generateSummary.js";
import { v4 as uuidv4 } from 'uuid';


export async function savePosts(req, res) {
   
    const newSummary=new Summary({
        text:req.body.text,
        summary:req.body.summary,
        publicId: uuidv4().slice(0, 8),
    });
    await newSummary.save();
    res.send(newSummary).status(201);
} 

export async function getAllPosts(req, res){
    const summaries=await Summary.find();
    res.json(summaries);
}

export async function deleteAllPost(req,res){
    await Summary.deleteMany({})
    res.json({message:'All summaries are deleted'})
}

export async function getPostById(req, res){
    const id=   req.params.id
    const summary= await Summary.findOne({publicId:id})
    if (summary) {
        res.json(summary)
    } else {
        res.status(404).json({ message: "this id not found" })
    }
}

export async function deletePostById(req, res){
    const id=   req.params.id
    try{
        await Summary.findOneAndDelete({publicId:id})
    }catch(err){
        res.status(404).json({ message: "Summary not found"})
    }

}

export async function updatePostById(req, res)  {
    const id = req.params.id;
    const updatedSummary = req.body;
 try{
    const newSummary= await Summary.findOneAndUpdate(
        {publicId:id},
        updatedSummary);
    res.json(newSummary);
 }catch(err){
    console.error(err);
    res.status(404).json({ message: "Summary not found"})
 }
}

export async function generateSummary(req,res){
    try {
        const generatedReply=await fetchSummary(req.body.text);
        res.json({message: generatedReply});
    } catch (error) {
        throw new Error(error.message);
    }
}
