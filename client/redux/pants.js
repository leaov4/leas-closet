import axios from 'axios'


//Action types
const SET_PANTS = 'SET_PANTS'
const POST_NEW_PANTS = 'POST_NEW_PANTS'

//Action creators
export const setPants = (pants) => ({
  type: SET_PANTS,
  pants
});

export const postNewPants = (pants) => ({
  type: POST_NEW_PANTS,
  pants
});

//THUNK
export const fetchPants = () => async (dispatch) => {
  
    try {
    const { data: pants } = await axios.get('/api/pants/getpants')
    console.log("HERE", pants)
    dispatch(setPants(pants))
  } catch (err) {
    console.error(err)
  }
};


export async function postPants(name, description, url){
  try {
    await axios.post('/', {name, description, url})
  } catch (error){
   console.error(error)
  }
}

const initialState = {
  pants: []
}
// Take a look at app/redux/index.js to see where this reducer is
// added to the Redux store with combineReducers
const pantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_PANTS:
      return {...state, pants: action.pants}
    // case POST_NEW_SHIRT:
    //   return [...state, action.shirt]
    default:
      return state
  }
}

export default pantsReducer;

