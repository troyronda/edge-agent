/*
Copyright SecureKey Technologies Inc. All Rights Reserved.

SPDX-License-Identifier: Apache-2.0
*/

import DashboardLayout from "@/pages/Layout/DashboardLayout.vue";

import Dashboard from "@/pages/Dashboard.vue";
import TableList from "@/pages/TableList.vue";
import TablePresentation from "@/pages/TablePresentation.vue";
import RegisterWallet from "@/pages/RegisterWallet.vue";
import StoreCredentials from "@/pages/StoreVC.vue";
import GetCredentials from "@/pages/GetVC.vue";
import Interop from "@/pages/Interop.vue";
import DIDManagement from "@/pages/DIDManagement.vue";
const routes = [
    {
        path: "/",
        component: DashboardLayout,
        name: "dashboard",
        redirect: "dashboard",
        children: [
            {
                path: "dashboard",
                name: "Welcome to User Agent",
                component: Dashboard
            },
            {
                path: "ViewVC",
                name: "View Wallet",
                component: TableList
            },
            {
                path: "RegisterWallet",
                name: "Register Wallet",
                component: RegisterWallet
            },
            {
                path: "MyVC",
                name: "Generate Presentation",
                component: TablePresentation
            },
            {
                path: "Interop",
                name: "Interop",
                component: Interop
            },
            {
                path: "DIDManagement",
                name: "DID Management",
                component: DIDManagement
            }
        ]
    },
    {
        path: "/StoreVC",
        component: StoreCredentials
    },
    {
        path: "/GetVC",
        component: GetCredentials
    }

];
export default routes;
