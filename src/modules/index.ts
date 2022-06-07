export const getMentionedDates = (text:string) => {
    const dayMonthYearRegex = /^(0?[1-9]|[12][0-9]|3[01])[\/\-](0?[1-9]|1[012])[\/\-]\d{4}$/
    return text.replace(/[^a-zA-Z0-9-/\ ]/g, '').split(' ').filter(item=>item.match(dayMonthYearRegex))
}

export const generateId = () => {
    return 'id' + Math.random().toString(16).slice(2)
}

export const setCreationDate = () => {
    return `${new Date().toLocaleString('default', { month: 'long' })} ${new Date().getDate()}, ${new Date().getFullYear()}`
}