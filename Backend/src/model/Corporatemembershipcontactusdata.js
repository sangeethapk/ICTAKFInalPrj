const mongoose = require('mongoose');
mongoose.connect('mongodb://localhost:27017/ictak');
//mongoose.connect('mongodb+srv://userone:userone@ictakfiles.1k3dv.mongodb.net/myFirstDatabase?retryWrites=true&w=majority');
const Schema = mongoose.Schema;
const CorporatemembershipcontactusSchema = new Schema({
        name: String,
        email: String,
        message: String
});
var Corporatemembershipcontactusdata = mongoose.model('corporatemembershipcontactusdata',CorporatemembershipcontactusSchema);
module.exports = Corporatemembershipcontactusdata;