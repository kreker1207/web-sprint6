function calculateTime() {
    let datenor = new Date(1939, 1, 1)
    let now = new Date()

    Date.prototype.years = () => { return now.getFullYear() - datenor.getFullYear() }
    Date.prototype.months = () => { return now.getMonth() - datenor.getMonth() }
    Date.prototype.days = () => { return now.getDate() - datenor.getDate() }

    return datenor;
}

module.exports.calculateTime = calculateTime;