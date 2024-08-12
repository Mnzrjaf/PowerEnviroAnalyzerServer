const express = require('express');
const axios = require('axios');
const cors = require('cors');
const app = express();

const corsOpt = {
    origin: '*',  
}

app.use(cors(corsOpt));

app.get('/api', async (req, res) => {
    try {
        const url = 'http://20.193.146.161/api.php'; // Make sure this URL is correct for your setup
        const response = await axios.get(url);
        
        res.json(response.data); // Send the response data as JSON
    } catch (error) {
        res.status(500).json({ error: `Internal server error: ${error.message}` }); // Improved error message
    }
});



const PORT = process.env.PORT || 8000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});