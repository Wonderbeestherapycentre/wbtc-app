(globalThis.TURBOPACK || (globalThis.TURBOPACK = [])).push([typeof document === "object" ? document.currentScript : undefined,
"[project]/lib/utils.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatCurrency",
    ()=>formatCurrency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-client] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const formatCurrency = (amount)=>{
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR"
    }).format(amount);
};
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data:844fcd [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00b8854e641a2918644c790895a996121032778623":"signOutAction"},"lib/actions.ts",""] */ __turbopack_context__.s([
    "signOutAction",
    ()=>signOutAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var signOutAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00b8854e641a2918644c790895a996121032778623", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "signOutAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIkAvYXV0aFwiO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYlwiO1xuaW1wb3J0IHsgdXNlcnMsIGV4cGVuc2VzLCBjYXRlZ29yaWVzLCBjaGlsZHJlbiwgdGhlcmFwaWVzLCBzZXNzaW9ucyB9IGZyb20gXCIuL2RiL3NjaGVtYVwiOyAvLyBSZW1vdmVkIGZhbWlsaWVzLCBzdGFmZnMsIGJ1ZGdldHNcblxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IGVxLCBkZXNjLCBhbmQgfSBmcm9tIFwiZHJpenpsZS1vcm1cIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRoZW50aWNhdGUoXG4gICAgcHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhLFxuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuICAgICAgICBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7IC4uLmNyZWRlbnRpYWxzLCByZWRpcmVjdFRvOiBcIi9kYXNoYm9hcmRcIiB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJDcmVkZW50aWFsc1NpZ25pblwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNyZWRlbnRpYWxzLlwiO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXRBY3Rpb24oKSB7XG4gICAgYXdhaXQgc2lnbk91dCh7IHJlZGlyZWN0VG86IFwiL1wiIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIocHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcblxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFuYW1lKSByZXR1cm4gXCJNaXNzaW5nIGZpZWxkc1wiO1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4gXCJVc2VyIGFscmVhZHkgZXhpc3RzXCI7XG5cbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG5cbiAgICAvLyBEZWZhdWx0IHJvbGU6IFBBUkVOVD8gT3IgQURNSU4gZm9yIGZpcnN0IHVzZXI/IFxuICAgIC8vIExvZ2ljOiBJZiBubyB1c2VycyBleGlzdCwgZmlyc3QgaXMgQURNSU4uIE90aGVyd2lzZSBQQVJFTlQuXG4gICAgLy8gRm9yIG5vdywgbGV0J3MgaGFyZGNvZGUgUEFSRU5UIHVubGVzcyBleHBsaWNpdGx5IHNldCBlbHNld2hlcmUgdXN1YWxseS5cbiAgICAvLyBCdXQgZm9yIHRoaXMgXCJSZXZhbXBcIiBtYXliZSB3ZSBhc3N1bWUgQWRtaW4gY3JlYXRlcyB1c2Vycz9cbiAgICAvLyBJZiB0aGlzIGlzIHB1YmxpYyByZWdpc3RyYXRpb24sIFBBUkVOVCBpcyBzYWZlci5cblxuICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IGRiLnNlbGVjdCgpLmZyb20odXNlcnMpLnRoZW4ocmVzID0+IHJlcy5sZW5ndGgpO1xuICAgIGNvbnN0IHJvbGUgPSB1c2VyQ291bnQgPT09IDAgPyBcIkFETUlOXCIgOiBcIlBBUkVOVFwiO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZTogcm9sZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFwiU3VjY2Vzc1wiO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCByb2xlID0gZm9ybURhdGEuZ2V0KFwicm9sZVwiKSBhcyBcIkFETUlOXCIgfCBcIlRIRVJBUElTVFwiIHwgXCJQQVJFTlRcIjtcbiAgICBjb25zdCBxdWFsaWZpY2F0aW9uID0gKGZvcm1EYXRhLmdldChcInF1YWxpZmljYXRpb25cIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIXJvbGUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgYWxyZWFkeSBleGlzdHNcIiB9O1xuXG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZSxcbiAgICAgICAgcXVhbGlmaWNhdGlvbixcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVXNlciBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEV4cGVuc2VBY3Rpb24ocHJldlN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG4gICAgLy8gT25seSBBZG1pbiBjYW4gYWRkIGV4cGVuc2VzPyBPciBUaGVyYXBpc3Q/XG4gICAgLy8gTGV0J3MgYWxsb3cgQWRtaW4gYW5kIG1heWJlIFRoZXJhcGlzdC5cbiAgICBpZiAoc2Vzc2lvbi51c2VyLnJvbGUgPT09IFwiUEFSRU5UXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuXG4gICAgY29uc3QgYW1vdW50ID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikgYXMgc3RyaW5nKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmcpIHx8IFwiXCI7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHR5cGUgPSAoZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBcIkVYUEVOU0VcIiB8IFwiSU5DT01FXCIgfCBcIkRVRVwiKSB8fCBcIkVYUEVOU0VcIjtcbiAgICBjb25zdCBjaGlsZElkID0gKGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIC8vIHN0YWZmSWQgcmVtb3ZlZC4gdHlwZSBpcyBlbm91Z2g/IE9yIG1heWJlIHJlY29yZGVkQnk/XG5cblxuICAgIGlmICghYW1vdW50IHx8ICFkYXRlU3RyKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGlmICghZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlJZFwiKSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IGlzIHJlcXVpcmVkXCIgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoZXhwZW5zZXMpLnZhbHVlcyh7XG4gICAgICAgIC8vIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLCAvLyBSZW1vdmVkIHVzZXJJZCBjb25zdHJhaW50IGZyb20gc2NoZW1hPyBObywga2VlcCBpdCBhcyAncmVjb3JkZWQgYnknIGlmIG5lZWRlZD8gXG4gICAgICAgIC8vIFNjaGVtYSBkZWZpbml0aW9uOiBcInVzZXJJZFwiIHJlbW92ZWQ/IExldCdzIGNoZWNrIHNjaGVtYS50cyBjb250ZW50IEkgd3JvdGUuXG4gICAgICAgIC8vIEkga2VwdCAnZXhwZW5zZScgdGFibGUgYnV0IHJlZmFjdG9yaW5nLlxuICAgICAgICAvLyBXYWl0LCBJIGNoYW5nZWQgJ3VzZXJJZCcgdG8gJ3JlY29yZGVkQnknIChvcHRpb25hbCkgaW4gbXkgdGhvdWdodCwgYnV0IGxldCdzIGNoZWNrIHdoYXQgSSBhY3R1YWxseSB3cm90ZS5cbiAgICAgICAgLy8gSSB3cm90ZTogcmVjb3JkZWRCeTogdXVpZChcInJlY29yZGVkX2J5XCIpLnJlZmVyZW5jZXMoKCkgPT4gdXNlcnMuaWQpLCAvLyBBZG1pbiB3aG8gcmVjb3JkZWQgaXRcblxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgYW1vdW50OiBhbW91bnQudG9TdHJpbmcoKSxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGNhdGVnb3J5SWQ6IChmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeUlkXCIpIGFzIHN0cmluZyksXG4gICAgICAgIGNoaWxkSWQ6IGNoaWxkSWQsXG4gICAgICAgIHJlY29yZGVkQnk6IHNlc3Npb24udXNlci5pZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVHJhbnNhY3Rpb24gYWRkZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0R1ZUFzUGFpZChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgZGIucXVlcnkuZXhwZW5zZXMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKGV4cGVuc2VzLmlkLCBpZClcbiAgICB9KTtcblxuICAgIGlmICghZXhwZW5zZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJSZWNvcmQgbm90IGZvdW5kXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShleHBlbnNlcykuc2V0KHtcbiAgICAgICAgdHlwZTogXCJJTkNPTUVcIlxuICAgIH0pLndoZXJlKGVxKGV4cGVuc2VzLmlkLCBpZCkpO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiUGF5bWVudCBtYXJrZWQgYXMgcGFpZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVVc2VyKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBpZiAodXNlcklkID09PSBzZXNzaW9uLnVzZXIuaWQpIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2Fubm90IGRlbGV0ZSB5b3Vyc2VsZlwiIH07XG5cbiAgICBhd2FpdCBkYi5kZWxldGUodXNlcnMpLndoZXJlKGVxKHVzZXJzLmlkLCB1c2VySWQpKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi91c2Vyc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgZGVsZXRlZFwiIH07XG59XG5cblxuLy8gLS0tIFRoZXJhcHkgQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVUaGVyYXB5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBwcmljZSA9IChmb3JtRGF0YS5nZXQoXCJwcmljZVwiKSBhcyBzdHJpbmcpIHx8IFwiMFwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBQ1RJVkVcIiB8IFwiSU5BQ1RJVkVcIikgfHwgXCJBQ1RJVkVcIjtcbiAgICBjb25zdCBkdXJhdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZWZhdWx0RHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZykgfHwgXCI0NVwiO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHRoZXJhcGllcykudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNoYXJnZVBlclNlc3Npb246IHByaWNlLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRlZmF1bHREdXJhdGlvbk1pbnV0ZXM6IHBhcnNlSW50KGR1cmF0aW9uKSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3RoZXJhcGllc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRoZXJhcHkoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSAoZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikgYXMgc3RyaW5nKSB8fCBcIlwiO1xuICAgIGNvbnN0IHByaWNlID0gKGZvcm1EYXRhLmdldChcInByaWNlXCIpIGFzIHN0cmluZykgfHwgXCIwXCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gKGZvcm1EYXRhLmdldChcImRlZmF1bHREdXJhdGlvbk1pbnV0ZXNcIikgYXMgc3RyaW5nKSB8fCBcIjQ1XCI7XG5cbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi51cGRhdGUodGhlcmFwaWVzKS5zZXQoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgY2hhcmdlUGVyU2Vzc2lvbjogcHJpY2UsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZGVmYXVsdER1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgIH0pLndoZXJlKGVxKHRoZXJhcGllcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3RoZXJhcGllc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRoZXJhcHkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGIuZGVsZXRlKHRoZXJhcGllcykud2hlcmUoZXEodGhlcmFwaWVzLmlkLCBpZCkpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi90aGVyYXBpZXNcIik7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVGhlcmFweSBzZXJ2aWNlIGRlbGV0ZWRcIiB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGRlbGV0ZSB0aGVyYXB5LiBJdCBtaWdodCBiZSBsaW5rZWQgdG8gZXhpc3Rpbmcgc2Vzc2lvbnMuXCIgfTtcbiAgICB9XG59XG5cblxuLy8gLS0tIFNlc3Npb24gQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTZXNzaW9uKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgLy8gQWRtaW4gb3IgVGhlcmFwaXN0IGNhbiBjcmVhdGUgc2Vzc2lvbnNcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSA9PT0gXCJQQVJFTlRcIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgY2hpbGRJZCA9IGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcGlzdElkID0gZm9ybURhdGEuZ2V0KFwidGhlcmFwaXN0SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcHlJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcHlJZFwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZm9ybURhdGEuZ2V0KFwiZHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZyB8fCBcIjQ1XCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIlNDSEVEVUxFRFwiIHwgXCJDT01QTEVURURcIiB8IFwiQ0FOQ0VMTEVEXCIgfCBcIk1JU1NFRFwiKSB8fCBcIlNDSEVEVUxFRFwiO1xuXG4gICAgaWYgKCFjaGlsZElkIHx8ICF0aGVyYXBpc3RJZCB8fCAhdGhlcmFweUlkIHx8ICFkYXRlU3RyKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyByZXF1aXJlZCBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGF3YWl0IGRiLmluc2VydChzZXNzaW9ucykudmFsdWVzKHtcbiAgICAgICAgY2hpbGRJZCxcbiAgICAgICAgdGhlcmFwaXN0SWQsXG4gICAgICAgIHRoZXJhcHlJZCxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGR1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgICAgICBzdGF0dXMsXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gc2NoZWR1bGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNlc3Npb24oaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSA9PT0gXCJQQVJFTlRcIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgY2hpbGRJZCA9IGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcGlzdElkID0gZm9ybURhdGEuZ2V0KFwidGhlcmFwaXN0SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcHlJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcHlJZFwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZm9ybURhdGEuZ2V0KFwiZHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZyB8fCBcIjQ1XCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIlNDSEVEVUxFRFwiIHwgXCJDT01QTEVURURcIiB8IFwiQ0FOQ0VMTEVEXCIgfCBcIk1JU1NFRFwiKSB8fCBcIlNDSEVEVUxFRFwiO1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKHNlc3Npb25zKS5zZXQoe1xuICAgICAgICBjaGlsZElkLFxuICAgICAgICB0aGVyYXBpc3RJZCxcbiAgICAgICAgdGhlcmFweUlkLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlU3RyKSxcbiAgICAgICAgZHVyYXRpb25NaW51dGVzOiBwYXJzZUludChkdXJhdGlvbiksXG4gICAgICAgIHN0YXR1cyxcbiAgICB9KS53aGVyZShlcShzZXNzaW9ucy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NjaGVkdWxlXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiU2Vzc2lvbiB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNlc3Npb24oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIuZGVsZXRlKHNlc3Npb25zKS53aGVyZShlcShzZXNzaW9ucy5pZCwgaWQpKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gZGVsZXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyKHVzZXJJZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIgJiYgc2Vzc2lvbj8udXNlcj8uaWQgIT09IHVzZXJJZCkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoXCJyb2xlXCIpIGFzIFwiQURNSU5cIiB8IFwiVEhFUkFQSVNUXCIgfCBcIlBBUkVOVFwiO1xuICAgIGNvbnN0IHF1YWxpZmljYXRpb24gPSAoZm9ybURhdGEuZ2V0KFwicXVhbGlmaWNhdGlvblwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG5cbiAgICBpZiAoIW5hbWUgfHwgIWVtYWlsKSByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgZmllbGRzXCIgfTtcblxuICAgIGNvbnN0IHVwZGF0ZURhdGE6IGFueSA9IHsgbmFtZSwgZW1haWwsIHF1YWxpZmljYXRpb24gfTtcbiAgICBpZiAoc2Vzc2lvbi51c2VyLnJvbGUgPT09IFwiQURNSU5cIiAmJiByb2xlKSB7XG4gICAgICAgIHVwZGF0ZURhdGEucm9sZSA9IHJvbGU7XG4gICAgfVxuXG4gICAgYXdhaXQgZGIudXBkYXRlKHVzZXJzKVxuICAgICAgICAuc2V0KHVwZGF0ZURhdGEpXG4gICAgICAgIC53aGVyZShlcSh1c2Vycy5pZCwgdXNlcklkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgdXBkYXRlZFwiIH07XG59XG5cbi8vIC0tLSBDYXRlZ29yeSBBY3Rpb25zIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydChjYXRlZ29yaWVzIGFzIGFueSkudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgLy8gZmFtaWx5SWQgcmVtb3ZlZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYXRlZ29yeSBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3J5KGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShjYXRlZ29yaWVzKS5zZXQoeyBuYW1lIH0pLndoZXJlKGVxKGNhdGVnb3JpZXMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2F0ZWdvcnkgdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXRlZ29yeShpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkYi5kZWxldGUoY2F0ZWdvcmllcykud2hlcmUoZXEoY2F0ZWdvcmllcy5pZCwgaWQpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2Fubm90IGRlbGV0ZSBjYXRlZ29yeSBpbiB1c2VcIiB9O1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IGRlbGV0ZWRcIiB9O1xufVxuXG4vLyAtLS0gRXhwZW5zZSBBY3Rpb25zIC0tLSAoVXBkYXRlL0RlbGV0ZSlcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFeHBlbnNlKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIC8vIFBhcmVudCBjYW4ndCBkZWxldGU/IFllcy5cblxuICAgIGF3YWl0IGRiLmRlbGV0ZShleHBlbnNlcykud2hlcmUoZXEoZXhwZW5zZXMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiRXhwZW5zZSBkZWxldGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2UoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcImFtb3VudFwiKSBhcyBzdHJpbmcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBkYXRlU3RyID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgY2F0ZWdvcnlJZCA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5SWRcIikgYXMgc3RyaW5nO1xuXG4gICAgaWYgKCFhbW91bnQgfHwgIWRhdGVTdHIgfHwgIWNhdGVnb3J5SWQpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJNaXNzaW5nIGZpZWxkc1wiIH07XG4gICAgfVxuXG4gICAgYXdhaXQgZGIudXBkYXRlKGV4cGVuc2VzKS5zZXQoe1xuICAgICAgICBhbW91bnQ6IGFtb3VudC50b1N0cmluZygpLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGNhdGVnb3J5SWQ6IGNhdGVnb3J5SWQsXG4gICAgICAgIGNoaWxkSWQ6IChmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZykgfHwgbnVsbCxcbiAgICAgICAgdHlwZTogKGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgXCJFWFBFTlNFXCIgfCBcIklOQ09NRVwiIHwgXCJEVUVcIikgfHwgXCJFWFBFTlNFXCIsXG5cbiAgICB9KS53aGVyZShlcShleHBlbnNlcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRyYW5zYWN0aW9uIHVwZGF0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGFzc3dvcmQocHJldlN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgcmV0dXJuIFwiVW5hdXRob3JpemVkXCI7XG5cbiAgICBjb25zdCBjdXJyZW50UGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJjdXJyZW50UGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IG5ld1Bhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwibmV3UGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IGZvcm1EYXRhLmdldChcImNvbmZpcm1QYXNzd29yZFwiKSBhcyBzdHJpbmc7XG5cbiAgICBpZiAoIWN1cnJlbnRQYXNzd29yZCB8fCAhbmV3UGFzc3dvcmQgfHwgIWNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gXCJBbGwgZmllbGRzIGFyZSByZXF1aXJlZFwiO1xuICAgIH1cblxuICAgIGlmIChuZXdQYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiBcIk5ldyBwYXNzd29yZHMgZG8gbm90IG1hdGNoXCI7XG4gICAgfVxuXG4gICAgaWYgKG5ld1Bhc3N3b3JkLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgcmV0dXJuIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnNcIjtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmlkLCBzZXNzaW9uLnVzZXIuaWQpLFxuICAgIH0pO1xuXG4gICAgaWYgKCF1c2VyKSByZXR1cm4gXCJVc2VyIG5vdCBmb3VuZFwiO1xuXG4gICAgY29uc3QgaXNNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGN1cnJlbnRQYXNzd29yZCwgdXNlci5wYXNzd29yZEhhc2gpO1xuICAgIGlmICghaXNNYXRjaCkge1xuICAgICAgICByZXR1cm4gXCJJbmNvcnJlY3QgY3VycmVudCBwYXNzd29yZFwiO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gobmV3UGFzc3dvcmQsIDEwKTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZSh1c2VycylcbiAgICAgICAgLnNldCh7IHBhc3N3b3JkSGFzaDogaGFzaGVkUGFzc3dvcmQgfSlcbiAgICAgICAgLndoZXJlKGVxKHVzZXJzLmlkLCBzZXNzaW9uLnVzZXIuaWQpKTtcblxuICAgIHJldHVybiBcIlN1Y2Nlc3NcIjtcbn1cblxuLy8gLS0tIENoaWxkIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2hpbGQoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGRvYiA9IChmb3JtRGF0YS5nZXQoXCJkb2JcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGdlbmRlciA9IChmb3JtRGF0YS5nZXQoXCJnZW5kZXJcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGRpYWdub3NpcyA9IChmb3JtRGF0YS5nZXQoXCJkaWFnbm9zaXNcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHBhcmVudElkID0gKGZvcm1EYXRhLmdldChcInBhcmVudElkXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcblxuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydChjaGlsZHJlbikudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkb2IsXG4gICAgICAgIGdlbmRlcixcbiAgICAgICAgZGlhZ25vc2lzLFxuICAgICAgICBwYXJlbnRJZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvY2hpbGRyZW5zXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2hpbGQgY3JlYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDaGlsZChpZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBzdGF0dXMgPSAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIFwiQUNUSVZFXCIgfCBcIklOQUNUSVZFXCIpIHx8IFwiQUNUSVZFXCI7XG4gICAgY29uc3QgZG9iID0gKGZvcm1EYXRhLmdldChcImRvYlwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgZ2VuZGVyID0gKGZvcm1EYXRhLmdldChcImdlbmRlclwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgZGlhZ25vc2lzID0gKGZvcm1EYXRhLmdldChcImRpYWdub3Npc1wiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgcGFyZW50SWQgPSAoZm9ybURhdGEuZ2V0KFwicGFyZW50SWRcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKGNoaWxkcmVuKS5zZXQoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRvYixcbiAgICAgICAgZ2VuZGVyLFxuICAgICAgICBkaWFnbm9zaXMsXG4gICAgICAgIHBhcmVudElkXG4gICAgfSkud2hlcmUoZXEoY2hpbGRyZW4uaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9jaGlsZHJlbnNcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDaGlsZCB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNoaWxkKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRiLmRlbGV0ZShjaGlsZHJlbikud2hlcmUoZXEoY2hpbGRyZW4uaWQsIGlkKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhbm5vdCBkZWxldGUgY2hpbGQgaW4gdXNlXCIgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNoaWxkIGRlbGV0ZWRcIiB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxUkFnQ3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/UserSwitcher.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-client] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-client] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-client] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$844fcd__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:844fcd [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
function UserSwitcher() {
    _s();
    const { currentUser, setCurrentUser, users } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExpenses"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "flex items-center w-full p-3 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl hover:shadow-md transition-all duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "w-8 h-8 rounded-full flex items-center justify-center text-white font-bold text-xs shadow-sm",
                        style: {
                            backgroundColor: currentUser.color || "#3b82f6"
                        },
                        children: currentUser.name[0]
                    }, void 0, false, {
                        fileName: "[project]/components/UserSwitcher.tsx",
                        lineNumber: 21,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-3 text-left flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 font-medium uppercase tracking-wider",
                                children: "Current User"
                            }, void 0, false, {
                                fileName: "[project]/components/UserSwitcher.tsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm font-semibold text-gray-900 dark:text-white",
                                children: currentUser.name
                            }, void 0, false, {
                                fileName: "[project]/components/UserSwitcher.tsx",
                                lineNumber: 29,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/UserSwitcher.tsx",
                        lineNumber: 27,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 text-gray-400 transition-transform", isOpen && "rotate-180")
                    }, void 0, false, {
                        fileName: "[project]/components/UserSwitcher.tsx",
                        lineNumber: 31,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/UserSwitcher.tsx",
                lineNumber: 17,
                columnNumber: 13
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-full left-0 right-0 mb-2 bg-white dark:bg-neutral-800 rounded-xl shadow-xl border border-gray-100 dark:border-neutral-700 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-1 border-t border-gray-100 dark:border-neutral-700 mt-1 space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                router.push('/profile');
                                setIsOpen(false);
                            },
                            className: "flex items-center w-full p-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
                                    className: "w-4 h-4 mr-3"
                                }, void 0, false, {
                                    fileName: "[project]/components/UserSwitcher.tsx",
                                    lineNumber: 46,
                                    columnNumber: 29
                                }, this),
                                "My Profile"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/UserSwitcher.tsx",
                            lineNumber: 39,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$844fcd__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["signOutAction"])(),
                            className: "flex items-center w-full p-2 rounded-lg text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
                                    className: "w-4 h-4 mr-3"
                                }, void 0, false, {
                                    fileName: "[project]/components/UserSwitcher.tsx",
                                    lineNumber: 53,
                                    columnNumber: 29
                                }, this),
                                "Log Out"
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/UserSwitcher.tsx",
                            lineNumber: 49,
                            columnNumber: 25
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/UserSwitcher.tsx",
                    lineNumber: 38,
                    columnNumber: 21
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/UserSwitcher.tsx",
                lineNumber: 35,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/UserSwitcher.tsx",
        lineNumber: 16,
        columnNumber: 9
    }, this);
}
_s(UserSwitcher, "HqLdSIzLOt8o/B3A8uyVKi8Pngo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExpenses"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"]
    ];
});
_c = UserSwitcher;
var _c;
__turbopack_context__.k.register(_c, "UserSwitcher");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/Sidebar.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-client] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/indian-rupee.js [app-client] (ecmascript) <export default as IndianRupee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tags$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tags.js [app-client] (ecmascript) <export default as Tags>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$baby$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Baby$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/baby.js [app-client] (ecmascript) <export default as Baby>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-client] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-client] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/UserSwitcher.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function Sidebar({ isOpen, onClose, onAddExpense, role = "ADMIN" }) {
    _s();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const allNavItems = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
            label: "Dashboard",
            href: "/dashboard",
            roles: [
                "ADMIN",
                "THERAPIST",
                "PARENT"
            ]
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
            label: "Schedule",
            href: "/schedule",
            roles: [
                "ADMIN",
                "THERAPIST",
                "PARENT"
            ]
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__["IndianRupee"],
            label: "All Expenses",
            href: "/expenses",
            roles: [
                "ADMIN"
            ]
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$baby$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Baby$3e$__["Baby"],
            label: "Childrens",
            href: "/childrens",
            roles: [
                "ADMIN",
                "THERAPIST",
                "PARENT"
            ]
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
            label: "Due List",
            href: "/dues",
            roles: [
                "ADMIN",
                "PARENT"
            ]
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tags$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Tags$3e$__["Tags"],
            label: "Categories",
            href: "/categories",
            roles: [
                "ADMIN"
            ]
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            label: "Users",
            href: "/users",
            roles: [
                "ADMIN"
            ]
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
            label: "Services",
            href: "/therapies",
            roles: [
                "ADMIN",
                "THERAPIST"
            ]
        }
    ];
    const navItems = allNavItems.filter((item)=>item.roles.includes(role));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/40 z-30 md:hidden backdrop-blur-sm transition-opacity duration-300",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 39,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-neutral-900 border-r border-gray-200 dark:border-neutral-800 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} flex flex-col overflow-y-auto`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 pb-2 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-orange-500/20 shadow-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
                                                className: "w-6 h-6 text-white"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Sidebar.tsx",
                                                lineNumber: 54,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sidebar.tsx",
                                            lineNumber: 53,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent leading-none",
                                                    children: "Wonderbees"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                    className: "text-xs font-medium text-gray-400 tracking-wide",
                                                    children: "Therapy Centre"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.tsx",
                                                    lineNumber: 60,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/Sidebar.tsx",
                                            lineNumber: 56,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/Sidebar.tsx",
                                    lineNumber: 52,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                        className: "w-5 h-5"
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 67,
                                        columnNumber: 29
                                    }, this)
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.tsx",
                                    lineNumber: 63,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Sidebar.tsx",
                            lineNumber: 51,
                            columnNumber: 21
                        }, this),
                        role === "ADMIN" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onAddExpense,
                                className: "group flex items-center justify-center w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl font-semibold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-white/20 p-1 rounded-lg mr-3 group-hover:bg-white/30 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/Sidebar.tsx",
                                            lineNumber: 78,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 77,
                                        columnNumber: 33
                                    }, this),
                                    "Add Expense"
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 73,
                                columnNumber: 29
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Sidebar.tsx",
                            lineNumber: 72,
                            columnNumber: 25
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex-1 px-4 space-y-1.5 overflow-y-auto custom-scrollbar",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-2",
                                    children: "Menu"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.tsx",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, this),
                                navItems.map((item)=>{
                                    const isActive = pathname === item.href;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("group flex items-center w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 relative overflow-hidden", isActive ? "text-blue-600 bg-blue-50 dark:bg-blue-900/10" : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-neutral-800 hover:text-gray-900 dark:hover:text-gray-200"),
                                        children: [
                                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-600 rounded-r-full"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Sidebar.tsx",
                                                lineNumber: 103,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5 mr-3 transition-colors", isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300")
                                            }, void 0, false, {
                                                fileName: "[project]/components/Sidebar.tsx",
                                                lineNumber: 105,
                                                columnNumber: 37
                                            }, this),
                                            item.label
                                        ]
                                    }, item.href, true, {
                                        fileName: "[project]/components/Sidebar.tsx",
                                        lineNumber: 92,
                                        columnNumber: 33
                                    }, this);
                                })
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/Sidebar.tsx",
                            lineNumber: 86,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-t border-gray-100 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-900/50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserSwitcher$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
                                fileName: "[project]/components/Sidebar.tsx",
                                lineNumber: 117,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/Sidebar.tsx",
                            lineNumber: 116,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/Sidebar.tsx",
                    lineNumber: 49,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 45,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true);
}
_s(Sidebar, "xbyQPtUVMO7MNj7WjJlpdWqRcTo=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"]
    ];
});
_c = Sidebar;
var _c;
__turbopack_context__.k.register(_c, "Sidebar");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data:800279 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60c6e29ece8d1f4f6154f69defb223a13c651b4b10":"addExpenseAction"},"lib/actions.ts",""] */ __turbopack_context__.s([
    "addExpenseAction",
    ()=>addExpenseAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var addExpenseAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60c6e29ece8d1f4f6154f69defb223a13c651b4b10", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addExpenseAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIkAvYXV0aFwiO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYlwiO1xuaW1wb3J0IHsgdXNlcnMsIGV4cGVuc2VzLCBjYXRlZ29yaWVzLCBjaGlsZHJlbiwgdGhlcmFwaWVzLCBzZXNzaW9ucyB9IGZyb20gXCIuL2RiL3NjaGVtYVwiOyAvLyBSZW1vdmVkIGZhbWlsaWVzLCBzdGFmZnMsIGJ1ZGdldHNcblxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IGVxLCBkZXNjLCBhbmQgfSBmcm9tIFwiZHJpenpsZS1vcm1cIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRoZW50aWNhdGUoXG4gICAgcHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhLFxuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuICAgICAgICBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7IC4uLmNyZWRlbnRpYWxzLCByZWRpcmVjdFRvOiBcIi9kYXNoYm9hcmRcIiB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJDcmVkZW50aWFsc1NpZ25pblwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNyZWRlbnRpYWxzLlwiO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXRBY3Rpb24oKSB7XG4gICAgYXdhaXQgc2lnbk91dCh7IHJlZGlyZWN0VG86IFwiL1wiIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIocHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcblxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFuYW1lKSByZXR1cm4gXCJNaXNzaW5nIGZpZWxkc1wiO1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4gXCJVc2VyIGFscmVhZHkgZXhpc3RzXCI7XG5cbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG5cbiAgICAvLyBEZWZhdWx0IHJvbGU6IFBBUkVOVD8gT3IgQURNSU4gZm9yIGZpcnN0IHVzZXI/IFxuICAgIC8vIExvZ2ljOiBJZiBubyB1c2VycyBleGlzdCwgZmlyc3QgaXMgQURNSU4uIE90aGVyd2lzZSBQQVJFTlQuXG4gICAgLy8gRm9yIG5vdywgbGV0J3MgaGFyZGNvZGUgUEFSRU5UIHVubGVzcyBleHBsaWNpdGx5IHNldCBlbHNld2hlcmUgdXN1YWxseS5cbiAgICAvLyBCdXQgZm9yIHRoaXMgXCJSZXZhbXBcIiBtYXliZSB3ZSBhc3N1bWUgQWRtaW4gY3JlYXRlcyB1c2Vycz9cbiAgICAvLyBJZiB0aGlzIGlzIHB1YmxpYyByZWdpc3RyYXRpb24sIFBBUkVOVCBpcyBzYWZlci5cblxuICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IGRiLnNlbGVjdCgpLmZyb20odXNlcnMpLnRoZW4ocmVzID0+IHJlcy5sZW5ndGgpO1xuICAgIGNvbnN0IHJvbGUgPSB1c2VyQ291bnQgPT09IDAgPyBcIkFETUlOXCIgOiBcIlBBUkVOVFwiO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZTogcm9sZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFwiU3VjY2Vzc1wiO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCByb2xlID0gZm9ybURhdGEuZ2V0KFwicm9sZVwiKSBhcyBcIkFETUlOXCIgfCBcIlRIRVJBUElTVFwiIHwgXCJQQVJFTlRcIjtcbiAgICBjb25zdCBxdWFsaWZpY2F0aW9uID0gKGZvcm1EYXRhLmdldChcInF1YWxpZmljYXRpb25cIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIXJvbGUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgYWxyZWFkeSBleGlzdHNcIiB9O1xuXG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZSxcbiAgICAgICAgcXVhbGlmaWNhdGlvbixcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVXNlciBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEV4cGVuc2VBY3Rpb24ocHJldlN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG4gICAgLy8gT25seSBBZG1pbiBjYW4gYWRkIGV4cGVuc2VzPyBPciBUaGVyYXBpc3Q/XG4gICAgLy8gTGV0J3MgYWxsb3cgQWRtaW4gYW5kIG1heWJlIFRoZXJhcGlzdC5cbiAgICBpZiAoc2Vzc2lvbi51c2VyLnJvbGUgPT09IFwiUEFSRU5UXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuXG4gICAgY29uc3QgYW1vdW50ID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikgYXMgc3RyaW5nKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmcpIHx8IFwiXCI7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHR5cGUgPSAoZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBcIkVYUEVOU0VcIiB8IFwiSU5DT01FXCIgfCBcIkRVRVwiKSB8fCBcIkVYUEVOU0VcIjtcbiAgICBjb25zdCBjaGlsZElkID0gKGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIC8vIHN0YWZmSWQgcmVtb3ZlZC4gdHlwZSBpcyBlbm91Z2g/IE9yIG1heWJlIHJlY29yZGVkQnk/XG5cblxuICAgIGlmICghYW1vdW50IHx8ICFkYXRlU3RyKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGlmICghZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlJZFwiKSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IGlzIHJlcXVpcmVkXCIgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoZXhwZW5zZXMpLnZhbHVlcyh7XG4gICAgICAgIC8vIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLCAvLyBSZW1vdmVkIHVzZXJJZCBjb25zdHJhaW50IGZyb20gc2NoZW1hPyBObywga2VlcCBpdCBhcyAncmVjb3JkZWQgYnknIGlmIG5lZWRlZD8gXG4gICAgICAgIC8vIFNjaGVtYSBkZWZpbml0aW9uOiBcInVzZXJJZFwiIHJlbW92ZWQ/IExldCdzIGNoZWNrIHNjaGVtYS50cyBjb250ZW50IEkgd3JvdGUuXG4gICAgICAgIC8vIEkga2VwdCAnZXhwZW5zZScgdGFibGUgYnV0IHJlZmFjdG9yaW5nLlxuICAgICAgICAvLyBXYWl0LCBJIGNoYW5nZWQgJ3VzZXJJZCcgdG8gJ3JlY29yZGVkQnknIChvcHRpb25hbCkgaW4gbXkgdGhvdWdodCwgYnV0IGxldCdzIGNoZWNrIHdoYXQgSSBhY3R1YWxseSB3cm90ZS5cbiAgICAgICAgLy8gSSB3cm90ZTogcmVjb3JkZWRCeTogdXVpZChcInJlY29yZGVkX2J5XCIpLnJlZmVyZW5jZXMoKCkgPT4gdXNlcnMuaWQpLCAvLyBBZG1pbiB3aG8gcmVjb3JkZWQgaXRcblxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgYW1vdW50OiBhbW91bnQudG9TdHJpbmcoKSxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGNhdGVnb3J5SWQ6IChmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeUlkXCIpIGFzIHN0cmluZyksXG4gICAgICAgIGNoaWxkSWQ6IGNoaWxkSWQsXG4gICAgICAgIHJlY29yZGVkQnk6IHNlc3Npb24udXNlci5pZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVHJhbnNhY3Rpb24gYWRkZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0R1ZUFzUGFpZChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgZGIucXVlcnkuZXhwZW5zZXMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKGV4cGVuc2VzLmlkLCBpZClcbiAgICB9KTtcblxuICAgIGlmICghZXhwZW5zZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJSZWNvcmQgbm90IGZvdW5kXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShleHBlbnNlcykuc2V0KHtcbiAgICAgICAgdHlwZTogXCJJTkNPTUVcIlxuICAgIH0pLndoZXJlKGVxKGV4cGVuc2VzLmlkLCBpZCkpO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiUGF5bWVudCBtYXJrZWQgYXMgcGFpZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVVc2VyKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBpZiAodXNlcklkID09PSBzZXNzaW9uLnVzZXIuaWQpIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2Fubm90IGRlbGV0ZSB5b3Vyc2VsZlwiIH07XG5cbiAgICBhd2FpdCBkYi5kZWxldGUodXNlcnMpLndoZXJlKGVxKHVzZXJzLmlkLCB1c2VySWQpKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi91c2Vyc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgZGVsZXRlZFwiIH07XG59XG5cblxuLy8gLS0tIFRoZXJhcHkgQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVUaGVyYXB5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBwcmljZSA9IChmb3JtRGF0YS5nZXQoXCJwcmljZVwiKSBhcyBzdHJpbmcpIHx8IFwiMFwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBQ1RJVkVcIiB8IFwiSU5BQ1RJVkVcIikgfHwgXCJBQ1RJVkVcIjtcbiAgICBjb25zdCBkdXJhdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZWZhdWx0RHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZykgfHwgXCI0NVwiO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHRoZXJhcGllcykudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNoYXJnZVBlclNlc3Npb246IHByaWNlLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRlZmF1bHREdXJhdGlvbk1pbnV0ZXM6IHBhcnNlSW50KGR1cmF0aW9uKSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3RoZXJhcGllc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRoZXJhcHkoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSAoZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikgYXMgc3RyaW5nKSB8fCBcIlwiO1xuICAgIGNvbnN0IHByaWNlID0gKGZvcm1EYXRhLmdldChcInByaWNlXCIpIGFzIHN0cmluZykgfHwgXCIwXCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gKGZvcm1EYXRhLmdldChcImRlZmF1bHREdXJhdGlvbk1pbnV0ZXNcIikgYXMgc3RyaW5nKSB8fCBcIjQ1XCI7XG5cbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi51cGRhdGUodGhlcmFwaWVzKS5zZXQoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgY2hhcmdlUGVyU2Vzc2lvbjogcHJpY2UsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZGVmYXVsdER1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgIH0pLndoZXJlKGVxKHRoZXJhcGllcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3RoZXJhcGllc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRoZXJhcHkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGIuZGVsZXRlKHRoZXJhcGllcykud2hlcmUoZXEodGhlcmFwaWVzLmlkLCBpZCkpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi90aGVyYXBpZXNcIik7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVGhlcmFweSBzZXJ2aWNlIGRlbGV0ZWRcIiB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGRlbGV0ZSB0aGVyYXB5LiBJdCBtaWdodCBiZSBsaW5rZWQgdG8gZXhpc3Rpbmcgc2Vzc2lvbnMuXCIgfTtcbiAgICB9XG59XG5cblxuLy8gLS0tIFNlc3Npb24gQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTZXNzaW9uKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgLy8gQWRtaW4gb3IgVGhlcmFwaXN0IGNhbiBjcmVhdGUgc2Vzc2lvbnNcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSA9PT0gXCJQQVJFTlRcIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgY2hpbGRJZCA9IGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcGlzdElkID0gZm9ybURhdGEuZ2V0KFwidGhlcmFwaXN0SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcHlJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcHlJZFwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZm9ybURhdGEuZ2V0KFwiZHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZyB8fCBcIjQ1XCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIlNDSEVEVUxFRFwiIHwgXCJDT01QTEVURURcIiB8IFwiQ0FOQ0VMTEVEXCIgfCBcIk1JU1NFRFwiKSB8fCBcIlNDSEVEVUxFRFwiO1xuXG4gICAgaWYgKCFjaGlsZElkIHx8ICF0aGVyYXBpc3RJZCB8fCAhdGhlcmFweUlkIHx8ICFkYXRlU3RyKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyByZXF1aXJlZCBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGF3YWl0IGRiLmluc2VydChzZXNzaW9ucykudmFsdWVzKHtcbiAgICAgICAgY2hpbGRJZCxcbiAgICAgICAgdGhlcmFwaXN0SWQsXG4gICAgICAgIHRoZXJhcHlJZCxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGR1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgICAgICBzdGF0dXMsXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gc2NoZWR1bGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNlc3Npb24oaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSA9PT0gXCJQQVJFTlRcIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgY2hpbGRJZCA9IGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcGlzdElkID0gZm9ybURhdGEuZ2V0KFwidGhlcmFwaXN0SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcHlJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcHlJZFwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZm9ybURhdGEuZ2V0KFwiZHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZyB8fCBcIjQ1XCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIlNDSEVEVUxFRFwiIHwgXCJDT01QTEVURURcIiB8IFwiQ0FOQ0VMTEVEXCIgfCBcIk1JU1NFRFwiKSB8fCBcIlNDSEVEVUxFRFwiO1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKHNlc3Npb25zKS5zZXQoe1xuICAgICAgICBjaGlsZElkLFxuICAgICAgICB0aGVyYXBpc3RJZCxcbiAgICAgICAgdGhlcmFweUlkLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlU3RyKSxcbiAgICAgICAgZHVyYXRpb25NaW51dGVzOiBwYXJzZUludChkdXJhdGlvbiksXG4gICAgICAgIHN0YXR1cyxcbiAgICB9KS53aGVyZShlcShzZXNzaW9ucy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NjaGVkdWxlXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiU2Vzc2lvbiB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNlc3Npb24oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIuZGVsZXRlKHNlc3Npb25zKS53aGVyZShlcShzZXNzaW9ucy5pZCwgaWQpKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gZGVsZXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyKHVzZXJJZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIgJiYgc2Vzc2lvbj8udXNlcj8uaWQgIT09IHVzZXJJZCkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoXCJyb2xlXCIpIGFzIFwiQURNSU5cIiB8IFwiVEhFUkFQSVNUXCIgfCBcIlBBUkVOVFwiO1xuICAgIGNvbnN0IHF1YWxpZmljYXRpb24gPSAoZm9ybURhdGEuZ2V0KFwicXVhbGlmaWNhdGlvblwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG5cbiAgICBpZiAoIW5hbWUgfHwgIWVtYWlsKSByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgZmllbGRzXCIgfTtcblxuICAgIGNvbnN0IHVwZGF0ZURhdGE6IGFueSA9IHsgbmFtZSwgZW1haWwsIHF1YWxpZmljYXRpb24gfTtcbiAgICBpZiAoc2Vzc2lvbi51c2VyLnJvbGUgPT09IFwiQURNSU5cIiAmJiByb2xlKSB7XG4gICAgICAgIHVwZGF0ZURhdGEucm9sZSA9IHJvbGU7XG4gICAgfVxuXG4gICAgYXdhaXQgZGIudXBkYXRlKHVzZXJzKVxuICAgICAgICAuc2V0KHVwZGF0ZURhdGEpXG4gICAgICAgIC53aGVyZShlcSh1c2Vycy5pZCwgdXNlcklkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgdXBkYXRlZFwiIH07XG59XG5cbi8vIC0tLSBDYXRlZ29yeSBBY3Rpb25zIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydChjYXRlZ29yaWVzIGFzIGFueSkudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgLy8gZmFtaWx5SWQgcmVtb3ZlZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYXRlZ29yeSBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3J5KGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShjYXRlZ29yaWVzKS5zZXQoeyBuYW1lIH0pLndoZXJlKGVxKGNhdGVnb3JpZXMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2F0ZWdvcnkgdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXRlZ29yeShpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkYi5kZWxldGUoY2F0ZWdvcmllcykud2hlcmUoZXEoY2F0ZWdvcmllcy5pZCwgaWQpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2Fubm90IGRlbGV0ZSBjYXRlZ29yeSBpbiB1c2VcIiB9O1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IGRlbGV0ZWRcIiB9O1xufVxuXG4vLyAtLS0gRXhwZW5zZSBBY3Rpb25zIC0tLSAoVXBkYXRlL0RlbGV0ZSlcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFeHBlbnNlKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIC8vIFBhcmVudCBjYW4ndCBkZWxldGU/IFllcy5cblxuICAgIGF3YWl0IGRiLmRlbGV0ZShleHBlbnNlcykud2hlcmUoZXEoZXhwZW5zZXMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiRXhwZW5zZSBkZWxldGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2UoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcImFtb3VudFwiKSBhcyBzdHJpbmcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBkYXRlU3RyID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgY2F0ZWdvcnlJZCA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5SWRcIikgYXMgc3RyaW5nO1xuXG4gICAgaWYgKCFhbW91bnQgfHwgIWRhdGVTdHIgfHwgIWNhdGVnb3J5SWQpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJNaXNzaW5nIGZpZWxkc1wiIH07XG4gICAgfVxuXG4gICAgYXdhaXQgZGIudXBkYXRlKGV4cGVuc2VzKS5zZXQoe1xuICAgICAgICBhbW91bnQ6IGFtb3VudC50b1N0cmluZygpLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGNhdGVnb3J5SWQ6IGNhdGVnb3J5SWQsXG4gICAgICAgIGNoaWxkSWQ6IChmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZykgfHwgbnVsbCxcbiAgICAgICAgdHlwZTogKGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgXCJFWFBFTlNFXCIgfCBcIklOQ09NRVwiIHwgXCJEVUVcIikgfHwgXCJFWFBFTlNFXCIsXG5cbiAgICB9KS53aGVyZShlcShleHBlbnNlcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRyYW5zYWN0aW9uIHVwZGF0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGFzc3dvcmQocHJldlN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgcmV0dXJuIFwiVW5hdXRob3JpemVkXCI7XG5cbiAgICBjb25zdCBjdXJyZW50UGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJjdXJyZW50UGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IG5ld1Bhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwibmV3UGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IGZvcm1EYXRhLmdldChcImNvbmZpcm1QYXNzd29yZFwiKSBhcyBzdHJpbmc7XG5cbiAgICBpZiAoIWN1cnJlbnRQYXNzd29yZCB8fCAhbmV3UGFzc3dvcmQgfHwgIWNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gXCJBbGwgZmllbGRzIGFyZSByZXF1aXJlZFwiO1xuICAgIH1cblxuICAgIGlmIChuZXdQYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiBcIk5ldyBwYXNzd29yZHMgZG8gbm90IG1hdGNoXCI7XG4gICAgfVxuXG4gICAgaWYgKG5ld1Bhc3N3b3JkLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgcmV0dXJuIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnNcIjtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmlkLCBzZXNzaW9uLnVzZXIuaWQpLFxuICAgIH0pO1xuXG4gICAgaWYgKCF1c2VyKSByZXR1cm4gXCJVc2VyIG5vdCBmb3VuZFwiO1xuXG4gICAgY29uc3QgaXNNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGN1cnJlbnRQYXNzd29yZCwgdXNlci5wYXNzd29yZEhhc2gpO1xuICAgIGlmICghaXNNYXRjaCkge1xuICAgICAgICByZXR1cm4gXCJJbmNvcnJlY3QgY3VycmVudCBwYXNzd29yZFwiO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gobmV3UGFzc3dvcmQsIDEwKTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZSh1c2VycylcbiAgICAgICAgLnNldCh7IHBhc3N3b3JkSGFzaDogaGFzaGVkUGFzc3dvcmQgfSlcbiAgICAgICAgLndoZXJlKGVxKHVzZXJzLmlkLCBzZXNzaW9uLnVzZXIuaWQpKTtcblxuICAgIHJldHVybiBcIlN1Y2Nlc3NcIjtcbn1cblxuLy8gLS0tIENoaWxkIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2hpbGQoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGRvYiA9IChmb3JtRGF0YS5nZXQoXCJkb2JcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGdlbmRlciA9IChmb3JtRGF0YS5nZXQoXCJnZW5kZXJcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGRpYWdub3NpcyA9IChmb3JtRGF0YS5nZXQoXCJkaWFnbm9zaXNcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHBhcmVudElkID0gKGZvcm1EYXRhLmdldChcInBhcmVudElkXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcblxuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydChjaGlsZHJlbikudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkb2IsXG4gICAgICAgIGdlbmRlcixcbiAgICAgICAgZGlhZ25vc2lzLFxuICAgICAgICBwYXJlbnRJZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvY2hpbGRyZW5zXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2hpbGQgY3JlYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDaGlsZChpZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBzdGF0dXMgPSAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIFwiQUNUSVZFXCIgfCBcIklOQUNUSVZFXCIpIHx8IFwiQUNUSVZFXCI7XG4gICAgY29uc3QgZG9iID0gKGZvcm1EYXRhLmdldChcImRvYlwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgZ2VuZGVyID0gKGZvcm1EYXRhLmdldChcImdlbmRlclwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgZGlhZ25vc2lzID0gKGZvcm1EYXRhLmdldChcImRpYWdub3Npc1wiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgcGFyZW50SWQgPSAoZm9ybURhdGEuZ2V0KFwicGFyZW50SWRcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKGNoaWxkcmVuKS5zZXQoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRvYixcbiAgICAgICAgZ2VuZGVyLFxuICAgICAgICBkaWFnbm9zaXMsXG4gICAgICAgIHBhcmVudElkXG4gICAgfSkud2hlcmUoZXEoY2hpbGRyZW4uaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9jaGlsZHJlbnNcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDaGlsZCB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNoaWxkKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRiLmRlbGV0ZShjaGlsZHJlbikud2hlcmUoZXEoY2hpbGRyZW4uaWQsIGlkKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhbm5vdCBkZWxldGUgY2hpbGQgaW4gdXNlXCIgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNoaWxkIGRlbGV0ZWRcIiB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3UkFzR3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data:3c08dc [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60a0e6c1c04b9d54250546559c6761899044267282":"updateExpense"},"lib/actions.ts",""] */ __turbopack_context__.s([
    "updateExpense",
    ()=>updateExpense
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateExpense = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60a0e6c1c04b9d54250546559c6761899044267282", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateExpense"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIkAvYXV0aFwiO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYlwiO1xuaW1wb3J0IHsgdXNlcnMsIGV4cGVuc2VzLCBjYXRlZ29yaWVzLCBjaGlsZHJlbiwgdGhlcmFwaWVzLCBzZXNzaW9ucyB9IGZyb20gXCIuL2RiL3NjaGVtYVwiOyAvLyBSZW1vdmVkIGZhbWlsaWVzLCBzdGFmZnMsIGJ1ZGdldHNcblxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IGVxLCBkZXNjLCBhbmQgfSBmcm9tIFwiZHJpenpsZS1vcm1cIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRoZW50aWNhdGUoXG4gICAgcHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhLFxuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuICAgICAgICBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7IC4uLmNyZWRlbnRpYWxzLCByZWRpcmVjdFRvOiBcIi9kYXNoYm9hcmRcIiB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJDcmVkZW50aWFsc1NpZ25pblwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNyZWRlbnRpYWxzLlwiO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXRBY3Rpb24oKSB7XG4gICAgYXdhaXQgc2lnbk91dCh7IHJlZGlyZWN0VG86IFwiL1wiIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIocHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcblxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFuYW1lKSByZXR1cm4gXCJNaXNzaW5nIGZpZWxkc1wiO1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4gXCJVc2VyIGFscmVhZHkgZXhpc3RzXCI7XG5cbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG5cbiAgICAvLyBEZWZhdWx0IHJvbGU6IFBBUkVOVD8gT3IgQURNSU4gZm9yIGZpcnN0IHVzZXI/IFxuICAgIC8vIExvZ2ljOiBJZiBubyB1c2VycyBleGlzdCwgZmlyc3QgaXMgQURNSU4uIE90aGVyd2lzZSBQQVJFTlQuXG4gICAgLy8gRm9yIG5vdywgbGV0J3MgaGFyZGNvZGUgUEFSRU5UIHVubGVzcyBleHBsaWNpdGx5IHNldCBlbHNld2hlcmUgdXN1YWxseS5cbiAgICAvLyBCdXQgZm9yIHRoaXMgXCJSZXZhbXBcIiBtYXliZSB3ZSBhc3N1bWUgQWRtaW4gY3JlYXRlcyB1c2Vycz9cbiAgICAvLyBJZiB0aGlzIGlzIHB1YmxpYyByZWdpc3RyYXRpb24sIFBBUkVOVCBpcyBzYWZlci5cblxuICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IGRiLnNlbGVjdCgpLmZyb20odXNlcnMpLnRoZW4ocmVzID0+IHJlcy5sZW5ndGgpO1xuICAgIGNvbnN0IHJvbGUgPSB1c2VyQ291bnQgPT09IDAgPyBcIkFETUlOXCIgOiBcIlBBUkVOVFwiO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZTogcm9sZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFwiU3VjY2Vzc1wiO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCByb2xlID0gZm9ybURhdGEuZ2V0KFwicm9sZVwiKSBhcyBcIkFETUlOXCIgfCBcIlRIRVJBUElTVFwiIHwgXCJQQVJFTlRcIjtcbiAgICBjb25zdCBxdWFsaWZpY2F0aW9uID0gKGZvcm1EYXRhLmdldChcInF1YWxpZmljYXRpb25cIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIXJvbGUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgYWxyZWFkeSBleGlzdHNcIiB9O1xuXG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZSxcbiAgICAgICAgcXVhbGlmaWNhdGlvbixcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVXNlciBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEV4cGVuc2VBY3Rpb24ocHJldlN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG4gICAgLy8gT25seSBBZG1pbiBjYW4gYWRkIGV4cGVuc2VzPyBPciBUaGVyYXBpc3Q/XG4gICAgLy8gTGV0J3MgYWxsb3cgQWRtaW4gYW5kIG1heWJlIFRoZXJhcGlzdC5cbiAgICBpZiAoc2Vzc2lvbi51c2VyLnJvbGUgPT09IFwiUEFSRU5UXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuXG4gICAgY29uc3QgYW1vdW50ID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikgYXMgc3RyaW5nKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmcpIHx8IFwiXCI7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHR5cGUgPSAoZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBcIkVYUEVOU0VcIiB8IFwiSU5DT01FXCIgfCBcIkRVRVwiKSB8fCBcIkVYUEVOU0VcIjtcbiAgICBjb25zdCBjaGlsZElkID0gKGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIC8vIHN0YWZmSWQgcmVtb3ZlZC4gdHlwZSBpcyBlbm91Z2g/IE9yIG1heWJlIHJlY29yZGVkQnk/XG5cblxuICAgIGlmICghYW1vdW50IHx8ICFkYXRlU3RyKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGlmICghZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlJZFwiKSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IGlzIHJlcXVpcmVkXCIgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoZXhwZW5zZXMpLnZhbHVlcyh7XG4gICAgICAgIC8vIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLCAvLyBSZW1vdmVkIHVzZXJJZCBjb25zdHJhaW50IGZyb20gc2NoZW1hPyBObywga2VlcCBpdCBhcyAncmVjb3JkZWQgYnknIGlmIG5lZWRlZD8gXG4gICAgICAgIC8vIFNjaGVtYSBkZWZpbml0aW9uOiBcInVzZXJJZFwiIHJlbW92ZWQ/IExldCdzIGNoZWNrIHNjaGVtYS50cyBjb250ZW50IEkgd3JvdGUuXG4gICAgICAgIC8vIEkga2VwdCAnZXhwZW5zZScgdGFibGUgYnV0IHJlZmFjdG9yaW5nLlxuICAgICAgICAvLyBXYWl0LCBJIGNoYW5nZWQgJ3VzZXJJZCcgdG8gJ3JlY29yZGVkQnknIChvcHRpb25hbCkgaW4gbXkgdGhvdWdodCwgYnV0IGxldCdzIGNoZWNrIHdoYXQgSSBhY3R1YWxseSB3cm90ZS5cbiAgICAgICAgLy8gSSB3cm90ZTogcmVjb3JkZWRCeTogdXVpZChcInJlY29yZGVkX2J5XCIpLnJlZmVyZW5jZXMoKCkgPT4gdXNlcnMuaWQpLCAvLyBBZG1pbiB3aG8gcmVjb3JkZWQgaXRcblxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgYW1vdW50OiBhbW91bnQudG9TdHJpbmcoKSxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGNhdGVnb3J5SWQ6IChmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeUlkXCIpIGFzIHN0cmluZyksXG4gICAgICAgIGNoaWxkSWQ6IGNoaWxkSWQsXG4gICAgICAgIHJlY29yZGVkQnk6IHNlc3Npb24udXNlci5pZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVHJhbnNhY3Rpb24gYWRkZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0R1ZUFzUGFpZChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgZGIucXVlcnkuZXhwZW5zZXMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKGV4cGVuc2VzLmlkLCBpZClcbiAgICB9KTtcblxuICAgIGlmICghZXhwZW5zZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJSZWNvcmQgbm90IGZvdW5kXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShleHBlbnNlcykuc2V0KHtcbiAgICAgICAgdHlwZTogXCJJTkNPTUVcIlxuICAgIH0pLndoZXJlKGVxKGV4cGVuc2VzLmlkLCBpZCkpO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiUGF5bWVudCBtYXJrZWQgYXMgcGFpZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVVc2VyKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBpZiAodXNlcklkID09PSBzZXNzaW9uLnVzZXIuaWQpIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2Fubm90IGRlbGV0ZSB5b3Vyc2VsZlwiIH07XG5cbiAgICBhd2FpdCBkYi5kZWxldGUodXNlcnMpLndoZXJlKGVxKHVzZXJzLmlkLCB1c2VySWQpKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi91c2Vyc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgZGVsZXRlZFwiIH07XG59XG5cblxuLy8gLS0tIFRoZXJhcHkgQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVUaGVyYXB5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBwcmljZSA9IChmb3JtRGF0YS5nZXQoXCJwcmljZVwiKSBhcyBzdHJpbmcpIHx8IFwiMFwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBQ1RJVkVcIiB8IFwiSU5BQ1RJVkVcIikgfHwgXCJBQ1RJVkVcIjtcbiAgICBjb25zdCBkdXJhdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZWZhdWx0RHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZykgfHwgXCI0NVwiO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHRoZXJhcGllcykudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNoYXJnZVBlclNlc3Npb246IHByaWNlLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRlZmF1bHREdXJhdGlvbk1pbnV0ZXM6IHBhcnNlSW50KGR1cmF0aW9uKSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3RoZXJhcGllc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRoZXJhcHkoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSAoZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikgYXMgc3RyaW5nKSB8fCBcIlwiO1xuICAgIGNvbnN0IHByaWNlID0gKGZvcm1EYXRhLmdldChcInByaWNlXCIpIGFzIHN0cmluZykgfHwgXCIwXCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gKGZvcm1EYXRhLmdldChcImRlZmF1bHREdXJhdGlvbk1pbnV0ZXNcIikgYXMgc3RyaW5nKSB8fCBcIjQ1XCI7XG5cbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi51cGRhdGUodGhlcmFwaWVzKS5zZXQoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgY2hhcmdlUGVyU2Vzc2lvbjogcHJpY2UsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZGVmYXVsdER1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgIH0pLndoZXJlKGVxKHRoZXJhcGllcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3RoZXJhcGllc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRoZXJhcHkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGIuZGVsZXRlKHRoZXJhcGllcykud2hlcmUoZXEodGhlcmFwaWVzLmlkLCBpZCkpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi90aGVyYXBpZXNcIik7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVGhlcmFweSBzZXJ2aWNlIGRlbGV0ZWRcIiB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGRlbGV0ZSB0aGVyYXB5LiBJdCBtaWdodCBiZSBsaW5rZWQgdG8gZXhpc3Rpbmcgc2Vzc2lvbnMuXCIgfTtcbiAgICB9XG59XG5cblxuLy8gLS0tIFNlc3Npb24gQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTZXNzaW9uKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgLy8gQWRtaW4gb3IgVGhlcmFwaXN0IGNhbiBjcmVhdGUgc2Vzc2lvbnNcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSA9PT0gXCJQQVJFTlRcIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgY2hpbGRJZCA9IGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcGlzdElkID0gZm9ybURhdGEuZ2V0KFwidGhlcmFwaXN0SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcHlJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcHlJZFwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZm9ybURhdGEuZ2V0KFwiZHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZyB8fCBcIjQ1XCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIlNDSEVEVUxFRFwiIHwgXCJDT01QTEVURURcIiB8IFwiQ0FOQ0VMTEVEXCIgfCBcIk1JU1NFRFwiKSB8fCBcIlNDSEVEVUxFRFwiO1xuXG4gICAgaWYgKCFjaGlsZElkIHx8ICF0aGVyYXBpc3RJZCB8fCAhdGhlcmFweUlkIHx8ICFkYXRlU3RyKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyByZXF1aXJlZCBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGF3YWl0IGRiLmluc2VydChzZXNzaW9ucykudmFsdWVzKHtcbiAgICAgICAgY2hpbGRJZCxcbiAgICAgICAgdGhlcmFwaXN0SWQsXG4gICAgICAgIHRoZXJhcHlJZCxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGR1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgICAgICBzdGF0dXMsXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gc2NoZWR1bGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNlc3Npb24oaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSA9PT0gXCJQQVJFTlRcIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgY2hpbGRJZCA9IGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcGlzdElkID0gZm9ybURhdGEuZ2V0KFwidGhlcmFwaXN0SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcHlJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcHlJZFwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZm9ybURhdGEuZ2V0KFwiZHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZyB8fCBcIjQ1XCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIlNDSEVEVUxFRFwiIHwgXCJDT01QTEVURURcIiB8IFwiQ0FOQ0VMTEVEXCIgfCBcIk1JU1NFRFwiKSB8fCBcIlNDSEVEVUxFRFwiO1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKHNlc3Npb25zKS5zZXQoe1xuICAgICAgICBjaGlsZElkLFxuICAgICAgICB0aGVyYXBpc3RJZCxcbiAgICAgICAgdGhlcmFweUlkLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlU3RyKSxcbiAgICAgICAgZHVyYXRpb25NaW51dGVzOiBwYXJzZUludChkdXJhdGlvbiksXG4gICAgICAgIHN0YXR1cyxcbiAgICB9KS53aGVyZShlcShzZXNzaW9ucy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NjaGVkdWxlXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiU2Vzc2lvbiB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNlc3Npb24oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIuZGVsZXRlKHNlc3Npb25zKS53aGVyZShlcShzZXNzaW9ucy5pZCwgaWQpKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gZGVsZXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyKHVzZXJJZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIgJiYgc2Vzc2lvbj8udXNlcj8uaWQgIT09IHVzZXJJZCkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoXCJyb2xlXCIpIGFzIFwiQURNSU5cIiB8IFwiVEhFUkFQSVNUXCIgfCBcIlBBUkVOVFwiO1xuICAgIGNvbnN0IHF1YWxpZmljYXRpb24gPSAoZm9ybURhdGEuZ2V0KFwicXVhbGlmaWNhdGlvblwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG5cbiAgICBpZiAoIW5hbWUgfHwgIWVtYWlsKSByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgZmllbGRzXCIgfTtcblxuICAgIGNvbnN0IHVwZGF0ZURhdGE6IGFueSA9IHsgbmFtZSwgZW1haWwsIHF1YWxpZmljYXRpb24gfTtcbiAgICBpZiAoc2Vzc2lvbi51c2VyLnJvbGUgPT09IFwiQURNSU5cIiAmJiByb2xlKSB7XG4gICAgICAgIHVwZGF0ZURhdGEucm9sZSA9IHJvbGU7XG4gICAgfVxuXG4gICAgYXdhaXQgZGIudXBkYXRlKHVzZXJzKVxuICAgICAgICAuc2V0KHVwZGF0ZURhdGEpXG4gICAgICAgIC53aGVyZShlcSh1c2Vycy5pZCwgdXNlcklkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgdXBkYXRlZFwiIH07XG59XG5cbi8vIC0tLSBDYXRlZ29yeSBBY3Rpb25zIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydChjYXRlZ29yaWVzIGFzIGFueSkudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgLy8gZmFtaWx5SWQgcmVtb3ZlZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYXRlZ29yeSBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3J5KGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShjYXRlZ29yaWVzKS5zZXQoeyBuYW1lIH0pLndoZXJlKGVxKGNhdGVnb3JpZXMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2F0ZWdvcnkgdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXRlZ29yeShpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkYi5kZWxldGUoY2F0ZWdvcmllcykud2hlcmUoZXEoY2F0ZWdvcmllcy5pZCwgaWQpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2Fubm90IGRlbGV0ZSBjYXRlZ29yeSBpbiB1c2VcIiB9O1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IGRlbGV0ZWRcIiB9O1xufVxuXG4vLyAtLS0gRXhwZW5zZSBBY3Rpb25zIC0tLSAoVXBkYXRlL0RlbGV0ZSlcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFeHBlbnNlKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIC8vIFBhcmVudCBjYW4ndCBkZWxldGU/IFllcy5cblxuICAgIGF3YWl0IGRiLmRlbGV0ZShleHBlbnNlcykud2hlcmUoZXEoZXhwZW5zZXMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiRXhwZW5zZSBkZWxldGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2UoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcImFtb3VudFwiKSBhcyBzdHJpbmcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBkYXRlU3RyID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgY2F0ZWdvcnlJZCA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5SWRcIikgYXMgc3RyaW5nO1xuXG4gICAgaWYgKCFhbW91bnQgfHwgIWRhdGVTdHIgfHwgIWNhdGVnb3J5SWQpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJNaXNzaW5nIGZpZWxkc1wiIH07XG4gICAgfVxuXG4gICAgYXdhaXQgZGIudXBkYXRlKGV4cGVuc2VzKS5zZXQoe1xuICAgICAgICBhbW91bnQ6IGFtb3VudC50b1N0cmluZygpLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGNhdGVnb3J5SWQ6IGNhdGVnb3J5SWQsXG4gICAgICAgIGNoaWxkSWQ6IChmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZykgfHwgbnVsbCxcbiAgICAgICAgdHlwZTogKGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgXCJFWFBFTlNFXCIgfCBcIklOQ09NRVwiIHwgXCJEVUVcIikgfHwgXCJFWFBFTlNFXCIsXG5cbiAgICB9KS53aGVyZShlcShleHBlbnNlcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRyYW5zYWN0aW9uIHVwZGF0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGFzc3dvcmQocHJldlN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgcmV0dXJuIFwiVW5hdXRob3JpemVkXCI7XG5cbiAgICBjb25zdCBjdXJyZW50UGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJjdXJyZW50UGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IG5ld1Bhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwibmV3UGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IGZvcm1EYXRhLmdldChcImNvbmZpcm1QYXNzd29yZFwiKSBhcyBzdHJpbmc7XG5cbiAgICBpZiAoIWN1cnJlbnRQYXNzd29yZCB8fCAhbmV3UGFzc3dvcmQgfHwgIWNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gXCJBbGwgZmllbGRzIGFyZSByZXF1aXJlZFwiO1xuICAgIH1cblxuICAgIGlmIChuZXdQYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiBcIk5ldyBwYXNzd29yZHMgZG8gbm90IG1hdGNoXCI7XG4gICAgfVxuXG4gICAgaWYgKG5ld1Bhc3N3b3JkLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgcmV0dXJuIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnNcIjtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmlkLCBzZXNzaW9uLnVzZXIuaWQpLFxuICAgIH0pO1xuXG4gICAgaWYgKCF1c2VyKSByZXR1cm4gXCJVc2VyIG5vdCBmb3VuZFwiO1xuXG4gICAgY29uc3QgaXNNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGN1cnJlbnRQYXNzd29yZCwgdXNlci5wYXNzd29yZEhhc2gpO1xuICAgIGlmICghaXNNYXRjaCkge1xuICAgICAgICByZXR1cm4gXCJJbmNvcnJlY3QgY3VycmVudCBwYXNzd29yZFwiO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gobmV3UGFzc3dvcmQsIDEwKTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZSh1c2VycylcbiAgICAgICAgLnNldCh7IHBhc3N3b3JkSGFzaDogaGFzaGVkUGFzc3dvcmQgfSlcbiAgICAgICAgLndoZXJlKGVxKHVzZXJzLmlkLCBzZXNzaW9uLnVzZXIuaWQpKTtcblxuICAgIHJldHVybiBcIlN1Y2Nlc3NcIjtcbn1cblxuLy8gLS0tIENoaWxkIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2hpbGQoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGRvYiA9IChmb3JtRGF0YS5nZXQoXCJkb2JcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGdlbmRlciA9IChmb3JtRGF0YS5nZXQoXCJnZW5kZXJcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGRpYWdub3NpcyA9IChmb3JtRGF0YS5nZXQoXCJkaWFnbm9zaXNcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHBhcmVudElkID0gKGZvcm1EYXRhLmdldChcInBhcmVudElkXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcblxuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydChjaGlsZHJlbikudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkb2IsXG4gICAgICAgIGdlbmRlcixcbiAgICAgICAgZGlhZ25vc2lzLFxuICAgICAgICBwYXJlbnRJZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvY2hpbGRyZW5zXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2hpbGQgY3JlYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDaGlsZChpZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBzdGF0dXMgPSAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIFwiQUNUSVZFXCIgfCBcIklOQUNUSVZFXCIpIHx8IFwiQUNUSVZFXCI7XG4gICAgY29uc3QgZG9iID0gKGZvcm1EYXRhLmdldChcImRvYlwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgZ2VuZGVyID0gKGZvcm1EYXRhLmdldChcImdlbmRlclwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgZGlhZ25vc2lzID0gKGZvcm1EYXRhLmdldChcImRpYWdub3Npc1wiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgcGFyZW50SWQgPSAoZm9ybURhdGEuZ2V0KFwicGFyZW50SWRcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKGNoaWxkcmVuKS5zZXQoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRvYixcbiAgICAgICAgZ2VuZGVyLFxuICAgICAgICBkaWFnbm9zaXMsXG4gICAgICAgIHBhcmVudElkXG4gICAgfSkud2hlcmUoZXEoY2hpbGRyZW4uaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9jaGlsZHJlbnNcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDaGlsZCB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNoaWxkKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRiLmRlbGV0ZShjaGlsZHJlbikud2hlcmUoZXEoY2hpbGRyZW4uaWQsIGlkKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhbm5vdCBkZWxldGUgY2hpbGQgaW4gdXNlXCIgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNoaWxkIGRlbGV0ZWRcIiB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxUkF1WXNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/SearchableSelect.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchableSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-client] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js [app-client] (ecmascript) <export default as ChevronsUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-client] (ecmascript) <export default as Search>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function SearchableSelect({ options, value, onChange, placeholder = "Select option", className = "", required = false }) {
    _s();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectedOption = options.find((opt)=>opt.id === value);
    // Close on click outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "SearchableSelect.useEffect": ()=>{
            const handleClickOutside = {
                "SearchableSelect.useEffect.handleClickOutside": (event)=>{
                    if (containerRef.current && !containerRef.current.contains(event.target)) {
                        setIsOpen(false);
                    }
                }
            }["SearchableSelect.useEffect.handleClickOutside"];
            document.addEventListener("mousedown", handleClickOutside);
            return ({
                "SearchableSelect.useEffect": ()=>document.removeEventListener("mousedown", handleClickOutside)
            })["SearchableSelect.useEffect"];
        }
    }["SearchableSelect.useEffect"], []);
    const filteredOptions = query === "" ? options : options.filter((opt)=>opt.name.toLowerCase().includes(query.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${className}`,
        ref: containerRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setIsOpen(!isOpen),
                className: "w-full px-4 py-1 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all flex items-center justify-between text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `block truncate ${!selectedOption ? "text-gray-400 dark:text-gray-500" : "text-gray-900 dark:text-white"}`,
                        children: selectedOption ? selectedOption.name : placeholder
                    }, void 0, false, {
                        fileName: "[project]/components/SearchableSelect.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__["ChevronsUpDown"], {
                        className: "w-4 h-4 text-gray-400",
                        "aria-hidden": "true"
                    }, void 0, false, {
                        fileName: "[project]/components/SearchableSelect.tsx",
                        lineNumber: 63,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SearchableSelect.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                type: "text",
                className: "sr-only",
                value: value,
                onChange: ()=>{},
                required: required,
                tabIndex: -1
            }, void 0, false, {
                fileName: "[project]/components/SearchableSelect.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, this),
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-10 w-full mt-1 bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-gray-100 dark:border-neutral-800 max-h-60 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 border-b border-gray-100 dark:border-neutral-800 sticky top-0 bg-white dark:bg-neutral-900",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/SearchableSelect.tsx",
                                    lineNumber: 80,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    type: "text",
                                    className: "w-full pl-9 pr-3 py-2 bg-gray-50 dark:bg-neutral-800 rounded-lg text-sm focus:outline-none focus:ring-1 focus:ring-blue-500 placeholder:text-gray-400 dark:text-white",
                                    placeholder: "Search...",
                                    value: query,
                                    onChange: (e)=>setQuery(e.target.value),
                                    autoFocus: true
                                }, void 0, false, {
                                    fileName: "[project]/components/SearchableSelect.tsx",
                                    lineNumber: 81,
                                    columnNumber: 29
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/SearchableSelect.tsx",
                            lineNumber: 79,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/SearchableSelect.tsx",
                        lineNumber: 78,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "overflow-y-auto flex-1 p-1",
                        children: filteredOptions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "px-4 py-2 text-sm text-gray-500 dark:text-gray-400 text-center",
                            children: "No results found."
                        }, void 0, false, {
                            fileName: "[project]/components/SearchableSelect.tsx",
                            lineNumber: 94,
                            columnNumber: 29
                        }, this) : filteredOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: `relative flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-sm transition-colors ${value === option.id ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800"}`,
                                onClick: ()=>{
                                    onChange(option.id);
                                    setIsOpen(false);
                                    setQuery("");
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: option.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchableSelect.tsx",
                                        lineNumber: 111,
                                        columnNumber: 37
                                    }, this),
                                    value === option.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
                                        className: "w-4 h-4"
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchableSelect.tsx",
                                        lineNumber: 113,
                                        columnNumber: 41
                                    }, this)
                                ]
                            }, option.id, true, {
                                fileName: "[project]/components/SearchableSelect.tsx",
                                lineNumber: 99,
                                columnNumber: 33
                            }, this))
                    }, void 0, false, {
                        fileName: "[project]/components/SearchableSelect.tsx",
                        lineNumber: 92,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/SearchableSelect.tsx",
                lineNumber: 77,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/SearchableSelect.tsx",
        lineNumber: 54,
        columnNumber: 9
    }, this);
}
_s(SearchableSelect, "fX7MxUxdVvLODcbvpj23q1s4muw=");
_c = SearchableSelect;
var _c;
__turbopack_context__.k.register(_c, "SearchableSelect");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ExpenseModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExpenseModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$800279__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:800279 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$3c08dc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:3c08dc [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchableSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SearchableSelect.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
;
;
function ExpenseModal({ isOpen, onClose, expense, categories = [], familyChildren = [], defaultType = "EXPENSE", defaultChildId = "" }) {
    _s();
    const activeChildren = familyChildren.filter((c)=>c.status !== "INACTIVE");
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    // Internal state for form values
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), "yyyy-MM-dd"));
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("EXPENSE");
    const [categoryId, setCategoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [childId, setChildId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    // Portal mount state
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExpenseModal.useEffect": ()=>{
            setMounted(true);
        }
    }["ExpenseModal.useEffect"], []);
    // Initialize/Reset form
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ExpenseModal.useEffect": ()=>{
            if (isOpen) {
                setError(null); // Clear any previous errors
                if (expense) {
                    setAmount(expense.amount.toString());
                    setDescription(expense.description || "");
                    setDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(expense.date), "yyyy-MM-dd"));
                    setType(expense.type || "EXPENSE");
                    // Map category name/ID to actual ID from options
                    const catMatch = categories.find({
                        "ExpenseModal.useEffect.catMatch": (c)=>c.id === expense.categoryId || c.name === expense.category
                    }["ExpenseModal.useEffect.catMatch"]);
                    setCategoryId(catMatch ? catMatch.id : "");
                    setChildId(expense.childId || "");
                } else {
                    setAmount("");
                    setDescription("");
                    setDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), "yyyy-MM-dd"));
                    setType(defaultType);
                    setCategoryId("");
                    setChildId(defaultChildId);
                }
            }
        }
    }["ExpenseModal.useEffect"], [
        isOpen,
        expense,
        categories,
        defaultType,
        defaultChildId
    ]);
    if (!isOpen) return null;
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        formData.set("type", type); // Explicitly set type
        // Ensure childId is set if selected
        if (childId) formData.set("childId", childId);
        startTransition(async ()=>{
            let result;
            if (expense) {
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$3c08dc__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateExpense"])(expense.id, formData);
            } else {
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$800279__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addExpenseAction"])(undefined, formData);
            }
            if (result?.message.includes("added") || result?.message.includes("updated")) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(result.message);
                onClose();
            } else {
                setError(result?.message || "Error saving expense");
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(result?.message || "Error saving expense");
            }
        });
    };
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-neutral-900 rounded-2xl w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200 border border-gray-100 dark:border-neutral-800 max-h-[90vh] overflow-y-auto custom-scrollbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-6 border-b border-gray-100 dark:border-neutral-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-gray-900 dark:text-white",
                                children: expense ? type === "EXPENSE" ? "Edit Expense" : "Edit Income" : "Add Transaction"
                            }, void 0, false, {
                                fileName: "[project]/components/ExpenseModal.tsx",
                                lineNumber: 115,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                    className: "w-5 h-5 text-gray-500"
                                }, void 0, false, {
                                    fileName: "[project]/components/ExpenseModal.tsx",
                                    lineNumber: 119,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ExpenseModal.tsx",
                                lineNumber: 118,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ExpenseModal.tsx",
                        lineNumber: 114,
                        columnNumber: 25
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "p-6 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex bg-gray-100 dark:bg-neutral-800 p-1 rounded-xl mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setType("EXPENSE"),
                                        className: `flex-1 py-2 text-sm font-medium rounded-lg transition-all ${type === "EXPENSE" ? "bg-white dark:bg-neutral-700 text-red-600 shadow-sm" : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"} `,
                                        children: "Expense"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExpenseModal.tsx",
                                        lineNumber: 126,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setType("INCOME"),
                                        className: `flex-1 py-2 text-sm font-medium rounded-lg transition-all ${type === "INCOME" ? "bg-white dark:bg-neutral-700 text-green-600 shadow-sm" : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"} `,
                                        children: "Income"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExpenseModal.tsx",
                                        lineNumber: 133,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setType("DUE"),
                                        className: `flex-1 py-2 text-sm font-medium rounded-lg transition-all ${type === "DUE" ? "bg-white dark:bg-neutral-700 text-orange-600 shadow-sm" : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"} `,
                                        children: "Due"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExpenseModal.tsx",
                                        lineNumber: 140,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ExpenseModal.tsx",
                                lineNumber: 125,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                        children: "Amount"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExpenseModal.tsx",
                                        lineNumber: 150,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-500",
                                                children: "₹"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExpenseModal.tsx",
                                                lineNumber: 152,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                name: "amount",
                                                type: "number",
                                                step: "0.01",
                                                required: true,
                                                value: amount,
                                                onChange: (e)=>setAmount(e.target.value),
                                                className: "w-full pl-8 pr-4 py-1 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all",
                                                placeholder: "0.00"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExpenseModal.tsx",
                                                lineNumber: 153,
                                                columnNumber: 37
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ExpenseModal.tsx",
                                        lineNumber: 151,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ExpenseModal.tsx",
                                lineNumber: 149,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                        children: "Category"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExpenseModal.tsx",
                                        lineNumber: 168,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "categoryId",
                                        value: categoryId,
                                        required: true,
                                        onChange: (e)=>setCategoryId(e.target.value),
                                        className: "w-full px-4 py-1 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all appearance-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                disabled: true,
                                                children: "Select Category"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExpenseModal.tsx",
                                                lineNumber: 176,
                                                columnNumber: 37
                                            }, this),
                                            categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                    value: c.id,
                                                    children: c.name
                                                }, c.id, false, {
                                                    fileName: "[project]/components/ExpenseModal.tsx",
                                                    lineNumber: 178,
                                                    columnNumber: 41
                                                }, this))
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ExpenseModal.tsx",
                                        lineNumber: 169,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ExpenseModal.tsx",
                                lineNumber: 167,
                                columnNumber: 29
                            }, this),
                            (type === "INCOME" || type === "DUE") && activeChildren.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                        children: [
                                            "Child ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400 font-normal",
                                                children: "(Optional)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExpenseModal.tsx",
                                                lineNumber: 186,
                                                columnNumber: 126
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ExpenseModal.tsx",
                                        lineNumber: 186,
                                        columnNumber: 37
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchableSelect$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                                        options: activeChildren,
                                        value: childId,
                                        onChange: (val)=>{
                                            setChildId(val);
                                        },
                                        placeholder: "Select Child"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExpenseModal.tsx",
                                        lineNumber: 187,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ExpenseModal.tsx",
                                lineNumber: 185,
                                columnNumber: 33
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                        children: [
                                            "Description ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "text-gray-400 font-normal",
                                                children: "(Optional)"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExpenseModal.tsx",
                                                lineNumber: 199,
                                                columnNumber: 128
                                            }, this)
                                        ]
                                    }, void 0, true, {
                                        fileName: "[project]/components/ExpenseModal.tsx",
                                        lineNumber: 199,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                        name: "description",
                                        type: "text",
                                        value: description,
                                        onChange: (e)=>setDescription(e.target.value),
                                        className: "w-full px-4 py-1 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all",
                                        placeholder: "What was this for?"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExpenseModal.tsx",
                                        lineNumber: 200,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ExpenseModal.tsx",
                                lineNumber: 198,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                            children: "Date"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ExpenseModal.tsx",
                                            lineNumber: 212,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            name: "date",
                                            type: "date",
                                            required: true,
                                            value: date,
                                            onChange: (e)=>setDate(e.target.value),
                                            className: "w-full px-4 py-1 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ExpenseModal.tsx",
                                            lineNumber: 213,
                                            columnNumber: 37
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/ExpenseModal.tsx",
                                    lineNumber: 211,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/ExpenseModal.tsx",
                                lineNumber: 210,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: isPending,
                                        className: "w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-blue-600/20 disabled:opacity-50",
                                        children: isPending ? "Saving..." : expense ? "Save Changes" : `Add ${type === "EXPENSE" ? "Expense" : type === "INCOME" ? "Income" : "Due"} `
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExpenseModal.tsx",
                                        lineNumber: 225,
                                        columnNumber: 33
                                    }, this),
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                        className: "text-red-500 text-sm text-center mt-2",
                                        children: error
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExpenseModal.tsx",
                                        lineNumber: 233,
                                        columnNumber: 37
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/ExpenseModal.tsx",
                                lineNumber: 224,
                                columnNumber: 29
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/ExpenseModal.tsx",
                        lineNumber: 123,
                        columnNumber: 25
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/ExpenseModal.tsx",
                lineNumber: 113,
                columnNumber: 21
            }, this)
        }, void 0, false, {
            fileName: "[project]/components/ExpenseModal.tsx",
            lineNumber: 112,
            columnNumber: 17
        }, this), document.body)
    }, void 0, false);
}
_s(ExpenseModal, "RkjVtMouctJUXWIGby9qLt5phv8=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = ExpenseModal;
var _c;
__turbopack_context__.k.register(_c, "ExpenseModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/AppLayout.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/context.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-client] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-client] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Sidebar.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ExpenseModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ExpenseModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function AppLayout({ children, categories = [], familyChildren = [], role = "ADMIN" }) {
    _s();
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAddExpenseOpen, setIsAddExpenseOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const { currentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExpenses"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen overflow-hidden flex flex-col md:flex-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ExpenseModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isAddExpenseOpen,
                onClose: ()=>setIsAddExpenseOpen(false),
                categories: categories,
                familyChildren: familyChildren
            }, void 0, false, {
                fileName: "[project]/components/AppLayout.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden flex items-center justify-between p-4 bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 sticky top-0 z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-orange-500/20 shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
                                    className: "w-5 h-5 text-white"
                                }, void 0, false, {
                                    fileName: "[project]/components/AppLayout.tsx",
                                    lineNumber: 28,
                                    columnNumber: 25
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/AppLayout.tsx",
                                lineNumber: 27,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-lg font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent leading-none",
                                        children: "Wonderbees"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AppLayout.tsx",
                                        lineNumber: 31,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-xs font-medium text-gray-400 tracking-wide",
                                        children: "Therapy Centre"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AppLayout.tsx",
                                        lineNumber: 34,
                                        columnNumber: 25
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/AppLayout.tsx",
                                lineNumber: 30,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/AppLayout.tsx",
                        lineNumber: 26,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                        className: "p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800",
                        children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                            fileName: "[project]/components/AppLayout.tsx",
                            lineNumber: 38,
                            columnNumber: 39
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
                            fileName: "[project]/components/AppLayout.tsx",
                            lineNumber: 38,
                            columnNumber: 47
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/AppLayout.tsx",
                        lineNumber: 37,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/AppLayout.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: mobileMenuOpen,
                onClose: ()=>setMobileMenuOpen(false),
                onAddExpense: ()=>setIsAddExpenseOpen(true),
                role: role
            }, void 0, false, {
                fileName: "[project]/components/AppLayout.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 overflow-y-auto p-2 md:p-8 bg-gray-50/50 dark:bg-neutral-950",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "max-w-7xl mx-auto space-y-6",
                    children: children
                }, void 0, false, {
                    fileName: "[project]/components/AppLayout.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/AppLayout.tsx",
                lineNumber: 50,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/AppLayout.tsx",
        lineNumber: 21,
        columnNumber: 9
    }, this);
}
_s(AppLayout, "YfHfqazHAWH1fxw3NplkJIqDphA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useExpenses"]
    ];
});
_c = AppLayout;
var _c;
__turbopack_context__.k.register(_c, "AppLayout");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/StatsGrid.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>StatsGrid
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trending-up.js [app-client] (ecmascript) <export default as TrendingUp>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/wallet.js [app-client] (ecmascript) <export default as Wallet>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/credit-card.js [app-client] (ecmascript) <export default as CreditCard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-client] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
"use client";
;
;
;
function StatsGrid({ stats, period = "month", childStats }) {
    // Find top category
    const topCategoryEntry = Object.entries(stats.byCategory).sort(([, a], [, b])=>b - a)[0];
    const topCategory = topCategoryEntry ? topCategoryEntry[0] : "N/A";
    const cards = [
        {
            label: "Total Income",
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(stats.totalIncome),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trending$2d$up$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__TrendingUp$3e$__["TrendingUp"],
            color: "text-green-600",
            bg: "bg-green-50 dark:bg-green-900/20"
        },
        {
            label: "Total Expenses",
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(stats.totalExpenses),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$wallet$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Wallet$3e$__["Wallet"],
            color: "text-red-600",
            bg: "bg-red-50 dark:bg-red-900/20"
        },
        {
            label: "Balance",
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(stats.balance),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$credit$2d$card$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__CreditCard$3e$__["CreditCard"],
            color: stats.balance >= 0 ? "text-blue-600" : "text-red-600",
            bg: stats.balance >= 0 ? "bg-blue-50 dark:bg-blue-900/20" : "bg-red-50 dark:bg-red-900/20"
        }
    ];
    if (stats.dueCount !== undefined) {
        cards.push({
            label: "Pending Dues",
            value: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(stats.totalDue || 0),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
            color: "text-orange-600",
            bg: "bg-orange-50 dark:bg-orange-900/20"
        });
    }
    if (childStats) {
        cards.push({
            label: "Active Children",
            value: childStats.active.toString(),
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            color: "text-blue-600",
            bg: "bg-blue-50 dark:bg-blue-900/20"
        });
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "grid grid-cols-2 md:grid-cols-2 lg:grid-cols-4 md:gap-4 gap-2",
        children: cards.map((card, i)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "glass-card p-2 rounded-2xl flex items-center animate-fade-in",
                style: {
                    animationDelay: `${i * 100}ms`
                },
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: `p-1 rounded-xl ${card.bg} mr-2`,
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(card.icon, {
                            className: `md:w-6 md:h-6 w-4 h-4 ${card.color}`
                        }, void 0, false, {
                            fileName: "[project]/components/dashboard/StatsGrid.tsx",
                            lineNumber: 80,
                            columnNumber: 25
                        }, this)
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/StatsGrid.tsx",
                        lineNumber: 79,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500 font-medium",
                                children: card.label
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/StatsGrid.tsx",
                                lineNumber: 83,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "md:text-xl text-md font-bold text-gray-900 dark:text-white mt-1",
                                children: card.value
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/StatsGrid.tsx",
                                lineNumber: 84,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/StatsGrid.tsx",
                        lineNumber: 82,
                        columnNumber: 21
                    }, this)
                ]
            }, card.label, true, {
                fileName: "[project]/components/dashboard/StatsGrid.tsx",
                lineNumber: 74,
                columnNumber: 17
            }, this))
    }, void 0, false, {
        fileName: "[project]/components/dashboard/StatsGrid.tsx",
        lineNumber: 72,
        columnNumber: 9
    }, this);
}
_c = StatsGrid;
var _c;
__turbopack_context__.k.register(_c, "StatsGrid");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/analytics.ts [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "calculateStats",
    ()=>calculateStats,
    "filterExpensesByPeriod",
    ()=>filterExpensesByPeriod,
    "getChartData",
    ()=>getChartData
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isSameDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isSameWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isSameMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/isSameYear.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfDay.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/startOfMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$eachDayOfInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/eachDayOfInterval.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfWeek.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfMonth.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-client] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/date-fns/endOfDay.js [app-client] (ecmascript)");
;
function filterExpensesByPeriod(expenses, period, date) {
    return expenses.filter((expense)=>{
        switch(period){
            case "day":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameDay"])(expense.date, date);
            case "week":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameWeek"])(expense.date, date, {
                    weekStartsOn: 1
                });
            case "month":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameMonth"])(expense.date, date);
            case "year":
                return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameYear$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameYear"])(expense.date, date);
            default:
                return true;
        }
    });
}
function calculateStats(expenses) {
    const total = expenses.reduce((sum, e)=>sum + e.amount, 0);
    const byUser = expenses.reduce((acc, e)=>{
        acc[e.userId] = (acc[e.userId] || 0) + e.amount;
        return acc;
    }, {});
    const byCategory = expenses.reduce((acc, e)=>{
        acc[e.category] = (acc[e.category] || 0) + e.amount;
        return acc;
    }, {});
    return {
        total,
        byUser,
        byCategory
    };
}
function getChartData(expenses, period, currentDate) {
    // Logic depends on period. 
    // If Week: Show days (Mon, Tue...)
    // If Month: Show days (1, 2, 3...) or Weeks
    // If Year: Show months (Jan, Feb...)
    if (period === "week") {
        const start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfWeek"])(currentDate, {
            weekStartsOn: 1
        });
        const end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfWeek$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfWeek"])(currentDate, {
            weekStartsOn: 1
        });
        const days = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$eachDayOfInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eachDayOfInterval"])({
            start,
            end
        });
        return days.map((day)=>{
            const dayItems = expenses.filter((e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameDay"])(e.date, day));
            const income = dayItems.filter((e)=>e.type === "INCOME").reduce((sum, e)=>sum + e.amount, 0);
            const expense = dayItems.filter((e)=>e.type === "EXPENSE").reduce((sum, e)=>sum + e.amount, 0);
            return {
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(day, "EEE"),
                income,
                expense,
                date: day
            };
        });
    }
    if (period === "month" || period === "last_month" || period === "custom" || period === "all") {
        let start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfMonth"])(currentDate);
        let end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfMonth"])(currentDate);
        if (period === "last_month") {
            const lastMonthDate = new Date(currentDate);
            lastMonthDate.setMonth(lastMonthDate.getMonth() - 1);
            start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfMonth"])(lastMonthDate);
            end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfMonth"])(lastMonthDate);
        } else if (period === "custom" || period === "all") {
            if (expenses.length === 0) return [];
            const sorted = [
                ...expenses
            ].sort((a, b)=>a.date.getTime() - b.date.getTime());
            start = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$startOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["startOfDay"])(sorted[0].date);
            end = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$endOfDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["endOfDay"])(sorted[sorted.length - 1].date);
        }
        const days = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$eachDayOfInterval$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["eachDayOfInterval"])({
            start,
            end
        });
        return days.map((day)=>{
            const dayItems = expenses.filter((e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameDay$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameDay"])(e.date, day));
            const income = dayItems.filter((e)=>e.type === "INCOME").reduce((sum, e)=>sum + e.amount, 0);
            const expense = dayItems.filter((e)=>e.type === "EXPENSE").reduce((sum, e)=>sum + e.amount, 0);
            return {
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(day, "d MMM"),
                income,
                expense,
                date: day
            };
        });
    }
    if (period === "year") {
        const months = Array.from({
            length: 12
        }, (_, i)=>i);
        return months.map((m)=>{
            const date = new Date(currentDate.getFullYear(), m, 1);
            const monthItems = expenses.filter((e)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$isSameMonth$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["isSameMonth"])(e.date, date));
            const income = monthItems.filter((e)=>e.type === "INCOME").reduce((sum, e)=>sum + e.amount, 0);
            const expense = monthItems.filter((e)=>e.type === "EXPENSE").reduce((sum, e)=>sum + e.amount, 0);
            return {
                label: (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(date, "MMM"),
                income,
                expense,
                date: date
            };
        });
    }
    // Day view - Breakdown by Category
    const categories = Array.from(new Set(expenses.map((e)=>e.category)));
    return categories.map((cat)=>{
        const catItems = expenses.filter((e)=>e.category === cat);
        const income = catItems.filter((e)=>e.type === "INCOME").reduce((sum, e)=>sum + e.amount, 0);
        const expense = catItems.filter((e)=>e.type === "EXPENSE").reduce((sum, e)=>sum + e.amount, 0);
        return {
            label: cat,
            income,
            expense
        };
    });
}
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/MainChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>MainChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/analytics.ts [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/BarChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/Bar.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/XAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/YAxis.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/cartesian/CartesianGrid.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
function MainChart({ expenses, period = "month" }) {
    _s();
    // period is passed from parent now
    const currentDate = new Date();
    const data = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useMemo"])({
        "MainChart.useMemo[data]": ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$analytics$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["getChartData"])(expenses, period, currentDate)
    }["MainChart.useMemo[data]"], [
        expenses,
        period
    ]);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass-card p-6 rounded-2xl h-[400px] animate-fade-in animate-delay-200",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                    className: "text-lg font-bold text-gray-900 dark:text-white",
                    children: "Income vs Expense"
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/MainChart.tsx",
                    lineNumber: 26,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/MainChart.tsx",
                lineNumber: 25,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[300px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: "100%",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$BarChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["BarChart"], {
                        data: data,
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$CartesianGrid$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["CartesianGrid"], {
                                strokeDasharray: "3 3",
                                vertical: false,
                                opacity: 0.1
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/MainChart.tsx",
                                lineNumber: 32,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$XAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["XAxis"], {
                                dataKey: "label",
                                axisLine: false,
                                tickLine: false,
                                tick: {
                                    fontSize: 12,
                                    fill: '#6b7280'
                                },
                                dy: 10
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/MainChart.tsx",
                                lineNumber: 33,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$YAxis$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["YAxis"], {
                                axisLine: false,
                                tickLine: false,
                                tick: {
                                    fontSize: 12,
                                    fill: '#6b7280'
                                },
                                tickFormatter: (val)=>`₹${val}`
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/MainChart.tsx",
                                lineNumber: 40,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                cursor: {
                                    fill: 'transparent'
                                },
                                contentStyle: {
                                    borderRadius: '12px',
                                    border: 'none',
                                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                },
                                formatter: (val, name)=>[
                                        (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(val),
                                        name.charAt(0).toUpperCase() + name.slice(1)
                                    ]
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/MainChart.tsx",
                                lineNumber: 46,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                dataKey: "income",
                                name: "Income",
                                fill: "#10b981",
                                /* Green for Income */ radius: [
                                    4,
                                    4,
                                    0,
                                    0
                                ],
                                maxBarSize: 50
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/MainChart.tsx",
                                lineNumber: 54,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$cartesian$2f$Bar$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Bar"], {
                                dataKey: "expense",
                                name: "Expense",
                                fill: "#ef4444",
                                /* Red for Expense */ radius: [
                                    4,
                                    4,
                                    0,
                                    0
                                ],
                                maxBarSize: 50
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/MainChart.tsx",
                                lineNumber: 61,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/MainChart.tsx",
                        lineNumber: 31,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/MainChart.tsx",
                    lineNumber: 30,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/MainChart.tsx",
                lineNumber: 29,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/MainChart.tsx",
        lineNumber: 24,
        columnNumber: 9
    }, this);
}
_s(MainChart, "jwuu1hJIzb+z9O8CErpZ1XdXNoc=");
_c = MainChart;
var _c;
__turbopack_context__.k.register(_c, "MainChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/DashboardFilters.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>DashboardFilters
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/funnel.js [app-client] (ecmascript) <export default as Filter>");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
function DashboardFilters() {
    _s();
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"])();
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"])();
    const searchParams = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"])();
    const currentPeriod = searchParams.get("period") || "all";
    const currentFrom = searchParams.get("from") || "";
    const currentTo = searchParams.get("to") || "";
    const updateFilter = (key, value)=>{
        const params = new URLSearchParams(searchParams);
        if (value === "all" || value === "") {
            params.delete(key);
            if (key === "period") {
                params.delete("from");
                params.delete("to");
            }
        } else {
            params.set(key, value);
        }
        router.push(`${pathname}?${params.toString()}`);
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "flex flex-wrap items-center gap-3 bg-white dark:bg-neutral-900 p-1.5 rounded-lg border border-gray-100 dark:border-neutral-800 shadow-sm",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center px-2 text-gray-400",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$funnel$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Filter$3e$__["Filter"], {
                    className: "w-4 h-4"
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/DashboardFilters.tsx",
                    lineNumber: 32,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/DashboardFilters.tsx",
                lineNumber: 31,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                value: currentPeriod,
                onChange: (e)=>updateFilter("period", e.target.value),
                className: "px-3 py-1.5 bg-gray-50 dark:bg-neutral-800 border-none rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 cursor-pointer outline-none min-w-[140px]",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "all",
                        children: "All Time"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/DashboardFilters.tsx",
                        lineNumber: 40,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "month",
                        children: "This Month"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/DashboardFilters.tsx",
                        lineNumber: 41,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "last_month",
                        children: "Last Month"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/DashboardFilters.tsx",
                        lineNumber: 42,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "week",
                        children: "This Week"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/DashboardFilters.tsx",
                        lineNumber: 43,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "year",
                        children: "This Year"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/DashboardFilters.tsx",
                        lineNumber: 44,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                        value: "custom",
                        children: "Custom Range"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/DashboardFilters.tsx",
                        lineNumber: 45,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/DashboardFilters.tsx",
                lineNumber: 35,
                columnNumber: 13
            }, this),
            currentPeriod === "custom" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex items-center gap-2 animate-in fade-in slide-in-from-left-2 duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        value: currentFrom,
                        onChange: (e)=>updateFilter("from", e.target.value),
                        className: "px-3 py-1.5 bg-gray-50 dark:bg-neutral-800 border-none rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/DashboardFilters.tsx",
                        lineNumber: 50,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: "text-gray-400",
                        children: "-"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/DashboardFilters.tsx",
                        lineNumber: 56,
                        columnNumber: 21
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                        type: "date",
                        value: currentTo,
                        onChange: (e)=>updateFilter("to", e.target.value),
                        className: "px-3 py-1.5 bg-gray-50 dark:bg-neutral-800 border-none rounded-md text-sm font-medium text-gray-700 dark:text-gray-300 focus:ring-2 focus:ring-blue-500 outline-none"
                    }, void 0, false, {
                        fileName: "[project]/components/dashboard/DashboardFilters.tsx",
                        lineNumber: 57,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/dashboard/DashboardFilters.tsx",
                lineNumber: 49,
                columnNumber: 17
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/DashboardFilters.tsx",
        lineNumber: 30,
        columnNumber: 9
    }, this);
}
_s(DashboardFilters, "66hrdMMH0WyruZN7frcpeuU7V/k=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useRouter"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["usePathname"],
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useSearchParams"]
    ];
});
_c = DashboardFilters;
var _c;
__turbopack_context__.k.register(_c, "DashboardFilters");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/CategoryIncomeChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryIncomeChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const COLORS = [
    "#10B981",
    "#3B82F6",
    "#F59E0B",
    "#8B5CF6",
    "#EC4899",
    "#6366F1",
    "#14B8A6",
    "#F97316"
];
const CUSTOM_RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, value })=>{
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * CUSTOM_RADIAN);
    const y = cy + radius * Math.sin(-midAngle * CUSTOM_RADIAN);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
        x: x,
        y: y,
        fill: "white",
        textAnchor: x > cx ? 'start' : 'end',
        dominantBaseline: "central",
        className: "text-xs font-bold drop-shadow-md pointer-events-none",
        children: `${(percent * 100).toFixed(0)}%`
    }, void 0, false, {
        fileName: "[project]/components/dashboard/CategoryIncomeChart.tsx",
        lineNumber: 31,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
function CategoryIncomeChart({ data }) {
    _s();
    const chartData = Object.entries(data).map(([name, value])=>({
            name,
            value
        })).filter((item)=>item.value > 0).sort((a, b)=>b.value - a.value);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CategoryIncomeChart.useEffect": ()=>{
            const checkMobile = {
                "CategoryIncomeChart.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 768);
                }
            }["CategoryIncomeChart.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return ({
                "CategoryIncomeChart.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["CategoryIncomeChart.useEffect"];
        }
    }["CategoryIncomeChart.useEffect"], []);
    if (chartData.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-card p-6 rounded-2xl h-[400px] flex items-center justify-center text-gray-400",
            children: "No income data available for this period"
        }, void 0, false, {
            fileName: "[project]/components/dashboard/CategoryIncomeChart.tsx",
            lineNumber: 58,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass-card p-2 md:p-6 rounded-2xl h-[400px] animate-fade-in animate-delay-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-bold text-gray-900 dark:text-white mb-6",
                children: "Income Source"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/CategoryIncomeChart.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[300px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: "100%",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                data: chartData,
                                cx: "50%",
                                cy: "50%",
                                labelLine: false,
                                label: renderCustomizedLabel,
                                outerRadius: isMobile ? 80 : 100,
                                fill: "#8884d8",
                                dataKey: "value",
                                children: chartData.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                        fill: COLORS[index % COLORS.length]
                                    }, `cell-${index}`, false, {
                                        fileName: "[project]/components/dashboard/CategoryIncomeChart.tsx",
                                        lineNumber: 81,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/CategoryIncomeChart.tsx",
                                lineNumber: 70,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                formatter: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(value),
                                contentStyle: {
                                    borderRadius: '12px',
                                    border: 'none',
                                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/CategoryIncomeChart.tsx",
                                lineNumber: 84,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                layout: isMobile ? "horizontal" : "vertical",
                                verticalAlign: isMobile ? "bottom" : "middle",
                                align: isMobile ? "center" : "right",
                                wrapperStyle: {
                                    fontSize: "12px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/CategoryIncomeChart.tsx",
                                lineNumber: 88,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/CategoryIncomeChart.tsx",
                        lineNumber: 69,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/CategoryIncomeChart.tsx",
                    lineNumber: 68,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/CategoryIncomeChart.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/CategoryIncomeChart.tsx",
        lineNumber: 65,
        columnNumber: 9
    }, this);
}
_s(CategoryIncomeChart, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
_c = CategoryIncomeChart;
var _c;
__turbopack_context__.k.register(_c, "CategoryIncomeChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/dashboard/CategoryExpenseChart.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryExpenseChart
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/chart/PieChart.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/polar/Pie.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Cell.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/ResponsiveContainer.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Tooltip.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/recharts/es6/component/Legend.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
const COLORS = [
    "#EF4444",
    "#F97316",
    "#EAB308",
    "#84CC16",
    "#06B6D4",
    "#3B82F6",
    "#8B5CF6",
    "#EC4899"
];
const CUSTOM_RADIAN = Math.PI / 180;
const renderCustomizedLabel = ({ cx, cy, midAngle, innerRadius, outerRadius, percent, index, name, value })=>{
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * CUSTOM_RADIAN);
    const y = cy + radius * Math.sin(-midAngle * CUSTOM_RADIAN);
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("text", {
        x: x,
        y: y,
        fill: "white",
        textAnchor: x > cx ? 'start' : 'end',
        dominantBaseline: "central",
        className: "text-xs font-bold drop-shadow-md pointer-events-none",
        children: `${(percent * 100).toFixed(0)}%`
    }, void 0, false, {
        fileName: "[project]/components/dashboard/CategoryExpenseChart.tsx",
        lineNumber: 31,
        columnNumber: 9
    }, ("TURBOPACK compile-time value", void 0));
};
function CategoryExpenseChart({ data }) {
    _s();
    const chartData = Object.entries(data).map(([name, value])=>({
            name,
            value
        })).filter((item)=>item.value > 0).sort((a, b)=>b.value - a.value);
    const [isMobile, setIsMobile] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "CategoryExpenseChart.useEffect": ()=>{
            const checkMobile = {
                "CategoryExpenseChart.useEffect.checkMobile": ()=>{
                    setIsMobile(window.innerWidth < 768);
                }
            }["CategoryExpenseChart.useEffect.checkMobile"];
            checkMobile();
            window.addEventListener('resize', checkMobile);
            return ({
                "CategoryExpenseChart.useEffect": ()=>window.removeEventListener('resize', checkMobile)
            })["CategoryExpenseChart.useEffect"];
        }
    }["CategoryExpenseChart.useEffect"], []);
    if (chartData.length === 0) {
        return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "glass-card p-6 rounded-2xl h-[400px] flex items-center justify-center text-gray-400",
            children: "No expense data available for this period"
        }, void 0, false, {
            fileName: "[project]/components/dashboard/CategoryExpenseChart.tsx",
            lineNumber: 58,
            columnNumber: 13
        }, this);
    }
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass-card p-2 md:p-6 rounded-2xl h-[400px] animate-fade-in animate-delay-300",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                className: "text-lg font-bold text-gray-900 dark:text-white mb-6",
                children: "Expense Source"
            }, void 0, false, {
                fileName: "[project]/components/dashboard/CategoryExpenseChart.tsx",
                lineNumber: 66,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "w-full h-[300px]",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$ResponsiveContainer$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["ResponsiveContainer"], {
                    width: "100%",
                    height: "100%",
                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$chart$2f$PieChart$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["PieChart"], {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$polar$2f$Pie$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Pie"], {
                                data: chartData,
                                cx: "50%",
                                cy: "50%",
                                labelLine: false,
                                label: renderCustomizedLabel,
                                outerRadius: isMobile ? 80 : 100,
                                fill: "#8884d8",
                                dataKey: "value",
                                children: chartData.map((entry, index)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Cell$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Cell"], {
                                        fill: COLORS[index % COLORS.length]
                                    }, `cell-${index}`, false, {
                                        fileName: "[project]/components/dashboard/CategoryExpenseChart.tsx",
                                        lineNumber: 81,
                                        columnNumber: 33
                                    }, this))
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/CategoryExpenseChart.tsx",
                                lineNumber: 70,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Tooltip$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Tooltip"], {
                                formatter: (value)=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$client$5d$__$28$ecmascript$29$__["formatCurrency"])(value),
                                contentStyle: {
                                    borderRadius: '12px',
                                    border: 'none',
                                    boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/CategoryExpenseChart.tsx",
                                lineNumber: 84,
                                columnNumber: 25
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$recharts$2f$es6$2f$component$2f$Legend$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Legend"], {
                                layout: isMobile ? "horizontal" : "vertical",
                                verticalAlign: isMobile ? "bottom" : "middle",
                                align: isMobile ? "center" : "right",
                                wrapperStyle: {
                                    fontSize: "12px"
                                }
                            }, void 0, false, {
                                fileName: "[project]/components/dashboard/CategoryExpenseChart.tsx",
                                lineNumber: 88,
                                columnNumber: 25
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/dashboard/CategoryExpenseChart.tsx",
                        lineNumber: 69,
                        columnNumber: 21
                    }, this)
                }, void 0, false, {
                    fileName: "[project]/components/dashboard/CategoryExpenseChart.tsx",
                    lineNumber: 68,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/dashboard/CategoryExpenseChart.tsx",
                lineNumber: 67,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/dashboard/CategoryExpenseChart.tsx",
        lineNumber: 65,
        columnNumber: 9
    }, this);
}
_s(CategoryExpenseChart, "0VTTNJATKABQPGLm9RVT0tKGUgU=");
_c = CategoryExpenseChart;
var _c;
__turbopack_context__.k.register(_c, "CategoryExpenseChart");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_d90effc9._.js.map