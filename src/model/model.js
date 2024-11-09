import {Datatype} from "sequelize"
import sequelize from "../database/config.js"

export const table1 = sequelize.define("", {}, {
    freezeTableName: true 
})

export const table2 = sequelize.define("", {}, {
    freezeTableName: true 
})

export const table3 = sequelize.define("", {}, {
    freezeTableName: true 
})