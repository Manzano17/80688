import { y } from "./y.js"

export function x(param){
    y("x");
    console.log("x:"+param)
    return "fin x"
}

function xx(param){
    return "fin xx"
}

export {x, xx}