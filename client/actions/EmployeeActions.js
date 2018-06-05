// // import firebase from 'firebase';
// // import { Actions } from 'react-native-router-flux';
// import {
//   EMPLOYEE_UPDATE,
//   EMPLOYEE_CREATE,
//   EMPLOYEE_SAVE,
//   RECEIVE_EMPLOYEES
// } from './types';

// export const employeeUpdate = ({ prop, value }) => {
//   return {
//     type: EMPLOYEE_UPDATE,
//     payload: { prop, value }
//   };
// };

// export const employeeCreate = ({ name, phone, shift }) => {
//   // const { currentUser } = firebase.auth();
//   // return dispatch => {
//   //   firebase
//   //     .database()
//   //     .ref(`/users/${currentUser.uid}/employees/`)
//   //     .push({ name, phone, shift })
//   //     .then(() => {
//   //       dispatch({ type: EMPLOYEE_CREATE });
//   //       Actions.pop();
//   //     });
//   // };
// };

// export const fetchEmployees = () => dispatch => {
//   // const { currentUser } = firebase.auth();
//   // firebase
//   //   .database()
//   //   .ref(`/users/${currentUser.uid}/employees/`)
//   //   .on('value', snapshot => {
//   //     dispatch({ type: RECEIVE_EMPLOYEES, payload: snapshot.val() });
//   //   });
// };

// export const employeeSave = ({ name, phone, shift, uid }) => {
//   // const { currentUser } = firebase.auth();
//   // return dispatch => {
//   //   firebase
//   //     .database()
//   //     .ref(`/users/${currentUser.uid}/employees/${uid}`)
//   //     .set({ name, phone, shift })
//   //     .then(() => {
//   //       dispatch({ type: EMPLOYEE_SAVE });
//   //       Actions.pop();
//   //     });
//   // };
//   // firebase.database().ref('/users/userId/employees');
// };

// export const employeeDelete = ({ uid }) => {
//   // const { currentUser } = firebase.auth();
//   // return () => {
//   //   firebase
//   //     .database()
//   //     .ref(`/users/${currentUser.uid}/employees/${uid}`)
//   //     .remove()
//   //     .then(() => {
//   //       Actions.pop();
//   //     });
//   // };
// };
