'use strict';

export async function up(queryInterface, Sequelize) {
	/**
	 * Add seed commands here.
	 *
	 * Example:
	 * await queryInterface.bulkInsert('People', [{
	 *   name: 'John Doe',
	 *   isBetaMember: false
	 * }], {});
	 */
	return queryInterface.bulkInsert(
		'Users',
		[
			{
				firstName: 'super',
				lastName: 'admin',
				email: 'superadmin@mailinator.com',
				role: 'ADMIN',
				isActive: 1,
				createdAt: new Date(),
				updatedAt: new Date(),
			},
		],
		{},
	);
}
export async function down(queryInterface, Sequelize) {
	/**
	 * Add commands to revert seed here.
	 *
	 * Example:
	 * await queryInterface.bulkDelete('People', null, {});
	 */
}
