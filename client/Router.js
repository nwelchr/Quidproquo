import React from 'react';
import { Scene, Router, Actions } from 'react-native-router-flux';
import Tutorial from './components/Tutorial';

const RouterComponent = () => {
  return (
    <Router>
      <Scene key="root" hideNavBar>
        <Scene key="auth">
          <Scene key="tutorial" component={Tutorial} title="Welcome" initial />
          {/* <Scene
            key="login"
            component={LoginForm}
            title="Please Login"
            initial
          /> */}
        </Scene>
        {/* <Scene key="main"> */}
        {/* <Scene
            rightTitle="Add"
            onRight={() => {
              Actions.employeeCreate();
            }}
            key="employeeList"
            component={EmployeeList}
            title="Employees"
            initial
          />
          <Scene
            key="employeeCreate"
            component={EmployeeCreate}
            title="Create Employee"
          />
          <Scene
            key="employeeEdit"
            component={EmployeeEdit}
            title="Edit Employee"
          /> */}
        {/* </Scene> */}
      </Scene>
    </Router>
  );
};

export default RouterComponent;
