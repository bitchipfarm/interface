self["webpackHotUpdate_N_E"]("pages/airdrop",{

/***/ "./src/components/connect.js":
/*!***********************************!*\
  !*** ./src/components/connect.js ***!
  \***********************************/
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "connect": function() { return /* binding */ connect; }
/* harmony export */ });
/* harmony import */ var _home_kaliz_dev_tantranlee_bitchip_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/regenerator */ "./node_modules/next/node_modules/@babel/runtime/regenerator/index.js");
/* harmony import */ var _home_kaliz_dev_tantranlee_bitchip_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_home_kaliz_dev_tantranlee_bitchip_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _home_kaliz_dev_tantranlee_bitchip_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator */ "./node_modules/next/node_modules/@babel/runtime/helpers/esm/asyncToGenerator.js");
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! web3modal */ "./node_modules/web3modal/dist/index.js");
/* harmony import */ var web3modal__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(web3modal__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! web3 */ "./node_modules/web3/lib/index.js");
/* harmony import */ var web3__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(web3__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _contracts_contract_json__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../contracts/contract.json */ "./src/contracts/contract.json");
/* harmony import */ var _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @walletconnect/web3-provider */ "./node_modules/@walletconnect/web3-provider/dist/cjs/index.js");
/* harmony import */ var _libs_notify__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ../libs/notify */ "./src/libs/notify.js");
/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react-redux */ "./node_modules/react-redux/es/index.js");
/* harmony import */ var _stores_common_slice__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ../stores/common-slice */ "./src/stores/common-slice.js");
/* module decorator */ module = __webpack_require__.hmd(module);



var _s = $RefreshSig$();








