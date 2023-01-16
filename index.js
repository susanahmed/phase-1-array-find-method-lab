function superbowlWin(records) {
    const wins = records.find(function(record) {
    return (record.result === 'W')
    
})
    if (wins) {
        return wins.year;
    }
    else {
        return undefined
    }
}
