export const decreaseNumber =(num)=>{
    return{
        type:'NUMBER_PLUS' ,
        payloud:num+1

    }
}

export const increaseNumber =(num)=>{
    return{
        type:'NUMBER_MINUS',
        payloud: num-1
    }
}