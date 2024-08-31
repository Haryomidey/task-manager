const parseDate = (dateString: string): Date => {
    const [day, month, year] = dateString.split('/').map(Number);
    return new Date(year, month - 1, day);
}

export const formatDate = (dateString: string): string => {
    // const date = new Date(dateString);
    const date = parseDate(dateString)
    const formatter = new Intl.DateTimeFormat('en-US', {
        month: 'long',
        day: '2-digit',
        year: 'numeric',
    });
    return formatter.format(date);
};
