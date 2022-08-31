export const reviewsReducer = (state, action) => {
  //   isloading: false,
  //   isError: false,
  //   delete: false,
  //   sort: false,
  //   data: [],
  switch (action.type) {
    case "FETCH":
      return {
        ...state,
        isLoading: true,
        isError: false,
        delete: false,
        sort: false,
        fetch: false,
      };

    case "ACTION-SUCCESS":
      return {
        ...state,
        isError: true,
        isLoading: false,
        data: action.payload,
      };

    case "ACTION-FALIURE":
      return {
        ...state,
        isError: false,
        data: action.payload,
      };

    case "SORT":
      return {
        ...state,
        isError: false,
        isLoading: true,
        delete: false,
      };
    case "DELETE":
      return {
        ...state,
        isError: false,
        isLoading: true,
        sort: false,
      };

    default:
      return {
        ...state,
        isloading: true,
        isError: false,
        delete: false,
        sort: false,
        data: [],
      };
  }
};
