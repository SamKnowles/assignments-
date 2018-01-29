const counter = (prevCounter = 0, action) => {
    switch (action.type) {
        case "ADD_TIME":
            return prevCounter + 10;
        case "STOP_TIME"
            return prevCounter;


        default:
            return prevCounter;
    }
}

export const addTime = () => {
    return {
        type: 'ADD_TIME'
    }
}

export default counter;