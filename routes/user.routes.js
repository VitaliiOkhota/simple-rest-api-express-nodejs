const Router = require('express') //Імпортуємо роутер
const router = new Router() //Створюємо об'єкт нового роутера
const userController = require('../controllers/user.controller') //Імпортуємо контроллер в якому реалізована логіка 

router.post('/user', userController.createUser) //Роут для створення нового користувача
router.get('/user', userController.getUsers) //Роут для отримання всіх користувачів
router.get('/user/:id', userController.getOneUser) //Роут для отримання конкретного користувача по id
router.put('/user', userController.updateUser) //Роут для зміни користувача
router.delete('/user/:id', userController.deleteUser) //Роут для видалення користувача

module.exports = router