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
"[project]/lib/data:d005d2 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00b8854e641a2918644c790895a996121032778623":"signOutAction"},"lib/actions.ts",""] */ __turbopack_context__.s([
    "signOutAction",
    ()=>signOutAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var signOutAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("00b8854e641a2918644c790895a996121032778623", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "signOutAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIkAvYXV0aFwiO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYlwiO1xuaW1wb3J0IHsgdXNlcnMsIGV4cGVuc2VzLCBjYXRlZ29yaWVzLCBjaGlsZHJlbiwgdGhlcmFwaWVzLCBzZXNzaW9ucyB9IGZyb20gXCIuL2RiL3NjaGVtYVwiOyAvLyBSZW1vdmVkIGZhbWlsaWVzLCBzdGFmZnMsIGJ1ZGdldHNcblxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IGVxLCBkZXNjLCBhbmQgfSBmcm9tIFwiZHJpenpsZS1vcm1cIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRoZW50aWNhdGUoXG4gICAgcHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhLFxuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuICAgICAgICBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7IC4uLmNyZWRlbnRpYWxzLCByZWRpcmVjdFRvOiBcIi9kYXNoYm9hcmRcIiB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJDcmVkZW50aWFsc1NpZ25pblwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNyZWRlbnRpYWxzLlwiO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXRBY3Rpb24oKSB7XG4gICAgYXdhaXQgc2lnbk91dCh7IHJlZGlyZWN0VG86IFwiL1wiIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIocHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcblxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFuYW1lKSByZXR1cm4gXCJNaXNzaW5nIGZpZWxkc1wiO1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4gXCJVc2VyIGFscmVhZHkgZXhpc3RzXCI7XG5cbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG5cbiAgICAvLyBEZWZhdWx0IHJvbGU6IFBBUkVOVD8gT3IgQURNSU4gZm9yIGZpcnN0IHVzZXI/IFxuICAgIC8vIExvZ2ljOiBJZiBubyB1c2VycyBleGlzdCwgZmlyc3QgaXMgQURNSU4uIE90aGVyd2lzZSBQQVJFTlQuXG4gICAgLy8gRm9yIG5vdywgbGV0J3MgaGFyZGNvZGUgUEFSRU5UIHVubGVzcyBleHBsaWNpdGx5IHNldCBlbHNld2hlcmUgdXN1YWxseS5cbiAgICAvLyBCdXQgZm9yIHRoaXMgXCJSZXZhbXBcIiBtYXliZSB3ZSBhc3N1bWUgQWRtaW4gY3JlYXRlcyB1c2Vycz9cbiAgICAvLyBJZiB0aGlzIGlzIHB1YmxpYyByZWdpc3RyYXRpb24sIFBBUkVOVCBpcyBzYWZlci5cblxuICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IGRiLnNlbGVjdCgpLmZyb20odXNlcnMpLnRoZW4ocmVzID0+IHJlcy5sZW5ndGgpO1xuICAgIGNvbnN0IHJvbGUgPSB1c2VyQ291bnQgPT09IDAgPyBcIkFETUlOXCIgOiBcIlBBUkVOVFwiO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZTogcm9sZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFwiU3VjY2Vzc1wiO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCByb2xlID0gZm9ybURhdGEuZ2V0KFwicm9sZVwiKSBhcyBcIkFETUlOXCIgfCBcIlRIRVJBUElTVFwiIHwgXCJQQVJFTlRcIjtcbiAgICBjb25zdCBxdWFsaWZpY2F0aW9uID0gKGZvcm1EYXRhLmdldChcInF1YWxpZmljYXRpb25cIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIXJvbGUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgYWxyZWFkeSBleGlzdHNcIiB9O1xuXG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZSxcbiAgICAgICAgcXVhbGlmaWNhdGlvbixcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVXNlciBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEV4cGVuc2VBY3Rpb24ocHJldlN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG4gICAgLy8gT25seSBBZG1pbiBjYW4gYWRkIGV4cGVuc2VzPyBPciBUaGVyYXBpc3Q/XG4gICAgLy8gTGV0J3MgYWxsb3cgQWRtaW4gYW5kIG1heWJlIFRoZXJhcGlzdC5cbiAgICBpZiAoc2Vzc2lvbi51c2VyLnJvbGUgPT09IFwiUEFSRU5UXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuXG4gICAgY29uc3QgYW1vdW50ID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikgYXMgc3RyaW5nKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmcpIHx8IFwiXCI7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHR5cGUgPSAoZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBcIkVYUEVOU0VcIiB8IFwiSU5DT01FXCIgfCBcIkRVRVwiKSB8fCBcIkVYUEVOU0VcIjtcbiAgICBjb25zdCBjaGlsZElkID0gKGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIC8vIHN0YWZmSWQgcmVtb3ZlZC4gdHlwZSBpcyBlbm91Z2g/IE9yIG1heWJlIHJlY29yZGVkQnk/XG5cblxuICAgIGlmICghYW1vdW50IHx8ICFkYXRlU3RyKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGlmICghZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlJZFwiKSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IGlzIHJlcXVpcmVkXCIgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoZXhwZW5zZXMpLnZhbHVlcyh7XG4gICAgICAgIC8vIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLCAvLyBSZW1vdmVkIHVzZXJJZCBjb25zdHJhaW50IGZyb20gc2NoZW1hPyBObywga2VlcCBpdCBhcyAncmVjb3JkZWQgYnknIGlmIG5lZWRlZD8gXG4gICAgICAgIC8vIFNjaGVtYSBkZWZpbml0aW9uOiBcInVzZXJJZFwiIHJlbW92ZWQ/IExldCdzIGNoZWNrIHNjaGVtYS50cyBjb250ZW50IEkgd3JvdGUuXG4gICAgICAgIC8vIEkga2VwdCAnZXhwZW5zZScgdGFibGUgYnV0IHJlZmFjdG9yaW5nLlxuICAgICAgICAvLyBXYWl0LCBJIGNoYW5nZWQgJ3VzZXJJZCcgdG8gJ3JlY29yZGVkQnknIChvcHRpb25hbCkgaW4gbXkgdGhvdWdodCwgYnV0IGxldCdzIGNoZWNrIHdoYXQgSSBhY3R1YWxseSB3cm90ZS5cbiAgICAgICAgLy8gSSB3cm90ZTogcmVjb3JkZWRCeTogdXVpZChcInJlY29yZGVkX2J5XCIpLnJlZmVyZW5jZXMoKCkgPT4gdXNlcnMuaWQpLCAvLyBBZG1pbiB3aG8gcmVjb3JkZWQgaXRcblxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgYW1vdW50OiBhbW91bnQudG9TdHJpbmcoKSxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGNhdGVnb3J5SWQ6IChmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeUlkXCIpIGFzIHN0cmluZyksXG4gICAgICAgIGNoaWxkSWQ6IGNoaWxkSWQsXG4gICAgICAgIHJlY29yZGVkQnk6IHNlc3Npb24udXNlci5pZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVHJhbnNhY3Rpb24gYWRkZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0R1ZUFzUGFpZChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgZGIucXVlcnkuZXhwZW5zZXMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKGV4cGVuc2VzLmlkLCBpZClcbiAgICB9KTtcblxuICAgIGlmICghZXhwZW5zZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJSZWNvcmQgbm90IGZvdW5kXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShleHBlbnNlcykuc2V0KHtcbiAgICAgICAgdHlwZTogXCJJTkNPTUVcIlxuICAgIH0pLndoZXJlKGVxKGV4cGVuc2VzLmlkLCBpZCkpO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiUGF5bWVudCBtYXJrZWQgYXMgcGFpZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVVc2VyKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBpZiAodXNlcklkID09PSBzZXNzaW9uLnVzZXIuaWQpIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2Fubm90IGRlbGV0ZSB5b3Vyc2VsZlwiIH07XG5cbiAgICBhd2FpdCBkYi5kZWxldGUodXNlcnMpLndoZXJlKGVxKHVzZXJzLmlkLCB1c2VySWQpKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi91c2Vyc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgZGVsZXRlZFwiIH07XG59XG5cblxuLy8gLS0tIFRoZXJhcHkgQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVUaGVyYXB5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBwcmljZSA9IChmb3JtRGF0YS5nZXQoXCJwcmljZVwiKSBhcyBzdHJpbmcpIHx8IFwiMFwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBQ1RJVkVcIiB8IFwiSU5BQ1RJVkVcIikgfHwgXCJBQ1RJVkVcIjtcbiAgICBjb25zdCBkdXJhdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZWZhdWx0RHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZykgfHwgXCI0NVwiO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHRoZXJhcGllcykudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNoYXJnZVBlclNlc3Npb246IHByaWNlLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRlZmF1bHREdXJhdGlvbk1pbnV0ZXM6IHBhcnNlSW50KGR1cmF0aW9uKSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3RoZXJhcGllc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRoZXJhcHkoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSAoZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikgYXMgc3RyaW5nKSB8fCBcIlwiO1xuICAgIGNvbnN0IHByaWNlID0gKGZvcm1EYXRhLmdldChcInByaWNlXCIpIGFzIHN0cmluZykgfHwgXCIwXCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gKGZvcm1EYXRhLmdldChcImRlZmF1bHREdXJhdGlvbk1pbnV0ZXNcIikgYXMgc3RyaW5nKSB8fCBcIjQ1XCI7XG5cbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi51cGRhdGUodGhlcmFwaWVzKS5zZXQoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgY2hhcmdlUGVyU2Vzc2lvbjogcHJpY2UsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZGVmYXVsdER1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgIH0pLndoZXJlKGVxKHRoZXJhcGllcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3RoZXJhcGllc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRoZXJhcHkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGIuZGVsZXRlKHRoZXJhcGllcykud2hlcmUoZXEodGhlcmFwaWVzLmlkLCBpZCkpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi90aGVyYXBpZXNcIik7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVGhlcmFweSBzZXJ2aWNlIGRlbGV0ZWRcIiB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGRlbGV0ZSB0aGVyYXB5LiBJdCBtaWdodCBiZSBsaW5rZWQgdG8gZXhpc3Rpbmcgc2Vzc2lvbnMuXCIgfTtcbiAgICB9XG59XG5cblxuLy8gLS0tIFNlc3Npb24gQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTZXNzaW9uKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgLy8gQWRtaW4gb3IgVGhlcmFwaXN0IGNhbiBjcmVhdGUgc2Vzc2lvbnNcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSA9PT0gXCJQQVJFTlRcIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgY2hpbGRJZCA9IGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcGlzdElkID0gZm9ybURhdGEuZ2V0KFwidGhlcmFwaXN0SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcHlJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcHlJZFwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZm9ybURhdGEuZ2V0KFwiZHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZyB8fCBcIjQ1XCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIlNDSEVEVUxFRFwiIHwgXCJDT01QTEVURURcIiB8IFwiQ0FOQ0VMTEVEXCIgfCBcIk1JU1NFRFwiKSB8fCBcIlNDSEVEVUxFRFwiO1xuXG4gICAgaWYgKCFjaGlsZElkIHx8ICF0aGVyYXBpc3RJZCB8fCAhdGhlcmFweUlkIHx8ICFkYXRlU3RyKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyByZXF1aXJlZCBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGF3YWl0IGRiLmluc2VydChzZXNzaW9ucykudmFsdWVzKHtcbiAgICAgICAgY2hpbGRJZCxcbiAgICAgICAgdGhlcmFwaXN0SWQsXG4gICAgICAgIHRoZXJhcHlJZCxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGR1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgICAgICBzdGF0dXMsXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gc2NoZWR1bGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNlc3Npb24oaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSA9PT0gXCJQQVJFTlRcIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgY2hpbGRJZCA9IGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcGlzdElkID0gZm9ybURhdGEuZ2V0KFwidGhlcmFwaXN0SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcHlJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcHlJZFwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZm9ybURhdGEuZ2V0KFwiZHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZyB8fCBcIjQ1XCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIlNDSEVEVUxFRFwiIHwgXCJDT01QTEVURURcIiB8IFwiQ0FOQ0VMTEVEXCIgfCBcIk1JU1NFRFwiKSB8fCBcIlNDSEVEVUxFRFwiO1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKHNlc3Npb25zKS5zZXQoe1xuICAgICAgICBjaGlsZElkLFxuICAgICAgICB0aGVyYXBpc3RJZCxcbiAgICAgICAgdGhlcmFweUlkLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlU3RyKSxcbiAgICAgICAgZHVyYXRpb25NaW51dGVzOiBwYXJzZUludChkdXJhdGlvbiksXG4gICAgICAgIHN0YXR1cyxcbiAgICB9KS53aGVyZShlcShzZXNzaW9ucy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NjaGVkdWxlXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiU2Vzc2lvbiB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNlc3Npb24oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIuZGVsZXRlKHNlc3Npb25zKS53aGVyZShlcShzZXNzaW9ucy5pZCwgaWQpKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gZGVsZXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyKHVzZXJJZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIgJiYgc2Vzc2lvbj8udXNlcj8uaWQgIT09IHVzZXJJZCkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoXCJyb2xlXCIpIGFzIFwiQURNSU5cIiB8IFwiVEhFUkFQSVNUXCIgfCBcIlBBUkVOVFwiO1xuICAgIGNvbnN0IHF1YWxpZmljYXRpb24gPSAoZm9ybURhdGEuZ2V0KFwicXVhbGlmaWNhdGlvblwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKSBhcyBzdHJpbmc7XG5cbiAgICBpZiAoIW5hbWUgfHwgIWVtYWlsKSByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgZmllbGRzXCIgfTtcblxuICAgIGNvbnN0IHVwZGF0ZURhdGE6IGFueSA9IHsgbmFtZSwgZW1haWwsIHF1YWxpZmljYXRpb24gfTtcbiAgICBpZiAoc2Vzc2lvbi51c2VyLnJvbGUgPT09IFwiQURNSU5cIikge1xuICAgICAgICBpZiAocm9sZSkgdXBkYXRlRGF0YS5yb2xlID0gcm9sZTtcbiAgICAgICAgaWYgKHBhc3N3b3JkICYmIHBhc3N3b3JkLnRyaW0oKSAhPT0gXCJcIikge1xuICAgICAgICAgICAgdXBkYXRlRGF0YS5wYXNzd29yZEhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXdhaXQgZGIudXBkYXRlKHVzZXJzKVxuICAgICAgICAuc2V0KHVwZGF0ZURhdGEpXG4gICAgICAgIC53aGVyZShlcSh1c2Vycy5pZCwgdXNlcklkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgdXBkYXRlZFwiIH07XG59XG5cbi8vIC0tLSBDYXRlZ29yeSBBY3Rpb25zIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydChjYXRlZ29yaWVzIGFzIGFueSkudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgLy8gZmFtaWx5SWQgcmVtb3ZlZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYXRlZ29yeSBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3J5KGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShjYXRlZ29yaWVzKS5zZXQoeyBuYW1lIH0pLndoZXJlKGVxKGNhdGVnb3JpZXMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2F0ZWdvcnkgdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXRlZ29yeShpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkYi5kZWxldGUoY2F0ZWdvcmllcykud2hlcmUoZXEoY2F0ZWdvcmllcy5pZCwgaWQpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2Fubm90IGRlbGV0ZSBjYXRlZ29yeSBpbiB1c2VcIiB9O1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IGRlbGV0ZWRcIiB9O1xufVxuXG4vLyAtLS0gRXhwZW5zZSBBY3Rpb25zIC0tLSAoVXBkYXRlL0RlbGV0ZSlcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFeHBlbnNlKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIC8vIFBhcmVudCBjYW4ndCBkZWxldGU/IFllcy5cblxuICAgIGF3YWl0IGRiLmRlbGV0ZShleHBlbnNlcykud2hlcmUoZXEoZXhwZW5zZXMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiRXhwZW5zZSBkZWxldGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2UoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcImFtb3VudFwiKSBhcyBzdHJpbmcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBkYXRlU3RyID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgY2F0ZWdvcnlJZCA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5SWRcIikgYXMgc3RyaW5nO1xuXG4gICAgaWYgKCFhbW91bnQgfHwgIWRhdGVTdHIgfHwgIWNhdGVnb3J5SWQpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJNaXNzaW5nIGZpZWxkc1wiIH07XG4gICAgfVxuXG4gICAgYXdhaXQgZGIudXBkYXRlKGV4cGVuc2VzKS5zZXQoe1xuICAgICAgICBhbW91bnQ6IGFtb3VudC50b1N0cmluZygpLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGNhdGVnb3J5SWQ6IGNhdGVnb3J5SWQsXG4gICAgICAgIGNoaWxkSWQ6IChmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZykgfHwgbnVsbCxcbiAgICAgICAgdHlwZTogKGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgXCJFWFBFTlNFXCIgfCBcIklOQ09NRVwiIHwgXCJEVUVcIikgfHwgXCJFWFBFTlNFXCIsXG5cbiAgICB9KS53aGVyZShlcShleHBlbnNlcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRyYW5zYWN0aW9uIHVwZGF0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGFzc3dvcmQocHJldlN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgcmV0dXJuIFwiVW5hdXRob3JpemVkXCI7XG5cbiAgICBjb25zdCBjdXJyZW50UGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJjdXJyZW50UGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IG5ld1Bhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwibmV3UGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IGZvcm1EYXRhLmdldChcImNvbmZpcm1QYXNzd29yZFwiKSBhcyBzdHJpbmc7XG5cbiAgICBpZiAoIWN1cnJlbnRQYXNzd29yZCB8fCAhbmV3UGFzc3dvcmQgfHwgIWNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gXCJBbGwgZmllbGRzIGFyZSByZXF1aXJlZFwiO1xuICAgIH1cblxuICAgIGlmIChuZXdQYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiBcIk5ldyBwYXNzd29yZHMgZG8gbm90IG1hdGNoXCI7XG4gICAgfVxuXG4gICAgaWYgKG5ld1Bhc3N3b3JkLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgcmV0dXJuIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnNcIjtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmlkLCBzZXNzaW9uLnVzZXIuaWQpLFxuICAgIH0pO1xuXG4gICAgaWYgKCF1c2VyKSByZXR1cm4gXCJVc2VyIG5vdCBmb3VuZFwiO1xuXG4gICAgY29uc3QgaXNNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGN1cnJlbnRQYXNzd29yZCwgdXNlci5wYXNzd29yZEhhc2gpO1xuICAgIGlmICghaXNNYXRjaCkge1xuICAgICAgICByZXR1cm4gXCJJbmNvcnJlY3QgY3VycmVudCBwYXNzd29yZFwiO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gobmV3UGFzc3dvcmQsIDEwKTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZSh1c2VycylcbiAgICAgICAgLnNldCh7IHBhc3N3b3JkSGFzaDogaGFzaGVkUGFzc3dvcmQgfSlcbiAgICAgICAgLndoZXJlKGVxKHVzZXJzLmlkLCBzZXNzaW9uLnVzZXIuaWQpKTtcblxuICAgIHJldHVybiBcIlN1Y2Nlc3NcIjtcbn1cblxuLy8gLS0tIENoaWxkIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2hpbGQoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGRvYiA9IChmb3JtRGF0YS5nZXQoXCJkb2JcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGdlbmRlciA9IChmb3JtRGF0YS5nZXQoXCJnZW5kZXJcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGRpYWdub3NpcyA9IChmb3JtRGF0YS5nZXQoXCJkaWFnbm9zaXNcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHBhcmVudElkID0gKGZvcm1EYXRhLmdldChcInBhcmVudElkXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcblxuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydChjaGlsZHJlbikudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkb2IsXG4gICAgICAgIGdlbmRlcixcbiAgICAgICAgZGlhZ25vc2lzLFxuICAgICAgICBwYXJlbnRJZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvY2hpbGRyZW5zXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2hpbGQgY3JlYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDaGlsZChpZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBzdGF0dXMgPSAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIFwiQUNUSVZFXCIgfCBcIklOQUNUSVZFXCIpIHx8IFwiQUNUSVZFXCI7XG4gICAgY29uc3QgZG9iID0gKGZvcm1EYXRhLmdldChcImRvYlwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgZ2VuZGVyID0gKGZvcm1EYXRhLmdldChcImdlbmRlclwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgZGlhZ25vc2lzID0gKGZvcm1EYXRhLmdldChcImRpYWdub3Npc1wiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgcGFyZW50SWQgPSAoZm9ybURhdGEuZ2V0KFwicGFyZW50SWRcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKGNoaWxkcmVuKS5zZXQoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRvYixcbiAgICAgICAgZ2VuZGVyLFxuICAgICAgICBkaWFnbm9zaXMsXG4gICAgICAgIHBhcmVudElkXG4gICAgfSkud2hlcmUoZXEoY2hpbGRyZW4uaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9jaGlsZHJlbnNcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDaGlsZCB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNoaWxkKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRiLmRlbGV0ZShjaGlsZHJlbikud2hlcmUoZXEoY2hpbGRyZW4uaWQsIGlkKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhbm5vdCBkZWxldGUgY2hpbGQgaW4gdXNlXCIgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNoaWxkIGRlbGV0ZWRcIiB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxUkFnQ3NCIn0=
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$d005d2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:d005d2 [app-client] (ecmascript) <text/javascript>");
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
                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$d005d2__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["signOutAction"])(),
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
"[project]/lib/data:7bfbcb [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60c6e29ece8d1f4f6154f69defb223a13c651b4b10":"addExpenseAction"},"lib/actions.ts",""] */ __turbopack_context__.s([
    "addExpenseAction",
    ()=>addExpenseAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var addExpenseAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60c6e29ece8d1f4f6154f69defb223a13c651b4b10", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addExpenseAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIkAvYXV0aFwiO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYlwiO1xuaW1wb3J0IHsgdXNlcnMsIGV4cGVuc2VzLCBjYXRlZ29yaWVzLCBjaGlsZHJlbiwgdGhlcmFwaWVzLCBzZXNzaW9ucyB9IGZyb20gXCIuL2RiL3NjaGVtYVwiOyAvLyBSZW1vdmVkIGZhbWlsaWVzLCBzdGFmZnMsIGJ1ZGdldHNcblxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IGVxLCBkZXNjLCBhbmQgfSBmcm9tIFwiZHJpenpsZS1vcm1cIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRoZW50aWNhdGUoXG4gICAgcHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhLFxuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuICAgICAgICBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7IC4uLmNyZWRlbnRpYWxzLCByZWRpcmVjdFRvOiBcIi9kYXNoYm9hcmRcIiB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJDcmVkZW50aWFsc1NpZ25pblwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNyZWRlbnRpYWxzLlwiO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXRBY3Rpb24oKSB7XG4gICAgYXdhaXQgc2lnbk91dCh7IHJlZGlyZWN0VG86IFwiL1wiIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIocHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcblxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFuYW1lKSByZXR1cm4gXCJNaXNzaW5nIGZpZWxkc1wiO1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4gXCJVc2VyIGFscmVhZHkgZXhpc3RzXCI7XG5cbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG5cbiAgICAvLyBEZWZhdWx0IHJvbGU6IFBBUkVOVD8gT3IgQURNSU4gZm9yIGZpcnN0IHVzZXI/IFxuICAgIC8vIExvZ2ljOiBJZiBubyB1c2VycyBleGlzdCwgZmlyc3QgaXMgQURNSU4uIE90aGVyd2lzZSBQQVJFTlQuXG4gICAgLy8gRm9yIG5vdywgbGV0J3MgaGFyZGNvZGUgUEFSRU5UIHVubGVzcyBleHBsaWNpdGx5IHNldCBlbHNld2hlcmUgdXN1YWxseS5cbiAgICAvLyBCdXQgZm9yIHRoaXMgXCJSZXZhbXBcIiBtYXliZSB3ZSBhc3N1bWUgQWRtaW4gY3JlYXRlcyB1c2Vycz9cbiAgICAvLyBJZiB0aGlzIGlzIHB1YmxpYyByZWdpc3RyYXRpb24sIFBBUkVOVCBpcyBzYWZlci5cblxuICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IGRiLnNlbGVjdCgpLmZyb20odXNlcnMpLnRoZW4ocmVzID0+IHJlcy5sZW5ndGgpO1xuICAgIGNvbnN0IHJvbGUgPSB1c2VyQ291bnQgPT09IDAgPyBcIkFETUlOXCIgOiBcIlBBUkVOVFwiO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZTogcm9sZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFwiU3VjY2Vzc1wiO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCByb2xlID0gZm9ybURhdGEuZ2V0KFwicm9sZVwiKSBhcyBcIkFETUlOXCIgfCBcIlRIRVJBUElTVFwiIHwgXCJQQVJFTlRcIjtcbiAgICBjb25zdCBxdWFsaWZpY2F0aW9uID0gKGZvcm1EYXRhLmdldChcInF1YWxpZmljYXRpb25cIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIXJvbGUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgYWxyZWFkeSBleGlzdHNcIiB9O1xuXG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZSxcbiAgICAgICAgcXVhbGlmaWNhdGlvbixcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVXNlciBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEV4cGVuc2VBY3Rpb24ocHJldlN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG4gICAgLy8gT25seSBBZG1pbiBjYW4gYWRkIGV4cGVuc2VzPyBPciBUaGVyYXBpc3Q/XG4gICAgLy8gTGV0J3MgYWxsb3cgQWRtaW4gYW5kIG1heWJlIFRoZXJhcGlzdC5cbiAgICBpZiAoc2Vzc2lvbi51c2VyLnJvbGUgPT09IFwiUEFSRU5UXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuXG4gICAgY29uc3QgYW1vdW50ID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikgYXMgc3RyaW5nKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmcpIHx8IFwiXCI7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHR5cGUgPSAoZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBcIkVYUEVOU0VcIiB8IFwiSU5DT01FXCIgfCBcIkRVRVwiKSB8fCBcIkVYUEVOU0VcIjtcbiAgICBjb25zdCBjaGlsZElkID0gKGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIC8vIHN0YWZmSWQgcmVtb3ZlZC4gdHlwZSBpcyBlbm91Z2g/IE9yIG1heWJlIHJlY29yZGVkQnk/XG5cblxuICAgIGlmICghYW1vdW50IHx8ICFkYXRlU3RyKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGlmICghZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlJZFwiKSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IGlzIHJlcXVpcmVkXCIgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoZXhwZW5zZXMpLnZhbHVlcyh7XG4gICAgICAgIC8vIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLCAvLyBSZW1vdmVkIHVzZXJJZCBjb25zdHJhaW50IGZyb20gc2NoZW1hPyBObywga2VlcCBpdCBhcyAncmVjb3JkZWQgYnknIGlmIG5lZWRlZD8gXG4gICAgICAgIC8vIFNjaGVtYSBkZWZpbml0aW9uOiBcInVzZXJJZFwiIHJlbW92ZWQ/IExldCdzIGNoZWNrIHNjaGVtYS50cyBjb250ZW50IEkgd3JvdGUuXG4gICAgICAgIC8vIEkga2VwdCAnZXhwZW5zZScgdGFibGUgYnV0IHJlZmFjdG9yaW5nLlxuICAgICAgICAvLyBXYWl0LCBJIGNoYW5nZWQgJ3VzZXJJZCcgdG8gJ3JlY29yZGVkQnknIChvcHRpb25hbCkgaW4gbXkgdGhvdWdodCwgYnV0IGxldCdzIGNoZWNrIHdoYXQgSSBhY3R1YWxseSB3cm90ZS5cbiAgICAgICAgLy8gSSB3cm90ZTogcmVjb3JkZWRCeTogdXVpZChcInJlY29yZGVkX2J5XCIpLnJlZmVyZW5jZXMoKCkgPT4gdXNlcnMuaWQpLCAvLyBBZG1pbiB3aG8gcmVjb3JkZWQgaXRcblxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgYW1vdW50OiBhbW91bnQudG9TdHJpbmcoKSxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGNhdGVnb3J5SWQ6IChmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeUlkXCIpIGFzIHN0cmluZyksXG4gICAgICAgIGNoaWxkSWQ6IGNoaWxkSWQsXG4gICAgICAgIHJlY29yZGVkQnk6IHNlc3Npb24udXNlci5pZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVHJhbnNhY3Rpb24gYWRkZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0R1ZUFzUGFpZChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgZGIucXVlcnkuZXhwZW5zZXMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKGV4cGVuc2VzLmlkLCBpZClcbiAgICB9KTtcblxuICAgIGlmICghZXhwZW5zZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJSZWNvcmQgbm90IGZvdW5kXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShleHBlbnNlcykuc2V0KHtcbiAgICAgICAgdHlwZTogXCJJTkNPTUVcIlxuICAgIH0pLndoZXJlKGVxKGV4cGVuc2VzLmlkLCBpZCkpO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiUGF5bWVudCBtYXJrZWQgYXMgcGFpZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVVc2VyKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBpZiAodXNlcklkID09PSBzZXNzaW9uLnVzZXIuaWQpIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2Fubm90IGRlbGV0ZSB5b3Vyc2VsZlwiIH07XG5cbiAgICBhd2FpdCBkYi5kZWxldGUodXNlcnMpLndoZXJlKGVxKHVzZXJzLmlkLCB1c2VySWQpKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi91c2Vyc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgZGVsZXRlZFwiIH07XG59XG5cblxuLy8gLS0tIFRoZXJhcHkgQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVUaGVyYXB5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBwcmljZSA9IChmb3JtRGF0YS5nZXQoXCJwcmljZVwiKSBhcyBzdHJpbmcpIHx8IFwiMFwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBQ1RJVkVcIiB8IFwiSU5BQ1RJVkVcIikgfHwgXCJBQ1RJVkVcIjtcbiAgICBjb25zdCBkdXJhdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZWZhdWx0RHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZykgfHwgXCI0NVwiO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHRoZXJhcGllcykudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNoYXJnZVBlclNlc3Npb246IHByaWNlLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRlZmF1bHREdXJhdGlvbk1pbnV0ZXM6IHBhcnNlSW50KGR1cmF0aW9uKSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3RoZXJhcGllc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRoZXJhcHkoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSAoZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikgYXMgc3RyaW5nKSB8fCBcIlwiO1xuICAgIGNvbnN0IHByaWNlID0gKGZvcm1EYXRhLmdldChcInByaWNlXCIpIGFzIHN0cmluZykgfHwgXCIwXCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gKGZvcm1EYXRhLmdldChcImRlZmF1bHREdXJhdGlvbk1pbnV0ZXNcIikgYXMgc3RyaW5nKSB8fCBcIjQ1XCI7XG5cbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi51cGRhdGUodGhlcmFwaWVzKS5zZXQoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgY2hhcmdlUGVyU2Vzc2lvbjogcHJpY2UsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZGVmYXVsdER1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgIH0pLndoZXJlKGVxKHRoZXJhcGllcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3RoZXJhcGllc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRoZXJhcHkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGIuZGVsZXRlKHRoZXJhcGllcykud2hlcmUoZXEodGhlcmFwaWVzLmlkLCBpZCkpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi90aGVyYXBpZXNcIik7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVGhlcmFweSBzZXJ2aWNlIGRlbGV0ZWRcIiB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGRlbGV0ZSB0aGVyYXB5LiBJdCBtaWdodCBiZSBsaW5rZWQgdG8gZXhpc3Rpbmcgc2Vzc2lvbnMuXCIgfTtcbiAgICB9XG59XG5cblxuLy8gLS0tIFNlc3Npb24gQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTZXNzaW9uKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgLy8gQWRtaW4gb3IgVGhlcmFwaXN0IGNhbiBjcmVhdGUgc2Vzc2lvbnNcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSA9PT0gXCJQQVJFTlRcIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgY2hpbGRJZCA9IGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcGlzdElkID0gZm9ybURhdGEuZ2V0KFwidGhlcmFwaXN0SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcHlJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcHlJZFwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZm9ybURhdGEuZ2V0KFwiZHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZyB8fCBcIjQ1XCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIlNDSEVEVUxFRFwiIHwgXCJDT01QTEVURURcIiB8IFwiQ0FOQ0VMTEVEXCIgfCBcIk1JU1NFRFwiKSB8fCBcIlNDSEVEVUxFRFwiO1xuXG4gICAgaWYgKCFjaGlsZElkIHx8ICF0aGVyYXBpc3RJZCB8fCAhdGhlcmFweUlkIHx8ICFkYXRlU3RyKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyByZXF1aXJlZCBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGF3YWl0IGRiLmluc2VydChzZXNzaW9ucykudmFsdWVzKHtcbiAgICAgICAgY2hpbGRJZCxcbiAgICAgICAgdGhlcmFwaXN0SWQsXG4gICAgICAgIHRoZXJhcHlJZCxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGR1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgICAgICBzdGF0dXMsXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gc2NoZWR1bGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNlc3Npb24oaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSA9PT0gXCJQQVJFTlRcIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgY2hpbGRJZCA9IGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcGlzdElkID0gZm9ybURhdGEuZ2V0KFwidGhlcmFwaXN0SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcHlJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcHlJZFwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZm9ybURhdGEuZ2V0KFwiZHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZyB8fCBcIjQ1XCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIlNDSEVEVUxFRFwiIHwgXCJDT01QTEVURURcIiB8IFwiQ0FOQ0VMTEVEXCIgfCBcIk1JU1NFRFwiKSB8fCBcIlNDSEVEVUxFRFwiO1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKHNlc3Npb25zKS5zZXQoe1xuICAgICAgICBjaGlsZElkLFxuICAgICAgICB0aGVyYXBpc3RJZCxcbiAgICAgICAgdGhlcmFweUlkLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlU3RyKSxcbiAgICAgICAgZHVyYXRpb25NaW51dGVzOiBwYXJzZUludChkdXJhdGlvbiksXG4gICAgICAgIHN0YXR1cyxcbiAgICB9KS53aGVyZShlcShzZXNzaW9ucy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NjaGVkdWxlXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiU2Vzc2lvbiB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNlc3Npb24oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIuZGVsZXRlKHNlc3Npb25zKS53aGVyZShlcShzZXNzaW9ucy5pZCwgaWQpKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gZGVsZXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyKHVzZXJJZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIgJiYgc2Vzc2lvbj8udXNlcj8uaWQgIT09IHVzZXJJZCkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoXCJyb2xlXCIpIGFzIFwiQURNSU5cIiB8IFwiVEhFUkFQSVNUXCIgfCBcIlBBUkVOVFwiO1xuICAgIGNvbnN0IHF1YWxpZmljYXRpb24gPSAoZm9ybURhdGEuZ2V0KFwicXVhbGlmaWNhdGlvblwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKSBhcyBzdHJpbmc7XG5cbiAgICBpZiAoIW5hbWUgfHwgIWVtYWlsKSByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgZmllbGRzXCIgfTtcblxuICAgIGNvbnN0IHVwZGF0ZURhdGE6IGFueSA9IHsgbmFtZSwgZW1haWwsIHF1YWxpZmljYXRpb24gfTtcbiAgICBpZiAoc2Vzc2lvbi51c2VyLnJvbGUgPT09IFwiQURNSU5cIikge1xuICAgICAgICBpZiAocm9sZSkgdXBkYXRlRGF0YS5yb2xlID0gcm9sZTtcbiAgICAgICAgaWYgKHBhc3N3b3JkICYmIHBhc3N3b3JkLnRyaW0oKSAhPT0gXCJcIikge1xuICAgICAgICAgICAgdXBkYXRlRGF0YS5wYXNzd29yZEhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXdhaXQgZGIudXBkYXRlKHVzZXJzKVxuICAgICAgICAuc2V0KHVwZGF0ZURhdGEpXG4gICAgICAgIC53aGVyZShlcSh1c2Vycy5pZCwgdXNlcklkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgdXBkYXRlZFwiIH07XG59XG5cbi8vIC0tLSBDYXRlZ29yeSBBY3Rpb25zIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydChjYXRlZ29yaWVzIGFzIGFueSkudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgLy8gZmFtaWx5SWQgcmVtb3ZlZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYXRlZ29yeSBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3J5KGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShjYXRlZ29yaWVzKS5zZXQoeyBuYW1lIH0pLndoZXJlKGVxKGNhdGVnb3JpZXMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2F0ZWdvcnkgdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXRlZ29yeShpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkYi5kZWxldGUoY2F0ZWdvcmllcykud2hlcmUoZXEoY2F0ZWdvcmllcy5pZCwgaWQpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2Fubm90IGRlbGV0ZSBjYXRlZ29yeSBpbiB1c2VcIiB9O1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IGRlbGV0ZWRcIiB9O1xufVxuXG4vLyAtLS0gRXhwZW5zZSBBY3Rpb25zIC0tLSAoVXBkYXRlL0RlbGV0ZSlcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFeHBlbnNlKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIC8vIFBhcmVudCBjYW4ndCBkZWxldGU/IFllcy5cblxuICAgIGF3YWl0IGRiLmRlbGV0ZShleHBlbnNlcykud2hlcmUoZXEoZXhwZW5zZXMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiRXhwZW5zZSBkZWxldGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2UoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcImFtb3VudFwiKSBhcyBzdHJpbmcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBkYXRlU3RyID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgY2F0ZWdvcnlJZCA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5SWRcIikgYXMgc3RyaW5nO1xuXG4gICAgaWYgKCFhbW91bnQgfHwgIWRhdGVTdHIgfHwgIWNhdGVnb3J5SWQpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJNaXNzaW5nIGZpZWxkc1wiIH07XG4gICAgfVxuXG4gICAgYXdhaXQgZGIudXBkYXRlKGV4cGVuc2VzKS5zZXQoe1xuICAgICAgICBhbW91bnQ6IGFtb3VudC50b1N0cmluZygpLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGNhdGVnb3J5SWQ6IGNhdGVnb3J5SWQsXG4gICAgICAgIGNoaWxkSWQ6IChmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZykgfHwgbnVsbCxcbiAgICAgICAgdHlwZTogKGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgXCJFWFBFTlNFXCIgfCBcIklOQ09NRVwiIHwgXCJEVUVcIikgfHwgXCJFWFBFTlNFXCIsXG5cbiAgICB9KS53aGVyZShlcShleHBlbnNlcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRyYW5zYWN0aW9uIHVwZGF0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGFzc3dvcmQocHJldlN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgcmV0dXJuIFwiVW5hdXRob3JpemVkXCI7XG5cbiAgICBjb25zdCBjdXJyZW50UGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJjdXJyZW50UGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IG5ld1Bhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwibmV3UGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IGZvcm1EYXRhLmdldChcImNvbmZpcm1QYXNzd29yZFwiKSBhcyBzdHJpbmc7XG5cbiAgICBpZiAoIWN1cnJlbnRQYXNzd29yZCB8fCAhbmV3UGFzc3dvcmQgfHwgIWNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gXCJBbGwgZmllbGRzIGFyZSByZXF1aXJlZFwiO1xuICAgIH1cblxuICAgIGlmIChuZXdQYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiBcIk5ldyBwYXNzd29yZHMgZG8gbm90IG1hdGNoXCI7XG4gICAgfVxuXG4gICAgaWYgKG5ld1Bhc3N3b3JkLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgcmV0dXJuIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnNcIjtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmlkLCBzZXNzaW9uLnVzZXIuaWQpLFxuICAgIH0pO1xuXG4gICAgaWYgKCF1c2VyKSByZXR1cm4gXCJVc2VyIG5vdCBmb3VuZFwiO1xuXG4gICAgY29uc3QgaXNNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGN1cnJlbnRQYXNzd29yZCwgdXNlci5wYXNzd29yZEhhc2gpO1xuICAgIGlmICghaXNNYXRjaCkge1xuICAgICAgICByZXR1cm4gXCJJbmNvcnJlY3QgY3VycmVudCBwYXNzd29yZFwiO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gobmV3UGFzc3dvcmQsIDEwKTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZSh1c2VycylcbiAgICAgICAgLnNldCh7IHBhc3N3b3JkSGFzaDogaGFzaGVkUGFzc3dvcmQgfSlcbiAgICAgICAgLndoZXJlKGVxKHVzZXJzLmlkLCBzZXNzaW9uLnVzZXIuaWQpKTtcblxuICAgIHJldHVybiBcIlN1Y2Nlc3NcIjtcbn1cblxuLy8gLS0tIENoaWxkIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2hpbGQoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGRvYiA9IChmb3JtRGF0YS5nZXQoXCJkb2JcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGdlbmRlciA9IChmb3JtRGF0YS5nZXQoXCJnZW5kZXJcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGRpYWdub3NpcyA9IChmb3JtRGF0YS5nZXQoXCJkaWFnbm9zaXNcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHBhcmVudElkID0gKGZvcm1EYXRhLmdldChcInBhcmVudElkXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcblxuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydChjaGlsZHJlbikudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkb2IsXG4gICAgICAgIGdlbmRlcixcbiAgICAgICAgZGlhZ25vc2lzLFxuICAgICAgICBwYXJlbnRJZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvY2hpbGRyZW5zXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2hpbGQgY3JlYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDaGlsZChpZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBzdGF0dXMgPSAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIFwiQUNUSVZFXCIgfCBcIklOQUNUSVZFXCIpIHx8IFwiQUNUSVZFXCI7XG4gICAgY29uc3QgZG9iID0gKGZvcm1EYXRhLmdldChcImRvYlwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgZ2VuZGVyID0gKGZvcm1EYXRhLmdldChcImdlbmRlclwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgZGlhZ25vc2lzID0gKGZvcm1EYXRhLmdldChcImRpYWdub3Npc1wiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgcGFyZW50SWQgPSAoZm9ybURhdGEuZ2V0KFwicGFyZW50SWRcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKGNoaWxkcmVuKS5zZXQoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRvYixcbiAgICAgICAgZ2VuZGVyLFxuICAgICAgICBkaWFnbm9zaXMsXG4gICAgICAgIHBhcmVudElkXG4gICAgfSkud2hlcmUoZXEoY2hpbGRyZW4uaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9jaGlsZHJlbnNcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDaGlsZCB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNoaWxkKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRiLmRlbGV0ZShjaGlsZHJlbikud2hlcmUoZXEoY2hpbGRyZW4uaWQsIGlkKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhbm5vdCBkZWxldGUgY2hpbGQgaW4gdXNlXCIgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNoaWxkIGRlbGV0ZWRcIiB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJ3UkFzR3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data:4cb498 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60a0e6c1c04b9d54250546559c6761899044267282":"updateExpense"},"lib/actions.ts",""] */ __turbopack_context__.s([
    "updateExpense",
    ()=>updateExpense
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateExpense = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("60a0e6c1c04b9d54250546559c6761899044267282", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateExpense"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIkAvYXV0aFwiO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYlwiO1xuaW1wb3J0IHsgdXNlcnMsIGV4cGVuc2VzLCBjYXRlZ29yaWVzLCBjaGlsZHJlbiwgdGhlcmFwaWVzLCBzZXNzaW9ucyB9IGZyb20gXCIuL2RiL3NjaGVtYVwiOyAvLyBSZW1vdmVkIGZhbWlsaWVzLCBzdGFmZnMsIGJ1ZGdldHNcblxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IGVxLCBkZXNjLCBhbmQgfSBmcm9tIFwiZHJpenpsZS1vcm1cIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRoZW50aWNhdGUoXG4gICAgcHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhLFxuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuICAgICAgICBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7IC4uLmNyZWRlbnRpYWxzLCByZWRpcmVjdFRvOiBcIi9kYXNoYm9hcmRcIiB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJDcmVkZW50aWFsc1NpZ25pblwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNyZWRlbnRpYWxzLlwiO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXRBY3Rpb24oKSB7XG4gICAgYXdhaXQgc2lnbk91dCh7IHJlZGlyZWN0VG86IFwiL1wiIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIocHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcblxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFuYW1lKSByZXR1cm4gXCJNaXNzaW5nIGZpZWxkc1wiO1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4gXCJVc2VyIGFscmVhZHkgZXhpc3RzXCI7XG5cbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG5cbiAgICAvLyBEZWZhdWx0IHJvbGU6IFBBUkVOVD8gT3IgQURNSU4gZm9yIGZpcnN0IHVzZXI/IFxuICAgIC8vIExvZ2ljOiBJZiBubyB1c2VycyBleGlzdCwgZmlyc3QgaXMgQURNSU4uIE90aGVyd2lzZSBQQVJFTlQuXG4gICAgLy8gRm9yIG5vdywgbGV0J3MgaGFyZGNvZGUgUEFSRU5UIHVubGVzcyBleHBsaWNpdGx5IHNldCBlbHNld2hlcmUgdXN1YWxseS5cbiAgICAvLyBCdXQgZm9yIHRoaXMgXCJSZXZhbXBcIiBtYXliZSB3ZSBhc3N1bWUgQWRtaW4gY3JlYXRlcyB1c2Vycz9cbiAgICAvLyBJZiB0aGlzIGlzIHB1YmxpYyByZWdpc3RyYXRpb24sIFBBUkVOVCBpcyBzYWZlci5cblxuICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IGRiLnNlbGVjdCgpLmZyb20odXNlcnMpLnRoZW4ocmVzID0+IHJlcy5sZW5ndGgpO1xuICAgIGNvbnN0IHJvbGUgPSB1c2VyQ291bnQgPT09IDAgPyBcIkFETUlOXCIgOiBcIlBBUkVOVFwiO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZTogcm9sZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFwiU3VjY2Vzc1wiO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCByb2xlID0gZm9ybURhdGEuZ2V0KFwicm9sZVwiKSBhcyBcIkFETUlOXCIgfCBcIlRIRVJBUElTVFwiIHwgXCJQQVJFTlRcIjtcbiAgICBjb25zdCBxdWFsaWZpY2F0aW9uID0gKGZvcm1EYXRhLmdldChcInF1YWxpZmljYXRpb25cIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIXJvbGUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgYWxyZWFkeSBleGlzdHNcIiB9O1xuXG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZSxcbiAgICAgICAgcXVhbGlmaWNhdGlvbixcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVXNlciBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEV4cGVuc2VBY3Rpb24ocHJldlN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG4gICAgLy8gT25seSBBZG1pbiBjYW4gYWRkIGV4cGVuc2VzPyBPciBUaGVyYXBpc3Q/XG4gICAgLy8gTGV0J3MgYWxsb3cgQWRtaW4gYW5kIG1heWJlIFRoZXJhcGlzdC5cbiAgICBpZiAoc2Vzc2lvbi51c2VyLnJvbGUgPT09IFwiUEFSRU5UXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuXG4gICAgY29uc3QgYW1vdW50ID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikgYXMgc3RyaW5nKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmcpIHx8IFwiXCI7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHR5cGUgPSAoZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBcIkVYUEVOU0VcIiB8IFwiSU5DT01FXCIgfCBcIkRVRVwiKSB8fCBcIkVYUEVOU0VcIjtcbiAgICBjb25zdCBjaGlsZElkID0gKGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIC8vIHN0YWZmSWQgcmVtb3ZlZC4gdHlwZSBpcyBlbm91Z2g/IE9yIG1heWJlIHJlY29yZGVkQnk/XG5cblxuICAgIGlmICghYW1vdW50IHx8ICFkYXRlU3RyKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGlmICghZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlJZFwiKSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IGlzIHJlcXVpcmVkXCIgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoZXhwZW5zZXMpLnZhbHVlcyh7XG4gICAgICAgIC8vIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLCAvLyBSZW1vdmVkIHVzZXJJZCBjb25zdHJhaW50IGZyb20gc2NoZW1hPyBObywga2VlcCBpdCBhcyAncmVjb3JkZWQgYnknIGlmIG5lZWRlZD8gXG4gICAgICAgIC8vIFNjaGVtYSBkZWZpbml0aW9uOiBcInVzZXJJZFwiIHJlbW92ZWQ/IExldCdzIGNoZWNrIHNjaGVtYS50cyBjb250ZW50IEkgd3JvdGUuXG4gICAgICAgIC8vIEkga2VwdCAnZXhwZW5zZScgdGFibGUgYnV0IHJlZmFjdG9yaW5nLlxuICAgICAgICAvLyBXYWl0LCBJIGNoYW5nZWQgJ3VzZXJJZCcgdG8gJ3JlY29yZGVkQnknIChvcHRpb25hbCkgaW4gbXkgdGhvdWdodCwgYnV0IGxldCdzIGNoZWNrIHdoYXQgSSBhY3R1YWxseSB3cm90ZS5cbiAgICAgICAgLy8gSSB3cm90ZTogcmVjb3JkZWRCeTogdXVpZChcInJlY29yZGVkX2J5XCIpLnJlZmVyZW5jZXMoKCkgPT4gdXNlcnMuaWQpLCAvLyBBZG1pbiB3aG8gcmVjb3JkZWQgaXRcblxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgYW1vdW50OiBhbW91bnQudG9TdHJpbmcoKSxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGNhdGVnb3J5SWQ6IChmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeUlkXCIpIGFzIHN0cmluZyksXG4gICAgICAgIGNoaWxkSWQ6IGNoaWxkSWQsXG4gICAgICAgIHJlY29yZGVkQnk6IHNlc3Npb24udXNlci5pZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVHJhbnNhY3Rpb24gYWRkZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0R1ZUFzUGFpZChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgZGIucXVlcnkuZXhwZW5zZXMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKGV4cGVuc2VzLmlkLCBpZClcbiAgICB9KTtcblxuICAgIGlmICghZXhwZW5zZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJSZWNvcmQgbm90IGZvdW5kXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShleHBlbnNlcykuc2V0KHtcbiAgICAgICAgdHlwZTogXCJJTkNPTUVcIlxuICAgIH0pLndoZXJlKGVxKGV4cGVuc2VzLmlkLCBpZCkpO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiUGF5bWVudCBtYXJrZWQgYXMgcGFpZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVVc2VyKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBpZiAodXNlcklkID09PSBzZXNzaW9uLnVzZXIuaWQpIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2Fubm90IGRlbGV0ZSB5b3Vyc2VsZlwiIH07XG5cbiAgICBhd2FpdCBkYi5kZWxldGUodXNlcnMpLndoZXJlKGVxKHVzZXJzLmlkLCB1c2VySWQpKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi91c2Vyc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgZGVsZXRlZFwiIH07XG59XG5cblxuLy8gLS0tIFRoZXJhcHkgQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVUaGVyYXB5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBwcmljZSA9IChmb3JtRGF0YS5nZXQoXCJwcmljZVwiKSBhcyBzdHJpbmcpIHx8IFwiMFwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBQ1RJVkVcIiB8IFwiSU5BQ1RJVkVcIikgfHwgXCJBQ1RJVkVcIjtcbiAgICBjb25zdCBkdXJhdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZWZhdWx0RHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZykgfHwgXCI0NVwiO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHRoZXJhcGllcykudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNoYXJnZVBlclNlc3Npb246IHByaWNlLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRlZmF1bHREdXJhdGlvbk1pbnV0ZXM6IHBhcnNlSW50KGR1cmF0aW9uKSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3RoZXJhcGllc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRoZXJhcHkoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSAoZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikgYXMgc3RyaW5nKSB8fCBcIlwiO1xuICAgIGNvbnN0IHByaWNlID0gKGZvcm1EYXRhLmdldChcInByaWNlXCIpIGFzIHN0cmluZykgfHwgXCIwXCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gKGZvcm1EYXRhLmdldChcImRlZmF1bHREdXJhdGlvbk1pbnV0ZXNcIikgYXMgc3RyaW5nKSB8fCBcIjQ1XCI7XG5cbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi51cGRhdGUodGhlcmFwaWVzKS5zZXQoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgY2hhcmdlUGVyU2Vzc2lvbjogcHJpY2UsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZGVmYXVsdER1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgIH0pLndoZXJlKGVxKHRoZXJhcGllcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3RoZXJhcGllc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRoZXJhcHkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGIuZGVsZXRlKHRoZXJhcGllcykud2hlcmUoZXEodGhlcmFwaWVzLmlkLCBpZCkpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi90aGVyYXBpZXNcIik7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVGhlcmFweSBzZXJ2aWNlIGRlbGV0ZWRcIiB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGRlbGV0ZSB0aGVyYXB5LiBJdCBtaWdodCBiZSBsaW5rZWQgdG8gZXhpc3Rpbmcgc2Vzc2lvbnMuXCIgfTtcbiAgICB9XG59XG5cblxuLy8gLS0tIFNlc3Npb24gQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTZXNzaW9uKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgLy8gQWRtaW4gb3IgVGhlcmFwaXN0IGNhbiBjcmVhdGUgc2Vzc2lvbnNcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSA9PT0gXCJQQVJFTlRcIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgY2hpbGRJZCA9IGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcGlzdElkID0gZm9ybURhdGEuZ2V0KFwidGhlcmFwaXN0SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcHlJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcHlJZFwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZm9ybURhdGEuZ2V0KFwiZHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZyB8fCBcIjQ1XCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIlNDSEVEVUxFRFwiIHwgXCJDT01QTEVURURcIiB8IFwiQ0FOQ0VMTEVEXCIgfCBcIk1JU1NFRFwiKSB8fCBcIlNDSEVEVUxFRFwiO1xuXG4gICAgaWYgKCFjaGlsZElkIHx8ICF0aGVyYXBpc3RJZCB8fCAhdGhlcmFweUlkIHx8ICFkYXRlU3RyKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyByZXF1aXJlZCBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGF3YWl0IGRiLmluc2VydChzZXNzaW9ucykudmFsdWVzKHtcbiAgICAgICAgY2hpbGRJZCxcbiAgICAgICAgdGhlcmFwaXN0SWQsXG4gICAgICAgIHRoZXJhcHlJZCxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGR1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgICAgICBzdGF0dXMsXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gc2NoZWR1bGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNlc3Npb24oaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSA9PT0gXCJQQVJFTlRcIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgY2hpbGRJZCA9IGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcGlzdElkID0gZm9ybURhdGEuZ2V0KFwidGhlcmFwaXN0SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcHlJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcHlJZFwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZm9ybURhdGEuZ2V0KFwiZHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZyB8fCBcIjQ1XCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIlNDSEVEVUxFRFwiIHwgXCJDT01QTEVURURcIiB8IFwiQ0FOQ0VMTEVEXCIgfCBcIk1JU1NFRFwiKSB8fCBcIlNDSEVEVUxFRFwiO1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKHNlc3Npb25zKS5zZXQoe1xuICAgICAgICBjaGlsZElkLFxuICAgICAgICB0aGVyYXBpc3RJZCxcbiAgICAgICAgdGhlcmFweUlkLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlU3RyKSxcbiAgICAgICAgZHVyYXRpb25NaW51dGVzOiBwYXJzZUludChkdXJhdGlvbiksXG4gICAgICAgIHN0YXR1cyxcbiAgICB9KS53aGVyZShlcShzZXNzaW9ucy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NjaGVkdWxlXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiU2Vzc2lvbiB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNlc3Npb24oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIuZGVsZXRlKHNlc3Npb25zKS53aGVyZShlcShzZXNzaW9ucy5pZCwgaWQpKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gZGVsZXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyKHVzZXJJZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIgJiYgc2Vzc2lvbj8udXNlcj8uaWQgIT09IHVzZXJJZCkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoXCJyb2xlXCIpIGFzIFwiQURNSU5cIiB8IFwiVEhFUkFQSVNUXCIgfCBcIlBBUkVOVFwiO1xuICAgIGNvbnN0IHF1YWxpZmljYXRpb24gPSAoZm9ybURhdGEuZ2V0KFwicXVhbGlmaWNhdGlvblwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKSBhcyBzdHJpbmc7XG5cbiAgICBpZiAoIW5hbWUgfHwgIWVtYWlsKSByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgZmllbGRzXCIgfTtcblxuICAgIGNvbnN0IHVwZGF0ZURhdGE6IGFueSA9IHsgbmFtZSwgZW1haWwsIHF1YWxpZmljYXRpb24gfTtcbiAgICBpZiAoc2Vzc2lvbi51c2VyLnJvbGUgPT09IFwiQURNSU5cIikge1xuICAgICAgICBpZiAocm9sZSkgdXBkYXRlRGF0YS5yb2xlID0gcm9sZTtcbiAgICAgICAgaWYgKHBhc3N3b3JkICYmIHBhc3N3b3JkLnRyaW0oKSAhPT0gXCJcIikge1xuICAgICAgICAgICAgdXBkYXRlRGF0YS5wYXNzd29yZEhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXdhaXQgZGIudXBkYXRlKHVzZXJzKVxuICAgICAgICAuc2V0KHVwZGF0ZURhdGEpXG4gICAgICAgIC53aGVyZShlcSh1c2Vycy5pZCwgdXNlcklkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgdXBkYXRlZFwiIH07XG59XG5cbi8vIC0tLSBDYXRlZ29yeSBBY3Rpb25zIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydChjYXRlZ29yaWVzIGFzIGFueSkudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgLy8gZmFtaWx5SWQgcmVtb3ZlZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYXRlZ29yeSBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3J5KGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShjYXRlZ29yaWVzKS5zZXQoeyBuYW1lIH0pLndoZXJlKGVxKGNhdGVnb3JpZXMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2F0ZWdvcnkgdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXRlZ29yeShpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkYi5kZWxldGUoY2F0ZWdvcmllcykud2hlcmUoZXEoY2F0ZWdvcmllcy5pZCwgaWQpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2Fubm90IGRlbGV0ZSBjYXRlZ29yeSBpbiB1c2VcIiB9O1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IGRlbGV0ZWRcIiB9O1xufVxuXG4vLyAtLS0gRXhwZW5zZSBBY3Rpb25zIC0tLSAoVXBkYXRlL0RlbGV0ZSlcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFeHBlbnNlKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIC8vIFBhcmVudCBjYW4ndCBkZWxldGU/IFllcy5cblxuICAgIGF3YWl0IGRiLmRlbGV0ZShleHBlbnNlcykud2hlcmUoZXEoZXhwZW5zZXMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiRXhwZW5zZSBkZWxldGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2UoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcImFtb3VudFwiKSBhcyBzdHJpbmcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBkYXRlU3RyID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgY2F0ZWdvcnlJZCA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5SWRcIikgYXMgc3RyaW5nO1xuXG4gICAgaWYgKCFhbW91bnQgfHwgIWRhdGVTdHIgfHwgIWNhdGVnb3J5SWQpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJNaXNzaW5nIGZpZWxkc1wiIH07XG4gICAgfVxuXG4gICAgYXdhaXQgZGIudXBkYXRlKGV4cGVuc2VzKS5zZXQoe1xuICAgICAgICBhbW91bnQ6IGFtb3VudC50b1N0cmluZygpLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGNhdGVnb3J5SWQ6IGNhdGVnb3J5SWQsXG4gICAgICAgIGNoaWxkSWQ6IChmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZykgfHwgbnVsbCxcbiAgICAgICAgdHlwZTogKGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgXCJFWFBFTlNFXCIgfCBcIklOQ09NRVwiIHwgXCJEVUVcIikgfHwgXCJFWFBFTlNFXCIsXG5cbiAgICB9KS53aGVyZShlcShleHBlbnNlcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRyYW5zYWN0aW9uIHVwZGF0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGFzc3dvcmQocHJldlN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgcmV0dXJuIFwiVW5hdXRob3JpemVkXCI7XG5cbiAgICBjb25zdCBjdXJyZW50UGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJjdXJyZW50UGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IG5ld1Bhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwibmV3UGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IGZvcm1EYXRhLmdldChcImNvbmZpcm1QYXNzd29yZFwiKSBhcyBzdHJpbmc7XG5cbiAgICBpZiAoIWN1cnJlbnRQYXNzd29yZCB8fCAhbmV3UGFzc3dvcmQgfHwgIWNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gXCJBbGwgZmllbGRzIGFyZSByZXF1aXJlZFwiO1xuICAgIH1cblxuICAgIGlmIChuZXdQYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiBcIk5ldyBwYXNzd29yZHMgZG8gbm90IG1hdGNoXCI7XG4gICAgfVxuXG4gICAgaWYgKG5ld1Bhc3N3b3JkLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgcmV0dXJuIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnNcIjtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmlkLCBzZXNzaW9uLnVzZXIuaWQpLFxuICAgIH0pO1xuXG4gICAgaWYgKCF1c2VyKSByZXR1cm4gXCJVc2VyIG5vdCBmb3VuZFwiO1xuXG4gICAgY29uc3QgaXNNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGN1cnJlbnRQYXNzd29yZCwgdXNlci5wYXNzd29yZEhhc2gpO1xuICAgIGlmICghaXNNYXRjaCkge1xuICAgICAgICByZXR1cm4gXCJJbmNvcnJlY3QgY3VycmVudCBwYXNzd29yZFwiO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gobmV3UGFzc3dvcmQsIDEwKTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZSh1c2VycylcbiAgICAgICAgLnNldCh7IHBhc3N3b3JkSGFzaDogaGFzaGVkUGFzc3dvcmQgfSlcbiAgICAgICAgLndoZXJlKGVxKHVzZXJzLmlkLCBzZXNzaW9uLnVzZXIuaWQpKTtcblxuICAgIHJldHVybiBcIlN1Y2Nlc3NcIjtcbn1cblxuLy8gLS0tIENoaWxkIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2hpbGQoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGRvYiA9IChmb3JtRGF0YS5nZXQoXCJkb2JcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGdlbmRlciA9IChmb3JtRGF0YS5nZXQoXCJnZW5kZXJcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGRpYWdub3NpcyA9IChmb3JtRGF0YS5nZXQoXCJkaWFnbm9zaXNcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHBhcmVudElkID0gKGZvcm1EYXRhLmdldChcInBhcmVudElkXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcblxuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydChjaGlsZHJlbikudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkb2IsXG4gICAgICAgIGdlbmRlcixcbiAgICAgICAgZGlhZ25vc2lzLFxuICAgICAgICBwYXJlbnRJZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvY2hpbGRyZW5zXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2hpbGQgY3JlYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDaGlsZChpZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBzdGF0dXMgPSAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIFwiQUNUSVZFXCIgfCBcIklOQUNUSVZFXCIpIHx8IFwiQUNUSVZFXCI7XG4gICAgY29uc3QgZG9iID0gKGZvcm1EYXRhLmdldChcImRvYlwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgZ2VuZGVyID0gKGZvcm1EYXRhLmdldChcImdlbmRlclwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgZGlhZ25vc2lzID0gKGZvcm1EYXRhLmdldChcImRpYWdub3Npc1wiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgcGFyZW50SWQgPSAoZm9ybURhdGEuZ2V0KFwicGFyZW50SWRcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKGNoaWxkcmVuKS5zZXQoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRvYixcbiAgICAgICAgZ2VuZGVyLFxuICAgICAgICBkaWFnbm9zaXMsXG4gICAgICAgIHBhcmVudElkXG4gICAgfSkud2hlcmUoZXEoY2hpbGRyZW4uaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9jaGlsZHJlbnNcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDaGlsZCB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNoaWxkKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRiLmRlbGV0ZShjaGlsZHJlbikud2hlcmUoZXEoY2hpbGRyZW4uaWQsIGlkKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhbm5vdCBkZWxldGUgY2hpbGQgaW4gdXNlXCIgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNoaWxkIGRlbGV0ZWRcIiB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxUkEyWXNCIn0=
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
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$7bfbcb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:7bfbcb [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$4cb498__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:4cb498 [app-client] (ecmascript) <text/javascript>");
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
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$4cb498__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateExpense"])(expense.id, formData);
            } else {
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$7bfbcb__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addExpenseAction"])(undefined, formData);
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
"[project]/lib/data:9e256c [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"402f5c00da4fc1285f6f7ef20432bc9ed6ebef59eb":"deleteTherapy"},"lib/actions.ts",""] */ __turbopack_context__.s([
    "deleteTherapy",
    ()=>deleteTherapy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var deleteTherapy = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("402f5c00da4fc1285f6f7ef20432bc9ed6ebef59eb", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteTherapy"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIkAvYXV0aFwiO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYlwiO1xuaW1wb3J0IHsgdXNlcnMsIGV4cGVuc2VzLCBjYXRlZ29yaWVzLCBjaGlsZHJlbiwgdGhlcmFwaWVzLCBzZXNzaW9ucyB9IGZyb20gXCIuL2RiL3NjaGVtYVwiOyAvLyBSZW1vdmVkIGZhbWlsaWVzLCBzdGFmZnMsIGJ1ZGdldHNcblxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IGVxLCBkZXNjLCBhbmQgfSBmcm9tIFwiZHJpenpsZS1vcm1cIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRoZW50aWNhdGUoXG4gICAgcHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhLFxuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuICAgICAgICBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7IC4uLmNyZWRlbnRpYWxzLCByZWRpcmVjdFRvOiBcIi9kYXNoYm9hcmRcIiB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJDcmVkZW50aWFsc1NpZ25pblwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNyZWRlbnRpYWxzLlwiO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXRBY3Rpb24oKSB7XG4gICAgYXdhaXQgc2lnbk91dCh7IHJlZGlyZWN0VG86IFwiL1wiIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIocHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcblxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFuYW1lKSByZXR1cm4gXCJNaXNzaW5nIGZpZWxkc1wiO1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4gXCJVc2VyIGFscmVhZHkgZXhpc3RzXCI7XG5cbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG5cbiAgICAvLyBEZWZhdWx0IHJvbGU6IFBBUkVOVD8gT3IgQURNSU4gZm9yIGZpcnN0IHVzZXI/IFxuICAgIC8vIExvZ2ljOiBJZiBubyB1c2VycyBleGlzdCwgZmlyc3QgaXMgQURNSU4uIE90aGVyd2lzZSBQQVJFTlQuXG4gICAgLy8gRm9yIG5vdywgbGV0J3MgaGFyZGNvZGUgUEFSRU5UIHVubGVzcyBleHBsaWNpdGx5IHNldCBlbHNld2hlcmUgdXN1YWxseS5cbiAgICAvLyBCdXQgZm9yIHRoaXMgXCJSZXZhbXBcIiBtYXliZSB3ZSBhc3N1bWUgQWRtaW4gY3JlYXRlcyB1c2Vycz9cbiAgICAvLyBJZiB0aGlzIGlzIHB1YmxpYyByZWdpc3RyYXRpb24sIFBBUkVOVCBpcyBzYWZlci5cblxuICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IGRiLnNlbGVjdCgpLmZyb20odXNlcnMpLnRoZW4ocmVzID0+IHJlcy5sZW5ndGgpO1xuICAgIGNvbnN0IHJvbGUgPSB1c2VyQ291bnQgPT09IDAgPyBcIkFETUlOXCIgOiBcIlBBUkVOVFwiO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZTogcm9sZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFwiU3VjY2Vzc1wiO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCByb2xlID0gZm9ybURhdGEuZ2V0KFwicm9sZVwiKSBhcyBcIkFETUlOXCIgfCBcIlRIRVJBUElTVFwiIHwgXCJQQVJFTlRcIjtcbiAgICBjb25zdCBxdWFsaWZpY2F0aW9uID0gKGZvcm1EYXRhLmdldChcInF1YWxpZmljYXRpb25cIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIXJvbGUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgYWxyZWFkeSBleGlzdHNcIiB9O1xuXG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZSxcbiAgICAgICAgcXVhbGlmaWNhdGlvbixcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVXNlciBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEV4cGVuc2VBY3Rpb24ocHJldlN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG4gICAgLy8gT25seSBBZG1pbiBjYW4gYWRkIGV4cGVuc2VzPyBPciBUaGVyYXBpc3Q/XG4gICAgLy8gTGV0J3MgYWxsb3cgQWRtaW4gYW5kIG1heWJlIFRoZXJhcGlzdC5cbiAgICBpZiAoc2Vzc2lvbi51c2VyLnJvbGUgPT09IFwiUEFSRU5UXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuXG4gICAgY29uc3QgYW1vdW50ID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikgYXMgc3RyaW5nKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmcpIHx8IFwiXCI7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHR5cGUgPSAoZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBcIkVYUEVOU0VcIiB8IFwiSU5DT01FXCIgfCBcIkRVRVwiKSB8fCBcIkVYUEVOU0VcIjtcbiAgICBjb25zdCBjaGlsZElkID0gKGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIC8vIHN0YWZmSWQgcmVtb3ZlZC4gdHlwZSBpcyBlbm91Z2g/IE9yIG1heWJlIHJlY29yZGVkQnk/XG5cblxuICAgIGlmICghYW1vdW50IHx8ICFkYXRlU3RyKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGlmICghZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlJZFwiKSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IGlzIHJlcXVpcmVkXCIgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoZXhwZW5zZXMpLnZhbHVlcyh7XG4gICAgICAgIC8vIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLCAvLyBSZW1vdmVkIHVzZXJJZCBjb25zdHJhaW50IGZyb20gc2NoZW1hPyBObywga2VlcCBpdCBhcyAncmVjb3JkZWQgYnknIGlmIG5lZWRlZD8gXG4gICAgICAgIC8vIFNjaGVtYSBkZWZpbml0aW9uOiBcInVzZXJJZFwiIHJlbW92ZWQ/IExldCdzIGNoZWNrIHNjaGVtYS50cyBjb250ZW50IEkgd3JvdGUuXG4gICAgICAgIC8vIEkga2VwdCAnZXhwZW5zZScgdGFibGUgYnV0IHJlZmFjdG9yaW5nLlxuICAgICAgICAvLyBXYWl0LCBJIGNoYW5nZWQgJ3VzZXJJZCcgdG8gJ3JlY29yZGVkQnknIChvcHRpb25hbCkgaW4gbXkgdGhvdWdodCwgYnV0IGxldCdzIGNoZWNrIHdoYXQgSSBhY3R1YWxseSB3cm90ZS5cbiAgICAgICAgLy8gSSB3cm90ZTogcmVjb3JkZWRCeTogdXVpZChcInJlY29yZGVkX2J5XCIpLnJlZmVyZW5jZXMoKCkgPT4gdXNlcnMuaWQpLCAvLyBBZG1pbiB3aG8gcmVjb3JkZWQgaXRcblxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgYW1vdW50OiBhbW91bnQudG9TdHJpbmcoKSxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGNhdGVnb3J5SWQ6IChmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeUlkXCIpIGFzIHN0cmluZyksXG4gICAgICAgIGNoaWxkSWQ6IGNoaWxkSWQsXG4gICAgICAgIHJlY29yZGVkQnk6IHNlc3Npb24udXNlci5pZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVHJhbnNhY3Rpb24gYWRkZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0R1ZUFzUGFpZChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgZGIucXVlcnkuZXhwZW5zZXMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKGV4cGVuc2VzLmlkLCBpZClcbiAgICB9KTtcblxuICAgIGlmICghZXhwZW5zZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJSZWNvcmQgbm90IGZvdW5kXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShleHBlbnNlcykuc2V0KHtcbiAgICAgICAgdHlwZTogXCJJTkNPTUVcIlxuICAgIH0pLndoZXJlKGVxKGV4cGVuc2VzLmlkLCBpZCkpO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiUGF5bWVudCBtYXJrZWQgYXMgcGFpZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVVc2VyKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBpZiAodXNlcklkID09PSBzZXNzaW9uLnVzZXIuaWQpIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2Fubm90IGRlbGV0ZSB5b3Vyc2VsZlwiIH07XG5cbiAgICBhd2FpdCBkYi5kZWxldGUodXNlcnMpLndoZXJlKGVxKHVzZXJzLmlkLCB1c2VySWQpKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi91c2Vyc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgZGVsZXRlZFwiIH07XG59XG5cblxuLy8gLS0tIFRoZXJhcHkgQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVUaGVyYXB5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBwcmljZSA9IChmb3JtRGF0YS5nZXQoXCJwcmljZVwiKSBhcyBzdHJpbmcpIHx8IFwiMFwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBQ1RJVkVcIiB8IFwiSU5BQ1RJVkVcIikgfHwgXCJBQ1RJVkVcIjtcbiAgICBjb25zdCBkdXJhdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZWZhdWx0RHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZykgfHwgXCI0NVwiO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHRoZXJhcGllcykudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNoYXJnZVBlclNlc3Npb246IHByaWNlLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRlZmF1bHREdXJhdGlvbk1pbnV0ZXM6IHBhcnNlSW50KGR1cmF0aW9uKSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3RoZXJhcGllc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRoZXJhcHkoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSAoZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikgYXMgc3RyaW5nKSB8fCBcIlwiO1xuICAgIGNvbnN0IHByaWNlID0gKGZvcm1EYXRhLmdldChcInByaWNlXCIpIGFzIHN0cmluZykgfHwgXCIwXCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gKGZvcm1EYXRhLmdldChcImRlZmF1bHREdXJhdGlvbk1pbnV0ZXNcIikgYXMgc3RyaW5nKSB8fCBcIjQ1XCI7XG5cbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi51cGRhdGUodGhlcmFwaWVzKS5zZXQoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgY2hhcmdlUGVyU2Vzc2lvbjogcHJpY2UsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZGVmYXVsdER1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgIH0pLndoZXJlKGVxKHRoZXJhcGllcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3RoZXJhcGllc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRoZXJhcHkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGIuZGVsZXRlKHRoZXJhcGllcykud2hlcmUoZXEodGhlcmFwaWVzLmlkLCBpZCkpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi90aGVyYXBpZXNcIik7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVGhlcmFweSBzZXJ2aWNlIGRlbGV0ZWRcIiB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGRlbGV0ZSB0aGVyYXB5LiBJdCBtaWdodCBiZSBsaW5rZWQgdG8gZXhpc3Rpbmcgc2Vzc2lvbnMuXCIgfTtcbiAgICB9XG59XG5cblxuLy8gLS0tIFNlc3Npb24gQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTZXNzaW9uKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgLy8gQWRtaW4gb3IgVGhlcmFwaXN0IGNhbiBjcmVhdGUgc2Vzc2lvbnNcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSA9PT0gXCJQQVJFTlRcIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgY2hpbGRJZCA9IGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcGlzdElkID0gZm9ybURhdGEuZ2V0KFwidGhlcmFwaXN0SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcHlJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcHlJZFwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZm9ybURhdGEuZ2V0KFwiZHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZyB8fCBcIjQ1XCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIlNDSEVEVUxFRFwiIHwgXCJDT01QTEVURURcIiB8IFwiQ0FOQ0VMTEVEXCIgfCBcIk1JU1NFRFwiKSB8fCBcIlNDSEVEVUxFRFwiO1xuXG4gICAgaWYgKCFjaGlsZElkIHx8ICF0aGVyYXBpc3RJZCB8fCAhdGhlcmFweUlkIHx8ICFkYXRlU3RyKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyByZXF1aXJlZCBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGF3YWl0IGRiLmluc2VydChzZXNzaW9ucykudmFsdWVzKHtcbiAgICAgICAgY2hpbGRJZCxcbiAgICAgICAgdGhlcmFwaXN0SWQsXG4gICAgICAgIHRoZXJhcHlJZCxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGR1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgICAgICBzdGF0dXMsXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gc2NoZWR1bGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNlc3Npb24oaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSA9PT0gXCJQQVJFTlRcIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgY2hpbGRJZCA9IGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcGlzdElkID0gZm9ybURhdGEuZ2V0KFwidGhlcmFwaXN0SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcHlJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcHlJZFwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZm9ybURhdGEuZ2V0KFwiZHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZyB8fCBcIjQ1XCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIlNDSEVEVUxFRFwiIHwgXCJDT01QTEVURURcIiB8IFwiQ0FOQ0VMTEVEXCIgfCBcIk1JU1NFRFwiKSB8fCBcIlNDSEVEVUxFRFwiO1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKHNlc3Npb25zKS5zZXQoe1xuICAgICAgICBjaGlsZElkLFxuICAgICAgICB0aGVyYXBpc3RJZCxcbiAgICAgICAgdGhlcmFweUlkLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlU3RyKSxcbiAgICAgICAgZHVyYXRpb25NaW51dGVzOiBwYXJzZUludChkdXJhdGlvbiksXG4gICAgICAgIHN0YXR1cyxcbiAgICB9KS53aGVyZShlcShzZXNzaW9ucy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NjaGVkdWxlXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiU2Vzc2lvbiB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNlc3Npb24oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIuZGVsZXRlKHNlc3Npb25zKS53aGVyZShlcShzZXNzaW9ucy5pZCwgaWQpKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gZGVsZXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyKHVzZXJJZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIgJiYgc2Vzc2lvbj8udXNlcj8uaWQgIT09IHVzZXJJZCkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoXCJyb2xlXCIpIGFzIFwiQURNSU5cIiB8IFwiVEhFUkFQSVNUXCIgfCBcIlBBUkVOVFwiO1xuICAgIGNvbnN0IHF1YWxpZmljYXRpb24gPSAoZm9ybURhdGEuZ2V0KFwicXVhbGlmaWNhdGlvblwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKSBhcyBzdHJpbmc7XG5cbiAgICBpZiAoIW5hbWUgfHwgIWVtYWlsKSByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgZmllbGRzXCIgfTtcblxuICAgIGNvbnN0IHVwZGF0ZURhdGE6IGFueSA9IHsgbmFtZSwgZW1haWwsIHF1YWxpZmljYXRpb24gfTtcbiAgICBpZiAoc2Vzc2lvbi51c2VyLnJvbGUgPT09IFwiQURNSU5cIikge1xuICAgICAgICBpZiAocm9sZSkgdXBkYXRlRGF0YS5yb2xlID0gcm9sZTtcbiAgICAgICAgaWYgKHBhc3N3b3JkICYmIHBhc3N3b3JkLnRyaW0oKSAhPT0gXCJcIikge1xuICAgICAgICAgICAgdXBkYXRlRGF0YS5wYXNzd29yZEhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXdhaXQgZGIudXBkYXRlKHVzZXJzKVxuICAgICAgICAuc2V0KHVwZGF0ZURhdGEpXG4gICAgICAgIC53aGVyZShlcSh1c2Vycy5pZCwgdXNlcklkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgdXBkYXRlZFwiIH07XG59XG5cbi8vIC0tLSBDYXRlZ29yeSBBY3Rpb25zIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydChjYXRlZ29yaWVzIGFzIGFueSkudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgLy8gZmFtaWx5SWQgcmVtb3ZlZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYXRlZ29yeSBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3J5KGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShjYXRlZ29yaWVzKS5zZXQoeyBuYW1lIH0pLndoZXJlKGVxKGNhdGVnb3JpZXMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2F0ZWdvcnkgdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXRlZ29yeShpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkYi5kZWxldGUoY2F0ZWdvcmllcykud2hlcmUoZXEoY2F0ZWdvcmllcy5pZCwgaWQpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2Fubm90IGRlbGV0ZSBjYXRlZ29yeSBpbiB1c2VcIiB9O1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IGRlbGV0ZWRcIiB9O1xufVxuXG4vLyAtLS0gRXhwZW5zZSBBY3Rpb25zIC0tLSAoVXBkYXRlL0RlbGV0ZSlcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFeHBlbnNlKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIC8vIFBhcmVudCBjYW4ndCBkZWxldGU/IFllcy5cblxuICAgIGF3YWl0IGRiLmRlbGV0ZShleHBlbnNlcykud2hlcmUoZXEoZXhwZW5zZXMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiRXhwZW5zZSBkZWxldGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2UoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcImFtb3VudFwiKSBhcyBzdHJpbmcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBkYXRlU3RyID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgY2F0ZWdvcnlJZCA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5SWRcIikgYXMgc3RyaW5nO1xuXG4gICAgaWYgKCFhbW91bnQgfHwgIWRhdGVTdHIgfHwgIWNhdGVnb3J5SWQpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJNaXNzaW5nIGZpZWxkc1wiIH07XG4gICAgfVxuXG4gICAgYXdhaXQgZGIudXBkYXRlKGV4cGVuc2VzKS5zZXQoe1xuICAgICAgICBhbW91bnQ6IGFtb3VudC50b1N0cmluZygpLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGNhdGVnb3J5SWQ6IGNhdGVnb3J5SWQsXG4gICAgICAgIGNoaWxkSWQ6IChmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZykgfHwgbnVsbCxcbiAgICAgICAgdHlwZTogKGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgXCJFWFBFTlNFXCIgfCBcIklOQ09NRVwiIHwgXCJEVUVcIikgfHwgXCJFWFBFTlNFXCIsXG5cbiAgICB9KS53aGVyZShlcShleHBlbnNlcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRyYW5zYWN0aW9uIHVwZGF0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGFzc3dvcmQocHJldlN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgcmV0dXJuIFwiVW5hdXRob3JpemVkXCI7XG5cbiAgICBjb25zdCBjdXJyZW50UGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJjdXJyZW50UGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IG5ld1Bhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwibmV3UGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IGZvcm1EYXRhLmdldChcImNvbmZpcm1QYXNzd29yZFwiKSBhcyBzdHJpbmc7XG5cbiAgICBpZiAoIWN1cnJlbnRQYXNzd29yZCB8fCAhbmV3UGFzc3dvcmQgfHwgIWNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gXCJBbGwgZmllbGRzIGFyZSByZXF1aXJlZFwiO1xuICAgIH1cblxuICAgIGlmIChuZXdQYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiBcIk5ldyBwYXNzd29yZHMgZG8gbm90IG1hdGNoXCI7XG4gICAgfVxuXG4gICAgaWYgKG5ld1Bhc3N3b3JkLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgcmV0dXJuIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnNcIjtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmlkLCBzZXNzaW9uLnVzZXIuaWQpLFxuICAgIH0pO1xuXG4gICAgaWYgKCF1c2VyKSByZXR1cm4gXCJVc2VyIG5vdCBmb3VuZFwiO1xuXG4gICAgY29uc3QgaXNNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGN1cnJlbnRQYXNzd29yZCwgdXNlci5wYXNzd29yZEhhc2gpO1xuICAgIGlmICghaXNNYXRjaCkge1xuICAgICAgICByZXR1cm4gXCJJbmNvcnJlY3QgY3VycmVudCBwYXNzd29yZFwiO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gobmV3UGFzc3dvcmQsIDEwKTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZSh1c2VycylcbiAgICAgICAgLnNldCh7IHBhc3N3b3JkSGFzaDogaGFzaGVkUGFzc3dvcmQgfSlcbiAgICAgICAgLndoZXJlKGVxKHVzZXJzLmlkLCBzZXNzaW9uLnVzZXIuaWQpKTtcblxuICAgIHJldHVybiBcIlN1Y2Nlc3NcIjtcbn1cblxuLy8gLS0tIENoaWxkIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2hpbGQoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGRvYiA9IChmb3JtRGF0YS5nZXQoXCJkb2JcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGdlbmRlciA9IChmb3JtRGF0YS5nZXQoXCJnZW5kZXJcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGRpYWdub3NpcyA9IChmb3JtRGF0YS5nZXQoXCJkaWFnbm9zaXNcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHBhcmVudElkID0gKGZvcm1EYXRhLmdldChcInBhcmVudElkXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcblxuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydChjaGlsZHJlbikudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkb2IsXG4gICAgICAgIGdlbmRlcixcbiAgICAgICAgZGlhZ25vc2lzLFxuICAgICAgICBwYXJlbnRJZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvY2hpbGRyZW5zXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2hpbGQgY3JlYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDaGlsZChpZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBzdGF0dXMgPSAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIFwiQUNUSVZFXCIgfCBcIklOQUNUSVZFXCIpIHx8IFwiQUNUSVZFXCI7XG4gICAgY29uc3QgZG9iID0gKGZvcm1EYXRhLmdldChcImRvYlwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgZ2VuZGVyID0gKGZvcm1EYXRhLmdldChcImdlbmRlclwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgZGlhZ25vc2lzID0gKGZvcm1EYXRhLmdldChcImRpYWdub3Npc1wiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgcGFyZW50SWQgPSAoZm9ybURhdGEuZ2V0KFwicGFyZW50SWRcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKGNoaWxkcmVuKS5zZXQoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRvYixcbiAgICAgICAgZ2VuZGVyLFxuICAgICAgICBkaWFnbm9zaXMsXG4gICAgICAgIHBhcmVudElkXG4gICAgfSkud2hlcmUoZXEoY2hpbGRyZW4uaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9jaGlsZHJlbnNcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDaGlsZCB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNoaWxkKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRiLmRlbGV0ZShjaGlsZHJlbikud2hlcmUoZXEoY2hpbGRyZW4uaWQsIGlkKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhbm5vdCBkZWxldGUgY2hpbGQgaW4gdXNlXCIgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNoaWxkIGRlbGV0ZWRcIiB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxUkFvT3NCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data:526ad0 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4004a39d53f9f82adaca5d47cb1472f70093f96d99":"createTherapy"},"lib/actions.ts",""] */ __turbopack_context__.s([
    "createTherapy",
    ()=>createTherapy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var createTherapy = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("4004a39d53f9f82adaca5d47cb1472f70093f96d99", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createTherapy"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIkAvYXV0aFwiO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYlwiO1xuaW1wb3J0IHsgdXNlcnMsIGV4cGVuc2VzLCBjYXRlZ29yaWVzLCBjaGlsZHJlbiwgdGhlcmFwaWVzLCBzZXNzaW9ucyB9IGZyb20gXCIuL2RiL3NjaGVtYVwiOyAvLyBSZW1vdmVkIGZhbWlsaWVzLCBzdGFmZnMsIGJ1ZGdldHNcblxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IGVxLCBkZXNjLCBhbmQgfSBmcm9tIFwiZHJpenpsZS1vcm1cIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRoZW50aWNhdGUoXG4gICAgcHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhLFxuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuICAgICAgICBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7IC4uLmNyZWRlbnRpYWxzLCByZWRpcmVjdFRvOiBcIi9kYXNoYm9hcmRcIiB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJDcmVkZW50aWFsc1NpZ25pblwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNyZWRlbnRpYWxzLlwiO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXRBY3Rpb24oKSB7XG4gICAgYXdhaXQgc2lnbk91dCh7IHJlZGlyZWN0VG86IFwiL1wiIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIocHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcblxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFuYW1lKSByZXR1cm4gXCJNaXNzaW5nIGZpZWxkc1wiO1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4gXCJVc2VyIGFscmVhZHkgZXhpc3RzXCI7XG5cbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG5cbiAgICAvLyBEZWZhdWx0IHJvbGU6IFBBUkVOVD8gT3IgQURNSU4gZm9yIGZpcnN0IHVzZXI/IFxuICAgIC8vIExvZ2ljOiBJZiBubyB1c2VycyBleGlzdCwgZmlyc3QgaXMgQURNSU4uIE90aGVyd2lzZSBQQVJFTlQuXG4gICAgLy8gRm9yIG5vdywgbGV0J3MgaGFyZGNvZGUgUEFSRU5UIHVubGVzcyBleHBsaWNpdGx5IHNldCBlbHNld2hlcmUgdXN1YWxseS5cbiAgICAvLyBCdXQgZm9yIHRoaXMgXCJSZXZhbXBcIiBtYXliZSB3ZSBhc3N1bWUgQWRtaW4gY3JlYXRlcyB1c2Vycz9cbiAgICAvLyBJZiB0aGlzIGlzIHB1YmxpYyByZWdpc3RyYXRpb24sIFBBUkVOVCBpcyBzYWZlci5cblxuICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IGRiLnNlbGVjdCgpLmZyb20odXNlcnMpLnRoZW4ocmVzID0+IHJlcy5sZW5ndGgpO1xuICAgIGNvbnN0IHJvbGUgPSB1c2VyQ291bnQgPT09IDAgPyBcIkFETUlOXCIgOiBcIlBBUkVOVFwiO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZTogcm9sZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFwiU3VjY2Vzc1wiO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCByb2xlID0gZm9ybURhdGEuZ2V0KFwicm9sZVwiKSBhcyBcIkFETUlOXCIgfCBcIlRIRVJBUElTVFwiIHwgXCJQQVJFTlRcIjtcbiAgICBjb25zdCBxdWFsaWZpY2F0aW9uID0gKGZvcm1EYXRhLmdldChcInF1YWxpZmljYXRpb25cIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIXJvbGUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgYWxyZWFkeSBleGlzdHNcIiB9O1xuXG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZSxcbiAgICAgICAgcXVhbGlmaWNhdGlvbixcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVXNlciBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEV4cGVuc2VBY3Rpb24ocHJldlN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG4gICAgLy8gT25seSBBZG1pbiBjYW4gYWRkIGV4cGVuc2VzPyBPciBUaGVyYXBpc3Q/XG4gICAgLy8gTGV0J3MgYWxsb3cgQWRtaW4gYW5kIG1heWJlIFRoZXJhcGlzdC5cbiAgICBpZiAoc2Vzc2lvbi51c2VyLnJvbGUgPT09IFwiUEFSRU5UXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuXG4gICAgY29uc3QgYW1vdW50ID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikgYXMgc3RyaW5nKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmcpIHx8IFwiXCI7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHR5cGUgPSAoZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBcIkVYUEVOU0VcIiB8IFwiSU5DT01FXCIgfCBcIkRVRVwiKSB8fCBcIkVYUEVOU0VcIjtcbiAgICBjb25zdCBjaGlsZElkID0gKGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIC8vIHN0YWZmSWQgcmVtb3ZlZC4gdHlwZSBpcyBlbm91Z2g/IE9yIG1heWJlIHJlY29yZGVkQnk/XG5cblxuICAgIGlmICghYW1vdW50IHx8ICFkYXRlU3RyKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGlmICghZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlJZFwiKSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IGlzIHJlcXVpcmVkXCIgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoZXhwZW5zZXMpLnZhbHVlcyh7XG4gICAgICAgIC8vIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLCAvLyBSZW1vdmVkIHVzZXJJZCBjb25zdHJhaW50IGZyb20gc2NoZW1hPyBObywga2VlcCBpdCBhcyAncmVjb3JkZWQgYnknIGlmIG5lZWRlZD8gXG4gICAgICAgIC8vIFNjaGVtYSBkZWZpbml0aW9uOiBcInVzZXJJZFwiIHJlbW92ZWQ/IExldCdzIGNoZWNrIHNjaGVtYS50cyBjb250ZW50IEkgd3JvdGUuXG4gICAgICAgIC8vIEkga2VwdCAnZXhwZW5zZScgdGFibGUgYnV0IHJlZmFjdG9yaW5nLlxuICAgICAgICAvLyBXYWl0LCBJIGNoYW5nZWQgJ3VzZXJJZCcgdG8gJ3JlY29yZGVkQnknIChvcHRpb25hbCkgaW4gbXkgdGhvdWdodCwgYnV0IGxldCdzIGNoZWNrIHdoYXQgSSBhY3R1YWxseSB3cm90ZS5cbiAgICAgICAgLy8gSSB3cm90ZTogcmVjb3JkZWRCeTogdXVpZChcInJlY29yZGVkX2J5XCIpLnJlZmVyZW5jZXMoKCkgPT4gdXNlcnMuaWQpLCAvLyBBZG1pbiB3aG8gcmVjb3JkZWQgaXRcblxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgYW1vdW50OiBhbW91bnQudG9TdHJpbmcoKSxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGNhdGVnb3J5SWQ6IChmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeUlkXCIpIGFzIHN0cmluZyksXG4gICAgICAgIGNoaWxkSWQ6IGNoaWxkSWQsXG4gICAgICAgIHJlY29yZGVkQnk6IHNlc3Npb24udXNlci5pZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVHJhbnNhY3Rpb24gYWRkZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0R1ZUFzUGFpZChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgZGIucXVlcnkuZXhwZW5zZXMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKGV4cGVuc2VzLmlkLCBpZClcbiAgICB9KTtcblxuICAgIGlmICghZXhwZW5zZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJSZWNvcmQgbm90IGZvdW5kXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShleHBlbnNlcykuc2V0KHtcbiAgICAgICAgdHlwZTogXCJJTkNPTUVcIlxuICAgIH0pLndoZXJlKGVxKGV4cGVuc2VzLmlkLCBpZCkpO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiUGF5bWVudCBtYXJrZWQgYXMgcGFpZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVVc2VyKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBpZiAodXNlcklkID09PSBzZXNzaW9uLnVzZXIuaWQpIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2Fubm90IGRlbGV0ZSB5b3Vyc2VsZlwiIH07XG5cbiAgICBhd2FpdCBkYi5kZWxldGUodXNlcnMpLndoZXJlKGVxKHVzZXJzLmlkLCB1c2VySWQpKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi91c2Vyc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgZGVsZXRlZFwiIH07XG59XG5cblxuLy8gLS0tIFRoZXJhcHkgQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVUaGVyYXB5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBwcmljZSA9IChmb3JtRGF0YS5nZXQoXCJwcmljZVwiKSBhcyBzdHJpbmcpIHx8IFwiMFwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBQ1RJVkVcIiB8IFwiSU5BQ1RJVkVcIikgfHwgXCJBQ1RJVkVcIjtcbiAgICBjb25zdCBkdXJhdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZWZhdWx0RHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZykgfHwgXCI0NVwiO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHRoZXJhcGllcykudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNoYXJnZVBlclNlc3Npb246IHByaWNlLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRlZmF1bHREdXJhdGlvbk1pbnV0ZXM6IHBhcnNlSW50KGR1cmF0aW9uKSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3RoZXJhcGllc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRoZXJhcHkoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSAoZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikgYXMgc3RyaW5nKSB8fCBcIlwiO1xuICAgIGNvbnN0IHByaWNlID0gKGZvcm1EYXRhLmdldChcInByaWNlXCIpIGFzIHN0cmluZykgfHwgXCIwXCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gKGZvcm1EYXRhLmdldChcImRlZmF1bHREdXJhdGlvbk1pbnV0ZXNcIikgYXMgc3RyaW5nKSB8fCBcIjQ1XCI7XG5cbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi51cGRhdGUodGhlcmFwaWVzKS5zZXQoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgY2hhcmdlUGVyU2Vzc2lvbjogcHJpY2UsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZGVmYXVsdER1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgIH0pLndoZXJlKGVxKHRoZXJhcGllcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3RoZXJhcGllc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRoZXJhcHkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGIuZGVsZXRlKHRoZXJhcGllcykud2hlcmUoZXEodGhlcmFwaWVzLmlkLCBpZCkpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi90aGVyYXBpZXNcIik7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVGhlcmFweSBzZXJ2aWNlIGRlbGV0ZWRcIiB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGRlbGV0ZSB0aGVyYXB5LiBJdCBtaWdodCBiZSBsaW5rZWQgdG8gZXhpc3Rpbmcgc2Vzc2lvbnMuXCIgfTtcbiAgICB9XG59XG5cblxuLy8gLS0tIFNlc3Npb24gQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTZXNzaW9uKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgLy8gQWRtaW4gb3IgVGhlcmFwaXN0IGNhbiBjcmVhdGUgc2Vzc2lvbnNcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSA9PT0gXCJQQVJFTlRcIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgY2hpbGRJZCA9IGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcGlzdElkID0gZm9ybURhdGEuZ2V0KFwidGhlcmFwaXN0SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcHlJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcHlJZFwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZm9ybURhdGEuZ2V0KFwiZHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZyB8fCBcIjQ1XCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIlNDSEVEVUxFRFwiIHwgXCJDT01QTEVURURcIiB8IFwiQ0FOQ0VMTEVEXCIgfCBcIk1JU1NFRFwiKSB8fCBcIlNDSEVEVUxFRFwiO1xuXG4gICAgaWYgKCFjaGlsZElkIHx8ICF0aGVyYXBpc3RJZCB8fCAhdGhlcmFweUlkIHx8ICFkYXRlU3RyKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyByZXF1aXJlZCBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGF3YWl0IGRiLmluc2VydChzZXNzaW9ucykudmFsdWVzKHtcbiAgICAgICAgY2hpbGRJZCxcbiAgICAgICAgdGhlcmFwaXN0SWQsXG4gICAgICAgIHRoZXJhcHlJZCxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGR1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgICAgICBzdGF0dXMsXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gc2NoZWR1bGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNlc3Npb24oaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSA9PT0gXCJQQVJFTlRcIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgY2hpbGRJZCA9IGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcGlzdElkID0gZm9ybURhdGEuZ2V0KFwidGhlcmFwaXN0SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcHlJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcHlJZFwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZm9ybURhdGEuZ2V0KFwiZHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZyB8fCBcIjQ1XCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIlNDSEVEVUxFRFwiIHwgXCJDT01QTEVURURcIiB8IFwiQ0FOQ0VMTEVEXCIgfCBcIk1JU1NFRFwiKSB8fCBcIlNDSEVEVUxFRFwiO1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKHNlc3Npb25zKS5zZXQoe1xuICAgICAgICBjaGlsZElkLFxuICAgICAgICB0aGVyYXBpc3RJZCxcbiAgICAgICAgdGhlcmFweUlkLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlU3RyKSxcbiAgICAgICAgZHVyYXRpb25NaW51dGVzOiBwYXJzZUludChkdXJhdGlvbiksXG4gICAgICAgIHN0YXR1cyxcbiAgICB9KS53aGVyZShlcShzZXNzaW9ucy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NjaGVkdWxlXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiU2Vzc2lvbiB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNlc3Npb24oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIuZGVsZXRlKHNlc3Npb25zKS53aGVyZShlcShzZXNzaW9ucy5pZCwgaWQpKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gZGVsZXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyKHVzZXJJZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIgJiYgc2Vzc2lvbj8udXNlcj8uaWQgIT09IHVzZXJJZCkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoXCJyb2xlXCIpIGFzIFwiQURNSU5cIiB8IFwiVEhFUkFQSVNUXCIgfCBcIlBBUkVOVFwiO1xuICAgIGNvbnN0IHF1YWxpZmljYXRpb24gPSAoZm9ybURhdGEuZ2V0KFwicXVhbGlmaWNhdGlvblwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKSBhcyBzdHJpbmc7XG5cbiAgICBpZiAoIW5hbWUgfHwgIWVtYWlsKSByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgZmllbGRzXCIgfTtcblxuICAgIGNvbnN0IHVwZGF0ZURhdGE6IGFueSA9IHsgbmFtZSwgZW1haWwsIHF1YWxpZmljYXRpb24gfTtcbiAgICBpZiAoc2Vzc2lvbi51c2VyLnJvbGUgPT09IFwiQURNSU5cIikge1xuICAgICAgICBpZiAocm9sZSkgdXBkYXRlRGF0YS5yb2xlID0gcm9sZTtcbiAgICAgICAgaWYgKHBhc3N3b3JkICYmIHBhc3N3b3JkLnRyaW0oKSAhPT0gXCJcIikge1xuICAgICAgICAgICAgdXBkYXRlRGF0YS5wYXNzd29yZEhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXdhaXQgZGIudXBkYXRlKHVzZXJzKVxuICAgICAgICAuc2V0KHVwZGF0ZURhdGEpXG4gICAgICAgIC53aGVyZShlcSh1c2Vycy5pZCwgdXNlcklkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgdXBkYXRlZFwiIH07XG59XG5cbi8vIC0tLSBDYXRlZ29yeSBBY3Rpb25zIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydChjYXRlZ29yaWVzIGFzIGFueSkudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgLy8gZmFtaWx5SWQgcmVtb3ZlZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYXRlZ29yeSBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3J5KGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShjYXRlZ29yaWVzKS5zZXQoeyBuYW1lIH0pLndoZXJlKGVxKGNhdGVnb3JpZXMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2F0ZWdvcnkgdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXRlZ29yeShpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkYi5kZWxldGUoY2F0ZWdvcmllcykud2hlcmUoZXEoY2F0ZWdvcmllcy5pZCwgaWQpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2Fubm90IGRlbGV0ZSBjYXRlZ29yeSBpbiB1c2VcIiB9O1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IGRlbGV0ZWRcIiB9O1xufVxuXG4vLyAtLS0gRXhwZW5zZSBBY3Rpb25zIC0tLSAoVXBkYXRlL0RlbGV0ZSlcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFeHBlbnNlKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIC8vIFBhcmVudCBjYW4ndCBkZWxldGU/IFllcy5cblxuICAgIGF3YWl0IGRiLmRlbGV0ZShleHBlbnNlcykud2hlcmUoZXEoZXhwZW5zZXMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiRXhwZW5zZSBkZWxldGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2UoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcImFtb3VudFwiKSBhcyBzdHJpbmcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBkYXRlU3RyID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgY2F0ZWdvcnlJZCA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5SWRcIikgYXMgc3RyaW5nO1xuXG4gICAgaWYgKCFhbW91bnQgfHwgIWRhdGVTdHIgfHwgIWNhdGVnb3J5SWQpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJNaXNzaW5nIGZpZWxkc1wiIH07XG4gICAgfVxuXG4gICAgYXdhaXQgZGIudXBkYXRlKGV4cGVuc2VzKS5zZXQoe1xuICAgICAgICBhbW91bnQ6IGFtb3VudC50b1N0cmluZygpLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGNhdGVnb3J5SWQ6IGNhdGVnb3J5SWQsXG4gICAgICAgIGNoaWxkSWQ6IChmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZykgfHwgbnVsbCxcbiAgICAgICAgdHlwZTogKGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgXCJFWFBFTlNFXCIgfCBcIklOQ09NRVwiIHwgXCJEVUVcIikgfHwgXCJFWFBFTlNFXCIsXG5cbiAgICB9KS53aGVyZShlcShleHBlbnNlcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRyYW5zYWN0aW9uIHVwZGF0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGFzc3dvcmQocHJldlN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgcmV0dXJuIFwiVW5hdXRob3JpemVkXCI7XG5cbiAgICBjb25zdCBjdXJyZW50UGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJjdXJyZW50UGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IG5ld1Bhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwibmV3UGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IGZvcm1EYXRhLmdldChcImNvbmZpcm1QYXNzd29yZFwiKSBhcyBzdHJpbmc7XG5cbiAgICBpZiAoIWN1cnJlbnRQYXNzd29yZCB8fCAhbmV3UGFzc3dvcmQgfHwgIWNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gXCJBbGwgZmllbGRzIGFyZSByZXF1aXJlZFwiO1xuICAgIH1cblxuICAgIGlmIChuZXdQYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiBcIk5ldyBwYXNzd29yZHMgZG8gbm90IG1hdGNoXCI7XG4gICAgfVxuXG4gICAgaWYgKG5ld1Bhc3N3b3JkLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgcmV0dXJuIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnNcIjtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmlkLCBzZXNzaW9uLnVzZXIuaWQpLFxuICAgIH0pO1xuXG4gICAgaWYgKCF1c2VyKSByZXR1cm4gXCJVc2VyIG5vdCBmb3VuZFwiO1xuXG4gICAgY29uc3QgaXNNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGN1cnJlbnRQYXNzd29yZCwgdXNlci5wYXNzd29yZEhhc2gpO1xuICAgIGlmICghaXNNYXRjaCkge1xuICAgICAgICByZXR1cm4gXCJJbmNvcnJlY3QgY3VycmVudCBwYXNzd29yZFwiO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gobmV3UGFzc3dvcmQsIDEwKTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZSh1c2VycylcbiAgICAgICAgLnNldCh7IHBhc3N3b3JkSGFzaDogaGFzaGVkUGFzc3dvcmQgfSlcbiAgICAgICAgLndoZXJlKGVxKHVzZXJzLmlkLCBzZXNzaW9uLnVzZXIuaWQpKTtcblxuICAgIHJldHVybiBcIlN1Y2Nlc3NcIjtcbn1cblxuLy8gLS0tIENoaWxkIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2hpbGQoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGRvYiA9IChmb3JtRGF0YS5nZXQoXCJkb2JcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGdlbmRlciA9IChmb3JtRGF0YS5nZXQoXCJnZW5kZXJcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGRpYWdub3NpcyA9IChmb3JtRGF0YS5nZXQoXCJkaWFnbm9zaXNcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHBhcmVudElkID0gKGZvcm1EYXRhLmdldChcInBhcmVudElkXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcblxuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydChjaGlsZHJlbikudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkb2IsXG4gICAgICAgIGdlbmRlcixcbiAgICAgICAgZGlhZ25vc2lzLFxuICAgICAgICBwYXJlbnRJZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvY2hpbGRyZW5zXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2hpbGQgY3JlYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDaGlsZChpZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBzdGF0dXMgPSAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIFwiQUNUSVZFXCIgfCBcIklOQUNUSVZFXCIpIHx8IFwiQUNUSVZFXCI7XG4gICAgY29uc3QgZG9iID0gKGZvcm1EYXRhLmdldChcImRvYlwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgZ2VuZGVyID0gKGZvcm1EYXRhLmdldChcImdlbmRlclwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgZGlhZ25vc2lzID0gKGZvcm1EYXRhLmdldChcImRpYWdub3Npc1wiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgcGFyZW50SWQgPSAoZm9ybURhdGEuZ2V0KFwicGFyZW50SWRcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKGNoaWxkcmVuKS5zZXQoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRvYixcbiAgICAgICAgZ2VuZGVyLFxuICAgICAgICBkaWFnbm9zaXMsXG4gICAgICAgIHBhcmVudElkXG4gICAgfSkud2hlcmUoZXEoY2hpbGRyZW4uaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9jaGlsZHJlbnNcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDaGlsZCB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNoaWxkKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRiLmRlbGV0ZShjaGlsZHJlbikud2hlcmUoZXEoY2hpbGRyZW4uaWQsIGlkKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhbm5vdCBkZWxldGUgY2hpbGQgaW4gdXNlXCIgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNoaWxkIGRlbGV0ZWRcIiB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxUkFvTHNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/lib/data:af2b42 [app-client] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"6026f6639ed3236aa7bc9b2ddbc1bbd659fe6210b2":"updateTherapy"},"lib/actions.ts",""] */ __turbopack_context__.s([
    "updateTherapy",
    ()=>updateTherapy
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-client] (ecmascript)");
"use turbopack no side effects";
;
var updateTherapy = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createServerReference"])("6026f6639ed3236aa7bc9b2ddbc1bbd659fe6210b2", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateTherapy"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIkAvYXV0aFwiO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYlwiO1xuaW1wb3J0IHsgdXNlcnMsIGV4cGVuc2VzLCBjYXRlZ29yaWVzLCBjaGlsZHJlbiwgdGhlcmFwaWVzLCBzZXNzaW9ucyB9IGZyb20gXCIuL2RiL3NjaGVtYVwiOyAvLyBSZW1vdmVkIGZhbWlsaWVzLCBzdGFmZnMsIGJ1ZGdldHNcblxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IGVxLCBkZXNjLCBhbmQgfSBmcm9tIFwiZHJpenpsZS1vcm1cIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRoZW50aWNhdGUoXG4gICAgcHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhLFxuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuICAgICAgICBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7IC4uLmNyZWRlbnRpYWxzLCByZWRpcmVjdFRvOiBcIi9kYXNoYm9hcmRcIiB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJDcmVkZW50aWFsc1NpZ25pblwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNyZWRlbnRpYWxzLlwiO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXRBY3Rpb24oKSB7XG4gICAgYXdhaXQgc2lnbk91dCh7IHJlZGlyZWN0VG86IFwiL1wiIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIocHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcblxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFuYW1lKSByZXR1cm4gXCJNaXNzaW5nIGZpZWxkc1wiO1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4gXCJVc2VyIGFscmVhZHkgZXhpc3RzXCI7XG5cbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG5cbiAgICAvLyBEZWZhdWx0IHJvbGU6IFBBUkVOVD8gT3IgQURNSU4gZm9yIGZpcnN0IHVzZXI/IFxuICAgIC8vIExvZ2ljOiBJZiBubyB1c2VycyBleGlzdCwgZmlyc3QgaXMgQURNSU4uIE90aGVyd2lzZSBQQVJFTlQuXG4gICAgLy8gRm9yIG5vdywgbGV0J3MgaGFyZGNvZGUgUEFSRU5UIHVubGVzcyBleHBsaWNpdGx5IHNldCBlbHNld2hlcmUgdXN1YWxseS5cbiAgICAvLyBCdXQgZm9yIHRoaXMgXCJSZXZhbXBcIiBtYXliZSB3ZSBhc3N1bWUgQWRtaW4gY3JlYXRlcyB1c2Vycz9cbiAgICAvLyBJZiB0aGlzIGlzIHB1YmxpYyByZWdpc3RyYXRpb24sIFBBUkVOVCBpcyBzYWZlci5cblxuICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IGRiLnNlbGVjdCgpLmZyb20odXNlcnMpLnRoZW4ocmVzID0+IHJlcy5sZW5ndGgpO1xuICAgIGNvbnN0IHJvbGUgPSB1c2VyQ291bnQgPT09IDAgPyBcIkFETUlOXCIgOiBcIlBBUkVOVFwiO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZTogcm9sZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFwiU3VjY2Vzc1wiO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCByb2xlID0gZm9ybURhdGEuZ2V0KFwicm9sZVwiKSBhcyBcIkFETUlOXCIgfCBcIlRIRVJBUElTVFwiIHwgXCJQQVJFTlRcIjtcbiAgICBjb25zdCBxdWFsaWZpY2F0aW9uID0gKGZvcm1EYXRhLmdldChcInF1YWxpZmljYXRpb25cIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCB8fCAhcGFzc3dvcmQgfHwgIXJvbGUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgYWxyZWFkeSBleGlzdHNcIiB9O1xuXG4gICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZSxcbiAgICAgICAgcXVhbGlmaWNhdGlvbixcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVXNlciBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGFkZEV4cGVuc2VBY3Rpb24ocHJldlN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG4gICAgLy8gT25seSBBZG1pbiBjYW4gYWRkIGV4cGVuc2VzPyBPciBUaGVyYXBpc3Q/XG4gICAgLy8gTGV0J3MgYWxsb3cgQWRtaW4gYW5kIG1heWJlIFRoZXJhcGlzdC5cbiAgICBpZiAoc2Vzc2lvbi51c2VyLnJvbGUgPT09IFwiUEFSRU5UXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuXG4gICAgY29uc3QgYW1vdW50ID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikgYXMgc3RyaW5nKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmcpIHx8IFwiXCI7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHR5cGUgPSAoZm9ybURhdGEuZ2V0KFwidHlwZVwiKSBhcyBcIkVYUEVOU0VcIiB8IFwiSU5DT01FXCIgfCBcIkRVRVwiKSB8fCBcIkVYUEVOU0VcIjtcbiAgICBjb25zdCBjaGlsZElkID0gKGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIC8vIHN0YWZmSWQgcmVtb3ZlZC4gdHlwZSBpcyBlbm91Z2g/IE9yIG1heWJlIHJlY29yZGVkQnk/XG5cblxuICAgIGlmICghYW1vdW50IHx8ICFkYXRlU3RyKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGlmICghZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlJZFwiKSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IGlzIHJlcXVpcmVkXCIgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoZXhwZW5zZXMpLnZhbHVlcyh7XG4gICAgICAgIC8vIHVzZXJJZDogc2Vzc2lvbi51c2VyLmlkLCAvLyBSZW1vdmVkIHVzZXJJZCBjb25zdHJhaW50IGZyb20gc2NoZW1hPyBObywga2VlcCBpdCBhcyAncmVjb3JkZWQgYnknIGlmIG5lZWRlZD8gXG4gICAgICAgIC8vIFNjaGVtYSBkZWZpbml0aW9uOiBcInVzZXJJZFwiIHJlbW92ZWQ/IExldCdzIGNoZWNrIHNjaGVtYS50cyBjb250ZW50IEkgd3JvdGUuXG4gICAgICAgIC8vIEkga2VwdCAnZXhwZW5zZScgdGFibGUgYnV0IHJlZmFjdG9yaW5nLlxuICAgICAgICAvLyBXYWl0LCBJIGNoYW5nZWQgJ3VzZXJJZCcgdG8gJ3JlY29yZGVkQnknIChvcHRpb25hbCkgaW4gbXkgdGhvdWdodCwgYnV0IGxldCdzIGNoZWNrIHdoYXQgSSBhY3R1YWxseSB3cm90ZS5cbiAgICAgICAgLy8gSSB3cm90ZTogcmVjb3JkZWRCeTogdXVpZChcInJlY29yZGVkX2J5XCIpLnJlZmVyZW5jZXMoKCkgPT4gdXNlcnMuaWQpLCAvLyBBZG1pbiB3aG8gcmVjb3JkZWQgaXRcblxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgYW1vdW50OiBhbW91bnQudG9TdHJpbmcoKSxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIHR5cGU6IHR5cGUsXG4gICAgICAgIGNhdGVnb3J5SWQ6IChmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeUlkXCIpIGFzIHN0cmluZyksXG4gICAgICAgIGNoaWxkSWQ6IGNoaWxkSWQsXG4gICAgICAgIHJlY29yZGVkQnk6IHNlc3Npb24udXNlci5pZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVHJhbnNhY3Rpb24gYWRkZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gbWFya0R1ZUFzUGFpZChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBleHBlbnNlID0gYXdhaXQgZGIucXVlcnkuZXhwZW5zZXMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKGV4cGVuc2VzLmlkLCBpZClcbiAgICB9KTtcblxuICAgIGlmICghZXhwZW5zZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJSZWNvcmQgbm90IGZvdW5kXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShleHBlbnNlcykuc2V0KHtcbiAgICAgICAgdHlwZTogXCJJTkNPTUVcIlxuICAgIH0pLndoZXJlKGVxKGV4cGVuc2VzLmlkLCBpZCkpO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZGFzaGJvYXJkXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiUGF5bWVudCBtYXJrZWQgYXMgcGFpZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVVc2VyKHVzZXJJZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBpZiAodXNlcklkID09PSBzZXNzaW9uLnVzZXIuaWQpIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2Fubm90IGRlbGV0ZSB5b3Vyc2VsZlwiIH07XG5cbiAgICBhd2FpdCBkYi5kZWxldGUodXNlcnMpLndoZXJlKGVxKHVzZXJzLmlkLCB1c2VySWQpKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi91c2Vyc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgZGVsZXRlZFwiIH07XG59XG5cblxuLy8gLS0tIFRoZXJhcHkgQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVUaGVyYXB5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBwcmljZSA9IChmb3JtRGF0YS5nZXQoXCJwcmljZVwiKSBhcyBzdHJpbmcpIHx8IFwiMFwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBQ1RJVkVcIiB8IFwiSU5BQ1RJVkVcIikgfHwgXCJBQ1RJVkVcIjtcbiAgICBjb25zdCBkdXJhdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZWZhdWx0RHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZykgfHwgXCI0NVwiO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHRoZXJhcGllcykudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNoYXJnZVBlclNlc3Npb246IHByaWNlLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRlZmF1bHREdXJhdGlvbk1pbnV0ZXM6IHBhcnNlSW50KGR1cmF0aW9uKSxcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3RoZXJhcGllc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVRoZXJhcHkoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSAoZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikgYXMgc3RyaW5nKSB8fCBcIlwiO1xuICAgIGNvbnN0IHByaWNlID0gKGZvcm1EYXRhLmdldChcInByaWNlXCIpIGFzIHN0cmluZykgfHwgXCIwXCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gKGZvcm1EYXRhLmdldChcImRlZmF1bHREdXJhdGlvbk1pbnV0ZXNcIikgYXMgc3RyaW5nKSB8fCBcIjQ1XCI7XG5cbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi51cGRhdGUodGhlcmFwaWVzKS5zZXQoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgY2hhcmdlUGVyU2Vzc2lvbjogcHJpY2UsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZGVmYXVsdER1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgIH0pLndoZXJlKGVxKHRoZXJhcGllcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3RoZXJhcGllc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVRoZXJhcHkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGIuZGVsZXRlKHRoZXJhcGllcykud2hlcmUoZXEodGhlcmFwaWVzLmlkLCBpZCkpO1xuICAgICAgICByZXZhbGlkYXRlUGF0aChcIi90aGVyYXBpZXNcIik7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVGhlcmFweSBzZXJ2aWNlIGRlbGV0ZWRcIiB9O1xuICAgIH0gY2F0Y2ggKGVycm9yKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiRmFpbGVkIHRvIGRlbGV0ZSB0aGVyYXB5LiBJdCBtaWdodCBiZSBsaW5rZWQgdG8gZXhpc3Rpbmcgc2Vzc2lvbnMuXCIgfTtcbiAgICB9XG59XG5cblxuLy8gLS0tIFNlc3Npb24gQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVTZXNzaW9uKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgLy8gQWRtaW4gb3IgVGhlcmFwaXN0IGNhbiBjcmVhdGUgc2Vzc2lvbnNcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSA9PT0gXCJQQVJFTlRcIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgY2hpbGRJZCA9IGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcGlzdElkID0gZm9ybURhdGEuZ2V0KFwidGhlcmFwaXN0SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcHlJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcHlJZFwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZm9ybURhdGEuZ2V0KFwiZHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZyB8fCBcIjQ1XCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIlNDSEVEVUxFRFwiIHwgXCJDT01QTEVURURcIiB8IFwiQ0FOQ0VMTEVEXCIgfCBcIk1JU1NFRFwiKSB8fCBcIlNDSEVEVUxFRFwiO1xuXG4gICAgaWYgKCFjaGlsZElkIHx8ICF0aGVyYXBpc3RJZCB8fCAhdGhlcmFweUlkIHx8ICFkYXRlU3RyKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyByZXF1aXJlZCBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGF3YWl0IGRiLmluc2VydChzZXNzaW9ucykudmFsdWVzKHtcbiAgICAgICAgY2hpbGRJZCxcbiAgICAgICAgdGhlcmFwaXN0SWQsXG4gICAgICAgIHRoZXJhcHlJZCxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGR1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgICAgICBzdGF0dXMsXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gc2NoZWR1bGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVNlc3Npb24oaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSA9PT0gXCJQQVJFTlRcIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgY2hpbGRJZCA9IGZvcm1EYXRhLmdldChcImNoaWxkSWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcGlzdElkID0gZm9ybURhdGEuZ2V0KFwidGhlcmFwaXN0SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHRoZXJhcHlJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcHlJZFwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGR1cmF0aW9uID0gZm9ybURhdGEuZ2V0KFwiZHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZyB8fCBcIjQ1XCI7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIlNDSEVEVUxFRFwiIHwgXCJDT01QTEVURURcIiB8IFwiQ0FOQ0VMTEVEXCIgfCBcIk1JU1NFRFwiKSB8fCBcIlNDSEVEVUxFRFwiO1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKHNlc3Npb25zKS5zZXQoe1xuICAgICAgICBjaGlsZElkLFxuICAgICAgICB0aGVyYXBpc3RJZCxcbiAgICAgICAgdGhlcmFweUlkLFxuICAgICAgICBkYXRlOiBuZXcgRGF0ZShkYXRlU3RyKSxcbiAgICAgICAgZHVyYXRpb25NaW51dGVzOiBwYXJzZUludChkdXJhdGlvbiksXG4gICAgICAgIHN0YXR1cyxcbiAgICB9KS53aGVyZShlcShzZXNzaW9ucy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NjaGVkdWxlXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiU2Vzc2lvbiB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZVNlc3Npb24oaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIuZGVsZXRlKHNlc3Npb25zKS53aGVyZShlcShzZXNzaW9ucy5pZCwgaWQpKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gZGVsZXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVVc2VyKHVzZXJJZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIgJiYgc2Vzc2lvbj8udXNlcj8uaWQgIT09IHVzZXJJZCkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG4gICAgfVxuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGVtYWlsID0gZm9ybURhdGEuZ2V0KFwiZW1haWxcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoXCJyb2xlXCIpIGFzIFwiQURNSU5cIiB8IFwiVEhFUkFQSVNUXCIgfCBcIlBBUkVOVFwiO1xuICAgIGNvbnN0IHF1YWxpZmljYXRpb24gPSAoZm9ybURhdGEuZ2V0KFwicXVhbGlmaWNhdGlvblwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKSBhcyBzdHJpbmc7XG5cbiAgICBpZiAoIW5hbWUgfHwgIWVtYWlsKSByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgZmllbGRzXCIgfTtcblxuICAgIGNvbnN0IHVwZGF0ZURhdGE6IGFueSA9IHsgbmFtZSwgZW1haWwsIHF1YWxpZmljYXRpb24gfTtcbiAgICBpZiAoc2Vzc2lvbi51c2VyLnJvbGUgPT09IFwiQURNSU5cIikge1xuICAgICAgICBpZiAocm9sZSkgdXBkYXRlRGF0YS5yb2xlID0gcm9sZTtcbiAgICAgICAgaWYgKHBhc3N3b3JkICYmIHBhc3N3b3JkLnRyaW0oKSAhPT0gXCJcIikge1xuICAgICAgICAgICAgdXBkYXRlRGF0YS5wYXNzd29yZEhhc2ggPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuICAgICAgICB9XG4gICAgfVxuXG4gICAgYXdhaXQgZGIudXBkYXRlKHVzZXJzKVxuICAgICAgICAuc2V0KHVwZGF0ZURhdGEpXG4gICAgICAgIC53aGVyZShlcSh1c2Vycy5pZCwgdXNlcklkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlVzZXIgdXBkYXRlZFwiIH07XG59XG5cbi8vIC0tLSBDYXRlZ29yeSBBY3Rpb25zIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNhdGVnb3J5KGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydChjYXRlZ29yaWVzIGFzIGFueSkudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgLy8gZmFtaWx5SWQgcmVtb3ZlZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYXRlZ29yeSBjcmVhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUNhdGVnb3J5KGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShjYXRlZ29yaWVzKS5zZXQoeyBuYW1lIH0pLndoZXJlKGVxKGNhdGVnb3JpZXMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2F0ZWdvcnkgdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDYXRlZ29yeShpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkYi5kZWxldGUoY2F0ZWdvcmllcykud2hlcmUoZXEoY2F0ZWdvcmllcy5pZCwgaWQpKTtcbiAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2Fubm90IGRlbGV0ZSBjYXRlZ29yeSBpbiB1c2VcIiB9O1xuICAgIH1cblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IGRlbGV0ZWRcIiB9O1xufVxuXG4vLyAtLS0gRXhwZW5zZSBBY3Rpb25zIC0tLSAoVXBkYXRlL0RlbGV0ZSlcbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVFeHBlbnNlKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIC8vIFBhcmVudCBjYW4ndCBkZWxldGU/IFllcy5cblxuICAgIGF3YWl0IGRiLmRlbGV0ZShleHBlbnNlcykud2hlcmUoZXEoZXhwZW5zZXMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL2V4cGVuc2VzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiRXhwZW5zZSBkZWxldGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZUV4cGVuc2UoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBhbW91bnQgPSBwYXJzZUZsb2F0KGZvcm1EYXRhLmdldChcImFtb3VudFwiKSBhcyBzdHJpbmcpO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBkYXRlU3RyID0gZm9ybURhdGEuZ2V0KFwiZGF0ZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3QgY2F0ZWdvcnlJZCA9IGZvcm1EYXRhLmdldChcImNhdGVnb3J5SWRcIikgYXMgc3RyaW5nO1xuXG4gICAgaWYgKCFhbW91bnQgfHwgIWRhdGVTdHIgfHwgIWNhdGVnb3J5SWQpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJNaXNzaW5nIGZpZWxkc1wiIH07XG4gICAgfVxuXG4gICAgYXdhaXQgZGIudXBkYXRlKGV4cGVuc2VzKS5zZXQoe1xuICAgICAgICBhbW91bnQ6IGFtb3VudC50b1N0cmluZygpLFxuICAgICAgICBkZXNjcmlwdGlvbixcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGNhdGVnb3J5SWQ6IGNhdGVnb3J5SWQsXG4gICAgICAgIGNoaWxkSWQ6IChmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZykgfHwgbnVsbCxcbiAgICAgICAgdHlwZTogKGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgXCJFWFBFTlNFXCIgfCBcIklOQ09NRVwiIHwgXCJEVUVcIikgfHwgXCJFWFBFTlNFXCIsXG5cbiAgICB9KS53aGVyZShlcShleHBlbnNlcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRyYW5zYWN0aW9uIHVwZGF0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlUGFzc3dvcmQocHJldlN0YXRlOiBhbnksIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKCFzZXNzaW9uPy51c2VyPy5pZCkgcmV0dXJuIFwiVW5hdXRob3JpemVkXCI7XG5cbiAgICBjb25zdCBjdXJyZW50UGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJjdXJyZW50UGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IG5ld1Bhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwibmV3UGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGNvbmZpcm1QYXNzd29yZCA9IGZvcm1EYXRhLmdldChcImNvbmZpcm1QYXNzd29yZFwiKSBhcyBzdHJpbmc7XG5cbiAgICBpZiAoIWN1cnJlbnRQYXNzd29yZCB8fCAhbmV3UGFzc3dvcmQgfHwgIWNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gXCJBbGwgZmllbGRzIGFyZSByZXF1aXJlZFwiO1xuICAgIH1cblxuICAgIGlmIChuZXdQYXNzd29yZCAhPT0gY29uZmlybVBhc3N3b3JkKSB7XG4gICAgICAgIHJldHVybiBcIk5ldyBwYXNzd29yZHMgZG8gbm90IG1hdGNoXCI7XG4gICAgfVxuXG4gICAgaWYgKG5ld1Bhc3N3b3JkLmxlbmd0aCA8IDYpIHtcbiAgICAgICAgcmV0dXJuIFwiUGFzc3dvcmQgbXVzdCBiZSBhdCBsZWFzdCA2IGNoYXJhY3RlcnNcIjtcbiAgICB9XG5cbiAgICBjb25zdCB1c2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmlkLCBzZXNzaW9uLnVzZXIuaWQpLFxuICAgIH0pO1xuXG4gICAgaWYgKCF1c2VyKSByZXR1cm4gXCJVc2VyIG5vdCBmb3VuZFwiO1xuXG4gICAgY29uc3QgaXNNYXRjaCA9IGF3YWl0IGJjcnlwdC5jb21wYXJlKGN1cnJlbnRQYXNzd29yZCwgdXNlci5wYXNzd29yZEhhc2gpO1xuICAgIGlmICghaXNNYXRjaCkge1xuICAgICAgICByZXR1cm4gXCJJbmNvcnJlY3QgY3VycmVudCBwYXNzd29yZFwiO1xuICAgIH1cblxuICAgIGNvbnN0IGhhc2hlZFBhc3N3b3JkID0gYXdhaXQgYmNyeXB0Lmhhc2gobmV3UGFzc3dvcmQsIDEwKTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZSh1c2VycylcbiAgICAgICAgLnNldCh7IHBhc3N3b3JkSGFzaDogaGFzaGVkUGFzc3dvcmQgfSlcbiAgICAgICAgLndoZXJlKGVxKHVzZXJzLmlkLCBzZXNzaW9uLnVzZXIuaWQpKTtcblxuICAgIHJldHVybiBcIlN1Y2Nlc3NcIjtcbn1cblxuLy8gLS0tIENoaWxkIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlQ2hpbGQoZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGRvYiA9IChmb3JtRGF0YS5nZXQoXCJkb2JcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGdlbmRlciA9IChmb3JtRGF0YS5nZXQoXCJnZW5kZXJcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGRpYWdub3NpcyA9IChmb3JtRGF0YS5nZXQoXCJkaWFnbm9zaXNcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHBhcmVudElkID0gKGZvcm1EYXRhLmdldChcInBhcmVudElkXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcblxuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydChjaGlsZHJlbikudmFsdWVzKHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkb2IsXG4gICAgICAgIGdlbmRlcixcbiAgICAgICAgZGlhZ25vc2lzLFxuICAgICAgICBwYXJlbnRJZFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvY2hpbGRyZW5zXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2hpbGQgY3JlYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDaGlsZChpZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBzdGF0dXMgPSAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIFwiQUNUSVZFXCIgfCBcIklOQUNUSVZFXCIpIHx8IFwiQUNUSVZFXCI7XG4gICAgY29uc3QgZG9iID0gKGZvcm1EYXRhLmdldChcImRvYlwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgZ2VuZGVyID0gKGZvcm1EYXRhLmdldChcImdlbmRlclwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgZGlhZ25vc2lzID0gKGZvcm1EYXRhLmdldChcImRpYWdub3Npc1wiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG4gICAgY29uc3QgcGFyZW50SWQgPSAoZm9ybURhdGEuZ2V0KFwicGFyZW50SWRcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKGNoaWxkcmVuKS5zZXQoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRvYixcbiAgICAgICAgZ2VuZGVyLFxuICAgICAgICBkaWFnbm9zaXMsXG4gICAgICAgIHBhcmVudElkXG4gICAgfSkud2hlcmUoZXEoY2hpbGRyZW4uaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9jaGlsZHJlbnNcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDaGlsZCB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGRlbGV0ZUNoaWxkKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRiLmRlbGV0ZShjaGlsZHJlbikud2hlcmUoZXEoY2hpbGRyZW4uaWQsIGlkKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhbm5vdCBkZWxldGUgY2hpbGQgaW4gdXNlXCIgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNoaWxkIGRlbGV0ZWRcIiB9O1xufVxuIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiJxUkE0TXNCIn0=
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/therapy/TherapyModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TherapyModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$526ad0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:526ad0 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$af2b42__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:af2b42 [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-client] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/save.js [app-client] (ecmascript) <export default as Save>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function TherapyModal({ isOpen, onClose, therapy }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    // Form State
    const [name, setName] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [price, setPrice] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("");
    const [status, setStatus] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("ACTIVE");
    const [duration, setDuration] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])("45");
    // Initialize/Reset form
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TherapyModal.useEffect": ()=>{
            if (isOpen) {
                if (therapy) {
                    setName(therapy.name);
                    setDescription(therapy.description || "");
                    setPrice(therapy.chargePerSession || "");
                    setStatus(therapy.status);
                    setDuration(therapy.defaultDurationMinutes.toString());
                } else {
                    setName("");
                    setDescription("");
                    setPrice("");
                    setStatus("ACTIVE");
                    setDuration("45");
                }
            }
        }
    }["TherapyModal.useEffect"], [
        isOpen,
        therapy
    ]);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "TherapyModal.useEffect": ()=>{
            setMounted(true);
        }
    }["TherapyModal.useEffect"], []);
    const handleSubmit = async (e)=>{
        e.preventDefault();
        if (!name.trim()) {
            __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error("Name is required");
            return;
        }
        const formData = new FormData();
        formData.append("name", name.trim());
        formData.append("description", description);
        formData.append("price", price);
        formData.append("status", status);
        formData.append("defaultDurationMinutes", duration);
        startTransition(async ()=>{
            let result;
            if (therapy) {
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$af2b42__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateTherapy"])(therapy.id, formData);
            } else {
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$526ad0__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createTherapy"])(formData);
            }
            if (result.message.includes("created") || result.message.includes("updated")) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].success(result.message);
                onClose();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$client$5d$__$28$ecmascript$29$__["toast"].error(result.message);
            }
        });
    };
    if (!mounted || !isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-2xl w-full max-w-lg shadow-2xl animate-in zoom-in-95 duration-200 border border-gray-100 dark:border-neutral-800 flex flex-col max-h-[90vh]",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b border-gray-100 dark:border-neutral-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                    className: "text-xl font-bold text-gray-900 dark:text-white",
                                    children: therapy ? "Edit Therapy" : "Add New Therapy"
                                }, void 0, false, {
                                    fileName: "[project]/components/therapy/TherapyModal.tsx",
                                    lineNumber: 99,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "text-sm text-gray-500 dark:text-gray-400 mt-1",
                                    children: therapy ? "Update service details" : "Create a new therapy service"
                                }, void 0, false, {
                                    fileName: "[project]/components/therapy/TherapyModal.tsx",
                                    lineNumber: 102,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/therapy/TherapyModal.tsx",
                            lineNumber: 98,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 text-gray-400 hover:text-gray-500 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-xl transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5"
                            }, void 0, false, {
                                fileName: "[project]/components/therapy/TherapyModal.tsx",
                                lineNumber: 110,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/therapy/TherapyModal.tsx",
                            lineNumber: 106,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/therapy/TherapyModal.tsx",
                    lineNumber: 97,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-6 overflow-y-auto",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "space-y-4",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                            children: "Therapy Name"
                                        }, void 0, false, {
                                            fileName: "[project]/components/therapy/TherapyModal.tsx",
                                            lineNumber: 120,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                            type: "text",
                                            value: name,
                                            onChange: (e)=>setName(e.target.value),
                                            className: "w-full px-4 py-2 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500",
                                            placeholder: "e.g. Occupational Therapy",
                                            required: true
                                        }, void 0, false, {
                                            fileName: "[project]/components/therapy/TherapyModal.tsx",
                                            lineNumber: 123,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/therapy/TherapyModal.tsx",
                                    lineNumber: 119,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                            children: "Description"
                                        }, void 0, false, {
                                            fileName: "[project]/components/therapy/TherapyModal.tsx",
                                            lineNumber: 135,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("textarea", {
                                            value: description,
                                            onChange: (e)=>setDescription(e.target.value),
                                            className: "w-full px-4 py-2 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all placeholder:text-gray-400 dark:placeholder:text-gray-500 min-h-[80px]",
                                            placeholder: "Brief description of the therapy..."
                                        }, void 0, false, {
                                            fileName: "[project]/components/therapy/TherapyModal.tsx",
                                            lineNumber: 138,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/therapy/TherapyModal.tsx",
                                    lineNumber: 134,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "grid grid-cols-2 gap-4",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                                    children: "Default Price (₹)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/therapy/TherapyModal.tsx",
                                                    lineNumber: 148,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: price,
                                                    onChange: (e)=>setPrice(e.target.value),
                                                    className: "w-full px-4 py-2 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all",
                                                    placeholder: "0.00",
                                                    min: "0",
                                                    step: "0.01"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/therapy/TherapyModal.tsx",
                                                    lineNumber: 151,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/therapy/TherapyModal.tsx",
                                            lineNumber: 147,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                                    className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                                    children: "Duration (Minutes)"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/therapy/TherapyModal.tsx",
                                                    lineNumber: 162,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                                    type: "number",
                                                    value: duration,
                                                    onChange: (e)=>setDuration(e.target.value),
                                                    className: "w-full px-4 py-2 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all",
                                                    placeholder: "45",
                                                    min: "5",
                                                    step: "5"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/therapy/TherapyModal.tsx",
                                                    lineNumber: 165,
                                                    columnNumber: 33
                                                }, this)
                                            ]
                                        }, void 0, true, {
                                            fileName: "[project]/components/therapy/TherapyModal.tsx",
                                            lineNumber: 161,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/therapy/TherapyModal.tsx",
                                    lineNumber: 146,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                            children: "Status"
                                        }, void 0, false, {
                                            fileName: "[project]/components/therapy/TherapyModal.tsx",
                                            lineNumber: 179,
                                            columnNumber: 29
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "relative",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                                value: status,
                                                onChange: (e)=>setStatus(e.target.value),
                                                className: "w-full px-4 py-2 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all appearance-none",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "ACTIVE",
                                                        children: "Active"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/therapy/TherapyModal.tsx",
                                                        lineNumber: 188,
                                                        columnNumber: 37
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                        value: "INACTIVE",
                                                        children: "Inactive"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/therapy/TherapyModal.tsx",
                                                        lineNumber: 189,
                                                        columnNumber: 37
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/therapy/TherapyModal.tsx",
                                                lineNumber: 183,
                                                columnNumber: 33
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/therapy/TherapyModal.tsx",
                                            lineNumber: 182,
                                            columnNumber: 29
                                        }, this)
                                    ]
                                }, void 0, true, {
                                    fileName: "[project]/components/therapy/TherapyModal.tsx",
                                    lineNumber: 178,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/therapy/TherapyModal.tsx",
                            lineNumber: 116,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "flex items-center gap-3 mt-8",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "flex-1 px-4 py-2 text-sm font-semibold text-gray-700 dark:text-gray-300 bg-gray-100 dark:bg-neutral-800 hover:bg-gray-200 dark:hover:bg-neutral-700 rounded-xl transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/therapy/TherapyModal.tsx",
                                    lineNumber: 198,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isPending,
                                    className: "flex-1 px-4 py-2 text-sm font-semibold text-white bg-blue-600 hover:bg-blue-700 rounded-xl shadow-lg shadow-blue-600/20 transition-all flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed",
                                    children: isPending ? "Saving..." : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["Fragment"], {
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$save$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Save$3e$__["Save"], {
                                                className: "w-4 h-4"
                                            }, void 0, false, {
                                                fileName: "[project]/components/therapy/TherapyModal.tsx",
                                                lineNumber: 214,
                                                columnNumber: 37
                                            }, this),
                                            "Save Therapy"
                                        ]
                                    }, void 0, true)
                                }, void 0, false, {
                                    fileName: "[project]/components/therapy/TherapyModal.tsx",
                                    lineNumber: 205,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/therapy/TherapyModal.tsx",
                            lineNumber: 197,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/therapy/TherapyModal.tsx",
                    lineNumber: 115,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/therapy/TherapyModal.tsx",
            lineNumber: 94,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/therapy/TherapyModal.tsx",
        lineNumber: 93,
        columnNumber: 9
    }, this), document.body);
}
_s(TherapyModal, "4ocp1Zf6VLgu8jzbXErYy6pG/Q0=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = TherapyModal;
var _c;
__turbopack_context__.k.register(_c, "TherapyModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/ConfirmModal.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConfirmModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-client] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react-dom/index.js [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
function ConfirmModal({ isOpen, onClose, onConfirm, title, description, confirmLabel = "Delete", cancelLabel = "Cancel", isPending = false }) {
    _s();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useEffect"])({
        "ConfirmModal.useEffect": ()=>{
            setMounted(true);
        }
    }["ConfirmModal.useEffect"], []);
    if (!mounted || !isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2d$dom$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-2xl w-full max-w-sm shadow-2xl animate-in zoom-in-95 duration-200 border border-gray-100 dark:border-neutral-800 flex flex-col overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600 dark:text-red-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
                                className: "w-6 h-6"
                            }, void 0, false, {
                                fileName: "[project]/components/ConfirmModal.tsx",
                                lineNumber: 41,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/ConfirmModal.tsx",
                            lineNumber: 40,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-gray-900 dark:text-white mb-2",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/components/ConfirmModal.tsx",
                            lineNumber: 43,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                            className: "text-gray-500 dark:text-gray-400 text-sm leading-relaxed",
                            children: description
                        }, void 0, false, {
                            fileName: "[project]/components/ConfirmModal.tsx",
                            lineNumber: 46,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ConfirmModal.tsx",
                    lineNumber: 39,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 p-6 pt-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            disabled: isPending,
                            className: "flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-gray-900 dark:text-white rounded-xl font-medium transition-colors disabled:opacity-50",
                            children: cancelLabel
                        }, void 0, false, {
                            fileName: "[project]/components/ConfirmModal.tsx",
                            lineNumber: 52,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onConfirm,
                            disabled: isPending,
                            className: "flex-1 px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-xl font-medium transition-colors disabled:opacity-50 shadow-lg shadow-red-500/20",
                            children: isPending ? "Processing..." : confirmLabel
                        }, void 0, false, {
                            fileName: "[project]/components/ConfirmModal.tsx",
                            lineNumber: 59,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/ConfirmModal.tsx",
                    lineNumber: 51,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/ConfirmModal.tsx",
            lineNumber: 38,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/ConfirmModal.tsx",
        lineNumber: 37,
        columnNumber: 9
    }, this), document.body);
}
_s(ConfirmModal, "LrrVfNW3d1raFE0BNzCTILYmIfo=");
_c = ConfirmModal;
var _c;
__turbopack_context__.k.register(_c, "ConfirmModal");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
"[project]/components/therapy/TherapyList.tsx [app-client] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>TherapyList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/jsx-dev-runtime.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/compiled/react/index.js [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-client] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-client] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-client] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-client] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/indian-rupee.js [app-client] (ecmascript) <export default as IndianRupee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$9e256c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:9e256c [app-client] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$therapy$2f$TherapyModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/therapy/TherapyModal.tsx [app-client] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ConfirmModal.tsx [app-client] (ecmascript)");
;
var _s = __turbopack_context__.k.signature();
"use client";
;
;
;
;
;
function TherapyList({ therapies, currentUserRole }) {
    _s();
    const [editingTherapy, setEditingTherapy] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isModalOpen, setIsModalOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"])();
    // Delete confirmation state
    const [deleteConfirmOpen, setDeleteConfirmOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(false);
    const [therapyToDelete, setTherapyToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useState"])(null);
    const handleDeleteClick = (id)=>{
        setTherapyToDelete(id);
        setDeleteConfirmOpen(true);
    };
    const onConfirmDelete = ()=>{
        if (!therapyToDelete) return;
        startTransition(async ()=>{
            await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$9e256c__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteTherapy"])(therapyToDelete);
            setDeleteConfirmOpen(false);
            setTherapyToDelete(null);
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass-card rounded-2xl overflow-hidden animate-fade-in animate-delay-100",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$therapy$2f$TherapyModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isModalOpen,
                onClose: ()=>setIsModalOpen(false),
                therapy: editingTherapy
            }, void 0, false, {
                fileName: "[project]/components/therapy/TherapyList.tsx",
                lineNumber: 49,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConfirmModal$2e$tsx__$5b$app$2d$client$5d$__$28$ecmascript$29$__["default"], {
                isOpen: deleteConfirmOpen,
                onClose: ()=>{
                    setDeleteConfirmOpen(false);
                    setTherapyToDelete(null);
                },
                onConfirm: onConfirmDelete,
                title: "Delete Service",
                description: "Are you sure you want to delete this therapy service? This might affect historical data if not handled carefully.",
                confirmLabel: "Delete",
                isPending: isPending
            }, void 0, false, {
                fileName: "[project]/components/therapy/TherapyList.tsx",
                lineNumber: 55,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "p-6 border-b border-gray-100 dark:border-neutral-800 flex justify-between items-center bg-white dark:bg-neutral-900",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                        className: "text-lg font-semibold text-gray-900 dark:text-white",
                        children: "Therapy Services"
                    }, void 0, false, {
                        fileName: "[project]/components/therapy/TherapyList.tsx",
                        lineNumber: 69,
                        columnNumber: 17
                    }, this),
                    currentUserRole === "ADMIN" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>{
                            setEditingTherapy(null);
                            setIsModalOpen(true);
                        },
                        className: "flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors shadow-sm",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/components/therapy/TherapyList.tsx",
                                lineNumber: 78,
                                columnNumber: 25
                            }, this),
                            "Add Service"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/therapy/TherapyList.tsx",
                        lineNumber: 71,
                        columnNumber: 21
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/therapy/TherapyList.tsx",
                lineNumber: 68,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "overflow-x-auto",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("table", {
                    className: "w-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("thead", {
                            className: "bg-gray-50/50 dark:bg-neutral-800/50 border-b border-gray-100 dark:border-neutral-800",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider",
                                        children: "Service Name"
                                    }, void 0, false, {
                                        fileName: "[project]/components/therapy/TherapyList.tsx",
                                        lineNumber: 88,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider",
                                        children: "Duration"
                                    }, void 0, false, {
                                        fileName: "[project]/components/therapy/TherapyList.tsx",
                                        lineNumber: 89,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider",
                                        children: "Default Charge"
                                    }, void 0, false, {
                                        fileName: "[project]/components/therapy/TherapyList.tsx",
                                        lineNumber: 90,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-left py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider",
                                        children: "Status"
                                    }, void 0, false, {
                                        fileName: "[project]/components/therapy/TherapyList.tsx",
                                        lineNumber: 91,
                                        columnNumber: 29
                                    }, this),
                                    currentUserRole === "ADMIN" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("th", {
                                        className: "text-right py-4 px-6 text-xs font-semibold text-gray-500 uppercase tracking-wider",
                                        children: "Actions"
                                    }, void 0, false, {
                                        fileName: "[project]/components/therapy/TherapyList.tsx",
                                        lineNumber: 93,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/therapy/TherapyList.tsx",
                                lineNumber: 87,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/therapy/TherapyList.tsx",
                            lineNumber: 86,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tbody", {
                            className: "divide-y divide-gray-100 dark:divide-neutral-800",
                            children: therapies.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                    colSpan: 5,
                                    className: "py-8 text-center text-gray-500",
                                    children: "No therapy services defined."
                                }, void 0, false, {
                                    fileName: "[project]/components/therapy/TherapyList.tsx",
                                    lineNumber: 100,
                                    columnNumber: 33
                                }, this)
                            }, void 0, false, {
                                fileName: "[project]/components/therapy/TherapyList.tsx",
                                lineNumber: 99,
                                columnNumber: 29
                            }, this) : therapies.map((therapy)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("tr", {
                                    className: "hover:bg-gray-50/50 dark:hover:bg-neutral-800/30 transition-colors",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-4 px-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "font-medium text-gray-900 dark:text-white",
                                                        children: therapy.name
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/therapy/TherapyList.tsx",
                                                        lineNumber: 107,
                                                        columnNumber: 45
                                                    }, this),
                                                    therapy.description && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                                        className: "text-xs text-gray-500 truncate max-w-[200px]",
                                                        children: therapy.description
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/therapy/TherapyList.tsx",
                                                        lineNumber: 109,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/therapy/TherapyList.tsx",
                                                lineNumber: 106,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/therapy/TherapyList.tsx",
                                            lineNumber: 105,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-4 px-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center text-gray-600 dark:text-gray-400 text-sm",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"], {
                                                        className: "w-3 h-3 mr-1.5"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/therapy/TherapyList.tsx",
                                                        lineNumber: 115,
                                                        columnNumber: 45
                                                    }, this),
                                                    therapy.defaultDurationMinutes,
                                                    " mins"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/therapy/TherapyList.tsx",
                                                lineNumber: 114,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/therapy/TherapyList.tsx",
                                            lineNumber: 113,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-4 px-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center text-gray-900 dark:text-white font-medium",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__["IndianRupee"], {
                                                        className: "w-3 h-3 mr-1"
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/therapy/TherapyList.tsx",
                                                        lineNumber: 121,
                                                        columnNumber: 45
                                                    }, this),
                                                    therapy.chargePerSession || "0.00"
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/therapy/TherapyList.tsx",
                                                lineNumber: 120,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/therapy/TherapyList.tsx",
                                            lineNumber: 119,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-4 px-6",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: `inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${therapy.status === 'ACTIVE' ? 'bg-green-100 text-green-800 dark:bg-green-900/30 dark:text-green-400' : 'bg-gray-100 text-gray-800 dark:bg-gray-800 dark:text-gray-400'}`,
                                                children: therapy.status === 'ACTIVE' ? 'Active' : 'Inactive'
                                            }, void 0, false, {
                                                fileName: "[project]/components/therapy/TherapyList.tsx",
                                                lineNumber: 126,
                                                columnNumber: 41
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/therapy/TherapyList.tsx",
                                            lineNumber: 125,
                                            columnNumber: 37
                                        }, this),
                                        currentUserRole === "ADMIN" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("td", {
                                            className: "py-4 px-6 text-right",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "flex items-center justify-end gap-2",
                                                children: [
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>{
                                                            setEditingTherapy(therapy);
                                                            setIsModalOpen(true);
                                                        },
                                                        className: "p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-lg text-gray-500 hover:text-blue-600 transition-colors",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/therapy/TherapyList.tsx",
                                                            lineNumber: 143,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/therapy/TherapyList.tsx",
                                                        lineNumber: 136,
                                                        columnNumber: 49
                                                    }, this),
                                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                                        onClick: ()=>handleDeleteClick(therapy.id),
                                                        disabled: isPending,
                                                        className: "p-2 hover:bg-red-50 dark:hover:bg-red-900/20 rounded-lg text-gray-500 hover:text-red-600 transition-colors disabled:opacity-50",
                                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                                            className: "w-4 h-4"
                                                        }, void 0, false, {
                                                            fileName: "[project]/components/therapy/TherapyList.tsx",
                                                            lineNumber: 150,
                                                            columnNumber: 53
                                                        }, this)
                                                    }, void 0, false, {
                                                        fileName: "[project]/components/therapy/TherapyList.tsx",
                                                        lineNumber: 145,
                                                        columnNumber: 49
                                                    }, this)
                                                ]
                                            }, void 0, true, {
                                                fileName: "[project]/components/therapy/TherapyList.tsx",
                                                lineNumber: 135,
                                                columnNumber: 45
                                            }, this)
                                        }, void 0, false, {
                                            fileName: "[project]/components/therapy/TherapyList.tsx",
                                            lineNumber: 134,
                                            columnNumber: 41
                                        }, this)
                                    ]
                                }, therapy.id, true, {
                                    fileName: "[project]/components/therapy/TherapyList.tsx",
                                    lineNumber: 104,
                                    columnNumber: 33
                                }, this))
                        }, void 0, false, {
                            fileName: "[project]/components/therapy/TherapyList.tsx",
                            lineNumber: 97,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/therapy/TherapyList.tsx",
                    lineNumber: 85,
                    columnNumber: 17
                }, this)
            }, void 0, false, {
                fileName: "[project]/components/therapy/TherapyList.tsx",
                lineNumber: 84,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/therapy/TherapyList.tsx",
        lineNumber: 48,
        columnNumber: 9
    }, this);
}
_s(TherapyList, "HOTvZbCYCfK8A9NdPeeY2KUTFCA=", false, function() {
    return [
        __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$compiled$2f$react$2f$index$2e$js__$5b$app$2d$client$5d$__$28$ecmascript$29$__["useTransition"]
    ];
});
_c = TherapyList;
var _c;
__turbopack_context__.k.register(_c, "TherapyList");
if (typeof globalThis.$RefreshHelpers$ === 'object' && globalThis.$RefreshHelpers !== null) {
    __turbopack_context__.k.registerExports(__turbopack_context__.m, globalThis.$RefreshHelpers$);
}
}),
]);

//# sourceMappingURL=_b87b4384._.js.map