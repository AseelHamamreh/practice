const express = require('express');
const app = express();
require('dotenv').config();
const cors = require('cors');
const superagent = require('superagent');
app.use(cors());
app.use(express.json());

const mongoose = require('mongoose');
mongoose.connect(' mongodb://127.0.0.1:27017/makeUp', {useNewUrlParser: true, useUnifiedTopology: true});
const PORT = process.env.PORT || 3666;

const makeUpSchema = new mongoose.Schema({
  name: String,
  slug :{
    type: String,
    unique: true,
    trim:true,
    lowercase:true,
  },
  price:String,
  img:String,
});

const MyDataModel = mongoose.model('makeUp', makeUpSchema);

app.get('/', function (req, res) {
  res.send('Hello World');
});

app.get('/rated', function (req, res) {
  superagent.get(`http://makeup-api.herokuapp.com/api/v1/products.json`).then(data=>{
    const array = data.body.map(data=> new MyData (data));
    res.send(array);
  });
});

app.get('/data', function (req, res) {
  superagent.get(`http://makeup-api.herokuapp.com/api/v1/products.json?product_type=${req.query.product_type}`).then(data=>{
    const array = data.body.map(data=> new MyData (data));
    res.send(array);
  });
});

class MyData {
  constructor(data){
    this.name=data.name;
    this.price=data.price;
    this.img=data.image_link;
    this.rating=data.rating;
  }
}

app.post('/cart', function (req, res) {
  const {name,price,img} = req.body;
  const slug = name.toLowerCase().split('').join('-');
  MyDataModel.find({slug:slug}, (error,data)=>{
    if (data.length>0) { res.send('data exist');}
    else{
      const newData = new MyDataModel ({
        name:name,
        slug:slug,
        img:img,
        price:price,
      });
      newData.save();
      res.send(newData);
    }
  });
});

app.get('/cart', function (req, res) {
  MyDataModel.find({},(error,data)=>{
    res.send(data);
  });
});

app.delete('/cart:slug',function(req,res){
  const slug = req.params.slug;
  MyDataModel.remove({slug:slug},(error,data)=>{
    if(error){
      res.send(error);
    }
    else {
      MyDataModel.find({},(error,data)=>{
        res.send(data);
      });
    }
  });
});



app.listen(PORT, console.log(PORT));
