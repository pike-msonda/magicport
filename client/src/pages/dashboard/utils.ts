export const formatDate = (date: Date) => {
    const newDate = new Date();
    const diff =  date.getTime() - newDate.getTime()
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const frmt = new Intl.RelativeTimeFormat('en', { numeric: "auto" });
    console.log({ days });

    return frmt.format(days, 'day');
}