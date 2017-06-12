webpackJsonp([1],Array(30).concat([
/* 30 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_SearchVehicle__ = __webpack_require__(94);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__components_SearchVehicle___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__components_SearchVehicle__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AskForMileage__ = __webpack_require__(89);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__components_AskForMileage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__components_AskForMileage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_DetailComponents_VehicleDetail__ = __webpack_require__(91);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__components_DetailComponents_VehicleDetail___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_2__components_DetailComponents_VehicleDetail__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_VehicleOverview__ = __webpack_require__(95);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__components_VehicleOverview___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3__components_VehicleOverview__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Notifcations__ = __webpack_require__(93);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4__components_Notifcations___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4__components_Notifcations__);






/* harmony default export */ __webpack_exports__["a"] = ([{
  path: '/searchVehicle',
  component: __WEBPACK_IMPORTED_MODULE_0__components_SearchVehicle___default.a
}, {
  path: '/vehicleDetail',
  component: __WEBPACK_IMPORTED_MODULE_2__components_DetailComponents_VehicleDetail___default.a
}, {
  path: '/askForMileage',
  component: __WEBPACK_IMPORTED_MODULE_1__components_AskForMileage___default.a
}, {
  path: '/vehicleOverview',
  component: __WEBPACK_IMPORTED_MODULE_3__components_VehicleOverview___default.a
}, {
  path: '/notificationOverview',
  component: __WEBPACK_IMPORTED_MODULE_4__components_Notifcations___default.a
}]);

/***/ }),
/* 31 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vuex__ = __webpack_require__(105);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__mutations__ = __webpack_require__(51);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3__actions__ = __webpack_require__(50);
/**
 * Created by dtcmedia on 26-05-17.
 */






__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */]);

const state = {
    "user": {
        "user_id": 1,
        "first_name": null
    },
    "currentVehicle": {
        "id": null,
        "user_id": null,
        "brand": null,
        "model": null,
        "mileage": null,
        "expectedYearlyMileage": null,
        "new_worth": null,
        "year": null,
        "license_plate": null,
        "cylinders": null,
        "vehicle_category": null,
        "free_weight": null,
        "engine_displacement": null,
        "apk_date": null,
        "engine_power": null,
        "created_at": null,
        "updated_at": null
    },
    "notificationCount": 0,
    "notifications": [],
    // {
    //     "id": null,
    //     "user_id": null,
    //     "description": null,
    //     "numberplate": null,
    //     "created_at": null,
    //     "updated_at": null
    // },
    "currentVehicleMaintenanceLeads": [{
        "id": null,
        "vehicle_id": null,
        "description": null,
        "data_source": null,
        "date_registered": null
    }],
    "vehiclesOfCurrentUser": [],
    "vehicleRetrievementIsLoading": false,
    "vehicleIsSaved": false,
    "maintenanceRetrievementIsLoading": false,
    "errors": {
        "vehicleNotFound": false
    },
    "applicationIsOffline": false
};

/**
 * creates a new store with its components
 */
/* harmony default export */ __webpack_exports__["a"] = (new __WEBPACK_IMPORTED_MODULE_1_vuex__["a" /* default */].Store({
    state,
    getters: null, // getters,
    actions: __WEBPACK_IMPORTED_MODULE_3__actions__, // actions,
    mutations: __WEBPACK_IMPORTED_MODULE_2__mutations__ // mutations
}));

/***/ }),
/* 32 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 33 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 34 */,
/* 35 */,
/* 36 */,
/* 37 */,
/* 38 */,
/* 39 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(56)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(41),
  /* template */
  __webpack_require__(100),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 40 */,
