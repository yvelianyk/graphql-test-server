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
        console.log("GET AUTHOR BY ID");// TODO: remove it
        return authors.find(author => author.id === id);
    },
    getByPost: async (ids) => {
        console.log('CALLING AUTHOR GET BY POST REPOSITORY');// TODO: remove it
        const idsSet = new Set(ids);
        const result = [];
        authors.forEach(author => {
            const {posts} = author;
            posts.forEach(postId => {
               if (idsSet.has(postId)) {
                   result.push(author);
               }
            });
        });

        return result;
    },
    updateAuthorPosts: async (post) => {
        authors.forEach(author => {
            if(author.name === post.author) {
                author.posts.push(post.id);
            }
        })
    }
};
