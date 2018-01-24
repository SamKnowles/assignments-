module.exports = (req, res, next) => {
    console.log('logged on ' + new Date().toLocateTimeString());
    next();
}