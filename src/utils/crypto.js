const bcrypt = require('bcrypt')

const hashPassword = (plainPassword) => { 
    //? PlainPassword = contraseña en texto plano
    return bcrypt.hashSync(plainPassword, 10)
}

// console.log(hashPassword('Admin1234&'))

const comparePassword = (plainPassword, hashedPassword) => {
    return bcrypt.compareSync(plainPassword, hashedPassword)
}

console.log(comparePassword('Admin1234&', '$2b$10$QqjB9tNZfTD9MtL/MZ0QMetHbf1OEhNQ5X/xukwkqnoLCHBDyFQEC'))