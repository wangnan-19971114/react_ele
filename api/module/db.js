const mongodb = require("mongodb");
const mongoClient = mongodb.MongoClient;// 属性，类型是一个对象。
// 以下划线开头一般代表的是你的模块私有属性。不对外暴露
function _connect() {
    return new Promise(function (resolve,reject) {
        mongoClient.connect("mongodb://127.0.0.1:27017",{ useNewUrlParser: true },function (err,client) {
            // 保证你的数据库是挂起状态
            if(err){
                reject("连接数据库失败");
            }else{
                // 你要操作的数据库
                const db = client.db("shop");
                resolve(db);
            }
        })
    })
}
/*
* 插入一条记录
* coll:集合
* insertObj:插入的内容
* 返回的是一个promise*/
module.exports.insertOne = async (coll,insertObj) => {
    const db = await _connect();
    return new Promise(function (resolve,reject) {
        db.collection(coll).insertOne(insertObj,function (err,results) {
            if(err) reject(err);
            else resolve(results);
        })
    })
}
/*
* 根据条件查找相关信息（多条）*/
module.exports.find = async function (coll,{whereObj={},sort={},skip=0,limit=0}) {
    const db = await _connect();
    return new Promise(function (resolve,reject) {
        db.collection(coll).find(whereObj).sort(sort).skip(skip).limit(limit).toArray(function (err,results) {
            if(err) reject(err);
            else resolve(results);
        })
    })
}
// 根据条件获得总条数
module.exports.count = async function (coll,whereObj = {}) {
    const db = await _connect();
    return new Promise(function (resolve,reject) {
        db.collection(coll).countDocuments(whereObj).then(function (count) {
            resolve(count);
        })
    })
}
// 根据ID进行删除一条
module.exports.deleteOneById = async function (coll,id) {
    const db = await _connect();
    return new Promise((resolve,reject)=>{
        db.collection(coll).deleteOne({
        _id:mongodb.ObjectId(id)
    },(err,results)=>{
        if(err) reject(err);
else resolve(results)
})
})
}
// 根据ID查找一条信息
module.exports.findOneById = async function (coll,id) {
    const db = await _connect();
    return new Promise((resolve,reject)=>{
        db.collection(coll).findOne({
        _id:mongodb.ObjectId(id)
    },(err,results)=>{
        if(err) reject(err);
else resolve(results)
})
})
}
// 根据ID进行修改
module.exports.updateOneById = async function (coll,id,upObj) {
    const db = await _connect();
    return new Promise((resolve,reject)=>{
        db.collection(coll).updateOne({
        _id:mongodb.ObjectId(id)
    },upObj,(err,results)=>{
        if(err) reject(err);
else resolve(results)
})
})
}

// module.exports.insertOne = async function(coll,insertObj) {
//     const db = await _connect();
//     return new Promise(function (resolve,reject) {
//         db.collection(coll).insertOne(insertObj,function (err,results) {
//             if(err) reject(err);
//             else resolve(results);
//         })
//     })
// }







// async function insertOne(coll,insertObj) {
//     const db = await _connect();
//     return new Promise(function (resolve,reject) {
//         db.collection(coll).insertOne(insertObj,function (err,results) {
//             if(err) reject(err);
//             else resolve(results);
//         })
//     })
// }
// module.exports.insertOne = insertOne;




// insertOne("score",{age:12,userName:"good good study day day up"})
// .then(data=>{
//     console.log(data);
// })