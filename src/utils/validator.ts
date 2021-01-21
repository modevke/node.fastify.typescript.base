import Ajv from "ajv"
import Responses from './responses'

const ajv = new Ajv()

export function validator(schema, data) :{valid: boolean, data?: any}{
    const validate = ajv.compile(schema)
    const valid = validate(data)
    if (!valid) return { valid: false, data: validate.errors }
    return { valid: true }
}

export const reqValidator = (req) => {
    if (req['validationError']) {
        const errors = req['validationError'].validation.map( mes => {
            return { code: '000', description: mes.message } 
        });
        return {
            error: true,
            errorData: Responses.errorResponses('001', 'Invalid credentials', errors)
        }
    } else {
        return {
            error: false,
            errorData: ''
        }
    }
}