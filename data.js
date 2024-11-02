 export const API_KEY='AIzaSyDDCsNCavssuSgJVaiCnv0aKczY-ZSXlAc';

 export const value_converter= (value)=>{
    if(value>=10000000)
    {
        return Math.floor(value/10000000)+"M";
    }
    else if(value>=1000)
    {
        return Math.floor(value/1000)+"k";
    }
    else{
        return value;
    }

 }