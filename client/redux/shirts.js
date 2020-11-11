import axios from 'axios'

//Action types
const SET_SHIRTS = 'SET_SHIRTS'
const POST_NEW_SHIRT = 'POST_NEW_SHIRT'

//Action creators
export const setShirts = (shirts) => ({
  type: SET_SHIRTS,
  shirts
});

export const postNewShirt = (shirt) => ({
  type: POST_NEW_SHIRT,
  shirt
});

//THUNK
export const fetchShirts = () => async (dispatch) => {
    try {
    const { data: shirts } = await axios.get('/api/shirts/getshirts')
    dispatch(setShirts(shirts))
  } catch (err) {
    console.error(err)
  }
};


const initialState = {
  shirts: []
}
// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
const shirtReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_SHIRTS:
      return {...state, shirts: action.shirts}
    // case POST_NEW_SHIRT:
    //   return [...state, action.shirt]
    default:
      return state
  }
}

export default shirtReducer

