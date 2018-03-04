let token = null

const blogs = [
    {
        id: "5a451df7571c224a31b5c8ce",
        title: "Hyvä blogi",
        author: "Joku vaan",
        url: "www.gg.fi",
        user: {
            _id: "5a437a9e514ab7f168ddf138",
            username: "useri",
            name: "Kalle Käyttäjä"
        }
    },
    {
        id: "5a451e21e0b8b04a45638211",
        title: "Hyvä blogi2",
        author: "Joku vaan",
        url: "www.gg.fi/2",
        user: {
            _id: "5a437a9e514ab7f168ddf138",
            username: "useri",
            name: "Kalle Käyttäjä"
        }
    },
    {
        id: "5a451e30b5ffd44a58fa79ab",
        title: "Hyvä blogi3",
        author: "Joku vaan",
        url: "www.gg.fi/3",
        user: {
            _id: "5a437a9e514ab7f168ddf138",
            username: "useri",
            name: "Kalle Käyttäjä"
        }
    }
]


const getAll = () => {
    return Promise.resolve(blogs)
}

export default { getAll, blogs }