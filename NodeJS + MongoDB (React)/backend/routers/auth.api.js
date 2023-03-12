const {Router} = require('express')
const router = Router()
const authUser = require('../helpers/authUser')
const User = require("../moduls/users.mongoose")

router.post('/login', async (request, response) => {
	const users = await User.find();
	const user = authUser(users,request.body)

	console.log('/login => user',user);

	if (user) {
		request.session.user = authUser(users,request.body)
		request.session.isAuthenticated = true;
		request.session.save(err => {
			if (err) {
				throw err
			}
			response.status(200).json({ ...user });
		})
	} else {
		response.status(200).json({ });
	}
});

router.get('/logout', async (req, res) => {
	req.session.destroy(() => {
		res.redirect('/')
	})
})


module.exports = router