const mongoose = require("mongoose");
const Time = mongoose.model("time");
const axios = require('axios');
module.exports = app =>{
app.get('/api/imagesearch/:item&offset=:id',(req,res)=>{
  axios.get(`https://pixabay.com/api/?key=8000331-67825c6438f03e4fe37dc5e9d&q=${req.params.item}&image_type=photo&pretty=true&per_page=${req.params.id}`)
  .then((result,err)=>{
      res.json(result.data);
      const time = new Time({
        term : req.params.item,
        when: new Date()
      });
      time.save();
  });
});

app.get('/api/latest/imagesearch',(req,res)=>{
  const ans = Time.find({}).sort({when:1}).limit(10).then((response,err)=>{
    res.send(response);
  });
});
}
