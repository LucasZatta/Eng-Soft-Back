const mongoose = require('mongoose');
mongoose.set('useNewUrlParser', true);
mongoose.set('useFindAndModify', false);
mongoose.set('useCreateIndex', true);
mongoose.set('useUnifiedTopology', true);


module.exports = mongoose.connect('mongodb://localhost:27017/test', { useNewUrlParser : true,  useUnifiedTopology: true});
