const initialState = {
  username:''
  ,id: ''
  ,profile_pic: ''
}

const GET_USER = 'GET_USER'

export function getUser(userObj) {
  return {
    type: GET_USER
    ,payload: {...userObj}
  }
}


export default ( state = initialState, action) => {
  const { type, payload } = action
  switch(type) {
    case GET_USER:
      return {...state, ...payload}
    default:
      return state
  }
  
    
}