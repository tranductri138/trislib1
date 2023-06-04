
const reqBank = (code) => {
    if (code === '0000') {
        return 'done'
    }
    return 'req wrong'
}

module.exports.reqBank = reqBank