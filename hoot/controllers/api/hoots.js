import Hoot from "../../models/hoot.js";

export async function index(req, res) {
    try {
        const hoots = await Hoot.find({})
            .sort('-createdAt') // newest first
            .populate('user', 'name'); // include the name of the user
        res.status(200).json(hoots);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}

export async function create(req, res) {
    try {
        // attach logged-in user id
        req.body.user = req.user._id;

        const hoot = await Hoot.create(req.body);
        const populatedHoot = await hoot.populate('user', 'name');

        res.status(201).json(populatedHoot);
    } catch (e) {
        res.status(400).json({ msg: e.message });
    }
}
