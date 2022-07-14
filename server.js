const { PeerServer } = require('peer');
var cors = require('cors')
 
app.use(cors())
require('dotenv').config({ path: './config/.env' });
const peerServer = PeerServer({
  port: process.env.PORT || 9000,
  path: '/myapp',
});
