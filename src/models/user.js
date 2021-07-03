'use strict';
import { Model } from 'sequelize';
export default (sequelize, DataTypes) => {
	class User extends Model {
		/**
		 * Helper method for defining associations.
		 * This method is not a part of Sequelize lifecycle.
		 * The `models/index` file will call this method automatically.
		 */
		static associate(models) {
			// define association here
		}
	}
	User.init(
		{
			firstName: DataTypes.STRING,
			lastName: DataTypes.STRING,
			email: { type: DataTypes.STRING, unique: true },
			role: DataTypes.ENUM('USER', 'ADMIN'),
			isActive: { type: DataTypes.BOOLEAN, defaultValue: false },
			isDeleted: { type: DataTypes.BOOLEAN, defaultValue: false },
			password: DataTypes.STRING,
		},
		{
			sequelize,
			modelName: 'User',
		},
	);
	return User;
};
