export function getEmojiSnack(snack:string){

    switch (snack.toLowerCase()) {
        case'burger':
            return '🍔'
            break;
        case'pizza':
            return '🍕'
        case'drink':   
            return '🍹'    
        case'ice-cream':
            return '🍦'    
        default:
            return '🔍'
    }
}