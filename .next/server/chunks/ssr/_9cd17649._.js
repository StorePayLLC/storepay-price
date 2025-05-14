module.exports = {

"[project]/.next-internal/server/app/user/notifications/page/actions.js [app-rsc] (server actions loader, ecmascript)": (function(__turbopack_context__) {

var { g: global, __dirname, m: module, e: exports } = __turbopack_context__;
{
}}),
"[project]/app/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/user/layout.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/user/layout.tsx [app-rsc] (ecmascript)"));
}}),
"[project]/app/user/notifications/page.client.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>__TURBOPACK__default__export__)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/antd/es/index.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$BellOutlined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BellOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/BellOutlined.js [app-rsc] (ecmascript) <export default as BellOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DollarOutlined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/DollarOutlined.js [app-rsc] (ecmascript) <export default as DollarOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SafetyOutlined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__SafetyOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/SafetyOutlined.js [app-rsc] (ecmascript) <export default as SafetyOutlined>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MailOutlined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MailOutlined$3e$__ = __turbopack_context__.i("[project]/node_modules/@ant-design/icons/es/icons/MailOutlined.js [app-rsc] (ecmascript) <export default as MailOutlined>");
;
;
;
const { Title, Text } = __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Typography"];
const notificationSettings = [
    {
        id: 'bid-updates',
        title: 'Bid Updates',
        description: 'Get notified about your bid status changes',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$BellOutlined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__BellOutlined$3e$__["BellOutlined"], {
            className: "text-xl text-blue-500"
        }, void 0, false, {
            fileName: "[project]/app/user/notifications/page.client.tsx",
            lineNumber: 17,
            columnNumber: 11
        }, this),
        enabled: true
    },
    {
        id: 'price-alerts',
        title: 'Price Alerts',
        description: 'Receive notifications about price changes',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$DollarOutlined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__DollarOutlined$3e$__["DollarOutlined"], {
            className: "text-xl text-green-500"
        }, void 0, false, {
            fileName: "[project]/app/user/notifications/page.client.tsx",
            lineNumber: 24,
            columnNumber: 11
        }, this),
        enabled: true
    },
    {
        id: 'security-alerts',
        title: 'Security Alerts',
        description: 'Get important security notifications',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$SafetyOutlined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__SafetyOutlined$3e$__["SafetyOutlined"], {
            className: "text-xl text-amber-500"
        }, void 0, false, {
            fileName: "[project]/app/user/notifications/page.client.tsx",
            lineNumber: 31,
            columnNumber: 11
        }, this),
        enabled: true
    },
    {
        id: 'newsletter',
        title: 'Newsletter',
        description: 'Receive our weekly newsletter',
        icon: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f40$ant$2d$design$2f$icons$2f$es$2f$icons$2f$MailOutlined$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__$3c$export__default__as__MailOutlined$3e$__["MailOutlined"], {
            className: "text-xl text-purple-500"
        }, void 0, false, {
            fileName: "[project]/app/user/notifications/page.client.tsx",
            lineNumber: 38,
            columnNumber: 11
        }, this),
        enabled: false
    }
];
const NotificationsClient = ()=>{
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "max-w-3xl mx-auto",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                level: 2,
                className: "text-white mb-6",
                children: "Notification Preferences"
            }, void 0, false, {
                fileName: "[project]/app/user/notifications/page.client.tsx",
                lineNumber: 46,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-[#111] border border-gray-800",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["List"], {
                    dataSource: notificationSettings,
                    renderItem: (item)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["List"].Item, {
                            className: "py-4 border-b border-gray-800 last:border-0",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Flex"], {
                                align: "center",
                                justify: "space-between",
                                className: "w-full",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Flex"], {
                                        align: "center",
                                        gap: 12,
                                        children: [
                                            item.icon,
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                        className: "text-white font-medium block",
                                                        children: item.title
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/user/notifications/page.client.tsx",
                                                        lineNumber: 61,
                                                        columnNumber: 21
                                                    }, void 0),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                        type: "secondary",
                                                        children: item.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/app/user/notifications/page.client.tsx",
                                                        lineNumber: 64,
                                                        columnNumber: 21
                                                    }, void 0)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/app/user/notifications/page.client.tsx",
                                                lineNumber: 60,
                                                columnNumber: 19
                                            }, void 0)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/user/notifications/page.client.tsx",
                                        lineNumber: 58,
                                        columnNumber: 17
                                    }, void 0),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Switch"], {
                                        defaultChecked: item.enabled,
                                        className: "bg-gray-700"
                                    }, void 0, false, {
                                        fileName: "[project]/app/user/notifications/page.client.tsx",
                                        lineNumber: 69,
                                        columnNumber: 17
                                    }, void 0)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/user/notifications/page.client.tsx",
                                lineNumber: 57,
                                columnNumber: 15
                            }, void 0)
                        }, void 0, false, {
                            fileName: "[project]/app/user/notifications/page.client.tsx",
                            lineNumber: 54,
                            columnNumber: 13
                        }, void 0)
                }, void 0, false, {
                    fileName: "[project]/app/user/notifications/page.client.tsx",
                    lineNumber: 51,
                    columnNumber: 9
                }, this)
            }, void 0, false, {
                fileName: "[project]/app/user/notifications/page.client.tsx",
                lineNumber: 50,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-[#111] border border-gray-800 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                        level: 4,
                        className: "text-white mb-4",
                        children: "Email Notification Frequency"
                    }, void 0, false, {
                        fileName: "[project]/app/user/notifications/page.client.tsx",
                        lineNumber: 80,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                className: "text-white block",
                                                children: "Instant"
                                            }, void 0, false, {
                                                fileName: "[project]/app/user/notifications/page.client.tsx",
                                                lineNumber: 86,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                type: "secondary",
                                                children: "Receive emails as events happen"
                                            }, void 0, false, {
                                                fileName: "[project]/app/user/notifications/page.client.tsx",
                                                lineNumber: 87,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/user/notifications/page.client.tsx",
                                        lineNumber: 85,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "frequency",
                                        defaultChecked: true,
                                        className: "accent-blue-500 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/user/notifications/page.client.tsx",
                                        lineNumber: 89,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/user/notifications/page.client.tsx",
                                lineNumber: 84,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Divider"], {
                                className: "border-gray-800 my-3"
                            }, void 0, false, {
                                fileName: "[project]/app/user/notifications/page.client.tsx",
                                lineNumber: 96,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                className: "text-white block",
                                                children: "Daily Digest"
                                            }, void 0, false, {
                                                fileName: "[project]/app/user/notifications/page.client.tsx",
                                                lineNumber: 99,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                type: "secondary",
                                                children: "Receive a summary once per day"
                                            }, void 0, false, {
                                                fileName: "[project]/app/user/notifications/page.client.tsx",
                                                lineNumber: 100,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/user/notifications/page.client.tsx",
                                        lineNumber: 98,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "frequency",
                                        className: "accent-blue-500 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/user/notifications/page.client.tsx",
                                        lineNumber: 102,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/user/notifications/page.client.tsx",
                                lineNumber: 97,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Divider"], {
                                className: "border-gray-800 my-3"
                            }, void 0, false, {
                                fileName: "[project]/app/user/notifications/page.client.tsx",
                                lineNumber: 108,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center justify-between",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                className: "text-white block",
                                                children: "Weekly Digest"
                                            }, void 0, false, {
                                                fileName: "[project]/app/user/notifications/page.client.tsx",
                                                lineNumber: 111,
                                                columnNumber: 15
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                                type: "secondary",
                                                children: "Receive a summary once per week"
                                            }, void 0, false, {
                                                fileName: "[project]/app/user/notifications/page.client.tsx",
                                                lineNumber: 112,
                                                columnNumber: 15
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/app/user/notifications/page.client.tsx",
                                        lineNumber: 110,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        type: "radio",
                                        name: "frequency",
                                        className: "accent-blue-500 h-4 w-4"
                                    }, void 0, false, {
                                        fileName: "[project]/app/user/notifications/page.client.tsx",
                                        lineNumber: 114,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/user/notifications/page.client.tsx",
                                lineNumber: 109,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/user/notifications/page.client.tsx",
                        lineNumber: 83,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/user/notifications/page.client.tsx",
                lineNumber: 79,
                columnNumber: 7
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Card"], {
                className: "bg-[#111] border border-gray-800 mt-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Title, {
                        level: 4,
                        className: "text-white mb-4",
                        children: "Mobile Push Notifications"
                    }, void 0, false, {
                        fileName: "[project]/app/user/notifications/page.client.tsx",
                        lineNumber: 124,
                        columnNumber: 9
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Flex"], {
                        justify: "space-between",
                        align: "center",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                        className: "text-white block",
                                        children: "Enable Push Notifications"
                                    }, void 0, false, {
                                        fileName: "[project]/app/user/notifications/page.client.tsx",
                                        lineNumber: 129,
                                        columnNumber: 13
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(Text, {
                                        type: "secondary",
                                        children: "Receive notifications on your mobile device"
                                    }, void 0, false, {
                                        fileName: "[project]/app/user/notifications/page.client.tsx",
                                        lineNumber: 130,
                                        columnNumber: 13
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/app/user/notifications/page.client.tsx",
                                lineNumber: 128,
                                columnNumber: 11
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$antd$2f$es$2f$index$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["Switch"], {
                                defaultChecked: true,
                                className: "bg-gray-700"
                            }, void 0, false, {
                                fileName: "[project]/app/user/notifications/page.client.tsx",
                                lineNumber: 132,
                                columnNumber: 11
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/app/user/notifications/page.client.tsx",
                        lineNumber: 127,
                        columnNumber: 9
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/app/user/notifications/page.client.tsx",
                lineNumber: 123,
                columnNumber: 7
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/app/user/notifications/page.client.tsx",
        lineNumber: 45,
        columnNumber: 5
    }, this);
};
const __TURBOPACK__default__export__ = NotificationsClient;
}}),
"[project]/app/user/notifications/page.tsx [app-rsc] (ecmascript)": ((__turbopack_context__) => {
"use strict";

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.s({
    "default": (()=>NotificationsPage),
    "metadata": (()=>metadata)
});
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/rsc/react-jsx-dev-runtime.js [app-rsc] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$app$2f$user$2f$notifications$2f$page$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/app/user/notifications/page.client.tsx [app-rsc] (ecmascript)");
;
;
const metadata = {
    title: 'Notifications - SPC',
    description: 'Manage your notification preferences'
};
function NotificationsPage() {
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$rsc$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$app$2f$user$2f$notifications$2f$page$2e$client$2e$tsx__$5b$app$2d$rsc$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
        fileName: "[project]/app/user/notifications/page.tsx",
        lineNumber: 10,
        columnNumber: 10
    }, this);
}
}}),
"[project]/app/user/notifications/page.tsx [app-rsc] (ecmascript, Next.js server component)": ((__turbopack_context__) => {

var { g: global, __dirname } = __turbopack_context__;
{
__turbopack_context__.n(__turbopack_context__.i("[project]/app/user/notifications/page.tsx [app-rsc] (ecmascript)"));
}}),

};

//# sourceMappingURL=_9cd17649._.js.map