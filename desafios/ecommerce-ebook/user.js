class User{
    name = ""
    email = ""
    password = ""

    constructor(user) {
        this.name = user.name
        this.email = user.email
        this.password = user.password
    }

    updateUser(name, email, password){
        
        this.name = name
        this.email = email
        this.password = password
    }
}

module.exports = User