/* 41 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'app',
    methods: {
        getNotificationCount() {
            this.$store.dispatch('getNotificationCount', this.$store.state.user.user_id);
        }
    },
    computed: {
        notificationCount() {
            return this.$store.state.notificationCount ? this.$store.state.notificationCount : "0";
        }
    },
    created() {
        this.getNotificationCount();
    }
});

/***/ }),
/* 42 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'AskForMileage',
    data() {
        return {
            mileage: '',
            expectedYearlyMileage: '',
            disableSearchButton: true
        };
    },
    methods: {
        resetVehicleSaved() {
            this.mileage = '';
            this.expectedYearlyMileage = '';
            this.$store.commit('resetVehicleSaveStatus');
        },
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
        },
        getEngineDisplacementInLiters(displacement) {
            return (Math.round(displacement / 100) / 10).toFixed(1);
        },
        convertKwToPk(kw) {
            return Math.round(kw * 1.361);
        },
        saveVehicle() {
            this.$store.dispatch('saveCar', {
                userId: this.$store.state.user.user_id,
                licensePlate: this.$store.state.currentVehicle.license_plate,
                mileage: this.mileage !== '' ? this.mileage : 0,
                expectedYearlyMileage: this.expectedYearlyMileage !== '' ? this.expectedYearlyMileage : 0
            });
        }
    },
    computed: {
        currentVehicle() {
            return this.$store.state.currentVehicle;
        },
        vehicleSavedStatus() {
            return this.$store.state.vehicleIsSaved;
        }

    }
});

/***/ }),
/* 43 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'VehicleDataDetail',
    computed: {
        currentVehicle() {
            return this.$store.state.currentVehicle;
        },
        enginePowerKW() {
            return Math.round(this.$store.state.currentVehicle.engine_power);
        },
        enginePowerPK() {
            return Math.round(this.$store.state.currentVehicle.engine_power * 1.362);
        }
    }
});

/***/ }),
/* 44 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VehicleDataDetail_vue__ = __webpack_require__(90);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0__VehicleDataDetail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0__VehicleDataDetail_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VehicleMaintenanceDataDetail_vue__ = __webpack_require__(92);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1__VehicleMaintenanceDataDetail_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1__VehicleMaintenanceDataDetail_vue__);
//
//
//
//
//
//
//
//
//
//




/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'VehicleDetail',
    components: {
        VehicleDataDetail: __WEBPACK_IMPORTED_MODULE_0__VehicleDataDetail_vue___default.a,
        VehicleMaintenanceDataDetail: __WEBPACK_IMPORTED_MODULE_1__VehicleMaintenanceDataDetail_vue___default.a
    }
});

/***/ }),
/* 45 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//


/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'VehicleMaintenanceDataDetail',
    methods: {
        searchLicensePlate() {
            this.$store.dispatch('getVehicleMaintenanceDataFromLicensePlate', this.licensePlate);
        },
        getPrettyDate(dateString) {
            return dateString.slice(0, 10);
        }
    },
    computed: {
        licensePlate() {
            return this.$store.state.currentVehicle.license_plate;
        },
        maintenanceData() {
            return this.$store.state.currentVehicleMaintenanceLeads;
        },
        APKDate() {
            return this.$store.state.currentVehicle.apk_date;
        },
        maintenanceRetrievementIsLoading() {
            return this.$store.state.maintenanceRetrievementIsLoading;
        }
    },
    created() {
        this.searchLicensePlate();
    }

});

/***/ }),
/* 46 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'Notifications',
    data() {
        return {};
    },
    methods: {
        getNotificationsOfUser() {
            this.$store.dispatch('getNotificationsOfUser', this.$store.state.user.user_id);
        },
        getVehiclesOfUser() {
            this.$store.dispatch('getVehiclesOfUser', this.$store.state.user.user_id);
        },
        markNotificationsAsReadOnServer() {
            this.$store.dispatch('markNotificationsAsRead', this.$store.state.user.user_id);
        },
        getVehicleOfNotificationByLicenseplate(licenseplate) {
            for (var i = 0; i < this.vehiclesOfUser.length; i++) {
                if (this.vehiclesOfUser[i].license_plate === licenseplate) {
                    return this.vehiclesOfUser[i].brand + " " + this.vehiclesOfUser[i].model + ", kenteken " + this.vehiclesOfUser[i].license_plate;
                }
            }
            return "";
        }

    },
    computed: {
        notifications() {
            return this.$store.state.notifications;
        },
        vehiclesOfUser() {
            return this.$store.state.vehiclesOfCurrentUser;
        }
    },
    created() {
        this.markNotificationsAsReadOnServer();
        this.getNotificationsOfUser();
        if (this.vehiclesOfUser.length === 0) {
            this.getVehiclesOfUser();
        }
    }
});

/***/ }),
/* 47 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'SearchVehicles',
    data() {
        return {
            licensePlate: '',
            mileage: '',
            expectedYearlyMileage: '',
            disableSearchButton: true
        };
    },
    methods: {
        searchLicensePlate() {
            this.$store.dispatch('getVehicleDataFromLicensePlate', this.licensePlate);
        },
        resetVehicleNotFoundErrorMessage() {
            this.$store.commit('resetVehicleNotFoundErrorMessage');
        },
        resetVehicleSaved() {
            this.mileage = '';
            this.expectedYearlyMileage = '';
            this.$store.commit('resetVehicleSaveStatus');
        },
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
        },
        getMaxNumberOfLicensePlateLength() {
            if (this.licensePlate.indexOf("-") > 0) {
                return 8;
            } else {
                return 6;
            }
        },
        getEngineDisplacementInLiters(displacement) {
            return (Math.round(displacement / 100) / 10).toFixed(1);
        },
        convertKwToPk(kw) {
            return Math.round(kw * 1.361);
        },
        saveVehicle() {
            this.$store.dispatch('saveCar', {
                userId: this.$store.state.user.user_id,
                licensePlate: this.$store.state.currentVehicle.license_plate,
                mileage: this.mileage !== '' ? this.mileage : 0,
                expectedYearlyMileage: this.expectedYearlyMileage !== '' ? this.expectedYearlyMileage : 0
            });
        },
        checkIfLicensePlateIsCorrect() {
            if (this.licensePlate.indexOf("-") > 0 && this.licensePlate.length === 8) {
                this.disableSearchButton = false;
            } else if (this.licensePlate.indexOf("-") < 0 && this.licensePlate.length === 6) {
                this.disableSearchButton = false;
            } else {
                this.disableSearchButton = true;
            }
        }
    },
    computed: {
        currentVehicle() {
            return this.$store.state.currentVehicle;
        },
        vehicleStatusCode() {
            return this.$store.state.errors.vehicleNotFound;
        },
        showBasicCarInfo() {
            return this.$store.state.currentVehicle.brand || this.$store.state.errors.vehicleNotFound && this.$store.state.currentVehicle.brand;
        },
        vehicleSearchStatus() {
            return this.$store.state.vehicleRetrievementIsLoading;
        },
        vehicleSavedStatus() {
            return this.$store.state.vehicleIsSaved;
        },
        vehicleIsSavedToCurrentUser() {
            return this.$store.state.currentVehicle.user_id !== this.$store.state.user.user_id;
        }

    }
});

/***/ }),
/* 48 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//
//

/* harmony default export */ __webpack_exports__["default"] = ({
    name: 'httpTest',
    data() {
        return {
            selectedVehicleIds: []
        };
    },
    methods: {
        getVehiclesOfUser() {
            this.$store.dispatch('getVehiclesOfUser', this.$store.state.user.user_id);
        },
        capitalizeFirstLetter(string) {
            return string.charAt(0).toUpperCase() + string.toLowerCase().slice(1);
        },
        getEngineDisplacementInLiters(displacement) {
            return (Math.round(displacement / 100) / 10).toFixed(1);
        },
        convertKwToPk(kw) {
            return Math.round(kw * 1.361);
        },
        showVehicleDetail(index, id) {
            this.vehicleSelected(id);
            this.$store.commit('setCurrentCar', this.vehicles[index]);
        },
        vehicleSelected(id) {
            var isFound = false;
            for (var i = 0; i < this.selectedVehicleIds.length; i++) {
                if (this.selectedVehicleIds[i] === id) {
                    this.selectedVehicleIds.splice(i, 1);
                    isFound = true;
                }
            }
            if (!isFound) {
                this.selectedVehicleIds.push(id);
            }
        },
        checkIfChecked(id) {
            for (var i = 0; i < this.selectedVehicleIds.length; i++) {
                if (this.selectedVehicleIds[i] === id) {
                    return true;
                }
            }
            return false;
        },
        deleteVehicles() {
            console.log(this.selectedVehicleIds);
            this.$store.dispatch('deleteVehicles', this.selectedVehicleIds);

            this.selectedVehicleIds = [];
        }
    },
    computed: {
        vehicles() {
            return this.$store.state.vehiclesOfCurrentUser;
        },

        showList() {
            return this.$store.state.vehiclesOfCurrentUser.length > 0;
        },

        isOffline() {
            return this.$store.state.applicationIsOffline;
        }
    },

    created() {
        this.getVehiclesOfUser();
        console.log("create overview");
    }
});

