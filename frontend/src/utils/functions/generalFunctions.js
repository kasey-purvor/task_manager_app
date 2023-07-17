export const formatDates = (date) => {
    const newDate = new Date(date);
    return new Date(date).toDateString();
};
export const formatCompletedColumn = (completed, updatedAt) => {
    const newUpdatedAt = new Date(updatedAt);
    if (completed) {
        return new Date(newUpdatedAt).toDateString();
    }
    return "No";
};
