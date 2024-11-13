'use strict'

module.exports = (sequelize, DataTypes) => {
    const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
    const contactUs = sequelize.define('contactUs', {
        name: {
            type: DataTypes.STRING,
            required: true
        },
        phoneNo: {
            type: DataTypes.STRING,
            required: true
        },
        purpose: {
            type: DataTypes.STRING,
            required: true
        },
        emailId: {
            type: DataTypes.STRING,
            required: true
        },
    });
    return contactUs;
};