/***/ }),
/* 49 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_vue__ = __webpack_require__(10);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_awesome__ = __webpack_require__(38);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_1_vue_awesome___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_1_vue_awesome__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_2__store_store__ = __webpack_require__(31);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuefire__ = __webpack_require__(40);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_3_vuefire___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_3_vuefire__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase__ = __webpack_require__(34);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_4_firebase___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_4_firebase__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_framework7__ = __webpack_require__(36);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_5_framework7___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_5_framework7__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_framework7_vue__ = __webpack_require__(35);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_6_framework7_vue___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_6_framework7_vue__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_localforage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_7_localforage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_7_localforage__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_framework7_dist_css_framework7_material_min_css__ = __webpack_require__(33);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_8_framework7_dist_css_framework7_material_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_8_framework7_dist_css_framework7_material_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_framework7_dist_css_framework7_material_colors_min_css__ = __webpack_require__(32);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_9_framework7_dist_css_framework7_material_colors_min_css___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_9_framework7_dist_css_framework7_material_colors_min_css__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__App__ = __webpack_require__(39);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_10__App___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_10__App__);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_11__router__ = __webpack_require__(30);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_offline_plugin_runtime__ = __webpack_require__(37);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_12_offline_plugin_runtime___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_12_offline_plugin_runtime__);
// The Vue build version to load with the `import` command
// (runtime-only or standalone) has been set in webpack.base.conf with an alias.






//F7 imports




// iOS specific styling
// import Framework7Theme  from 'framework7/dist/css/framework7.ios.min.css'
// import Framework7ThemeColors from 'framework7/dist/css/framework7.ios.colors.min.css'

// Android/Material specific styling







// Enable Offline capability
__WEBPACK_IMPORTED_MODULE_12_offline_plugin_runtime__["install"]({
    onUpdateReady: () => __WEBPACK_IMPORTED_MODULE_12_offline_plugin_runtime__["applyUpdate"](),
    onUpdated: () => window.swUpdate = true
});

// Registers Framework7 in Vue
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_6_framework7_vue___default.a);

//register vuefire
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].use(__WEBPACK_IMPORTED_MODULE_3_vuefire___default.a);

// Registers the icons of Fontawesome in Vue
__WEBPACK_IMPORTED_MODULE_0_vue__["default"].component('icon', __WEBPACK_IMPORTED_MODULE_1_vue_awesome___default.a);

__WEBPACK_IMPORTED_MODULE_0_vue__["default"].config.productionTip = false;

// let isSubscribed = false;
// let swRegistration = null;
// const applicationServerPublicKey = 'BKWxLBhtU2wxqktAFxK3T2S2WUL1jQvV_dNf7KHPLZQeVUbKo2zrKkWgW5zg_aZKfy2QR9700AFp6oTkZGTDJ5k';
//
// if ('serviceWorker' in navigator && 'PushManager' in window) {
//     console.log('Service Worker and Push is supported');
//
//     navigator.serviceWorker.register('sw.js')
//         .then(function (swReg) {
//             console.log('Service Worker is registered', swReg);
//
//             swRegistration = swReg;
//             checkRights();
//         })
//         .catch(function (error) {
//             console.error('Service Worker Error', error);
//         });
// } else {
//     console.warn('Push messaging is not supported');
//     pushButton.textContent = 'Push Not Supported';
// }
//
// function checkRights() {
//     // Set the initial subscription value
//
//     if (isSubscribed) {
//         // TODO: Unsubscribe user
//     } else {
//         subscribeUser();
//     }
//     swRegistration.pushManager.getSubscription()
//         .then(function (subscription) {
//             isSubscribed = !(subscription === null);
//
//             if (isSubscribed) {
//                 console.log('User IS subscribed.');
//             } else {
//                 console.log('User is NOT subscribed.');
//             }
//         });
// }
//
// function subscribeUser() {
//     const applicationServerKey = urlB64ToUint8Array(applicationServerPublicKey);
//     swRegistration.pushManager.subscribe({
//         userVisibleOnly: true,
//         applicationServerKey: applicationServerKey
//     })
//         .then(function (subscription) {
//             console.log('User is subscribed.');
//             console.dir(JSON.stringify(subscription));
//             console.log(JSON.stringify(subscription));
//             console.log(subscription.endpoint);
//             isSubscribed = true;
//         })
//         .catch(function (err) {
//             console.log('Failed to subscribe the user: ', err);
//         });
// }
//
// function urlB64ToUint8Array(base64String) {
//     const padding = '='.repeat((4 - base64String.length % 4) % 4);
//     const base64 = (base64String + padding)
//         .replace(/\-/g, '+')
//         .replace(/_/g, '/');
//
//     const rawData = window.atob(base64);
//     const outputArray = new Uint8Array(rawData.length);
//
//     for (let i = 0; i < rawData.length; ++i) {
//         outputArray[i] = rawData.charCodeAt(i);
//     }
//     return outputArray;
// }


var config = {
    apiKey: "AIzaSyCiX3Lyz9ARVeXS6FjumAEb4Lc92OcUlj0",
    authDomain: "mijn-garage.firebaseapp.com",
    databaseURL: "https://mijn-garage.firebaseio.com",
    projectId: "mijn-garage",
    storageBucket: "mijn-garage.appspot.com",
    messagingSenderId: "923966749182"
};

var firebaseApp = __WEBPACK_IMPORTED_MODULE_4_firebase___default.a.initializeApp(config);
const messaging = firebaseApp.messaging();
messaging.requestPermission().then(function () {
    console.log('have permission');
    return messaging.getToken();
}).then(function (token) {
    console.log(token);
    __WEBPACK_IMPORTED_MODULE_2__store_store__["a" /* default */].dispatch('updateUserNotificationId', token);
}).catch(function (err) {
    console.log('error occured');
});

messaging.onMessage(function (payload) {
    console.log('onMessage: ', payload);
    var userId = payload.data.userId;
    console.log('userId to add: ', userId);
    __WEBPACK_IMPORTED_MODULE_2__store_store__["a" /* default */].dispatch('getNotificationCount', userId);
});

// Creates new
new __WEBPACK_IMPORTED_MODULE_0_vue__["default"]({
    el: '#app',
    store: __WEBPACK_IMPORTED_MODULE_2__store_store__["a" /* default */],
    template: '<App/>',
    framework7: {
        root: '#app',
        material: true,
        routes: __WEBPACK_IMPORTED_MODULE_11__router__["a" /* default */],
        pushState: true,
        swipePanel: 'left'
    },
    components: { App: __WEBPACK_IMPORTED_MODULE_10__App___default.a }
});

/***/ }),
/* 50 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/**
 * Gets vehicle from the Mijn Garage API by license plate
 * @param {Object} commit
 * @param {String} licensePlate
 */

var apiUrl = "https://192.168.2.57/mijn-garage-backend/public/api/v1/";

const getVehicleDataFromLicensePlate = ({ commit }, licensePlate) => {
    console.log(licensePlate);
    licensePlate = licensePlate.replace("-", "");
    licensePlate = licensePlate.replace("-", "");
    commit('setVehicleRetrievalStatus');

    var myHeaders = new Headers();

    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    var myRequest = new Request(apiUrl + "cardata/" + licensePlate.toUpperCase(), myInit);

    fetch(myRequest).then(function (response) {
        return response.json();
    }).then(function (returnedValue) {
        console.log(returnedValue);
        var jsonObject = returnedValue;

        commit('setCurrentCar', jsonObject);
        commit('resetVehicleRetrievalStatus');
    }).catch(function (err) {
        // Error :(
        commit('resetVehicleRetrievalStatus');
        commit('setVehicleNotFoundErrorMessage');
        console.log(err);
    });
};
/* harmony export (immutable) */ __webpack_exports__["getVehicleDataFromLicensePlate"] = getVehicleDataFromLicensePlate;


