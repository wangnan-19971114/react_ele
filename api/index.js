const express =require("express");
// const path = require("path");
// const db=require("./module/db")
// const tools=require("./module/tools");
const bodyParser = require("body-parser");
const app=express();
app.use(bodyParser.json())
app.all("*", function (req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");// 设置你的数据源
    res.header("Access-Control-Allow-Headers", "content-type");// 限制请求头
    res.header("Access-Control-Allow-Methods", "PUT,DELETE");// 是否允许PUT,delete
    next();
})
app.get("/reactEle",function(req,res){
    console.log("111111")
    res.json({
        ok:1,
        data:{
            a:1,
            b:2
        }
    })
})
app.get("/shopList",async function(req,res){
    const shopList = await db.find("shopList",{
        sort:{createTime:-1}
    });
    res.json({
        ok:1,
        shopList
    })
});
app.get("/goodsInfo/:id",async function(req,res){
    const data=await db.findOneById("shopList",req.params.id);
    res.json({
        ok:1,
        data
    })
})
app.listen(80,function(){
    console.log("开启成功")
})