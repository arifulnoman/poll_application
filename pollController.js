const Poll = require('./Poll');

exports.createPollGetController = (req, res, next) => {
    res.render('create');
}
exports.createPollPostController = async(req, res, next) => {
    let { title, description, options } = req.body;
    options = options.map((opt) => {
        return {
            name : opt,
            vote : 0
        }
    })

    let poll = new Poll({title, description, options});

    try {
        await poll.save();
        res.redirect('/polls');
    } catch (err) {
        console.log('error saving poll');
        console.log(err);
    }

    res.render('create');
}

exports.getAllPolls = async (req, res, next) => {
    try {
        let polls = await Poll.find();
        res.render('polls', {polls});
    } catch (err) {
        console.log(err);
    }
}

exports.viewPollGetController = async (req, res, next) => {
    let id = req.params.id;

    try {
        let poll = await Poll.findById(id);
        let options = [...poll.options];
        result = [];
        options.forEach(element => {
            let percentage = (element.vote * 100) / poll.totalVote;
            result.push({
                ...element._doc,
                percentage: percentage ? percentage : 0
            })
        });
        res.render('viewPoll', {poll, result});
    } catch (err) {
        console.log(err);
    }
};

exports.viewPollPostController = async (req, res, next) => {
    let id = req.params.id;
    console.log(req.body);
    let optionId = req.body.option;
    try {
        let poll = await Poll.findById(id);
        let options = [...poll.options];
        let index = options.findIndex(option => option.id === optionId);
        options[index].vote++;
        let totalVote = poll.totalVote + 1;
        await Poll.findOneAndUpdate(
                { _id: poll._id },
                { $set: {options, totalVote}}
        );
        res.render('viewPoll', {poll});
    } catch (err) {
        console.log(err);
    }
};