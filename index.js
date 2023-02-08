const express=require('express');
const cors=require('cors');
const app=express();
const path=require('path')
app.use(cors());
app.listen(9985,()=>{
    console.log("listening to the port 9985")
});
app.use(express.static(path.join(__dirname, './webclient/build')));
app.get("/countryList",(req,res)=>{
    res.json([{id:1,country:"India"},{id:2,country:"China"}]);
})