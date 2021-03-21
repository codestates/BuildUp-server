'use strict';
const { Model } = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class achievment extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */

    static associate(models) {
      // define association here
      achievment.belongsTo(models.user, { foreignKey: 'user_id' });
      achievment.belongsTo(models.date, { foreignKey: 'date_id' });
    }
  }
  achievment.init(
    {
      user_id: DataTypes.INTEGER,
      date_id: DataTypes.INTEGER,
      rate: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: 'achievment',
    }
  );
  return achievment;
};
