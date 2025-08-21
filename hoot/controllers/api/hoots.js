import Hoot from "../../models/hoot";
export {
    text ,
    user
};
async function index(req, res) {
    try{
        const hoots = await Hoot.find({})
    } catch (e){
        res.status(400).json({ msg: e.message });
    }
    
}