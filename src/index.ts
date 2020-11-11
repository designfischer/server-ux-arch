require('dotenv').config()

import app from './app'

const PORT = 3333 || process.env.PORT

app.listen(3333, () => console.log(`Server running on port ${PORT}`))