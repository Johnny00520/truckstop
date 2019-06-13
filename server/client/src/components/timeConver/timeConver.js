
export default function timeConver(DateTime) {

    let longWeekDay = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
    let srtWeekDay = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

    const index = srtWeekDay.findIndex(element => element === DateTime[0]);
    if(index > -1) {
        DateTime[0] = longWeekDay[index]
        return DateTime
    }
    return DateTime
}