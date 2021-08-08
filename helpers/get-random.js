const getRandom = (max)=>{
    const min = 1;
    return Math.round(Math.random() * (max - min) + min);
}

module.exports = {
    getRandom
};
