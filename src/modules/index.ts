export const setCreationDate = () => {
    return `${new Date().toLocaleString('default', { month: 'long' })} ${new Date().getDate()}, ${new Date().getFullYear()} | ${new Date().getHours()}:${new Date().getMinutes()}`
}