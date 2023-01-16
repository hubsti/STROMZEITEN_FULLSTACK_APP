
import  React, { useState , useEffect } from 'react'
import { format } from "date-fns";
export const DateTime = () => {
    const formtdate= format(new Date(), "'Today is a' eeee")

    var [date,setDate] = useState(new Date());
    
    useEffect(() => {
        var timer = setInterval(()=>setDate(new Date()), 1000 )
        return function cleanup() {
            clearInterval(timer)
        }
    
    });

    return(
        <div>
            <p>{formtdate}</p>
        </div>
    )
}

export default DateTime