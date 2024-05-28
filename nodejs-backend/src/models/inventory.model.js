
    module.exports = function (app) {
        const modelName = 'inventory';
        const mongooseClient = app.get('mongooseClient');
        const { Schema } = mongooseClient;
        const schema = new Schema(
          {
            itemId: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },
itemName: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },
category: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },
unitOfMeasure: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },
quantityOnHand: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },
minimumStockLevel: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },
maximumStockLevel: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },
reorderPoint: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },
supplier: { type: String, required: false, unique: false, lowercase: false, uppercase: false, minLength: 3, maxLength: 100000000, index: true, trim: true },

            
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