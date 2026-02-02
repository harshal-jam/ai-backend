const categories = require('../model/category');
exports.Create = async (req, res) => {
    try {
        const userId = req.user.id
        const categorys = await categories.create({
            user: userId,
            category: req.body.category
        })
        res.status(201).json({ message: "successfully created", categorys })
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: "category creation failed", error })
    }
}
exports.find = async (req, res) => {
    try {
        const userid = req.params.id
        const categorys = await categories.find({ user: userid })
        res.status(201).json({ message: "its successfully find category", categorys })
    } catch (error) {
        console.log(error);

    }
}
exports.update = async (req, res) => {
    try {
        const categorys = await category.findByIdAndUpdate(req.params.id, req.body, { new: true });
        res.status(201).json({ message: "update successfully category", categorys })
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: error.message })
    }
}
exports.delete = async (req, res) => {
    try {
        const categorys = await category.findByIdAndDelete(req.params.id);
        res.status(201).json({ message: "delete successfully", categorys });
    } catch (error) {
        console.log(error);
        res.status(401).json({ message: error.message })
    }
}