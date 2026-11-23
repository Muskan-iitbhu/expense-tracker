import moment from 'moment'  //moment is a JavaScript library for working with dates & times.


export const dateFormat = (date) =>{
    return moment(date).format('DD/MM/YYYY')
}