const { Todo } = require("../../model/Todo");

const createTodoController = (req, res) => {
    if (!req?.body?.title) return res.status(400).json({ message: 'titlet koo namoosan nooobe sag!' })
    const todo = new Todo({ title: req.body?.title, desc: req.body?.desc });
    todo.save().then(() => {
        res.status(201).json({
            message: 'aaa barikalla!'
        });
    });
}

module.exports = { createTodoController }


