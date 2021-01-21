class Responses {
    static errorResponseObj(){
        return {
            type: 'object',
            properties: {
                status: { type: 'string', enum: ['001'] },
                description: { type: 'string' },
                error: { 
                    type: 'array', 
                    items: { 
                        type: 'object',
                        properties: {
                            code: { type: 'string' },
                            description: { type: 'string' }
                        } 
                    } 
                } 
            }      
        }
        
    }

    static successResponseObj(itemInterface){
        return {
            type: 'object',
            properties: {
                status: { type: 'string', enum: ['000', '002'] },
                description: { type: 'string' },
                data: itemInterface
            }  
        };
    }

    static successsDataTable(itemInterface) {
        return {
            type: 'object',
            properties: {
                draw: { type: 'integer' },
                data: {
                    type: 'array', 
                    items: { 
                        type: 'object', 
                        properties: {
                            id: { type: 'integer' },
                            ...itemInterface,
                            created_at: { type: 'string' },
                            updated_at: { type: 'string' }
                        } 
                    }
                },
                recordsFiltered: { type: 'integer' },
                recordsTotal: { type: 'integer' }
            }
        }
    }

    static successResponses(status, description, data){
        return {
            status: status,
            description: description,
            data: data
        }
    }

    static errorResponses(status, description, error){
        return {
            status: status,
            description: description,
            error: error
        }
    }

   static reponseData(status, description, data){
        return {
            status: status,
            description: description,
            data: data
        }
    }
}


export default Responses;