const getVehicleMaintenanceDataFromLicensePlate = ({ commit }, licensePlate) => {
    console.log(licensePlate);
    licensePlate = licensePlate.replace("-", "");
    licensePlate = licensePlate.replace("-", "");
    commit('setMaintenanceRetrievalStatus');

    var myHeaders = new Headers();

    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    var myRequest = new Request(apiUrl + "carmaintenancedata/" + licensePlate.toUpperCase(), myInit);

    fetch(myRequest).then(function (response) {
        return response.json();
    }).then(function (returnedValue) {
        console.log(returnedValue);
        var jsonObject = returnedValue;
        commit('setCurrentMaintenanceLeads', jsonObject);
        commit('resetMaintenanceRetrievalStatus');
    }).catch(function (err) {
        // Error :(
        console.log(err);
    });
};
/* harmony export (immutable) */ __webpack_exports__["getVehicleMaintenanceDataFromLicensePlate"] = getVehicleMaintenanceDataFromLicensePlate;


const saveCar = ({ commit }, saveData) => {
    var licensePlate = saveData.licensePlate.replace("-", "");
    licensePlate = licensePlate.replace("-", "");
    licensePlate = licensePlate.toUpperCase();

    var myHeaders = new Headers();

    var payload = {
        userId: saveData.userId,
        licensePlate: licensePlate,
        mileage: saveData.mileage,
        expectedYearlyMileage: saveData.expectedYearlyMileage
    };

    var data = new FormData();
    data.append("json", JSON.stringify(payload));

    var myInit = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        mode: 'no-cors',
        cache: 'default'
    };

    var myRequest = new Request(apiUrl + "savevehicle", myInit);

    fetch(myRequest).then(function (response) {}).then(function () {
        console.log("done!");

        commit('setVehicleSaveStatus');
        commit('setVehicleUserIdAfterSaving');
    }).catch(function (err) {
        // Error :(
        console.log(err);
    });
};
/* harmony export (immutable) */ __webpack_exports__["saveCar"] = saveCar;


const deleteVehicles = ({ commit }, arrayOfVehicleIds) => {
    var myHeaders = new Headers();
    //
    // var payload = {
    //     vehicles: arrayOfVehicleIds,
    // };

    var data = new FormData();
    data.append("vehicles", JSON.stringify(arrayOfVehicleIds));

    var myInit = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        mode: 'no-cors',
        cache: 'default'
    };

    var myRequest = new Request(apiUrl + "deletevehicles", myInit);

    fetch(myRequest).then(function (response) {}).then(function () {
        console.log("done!");
        getVehiclesOfUser({ commit }, 1);
    }).catch(function (err) {
        // Error :(
        console.log(err);
    });
};
/* harmony export (immutable) */ __webpack_exports__["deleteVehicles"] = deleteVehicles;


const getVehiclesOfUser = ({ commit }, userId) => {
    var myHeaders = new Headers();

    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    var myRequest = new Request(apiUrl + "getvehiclesofuser/" + userId, myInit);

    fetch(myRequest).then(function (response) {
        return response.json();
    }).then(function (returnedValue) {
        console.log(returnedValue);
        var jsonObject = returnedValue;

        commit('setVehiclesOfUser', jsonObject);
        commit('setOnlineMode');
    }).catch(function (err) {
        // Error :(
        console.log("Server not available, getting vehicles from local storage");
        commit("setVehiclesOfUserFromLocalStorage");
        commit("setOfflineMode");
    });
};
/* harmony export (immutable) */ __webpack_exports__["getVehiclesOfUser"] = getVehiclesOfUser;


const getNotificationsOfUser = ({ commit }, userId) => {
    var myHeaders = new Headers();

    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    var myRequest = new Request(apiUrl + "getnotificationsofuser/" + userId, myInit);

    fetch(myRequest).then(function (response) {
        return response.json();
    }).then(function (returnedValue) {
        console.log(returnedValue);
        var jsonObject = returnedValue;
        commit('setNotifications', jsonObject);
    }).catch(function (err) {
        // Error :(
        console.log("Server not available, getting vehicles from local storage");
    });
};
/* harmony export (immutable) */ __webpack_exports__["getNotificationsOfUser"] = getNotificationsOfUser;


const getNotificationCount = ({ commit }, userId) => {
    var myHeaders = new Headers();

    var myInit = {
        method: 'GET',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    var myRequest = new Request(apiUrl + "getnotificationcount/" + userId, myInit);

    fetch(myRequest).then(function (response) {
        return response.json();
    }).then(function (returnedValue) {
        console.log(returnedValue);
        commit('setNotificationCounter', returnedValue);
    }).catch(function (err) {
        // Error :(
        console.log("Could not get amount of notifications");
    });
};
/* harmony export (immutable) */ __webpack_exports__["getNotificationCount"] = getNotificationCount;


const markNotificationsAsRead = ({ commit }, userId) => {
    var myHeaders = new Headers();

    var myInit = {
        method: 'POST',
        headers: myHeaders,
        mode: 'cors',
        cache: 'default'
    };

    var myRequest = new Request(apiUrl + "marknotificationsasread/" + userId, myInit);

    fetch(myRequest).then(function (response) {}).then(function () {
        console.log("Notification marked as read");
        commit('setNotificationCounterToZero');
    }).catch(function (err) {
        // Error :(
        console.log("Cannot set notifications to zero on server");
    });
};
/* harmony export (immutable) */ __webpack_exports__["markNotificationsAsRead"] = markNotificationsAsRead;


const updateUserNotificationId = ({ commit, state }, pushNotificationId) => {

    var myHeaders = new Headers();

    console.log(state);

    var payload = {
        userId: state.user.user_id,
        pushNotificationId: pushNotificationId

    };
    console.log(payload);
    var data = new FormData();
    data.append("json", JSON.stringify(payload));

    var myInit = {
        method: 'POST',
        headers: myHeaders,
        body: data,
        mode: 'no-cors',
        cache: 'default'
    };

    var myRequest = new Request(apiUrl + "updateuserpushid", myInit);

    fetch(myRequest).then(function (response) {}).then(function () {
        console.log("update done!");
    }).catch(function (err) {
        // Error :(
        console.log(err);
    });
};
/* harmony export (immutable) */ __webpack_exports__["updateUserNotificationId"] = updateUserNotificationId;


/***/ }),
/* 51 */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
Object.defineProperty(__webpack_exports__, "__esModule", { value: true });
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_localforage__ = __webpack_require__(18);
/* harmony import */ var __WEBPACK_IMPORTED_MODULE_0_localforage___default = __webpack_require__.n(__WEBPACK_IMPORTED_MODULE_0_localforage__);
/**
 * Sets the state with a new car
 * @param {Object} state
 * @param {String} newCarJson
 */

const setCurrentCar = (state, newCarJson) => {
  state.currentVehicle = newCarJson;
};
/* harmony export (immutable) */ __webpack_exports__["setCurrentCar"] = setCurrentCar;


/**
 * Sets the vehicleNotFound status to true
 * @param state
 */
const setVehicleNotFoundErrorMessage = state => {
  state.errors.vehicleNotFound = true;
};
/* harmony export (immutable) */ __webpack_exports__["setVehicleNotFoundErrorMessage"] = setVehicleNotFoundErrorMessage;