var contractAddress = "0x09c1ca161d2a7a5227ba28482e769e76ef6d1597";
var regex = /^\d+(\.\d{0,6})?$/;
var connect = function connect() {
  _s();

  var dispatch = (0,react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch)();
  var providerOptions = {
    walletconnect: {
      "package": _walletconnect_web3_provider__WEBPACK_IMPORTED_MODULE_5__.default,
      options: {
        infuraId: "8043bb2cf99347b1bfadfb233c5325c0",
        rpc: {
          56: "https://bsc-dataseed.binance.org/",
          97: "https://data-seed-prebsc-1-s1.binance.org:8545/"
        },
        network: "binance",
        chainId: Number("97")
      }
    }
  };

  var connect = /*#__PURE__*/function () {
    var _ref = (0,_home_kaliz_dev_tantranlee_bitchip_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bitchip_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee() {
      var web3Modal, provider, web3, chainId, accounts, contract;
      return _home_kaliz_dev_tantranlee_bitchip_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee$(_context) {
        while (1) {
          switch (_context.prev = _context.next) {
            case 0:
              _context.prev = 0;
              web3Modal = new (web3modal__WEBPACK_IMPORTED_MODULE_2___default())({
                network: "binance",
                providerOptions: providerOptions
              });
              web3Modal.clearCachedProvider();
              _context.next = 5;
              return web3Modal.connect();

            case 5:
              provider = _context.sent;
              web3 = new (web3__WEBPACK_IMPORTED_MODULE_3___default())(provider);
              _context.next = 9;
              return web3.eth.getChainId();

            case 9:
              chainId = _context.sent;

              if (!(chainId != "97")) {
                _context.next = 12;
                break;
              }

              return _context.abrupt("return", (0,_libs_notify__WEBPACK_IMPORTED_MODULE_6__.errorNotify)("Please select Binance Smart Chain"));

            case 12:
              _context.next = 14;
              return web3.eth.getAccounts();

            case 14:
              accounts = _context.sent;
              dispatch((0,_stores_common_slice__WEBPACK_IMPORTED_MODULE_8__.setAccount)(accounts[0]));
              contract = new web3.eth.Contract(_contracts_contract_json__WEBPACK_IMPORTED_MODULE_4__, contractAddress);
              window.contract = contract;
              window.provider = web3;
              return _context.abrupt("return", accounts[0]);

            case 22:
              _context.prev = 22;
              _context.t0 = _context["catch"](0);
              console.log("err", _context.t0);

            case 25:
            case "end":
              return _context.stop();
          }
        }
      }, _callee, null, [[0, 22]]);
    }));

    return function connect() {
      return _ref.apply(this, arguments);
    };
  }();

  var getPoint = /*#__PURE__*/function () {
    var _ref2 = (0,_home_kaliz_dev_tantranlee_bitchip_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bitchip_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee2(account) {
      var r;
      return _home_kaliz_dev_tantranlee_bitchip_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee2$(_context2) {
        while (1) {
          switch (_context2.prev = _context2.next) {
            case 0:
              _context2.prev = 0;
              _context2.next = 3;
              return window.contract.methods.viewStats(account).call();

            case 3:
              r = _context2.sent;
              console.log(r);
              dispatch((0,_stores_common_slice__WEBPACK_IMPORTED_MODULE_8__.setStats)({
                point: Number(r.point.toString()),
                current: Number(r.current.toString())
              }));
              _context2.next = 11;
              break;

            case 8:
              _context2.prev = 8;
              _context2.t0 = _context2["catch"](0);
              console.log(_context2.t0);

            case 11:
            case "end":
              return _context2.stop();
          }
        }
      }, _callee2, null, [[0, 8]]);
    }));

    return function getPoint(_x) {
      return _ref2.apply(this, arguments);
    };
  }();

  var claimBnb = /*#__PURE__*/function () {
    var _ref3 = (0,_home_kaliz_dev_tantranlee_bitchip_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bitchip_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee3() {
      var accounts;
      return _home_kaliz_dev_tantranlee_bitchip_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee3$(_context3) {
        while (1) {
          switch (_context3.prev = _context3.next) {
            case 0:
              _context3.prev = 0;
              _context3.next = 3;
              return window.provider.eth.getAccounts();

            case 3:
              accounts = _context3.sent;
              _context3.next = 6;
              return window.contract.methods.addRightTree().send({
                from: accounts[0]
              });

            case 6:
              _context3.next = 10;
              break;

            case 8:
              _context3.prev = 8;
              _context3.t0 = _context3["catch"](0);

            case 10:
            case "end":
              return _context3.stop();
          }
        }
      }, _callee3, null, [[0, 8]]);
    }));

    return function claimBnb() {
      return _ref3.apply(this, arguments);
    };
  }();

  var claimAirdrop = /*#__PURE__*/function () {
    var _ref4 = (0,_home_kaliz_dev_tantranlee_bitchip_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bitchip_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee4(refer) {
      var accounts;
      return _home_kaliz_dev_tantranlee_bitchip_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee4$(_context4) {
        while (1) {
          switch (_context4.prev = _context4.next) {
            case 0:
              _context4.prev = 0;
              _context4.next = 3;
              return connect();

            case 3:
              _context4.next = 5;
              return window.provider.eth.getAccounts();

            case 5:
              accounts = _context4.sent;
              _context4.next = 8;
              return window.contract.methods.getAirdrop(refer).send({
                from: accounts[0]
              });

            case 8:
              _context4.next = 13;
              break;

            case 10:
              _context4.prev = 10;
              _context4.t0 = _context4["catch"](0);
              console.log(_context4.t0);

            case 13:
            case "end":
              return _context4.stop();
          }
        }
      }, _callee4, null, [[0, 10]]);
    }));

    return function claimAirdrop(_x2) {
      return _ref4.apply(this, arguments);
    };
  }();

  var buySale = /*#__PURE__*/function () {
    var _ref5 = (0,_home_kaliz_dev_tantranlee_bitchip_client_node_modules_next_node_modules_babel_runtime_helpers_esm_asyncToGenerator__WEBPACK_IMPORTED_MODULE_1__.default)( /*#__PURE__*/_home_kaliz_dev_tantranlee_bitchip_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().mark(function _callee5(refer, amount) {
      var accounts;
      return _home_kaliz_dev_tantranlee_bitchip_client_node_modules_next_node_modules_babel_runtime_regenerator__WEBPACK_IMPORTED_MODULE_0___default().wrap(function _callee5$(_context5) {
        while (1) {
          switch (_context5.prev = _context5.next) {
            case 0:
              _context5.prev = 0;
              _context5.next = 3;
              return connect();

            case 3:
              if (regex.test(amount)) {
                _context5.next = 5;
                break;
              }

              return _context5.abrupt("return", (0,_libs_notify__WEBPACK_IMPORTED_MODULE_6__.errorNotify)("Invalid input amount"));

            case 5:
              if (!(amount < 0.01)) {
                _context5.next = 7;
                break;
              }

              return _context5.abrupt("return", (0,_libs_notify__WEBPACK_IMPORTED_MODULE_6__.errorNotify)("Min Buy 0.01 BNB"));

            case 7:
              _context5.next = 9;
              return window.provider.eth.getAccounts();

            case 9:
              accounts = _context5.sent;
              _context5.next = 12;
              return window.contract.methods.tokenSale(refer).send({
                from: accounts[0],
                value: amount * Math.pow(10, 18)
              });

            case 12:
              _context5.next = 17;
              break;

            case 14:
              _context5.prev = 14;
              _context5.t0 = _context5["catch"](0);
              console.log(_context5.t0);

            case 17:
            case "end":
              return _context5.stop();
          }
        }
      }, _callee5, null, [[0, 14]]);
    }));

    return function buySale(_x3, _x4) {
      return _ref5.apply(this, arguments);
    };
  }();

  return {
    claimAirdrop: claimAirdrop,
    buySale: buySale,
    connect: connect,
    getPoint: getPoint,
    claimBnb: claimBnb
  };
};

