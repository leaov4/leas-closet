import axios from 'axios'

//Action types
const GET_PANTS = 'GET_PANTS'
const POST_NEW_PANTS = 'POST_NEW_PANTS'

//Action creators
export const getPants = (pants) => ({
  type: GET_PANTS,
  pants
});

export const postNewPants = (pants) => ({
  type: POST_NEW_PANTS,
  pants
});

//THUNK
export const fetchPants = () => async (dispatch) => {
  try {
    const {data} = await axios.get('/api/pants/getpants')
    dispatch(getPants(data))
  } catch (err) {
    console.error(err)
  }
};

//THUNK
export const postPants = (pants) => async (dispatch) => {
  console.log(pants)
  try {
    const {data} = await axios.post('api/pants', pants)
    console.log(data)
    dispatch(postNewPants(data))
  } catch (error){
   console.error(error)
  }
}

const initialState = []

const pantsReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_PANTS:
      return action.pants
    case POST_NEW_PANTS:
      return [...state].concat(action.pants)
    default:
      return state
  }
}

export default pantsReducer;
