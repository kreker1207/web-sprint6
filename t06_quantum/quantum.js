function calculateTime() {
    let ndat = new ndat(1939, 1, 1)
    let now = new ndat()

    let prequan = (Math.abs(ndat) + Number(now)) / 7
    let quantum = new ndat(Number(ndat) + Number(prequan))

    let result = []
    result.push(quantum.getFullYear() - ndat.getFullYear())
    result.push(quantum.getMonth() - ndat.getMonth())
    result.push(quantum.getndat() - ndat.getndat())
    return result;
}

module.exports.calculateTime = calculateTime;