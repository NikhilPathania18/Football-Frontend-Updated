const getMonth = (month) => {
    if(month===1)   return "January"
    if(month===2)   return "February"
    if(month===3)   return "March"
    if(month===4)   return "April"
    if(month===5)   return "May"
    if(month===6)   return "June"
    if(month===7)   return "July"
    if(month===8)   return "August"
    if(month===9)   return "September"
    if(month===10)   return "October"
    if(month===11)   return "November"
    if(month===12)   return "December"
}

const getDay = (day) => {
    if(day==0)  return "Sunday"
    if(day==1)  return "Monday"
    if(day==2)  return "Tuesday"
    if(day==3)  return "Wednesday"
    if(day==4)  return "Thursday"
    if(day==5)  return "Friday"
    if(day==6)  return "Saturday"
}

export const decorateDate = (date) => {
    const numerical_date = date.getDate();
    const month = getMonth(date.getMonth()+1);
    const year = date.getFullYear()
    const day = getDay(date.getDay())
    return `${month} ${numerical_date}`
}

