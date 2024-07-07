export const getGreatings = () => {
    var today = new Date()
    var curHr = today.getHours()
    let time = ""
    if (curHr < 12) {
        time = 'good morning'
    } else if (curHr < 18) {
        time = 'good afternoon'
    } else {
        time = 'good evening'
    }
    return time
}