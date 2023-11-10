
const parseDate = (date)=>{
    if (isNaN(date.getDate())) return ""
    return `${date.getDate().toString().padStart(2, '0')}.${(date.getMonth()+1).toString().padStart(2, '0')}.${date.getFullYear()}`
}

export default parseDate;