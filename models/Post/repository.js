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
    findByAuthor: (authorName) => {
        return posts.filter(book => book.author === authorName);
    },
};
