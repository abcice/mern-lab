import Hoot from "../../models/hoot";
export {
    text ,
    user
};
async function index(req, res) {
    try{
        const hoots = await Hoot.find({}).sort('-createdAt').populate('user', 'name');
        res.status(200).json(hoots);
    } catch (e){
        res.status(400).json({ msg: e.message });
    }
    
}
async function create(req, res) {
    try{
            req.body.user = req.user._id;
            const hoot = await Hoot.create(req.body);
            const populatedHoot = await hoot.populate('user', 'name');
            res.status(201).json(populatedHoot);

    } catch (e) {
            res.status(400).json({ msg: e.message });

    }

}