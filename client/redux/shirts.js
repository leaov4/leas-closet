import axios from 'axios'

//Action types
const GET_SHIRTS = 'SET_SHIRTS'
const POST_NEW_SHIRT = 'POST_NEW_SHIRT'

//Action creators
export const getShirts = (shirts) => ({
  type: GET_SHIRTS,
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
    dispatch(getShirts(shirts))
  } catch (err) {
    console.error(err)
  }
};

//THUNK
export const postShirt = (shirt) => async (dispatch) => {
  try {
    const {data} = await axios.post('api/shirts', shirt)
    dispatch(postNewShirt(data))
  }catch(error){
    console.error(error)
  }
}

const initialState = []

// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
const shirtReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_SHIRTS:
      return action.shirts
     case POST_NEW_SHIRT:
       return [...state, action.shirt]
    default:
      return state
  }
}

export default shirtReducer

