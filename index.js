import bodyParser from "body-parser";
import express from "express";

const app = express();
const port = 3000;

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));

const postList = [{
    title: "This is the title 1",
    body: "Exploring the vast landscape of technology, we find ourselves immersed in a world of constant innovation. From the latest advancements in artificial intelligence to the intricacies of web development, the journey is both exciting and challenging. In this blog post, we delve into the realm of emerging technologies, shedding light on their impact on our daily lives. Join us on this exploration as we navigate through the ever-evolving digital landscape, uncovering the stories that shape the future of technology"
}, 
{
    title: "This is the  2",
    body: "Exploring the vast landscape of technology, we find ourselves immersed in a world of constant innovation. From the latest advancements in artificial intelligence to the intricacies of web development, the journey is both exciting and challenging. In this blog post, we delve into the realm of emerging technologies, shedding light on their impact on our daily lives. Join us on this exploration as we navigate through the ever-evolving digital landscape, uncovering the stories that shape the future of technology"
},
{
    title: "This is the title 3",
    body: "Exploring the vast landscape of technology, we find ourselves immersed in a world of constant innovation. From the latest advancements in artificial intelligence to the intricacies of web development, the journey is both exciting and challenging. In this blog post, we delve into the realm of emerging technologies, shedding light on their impact on our daily lives. Join us on this exploration as we navigate through the ever-evolving digital landscape, uncovering the stories that shape the future of technology"
}
]


app.get('/', (req, res) => {
    res.render("index.ejs", {posts : postList});
});

app.get('/new-post', (req, res) => {
    res.render("create.ejs");
});

app.post('/create', (req, res) => {
    postList.push(req.body);
    res.redirect('/');
});

app.listen(port, ()=>{
    console.log(`Server listening on port ${port}`);
});