/**
 * Sets the vehicleNotFound status to false
 * @param state
 */
const resetVehicleNotFoundErrorMessage = state => {
  state.errors.vehicleNotFound = false;
};
/* harmony export (immutable) */ __webpack_exports__["resetVehicleNotFoundErrorMessage"] = resetVehicleNotFoundErrorMessage;

/**
 * Sets the retrieval status of the car to true
 * @param {Object} state
 */
const setVehicleRetrievalStatus = state => {
  state.vehicleRetrievementIsLoading = true;
};
/* harmony export (immutable) */ __webpack_exports__["setVehicleRetrievalStatus"] = setVehicleRetrievalStatus;


/**
 * Sets the retrieval status of the car to false
 * @param {Object} state
 */
const resetVehicleRetrievalStatus = state => {
  state.vehicleRetrievementIsLoading = false;
};
/* harmony export (immutable) */ __webpack_exports__["resetVehicleRetrievalStatus"] = resetVehicleRetrievalStatus;


/**
 * Sets the state with a new car
 * @param {Object} state
 * @param {String} newCarJson
 */
const setCurrentMaintenanceLeads = (state, newMaintenanceJson) => {
  state.currentVehicleMaintenanceLeads = newMaintenanceJson;
};
/* harmony export (immutable) */ __webpack_exports__["setCurrentMaintenanceLeads"] = setCurrentMaintenanceLeads;


/**
 *
 * @param state
 * @param notificationJson
 */
const setNotifications = (state, notificationJson) => {
  state.notifications = notificationJson;
};
/* harmony export (immutable) */ __webpack_exports__["setNotifications"] = setNotifications;


/**
 *
 * @param state
 * @param notificationCount
 */
const setNotificationCounter = (state, notificationCount) => {
  state.notificationCount = notificationCount;
};
/* harmony export (immutable) */ __webpack_exports__["setNotificationCounter"] = setNotificationCounter;


/**
 *
 * @param state
 */
const setNotificationCounterToZero = state => {
  state.notificationCount = 0;
};
/* harmony export (immutable) */ __webpack_exports__["setNotificationCounterToZero"] = setNotificationCounterToZero;


/**
 * Sets the retrieval status of the maintenancedata to true
 * @param {Object} state
 */
const setMaintenanceRetrievalStatus = state => {
  state.maintenanceRetrievementIsLoading = true;
};
/* harmony export (immutable) */ __webpack_exports__["setMaintenanceRetrievalStatus"] = setMaintenanceRetrievalStatus;


/**
 * Sets the retrieval status of the maintenancedata to false
 * @param {Object} state
 */
const resetMaintenanceRetrievalStatus = state => {
  state.maintenanceRetrievementIsLoading = false;
};
/* harmony export (immutable) */ __webpack_exports__["resetMaintenanceRetrievalStatus"] = resetMaintenanceRetrievalStatus;


/**
 * set the status of the saving of the vehecle t
 * @param state
 */
const setVehicleSaveStatus = state => {
  state.vehicleIsSaved = true;
};
/* harmony export (immutable) */ __webpack_exports__["setVehicleSaveStatus"] = setVehicleSaveStatus;


/**
 *
 * @param state
 */
const resetVehicleSaveStatus = state => {
  state.vehicleIsSaved = false;
};
/* harmony export (immutable) */ __webpack_exports__["resetVehicleSaveStatus"] = resetVehicleSaveStatus;


/**
 *
 * @param state
 */
const setVehicleUserIdAfterSaving = state => {
  state.currentVehicle.user_id = state.user.user_id;
};
/* harmony export (immutable) */ __webpack_exports__["setVehicleUserIdAfterSaving"] = setVehicleUserIdAfterSaving;


/**
 *
 * @param state
 */
const setOfflineMode = state => {
  state.applicationIsOffline = true;
};
/* harmony export (immutable) */ __webpack_exports__["setOfflineMode"] = setOfflineMode;

/**
 *
 * @param state
 */
const setOnlineMode = state => {
  state.applicationIsOffline = false;
};
/* harmony export (immutable) */ __webpack_exports__["setOnlineMode"] = setOnlineMode;


/**
 *
 * @param state
 * @param arrayOfUserVehicles
 */
const setVehiclesOfUser = (state, arrayOfUserVehicles) => {
  __WEBPACK_IMPORTED_MODULE_0_localforage__["setItem"]('userVehicles', arrayOfUserVehicles, function (err) {});
  state.vehiclesOfCurrentUser = arrayOfUserVehicles;
};
/* harmony export (immutable) */ __webpack_exports__["setVehiclesOfUser"] = setVehiclesOfUser;


/**
 *
 * @param state
 */
const setVehiclesOfUserFromLocalStorage = state => {

  __WEBPACK_IMPORTED_MODULE_0_localforage__["getItem"]('userVehicles', function (err, value) {
    console.log(value);
    state.vehiclesOfCurrentUser = value;
  });
};
/* harmony export (immutable) */ __webpack_exports__["setVehiclesOfUserFromLocalStorage"] = setVehiclesOfUserFromLocalStorage;


/***/ }),
/* 52 */,
/* 53 */,
/* 54 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 55 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 56 */
/***/ (function(module, exports) {

// removed by extract-text-webpack-plugin

/***/ }),
/* 57 */,
/* 58 */,
/* 59 */,
/* 60 */,
/* 61 */,
/* 62 */,
/* 63 */,
/* 64 */,
/* 65 */,
/* 66 */,
/* 67 */,
/* 68 */,
/* 69 */,
/* 70 */,
/* 71 */,
/* 72 */,
/* 73 */,
/* 74 */,
/* 75 */,
/* 76 */,
/* 77 */,
/* 78 */,
/* 79 */,
/* 80 */,
/* 81 */,
/* 82 */,
/* 83 */,
/* 84 */,
/* 85 */,
/* 86 */,
/* 87 */,
/* 88 */,
/* 89 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(42),
  /* template */
  __webpack_require__(103),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 90 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(43),
  /* template */
  __webpack_require__(102),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 91 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(44),
  /* template */
  __webpack_require__(101),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 92 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(45),
  /* template */
  __webpack_require__(96),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 93 */
