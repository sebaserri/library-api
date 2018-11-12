const Publication = require('../model/publication.js');
const Author = require('../model/author.js');

module.exports = {

    create: (title, body, date, authorId) => {
        const publication = new Publication({
            title,
            body,
            date
        });
        publication.authors = authorId;
        publication.save();
    },

    all: () => {
        return Publication.find({})
         .populate('authors'); 
    },

    findById: (id) => {
        return Publication.findById(id)
            .populate('authors');
    },

    findByTitle: (title) => {
        return Publication.find({
                title: title
            })
            .populate('authors');
    },

    findByAuthorId: (id) => {
        return Publication.find({
                authors: id
            })
            .populate({
                path: 'authors',
                select: 'name _publication'
            });
    },

    update: (id, title, body, date, authorId) => {
        return Publication.updateOne({ _id: id }, 
            {
                $set: {
                    title: title,
                    body: body,
                    date: date,
                    authors: authorId
                }
            })
    },

    delete: (id) => {
        return Publication.findByIdAndDelete({
            _id: id
        });
    }
}