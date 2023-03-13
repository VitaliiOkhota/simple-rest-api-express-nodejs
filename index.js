const express = require('express') //Імпортуємо express
const userRouter = require('./routes/user.routes') //Імпортуємо створений userRouter
const postRouter = require('./routes/post.routes') //Імпортуємо створений postRouter

const PORT = process.env.PORT || 8080 //Визначаємо порт на якому будемо запускати сервер

const app = express() //Створюємо сервер за допомогою express

app.use(express.json()) //Функція для парсингу формату json
app.use('/api', userRouter) //Реєструємо userRouter
app.use('/api', postRouter) //Реєструємо postRouter

app.listen(PORT, () => { console.log(`Server started on port ${PORT}`); }) //Визначаємо прослуховування порту для нашого сервера