/***/ (function(module, exports, __webpack_require__) {

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(46),
  /* template */
  __webpack_require__(98),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 94 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(54)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(47),
  /* template */
  __webpack_require__(97),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 95 */
/***/ (function(module, exports, __webpack_require__) {


/* styles */
__webpack_require__(55)

var Component = __webpack_require__(2)(
  /* script */
  __webpack_require__(48),
  /* template */
  __webpack_require__(99),
  /* scopeId */
  null,
  /* cssModules */
  null
)

module.exports = Component.exports


/***/ }),
/* 96 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('f7-block', [_c('f7-list', [_c('f7-list-item', {
    attrs: {
      "title": "Onderhoudsdata",
      "divider": ""
    }
  }), _vm._v(" "), _c('f7-list-item', {
    attrs: {
      "title": "APK datum"
    }
  }, [_vm._v(_vm._s(_vm.APKDate))]), _vm._v(" "), (_vm.maintenanceRetrievementIsLoading) ? _c('f7-list-item', [_c('div', {
    staticClass: "spinner"
  }, [_c('f7-preloader', {
    attrs: {
      "color": "amber",
      "size": "50px"
    }
  })], 1)]) : _vm._e(), _vm._v(" "), _vm._l((_vm.maintenanceData), function(maintenanceLead) {
    return (!_vm.maintenanceRetrievementIsLoading) ? _c('f7-list-item', [_vm._v("\n            " + _vm._s(maintenanceLead.description) + ".\n            "), _c('small'), _vm._v(" "), _c('div', {
      staticClass: "item-after"
    }, [_c('span', {
      staticClass: "badge bg-amber"
    }, [_vm._v(_vm._s(_vm.getPrettyDate(maintenanceLead.date_registered)))])])]) : _vm._e()
  })], 2)], 1)
},staticRenderFns: []}

/***/ }),
/* 97 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('f7-page', [_c('f7-navbar', {
    attrs: {
      "title": "Voertuig zoeken met kenteken",
      "back-link": "Back",
      "sliding": ""
    }
  }), _vm._v(" "), _c('f7-block', {
    attrs: {
      "inner": ""
    }
  }, [_c('p', [_vm._v("Zoek uw voertuig met het kenteken, bekijk de info en sla hem op!")]), _vm._v(" "), _c('f7-list', {
    attrs: {
      "form": ""
    }
  }, [_c('f7-grid', [_c('f7-col', {
    attrs: {
      "width": "5",
      "tablet-width": "25"
    }
  }), _vm._v(" "), _c('f7-col', {
    attrs: {
      "width": "90",
      "tablet-width": "25"
    }
  }, [_c('div', {
    staticClass: "countryLetter"
  }, [_vm._v("\n                        NL\n                    ")]), _vm._v(" "), _c('div', {
    staticClass: "numberplate"
  }, [_c('f7-input', {
    attrs: {
      "id": "numberplateInput",
      "type": "text",
      "placeholder": "Kenteken",
      "onkeypress": _vm.checkIfLicensePlateIsCorrect(),
      "maxlength": _vm.getMaxNumberOfLicensePlateLength()
    },
    on: {
      "click": _vm.resetVehicleNotFoundErrorMessage
    },
    model: {
      value: (_vm.licensePlate),
      callback: function($$v) {
        _vm.licensePlate = $$v
      },
      expression: "licensePlate"
    }
  })], 1)]), _vm._v(" "), _c('f7-col', {
    attrs: {
      "width": "5",
      "tablet-width": "25"
    }
  })], 1), _vm._v(" "), (_vm.vehicleStatusCode) ? _c('f7-col', {
    staticClass: "errorCode",
    attrs: {
      "width": "100",
      "tablet-width": "100"
    }
  }, [_vm._v("\n                Voertuig niet gevonden\n            ")]) : _vm._e()], 1), _vm._v(" "), _c('f7-button', {
    attrs: {
      "disabled": _vm.disableSearchButton
    },
    on: {
      "click": _vm.searchLicensePlate
    }
  }, [_vm._v("Haal auto op ")]), _vm._v(" "), _c('f7-list', [(_vm.showBasicCarInfo) ? _c('f7-list-item', {
    staticClass: "centerText",
    attrs: {
      "title": "Gevonden voertuig",
      "divider": ""
    }
  }) : _vm._e()], 1), _vm._v(" "), (_vm.showBasicCarInfo) ? _c('f7-grid', {
    staticClass: "centerText"
  }, [_c('f7-col', {
    attrs: {
      "width": "5",
      "tablet-width": "25"
    }
  }), _vm._v(" "), _c('f7-col', {
    attrs: {
      "width": "45",
      "tablet-width": "25"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.capitalizeFirstLetter(_vm.currentVehicle.brand)) + "\n            ")]), _vm._v(" "), _c('f7-col', {
    attrs: {
      "width": "45",
      "tablet-width": "25"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.currentVehicle.model.toLowerCase()) + "\n            ")]), _vm._v(" "), _c('f7-col', {
    attrs: {
      "width": "5",
      "tablet-width": "25"
    }
  }), _vm._v(" "), _c('f7-col', {
    attrs: {
      "width": "100",
      "tablet-width": "100"
    }
  }, [_c('i', [_vm._v("\n                    " + _vm._s(_vm.getEngineDisplacementInLiters(_vm.currentVehicle.engine_displacement)) + "L\n                    " + _vm._s(_vm.currentVehicle.fuel.toLowerCase()) + ",\n                    " + _vm._s(_vm.convertKwToPk(_vm.currentVehicle.engine_power)) + "pk,\n                    kenteken " + _vm._s(_vm.currentVehicle.license_plate.toUpperCase()) + "\n                ")])])], 1) : _vm._e(), _vm._v(" "), (_vm.vehicleSearchStatus) ? _c('div', {
    staticClass: "spinner"
  }, [_c('f7-preloader', {
    attrs: {
      "color": "amber",
      "size": "50px"
    }
  })], 1) : _vm._e(), _vm._v(" "), (_vm.showBasicCarInfo) ? _c('f7-buttons', {
    attrs: {
      "theme": "amber"
    }
  }, [(_vm.vehicleIsSavedToCurrentUser) ? _c('f7-button', {
    attrs: {
      "href": "/askForMileage/"
    }
  }, [_vm._v("Voertuig opslaan")]) : _vm._e(), _vm._v(" "), _c('f7-button', {
    attrs: {
      "href": "/vehicleDetail/"
    }
  }, [_vm._v("Voertuig detail")])], 1) : _vm._e()], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 98 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('f7-page', [_c('f7-navbar', {
    attrs: {
      "sliding": ""
    }
  }, [_c('f7-nav-left', [_c('f7-link', [_c('icon', {
    attrs: {
      "name": "wrench",
      "scale": "1.5"
    }
  })], 1)], 1), _vm._v(" "), _c('f7-nav-center', [_c('p', [_vm._v("Notificaties")])]), _vm._v(" "), _c('f7-nav-right', [_c('f7-link', {
    attrs: {
      "back": ""
    }
  }, [_c('icon', {
    attrs: {
      "name": "chevron-down",
      "scale": "1.5"
    }
  })], 1)], 1)], 1), _vm._v(" "), _c('f7-block', _vm._l((_vm.notifications), function(notification) {
    return _c('f7-grid', [_c('f7-col', {
      attrs: {
        "width": "5",
        "tablet-width": "25"
      }
    }), _vm._v(" "), _c('f7-col', {
      attrs: {
        "width": "90",
        "tablet-width": "50"
      }
    }, [_vm._v("\n                " + _vm._s(notification.description) + "\n            ")]), _vm._v(" "), _c('f7-col', {
      attrs: {
        "width": "5",
        "tablet-width": "25"
      }
    }), _vm._v(" "), _c('f7-col', {
      staticClass: "centerText",
      attrs: {
        "width": "100",
        "tablet-width": "100"
      }
    }, [_c('i', [_vm._v("\n                    " + _vm._s(_vm.getVehicleOfNotificationByLicenseplate(notification.license_plate)) + "\n                ")])])], 1)
  }))], 1)
},staticRenderFns: []}

/***/ }),
/* 99 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('f7-page', [_c('f7-navbar', {
    attrs: {
      "title": "Mijn Voertuigen",
      "back-link": "terug",
      "sliding": ""
    }
  }), _vm._v(" "), _c('f7-block', [(_vm.showList) ? _c('f7-list', _vm._l((_vm.vehicles), function(vehicle, index) {
    return _c('f7-list-item', {
      attrs: {
        "checkbox": "",
        "name": "my-checkbox",
        "checked": _vm.checkIfChecked(vehicle.id)
      },
      on: {
        "click": function($event) {
          _vm.vehicleSelected(vehicle.id)
        }
      }
    }, [_c('f7-list-item', {
      attrs: {
        "link": "/vehicleDetail/"
      },
      on: {
        "click": function($event) {
          _vm.showVehicleDetail(index, vehicle.id)
        }
      }
    }, [_c('f7-grid', {
      staticClass: "vehicleOverviewGrid"
    }, [_c('f7-col', {
      attrs: {
        "width": "5",
        "tablet-width": "25"
      }
    }), _vm._v(" "), _c('f7-col', {
      staticClass: "vehicleOverviewText",
      attrs: {
        "width": "90",
        "tablet-width": "50"
      }
    }, [_vm._v("\n                            " + _vm._s(_vm.capitalizeFirstLetter(vehicle.brand)) + " " + _vm._s(vehicle.model.toLowerCase()) + "\n                        ")]), _vm._v(" "), _c('f7-col', {
      attrs: {
        "width": "5",
        "tablet-width": "25"
      }
    }), _vm._v(" "), _c('f7-col', {
      staticClass: "centerText",
      attrs: {
        "width": "100",
        "tablet-width": "100"
      }
    }, [_c('i', [_vm._v("\n                                " + _vm._s(_vm.getEngineDisplacementInLiters(vehicle.engine_displacement)) + "L\n                                " + _vm._s(vehicle.fuel.toLowerCase()) + ",\n                                " + _vm._s(_vm.convertKwToPk(vehicle.engine_power)) + "pk,\n                                kenteken " + _vm._s(vehicle.license_plate.toUpperCase()) + "\n                            ")])])], 1)], 1)], 1)
  })) : _vm._e(), _vm._v(" "), (_vm.selectedVehicleIds.length > 0 && !_vm.isOffline) ? _c('f7-button', {
    attrs: {
      "color": "red"
    },
    on: {
      "click": _vm.deleteVehicles
    }
  }, [_vm._v("Verwijder geselecteerde voertuigen (" + _vm._s(_vm.selectedVehicleIds.length) + ")")]) : _vm._e(), _vm._v(" "), (_vm.selectedVehicleIds.length > 0 && _vm.isOffline) ? _c('f7-button', {
    attrs: {
      "disabled": "",
      "color": "red"
    }
  }, [_vm._v("De app is offline, verwijderen niet mogelijk")]) : _vm._e()], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 100 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('div', {
    staticClass: "layout-dark theme-amber",
    attrs: {
      "id": "app"
    }
  }, [_c('f7-statusbar'), _vm._v(" "), _c('f7-panel', {
    attrs: {
      "left": "",
      "cover": "",
      "layout": "dark"
    }
  }, [_c('f7-view', {
    attrs: {
      "id": "left-panel-view",
      "navbar-through": "",
      "dynamic-navbar": true
    }
  }, [(_vm.$theme.ios) ? _c('f7-navbar', {
    attrs: {
      "title": "Menu",
      "sliding": ""
    }
  }) : _vm._e(), _vm._v(" "), _c('f7-pages', [_c('f7-page', [(_vm.$theme.material) ? _c('f7-navbar', {
    attrs: {
      "title": "Menu",
      "sliding": ""
    }
  }) : _vm._e(), _vm._v(" "), _c('f7-block-title', [_vm._v("Instellingen")]), _vm._v(" "), _c('f7-list', [_c('f7-list-item', {
    attrs: {
      "link": "/lol",
      "title": "Uitloggen"
    }
  })], 1)], 1)], 1)], 1)], 1), _vm._v(" "), _c('f7-views', [_c('f7-view', {
    attrs: {
      "id": "main-view",
      "navbar-through": "",
      "dynamic-navbar": true,
      "main": ""
    }
  }, [(_vm.$theme.ios) ? _c('f7-navbar', [_c('f7-nav-left', [_c('f7-link', {
    attrs: {
      "icon": "icon-bars",
      "open-panel": "left"
    }
  })], 1), _vm._v(" "), _c('f7-nav-center', {
    attrs: {
      "sliding": ""
    }
  }, [_vm._v("Mijn Garage")]), _vm._v(" "), _c('f7-link', [_c('icon', {
    attrs: {
      "name": "wrench",
      "scale": "1.5"
    }
  })], 1)], 1) : _vm._e(), _vm._v(" "), _c('f7-pages', [_c('f7-page', [(_vm.$theme.material) ? _c('f7-navbar', [_c('f7-nav-left', [_c('f7-link', {
    attrs: {
      "icon": "icon-bars",
      "open-panel": "left"
    }
  })], 1), _vm._v(" "), _c('f7-nav-center', {
    attrs: {
      "sliding": ""
    }
  }, [_vm._v("Mijn Garage")]), _vm._v(" "), _c('f7-nav-right', [_c('f7-link', {
    attrs: {
      "href": "/notificationOverview/"
    }
  }, [_c('f7-chip', {
    attrs: {
      "text": _vm.notificationCount,
      "bg": "red",
      "color": "white"
    }
  }), _vm._v(" "), _c('icon', {
    staticClass: "wrenchPadding",
    attrs: {
      "name": "wrench",
      "scale": "1.5"
    }
  })], 1)], 1)], 1) : _vm._e(), _vm._v(" "), _c('f7-block-title', [_vm._v("Welkom bij de Mijn garage!")]), _vm._v(" "), _c('f7-block', {
    attrs: {
      "inner": ""
    }
  }, [_c('p', [_vm._v("Welkom het in het prototype van de Mijn garage applicatie. Probeer de functie "), _c('i', [_vm._v("Voertuig opzoeken met kenteken")]), _vm._v("\n                            nu uit!")])]), _vm._v(" "), _c('f7-block-title', [_vm._v("Kies een van de onderstaande opties")]), _vm._v(" "), _c('f7-list', [_c('f7-list-item', {
    attrs: {
      "link": "/searchVehicle/",
      "title": "Voertuig opzoeken met kenteken"
    }
  }), _vm._v(" "), _c('f7-list-item', {
    attrs: {
      "link": "/vehicleOverview/",
      "title": "Mijn voertuigen"
    }
  })], 1)], 1)], 1)], 1)], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 101 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('f7-pages', [_c('f7-page', [_c('f7-navbar', {
    attrs: {
      "title": "Voertuig Detail",
      "back-link": "Back",
      "sliding": ""
    }
  }), _vm._v(" "), _c('VehicleDataDetail'), _vm._v(" "), _c('VehicleMaintenanceDataDetail')], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 102 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('f7-block', [_c('f7-list', [_c('f7-list-item', {
    attrs: {
      "title": "Autogegevens",
      "divider": ""
    }
  }), _vm._v(" "), _c('f7-list-item', {
    attrs: {
      "title": "Merk"
    }
  }, [_vm._v(_vm._s(_vm.currentVehicle.brand))]), _vm._v(" "), _c('f7-list-item', {
    attrs: {
      "title": "Model"
    }
  }, [_vm._v(_vm._s(_vm.currentVehicle.model))]), _vm._v(" "), _c('f7-list-item', {
    attrs: {
      "title": "Kenteken"
    }
  }, [_vm._v(_vm._s(_vm.currentVehicle.license_plate))]), _vm._v(" "), _c('f7-list-item', {
    attrs: {
      "title": "Voertuigcategorie"
    }
  }, [_vm._v(_vm._s(_vm.currentVehicle.vehicle_category))]), _vm._v(" "), _c('f7-list-item', {
    attrs: {
      "title": "Gewicht"
    }
  }, [_vm._v(_vm._s(_vm.currentVehicle.free_weight) + "kg")]), _vm._v(" "), _c('f7-list-item', {
    attrs: {
      "title": "Bouwjaar"
    }
  }, [_vm._v(_vm._s(_vm.currentVehicle.year))]), _vm._v(" "), _c('f7-list-item', {
    attrs: {
      "title": "Motorgegevens",
      "divider": ""
    }
  }), _vm._v(" "), _c('f7-list-item', {
    attrs: {
      "title": "Vermogen"
    }
  }, [_vm._v(_vm._s(_vm.enginePowerKW) + "kw/" + _vm._s(_vm.enginePowerPK) + "pk")]), _vm._v(" "), _c('f7-list-item', {
    attrs: {
      "title": "Cilinders"
    }
  }, [_vm._v(_vm._s(_vm.currentVehicle.cylinders))]), _vm._v(" "), _c('f7-list-item', {
    attrs: {
      "title": "Motorinhoud"
    }
  }, [_vm._v(_vm._s(_vm.currentVehicle.engine_displacement) + "cc")])], 1)], 1)
},staticRenderFns: []}

/***/ }),
/* 103 */
/***/ (function(module, exports) {

module.exports={render:function (){var _vm=this;var _h=_vm.$createElement;var _c=_vm._self._c||_h;
  return _c('f7-page', [_c('f7-navbar', {
    attrs: {
      "title": "Voertuig opslaan",
      "back-link": "Annuleren",
      "sliding": ""
    }
  }), _vm._v(" "), _c('f7-block', [_c('f7-grid', {
    staticClass: "centerText"
  }, [_c('f7-col', {
    attrs: {
      "width": "5",
      "tablet-width": "25"
    }
  }), _vm._v(" "), _c('f7-col', {
    attrs: {
      "width": "45",
      "tablet-width": "25"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.capitalizeFirstLetter(_vm.currentVehicle.brand)) + "\n            ")]), _vm._v(" "), _c('f7-col', {
    attrs: {
      "width": "45",
      "tablet-width": "25"
    }
  }, [_vm._v("\n                " + _vm._s(_vm.currentVehicle.model.toLowerCase()) + "\n            ")]), _vm._v(" "), _c('f7-col', {
    attrs: {
      "width": "5",
      "tablet-width": "25"
    }
  }), _vm._v(" "), _c('f7-col', {
    attrs: {
      "width": "100",
      "tablet-width": "100"
    }
  }, [_c('i', [_vm._v("\n                    " + _vm._s(_vm.getEngineDisplacementInLiters(_vm.currentVehicle.engine_displacement)) + "L\n                    " + _vm._s(_vm.currentVehicle.fuel.toLowerCase()) + ",\n                    " + _vm._s(_vm.convertKwToPk(_vm.currentVehicle.engine_power)) + "pk,\n                    kenteken " + _vm._s(_vm.currentVehicle.license_plate.toUpperCase()) + "\n                ")])])], 1), _vm._v(" "), _c('f7-list', {
    attrs: {
      "form": ""
    }
  }, [_c('f7-list-item', [_c('f7-label', [_vm._v("Kilometerstand")]), _vm._v(" "), _c('f7-input', {
    attrs: {
      "type": "number",
      "placeholder": "(optioneel)"
    },
    model: {
      value: (_vm.mileage),
      callback: function($$v) {
        _vm.mileage = $$v
      },
      expression: "mileage"
    }
  })], 1), _vm._v(" "), _c('f7-list-item', [_c('f7-label', [_vm._v("Verwachte jaarlijkse kilometers")]), _vm._v(" "), _c('div', {
    staticClass: "label"
  }, [_c('small', [_vm._v("\n                        Wij vragen u hoeveel kilometer u per jaar rijdt, zodat we een betere\n                        inschatting kunnen maken van het benodigde onderhoud zodat u altijd\n                        moet een goed onderhouden voertuig onderweg bent.\n                    ")])]), _vm._v(" "), _c('f7-input', {
    attrs: {
      "type": "number",
      "placeholder": "(optioneel)"
    },
    model: {
      value: (_vm.expectedYearlyMileage),
      callback: function($$v) {
        _vm.expectedYearlyMileage = $$v
      },
      expression: "expectedYearlyMileage"
    }
  })], 1)], 1), _vm._v(" "), (!_vm.vehicleSavedStatus) ? _c('f7-buttons', {
    attrs: {
      "theme": "amber"
    }
  }, [_c('f7-button', {
    attrs: {
      "back": ""
    }
  }, [_vm._v("Annuleren")]), _vm._v(" "), _c('f7-button', {
    on: {
      "click": _vm.saveVehicle
    }
  }, [_vm._v("Opslaan")])], 1) : _vm._e(), _vm._v(" "), (_vm.vehicleSavedStatus) ? _c('f7-col', {
    staticClass: "succesCode",
    attrs: {
      "width": "100",
      "tablet-width": "100"
    }
  }, [_vm._v("\n            Voertuig opgeslagen\n        ")]) : _vm._e(), _vm._v(" "), (_vm.vehicleSavedStatus) ? _c('f7-buttons', {
    attrs: {
      "theme": "amber"
    }
  }, [_c('f7-button', {
    attrs: {
      "back": ""
    },
    on: {
      "click": _vm.resetVehicleSaved
    }
  }, [_vm._v("ga terug")])], 1) : _vm._e()], 1)], 1)
},staticRenderFns: []}

/***/ })
]),[49]);
//# sourceMappingURL=app.76465b23beb3d5235566.js.map