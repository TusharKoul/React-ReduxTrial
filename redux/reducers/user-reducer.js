let userReducer = function(user={}, action) {
    switch (action.type) {

         case 'CREATE_NEW_USER_ID':
             return {
                 id: action.id,
                 username : user.username
             };

         default : return user;
    }
};

export default userReducer;