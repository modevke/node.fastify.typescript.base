import { Sequelize, Model, DataTypes, Optional, ModelCtor } from "sequelize";

// We recommend you declare an interface for the attributes, for stricter typechecking
interface UserAttributes {
  id?: number;
  fname: string;
  lname: string;
  email: string;

  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}

const date = DataTypes.INTEGER

// Some fields are optional when calling UserModel.create() or UserModel.build()
interface UserCreationAttributes extends Optional<UserAttributes, "id"> {}

// We need to declare an interface for our model that is basically what our class would be
export interface UserInstance
  extends Model<UserAttributes, UserCreationAttributes>,
    UserAttributes {
    }


export const UserFactory = (sequelize: Sequelize): ModelCtor<UserInstance> => {

    const UserModel = sequelize.define<UserInstance>("User", {
        id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement: true,
        },
        fname: {
          type: DataTypes.STRING,
        },
        lname: {
          type: DataTypes.STRING,
        },
        email: {
          type: DataTypes.STRING,
        },
      
        createdAt: {type: DataTypes.DATE, field: 'created_at'},
        updatedAt: {type: DataTypes.DATE, field: 'updated_at'},
        deletedAt: {type: DataTypes.DATE, field: 'deleted_at'},
      }, {
          timestamps: true,
          paranoid: true
      });

      return UserModel

}

