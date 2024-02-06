let initialstate = {
    Logged_in: null,
    shoedata: [],
    Cart: [],
    SendData: [],
    ToPending: []
};
export const Login_Reducer = (state = initialstate, action) => {
    switch (action.type) {
        case "User_Login":
            return {
                ...state,
                Logged_in: action.payload
            };
        case "User_Logout":
            return {
                ...state,
                Logged_in: null,
            };
        case "Get_Data":
            return {
                ...state,
                shoedata: action.payload
            };
        case "Add_To_Cart":
            const obj = action.payload;
            return {
                ...state,
                Cart: [...state.Cart, obj]
            }
        case "Send_Data":
            return {
                ...state,
                SendData: [action.payload]
            }
        case "Pendu_To_Pending":
            return {
                ...state,
                ToPending: [...state.ToPending, action.payload]
            }
        default:
            return state;
    };
};

let brands = {
    Brands: [
        {
            name: "Addidas",
            logo: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b"
        },
        {
            name: "Nike",
            logo: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        },
        {
            name: "Bata",
            logo: "https://images.unsplash.com/flagged/photo-1556637640-2c80d3201be8?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60?a=b"
        },
        {
            name: "Service",
            logo: "https://images.unsplash.com/photo-1600185365483-26d7a4cc7519?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8OHx8c25lYWtlcnxlbnwwfHwwfHw%3D&auto=format&fit=crop&w=500&q=60"
        }
    ]
};

export const BBrands = (state = brands, action) => {
    state = { ...state }
    return state
}