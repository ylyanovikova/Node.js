module.exports = {
    idIsValidChecker: async (request, response, next) => {
        const { userId } = request.params;
        if (Number.isNaN(+userId)) {
            response.status(400).json("Wrong user id");
            return;
        }
        next();
    },
    emailPasswordChecker: async (request, response, next) => {
        const { email, password } = request.body;

        if (email === null || !email.includes("@") || email.length < 5) {
            response.status(400).json("Enter correct email");
            return;
        };
        if (password === null || password.length < 8) {
            response.status(400).json("Password must be more or equile 8 charachters and consists of at least 1 number");
            return;
        };

        next();
    }
}