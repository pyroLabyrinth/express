var express = require('express');
var router = express.Router();

//接続情報を設定
const { MongoClient } = require("mongodb");
const uri = "mongodb+srv://cu2101115031:Hikaru0712@cluster0.3rpzwez.mongodb.net/?retryWrites=true&w=majority&appName=Cluster0"
const client = new MongoClient(uri);

router.get('/', async (req, res) => {
//データベースコレクションを設定
const database = client.db('notes');
const notes = database.collection('notes');

//idが１のドキュメント取得
const query = {id:1};
const note = await notes.findOne(query);

res.json(note.title);
})
/**
//レスポンスのデータ（ノート全体）
const responseObjectDataAll = {
    textObject:{
        id:1,
        title:'ノート１のタイトルです',
        subTitle:'ノート１のサブタイトルです',
        bodyText:'ノート２の本文です'

    },
};
*/

/**
 * メモを全件取得するAPI
 * @returns{Object[]} data
 * @returns{number} data.id - ID
 * @returns{string} data.title - タイトル
 * @returns{string} data.text - 内容
 */

/**
router.get('/',function(req,res,next){
    //全件取得して返す
    res.json(responseObjectDataAll);
})
*/


module.exports = router;
