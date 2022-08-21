const { statusCode } = require("../constants");
const { ApiError } = require("../errors");
const {userService} = require("../services");

module.exports = {
    checkIsUserBodyValid: async (request, response, next) => {
        try {
            const { name, email, password } = request.body;
            if (name.length < 2) {
                return next(new ApiError('Username musr be more than 1 character', statusCode.BAD_REQUEST));
            }
            if (email.length < 4 && !email.includes('@')) {
                return next(new ApiError('Email must be more than 4 characters', statusCode.BAD_REQUEST));
            }
            if (password.length < 6) {
                return next(new ApiError('Password must be more or equil 6 characters', statusCode.BAD_REQUEST));
            }
            next();
        } catch (e) {
            next(e)
        }
    },
    chechIsUserEmailUniq: async (request, response, next)=>{
        try{
            const {email} = request.body;
            const {userId} = request.params;

            const userByEmail = await userService.getUserByParams({email});
            if(userByEmail && userByEmail._id !== userId){
                return next(new ApiError('User with this email has already exist', statusCode.CONFLICT));
            }
            next();
        }catch(e){
            next(e);
        }
    },
    isUserPresent: (from='params') => async(request, response, next)=>{
        try{
            const {userId} = request[from];

            const user = userService.getUserById(userId);

            if(!user){
                return next(new ApiError('User not found', statusCode.NOT_FOUND));
            }
            next();
        }catch(e){
            next(e);
        }
    }
}