_s(connect, "rgTLoBID190wEKCp9+G8W6F7A5M=", false, function () {
  return [react_redux__WEBPACK_IMPORTED_MODULE_7__.useDispatch];
});

;
    var _a, _b;
    // Legacy CSS implementations will `eval` browser code in a Node.js context
    // to extract CSS. For backwards compatibility, we need to check we're in a
    // browser context before continuing.
    if (typeof self !== 'undefined' &&
        // AMP / No-JS mode does not inject these helpers:
        '$RefreshHelpers$' in self) {
        var currentExports = module.__proto__.exports;
        var prevExports = (_b = (_a = module.hot.data) === null || _a === void 0 ? void 0 : _a.prevExports) !== null && _b !== void 0 ? _b : null;
        // This cannot happen in MainTemplate because the exports mismatch between
        // templating and execution.
        self.$RefreshHelpers$.registerExportsForReactRefresh(currentExports, module.id);
        // A module can be accepted automatically based on its exports, e.g. when
        // it is a Refresh Boundary.
        if (self.$RefreshHelpers$.isReactRefreshBoundary(currentExports)) {
            // Save the previous exports on update so we can compare the boundary
            // signatures.
            module.hot.dispose(function (data) {
                data.prevExports = currentExports;
            });
            // Unconditionally accept an update to this module, we'll check if it's
            // still a Refresh Boundary later.
            module.hot.accept();
            // This field is set when the previous version of this module was a
            // Refresh Boundary, letting us know we need to check for invalidation or
            // enqueue an update.
            if (prevExports !== null) {
                // A boundary can become ineligible if its exports are incompatible
                // with the previous exports.
                //
                // For example, if you add/remove/change exports, we'll want to
                // re-execute the importing modules, and force those components to
                // re-render. Similarly, if you convert a class component to a
                // function, we want to invalidate the boundary.
                if (self.$RefreshHelpers$.shouldInvalidateReactRefreshBoundary(prevExports, currentExports)) {
                    module.hot.invalidate();
                }
                else {
                    self.$RefreshHelpers$.scheduleUpdate();
                }
            }
        }
        else {
            // Since we just executed the code for the module, it's possible that the
            // new exports made it ineligible for being a boundary.
            // We only care about the case when we were _previously_ a boundary,
            // because we already accepted this update (accidental side effect).
            var isNoLongerABoundary = prevExports !== null;
            if (isNoLongerABoundary) {
                module.hot.invalidate();
            }
        }
    }


