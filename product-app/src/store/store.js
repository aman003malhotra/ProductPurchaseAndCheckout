const initialState = {
    cart:[],
    userInfo:{
        firstName:"",
        lastName:"",
        email:"",
        phoneNumber:""
    },
    cartTotal:0,
    redirect:false
}


export default function reducer(currentState = initialState, action){
    switch(action.type){
        case "ADD_ITEM_TO_CART":
            return{
                ...currentState,
                cart:[...currentState.cart, action.payload],
                cartTotal: currentState.cartTotal+action.payload.price,
            }
        case "ADD_USER_INFO":
            return{
                ...currentState,
                userInfo:action.payload
            }
        case "REDIRECT":
            return{
                ...currentState,
                redirect:true
            }
        default:
            return currentState;
    }
}