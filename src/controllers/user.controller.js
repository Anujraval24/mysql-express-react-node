import db from '../models';

const getAllUsers = async (req, res) => {
	try {
		const { rows: data, count } = await db.User.findAndCountAll({});

		res.status(200).send({
			success: true,
			data,
			count,
		});
	} catch (error) {
		res.status(400).send({
			success: false,
			message: error.message,
		});
	}
};

export default { getAllUsers };
