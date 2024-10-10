function generatePassword(length = 12) {
    const chars = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQURSTUVWXYX0123456789_"
    let paswd = ""
    for (let i = 0; i < length; i++) {
        paswd += chars[Math.floor(Math.random() * chars.length)]
    } return paswd

}

module.exports = generatePassword;