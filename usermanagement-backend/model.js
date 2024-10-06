const mongooose = require('mongoose');
const Schema = mongooose.Schema;

const userSchema = new Schema(
{
    id: Number,
    name: String,
}
);

const User = mongooose.model('User' , userSchema);

module.exports = User;