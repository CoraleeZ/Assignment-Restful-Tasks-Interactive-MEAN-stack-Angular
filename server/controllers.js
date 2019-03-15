var Inner = require('./models').Inner
var Outer = require('./models').Outer

module.exports = {


    getAllOuterTasks: (req, res) => {
        Outer.find().then(data => res.json(data)).catch(err => res.json(err))
    },

    getAllInnerTasks: (req, res) => {
        Inner.find().then(data => res.json(data)).catch(err => res.json(err))
    },

    getOneInnerTask: (req, res) => {
        const ID = req.params.id;
        Inner.find({ _id: ID }).then(data => {
            console.log('successfully get one!');
            res.json(data)
        }).catch(err => res.json(err))
    },

    getOneOuterTask: (req, res) => {
        const ID = req.params.id;
        Outer.find({ _id: ID }).then(data => {
            console.log('successfully get one!');
            res.json(data)
        }).catch(err => res.json(err))
    },

    createInnerTask(req, res) {
        const ID = req.params.id;
        const DATA = req.body;
        Inner.create(DATA)
            .then(data => {
                Outer.findOneAndUpdate({ _id: ID }, { $push: { category: data } })
                    .then(data => res.json(data))
                    .catch(err => res.json(err))
            })
            .catch(err => res.json(err))
    },

    createOuterTask: (req, res) => {
        const DATA = req.body;
        Outer.create(DATA).then(data => res.json(data)).catch(err => res.json(err))
    },

    updateInnerTask: (req, res) => {
        const DATA = req.body;
        const ID = req.params.id;
        Inner.findOneAndUpdate({ _id: ID }, DATA, { runValidators: true, new: true }).then(data => res.json(data)).catch(err => res.json(err))
    },
    updateOuterTask: (req, res) => {
        const DATA = req.body;
        const ID = req.params.id;
        Outer.findOneAndUpdate({ _id: ID }, DATA, { runValidators: true, new: true }).then(data => res.json(data)).catch(err => res.json(err))
    },

    deleteInnerTask: (req, res) => {
        const ID = req.params.id;
        Inner.findOneAndDelete({ _id: ID }).then(data => res.json(data)).catch(err => releaseEvents.json(err))
    },

    deleteOuterTask: (req, res) => {
        const ID = req.params.id;
        Outer.findOneAndDelete({ _id: ID }).then(data => res.json(data)).catch(err => releaseEvents.json(err))
    }
}