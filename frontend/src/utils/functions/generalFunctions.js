export const formatDates = (date) => {
    return new Date(date).toDateString()
}

export const formatCompletedColumn = (completed, updatedAt) => {
    if (completed) {
        return ( new Date(updatedAt).toDateString())
    } 
    return "No"
}