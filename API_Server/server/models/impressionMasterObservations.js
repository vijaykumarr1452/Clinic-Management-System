'use strict'

module.exports = (sequelize, DataTypes) => {
    const TIMESTAMP = require('sequelize-mysql-timestamp')(sequelize);
    const impressionMasterObservation = sequelize.define('impressionMasterObservation', {
        impressionLeftVentricle: {
            type: DataTypes.JSON,
            required: true
        },
        impressionRightVentricle: {
            type: DataTypes.JSON,
            required: true
        },
        impressionLeftAtrium: {
            type: DataTypes.JSON,
            required: true
        }, 
        impressionRightAtrium: {
            type: DataTypes.JSON,
            required: true
        },
        impressionAorticValve: {
            type: DataTypes.JSON,
            required: true
        }, 
        impressionMitralValve: {
            type: DataTypes.JSON,
            required: true
        },
        impressionTricuspidValve: {
            type: DataTypes.JSON,
            required: true
        }, 
        impressionPulmonicValve: {
            type: DataTypes.JSON,
            required: true
        },
        impressionPericardium: {
            type: DataTypes.JSON,
            required: true
        },
        impressionAorta: {
            type: DataTypes.JSON,
            required: true
        },
        impressionPulmonaryArtery: {
            type: DataTypes.JSON,
            required: true
        }, 
        impressionPulmonaryVein: {
            type: DataTypes.JSON,
            required: true
        },
        impressionInferiorVenaCava: {
            type: DataTypes.JSON,
            required: true
        }, 
        impressionAnteriorWall: {
            type: DataTypes.JSON,
            required: true
        },
        impressionPosteriorWall: {
            type: DataTypes.JSON,
            required: true
        }, 
        impressionInferiorWall: {
            type: DataTypes.JSON,
            required: true
        },
        impressionLateralValve: {
            type: DataTypes.JSON,
            required: true
        },
        impressionAnteriorSeptum: {
            type: DataTypes.JSON,
            required: true
        },
        impressionInferiorSeptum: {
            type: DataTypes.JSON,
            required: true
        }, 
        impressionIntraCardiacClots: {
            type: DataTypes.JSON,
            required: true
        },
        impressionIntraCardiacTumour: {
            type: DataTypes.JSON,
            required: true
        }, 
        impressionPericardialEffusion: {
            type: DataTypes.JSON,
            required: true
        },
        impressionLeftVentricularFunction: {
            type: DataTypes.JSON,
            required: true
        }, 
        impressionRightVentricalFunction: {
            type: DataTypes.JSON,
            required: true
        },
        impressionSpeckleTracking: {
            type: DataTypes.JSON,
            required: true
        },
        impressionIntraArtrialSeptum: {
            type: DataTypes.JSON,
            required: true
        }, 
        impressionIntraVentricularSeptum: {
            type: DataTypes.JSON,
            required: true
        },
        patientId:{
            type:DataTypes.INTEGER
        }
    });

    return impressionMasterObservation;
};