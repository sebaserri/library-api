const Author = require('../model/author.js');

module.exports = {
    create: (name, email, birth) => {
        const author = new Author({
            name,
            email,
            birth
        });
        author.save();
        console.log("Author is created");
        /* author.save(function (err) {
            if (err) { return err; }

            let publication = new Publication({
                title: title,
                body: body,
                date: date,
                _author: author._id
            });

            publication.save(function (err) {
                if (err) { return err; }

                console.log("Publication is added")
            });
            console.log("Author is added");
        }); */
    },

    all: () => {
        return Author.find();
    },

    findById: (id) => {
        return Author.findById(id);
    },

    findBy: (name) => {
        return Author.find({name: name});
    },

    findById: (id) => {
        return Author.find({_id: id});
    },

    update: (id, name, email, birth) => {
        return Author.updateOne({ _id: id }, 
            {
                $set: {
                    name: name,
                    email: email,
                    birth: birth
                }
            }
        );
    },

    delete: (id) => {
        return Author.findByIdAndDelete({
            _id: id
        });
    }

}