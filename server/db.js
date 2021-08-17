const mongoose = require("mongoose");

module.exports = async () => {
    try {
        // using default params
        const connectionParams = {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true,
        };

        // connect using credentials
        await mongoose.connect(
            "mongodb+srv://userdb:userdbpassword@cluster0.ymmct.mongodb.net/myFirstDatabase?retryWrites=true&w=majority",
            connectionParams
        );
        
        console.log("Connected to database.");
    } catch (error) {
        console.log("Could not connect to database.", error);
    }
};
