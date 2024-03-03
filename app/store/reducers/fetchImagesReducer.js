const FETCH_IMAGES_REQUEST = "FETCH_IMAGES_REQUEST";
const FETCH_IMAGES_SUCCESS = "FETCH_IMAGES_SUCCESS";
const FETCH_IMAGES_FAILURE = "FETCH_IMAGES_FAILURE";

export const initialState = {
  data: [],
  isFetching: false,
  error: '',
}

export const fetchImagesReducer = (state = initialState, action) => {
  switch (action.type) {
    case FETCH_IMAGES_REQUEST: {
      return {
        ...state,
        isFetching: true,
      }
    }

    case FETCH_IMAGES_SUCCESS: {
      return {
        ...state,
        data: action.payload,
        isFetching: false,
      }
    }

    case FETCH_IMAGES_FAILURE: {
      return {
        ...state,
        error: action.payload,
        isFetching: false,
      }
    }

    default: {
      return state
    }
  }
}