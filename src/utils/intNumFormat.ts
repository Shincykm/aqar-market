export const IntlNumFormat = (num : string | number)=>{
    if(typeof num === 'string'){
        return new Intl.NumberFormat().format(Number(num));
    }
    return new Intl.NumberFormat().format(num);

}