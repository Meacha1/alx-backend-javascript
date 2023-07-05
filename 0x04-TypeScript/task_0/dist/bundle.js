/*
 * ATTENTION: The "eval" devtool has been used (maybe by default in mode: "development").
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./main.ts":
/*!*****************!*\
  !*** ./main.ts ***!
  \*****************/
/***/ (() => {

eval("\nvar student1 = {\n    firstName: \"John\",\n    lastName: \"Doe\",\n    age: 20,\n    location: \"New York\",\n};\nvar student2 = {\n    firstName: \"Jane\",\n    lastName: \"Smith\",\n    age: 22,\n    location: \"Los Angeles\",\n};\nvar studentsList = [student1, student2];\nvar tableHTML = \"<table>\";\ntableHTML += \"<thead><tr><th>First Name</th><th>Location</th></tr></thead>\";\ntableHTML += \"<tbody>\";\nstudentsList.forEach(function (student) {\n    tableHTML += \"<tr><td>\".concat(student.firstName, \"</td><td>\").concat(student.location, \"</td></tr>\");\n});\ntableHTML += \"</tbody></table>\";\nconsole.log(tableHTML);\n\n\n//# sourceURL=webpack://name/./main.ts?");

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	
/******/ 	// startup
/******/ 	// Load entry module and return exports
/******/ 	// This entry module can't be inlined because the eval devtool is used.
/******/ 	var __webpack_exports__ = {};
/******/ 	__webpack_modules__["./main.ts"]();
/******/ 	
/******/ })()
;