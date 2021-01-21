import { Sequelize, Model, DataTypes, Optional, ModelCtor } from "sequelize";

// We recommend you declare an interface for the attributes, for stricter typechecking
interface ProjectAttributes {
  id: number;
  name: string;
  
  created_at?: Date;
  updated_at?: Date;
  deleted_at?: Date;
  createdAt?: Date;
  updatedAt?: Date;
  deletedAt?: Date;
}



// Some fields are optional when calling ProjectModel.create() or ProjectModel.build()
interface ProjectCreationAttributes extends Optional<ProjectAttributes, "id"> {}

// We need to declare an interface for our model that is basically what our class would be
export interface ProjectInstance
  extends Model<ProjectAttributes, ProjectCreationAttributes>,
    ProjectAttributes {
    }

    

export const ProjectFactory = (sequelize: Sequelize): ModelCtor<ProjectInstance> => {

    const ProjectModel = sequelize.define<ProjectInstance>("Project", {
        id: {
          primaryKey: true,
          type: DataTypes.INTEGER,
          autoIncrement: true,
        },
        name: {
          type: DataTypes.STRING,
        },
              
        createdAt: {type: DataTypes.DATE, field: 'created_at'},
        updatedAt: {type: DataTypes.DATE, field: 'updated_at'},
        deletedAt: {type: DataTypes.DATE, field: 'deleted_at'},
      }, {
          timestamps: true,
          paranoid: true
      });

      return ProjectModel

}