/***/ })

});
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9fTl9FLy4vc3JjL2NvbXBvbmVudHMvY29ubmVjdC5qcyJdLCJuYW1lcyI6WyJjb250cmFjdEFkZHJlc3MiLCJwcm9jZXNzIiwicmVnZXgiLCJjb25uZWN0IiwiZGlzcGF0Y2giLCJ1c2VEaXNwYXRjaCIsInByb3ZpZGVyT3B0aW9ucyIsIndhbGxldGNvbm5lY3QiLCJXYWxsZXRDb25uZWN0UHJvdmlkZXIiLCJvcHRpb25zIiwiaW5mdXJhSWQiLCJycGMiLCJuZXR3b3JrIiwiY2hhaW5JZCIsIk51bWJlciIsIndlYjNNb2RhbCIsIldlYjNNb2RhbCIsImNsZWFyQ2FjaGVkUHJvdmlkZXIiLCJwcm92aWRlciIsIndlYjMiLCJXZWIzIiwiZXRoIiwiZ2V0Q2hhaW5JZCIsImVycm9yTm90aWZ5IiwiZ2V0QWNjb3VudHMiLCJhY2NvdW50cyIsInNldEFjY291bnQiLCJjb250cmFjdCIsIkNvbnRyYWN0IiwiY29udHJhY3RKc29uIiwid2luZG93IiwiY29uc29sZSIsImxvZyIsImdldFBvaW50IiwiYWNjb3VudCIsIm1ldGhvZHMiLCJ2aWV3U3RhdHMiLCJjYWxsIiwiciIsInNldFN0YXRzIiwicG9pbnQiLCJ0b1N0cmluZyIsImN1cnJlbnQiLCJjbGFpbUJuYiIsImFkZFJpZ2h0VHJlZSIsInNlbmQiLCJmcm9tIiwiY2xhaW1BaXJkcm9wIiwicmVmZXIiLCJnZXRBaXJkcm9wIiwiYnV5U2FsZSIsImFtb3VudCIsInRlc3QiLCJ0b2tlblNhbGUiLCJ2YWx1ZSJdLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7OztBQUFBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsSUFBTUEsZUFBZSxHQUFHQyw0Q0FBeEI7QUFDQSxJQUFNQyxLQUFLLEdBQUcsbUJBQWQ7QUFFTyxJQUFNQyxPQUFPLEdBQUcsbUJBQU07QUFBQTs7QUFDM0IsTUFBTUMsUUFBUSxHQUFHQyx3REFBVyxFQUE1QjtBQUNBLE1BQUlDLGVB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QUE7QUFBQTtBQUFBOztBQUFBLGdEQVFINUIseURBQVcsQ0FBQyxrQkFBRCxDQVJSOztBQUFBO0FBQUE7QUFBQSxxQkFVV08sTUFBTSxDQUFDWixRQUFQLENBQWdCRyxHQUFoQixDQUFvQkcsV0FBcEIsRUFWWDs7QUFBQTtBQVVOQyxzQkFWTTtBQUFBO0FBQUEscUJBV05LLE1BQU0sQ0FBQ0gsUUFBUCxDQUFnQlEsT0FBaEIsQ0FBd0JrQixTQUF4QixDQUFrQ0wsS0FBbEMsRUFBeUNILElBQXpDLENBQThDO0FBQ2xEQyxvQkFBSSxFQUFFckIsUUFBUSxDQUFDLENBQUQsQ0FEb0M7QUFFbEQ2QixxQkFBSyxFQUFFSCxNQUFNLFlBQUcsRUFBSCxFQUFTLEVBQVQ7QUFGcUMsZUFBOUMsQ0FYTTs7QUFBQTtBQUFBO0FBQUE7O0FBQUE7QUFBQTtBQUFBO0FBZ0JacEIscUJBQU8sQ0FBQ0MsR0FBUjs7QUFoQlk7QUFBQTtBQUFBO0FBQUE7QUFBQTtBQUFBO0FBQUEsS0FBSDs7QUFBQSxvQkFBUGtCLE9BQU87QUFBQTtBQUFBO0FBQUEsS0FBYjs7QUFtQkEsU0FBTztBQUNMSCxnQkFBWSxFQUFaQSxZQURLO0FBRUxHLFdBQU8sRUFBUEEsT0FGSztBQUdML0MsV0FBTyxFQUFQQSxPQUhLO0FBSUw4QixZQUFRLEVBQVJBLFFBSks7QUFLTFUsWUFBUSxFQUFSQTtBQUxLLEdBQVA7QUFPRCxDQWxHTTs7R0FBTXhDLE87VUFDTUUsb0QiLCJmaWxlIjoic3RhdGljL3dlYnBhY2svcGFnZXMvYWlyZHJvcC40MDBiNmUyNDQ5NjY4N2M2NTQxYy5ob3QtdXBkYXRlLmpzIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IFdlYjNNb2RhbCBmcm9tIFwid2ViM21vZGFsXCI7XG5pbXBvcnQgV2ViMyBmcm9tIFwid2ViM1wiO1xuaW1wb3J0IGNvbnRyYWN0SnNvbiBmcm9tIFwiLi4vY29udHJhY3RzL2NvbnRyYWN0Lmpzb25cIjtcbmltcG9ydCBXYWxsZXRDb25uZWN0UHJvdmlkZXIgZnJvbSBcIkB3YWxsZXRjb25uZWN0L3dlYjMtcHJvdmlkZXJcIjtcbmltcG9ydCB7IGVycm9yTm90aWZ5IH0gZnJvbSBcIi4uL2xpYnMvbm90aWZ5XCI7XG5pbXBvcnQgeyB1c2VEaXNwYXRjaCB9IGZyb20gXCJyZWFjdC1yZWR1eFwiO1xuaW1wb3J0IHsgc2V0QWNjb3VudCwgc2V0U3RhdHMgfSBmcm9tIFwiLi4vc3RvcmVzL2NvbW1vbi1zbGljZVwiO1xuY29uc3QgY29udHJhY3RBZGRyZXNzID0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ09OVFJBQ1RfQUREUkVTUztcbmNvbnN0IHJlZ2V4ID0gL15cXGQrKFxcLlxcZHswLDZ9KT8kLztcblxuZXhwb3J0IGNvbnN0IGNvbm5lY3QgPSAoKSA9PiB7XG4gIGNvbnN0IGRpc3BhdGNoID0gdXNlRGlzcGF0Y2goKTtcbiAgbGV0IHByb3ZpZGVyT3B0aW9ucyA9IHtcbiAgICB3YWxsZXRjb25uZWN0OiB7XG4gICAgICBwYWNrYWdlOiBXYWxsZXRDb25uZWN0UHJvdmlkZXIsXG4gICAgICBvcHRpb25zOiB7XG4gICAgICAgIGluZnVyYUlkOiBcIjgwNDNiYjJjZjk5MzQ3YjFiZmFkZmIyMzNjNTMyNWMwXCIsXG4gICAgICAgIHJwYzoge1xuICAgICAgICAgIDU2OiBcImh0dHBzOi8vYnNjLWRhdGFzZWVkLmJpbmFuY2Uub3JnL1wiLFxuICAgICAgICAgIDk3OiBcImh0dHBzOi8vZGF0YS1zZWVkLXByZWJzYy0xLXMxLmJpbmFuY2Uub3JnOjg1NDUvXCIsXG4gICAgICAgIH0sXG4gICAgICAgIG5ldHdvcms6IFwiYmluYW5jZVwiLFxuICAgICAgICBjaGFpbklkOiBOdW1iZXIocHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0hBSU5fSUQpLFxuICAgICAgfSxcbiAgICB9LFxuICB9O1xuICBjb25zdCBjb25uZWN0ID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCB3ZWIzTW9kYWwgPSBuZXcgV2ViM01vZGFsKHtcbiAgICAgICAgbmV0d29yazogXCJiaW5hbmNlXCIsXG4gICAgICAgIHByb3ZpZGVyT3B0aW9ucyxcbiAgICAgIH0pO1xuICAgICAgd2ViM01vZGFsLmNsZWFyQ2FjaGVkUHJvdmlkZXIoKTtcbiAgICAgIGNvbnN0IHByb3ZpZGVyID0gYXdhaXQgd2ViM01vZGFsLmNvbm5lY3QoKTtcbiAgICAgIGNvbnN0IHdlYjMgPSBuZXcgV2ViMyhwcm92aWRlcik7XG4gICAgICBjb25zdCBjaGFpbklkID0gYXdhaXQgd2ViMy5ldGguZ2V0Q2hhaW5JZCgpO1xuICAgICAgaWYgKGNoYWluSWQgIT0gcHJvY2Vzcy5lbnYuTkVYVF9QVUJMSUNfQ0hBSU5fSUQpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yTm90aWZ5KFwiUGxlYXNlIHNlbGVjdCBCaW5hbmNlIFNtYXJ0IENoYWluXCIpO1xuICAgICAgfVxuICAgICAgY29uc3QgYWNjb3VudHMgPSBhd2FpdCB3ZWIzLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgZGlzcGF0Y2goc2V0QWNjb3VudChhY2NvdW50c1swXSkpO1xuICAgICAgY29uc3QgY29udHJhY3QgPSBuZXcgd2ViMy5ldGguQ29udHJhY3QoY29udHJhY3RKc29uLCBjb250cmFjdEFkZHJlc3MpO1xuICAgICAgd2luZG93LmNvbnRyYWN0ID0gY29udHJhY3Q7XG4gICAgICB3aW5kb3cucHJvdmlkZXIgPSB3ZWIzO1xuICAgICAgcmV0dXJuIGFjY291bnRzWzBdO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coXCJlcnJcIiwgZXJyKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGdldFBvaW50ID0gYXN5bmMgKGFjY291bnQpID0+IHtcbiAgICB0cnkge1xuICAgICAgY29uc3QgciA9IGF3YWl0IHdpbmRvdy5jb250cmFjdC5tZXRob2RzLnZpZXdTdGF0cyhhY2NvdW50KS5jYWxsKCk7XG4gICAgICBjb25zb2xlLmxvZyhyKTtcbiAgICAgIGRpc3BhdGNoKFxuICAgICAgICBzZXRTdGF0cyh7XG4gICAgICAgICAgcG9pbnQ6IE51bWJlcihyLnBvaW50LnRvU3RyaW5nKCkpLFxuICAgICAgICAgIGN1cnJlbnQ6IE51bWJlcihyLmN1cnJlbnQudG9TdHJpbmcoKSksXG4gICAgICAgIH0pXG4gICAgICApO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG4gIGNvbnN0IGNsYWltQm5iID0gYXN5bmMgKCkgPT4ge1xuICAgIHRyeSB7XG4gICAgICBjb25zdCBhY2NvdW50cyA9IGF3YWl0IHdpbmRvdy5wcm92aWRlci5ldGguZ2V0QWNjb3VudHMoKTtcbiAgICAgIGF3YWl0IHdpbmRvdy5jb250cmFjdC5tZXRob2RzLmFkZFJpZ2h0VHJlZSgpLnNlbmQoeyBmcm9tOiBhY2NvdW50c1swXSB9KTtcbiAgICB9IGNhdGNoIChlcnIpIHt9XG4gIH07XG4gIGNvbnN0IGNsYWltQWlyZHJvcCA9IGFzeW5jIChyZWZlcikgPT4ge1xuICAgIHRyeSB7XG4gICAgICBhd2FpdCBjb25uZWN0KCk7XG5cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LnByb3ZpZGVyLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgYXdhaXQgd2luZG93LmNvbnRyYWN0Lm1ldGhvZHNcbiAgICAgICAgLmdldEFpcmRyb3AocmVmZXIpXG4gICAgICAgIC5zZW5kKHsgZnJvbTogYWNjb3VudHNbMF0gfSk7XG4gICAgfSBjYXRjaCAoZXJyKSB7XG4gICAgICBjb25zb2xlLmxvZyhlcnIpO1xuICAgIH1cbiAgfTtcblxuICBjb25zdCBidXlTYWxlID0gYXN5bmMgKHJlZmVyLCBhbW91bnQpID0+IHtcbiAgICB0cnkge1xuICAgICAgYXdhaXQgY29ubmVjdCgpO1xuXG4gICAgICBpZiAoIXJlZ2V4LnRlc3QoYW1vdW50KSkge1xuICAgICAgICByZXR1cm4gZXJyb3JOb3RpZnkoXCJJbnZhbGlkIGlucHV0IGFtb3VudFwiKTtcbiAgICAgIH0gLy8gaW52YWxkIGFtb3VudFxuICAgICAgaWYgKGFtb3VudCA8IDAuMDEpIHtcbiAgICAgICAgcmV0dXJuIGVycm9yTm90aWZ5KFwiTWluIEJ1eSAwLjAxIEJOQlwiKTtcbiAgICAgIH1cbiAgICAgIGNvbnN0IGFjY291bnRzID0gYXdhaXQgd2luZG93LnByb3ZpZGVyLmV0aC5nZXRBY2NvdW50cygpO1xuICAgICAgYXdhaXQgd2luZG93LmNvbnRyYWN0Lm1ldGhvZHMudG9rZW5TYWxlKHJlZmVyKS5zZW5kKHtcbiAgICAgICAgZnJvbTogYWNjb3VudHNbMF0sXG4gICAgICAgIHZhbHVlOiBhbW91bnQgKiAxMCAqKiAxOCxcbiAgICAgIH0pO1xuICAgIH0gY2F0Y2ggKGVycikge1xuICAgICAgY29uc29sZS5sb2coZXJyKTtcbiAgICB9XG4gIH07XG4gIHJldHVybiB7XG4gICAgY2xhaW1BaXJkcm9wLFxuICAgIGJ1eVNhbGUsXG4gICAgY29ubmVjdCxcbiAgICBnZXRQb2ludCxcbiAgICBjbGFpbUJuYixcbiAgfTtcbn07XG4iXSwic291cmNlUm9vdCI6IiJ9