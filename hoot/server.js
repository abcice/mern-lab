import Dotenv  from "dotenv";
Dotenv.config();
import './config/database.js';
import app from './app-server.js';
const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
    console.log ('We in the building on ' + PORT)
})