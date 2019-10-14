const posts = [
    {
        id: 1,
        title: 'Harry Potter and the Chamber of Secrets',
        text: 'some text 1',
        author: 'James Smith',
    },
    {
        id: 2,
        title: 'Jurassic Park',
        text: 'some text 2',
        author: 'John Doe',
    },
    {
        id: 3,
        title: 'Bags with sheet',
        text: 'some text 3',
        author: 'Dick Nixon',
    },
    {
        id: 4,
        title: 'Dogs and cats',
        text: 'some text 4',
        author: 'Dick Nixon',
    },
];

module.exports =  {
    getAll: ()=> {
        return posts;
    },
    findByAuthor: async (authorNames) => {
        console.log('CALLING FIND POSTS BY AUTHOR REPOSITORY');// TODO: remove it
        const result = [];
        authorNames.forEach(authorName => {
            const authorPosts = [];
            posts.forEach(post => {
                const {author} = post;
                if (author === authorName) {
                    authorPosts.push(post);
                }
            });
            result.push(authorPosts);
        });

        return result;
    },
};
