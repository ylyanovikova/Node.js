const { isObjectIdOrHexString } = require("mongoose")
const { statusCode } = require("../constants")
const { ApiError } = require("../errors")

module.exports = {
    checkIsIdValid: (fieldName, from = 'params') => async (request, response, next) => {
        try {
            if (!isObjectIdOrHexString(request[from][fieldName])) {
                return next(new ApiError('Not valid ID', statusCode.BAD_REQUEST));
            }
            next();
        } catch (e) {
            next(e)
        }
    }
}
