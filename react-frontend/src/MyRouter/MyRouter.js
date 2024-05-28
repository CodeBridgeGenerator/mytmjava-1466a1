import React from 'react';
import { Route, Routes } from 'react-router-dom';
import ProtectedRoute from './ProtectedRoute';
import NoMatch from './NoMatch';

import LoginPage from '../components/LoginPage/LoginPage';
import SignUpPage from '../components/LoginPage/SignUpPage';
import Account from '../components/Account/Account';
import Dashboard from '../components/Dashboard/Dashboard';
import WhatToDoPage from '../components/WhatTodo';

import UserProjectLayoutPage from "../components/UsersPage/UserProjectLayoutPage";
import SingleUsersPage from "../components/UsersPage/SingleUsersPage";
import UserProfilesPage from "../components/UserProfilesPage/UserProfilesPage";
import UserProfileProjectLayoutPage from "../components/UserProfilesPage/UserProfileProjectLayoutPage";
import SingleUserProfilesPage from "../components/UserProfilesPage/SingleUserProfilesPage";
import BuildingProjectLayoutPage from "../components/BuildingsPage/BuildingProjectLayoutPage";
import SingleBuildingsPage from "../components/BuildingsPage/SingleBuildingsPage";
import MaintenanceRequestProjectLayoutPage from "../components/MaintenanceRequestsPage/MaintenanceRequestProjectLayoutPage";
import SingleMaintenanceRequestsPage from "../components/MaintenanceRequestsPage/SingleMaintenanceRequestsPage";
import WorkOrderProjectLayoutPage from "../components/WorkOrdersPage/WorkOrderProjectLayoutPage";
import SingleWorkOrdersPage from "../components/WorkOrdersPage/SingleWorkOrdersPage";
import MaintenanceHistoryProjectLayoutPage from "../components/MaintenanceHistoryPage/MaintenanceHistoryProjectLayoutPage";
import SingleMaintenanceHistoryPage from "../components/MaintenanceHistoryPage/SingleMaintenanceHistoryPage";
import InventoryProjectLayoutPage from "../components/InventoryPage/InventoryProjectLayoutPage";
import SingleInventoryPage from "../components/InventoryPage/SingleInventoryPage";
import EmployeeProjectLayoutPage from "../components/EmployeePage/EmployeeProjectLayoutPage";
import SingleEmployeePage from "../components/EmployeePage/SingleEmployeePage";
// ~cb-add-import~

const MyRouter = () => {
    return (
        <Routes>
            <Route path="" exact element={<Dashboard />} />
            <Route path="/dashboard" exact element={<Dashboard />} />
            <Route path="/login" exact element={<LoginPage />} />
            <Route path="/signup" exact element={<SignUpPage />} />

            <Route element={<ProtectedRoute redirectPath={'/login'} />}>
                <Route path="/account" exact element={<Account />} />
<Route path="/usersLayout/users" exact element={<UserProjectLayoutPage />} />
<Route path="/users/:singleUsersId" exact element={<SingleUsersPage />} />
<Route path="/users" exact element={<UserProjectLayoutPage />} />
<Route path="/users/:singleUsersId/userProfiles" exact element={<UserProfilesPage />} />
<Route path="/users/:singleUsersId/userProfiles/:singleUserProfilesId" exact element={<SingleUserProfilesPage />} />
<Route path="/userProfiles/:singleUserProfilesId" exact element={<SingleUserProfilesPage />} />
<Route path="/userProfiles" exact element={<UserProfileProjectLayoutPage />} />
<Route path="/buildings/:singleBuildingsId" exact element={<SingleBuildingsPage />} />
<Route path="/buildings" exact element={<BuildingProjectLayoutPage />} />
<Route path="/maintenanceRequests/:singleMaintenanceRequestsId" exact element={<SingleMaintenanceRequestsPage />} />
<Route path="/maintenanceRequests" exact element={<MaintenanceRequestProjectLayoutPage />} />
<Route path="/workOrders/:singleWorkOrdersId" exact element={<SingleWorkOrdersPage />} />
<Route path="/workOrders" exact element={<WorkOrderProjectLayoutPage />} />
<Route path="/maintenanceHistory/:singleMaintenanceHistoryId" exact element={<SingleMaintenanceHistoryPage />} />
<Route path="/maintenanceHistory" exact element={<MaintenanceHistoryProjectLayoutPage />} />
<Route path="/inventory/:singleInventoryId" exact element={<SingleInventoryPage />} />
<Route path="/inventory" exact element={<InventoryProjectLayoutPage />} />
<Route path="/employee/:singleEmployeeId" exact element={<SingleEmployeePage />} />
<Route path="/employee" exact element={<EmployeeProjectLayoutPage />} />
                {/* ~cb-add-protected-route~ */}
            </Route>
            {/* ~cb-add-route~ */}

            <Route path="*" element={<NoMatch />} />
        </Routes>
    );
};

export default MyRouter;
