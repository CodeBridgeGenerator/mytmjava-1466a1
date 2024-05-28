
    module.exports = function (app) {
        const modelName = 'maintenance_requests';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            buildingid: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 1000000, index: true, trim: true },
description: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },
category: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },
priority: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },
status: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },
reporteddate: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },
completeddate: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },

            
            createdBy: { type: Schema.Types.ObjectId, ref: "users", required: true },
            updatedBy: { type: Schema.Types.ObjectId, ref: "users", required: true }
          },
          {
            timestamps: true
        });
      
       
        if (mongooseClient.modelNames().includes(modelName)) {
          mongooseClient.deleteModel(modelName);
        }
        return mongooseClient.model(modelName, schema);
        
      };