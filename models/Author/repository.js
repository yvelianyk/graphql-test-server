const authors = [
    {
        id: 1,
        name: "James Smith",
        posts: [1]
    },
    {
        id: 2,
        name: "John Doe",
        posts: [2]
    },
    {
        id: 3,
        name: "Dick Nixon",
        posts: [3, 4]
    },
    {
        id: 4,
        name: "David Spielberg",
        posts: []
    },
];

module.exports =  {
    getAll: ()=> {
        return authors;
    },
    findById: (id) => {
        return authors.find(author => author.id === id);
    },
    getByPost: (id) => {
        return authors.find(author => {
           const {posts} = author;
           return posts.includes(id);
        });
    }
};
