'use strict'

module.exports = (sequelize, DataTypes) => {
    const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
    const report = sequelize.define('report', {
        InterartrialSeptumReport: {
            type: DataTypes.JSON,
            required: true
        },
        InterventricularSeptumReport: {
            type: DataTypes.JSON,
            required: true
        },
        leftVentricalFunctionReport: {
            type: DataTypes.JSON,
            required: true
        },
        rightVentricalFunctionReport: {
            type: DataTypes.JSON,
            required: true
        },
        pericardialEffusionReport: {
            type: DataTypes.JSON,
            required: true
        },
        intraCardiacTumourReport: {
            type: DataTypes.JSON,
            required: true
        },
        IntraCardiacClotReport: {
            type: DataTypes.JSON,
            required: true
        },
        InterartrialSeptumComment : {
            type: DataTypes.JSON,
            required: true
        },
        leftVentricalFunctionComment: {
            type: DataTypes.JSON,
            required: true
        },
        rightVentricalFunctionComment: {
            type: DataTypes.JSON,
            required: true
        },
        pericardialEffusionComment: {
            type: DataTypes.JSON,
            required: true
        },
        IntraCardiacClotComment: {
            type: DataTypes.JSON,
            required: true
        },
        intraCardiacTumourComment: {
            type: DataTypes.JSON,
            required: true
        },
        
        InterventricularSeptumComment: {
            type: DataTypes.JSON,
            required: true
        },
        speckleTrackingReport: {
            type: DataTypes.JSON,
            required: true
        },
        
        speckleTrackingComment: {
            type: DataTypes.JSON,
            required: true
        },
        patientId:{
            type:DataTypes.INTEGER,
            required:true
            }, 
    });
    return report;
};