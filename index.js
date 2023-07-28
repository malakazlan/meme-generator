const Memebtn=document.querySelector(".meme-generator  .meme-btn");
const memeImage=document.querySelector(".meme-generator  img");
const memeTitle = document.querySelector(".meme-generator  .meme-title");
const memeAuthor= document.querySelector(".meme-generator .meme author");
 const updateDetail=(url,title,author)=>{
    memeImage.setAttribute("src",url);
    memeTitle.innerHTML=title;
    memeAuthor.innerHTML=author;
 };
const GenerateMeme=()=>{
    fetch("https://meme-api.com/gimme/wholesomememes").then((response)=> response.json()).then(data=>{
        updateDetail(data.url, data.title, data.author);
    });

}
Memebtn.addEventListener("click", GenerateMeme);
GenerateMeme();