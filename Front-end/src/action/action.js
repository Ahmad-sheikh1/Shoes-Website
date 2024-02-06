export const LoginShowed = (user) => {
    return {
        type: "User_Login",
        payload: user
    };
};
export const Logout = () => {
    return {
        type: "User_Logout"
    };
};

export const get_data_shoes = (dataarr) => {
    return {
        type: "Get_Data",
        payload: dataarr
    }
};

export const Add_To_Cart_Action = (product) => {
    return {
        type: "Add_To_Cart",
        payload: product
    }
};

export const Send_Data = (product) => {
    return {
        type: "Send_Data",
        payload: product
    }
};

export const Pendu_Data_To_Pending = (product) => {
    return {
        type: "Pendu_To_Pending",
        payload: product
    }
};

