// import { datatableObj } from "./schemaOptions";

class Requests {
    static requestParams(items){
        return {
            type: 'object',
            properties: {
                ...items
            }
        }
    }

    static requestMakerBody(itemInterface, requiredValues ) {
        return {
            type: 'object',
            additionalProperties: false,
            properties: {
                data: {
                    type: 'object',
                    properties: itemInterface,
                    required: ['id']
                },
                delete: { type: 'boolean' },
                maker_id: { type: 'string', format: 'uuid' }
            },
            required: requiredValues
        }
    }

    static requestCheckerBody(requiredValues) {
        return {
            type: 'object',
            additionalProperties: false,
            properties: {
                id: { type: 'string', format: 'uuid' },
                approve: { type: 'boolean' },
                checker_id: { type: 'string', format: 'uuid' }  
            },
            required: requiredValues         
        }
    }

    static requestBody(itemInterface, requiredValues ) {
        return {
            type: 'object',
            additionalProperties: false,
            properties: itemInterface,
            required: requiredValues         
        }
    }

    // static datatableRequestBody( requiredValues ) {
    //     return {
    //         type: 'object',
    //         additionalProperties: false,
    //         properties: datatableObj,
    //         required: requiredValues         
    //     }
    // }
    
}

export default Requests;