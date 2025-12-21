module.exports = [
"[externals]/next/dist/server/app-render/action-async-storage.external.js [external] (next/dist/server/app-render/action-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/action-async-storage.external.js", () => require("next/dist/server/app-render/action-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-unit-async-storage.external.js [external] (next/dist/server/app-render/work-unit-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-unit-async-storage.external.js", () => require("next/dist/server/app-render/work-unit-async-storage.external.js"));

module.exports = mod;
}),
"[externals]/next/dist/server/app-render/work-async-storage.external.js [external] (next/dist/server/app-render/work-async-storage.external.js, cjs)", ((__turbopack_context__, module, exports) => {

const mod = __turbopack_context__.x("next/dist/server/app-render/work-async-storage.external.js", () => require("next/dist/server/app-render/work-async-storage.external.js"));

module.exports = mod;
}),
"[project]/lib/utils.ts [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "cn",
    ()=>cn,
    "formatCurrency",
    ()=>formatCurrency
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/clsx/dist/clsx.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/tailwind-merge/dist/bundle-mjs.mjs [app-ssr] (ecmascript)");
;
;
function cn(...inputs) {
    return (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$tailwind$2d$merge$2f$dist$2f$bundle$2d$mjs$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["twMerge"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$clsx$2f$dist$2f$clsx$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["clsx"])(inputs));
}
const formatCurrency = (amount)=>{
    return new Intl.NumberFormat("en-IN", {
        style: "currency",
        currency: "INR"
    }).format(amount);
};
}),
"[project]/lib/data:13e9fd [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"00b8854e641a2918644c790895a996121032778623":"signOutAction"},"lib/actions.ts",""] */ __turbopack_context__.s([
    "signOutAction",
    ()=>signOutAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var signOutAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("00b8854e641a2918644c790895a996121032778623", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "signOutAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIkAvYXV0aFwiO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYlwiO1xuaW1wb3J0IHsgdXNlcnMsIGV4cGVuc2VzLCBjYXRlZ29yaWVzLCBjaGlsZHJlbiwgdGhlcmFwaWVzLCBzZXNzaW9ucyB9IGZyb20gXCIuL2RiL3NjaGVtYVwiOyAvLyBSZW1vdmVkIGZhbWlsaWVzLCBzdGFmZnMsIGJ1ZGdldHNcblxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IGVxLCBkZXNjLCBhbmQgfSBmcm9tIFwiZHJpenpsZS1vcm1cIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRoZW50aWNhdGUoXG4gICAgcHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhLFxuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuICAgICAgICBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7IC4uLmNyZWRlbnRpYWxzLCByZWRpcmVjdFRvOiBcIi9kYXNoYm9hcmRcIiB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJDcmVkZW50aWFsc1NpZ25pblwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNyZWRlbnRpYWxzLlwiO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXRBY3Rpb24oKSB7XG4gICAgYXdhaXQgc2lnbk91dCh7IHJlZGlyZWN0VG86IFwiL1wiIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIocHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcblxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFuYW1lKSByZXR1cm4gXCJNaXNzaW5nIGZpZWxkc1wiO1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4gXCJVc2VyIGFscmVhZHkgZXhpc3RzXCI7XG5cbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG5cbiAgICAvLyBEZWZhdWx0IHJvbGU6IFBBUkVOVD8gT3IgQURNSU4gZm9yIGZpcnN0IHVzZXI/IFxuICAgIC8vIExvZ2ljOiBJZiBubyB1c2VycyBleGlzdCwgZmlyc3QgaXMgQURNSU4uIE90aGVyd2lzZSBQQVJFTlQuXG4gICAgLy8gRm9yIG5vdywgbGV0J3MgaGFyZGNvZGUgUEFSRU5UIHVubGVzcyBleHBsaWNpdGx5IHNldCBlbHNld2hlcmUgdXN1YWxseS5cbiAgICAvLyBCdXQgZm9yIHRoaXMgXCJSZXZhbXBcIiBtYXliZSB3ZSBhc3N1bWUgQWRtaW4gY3JlYXRlcyB1c2Vycz9cbiAgICAvLyBJZiB0aGlzIGlzIHB1YmxpYyByZWdpc3RyYXRpb24sIFBBUkVOVCBpcyBzYWZlci5cblxuICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IGRiLnNlbGVjdCgpLmZyb20odXNlcnMpLnRoZW4ocmVzID0+IHJlcy5sZW5ndGgpO1xuICAgIGNvbnN0IHJvbGUgPSB1c2VyQ291bnQgPT09IDAgPyBcIkFETUlOXCIgOiBcIlBBUkVOVFwiO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZTogcm9sZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFwiU3VjY2Vzc1wiO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgICAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICAgICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgICAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKSBhcyBzdHJpbmc7XG4gICAgICAgIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoXCJyb2xlXCIpIGFzIFwiQURNSU5cIiB8IFwiVEhFUkFQSVNUXCIgfCBcIlBBUkVOVFwiO1xuICAgICAgICBjb25zdCBxdWFsaWZpY2F0aW9uID0gKGZvcm1EYXRhLmdldChcInF1YWxpZmljYXRpb25cIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgICAgIGlmICghbmFtZSB8fCAhZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFyb2xlKSByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgZmllbGRzXCIgfTtcblxuICAgICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBkYi5xdWVyeS51c2Vycy5maW5kRmlyc3Qoe1xuICAgICAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChleGlzdGluZ1VzZXIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVXNlciBhbHJlYWR5IGV4aXN0c1wiIH07XG5cbiAgICAgICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuXG4gICAgICAgIGF3YWl0IGRiLmluc2VydCh1c2VycykudmFsdWVzKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkSGFzaDogaGFzaGVkUGFzc3dvcmQsXG4gICAgICAgICAgICByb2xlLFxuICAgICAgICAgICAgcXVhbGlmaWNhdGlvbixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVXNlciBjcmVhdGVkXCIgfTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDcmVhdGUgVXNlciBFcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGNyZWF0ZSB1c2VyXCIgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRFeHBlbnNlQWN0aW9uKHByZXZTdGF0ZTogYW55LCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuICAgIC8vIE9ubHkgQWRtaW4gY2FuIGFkZCBleHBlbnNlcz8gT3IgVGhlcmFwaXN0P1xuICAgIC8vIExldCdzIGFsbG93IEFkbWluIGFuZCBtYXliZSBUaGVyYXBpc3QuXG4gICAgaWYgKHNlc3Npb24udXNlci5yb2xlID09PSBcIlBBUkVOVFwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cblxuICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlRmxvYXQoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpIGFzIHN0cmluZyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSAoZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikgYXMgc3RyaW5nKSB8fCBcIlwiO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0eXBlID0gKGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgXCJFWFBFTlNFXCIgfCBcIklOQ09NRVwiIHwgXCJEVUVcIikgfHwgXCJFWFBFTlNFXCI7XG4gICAgY29uc3QgY2hpbGRJZCA9IChmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICAvLyBzdGFmZklkIHJlbW92ZWQuIHR5cGUgaXMgZW5vdWdoPyBPciBtYXliZSByZWNvcmRlZEJ5P1xuXG5cbiAgICBpZiAoIWFtb3VudCB8fCAhZGF0ZVN0cikge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgZmllbGRzXCIgfTtcbiAgICB9XG5cbiAgICBpZiAoIWZvcm1EYXRhLmdldChcImNhdGVnb3J5SWRcIikpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYXRlZ29yeSBpcyByZXF1aXJlZFwiIH07XG4gICAgfVxuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KGV4cGVuc2VzKS52YWx1ZXMoe1xuICAgICAgICAvLyB1c2VySWQ6IHNlc3Npb24udXNlci5pZCwgLy8gUmVtb3ZlZCB1c2VySWQgY29uc3RyYWludCBmcm9tIHNjaGVtYT8gTm8sIGtlZXAgaXQgYXMgJ3JlY29yZGVkIGJ5JyBpZiBuZWVkZWQ/IFxuICAgICAgICAvLyBTY2hlbWEgZGVmaW5pdGlvbjogXCJ1c2VySWRcIiByZW1vdmVkPyBMZXQncyBjaGVjayBzY2hlbWEudHMgY29udGVudCBJIHdyb3RlLlxuICAgICAgICAvLyBJIGtlcHQgJ2V4cGVuc2UnIHRhYmxlIGJ1dCByZWZhY3RvcmluZy5cbiAgICAgICAgLy8gV2FpdCwgSSBjaGFuZ2VkICd1c2VySWQnIHRvICdyZWNvcmRlZEJ5JyAob3B0aW9uYWwpIGluIG15IHRob3VnaHQsIGJ1dCBsZXQncyBjaGVjayB3aGF0IEkgYWN0dWFsbHkgd3JvdGUuXG4gICAgICAgIC8vIEkgd3JvdGU6IHJlY29yZGVkQnk6IHV1aWQoXCJyZWNvcmRlZF9ieVwiKS5yZWZlcmVuY2VzKCgpID0+IHVzZXJzLmlkKSwgLy8gQWRtaW4gd2hvIHJlY29yZGVkIGl0XG5cbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGFtb3VudDogYW1vdW50LnRvU3RyaW5nKCksXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGVTdHIpLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBjYXRlZ29yeUlkOiAoZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlJZFwiKSBhcyBzdHJpbmcpLFxuICAgICAgICBjaGlsZElkOiBjaGlsZElkLFxuICAgICAgICByZWNvcmRlZEJ5OiBzZXNzaW9uLnVzZXIuaWRcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRyYW5zYWN0aW9uIGFkZGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1hcmtEdWVBc1BhaWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgZXhwZW5zZSA9IGF3YWl0IGRiLnF1ZXJ5LmV4cGVuc2VzLmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiBlcShleHBlbnNlcy5pZCwgaWQpXG4gICAgfSk7XG5cbiAgICBpZiAoIWV4cGVuc2UpIHJldHVybiB7IG1lc3NhZ2U6IFwiUmVjb3JkIG5vdCBmb3VuZFwiIH07XG5cbiAgICBhd2FpdCBkYi51cGRhdGUoZXhwZW5zZXMpLnNldCh7XG4gICAgICAgIHR5cGU6IFwiSU5DT01FXCJcbiAgICB9KS53aGVyZShlcShleHBlbnNlcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlBheW1lbnQgbWFya2VkIGFzIHBhaWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVXNlcih1c2VySWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgaWYgKHVzZXJJZCA9PT0gc2Vzc2lvbi51c2VyLmlkKSByZXR1cm4geyBtZXNzYWdlOiBcIkNhbm5vdCBkZWxldGUgeW91cnNlbGZcIiB9O1xuXG4gICAgYXdhaXQgZGIuZGVsZXRlKHVzZXJzKS53aGVyZShlcSh1c2Vycy5pZCwgdXNlcklkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdXNlcnNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJVc2VyIGRlbGV0ZWRcIiB9O1xufVxuXG5cbi8vIC0tLSBUaGVyYXB5IEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGhlcmFweShmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmcpIHx8IFwiXCI7XG4gICAgY29uc3QgcHJpY2UgPSAoZm9ybURhdGEuZ2V0KFwicHJpY2VcIikgYXMgc3RyaW5nKSB8fCBcIjBcIjtcbiAgICBjb25zdCBzdGF0dXMgPSAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIFwiQUNUSVZFXCIgfCBcIklOQUNUSVZFXCIpIHx8IFwiQUNUSVZFXCI7XG4gICAgY29uc3QgZHVyYXRpb24gPSAoZm9ybURhdGEuZ2V0KFwiZGVmYXVsdER1cmF0aW9uTWludXRlc1wiKSBhcyBzdHJpbmcpIHx8IFwiNDVcIjtcblxuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydCh0aGVyYXBpZXMpLnZhbHVlcyh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBjaGFyZ2VQZXJTZXNzaW9uOiBwcmljZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkZWZhdWx0RHVyYXRpb25NaW51dGVzOiBwYXJzZUludChkdXJhdGlvbiksXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi90aGVyYXBpZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJUaGVyYXB5IHNlcnZpY2UgY3JlYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVUaGVyYXB5KGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBwcmljZSA9IChmb3JtRGF0YS5nZXQoXCJwcmljZVwiKSBhcyBzdHJpbmcpIHx8IFwiMFwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBQ1RJVkVcIiB8IFwiSU5BQ1RJVkVcIikgfHwgXCJBQ1RJVkVcIjtcbiAgICBjb25zdCBkdXJhdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZWZhdWx0RHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZykgfHwgXCI0NVwiO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKHRoZXJhcGllcykuc2V0KHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNoYXJnZVBlclNlc3Npb246IHByaWNlLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRlZmF1bHREdXJhdGlvbk1pbnV0ZXM6IHBhcnNlSW50KGR1cmF0aW9uKSxcbiAgICB9KS53aGVyZShlcSh0aGVyYXBpZXMuaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi90aGVyYXBpZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJUaGVyYXB5IHNlcnZpY2UgdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUaGVyYXB5KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRiLmRlbGV0ZSh0aGVyYXBpZXMpLndoZXJlKGVxKHRoZXJhcGllcy5pZCwgaWQpKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvdGhlcmFwaWVzXCIpO1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSBkZWxldGVkXCIgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkZhaWxlZCB0byBkZWxldGUgdGhlcmFweS4gSXQgbWlnaHQgYmUgbGlua2VkIHRvIGV4aXN0aW5nIHNlc3Npb25zLlwiIH07XG4gICAgfVxufVxuXG5cbi8vIC0tLSBTZXNzaW9uIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlU2Vzc2lvbihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIC8vIEFkbWluIG9yIFRoZXJhcGlzdCBjYW4gY3JlYXRlIHNlc3Npb25zXG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgPT09IFwiUEFSRU5UXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IGNoaWxkSWQgPSBmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXBpc3RJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcGlzdElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXB5SWQgPSBmb3JtRGF0YS5nZXQoXCJ0aGVyYXB5SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBkdXJhdGlvbiA9IGZvcm1EYXRhLmdldChcImR1cmF0aW9uTWludXRlc1wiKSBhcyBzdHJpbmcgfHwgXCI0NVwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJTQ0hFRFVMRURcIiB8IFwiQ09NUExFVEVEXCIgfCBcIkNBTkNFTExFRFwiIHwgXCJNSVNTRURcIikgfHwgXCJTQ0hFRFVMRURcIjtcblxuICAgIGlmICghY2hpbGRJZCB8fCAhdGhlcmFwaXN0SWQgfHwgIXRoZXJhcHlJZCB8fCAhZGF0ZVN0cikge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgcmVxdWlyZWQgZmllbGRzXCIgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoc2Vzc2lvbnMpLnZhbHVlcyh7XG4gICAgICAgIGNoaWxkSWQsXG4gICAgICAgIHRoZXJhcGlzdElkLFxuICAgICAgICB0aGVyYXB5SWQsXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGVTdHIpLFxuICAgICAgICBkdXJhdGlvbk1pbnV0ZXM6IHBhcnNlSW50KGR1cmF0aW9uKSxcbiAgICAgICAgc3RhdHVzLFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2NoZWR1bGVcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJTZXNzaW9uIHNjaGVkdWxlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTZXNzaW9uKGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgPT09IFwiUEFSRU5UXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IGNoaWxkSWQgPSBmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXBpc3RJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcGlzdElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXB5SWQgPSBmb3JtRGF0YS5nZXQoXCJ0aGVyYXB5SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBkdXJhdGlvbiA9IGZvcm1EYXRhLmdldChcImR1cmF0aW9uTWludXRlc1wiKSBhcyBzdHJpbmcgfHwgXCI0NVwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJTQ0hFRFVMRURcIiB8IFwiQ09NUExFVEVEXCIgfCBcIkNBTkNFTExFRFwiIHwgXCJNSVNTRURcIikgfHwgXCJTQ0hFRFVMRURcIjtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShzZXNzaW9ucykuc2V0KHtcbiAgICAgICAgY2hpbGRJZCxcbiAgICAgICAgdGhlcmFwaXN0SWQsXG4gICAgICAgIHRoZXJhcHlJZCxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGR1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgICAgICBzdGF0dXMsXG4gICAgfSkud2hlcmUoZXEoc2Vzc2lvbnMuaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVTZXNzaW9uKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmRlbGV0ZShzZXNzaW9ucykud2hlcmUoZXEoc2Vzc2lvbnMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2NoZWR1bGVcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJTZXNzaW9uIGRlbGV0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlcih1c2VySWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiICYmIHNlc3Npb24/LnVzZXI/LmlkICE9PSB1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCByb2xlID0gZm9ybURhdGEuZ2V0KFwicm9sZVwiKSBhcyBcIkFETUlOXCIgfCBcIlRIRVJBUElTVFwiIHwgXCJQQVJFTlRcIjtcbiAgICBjb25zdCBxdWFsaWZpY2F0aW9uID0gKGZvcm1EYXRhLmdldChcInF1YWxpZmljYXRpb25cIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwicGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCkgcmV0dXJuIHsgbWVzc2FnZTogXCJNaXNzaW5nIGZpZWxkc1wiIH07XG5cbiAgICBjb25zdCB1cGRhdGVEYXRhOiBhbnkgPSB7IG5hbWUsIGVtYWlsLCBxdWFsaWZpY2F0aW9uIH07XG4gICAgaWYgKHNlc3Npb24udXNlci5yb2xlID09PSBcIkFETUlOXCIpIHtcbiAgICAgICAgaWYgKHJvbGUpIHVwZGF0ZURhdGEucm9sZSA9IHJvbGU7XG4gICAgICAgIGlmIChwYXNzd29yZCAmJiBwYXNzd29yZC50cmltKCkgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHVwZGF0ZURhdGEucGFzc3dvcmRIYXNoID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGF3YWl0IGRiLnVwZGF0ZSh1c2VycylcbiAgICAgICAgLnNldCh1cGRhdGVEYXRhKVxuICAgICAgICAud2hlcmUoZXEodXNlcnMuaWQsIHVzZXJJZCkpO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJVc2VyIHVwZGF0ZWRcIiB9O1xufVxuXG4vLyAtLS0gQ2F0ZWdvcnkgQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yeShmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoY2F0ZWdvcmllcyBhcyBhbnkpLnZhbHVlcyh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIC8vIGZhbWlseUlkIHJlbW92ZWRcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2F0ZWdvcnkgY3JlYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXRlZ29yeShpZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi51cGRhdGUoY2F0ZWdvcmllcykuc2V0KHsgbmFtZSB9KS53aGVyZShlcShjYXRlZ29yaWVzLmlkLCBpZCkpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IHVwZGF0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2F0ZWdvcnkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGIuZGVsZXRlKGNhdGVnb3JpZXMpLndoZXJlKGVxKGNhdGVnb3JpZXMuaWQsIGlkKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhbm5vdCBkZWxldGUgY2F0ZWdvcnkgaW4gdXNlXCIgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZXhwZW5zZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYXRlZ29yeSBkZWxldGVkXCIgfTtcbn1cblxuLy8gLS0tIEV4cGVuc2UgQWN0aW9ucyAtLS0gKFVwZGF0ZS9EZWxldGUpXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRXhwZW5zZShpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICAvLyBQYXJlbnQgY2FuJ3QgZGVsZXRlPyBZZXMuXG5cbiAgICBhd2FpdCBkYi5kZWxldGUoZXhwZW5zZXMpLndoZXJlKGVxKGV4cGVuc2VzLmlkLCBpZCkpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkV4cGVuc2UgZGVsZXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFeHBlbnNlKGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgYW1vdW50ID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikgYXMgc3RyaW5nKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmcpIHx8IFwiXCI7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGNhdGVnb3J5SWQgPSBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeUlkXCIpIGFzIHN0cmluZztcblxuICAgIGlmICghYW1vdW50IHx8ICFkYXRlU3RyIHx8ICFjYXRlZ29yeUlkKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGF3YWl0IGRiLnVwZGF0ZShleHBlbnNlcykuc2V0KHtcbiAgICAgICAgYW1vdW50OiBhbW91bnQudG9TdHJpbmcoKSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGVTdHIpLFxuICAgICAgICBjYXRlZ29yeUlkOiBjYXRlZ29yeUlkLFxuICAgICAgICBjaGlsZElkOiAoZm9ybURhdGEuZ2V0KFwiY2hpbGRJZFwiKSBhcyBzdHJpbmcpIHx8IG51bGwsXG4gICAgICAgIHR5cGU6IChmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpIGFzIFwiRVhQRU5TRVwiIHwgXCJJTkNPTUVcIiB8IFwiRFVFXCIpIHx8IFwiRVhQRU5TRVwiLFxuXG4gICAgfSkud2hlcmUoZXEoZXhwZW5zZXMuaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZXhwZW5zZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJUcmFuc2FjdGlvbiB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVBhc3N3b3JkKHByZXZTdGF0ZTogYW55LCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHJldHVybiBcIlVuYXV0aG9yaXplZFwiO1xuXG4gICAgY29uc3QgY3VycmVudFBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwiY3VycmVudFBhc3N3b3JkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBuZXdQYXNzd29yZCA9IGZvcm1EYXRhLmdldChcIm5ld1Bhc3N3b3JkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBjb25maXJtUGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJjb25maXJtUGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuXG4gICAgaWYgKCFjdXJyZW50UGFzc3dvcmQgfHwgIW5ld1Bhc3N3b3JkIHx8ICFjb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIFwiQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWRcIjtcbiAgICB9XG5cbiAgICBpZiAobmV3UGFzc3dvcmQgIT09IGNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gXCJOZXcgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiO1xuICAgIH1cblxuICAgIGlmIChuZXdQYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgICAgIHJldHVybiBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzXCI7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnF1ZXJ5LnVzZXJzLmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiBlcSh1c2Vycy5pZCwgc2Vzc2lvbi51c2VyLmlkKSxcbiAgICB9KTtcblxuICAgIGlmICghdXNlcikgcmV0dXJuIFwiVXNlciBub3QgZm91bmRcIjtcblxuICAgIGNvbnN0IGlzTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShjdXJyZW50UGFzc3dvcmQsIHVzZXIucGFzc3dvcmRIYXNoKTtcbiAgICBpZiAoIWlzTWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIFwiSW5jb3JyZWN0IGN1cnJlbnQgcGFzc3dvcmRcIjtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKG5ld1Bhc3N3b3JkLCAxMCk7XG5cbiAgICBhd2FpdCBkYi51cGRhdGUodXNlcnMpXG4gICAgICAgIC5zZXQoeyBwYXNzd29yZEhhc2g6IGhhc2hlZFBhc3N3b3JkIH0pXG4gICAgICAgIC53aGVyZShlcSh1c2Vycy5pZCwgc2Vzc2lvbi51c2VyLmlkKSk7XG5cbiAgICByZXR1cm4gXCJTdWNjZXNzXCI7XG59XG5cbi8vIC0tLSBDaGlsZCBBY3Rpb25zIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNoaWxkKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBQ1RJVkVcIiB8IFwiSU5BQ1RJVkVcIikgfHwgXCJBQ1RJVkVcIjtcbiAgICBjb25zdCBkb2IgPSAoZm9ybURhdGEuZ2V0KFwiZG9iXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBnZW5kZXIgPSAoZm9ybURhdGEuZ2V0KFwiZ2VuZGVyXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBkaWFnbm9zaXMgPSAoZm9ybURhdGEuZ2V0KFwiZGlhZ25vc2lzXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBwYXJlbnRJZCA9IChmb3JtRGF0YS5nZXQoXCJwYXJlbnRJZFwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG5cbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoY2hpbGRyZW4pLnZhbHVlcyh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZG9iLFxuICAgICAgICBnZW5kZXIsXG4gICAgICAgIGRpYWdub3NpcyxcbiAgICAgICAgcGFyZW50SWRcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2NoaWxkcmVuc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNoaWxkIGNyZWF0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2hpbGQoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGRvYiA9IChmb3JtRGF0YS5nZXQoXCJkb2JcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGdlbmRlciA9IChmb3JtRGF0YS5nZXQoXCJnZW5kZXJcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGRpYWdub3NpcyA9IChmb3JtRGF0YS5nZXQoXCJkaWFnbm9zaXNcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHBhcmVudElkID0gKGZvcm1EYXRhLmdldChcInBhcmVudElkXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcblxuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShjaGlsZHJlbikuc2V0KHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkb2IsXG4gICAgICAgIGdlbmRlcixcbiAgICAgICAgZGlhZ25vc2lzLFxuICAgICAgICBwYXJlbnRJZFxuICAgIH0pLndoZXJlKGVxKGNoaWxkcmVuLmlkLCBpZCkpO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvY2hpbGRyZW5zXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2hpbGQgdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDaGlsZChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkYi5kZWxldGUoY2hpbGRyZW4pLndoZXJlKGVxKGNoaWxkcmVuLmlkLCBpZCkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYW5ub3QgZGVsZXRlIGNoaWxkIGluIHVzZVwiIH07XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDaGlsZCBkZWxldGVkXCIgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoicVJBZ0NzQiJ9
}),
"[project]/components/UserSwitcher.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>UserSwitcher
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevron-down.js [app-ssr] (ecmascript) <export default as ChevronDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/user.js [app-ssr] (ecmascript) <export default as User>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/log-out.js [app-ssr] (ecmascript) <export default as LogOut>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$13e9fd__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:13e9fd [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function UserSwitcher() {
    const { currentUser, setCurrentUser, users } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useExpenses"])();
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const router = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRouter"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "relative",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                onClick: ()=>setIsOpen(!isOpen),
                className: "flex items-center w-full p-3 bg-white dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl hover:shadow-md transition-all duration-200",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "ml-3 text-left flex-1",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-xs text-gray-500 font-medium uppercase tracking-wider",
                                children: "Current User"
                            }, void 0, false, {
                                fileName: "[project]/components/UserSwitcher.tsx",
                                lineNumber: 28,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevron$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronDown$3e$__["ChevronDown"], {
                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-4 h-4 text-gray-400 transition-transform", isOpen && "rotate-180")
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
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute bottom-full left-0 right-0 mb-2 bg-white dark:bg-neutral-800 rounded-xl shadow-xl border border-gray-100 dark:border-neutral-700 z-50 overflow-hidden animate-in fade-in zoom-in-95 duration-200",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-1 border-t border-gray-100 dark:border-neutral-700 mt-1 space-y-1",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>{
                                router.push('/profile');
                                setIsOpen(false);
                            },
                            className: "flex items-center w-full p-2 rounded-lg text-sm text-gray-700 dark:text-gray-300 hover:bg-gray-50 dark:hover:bg-neutral-700 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$user$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__User$3e$__["User"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: ()=>(0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$13e9fd__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["signOutAction"])(),
                            className: "flex items-center w-full p-2 rounded-lg text-sm text-red-600 hover:bg-red-50 dark:hover:bg-red-900/20 transition-colors",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$log$2d$out$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LogOut$3e$__["LogOut"], {
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
}),
"[project]/components/Sidebar.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>Sidebar
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/navigation.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/layout-dashboard.js [app-ssr] (ecmascript) <export default as LayoutDashboard>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/indian-rupee.js [app-ssr] (ecmascript) <export default as IndianRupee>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tags$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tags.js [app-ssr] (ecmascript) <export default as Tags>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/users.js [app-ssr] (ecmascript) <export default as Users>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$baby$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Baby$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/baby.js [app-ssr] (ecmascript) <export default as Baby>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/clock.js [app-ssr] (ecmascript) <export default as Clock>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/heart.js [app-ssr] (ecmascript) <export default as Heart>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/calendar.js [app-ssr] (ecmascript) <export default as Calendar>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/utils.ts [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserSwitcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/UserSwitcher.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/client/app-dir/link.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function Sidebar({ isOpen, onClose, onAddExpense, role = "ADMIN" }) {
    const pathname = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$navigation$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["usePathname"])();
    const allNavItems = [
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$layout$2d$dashboard$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__LayoutDashboard$3e$__["LayoutDashboard"],
            label: "Dashboard",
            href: "/dashboard",
            roles: [
                "ADMIN",
                "THERAPIST",
                "PARENT"
            ]
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$calendar$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Calendar$3e$__["Calendar"],
            label: "Schedule",
            href: "/schedule",
            roles: [
                "ADMIN",
                "THERAPIST",
                "PARENT"
            ]
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$indian$2d$rupee$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__IndianRupee$3e$__["IndianRupee"],
            label: "All Expenses",
            href: "/expenses",
            roles: [
                "ADMIN"
            ]
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$baby$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Baby$3e$__["Baby"],
            label: "Childrens",
            href: "/childrens",
            roles: [
                "ADMIN",
                "THERAPIST",
                "PARENT"
            ]
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$clock$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Clock$3e$__["Clock"],
            label: "Due List",
            href: "/dues",
            roles: [
                "ADMIN",
                "PARENT"
            ]
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tags$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tags$3e$__["Tags"],
            label: "Categories",
            href: "/categories",
            roles: [
                "ADMIN"
            ]
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$users$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Users$3e$__["Users"],
            label: "Users",
            href: "/users",
            roles: [
                "ADMIN"
            ]
        },
        {
            icon: __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"],
            label: "Services",
            href: "/therapies",
            roles: [
                "ADMIN",
                "THERAPIST"
            ]
        }
    ];
    const navItems = allNavItems.filter((item)=>item.roles.includes(role));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: [
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "fixed inset-0 bg-black/40 z-30 md:hidden backdrop-blur-sm transition-opacity duration-300",
                onClick: onClose
            }, void 0, false, {
                fileName: "[project]/components/Sidebar.tsx",
                lineNumber: 39,
                columnNumber: 17
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("aside", {
                className: `fixed inset-y-0 left-0 z-50 w-64 bg-white dark:bg-neutral-900 border-r border-gray-200 dark:border-neutral-800 transform transition-transform duration-300 ease-in-out md:relative md:translate-x-0 ${isOpen ? "translate-x-0" : "-translate-x-full"} flex flex-col overflow-y-auto`,
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex flex-col h-full",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-6 pb-2 flex items-center justify-between",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    className: "flex items-center gap-3",
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            className: "w-10 h-10 rounded-xl bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-orange-500/20 shadow-lg",
                                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$heart$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Heart$3e$__["Heart"], {
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
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                            children: [
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                                    className: "text-xl font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent leading-none",
                                                    children: "Wonderbees"
                                                }, void 0, false, {
                                                    fileName: "[project]/components/Sidebar.tsx",
                                                    lineNumber: 57,
                                                    columnNumber: 33
                                                }, this),
                                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    onClick: onClose,
                                    className: "md:hidden p-2 text-gray-500 hover:bg-gray-100 rounded-lg transition-colors",
                                    children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                        role === "ADMIN" && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "px-6 py-4",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onAddExpense,
                                className: "group flex items-center justify-center w-full py-3.5 px-4 bg-gradient-to-r from-blue-600 to-indigo-600 hover:from-blue-700 hover:to-indigo-700 text-white rounded-2xl font-semibold transition-all shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 hover:-translate-y-0.5 active:translate-y-0",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "bg-white/20 p-1 rounded-lg mr-3 group-hover:bg-white/30 transition-colors",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("nav", {
                            className: "flex-1 px-4 space-y-1.5 overflow-y-auto custom-scrollbar",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                    className: "px-4 text-xs font-semibold text-gray-400 uppercase tracking-wider mb-2 mt-2",
                                    children: "Menu"
                                }, void 0, false, {
                                    fileName: "[project]/components/Sidebar.tsx",
                                    lineNumber: 87,
                                    columnNumber: 25
                                }, this),
                                navItems.map((item)=>{
                                    const isActive = pathname === item.href;
                                    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$client$2f$app$2d$dir$2f$link$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                                        href: item.href,
                                        className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("group flex items-center w-full px-4 py-3 rounded-xl text-sm font-medium transition-all duration-200 relative overflow-hidden", isActive ? "text-blue-600 bg-blue-50 dark:bg-blue-900/10" : "text-gray-600 hover:bg-gray-50 dark:text-gray-400 dark:hover:bg-neutral-800 hover:text-gray-900 dark:hover:text-gray-200"),
                                        children: [
                                            isActive && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                                className: "absolute left-0 top-1/2 -translate-y-1/2 w-1 h-8 bg-blue-600 rounded-r-full"
                                            }, void 0, false, {
                                                fileName: "[project]/components/Sidebar.tsx",
                                                lineNumber: 103,
                                                columnNumber: 41
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(item.icon, {
                                                className: (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$utils$2e$ts__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["cn"])("w-5 h-5 mr-3 transition-colors", isActive ? "text-blue-600" : "text-gray-400 group-hover:text-gray-600 dark:group-hover:text-gray-300")
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "p-4 border-t border-gray-100 dark:border-neutral-800 bg-gray-50/50 dark:bg-neutral-900/50",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$UserSwitcher$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {}, void 0, false, {
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
}),
"[project]/lib/data:652bc2 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60c6e29ece8d1f4f6154f69defb223a13c651b4b10":"addExpenseAction"},"lib/actions.ts",""] */ __turbopack_context__.s([
    "addExpenseAction",
    ()=>addExpenseAction
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var addExpenseAction = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60c6e29ece8d1f4f6154f69defb223a13c651b4b10", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "addExpenseAction"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIkAvYXV0aFwiO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYlwiO1xuaW1wb3J0IHsgdXNlcnMsIGV4cGVuc2VzLCBjYXRlZ29yaWVzLCBjaGlsZHJlbiwgdGhlcmFwaWVzLCBzZXNzaW9ucyB9IGZyb20gXCIuL2RiL3NjaGVtYVwiOyAvLyBSZW1vdmVkIGZhbWlsaWVzLCBzdGFmZnMsIGJ1ZGdldHNcblxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IGVxLCBkZXNjLCBhbmQgfSBmcm9tIFwiZHJpenpsZS1vcm1cIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRoZW50aWNhdGUoXG4gICAgcHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhLFxuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuICAgICAgICBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7IC4uLmNyZWRlbnRpYWxzLCByZWRpcmVjdFRvOiBcIi9kYXNoYm9hcmRcIiB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJDcmVkZW50aWFsc1NpZ25pblwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNyZWRlbnRpYWxzLlwiO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXRBY3Rpb24oKSB7XG4gICAgYXdhaXQgc2lnbk91dCh7IHJlZGlyZWN0VG86IFwiL1wiIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIocHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcblxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFuYW1lKSByZXR1cm4gXCJNaXNzaW5nIGZpZWxkc1wiO1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4gXCJVc2VyIGFscmVhZHkgZXhpc3RzXCI7XG5cbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG5cbiAgICAvLyBEZWZhdWx0IHJvbGU6IFBBUkVOVD8gT3IgQURNSU4gZm9yIGZpcnN0IHVzZXI/IFxuICAgIC8vIExvZ2ljOiBJZiBubyB1c2VycyBleGlzdCwgZmlyc3QgaXMgQURNSU4uIE90aGVyd2lzZSBQQVJFTlQuXG4gICAgLy8gRm9yIG5vdywgbGV0J3MgaGFyZGNvZGUgUEFSRU5UIHVubGVzcyBleHBsaWNpdGx5IHNldCBlbHNld2hlcmUgdXN1YWxseS5cbiAgICAvLyBCdXQgZm9yIHRoaXMgXCJSZXZhbXBcIiBtYXliZSB3ZSBhc3N1bWUgQWRtaW4gY3JlYXRlcyB1c2Vycz9cbiAgICAvLyBJZiB0aGlzIGlzIHB1YmxpYyByZWdpc3RyYXRpb24sIFBBUkVOVCBpcyBzYWZlci5cblxuICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IGRiLnNlbGVjdCgpLmZyb20odXNlcnMpLnRoZW4ocmVzID0+IHJlcy5sZW5ndGgpO1xuICAgIGNvbnN0IHJvbGUgPSB1c2VyQ291bnQgPT09IDAgPyBcIkFETUlOXCIgOiBcIlBBUkVOVFwiO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZTogcm9sZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFwiU3VjY2Vzc1wiO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgICAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICAgICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgICAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKSBhcyBzdHJpbmc7XG4gICAgICAgIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoXCJyb2xlXCIpIGFzIFwiQURNSU5cIiB8IFwiVEhFUkFQSVNUXCIgfCBcIlBBUkVOVFwiO1xuICAgICAgICBjb25zdCBxdWFsaWZpY2F0aW9uID0gKGZvcm1EYXRhLmdldChcInF1YWxpZmljYXRpb25cIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgICAgIGlmICghbmFtZSB8fCAhZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFyb2xlKSByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgZmllbGRzXCIgfTtcblxuICAgICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBkYi5xdWVyeS51c2Vycy5maW5kRmlyc3Qoe1xuICAgICAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChleGlzdGluZ1VzZXIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVXNlciBhbHJlYWR5IGV4aXN0c1wiIH07XG5cbiAgICAgICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuXG4gICAgICAgIGF3YWl0IGRiLmluc2VydCh1c2VycykudmFsdWVzKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkSGFzaDogaGFzaGVkUGFzc3dvcmQsXG4gICAgICAgICAgICByb2xlLFxuICAgICAgICAgICAgcXVhbGlmaWNhdGlvbixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVXNlciBjcmVhdGVkXCIgfTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDcmVhdGUgVXNlciBFcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGNyZWF0ZSB1c2VyXCIgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRFeHBlbnNlQWN0aW9uKHByZXZTdGF0ZTogYW55LCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuICAgIC8vIE9ubHkgQWRtaW4gY2FuIGFkZCBleHBlbnNlcz8gT3IgVGhlcmFwaXN0P1xuICAgIC8vIExldCdzIGFsbG93IEFkbWluIGFuZCBtYXliZSBUaGVyYXBpc3QuXG4gICAgaWYgKHNlc3Npb24udXNlci5yb2xlID09PSBcIlBBUkVOVFwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cblxuICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlRmxvYXQoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpIGFzIHN0cmluZyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSAoZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikgYXMgc3RyaW5nKSB8fCBcIlwiO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0eXBlID0gKGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgXCJFWFBFTlNFXCIgfCBcIklOQ09NRVwiIHwgXCJEVUVcIikgfHwgXCJFWFBFTlNFXCI7XG4gICAgY29uc3QgY2hpbGRJZCA9IChmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICAvLyBzdGFmZklkIHJlbW92ZWQuIHR5cGUgaXMgZW5vdWdoPyBPciBtYXliZSByZWNvcmRlZEJ5P1xuXG5cbiAgICBpZiAoIWFtb3VudCB8fCAhZGF0ZVN0cikge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgZmllbGRzXCIgfTtcbiAgICB9XG5cbiAgICBpZiAoIWZvcm1EYXRhLmdldChcImNhdGVnb3J5SWRcIikpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYXRlZ29yeSBpcyByZXF1aXJlZFwiIH07XG4gICAgfVxuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KGV4cGVuc2VzKS52YWx1ZXMoe1xuICAgICAgICAvLyB1c2VySWQ6IHNlc3Npb24udXNlci5pZCwgLy8gUmVtb3ZlZCB1c2VySWQgY29uc3RyYWludCBmcm9tIHNjaGVtYT8gTm8sIGtlZXAgaXQgYXMgJ3JlY29yZGVkIGJ5JyBpZiBuZWVkZWQ/IFxuICAgICAgICAvLyBTY2hlbWEgZGVmaW5pdGlvbjogXCJ1c2VySWRcIiByZW1vdmVkPyBMZXQncyBjaGVjayBzY2hlbWEudHMgY29udGVudCBJIHdyb3RlLlxuICAgICAgICAvLyBJIGtlcHQgJ2V4cGVuc2UnIHRhYmxlIGJ1dCByZWZhY3RvcmluZy5cbiAgICAgICAgLy8gV2FpdCwgSSBjaGFuZ2VkICd1c2VySWQnIHRvICdyZWNvcmRlZEJ5JyAob3B0aW9uYWwpIGluIG15IHRob3VnaHQsIGJ1dCBsZXQncyBjaGVjayB3aGF0IEkgYWN0dWFsbHkgd3JvdGUuXG4gICAgICAgIC8vIEkgd3JvdGU6IHJlY29yZGVkQnk6IHV1aWQoXCJyZWNvcmRlZF9ieVwiKS5yZWZlcmVuY2VzKCgpID0+IHVzZXJzLmlkKSwgLy8gQWRtaW4gd2hvIHJlY29yZGVkIGl0XG5cbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGFtb3VudDogYW1vdW50LnRvU3RyaW5nKCksXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGVTdHIpLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBjYXRlZ29yeUlkOiAoZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlJZFwiKSBhcyBzdHJpbmcpLFxuICAgICAgICBjaGlsZElkOiBjaGlsZElkLFxuICAgICAgICByZWNvcmRlZEJ5OiBzZXNzaW9uLnVzZXIuaWRcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRyYW5zYWN0aW9uIGFkZGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1hcmtEdWVBc1BhaWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgZXhwZW5zZSA9IGF3YWl0IGRiLnF1ZXJ5LmV4cGVuc2VzLmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiBlcShleHBlbnNlcy5pZCwgaWQpXG4gICAgfSk7XG5cbiAgICBpZiAoIWV4cGVuc2UpIHJldHVybiB7IG1lc3NhZ2U6IFwiUmVjb3JkIG5vdCBmb3VuZFwiIH07XG5cbiAgICBhd2FpdCBkYi51cGRhdGUoZXhwZW5zZXMpLnNldCh7XG4gICAgICAgIHR5cGU6IFwiSU5DT01FXCJcbiAgICB9KS53aGVyZShlcShleHBlbnNlcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlBheW1lbnQgbWFya2VkIGFzIHBhaWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVXNlcih1c2VySWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgaWYgKHVzZXJJZCA9PT0gc2Vzc2lvbi51c2VyLmlkKSByZXR1cm4geyBtZXNzYWdlOiBcIkNhbm5vdCBkZWxldGUgeW91cnNlbGZcIiB9O1xuXG4gICAgYXdhaXQgZGIuZGVsZXRlKHVzZXJzKS53aGVyZShlcSh1c2Vycy5pZCwgdXNlcklkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdXNlcnNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJVc2VyIGRlbGV0ZWRcIiB9O1xufVxuXG5cbi8vIC0tLSBUaGVyYXB5IEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGhlcmFweShmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmcpIHx8IFwiXCI7XG4gICAgY29uc3QgcHJpY2UgPSAoZm9ybURhdGEuZ2V0KFwicHJpY2VcIikgYXMgc3RyaW5nKSB8fCBcIjBcIjtcbiAgICBjb25zdCBzdGF0dXMgPSAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIFwiQUNUSVZFXCIgfCBcIklOQUNUSVZFXCIpIHx8IFwiQUNUSVZFXCI7XG4gICAgY29uc3QgZHVyYXRpb24gPSAoZm9ybURhdGEuZ2V0KFwiZGVmYXVsdER1cmF0aW9uTWludXRlc1wiKSBhcyBzdHJpbmcpIHx8IFwiNDVcIjtcblxuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydCh0aGVyYXBpZXMpLnZhbHVlcyh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBjaGFyZ2VQZXJTZXNzaW9uOiBwcmljZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkZWZhdWx0RHVyYXRpb25NaW51dGVzOiBwYXJzZUludChkdXJhdGlvbiksXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi90aGVyYXBpZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJUaGVyYXB5IHNlcnZpY2UgY3JlYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVUaGVyYXB5KGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBwcmljZSA9IChmb3JtRGF0YS5nZXQoXCJwcmljZVwiKSBhcyBzdHJpbmcpIHx8IFwiMFwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBQ1RJVkVcIiB8IFwiSU5BQ1RJVkVcIikgfHwgXCJBQ1RJVkVcIjtcbiAgICBjb25zdCBkdXJhdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZWZhdWx0RHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZykgfHwgXCI0NVwiO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKHRoZXJhcGllcykuc2V0KHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNoYXJnZVBlclNlc3Npb246IHByaWNlLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRlZmF1bHREdXJhdGlvbk1pbnV0ZXM6IHBhcnNlSW50KGR1cmF0aW9uKSxcbiAgICB9KS53aGVyZShlcSh0aGVyYXBpZXMuaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi90aGVyYXBpZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJUaGVyYXB5IHNlcnZpY2UgdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUaGVyYXB5KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRiLmRlbGV0ZSh0aGVyYXBpZXMpLndoZXJlKGVxKHRoZXJhcGllcy5pZCwgaWQpKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvdGhlcmFwaWVzXCIpO1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSBkZWxldGVkXCIgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkZhaWxlZCB0byBkZWxldGUgdGhlcmFweS4gSXQgbWlnaHQgYmUgbGlua2VkIHRvIGV4aXN0aW5nIHNlc3Npb25zLlwiIH07XG4gICAgfVxufVxuXG5cbi8vIC0tLSBTZXNzaW9uIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlU2Vzc2lvbihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIC8vIEFkbWluIG9yIFRoZXJhcGlzdCBjYW4gY3JlYXRlIHNlc3Npb25zXG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgPT09IFwiUEFSRU5UXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IGNoaWxkSWQgPSBmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXBpc3RJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcGlzdElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXB5SWQgPSBmb3JtRGF0YS5nZXQoXCJ0aGVyYXB5SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBkdXJhdGlvbiA9IGZvcm1EYXRhLmdldChcImR1cmF0aW9uTWludXRlc1wiKSBhcyBzdHJpbmcgfHwgXCI0NVwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJTQ0hFRFVMRURcIiB8IFwiQ09NUExFVEVEXCIgfCBcIkNBTkNFTExFRFwiIHwgXCJNSVNTRURcIikgfHwgXCJTQ0hFRFVMRURcIjtcblxuICAgIGlmICghY2hpbGRJZCB8fCAhdGhlcmFwaXN0SWQgfHwgIXRoZXJhcHlJZCB8fCAhZGF0ZVN0cikge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgcmVxdWlyZWQgZmllbGRzXCIgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoc2Vzc2lvbnMpLnZhbHVlcyh7XG4gICAgICAgIGNoaWxkSWQsXG4gICAgICAgIHRoZXJhcGlzdElkLFxuICAgICAgICB0aGVyYXB5SWQsXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGVTdHIpLFxuICAgICAgICBkdXJhdGlvbk1pbnV0ZXM6IHBhcnNlSW50KGR1cmF0aW9uKSxcbiAgICAgICAgc3RhdHVzLFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2NoZWR1bGVcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJTZXNzaW9uIHNjaGVkdWxlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTZXNzaW9uKGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgPT09IFwiUEFSRU5UXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IGNoaWxkSWQgPSBmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXBpc3RJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcGlzdElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXB5SWQgPSBmb3JtRGF0YS5nZXQoXCJ0aGVyYXB5SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBkdXJhdGlvbiA9IGZvcm1EYXRhLmdldChcImR1cmF0aW9uTWludXRlc1wiKSBhcyBzdHJpbmcgfHwgXCI0NVwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJTQ0hFRFVMRURcIiB8IFwiQ09NUExFVEVEXCIgfCBcIkNBTkNFTExFRFwiIHwgXCJNSVNTRURcIikgfHwgXCJTQ0hFRFVMRURcIjtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShzZXNzaW9ucykuc2V0KHtcbiAgICAgICAgY2hpbGRJZCxcbiAgICAgICAgdGhlcmFwaXN0SWQsXG4gICAgICAgIHRoZXJhcHlJZCxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGR1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgICAgICBzdGF0dXMsXG4gICAgfSkud2hlcmUoZXEoc2Vzc2lvbnMuaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVTZXNzaW9uKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmRlbGV0ZShzZXNzaW9ucykud2hlcmUoZXEoc2Vzc2lvbnMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2NoZWR1bGVcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJTZXNzaW9uIGRlbGV0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlcih1c2VySWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiICYmIHNlc3Npb24/LnVzZXI/LmlkICE9PSB1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCByb2xlID0gZm9ybURhdGEuZ2V0KFwicm9sZVwiKSBhcyBcIkFETUlOXCIgfCBcIlRIRVJBUElTVFwiIHwgXCJQQVJFTlRcIjtcbiAgICBjb25zdCBxdWFsaWZpY2F0aW9uID0gKGZvcm1EYXRhLmdldChcInF1YWxpZmljYXRpb25cIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwicGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCkgcmV0dXJuIHsgbWVzc2FnZTogXCJNaXNzaW5nIGZpZWxkc1wiIH07XG5cbiAgICBjb25zdCB1cGRhdGVEYXRhOiBhbnkgPSB7IG5hbWUsIGVtYWlsLCBxdWFsaWZpY2F0aW9uIH07XG4gICAgaWYgKHNlc3Npb24udXNlci5yb2xlID09PSBcIkFETUlOXCIpIHtcbiAgICAgICAgaWYgKHJvbGUpIHVwZGF0ZURhdGEucm9sZSA9IHJvbGU7XG4gICAgICAgIGlmIChwYXNzd29yZCAmJiBwYXNzd29yZC50cmltKCkgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHVwZGF0ZURhdGEucGFzc3dvcmRIYXNoID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGF3YWl0IGRiLnVwZGF0ZSh1c2VycylcbiAgICAgICAgLnNldCh1cGRhdGVEYXRhKVxuICAgICAgICAud2hlcmUoZXEodXNlcnMuaWQsIHVzZXJJZCkpO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJVc2VyIHVwZGF0ZWRcIiB9O1xufVxuXG4vLyAtLS0gQ2F0ZWdvcnkgQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yeShmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoY2F0ZWdvcmllcyBhcyBhbnkpLnZhbHVlcyh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIC8vIGZhbWlseUlkIHJlbW92ZWRcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2F0ZWdvcnkgY3JlYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXRlZ29yeShpZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi51cGRhdGUoY2F0ZWdvcmllcykuc2V0KHsgbmFtZSB9KS53aGVyZShlcShjYXRlZ29yaWVzLmlkLCBpZCkpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IHVwZGF0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2F0ZWdvcnkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGIuZGVsZXRlKGNhdGVnb3JpZXMpLndoZXJlKGVxKGNhdGVnb3JpZXMuaWQsIGlkKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhbm5vdCBkZWxldGUgY2F0ZWdvcnkgaW4gdXNlXCIgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZXhwZW5zZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYXRlZ29yeSBkZWxldGVkXCIgfTtcbn1cblxuLy8gLS0tIEV4cGVuc2UgQWN0aW9ucyAtLS0gKFVwZGF0ZS9EZWxldGUpXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRXhwZW5zZShpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICAvLyBQYXJlbnQgY2FuJ3QgZGVsZXRlPyBZZXMuXG5cbiAgICBhd2FpdCBkYi5kZWxldGUoZXhwZW5zZXMpLndoZXJlKGVxKGV4cGVuc2VzLmlkLCBpZCkpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkV4cGVuc2UgZGVsZXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFeHBlbnNlKGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgYW1vdW50ID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikgYXMgc3RyaW5nKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmcpIHx8IFwiXCI7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGNhdGVnb3J5SWQgPSBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeUlkXCIpIGFzIHN0cmluZztcblxuICAgIGlmICghYW1vdW50IHx8ICFkYXRlU3RyIHx8ICFjYXRlZ29yeUlkKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGF3YWl0IGRiLnVwZGF0ZShleHBlbnNlcykuc2V0KHtcbiAgICAgICAgYW1vdW50OiBhbW91bnQudG9TdHJpbmcoKSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGVTdHIpLFxuICAgICAgICBjYXRlZ29yeUlkOiBjYXRlZ29yeUlkLFxuICAgICAgICBjaGlsZElkOiAoZm9ybURhdGEuZ2V0KFwiY2hpbGRJZFwiKSBhcyBzdHJpbmcpIHx8IG51bGwsXG4gICAgICAgIHR5cGU6IChmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpIGFzIFwiRVhQRU5TRVwiIHwgXCJJTkNPTUVcIiB8IFwiRFVFXCIpIHx8IFwiRVhQRU5TRVwiLFxuXG4gICAgfSkud2hlcmUoZXEoZXhwZW5zZXMuaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZXhwZW5zZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJUcmFuc2FjdGlvbiB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVBhc3N3b3JkKHByZXZTdGF0ZTogYW55LCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHJldHVybiBcIlVuYXV0aG9yaXplZFwiO1xuXG4gICAgY29uc3QgY3VycmVudFBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwiY3VycmVudFBhc3N3b3JkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBuZXdQYXNzd29yZCA9IGZvcm1EYXRhLmdldChcIm5ld1Bhc3N3b3JkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBjb25maXJtUGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJjb25maXJtUGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuXG4gICAgaWYgKCFjdXJyZW50UGFzc3dvcmQgfHwgIW5ld1Bhc3N3b3JkIHx8ICFjb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIFwiQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWRcIjtcbiAgICB9XG5cbiAgICBpZiAobmV3UGFzc3dvcmQgIT09IGNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gXCJOZXcgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiO1xuICAgIH1cblxuICAgIGlmIChuZXdQYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgICAgIHJldHVybiBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzXCI7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnF1ZXJ5LnVzZXJzLmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiBlcSh1c2Vycy5pZCwgc2Vzc2lvbi51c2VyLmlkKSxcbiAgICB9KTtcblxuICAgIGlmICghdXNlcikgcmV0dXJuIFwiVXNlciBub3QgZm91bmRcIjtcblxuICAgIGNvbnN0IGlzTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShjdXJyZW50UGFzc3dvcmQsIHVzZXIucGFzc3dvcmRIYXNoKTtcbiAgICBpZiAoIWlzTWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIFwiSW5jb3JyZWN0IGN1cnJlbnQgcGFzc3dvcmRcIjtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKG5ld1Bhc3N3b3JkLCAxMCk7XG5cbiAgICBhd2FpdCBkYi51cGRhdGUodXNlcnMpXG4gICAgICAgIC5zZXQoeyBwYXNzd29yZEhhc2g6IGhhc2hlZFBhc3N3b3JkIH0pXG4gICAgICAgIC53aGVyZShlcSh1c2Vycy5pZCwgc2Vzc2lvbi51c2VyLmlkKSk7XG5cbiAgICByZXR1cm4gXCJTdWNjZXNzXCI7XG59XG5cbi8vIC0tLSBDaGlsZCBBY3Rpb25zIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNoaWxkKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBQ1RJVkVcIiB8IFwiSU5BQ1RJVkVcIikgfHwgXCJBQ1RJVkVcIjtcbiAgICBjb25zdCBkb2IgPSAoZm9ybURhdGEuZ2V0KFwiZG9iXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBnZW5kZXIgPSAoZm9ybURhdGEuZ2V0KFwiZ2VuZGVyXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBkaWFnbm9zaXMgPSAoZm9ybURhdGEuZ2V0KFwiZGlhZ25vc2lzXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBwYXJlbnRJZCA9IChmb3JtRGF0YS5nZXQoXCJwYXJlbnRJZFwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG5cbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoY2hpbGRyZW4pLnZhbHVlcyh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZG9iLFxuICAgICAgICBnZW5kZXIsXG4gICAgICAgIGRpYWdub3NpcyxcbiAgICAgICAgcGFyZW50SWRcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2NoaWxkcmVuc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNoaWxkIGNyZWF0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2hpbGQoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGRvYiA9IChmb3JtRGF0YS5nZXQoXCJkb2JcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGdlbmRlciA9IChmb3JtRGF0YS5nZXQoXCJnZW5kZXJcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGRpYWdub3NpcyA9IChmb3JtRGF0YS5nZXQoXCJkaWFnbm9zaXNcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHBhcmVudElkID0gKGZvcm1EYXRhLmdldChcInBhcmVudElkXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcblxuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShjaGlsZHJlbikuc2V0KHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkb2IsXG4gICAgICAgIGdlbmRlcixcbiAgICAgICAgZGlhZ25vc2lzLFxuICAgICAgICBwYXJlbnRJZFxuICAgIH0pLndoZXJlKGVxKGNoaWxkcmVuLmlkLCBpZCkpO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvY2hpbGRyZW5zXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2hpbGQgdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDaGlsZChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkYi5kZWxldGUoY2hpbGRyZW4pLndoZXJlKGVxKGNoaWxkcmVuLmlkLCBpZCkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYW5ub3QgZGVsZXRlIGNoaWxkIGluIHVzZVwiIH07XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDaGlsZCBkZWxldGVkXCIgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoid1JBMkdzQiJ9
}),
"[project]/lib/data:43da31 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60a0e6c1c04b9d54250546559c6761899044267282":"updateExpense"},"lib/actions.ts",""] */ __turbopack_context__.s([
    "updateExpense",
    ()=>updateExpense
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var updateExpense = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60a0e6c1c04b9d54250546559c6761899044267282", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateExpense"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIkAvYXV0aFwiO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYlwiO1xuaW1wb3J0IHsgdXNlcnMsIGV4cGVuc2VzLCBjYXRlZ29yaWVzLCBjaGlsZHJlbiwgdGhlcmFwaWVzLCBzZXNzaW9ucyB9IGZyb20gXCIuL2RiL3NjaGVtYVwiOyAvLyBSZW1vdmVkIGZhbWlsaWVzLCBzdGFmZnMsIGJ1ZGdldHNcblxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IGVxLCBkZXNjLCBhbmQgfSBmcm9tIFwiZHJpenpsZS1vcm1cIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRoZW50aWNhdGUoXG4gICAgcHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhLFxuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuICAgICAgICBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7IC4uLmNyZWRlbnRpYWxzLCByZWRpcmVjdFRvOiBcIi9kYXNoYm9hcmRcIiB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJDcmVkZW50aWFsc1NpZ25pblwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNyZWRlbnRpYWxzLlwiO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXRBY3Rpb24oKSB7XG4gICAgYXdhaXQgc2lnbk91dCh7IHJlZGlyZWN0VG86IFwiL1wiIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIocHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcblxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFuYW1lKSByZXR1cm4gXCJNaXNzaW5nIGZpZWxkc1wiO1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4gXCJVc2VyIGFscmVhZHkgZXhpc3RzXCI7XG5cbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG5cbiAgICAvLyBEZWZhdWx0IHJvbGU6IFBBUkVOVD8gT3IgQURNSU4gZm9yIGZpcnN0IHVzZXI/IFxuICAgIC8vIExvZ2ljOiBJZiBubyB1c2VycyBleGlzdCwgZmlyc3QgaXMgQURNSU4uIE90aGVyd2lzZSBQQVJFTlQuXG4gICAgLy8gRm9yIG5vdywgbGV0J3MgaGFyZGNvZGUgUEFSRU5UIHVubGVzcyBleHBsaWNpdGx5IHNldCBlbHNld2hlcmUgdXN1YWxseS5cbiAgICAvLyBCdXQgZm9yIHRoaXMgXCJSZXZhbXBcIiBtYXliZSB3ZSBhc3N1bWUgQWRtaW4gY3JlYXRlcyB1c2Vycz9cbiAgICAvLyBJZiB0aGlzIGlzIHB1YmxpYyByZWdpc3RyYXRpb24sIFBBUkVOVCBpcyBzYWZlci5cblxuICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IGRiLnNlbGVjdCgpLmZyb20odXNlcnMpLnRoZW4ocmVzID0+IHJlcy5sZW5ndGgpO1xuICAgIGNvbnN0IHJvbGUgPSB1c2VyQ291bnQgPT09IDAgPyBcIkFETUlOXCIgOiBcIlBBUkVOVFwiO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZTogcm9sZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFwiU3VjY2Vzc1wiO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgICAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICAgICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgICAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKSBhcyBzdHJpbmc7XG4gICAgICAgIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoXCJyb2xlXCIpIGFzIFwiQURNSU5cIiB8IFwiVEhFUkFQSVNUXCIgfCBcIlBBUkVOVFwiO1xuICAgICAgICBjb25zdCBxdWFsaWZpY2F0aW9uID0gKGZvcm1EYXRhLmdldChcInF1YWxpZmljYXRpb25cIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgICAgIGlmICghbmFtZSB8fCAhZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFyb2xlKSByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgZmllbGRzXCIgfTtcblxuICAgICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBkYi5xdWVyeS51c2Vycy5maW5kRmlyc3Qoe1xuICAgICAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChleGlzdGluZ1VzZXIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVXNlciBhbHJlYWR5IGV4aXN0c1wiIH07XG5cbiAgICAgICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuXG4gICAgICAgIGF3YWl0IGRiLmluc2VydCh1c2VycykudmFsdWVzKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkSGFzaDogaGFzaGVkUGFzc3dvcmQsXG4gICAgICAgICAgICByb2xlLFxuICAgICAgICAgICAgcXVhbGlmaWNhdGlvbixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVXNlciBjcmVhdGVkXCIgfTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDcmVhdGUgVXNlciBFcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGNyZWF0ZSB1c2VyXCIgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRFeHBlbnNlQWN0aW9uKHByZXZTdGF0ZTogYW55LCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuICAgIC8vIE9ubHkgQWRtaW4gY2FuIGFkZCBleHBlbnNlcz8gT3IgVGhlcmFwaXN0P1xuICAgIC8vIExldCdzIGFsbG93IEFkbWluIGFuZCBtYXliZSBUaGVyYXBpc3QuXG4gICAgaWYgKHNlc3Npb24udXNlci5yb2xlID09PSBcIlBBUkVOVFwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cblxuICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlRmxvYXQoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpIGFzIHN0cmluZyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSAoZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikgYXMgc3RyaW5nKSB8fCBcIlwiO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0eXBlID0gKGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgXCJFWFBFTlNFXCIgfCBcIklOQ09NRVwiIHwgXCJEVUVcIikgfHwgXCJFWFBFTlNFXCI7XG4gICAgY29uc3QgY2hpbGRJZCA9IChmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICAvLyBzdGFmZklkIHJlbW92ZWQuIHR5cGUgaXMgZW5vdWdoPyBPciBtYXliZSByZWNvcmRlZEJ5P1xuXG5cbiAgICBpZiAoIWFtb3VudCB8fCAhZGF0ZVN0cikge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgZmllbGRzXCIgfTtcbiAgICB9XG5cbiAgICBpZiAoIWZvcm1EYXRhLmdldChcImNhdGVnb3J5SWRcIikpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYXRlZ29yeSBpcyByZXF1aXJlZFwiIH07XG4gICAgfVxuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KGV4cGVuc2VzKS52YWx1ZXMoe1xuICAgICAgICAvLyB1c2VySWQ6IHNlc3Npb24udXNlci5pZCwgLy8gUmVtb3ZlZCB1c2VySWQgY29uc3RyYWludCBmcm9tIHNjaGVtYT8gTm8sIGtlZXAgaXQgYXMgJ3JlY29yZGVkIGJ5JyBpZiBuZWVkZWQ/IFxuICAgICAgICAvLyBTY2hlbWEgZGVmaW5pdGlvbjogXCJ1c2VySWRcIiByZW1vdmVkPyBMZXQncyBjaGVjayBzY2hlbWEudHMgY29udGVudCBJIHdyb3RlLlxuICAgICAgICAvLyBJIGtlcHQgJ2V4cGVuc2UnIHRhYmxlIGJ1dCByZWZhY3RvcmluZy5cbiAgICAgICAgLy8gV2FpdCwgSSBjaGFuZ2VkICd1c2VySWQnIHRvICdyZWNvcmRlZEJ5JyAob3B0aW9uYWwpIGluIG15IHRob3VnaHQsIGJ1dCBsZXQncyBjaGVjayB3aGF0IEkgYWN0dWFsbHkgd3JvdGUuXG4gICAgICAgIC8vIEkgd3JvdGU6IHJlY29yZGVkQnk6IHV1aWQoXCJyZWNvcmRlZF9ieVwiKS5yZWZlcmVuY2VzKCgpID0+IHVzZXJzLmlkKSwgLy8gQWRtaW4gd2hvIHJlY29yZGVkIGl0XG5cbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGFtb3VudDogYW1vdW50LnRvU3RyaW5nKCksXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGVTdHIpLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBjYXRlZ29yeUlkOiAoZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlJZFwiKSBhcyBzdHJpbmcpLFxuICAgICAgICBjaGlsZElkOiBjaGlsZElkLFxuICAgICAgICByZWNvcmRlZEJ5OiBzZXNzaW9uLnVzZXIuaWRcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRyYW5zYWN0aW9uIGFkZGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1hcmtEdWVBc1BhaWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgZXhwZW5zZSA9IGF3YWl0IGRiLnF1ZXJ5LmV4cGVuc2VzLmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiBlcShleHBlbnNlcy5pZCwgaWQpXG4gICAgfSk7XG5cbiAgICBpZiAoIWV4cGVuc2UpIHJldHVybiB7IG1lc3NhZ2U6IFwiUmVjb3JkIG5vdCBmb3VuZFwiIH07XG5cbiAgICBhd2FpdCBkYi51cGRhdGUoZXhwZW5zZXMpLnNldCh7XG4gICAgICAgIHR5cGU6IFwiSU5DT01FXCJcbiAgICB9KS53aGVyZShlcShleHBlbnNlcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlBheW1lbnQgbWFya2VkIGFzIHBhaWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVXNlcih1c2VySWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgaWYgKHVzZXJJZCA9PT0gc2Vzc2lvbi51c2VyLmlkKSByZXR1cm4geyBtZXNzYWdlOiBcIkNhbm5vdCBkZWxldGUgeW91cnNlbGZcIiB9O1xuXG4gICAgYXdhaXQgZGIuZGVsZXRlKHVzZXJzKS53aGVyZShlcSh1c2Vycy5pZCwgdXNlcklkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdXNlcnNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJVc2VyIGRlbGV0ZWRcIiB9O1xufVxuXG5cbi8vIC0tLSBUaGVyYXB5IEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGhlcmFweShmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmcpIHx8IFwiXCI7XG4gICAgY29uc3QgcHJpY2UgPSAoZm9ybURhdGEuZ2V0KFwicHJpY2VcIikgYXMgc3RyaW5nKSB8fCBcIjBcIjtcbiAgICBjb25zdCBzdGF0dXMgPSAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIFwiQUNUSVZFXCIgfCBcIklOQUNUSVZFXCIpIHx8IFwiQUNUSVZFXCI7XG4gICAgY29uc3QgZHVyYXRpb24gPSAoZm9ybURhdGEuZ2V0KFwiZGVmYXVsdER1cmF0aW9uTWludXRlc1wiKSBhcyBzdHJpbmcpIHx8IFwiNDVcIjtcblxuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydCh0aGVyYXBpZXMpLnZhbHVlcyh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBjaGFyZ2VQZXJTZXNzaW9uOiBwcmljZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkZWZhdWx0RHVyYXRpb25NaW51dGVzOiBwYXJzZUludChkdXJhdGlvbiksXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi90aGVyYXBpZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJUaGVyYXB5IHNlcnZpY2UgY3JlYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVUaGVyYXB5KGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBwcmljZSA9IChmb3JtRGF0YS5nZXQoXCJwcmljZVwiKSBhcyBzdHJpbmcpIHx8IFwiMFwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBQ1RJVkVcIiB8IFwiSU5BQ1RJVkVcIikgfHwgXCJBQ1RJVkVcIjtcbiAgICBjb25zdCBkdXJhdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZWZhdWx0RHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZykgfHwgXCI0NVwiO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKHRoZXJhcGllcykuc2V0KHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNoYXJnZVBlclNlc3Npb246IHByaWNlLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRlZmF1bHREdXJhdGlvbk1pbnV0ZXM6IHBhcnNlSW50KGR1cmF0aW9uKSxcbiAgICB9KS53aGVyZShlcSh0aGVyYXBpZXMuaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi90aGVyYXBpZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJUaGVyYXB5IHNlcnZpY2UgdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUaGVyYXB5KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRiLmRlbGV0ZSh0aGVyYXBpZXMpLndoZXJlKGVxKHRoZXJhcGllcy5pZCwgaWQpKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvdGhlcmFwaWVzXCIpO1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSBkZWxldGVkXCIgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkZhaWxlZCB0byBkZWxldGUgdGhlcmFweS4gSXQgbWlnaHQgYmUgbGlua2VkIHRvIGV4aXN0aW5nIHNlc3Npb25zLlwiIH07XG4gICAgfVxufVxuXG5cbi8vIC0tLSBTZXNzaW9uIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlU2Vzc2lvbihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIC8vIEFkbWluIG9yIFRoZXJhcGlzdCBjYW4gY3JlYXRlIHNlc3Npb25zXG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgPT09IFwiUEFSRU5UXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IGNoaWxkSWQgPSBmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXBpc3RJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcGlzdElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXB5SWQgPSBmb3JtRGF0YS5nZXQoXCJ0aGVyYXB5SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBkdXJhdGlvbiA9IGZvcm1EYXRhLmdldChcImR1cmF0aW9uTWludXRlc1wiKSBhcyBzdHJpbmcgfHwgXCI0NVwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJTQ0hFRFVMRURcIiB8IFwiQ09NUExFVEVEXCIgfCBcIkNBTkNFTExFRFwiIHwgXCJNSVNTRURcIikgfHwgXCJTQ0hFRFVMRURcIjtcblxuICAgIGlmICghY2hpbGRJZCB8fCAhdGhlcmFwaXN0SWQgfHwgIXRoZXJhcHlJZCB8fCAhZGF0ZVN0cikge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgcmVxdWlyZWQgZmllbGRzXCIgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoc2Vzc2lvbnMpLnZhbHVlcyh7XG4gICAgICAgIGNoaWxkSWQsXG4gICAgICAgIHRoZXJhcGlzdElkLFxuICAgICAgICB0aGVyYXB5SWQsXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGVTdHIpLFxuICAgICAgICBkdXJhdGlvbk1pbnV0ZXM6IHBhcnNlSW50KGR1cmF0aW9uKSxcbiAgICAgICAgc3RhdHVzLFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2NoZWR1bGVcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJTZXNzaW9uIHNjaGVkdWxlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTZXNzaW9uKGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgPT09IFwiUEFSRU5UXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IGNoaWxkSWQgPSBmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXBpc3RJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcGlzdElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXB5SWQgPSBmb3JtRGF0YS5nZXQoXCJ0aGVyYXB5SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBkdXJhdGlvbiA9IGZvcm1EYXRhLmdldChcImR1cmF0aW9uTWludXRlc1wiKSBhcyBzdHJpbmcgfHwgXCI0NVwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJTQ0hFRFVMRURcIiB8IFwiQ09NUExFVEVEXCIgfCBcIkNBTkNFTExFRFwiIHwgXCJNSVNTRURcIikgfHwgXCJTQ0hFRFVMRURcIjtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShzZXNzaW9ucykuc2V0KHtcbiAgICAgICAgY2hpbGRJZCxcbiAgICAgICAgdGhlcmFwaXN0SWQsXG4gICAgICAgIHRoZXJhcHlJZCxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGR1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgICAgICBzdGF0dXMsXG4gICAgfSkud2hlcmUoZXEoc2Vzc2lvbnMuaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVTZXNzaW9uKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmRlbGV0ZShzZXNzaW9ucykud2hlcmUoZXEoc2Vzc2lvbnMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2NoZWR1bGVcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJTZXNzaW9uIGRlbGV0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlcih1c2VySWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiICYmIHNlc3Npb24/LnVzZXI/LmlkICE9PSB1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCByb2xlID0gZm9ybURhdGEuZ2V0KFwicm9sZVwiKSBhcyBcIkFETUlOXCIgfCBcIlRIRVJBUElTVFwiIHwgXCJQQVJFTlRcIjtcbiAgICBjb25zdCBxdWFsaWZpY2F0aW9uID0gKGZvcm1EYXRhLmdldChcInF1YWxpZmljYXRpb25cIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwicGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCkgcmV0dXJuIHsgbWVzc2FnZTogXCJNaXNzaW5nIGZpZWxkc1wiIH07XG5cbiAgICBjb25zdCB1cGRhdGVEYXRhOiBhbnkgPSB7IG5hbWUsIGVtYWlsLCBxdWFsaWZpY2F0aW9uIH07XG4gICAgaWYgKHNlc3Npb24udXNlci5yb2xlID09PSBcIkFETUlOXCIpIHtcbiAgICAgICAgaWYgKHJvbGUpIHVwZGF0ZURhdGEucm9sZSA9IHJvbGU7XG4gICAgICAgIGlmIChwYXNzd29yZCAmJiBwYXNzd29yZC50cmltKCkgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHVwZGF0ZURhdGEucGFzc3dvcmRIYXNoID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGF3YWl0IGRiLnVwZGF0ZSh1c2VycylcbiAgICAgICAgLnNldCh1cGRhdGVEYXRhKVxuICAgICAgICAud2hlcmUoZXEodXNlcnMuaWQsIHVzZXJJZCkpO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJVc2VyIHVwZGF0ZWRcIiB9O1xufVxuXG4vLyAtLS0gQ2F0ZWdvcnkgQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yeShmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoY2F0ZWdvcmllcyBhcyBhbnkpLnZhbHVlcyh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIC8vIGZhbWlseUlkIHJlbW92ZWRcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2F0ZWdvcnkgY3JlYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXRlZ29yeShpZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi51cGRhdGUoY2F0ZWdvcmllcykuc2V0KHsgbmFtZSB9KS53aGVyZShlcShjYXRlZ29yaWVzLmlkLCBpZCkpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IHVwZGF0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2F0ZWdvcnkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGIuZGVsZXRlKGNhdGVnb3JpZXMpLndoZXJlKGVxKGNhdGVnb3JpZXMuaWQsIGlkKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhbm5vdCBkZWxldGUgY2F0ZWdvcnkgaW4gdXNlXCIgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZXhwZW5zZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYXRlZ29yeSBkZWxldGVkXCIgfTtcbn1cblxuLy8gLS0tIEV4cGVuc2UgQWN0aW9ucyAtLS0gKFVwZGF0ZS9EZWxldGUpXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRXhwZW5zZShpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICAvLyBQYXJlbnQgY2FuJ3QgZGVsZXRlPyBZZXMuXG5cbiAgICBhd2FpdCBkYi5kZWxldGUoZXhwZW5zZXMpLndoZXJlKGVxKGV4cGVuc2VzLmlkLCBpZCkpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkV4cGVuc2UgZGVsZXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFeHBlbnNlKGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgYW1vdW50ID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikgYXMgc3RyaW5nKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmcpIHx8IFwiXCI7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGNhdGVnb3J5SWQgPSBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeUlkXCIpIGFzIHN0cmluZztcblxuICAgIGlmICghYW1vdW50IHx8ICFkYXRlU3RyIHx8ICFjYXRlZ29yeUlkKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGF3YWl0IGRiLnVwZGF0ZShleHBlbnNlcykuc2V0KHtcbiAgICAgICAgYW1vdW50OiBhbW91bnQudG9TdHJpbmcoKSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGVTdHIpLFxuICAgICAgICBjYXRlZ29yeUlkOiBjYXRlZ29yeUlkLFxuICAgICAgICBjaGlsZElkOiAoZm9ybURhdGEuZ2V0KFwiY2hpbGRJZFwiKSBhcyBzdHJpbmcpIHx8IG51bGwsXG4gICAgICAgIHR5cGU6IChmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpIGFzIFwiRVhQRU5TRVwiIHwgXCJJTkNPTUVcIiB8IFwiRFVFXCIpIHx8IFwiRVhQRU5TRVwiLFxuXG4gICAgfSkud2hlcmUoZXEoZXhwZW5zZXMuaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZXhwZW5zZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJUcmFuc2FjdGlvbiB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVBhc3N3b3JkKHByZXZTdGF0ZTogYW55LCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHJldHVybiBcIlVuYXV0aG9yaXplZFwiO1xuXG4gICAgY29uc3QgY3VycmVudFBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwiY3VycmVudFBhc3N3b3JkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBuZXdQYXNzd29yZCA9IGZvcm1EYXRhLmdldChcIm5ld1Bhc3N3b3JkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBjb25maXJtUGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJjb25maXJtUGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuXG4gICAgaWYgKCFjdXJyZW50UGFzc3dvcmQgfHwgIW5ld1Bhc3N3b3JkIHx8ICFjb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIFwiQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWRcIjtcbiAgICB9XG5cbiAgICBpZiAobmV3UGFzc3dvcmQgIT09IGNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gXCJOZXcgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiO1xuICAgIH1cblxuICAgIGlmIChuZXdQYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgICAgIHJldHVybiBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzXCI7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnF1ZXJ5LnVzZXJzLmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiBlcSh1c2Vycy5pZCwgc2Vzc2lvbi51c2VyLmlkKSxcbiAgICB9KTtcblxuICAgIGlmICghdXNlcikgcmV0dXJuIFwiVXNlciBub3QgZm91bmRcIjtcblxuICAgIGNvbnN0IGlzTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShjdXJyZW50UGFzc3dvcmQsIHVzZXIucGFzc3dvcmRIYXNoKTtcbiAgICBpZiAoIWlzTWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIFwiSW5jb3JyZWN0IGN1cnJlbnQgcGFzc3dvcmRcIjtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKG5ld1Bhc3N3b3JkLCAxMCk7XG5cbiAgICBhd2FpdCBkYi51cGRhdGUodXNlcnMpXG4gICAgICAgIC5zZXQoeyBwYXNzd29yZEhhc2g6IGhhc2hlZFBhc3N3b3JkIH0pXG4gICAgICAgIC53aGVyZShlcSh1c2Vycy5pZCwgc2Vzc2lvbi51c2VyLmlkKSk7XG5cbiAgICByZXR1cm4gXCJTdWNjZXNzXCI7XG59XG5cbi8vIC0tLSBDaGlsZCBBY3Rpb25zIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNoaWxkKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBQ1RJVkVcIiB8IFwiSU5BQ1RJVkVcIikgfHwgXCJBQ1RJVkVcIjtcbiAgICBjb25zdCBkb2IgPSAoZm9ybURhdGEuZ2V0KFwiZG9iXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBnZW5kZXIgPSAoZm9ybURhdGEuZ2V0KFwiZ2VuZGVyXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBkaWFnbm9zaXMgPSAoZm9ybURhdGEuZ2V0KFwiZGlhZ25vc2lzXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBwYXJlbnRJZCA9IChmb3JtRGF0YS5nZXQoXCJwYXJlbnRJZFwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG5cbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoY2hpbGRyZW4pLnZhbHVlcyh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZG9iLFxuICAgICAgICBnZW5kZXIsXG4gICAgICAgIGRpYWdub3NpcyxcbiAgICAgICAgcGFyZW50SWRcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2NoaWxkcmVuc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNoaWxkIGNyZWF0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2hpbGQoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGRvYiA9IChmb3JtRGF0YS5nZXQoXCJkb2JcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGdlbmRlciA9IChmb3JtRGF0YS5nZXQoXCJnZW5kZXJcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGRpYWdub3NpcyA9IChmb3JtRGF0YS5nZXQoXCJkaWFnbm9zaXNcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHBhcmVudElkID0gKGZvcm1EYXRhLmdldChcInBhcmVudElkXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcblxuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShjaGlsZHJlbikuc2V0KHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkb2IsXG4gICAgICAgIGdlbmRlcixcbiAgICAgICAgZGlhZ25vc2lzLFxuICAgICAgICBwYXJlbnRJZFxuICAgIH0pLndoZXJlKGVxKGNoaWxkcmVuLmlkLCBpZCkpO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvY2hpbGRyZW5zXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2hpbGQgdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDaGlsZChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkYi5kZWxldGUoY2hpbGRyZW4pLndoZXJlKGVxKGNoaWxkcmVuLmlkLCBpZCkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYW5ub3QgZGVsZXRlIGNoaWxkIGluIHVzZVwiIH07XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDaGlsZCBkZWxldGVkXCIgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoicVJBZ1pzQiJ9
}),
"[project]/components/SearchableSelect.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>SearchableSelect
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/check.js [app-ssr] (ecmascript) <export default as Check>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/chevrons-up-down.js [app-ssr] (ecmascript) <export default as ChevronsUpDown>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/search.js [app-ssr] (ecmascript) <export default as Search>");
"use client";
;
;
;
function SearchableSelect({ options, value, onChange, placeholder = "Select option", className = "", required = false }) {
    const [isOpen, setIsOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [query, setQuery] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const containerRef = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useRef"])(null);
    const selectedOption = options.find((opt)=>opt.id === value);
    // Close on click outside
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        const handleClickOutside = (event)=>{
            if (containerRef.current && !containerRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };
        document.addEventListener("mousedown", handleClickOutside);
        return ()=>document.removeEventListener("mousedown", handleClickOutside);
    }, []);
    const filteredOptions = query === "" ? options : options.filter((opt)=>opt.name.toLowerCase().includes(query.toLowerCase()));
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: `relative ${className}`,
        ref: containerRef,
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                type: "button",
                onClick: ()=>setIsOpen(!isOpen),
                className: "w-full px-4 py-1 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all flex items-center justify-between text-left",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                        className: `block truncate ${!selectedOption ? "text-gray-400 dark:text-gray-500" : "text-gray-900 dark:text-white"}`,
                        children: selectedOption ? selectedOption.name : placeholder
                    }, void 0, false, {
                        fileName: "[project]/components/SearchableSelect.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$chevrons$2d$up$2d$down$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__ChevronsUpDown$3e$__["ChevronsUpDown"], {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
            isOpen && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "absolute z-10 w-full mt-1 bg-white dark:bg-neutral-900 rounded-xl shadow-lg border border-gray-100 dark:border-neutral-800 max-h-60 overflow-hidden flex flex-col animate-in fade-in zoom-in-95 duration-100",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "p-2 border-b border-gray-100 dark:border-neutral-800 sticky top-0 bg-white dark:bg-neutral-900",
                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "relative",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$search$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Search$3e$__["Search"], {
                                    className: "absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400"
                                }, void 0, false, {
                                    fileName: "[project]/components/SearchableSelect.tsx",
                                    lineNumber: 80,
                                    columnNumber: 29
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("ul", {
                        className: "overflow-y-auto flex-1 p-1",
                        children: filteredOptions.length === 0 ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                            className: "px-4 py-2 text-sm text-gray-500 dark:text-gray-400 text-center",
                            children: "No results found."
                        }, void 0, false, {
                            fileName: "[project]/components/SearchableSelect.tsx",
                            lineNumber: 94,
                            columnNumber: 29
                        }, this) : filteredOptions.map((option)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("li", {
                                className: `relative flex items-center justify-between px-3 py-2 rounded-lg cursor-pointer text-sm transition-colors ${value === option.id ? "bg-blue-50 dark:bg-blue-900/20 text-blue-600 dark:text-blue-400 font-medium" : "text-gray-700 dark:text-gray-300 hover:bg-gray-100 dark:hover:bg-neutral-800"}`,
                                onClick: ()=>{
                                    onChange(option.id);
                                    setIsOpen(false);
                                    setQuery("");
                                },
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        children: option.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/SearchableSelect.tsx",
                                        lineNumber: 111,
                                        columnNumber: 37
                                    }, this),
                                    value === option.id && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$check$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Check$3e$__["Check"], {
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
}),
"[project]/components/ExpenseModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ExpenseModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__ = __turbopack_context__.i("[project]/node_modules/date-fns/format.js [app-ssr] (ecmascript) <locals>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$652bc2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:652bc2 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$43da31__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:43da31 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchableSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/SearchableSelect.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
;
function ExpenseModal({ isOpen, onClose, expense, categories = [], familyChildren = [], defaultType = "EXPENSE", defaultChildId = "" }) {
    const activeChildren = familyChildren.filter((c)=>c.status !== "INACTIVE");
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const [error, setError] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    // Internal state for form values
    const [amount, setAmount] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [description, setDescription] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [date, setDate] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), "yyyy-MM-dd"));
    const [type, setType] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("EXPENSE");
    const [categoryId, setCategoryId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    const [childId, setChildId] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])("");
    // Portal mount state
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    // Initialize/Reset form
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        if (isOpen) {
            setError(null); // Clear any previous errors
            if (expense) {
                setAmount(expense.amount.toString());
                setDescription(expense.description || "");
                setDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(expense.date), "yyyy-MM-dd"));
                setType(expense.type || "EXPENSE");
                // Map category name/ID to actual ID from options
                const catMatch = categories.find((c)=>c.id === expense.categoryId || c.name === expense.category);
                setCategoryId(catMatch ? catMatch.id : "");
                setChildId(expense.childId || "");
            } else {
                setAmount("");
                setDescription("");
                setDate((0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$date$2d$fns$2f$format$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$locals$3e$__["format"])(new Date(), "yyyy-MM-dd"));
                setType(defaultType);
                setCategoryId("");
                setChildId(defaultChildId);
            }
        }
    }, [
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
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$43da31__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateExpense"])(expense.id, formData);
            } else {
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$652bc2__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["addExpenseAction"])(undefined, formData);
            }
            if (result?.message.includes("added") || result?.message.includes("updated")) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(result.message);
                onClose();
            } else {
                setError(result?.message || "Error saving expense");
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(result?.message || "Error saving expense");
            }
        });
    };
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["Fragment"], {
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",
            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "bg-white dark:bg-neutral-900 rounded-2xl w-full max-w-md shadow-2xl animate-in zoom-in-95 duration-200 border border-gray-100 dark:border-neutral-800 max-h-[90vh] overflow-y-auto custom-scrollbar",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-6 border-b border-gray-100 dark:border-neutral-800",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                                className: "text-xl font-bold text-gray-900 dark:text-white",
                                children: expense ? type === "EXPENSE" ? "Edit Expense" : "Edit Income" : "Add Transaction"
                            }, void 0, false, {
                                fileName: "[project]/components/ExpenseModal.tsx",
                                lineNumber: 115,
                                columnNumber: 29
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                onClick: onClose,
                                className: "p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full transition-colors",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                        onSubmit: handleSubmit,
                        className: "p-6 space-y-4",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex bg-gray-100 dark:bg-neutral-800 p-1 rounded-xl mb-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setType("EXPENSE"),
                                        className: `flex-1 py-2 text-sm font-medium rounded-lg transition-all ${type === "EXPENSE" ? "bg-white dark:bg-neutral-700 text-red-600 shadow-sm" : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"} `,
                                        children: "Expense"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExpenseModal.tsx",
                                        lineNumber: 126,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "button",
                                        onClick: ()=>setType("INCOME"),
                                        className: `flex-1 py-2 text-sm font-medium rounded-lg transition-all ${type === "INCOME" ? "bg-white dark:bg-neutral-700 text-green-600 shadow-sm" : "text-gray-500 hover:text-gray-900 dark:hover:text-gray-300"} `,
                                        children: "Income"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExpenseModal.tsx",
                                        lineNumber: 133,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                        children: "Amount"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExpenseModal.tsx",
                                        lineNumber: 150,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: "relative",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                                className: "absolute left-3 top-1/2 -translate-y-1/2 text-gray-500",
                                                children: "₹"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExpenseModal.tsx",
                                                lineNumber: 152,
                                                columnNumber: 37
                                            }, this),
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                        children: "Category"
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExpenseModal.tsx",
                                        lineNumber: 168,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("select", {
                                        name: "categoryId",
                                        value: categoryId,
                                        required: true,
                                        onChange: (e)=>setCategoryId(e.target.value),
                                        className: "w-full px-4 py-1 bg-gray-50 dark:bg-neutral-800 border border-gray-200 dark:border-neutral-700 rounded-xl focus:ring-2 focus:ring-blue-500 focus:outline-none transition-all appearance-none",
                                        children: [
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
                                                value: "",
                                                disabled: true,
                                                children: "Select Category"
                                            }, void 0, false, {
                                                fileName: "[project]/components/ExpenseModal.tsx",
                                                lineNumber: 176,
                                                columnNumber: 37
                                            }, this),
                                            categories.map((c)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("option", {
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
                            (type === "INCOME" || type === "DUE") && activeChildren.length > 0 && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                        children: [
                                            "Child ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$SearchableSelect$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                        className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                        children: [
                                            "Description ",
                                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "grid grid-cols-2 gap-4",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                    children: [
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                            className: "block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1",
                                            children: "Date"
                                        }, void 0, false, {
                                            fileName: "[project]/components/ExpenseModal.tsx",
                                            lineNumber: 212,
                                            columnNumber: 37
                                        }, this),
                                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "pt-4",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        type: "submit",
                                        disabled: isPending,
                                        className: "w-full py-3.5 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium transition-colors shadow-lg shadow-blue-600/20 disabled:opacity-50",
                                        children: isPending ? "Saving..." : expense ? "Save Changes" : `Add ${type === "EXPENSE" ? "Expense" : type === "INCOME" ? "Income" : "Due"} `
                                    }, void 0, false, {
                                        fileName: "[project]/components/ExpenseModal.tsx",
                                        lineNumber: 225,
                                        columnNumber: 33
                                    }, this),
                                    error && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
}),
"[project]/components/AppLayout.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>AppLayout
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/lib/context.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/menu.js [app-ssr] (ecmascript) <export default as Menu>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/receipt.js [app-ssr] (ecmascript) <export default as Receipt>");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/Sidebar.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ExpenseModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ExpenseModal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function AppLayout({ children, categories = [], familyChildren = [], role = "ADMIN" }) {
    const [mobileMenuOpen, setMobileMenuOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isAddExpenseOpen, setIsAddExpenseOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const { currentUser } = (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$context$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useExpenses"])();
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "h-screen overflow-hidden flex flex-col md:flex-row",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ExpenseModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: isAddExpenseOpen,
                onClose: ()=>setIsAddExpenseOpen(false),
                categories: categories,
                familyChildren: familyChildren
            }, void 0, false, {
                fileName: "[project]/components/AppLayout.tsx",
                lineNumber: 22,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "md:hidden flex items-center justify-between p-4 bg-white dark:bg-neutral-900 border-b border-gray-200 dark:border-neutral-800 sticky top-0 z-50",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center gap-3",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "w-8 h-8 rounded-lg bg-gradient-to-br from-amber-400 to-orange-500 flex items-center justify-center shadow-orange-500/20 shadow-lg",
                                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$receipt$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Receipt$3e$__["Receipt"], {
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
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h1", {
                                        className: "text-lg font-bold bg-gradient-to-r from-amber-500 to-orange-600 bg-clip-text text-transparent leading-none",
                                        children: "Wonderbees"
                                    }, void 0, false, {
                                        fileName: "[project]/components/AppLayout.tsx",
                                        lineNumber: 31,
                                        columnNumber: 25
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
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
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setMobileMenuOpen(!mobileMenuOpen),
                        className: "p-2 rounded-lg hover:bg-gray-100 dark:hover:bg-neutral-800",
                        children: mobileMenuOpen ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {}, void 0, false, {
                            fileName: "[project]/components/AppLayout.tsx",
                            lineNumber: 38,
                            columnNumber: 39
                        }, this) : /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$menu$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Menu$3e$__["Menu"], {}, void 0, false, {
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
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$Sidebar$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: mobileMenuOpen,
                onClose: ()=>setMobileMenuOpen(false),
                onAddExpense: ()=>setIsAddExpenseOpen(true),
                role: role
            }, void 0, false, {
                fileName: "[project]/components/AppLayout.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("main", {
                className: "flex-1 overflow-y-auto p-2 md:p-8 bg-gray-50/50 dark:bg-neutral-950",
                children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
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
}),
"[project]/lib/data:46d533 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"40e3cf4e67148ac4b715a623ba6bd148fe9dae24e6":"deleteCategory"},"lib/actions.ts",""] */ __turbopack_context__.s([
    "deleteCategory",
    ()=>deleteCategory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var deleteCategory = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("40e3cf4e67148ac4b715a623ba6bd148fe9dae24e6", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "deleteCategory"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIkAvYXV0aFwiO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYlwiO1xuaW1wb3J0IHsgdXNlcnMsIGV4cGVuc2VzLCBjYXRlZ29yaWVzLCBjaGlsZHJlbiwgdGhlcmFwaWVzLCBzZXNzaW9ucyB9IGZyb20gXCIuL2RiL3NjaGVtYVwiOyAvLyBSZW1vdmVkIGZhbWlsaWVzLCBzdGFmZnMsIGJ1ZGdldHNcblxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IGVxLCBkZXNjLCBhbmQgfSBmcm9tIFwiZHJpenpsZS1vcm1cIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRoZW50aWNhdGUoXG4gICAgcHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhLFxuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuICAgICAgICBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7IC4uLmNyZWRlbnRpYWxzLCByZWRpcmVjdFRvOiBcIi9kYXNoYm9hcmRcIiB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJDcmVkZW50aWFsc1NpZ25pblwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNyZWRlbnRpYWxzLlwiO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXRBY3Rpb24oKSB7XG4gICAgYXdhaXQgc2lnbk91dCh7IHJlZGlyZWN0VG86IFwiL1wiIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIocHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcblxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFuYW1lKSByZXR1cm4gXCJNaXNzaW5nIGZpZWxkc1wiO1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4gXCJVc2VyIGFscmVhZHkgZXhpc3RzXCI7XG5cbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG5cbiAgICAvLyBEZWZhdWx0IHJvbGU6IFBBUkVOVD8gT3IgQURNSU4gZm9yIGZpcnN0IHVzZXI/IFxuICAgIC8vIExvZ2ljOiBJZiBubyB1c2VycyBleGlzdCwgZmlyc3QgaXMgQURNSU4uIE90aGVyd2lzZSBQQVJFTlQuXG4gICAgLy8gRm9yIG5vdywgbGV0J3MgaGFyZGNvZGUgUEFSRU5UIHVubGVzcyBleHBsaWNpdGx5IHNldCBlbHNld2hlcmUgdXN1YWxseS5cbiAgICAvLyBCdXQgZm9yIHRoaXMgXCJSZXZhbXBcIiBtYXliZSB3ZSBhc3N1bWUgQWRtaW4gY3JlYXRlcyB1c2Vycz9cbiAgICAvLyBJZiB0aGlzIGlzIHB1YmxpYyByZWdpc3RyYXRpb24sIFBBUkVOVCBpcyBzYWZlci5cblxuICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IGRiLnNlbGVjdCgpLmZyb20odXNlcnMpLnRoZW4ocmVzID0+IHJlcy5sZW5ndGgpO1xuICAgIGNvbnN0IHJvbGUgPSB1c2VyQ291bnQgPT09IDAgPyBcIkFETUlOXCIgOiBcIlBBUkVOVFwiO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZTogcm9sZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFwiU3VjY2Vzc1wiO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgICAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICAgICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgICAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKSBhcyBzdHJpbmc7XG4gICAgICAgIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoXCJyb2xlXCIpIGFzIFwiQURNSU5cIiB8IFwiVEhFUkFQSVNUXCIgfCBcIlBBUkVOVFwiO1xuICAgICAgICBjb25zdCBxdWFsaWZpY2F0aW9uID0gKGZvcm1EYXRhLmdldChcInF1YWxpZmljYXRpb25cIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgICAgIGlmICghbmFtZSB8fCAhZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFyb2xlKSByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgZmllbGRzXCIgfTtcblxuICAgICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBkYi5xdWVyeS51c2Vycy5maW5kRmlyc3Qoe1xuICAgICAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChleGlzdGluZ1VzZXIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVXNlciBhbHJlYWR5IGV4aXN0c1wiIH07XG5cbiAgICAgICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuXG4gICAgICAgIGF3YWl0IGRiLmluc2VydCh1c2VycykudmFsdWVzKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkSGFzaDogaGFzaGVkUGFzc3dvcmQsXG4gICAgICAgICAgICByb2xlLFxuICAgICAgICAgICAgcXVhbGlmaWNhdGlvbixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVXNlciBjcmVhdGVkXCIgfTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDcmVhdGUgVXNlciBFcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGNyZWF0ZSB1c2VyXCIgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRFeHBlbnNlQWN0aW9uKHByZXZTdGF0ZTogYW55LCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuICAgIC8vIE9ubHkgQWRtaW4gY2FuIGFkZCBleHBlbnNlcz8gT3IgVGhlcmFwaXN0P1xuICAgIC8vIExldCdzIGFsbG93IEFkbWluIGFuZCBtYXliZSBUaGVyYXBpc3QuXG4gICAgaWYgKHNlc3Npb24udXNlci5yb2xlID09PSBcIlBBUkVOVFwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cblxuICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlRmxvYXQoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpIGFzIHN0cmluZyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSAoZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikgYXMgc3RyaW5nKSB8fCBcIlwiO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0eXBlID0gKGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgXCJFWFBFTlNFXCIgfCBcIklOQ09NRVwiIHwgXCJEVUVcIikgfHwgXCJFWFBFTlNFXCI7XG4gICAgY29uc3QgY2hpbGRJZCA9IChmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICAvLyBzdGFmZklkIHJlbW92ZWQuIHR5cGUgaXMgZW5vdWdoPyBPciBtYXliZSByZWNvcmRlZEJ5P1xuXG5cbiAgICBpZiAoIWFtb3VudCB8fCAhZGF0ZVN0cikge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgZmllbGRzXCIgfTtcbiAgICB9XG5cbiAgICBpZiAoIWZvcm1EYXRhLmdldChcImNhdGVnb3J5SWRcIikpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYXRlZ29yeSBpcyByZXF1aXJlZFwiIH07XG4gICAgfVxuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KGV4cGVuc2VzKS52YWx1ZXMoe1xuICAgICAgICAvLyB1c2VySWQ6IHNlc3Npb24udXNlci5pZCwgLy8gUmVtb3ZlZCB1c2VySWQgY29uc3RyYWludCBmcm9tIHNjaGVtYT8gTm8sIGtlZXAgaXQgYXMgJ3JlY29yZGVkIGJ5JyBpZiBuZWVkZWQ/IFxuICAgICAgICAvLyBTY2hlbWEgZGVmaW5pdGlvbjogXCJ1c2VySWRcIiByZW1vdmVkPyBMZXQncyBjaGVjayBzY2hlbWEudHMgY29udGVudCBJIHdyb3RlLlxuICAgICAgICAvLyBJIGtlcHQgJ2V4cGVuc2UnIHRhYmxlIGJ1dCByZWZhY3RvcmluZy5cbiAgICAgICAgLy8gV2FpdCwgSSBjaGFuZ2VkICd1c2VySWQnIHRvICdyZWNvcmRlZEJ5JyAob3B0aW9uYWwpIGluIG15IHRob3VnaHQsIGJ1dCBsZXQncyBjaGVjayB3aGF0IEkgYWN0dWFsbHkgd3JvdGUuXG4gICAgICAgIC8vIEkgd3JvdGU6IHJlY29yZGVkQnk6IHV1aWQoXCJyZWNvcmRlZF9ieVwiKS5yZWZlcmVuY2VzKCgpID0+IHVzZXJzLmlkKSwgLy8gQWRtaW4gd2hvIHJlY29yZGVkIGl0XG5cbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGFtb3VudDogYW1vdW50LnRvU3RyaW5nKCksXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGVTdHIpLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBjYXRlZ29yeUlkOiAoZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlJZFwiKSBhcyBzdHJpbmcpLFxuICAgICAgICBjaGlsZElkOiBjaGlsZElkLFxuICAgICAgICByZWNvcmRlZEJ5OiBzZXNzaW9uLnVzZXIuaWRcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRyYW5zYWN0aW9uIGFkZGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1hcmtEdWVBc1BhaWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgZXhwZW5zZSA9IGF3YWl0IGRiLnF1ZXJ5LmV4cGVuc2VzLmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiBlcShleHBlbnNlcy5pZCwgaWQpXG4gICAgfSk7XG5cbiAgICBpZiAoIWV4cGVuc2UpIHJldHVybiB7IG1lc3NhZ2U6IFwiUmVjb3JkIG5vdCBmb3VuZFwiIH07XG5cbiAgICBhd2FpdCBkYi51cGRhdGUoZXhwZW5zZXMpLnNldCh7XG4gICAgICAgIHR5cGU6IFwiSU5DT01FXCJcbiAgICB9KS53aGVyZShlcShleHBlbnNlcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlBheW1lbnQgbWFya2VkIGFzIHBhaWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVXNlcih1c2VySWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgaWYgKHVzZXJJZCA9PT0gc2Vzc2lvbi51c2VyLmlkKSByZXR1cm4geyBtZXNzYWdlOiBcIkNhbm5vdCBkZWxldGUgeW91cnNlbGZcIiB9O1xuXG4gICAgYXdhaXQgZGIuZGVsZXRlKHVzZXJzKS53aGVyZShlcSh1c2Vycy5pZCwgdXNlcklkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdXNlcnNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJVc2VyIGRlbGV0ZWRcIiB9O1xufVxuXG5cbi8vIC0tLSBUaGVyYXB5IEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGhlcmFweShmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmcpIHx8IFwiXCI7XG4gICAgY29uc3QgcHJpY2UgPSAoZm9ybURhdGEuZ2V0KFwicHJpY2VcIikgYXMgc3RyaW5nKSB8fCBcIjBcIjtcbiAgICBjb25zdCBzdGF0dXMgPSAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIFwiQUNUSVZFXCIgfCBcIklOQUNUSVZFXCIpIHx8IFwiQUNUSVZFXCI7XG4gICAgY29uc3QgZHVyYXRpb24gPSAoZm9ybURhdGEuZ2V0KFwiZGVmYXVsdER1cmF0aW9uTWludXRlc1wiKSBhcyBzdHJpbmcpIHx8IFwiNDVcIjtcblxuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydCh0aGVyYXBpZXMpLnZhbHVlcyh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBjaGFyZ2VQZXJTZXNzaW9uOiBwcmljZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkZWZhdWx0RHVyYXRpb25NaW51dGVzOiBwYXJzZUludChkdXJhdGlvbiksXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi90aGVyYXBpZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJUaGVyYXB5IHNlcnZpY2UgY3JlYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVUaGVyYXB5KGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBwcmljZSA9IChmb3JtRGF0YS5nZXQoXCJwcmljZVwiKSBhcyBzdHJpbmcpIHx8IFwiMFwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBQ1RJVkVcIiB8IFwiSU5BQ1RJVkVcIikgfHwgXCJBQ1RJVkVcIjtcbiAgICBjb25zdCBkdXJhdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZWZhdWx0RHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZykgfHwgXCI0NVwiO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKHRoZXJhcGllcykuc2V0KHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNoYXJnZVBlclNlc3Npb246IHByaWNlLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRlZmF1bHREdXJhdGlvbk1pbnV0ZXM6IHBhcnNlSW50KGR1cmF0aW9uKSxcbiAgICB9KS53aGVyZShlcSh0aGVyYXBpZXMuaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi90aGVyYXBpZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJUaGVyYXB5IHNlcnZpY2UgdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUaGVyYXB5KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRiLmRlbGV0ZSh0aGVyYXBpZXMpLndoZXJlKGVxKHRoZXJhcGllcy5pZCwgaWQpKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvdGhlcmFwaWVzXCIpO1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSBkZWxldGVkXCIgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkZhaWxlZCB0byBkZWxldGUgdGhlcmFweS4gSXQgbWlnaHQgYmUgbGlua2VkIHRvIGV4aXN0aW5nIHNlc3Npb25zLlwiIH07XG4gICAgfVxufVxuXG5cbi8vIC0tLSBTZXNzaW9uIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlU2Vzc2lvbihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIC8vIEFkbWluIG9yIFRoZXJhcGlzdCBjYW4gY3JlYXRlIHNlc3Npb25zXG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgPT09IFwiUEFSRU5UXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IGNoaWxkSWQgPSBmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXBpc3RJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcGlzdElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXB5SWQgPSBmb3JtRGF0YS5nZXQoXCJ0aGVyYXB5SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBkdXJhdGlvbiA9IGZvcm1EYXRhLmdldChcImR1cmF0aW9uTWludXRlc1wiKSBhcyBzdHJpbmcgfHwgXCI0NVwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJTQ0hFRFVMRURcIiB8IFwiQ09NUExFVEVEXCIgfCBcIkNBTkNFTExFRFwiIHwgXCJNSVNTRURcIikgfHwgXCJTQ0hFRFVMRURcIjtcblxuICAgIGlmICghY2hpbGRJZCB8fCAhdGhlcmFwaXN0SWQgfHwgIXRoZXJhcHlJZCB8fCAhZGF0ZVN0cikge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgcmVxdWlyZWQgZmllbGRzXCIgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoc2Vzc2lvbnMpLnZhbHVlcyh7XG4gICAgICAgIGNoaWxkSWQsXG4gICAgICAgIHRoZXJhcGlzdElkLFxuICAgICAgICB0aGVyYXB5SWQsXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGVTdHIpLFxuICAgICAgICBkdXJhdGlvbk1pbnV0ZXM6IHBhcnNlSW50KGR1cmF0aW9uKSxcbiAgICAgICAgc3RhdHVzLFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2NoZWR1bGVcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJTZXNzaW9uIHNjaGVkdWxlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTZXNzaW9uKGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgPT09IFwiUEFSRU5UXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IGNoaWxkSWQgPSBmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXBpc3RJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcGlzdElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXB5SWQgPSBmb3JtRGF0YS5nZXQoXCJ0aGVyYXB5SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBkdXJhdGlvbiA9IGZvcm1EYXRhLmdldChcImR1cmF0aW9uTWludXRlc1wiKSBhcyBzdHJpbmcgfHwgXCI0NVwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJTQ0hFRFVMRURcIiB8IFwiQ09NUExFVEVEXCIgfCBcIkNBTkNFTExFRFwiIHwgXCJNSVNTRURcIikgfHwgXCJTQ0hFRFVMRURcIjtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShzZXNzaW9ucykuc2V0KHtcbiAgICAgICAgY2hpbGRJZCxcbiAgICAgICAgdGhlcmFwaXN0SWQsXG4gICAgICAgIHRoZXJhcHlJZCxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGR1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgICAgICBzdGF0dXMsXG4gICAgfSkud2hlcmUoZXEoc2Vzc2lvbnMuaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVTZXNzaW9uKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmRlbGV0ZShzZXNzaW9ucykud2hlcmUoZXEoc2Vzc2lvbnMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2NoZWR1bGVcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJTZXNzaW9uIGRlbGV0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlcih1c2VySWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiICYmIHNlc3Npb24/LnVzZXI/LmlkICE9PSB1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCByb2xlID0gZm9ybURhdGEuZ2V0KFwicm9sZVwiKSBhcyBcIkFETUlOXCIgfCBcIlRIRVJBUElTVFwiIHwgXCJQQVJFTlRcIjtcbiAgICBjb25zdCBxdWFsaWZpY2F0aW9uID0gKGZvcm1EYXRhLmdldChcInF1YWxpZmljYXRpb25cIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwicGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCkgcmV0dXJuIHsgbWVzc2FnZTogXCJNaXNzaW5nIGZpZWxkc1wiIH07XG5cbiAgICBjb25zdCB1cGRhdGVEYXRhOiBhbnkgPSB7IG5hbWUsIGVtYWlsLCBxdWFsaWZpY2F0aW9uIH07XG4gICAgaWYgKHNlc3Npb24udXNlci5yb2xlID09PSBcIkFETUlOXCIpIHtcbiAgICAgICAgaWYgKHJvbGUpIHVwZGF0ZURhdGEucm9sZSA9IHJvbGU7XG4gICAgICAgIGlmIChwYXNzd29yZCAmJiBwYXNzd29yZC50cmltKCkgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHVwZGF0ZURhdGEucGFzc3dvcmRIYXNoID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGF3YWl0IGRiLnVwZGF0ZSh1c2VycylcbiAgICAgICAgLnNldCh1cGRhdGVEYXRhKVxuICAgICAgICAud2hlcmUoZXEodXNlcnMuaWQsIHVzZXJJZCkpO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJVc2VyIHVwZGF0ZWRcIiB9O1xufVxuXG4vLyAtLS0gQ2F0ZWdvcnkgQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yeShmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoY2F0ZWdvcmllcyBhcyBhbnkpLnZhbHVlcyh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIC8vIGZhbWlseUlkIHJlbW92ZWRcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2F0ZWdvcnkgY3JlYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXRlZ29yeShpZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi51cGRhdGUoY2F0ZWdvcmllcykuc2V0KHsgbmFtZSB9KS53aGVyZShlcShjYXRlZ29yaWVzLmlkLCBpZCkpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IHVwZGF0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2F0ZWdvcnkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGIuZGVsZXRlKGNhdGVnb3JpZXMpLndoZXJlKGVxKGNhdGVnb3JpZXMuaWQsIGlkKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhbm5vdCBkZWxldGUgY2F0ZWdvcnkgaW4gdXNlXCIgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZXhwZW5zZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYXRlZ29yeSBkZWxldGVkXCIgfTtcbn1cblxuLy8gLS0tIEV4cGVuc2UgQWN0aW9ucyAtLS0gKFVwZGF0ZS9EZWxldGUpXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRXhwZW5zZShpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICAvLyBQYXJlbnQgY2FuJ3QgZGVsZXRlPyBZZXMuXG5cbiAgICBhd2FpdCBkYi5kZWxldGUoZXhwZW5zZXMpLndoZXJlKGVxKGV4cGVuc2VzLmlkLCBpZCkpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkV4cGVuc2UgZGVsZXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFeHBlbnNlKGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgYW1vdW50ID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikgYXMgc3RyaW5nKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmcpIHx8IFwiXCI7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGNhdGVnb3J5SWQgPSBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeUlkXCIpIGFzIHN0cmluZztcblxuICAgIGlmICghYW1vdW50IHx8ICFkYXRlU3RyIHx8ICFjYXRlZ29yeUlkKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGF3YWl0IGRiLnVwZGF0ZShleHBlbnNlcykuc2V0KHtcbiAgICAgICAgYW1vdW50OiBhbW91bnQudG9TdHJpbmcoKSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGVTdHIpLFxuICAgICAgICBjYXRlZ29yeUlkOiBjYXRlZ29yeUlkLFxuICAgICAgICBjaGlsZElkOiAoZm9ybURhdGEuZ2V0KFwiY2hpbGRJZFwiKSBhcyBzdHJpbmcpIHx8IG51bGwsXG4gICAgICAgIHR5cGU6IChmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpIGFzIFwiRVhQRU5TRVwiIHwgXCJJTkNPTUVcIiB8IFwiRFVFXCIpIHx8IFwiRVhQRU5TRVwiLFxuXG4gICAgfSkud2hlcmUoZXEoZXhwZW5zZXMuaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZXhwZW5zZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJUcmFuc2FjdGlvbiB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVBhc3N3b3JkKHByZXZTdGF0ZTogYW55LCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHJldHVybiBcIlVuYXV0aG9yaXplZFwiO1xuXG4gICAgY29uc3QgY3VycmVudFBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwiY3VycmVudFBhc3N3b3JkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBuZXdQYXNzd29yZCA9IGZvcm1EYXRhLmdldChcIm5ld1Bhc3N3b3JkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBjb25maXJtUGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJjb25maXJtUGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuXG4gICAgaWYgKCFjdXJyZW50UGFzc3dvcmQgfHwgIW5ld1Bhc3N3b3JkIHx8ICFjb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIFwiQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWRcIjtcbiAgICB9XG5cbiAgICBpZiAobmV3UGFzc3dvcmQgIT09IGNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gXCJOZXcgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiO1xuICAgIH1cblxuICAgIGlmIChuZXdQYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgICAgIHJldHVybiBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzXCI7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnF1ZXJ5LnVzZXJzLmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiBlcSh1c2Vycy5pZCwgc2Vzc2lvbi51c2VyLmlkKSxcbiAgICB9KTtcblxuICAgIGlmICghdXNlcikgcmV0dXJuIFwiVXNlciBub3QgZm91bmRcIjtcblxuICAgIGNvbnN0IGlzTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShjdXJyZW50UGFzc3dvcmQsIHVzZXIucGFzc3dvcmRIYXNoKTtcbiAgICBpZiAoIWlzTWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIFwiSW5jb3JyZWN0IGN1cnJlbnQgcGFzc3dvcmRcIjtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKG5ld1Bhc3N3b3JkLCAxMCk7XG5cbiAgICBhd2FpdCBkYi51cGRhdGUodXNlcnMpXG4gICAgICAgIC5zZXQoeyBwYXNzd29yZEhhc2g6IGhhc2hlZFBhc3N3b3JkIH0pXG4gICAgICAgIC53aGVyZShlcSh1c2Vycy5pZCwgc2Vzc2lvbi51c2VyLmlkKSk7XG5cbiAgICByZXR1cm4gXCJTdWNjZXNzXCI7XG59XG5cbi8vIC0tLSBDaGlsZCBBY3Rpb25zIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNoaWxkKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBQ1RJVkVcIiB8IFwiSU5BQ1RJVkVcIikgfHwgXCJBQ1RJVkVcIjtcbiAgICBjb25zdCBkb2IgPSAoZm9ybURhdGEuZ2V0KFwiZG9iXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBnZW5kZXIgPSAoZm9ybURhdGEuZ2V0KFwiZ2VuZGVyXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBkaWFnbm9zaXMgPSAoZm9ybURhdGEuZ2V0KFwiZGlhZ25vc2lzXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBwYXJlbnRJZCA9IChmb3JtRGF0YS5nZXQoXCJwYXJlbnRJZFwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG5cbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoY2hpbGRyZW4pLnZhbHVlcyh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZG9iLFxuICAgICAgICBnZW5kZXIsXG4gICAgICAgIGRpYWdub3NpcyxcbiAgICAgICAgcGFyZW50SWRcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2NoaWxkcmVuc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNoaWxkIGNyZWF0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2hpbGQoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGRvYiA9IChmb3JtRGF0YS5nZXQoXCJkb2JcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGdlbmRlciA9IChmb3JtRGF0YS5nZXQoXCJnZW5kZXJcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGRpYWdub3NpcyA9IChmb3JtRGF0YS5nZXQoXCJkaWFnbm9zaXNcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHBhcmVudElkID0gKGZvcm1EYXRhLmdldChcInBhcmVudElkXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcblxuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShjaGlsZHJlbikuc2V0KHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkb2IsXG4gICAgICAgIGdlbmRlcixcbiAgICAgICAgZGlhZ25vc2lzLFxuICAgICAgICBwYXJlbnRJZFxuICAgIH0pLndoZXJlKGVxKGNoaWxkcmVuLmlkLCBpZCkpO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvY2hpbGRyZW5zXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2hpbGQgdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDaGlsZChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkYi5kZWxldGUoY2hpbGRyZW4pLndoZXJlKGVxKGNoaWxkcmVuLmlkLCBpZCkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYW5ub3QgZGVsZXRlIGNoaWxkIGluIHVzZVwiIH07XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDaGlsZCBkZWxldGVkXCIgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoic1JBbVhzQiJ9
}),
"[project]/lib/data:e0b409 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"4051eb6249c6b9954df60ec1412076bf7826d3e45d":"createCategory"},"lib/actions.ts",""] */ __turbopack_context__.s([
    "createCategory",
    ()=>createCategory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var createCategory = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("4051eb6249c6b9954df60ec1412076bf7826d3e45d", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "createCategory"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIkAvYXV0aFwiO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYlwiO1xuaW1wb3J0IHsgdXNlcnMsIGV4cGVuc2VzLCBjYXRlZ29yaWVzLCBjaGlsZHJlbiwgdGhlcmFwaWVzLCBzZXNzaW9ucyB9IGZyb20gXCIuL2RiL3NjaGVtYVwiOyAvLyBSZW1vdmVkIGZhbWlsaWVzLCBzdGFmZnMsIGJ1ZGdldHNcblxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IGVxLCBkZXNjLCBhbmQgfSBmcm9tIFwiZHJpenpsZS1vcm1cIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRoZW50aWNhdGUoXG4gICAgcHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhLFxuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuICAgICAgICBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7IC4uLmNyZWRlbnRpYWxzLCByZWRpcmVjdFRvOiBcIi9kYXNoYm9hcmRcIiB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJDcmVkZW50aWFsc1NpZ25pblwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNyZWRlbnRpYWxzLlwiO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXRBY3Rpb24oKSB7XG4gICAgYXdhaXQgc2lnbk91dCh7IHJlZGlyZWN0VG86IFwiL1wiIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIocHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcblxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFuYW1lKSByZXR1cm4gXCJNaXNzaW5nIGZpZWxkc1wiO1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4gXCJVc2VyIGFscmVhZHkgZXhpc3RzXCI7XG5cbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG5cbiAgICAvLyBEZWZhdWx0IHJvbGU6IFBBUkVOVD8gT3IgQURNSU4gZm9yIGZpcnN0IHVzZXI/IFxuICAgIC8vIExvZ2ljOiBJZiBubyB1c2VycyBleGlzdCwgZmlyc3QgaXMgQURNSU4uIE90aGVyd2lzZSBQQVJFTlQuXG4gICAgLy8gRm9yIG5vdywgbGV0J3MgaGFyZGNvZGUgUEFSRU5UIHVubGVzcyBleHBsaWNpdGx5IHNldCBlbHNld2hlcmUgdXN1YWxseS5cbiAgICAvLyBCdXQgZm9yIHRoaXMgXCJSZXZhbXBcIiBtYXliZSB3ZSBhc3N1bWUgQWRtaW4gY3JlYXRlcyB1c2Vycz9cbiAgICAvLyBJZiB0aGlzIGlzIHB1YmxpYyByZWdpc3RyYXRpb24sIFBBUkVOVCBpcyBzYWZlci5cblxuICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IGRiLnNlbGVjdCgpLmZyb20odXNlcnMpLnRoZW4ocmVzID0+IHJlcy5sZW5ndGgpO1xuICAgIGNvbnN0IHJvbGUgPSB1c2VyQ291bnQgPT09IDAgPyBcIkFETUlOXCIgOiBcIlBBUkVOVFwiO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZTogcm9sZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFwiU3VjY2Vzc1wiO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgICAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICAgICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgICAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKSBhcyBzdHJpbmc7XG4gICAgICAgIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoXCJyb2xlXCIpIGFzIFwiQURNSU5cIiB8IFwiVEhFUkFQSVNUXCIgfCBcIlBBUkVOVFwiO1xuICAgICAgICBjb25zdCBxdWFsaWZpY2F0aW9uID0gKGZvcm1EYXRhLmdldChcInF1YWxpZmljYXRpb25cIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgICAgIGlmICghbmFtZSB8fCAhZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFyb2xlKSByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgZmllbGRzXCIgfTtcblxuICAgICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBkYi5xdWVyeS51c2Vycy5maW5kRmlyc3Qoe1xuICAgICAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChleGlzdGluZ1VzZXIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVXNlciBhbHJlYWR5IGV4aXN0c1wiIH07XG5cbiAgICAgICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuXG4gICAgICAgIGF3YWl0IGRiLmluc2VydCh1c2VycykudmFsdWVzKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkSGFzaDogaGFzaGVkUGFzc3dvcmQsXG4gICAgICAgICAgICByb2xlLFxuICAgICAgICAgICAgcXVhbGlmaWNhdGlvbixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVXNlciBjcmVhdGVkXCIgfTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDcmVhdGUgVXNlciBFcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGNyZWF0ZSB1c2VyXCIgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRFeHBlbnNlQWN0aW9uKHByZXZTdGF0ZTogYW55LCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuICAgIC8vIE9ubHkgQWRtaW4gY2FuIGFkZCBleHBlbnNlcz8gT3IgVGhlcmFwaXN0P1xuICAgIC8vIExldCdzIGFsbG93IEFkbWluIGFuZCBtYXliZSBUaGVyYXBpc3QuXG4gICAgaWYgKHNlc3Npb24udXNlci5yb2xlID09PSBcIlBBUkVOVFwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cblxuICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlRmxvYXQoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpIGFzIHN0cmluZyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSAoZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikgYXMgc3RyaW5nKSB8fCBcIlwiO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0eXBlID0gKGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgXCJFWFBFTlNFXCIgfCBcIklOQ09NRVwiIHwgXCJEVUVcIikgfHwgXCJFWFBFTlNFXCI7XG4gICAgY29uc3QgY2hpbGRJZCA9IChmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICAvLyBzdGFmZklkIHJlbW92ZWQuIHR5cGUgaXMgZW5vdWdoPyBPciBtYXliZSByZWNvcmRlZEJ5P1xuXG5cbiAgICBpZiAoIWFtb3VudCB8fCAhZGF0ZVN0cikge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgZmllbGRzXCIgfTtcbiAgICB9XG5cbiAgICBpZiAoIWZvcm1EYXRhLmdldChcImNhdGVnb3J5SWRcIikpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYXRlZ29yeSBpcyByZXF1aXJlZFwiIH07XG4gICAgfVxuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KGV4cGVuc2VzKS52YWx1ZXMoe1xuICAgICAgICAvLyB1c2VySWQ6IHNlc3Npb24udXNlci5pZCwgLy8gUmVtb3ZlZCB1c2VySWQgY29uc3RyYWludCBmcm9tIHNjaGVtYT8gTm8sIGtlZXAgaXQgYXMgJ3JlY29yZGVkIGJ5JyBpZiBuZWVkZWQ/IFxuICAgICAgICAvLyBTY2hlbWEgZGVmaW5pdGlvbjogXCJ1c2VySWRcIiByZW1vdmVkPyBMZXQncyBjaGVjayBzY2hlbWEudHMgY29udGVudCBJIHdyb3RlLlxuICAgICAgICAvLyBJIGtlcHQgJ2V4cGVuc2UnIHRhYmxlIGJ1dCByZWZhY3RvcmluZy5cbiAgICAgICAgLy8gV2FpdCwgSSBjaGFuZ2VkICd1c2VySWQnIHRvICdyZWNvcmRlZEJ5JyAob3B0aW9uYWwpIGluIG15IHRob3VnaHQsIGJ1dCBsZXQncyBjaGVjayB3aGF0IEkgYWN0dWFsbHkgd3JvdGUuXG4gICAgICAgIC8vIEkgd3JvdGU6IHJlY29yZGVkQnk6IHV1aWQoXCJyZWNvcmRlZF9ieVwiKS5yZWZlcmVuY2VzKCgpID0+IHVzZXJzLmlkKSwgLy8gQWRtaW4gd2hvIHJlY29yZGVkIGl0XG5cbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGFtb3VudDogYW1vdW50LnRvU3RyaW5nKCksXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGVTdHIpLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBjYXRlZ29yeUlkOiAoZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlJZFwiKSBhcyBzdHJpbmcpLFxuICAgICAgICBjaGlsZElkOiBjaGlsZElkLFxuICAgICAgICByZWNvcmRlZEJ5OiBzZXNzaW9uLnVzZXIuaWRcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRyYW5zYWN0aW9uIGFkZGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1hcmtEdWVBc1BhaWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgZXhwZW5zZSA9IGF3YWl0IGRiLnF1ZXJ5LmV4cGVuc2VzLmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiBlcShleHBlbnNlcy5pZCwgaWQpXG4gICAgfSk7XG5cbiAgICBpZiAoIWV4cGVuc2UpIHJldHVybiB7IG1lc3NhZ2U6IFwiUmVjb3JkIG5vdCBmb3VuZFwiIH07XG5cbiAgICBhd2FpdCBkYi51cGRhdGUoZXhwZW5zZXMpLnNldCh7XG4gICAgICAgIHR5cGU6IFwiSU5DT01FXCJcbiAgICB9KS53aGVyZShlcShleHBlbnNlcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlBheW1lbnQgbWFya2VkIGFzIHBhaWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVXNlcih1c2VySWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgaWYgKHVzZXJJZCA9PT0gc2Vzc2lvbi51c2VyLmlkKSByZXR1cm4geyBtZXNzYWdlOiBcIkNhbm5vdCBkZWxldGUgeW91cnNlbGZcIiB9O1xuXG4gICAgYXdhaXQgZGIuZGVsZXRlKHVzZXJzKS53aGVyZShlcSh1c2Vycy5pZCwgdXNlcklkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdXNlcnNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJVc2VyIGRlbGV0ZWRcIiB9O1xufVxuXG5cbi8vIC0tLSBUaGVyYXB5IEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGhlcmFweShmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmcpIHx8IFwiXCI7XG4gICAgY29uc3QgcHJpY2UgPSAoZm9ybURhdGEuZ2V0KFwicHJpY2VcIikgYXMgc3RyaW5nKSB8fCBcIjBcIjtcbiAgICBjb25zdCBzdGF0dXMgPSAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIFwiQUNUSVZFXCIgfCBcIklOQUNUSVZFXCIpIHx8IFwiQUNUSVZFXCI7XG4gICAgY29uc3QgZHVyYXRpb24gPSAoZm9ybURhdGEuZ2V0KFwiZGVmYXVsdER1cmF0aW9uTWludXRlc1wiKSBhcyBzdHJpbmcpIHx8IFwiNDVcIjtcblxuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydCh0aGVyYXBpZXMpLnZhbHVlcyh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBjaGFyZ2VQZXJTZXNzaW9uOiBwcmljZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkZWZhdWx0RHVyYXRpb25NaW51dGVzOiBwYXJzZUludChkdXJhdGlvbiksXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi90aGVyYXBpZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJUaGVyYXB5IHNlcnZpY2UgY3JlYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVUaGVyYXB5KGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBwcmljZSA9IChmb3JtRGF0YS5nZXQoXCJwcmljZVwiKSBhcyBzdHJpbmcpIHx8IFwiMFwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBQ1RJVkVcIiB8IFwiSU5BQ1RJVkVcIikgfHwgXCJBQ1RJVkVcIjtcbiAgICBjb25zdCBkdXJhdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZWZhdWx0RHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZykgfHwgXCI0NVwiO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKHRoZXJhcGllcykuc2V0KHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNoYXJnZVBlclNlc3Npb246IHByaWNlLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRlZmF1bHREdXJhdGlvbk1pbnV0ZXM6IHBhcnNlSW50KGR1cmF0aW9uKSxcbiAgICB9KS53aGVyZShlcSh0aGVyYXBpZXMuaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi90aGVyYXBpZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJUaGVyYXB5IHNlcnZpY2UgdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUaGVyYXB5KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRiLmRlbGV0ZSh0aGVyYXBpZXMpLndoZXJlKGVxKHRoZXJhcGllcy5pZCwgaWQpKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvdGhlcmFwaWVzXCIpO1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSBkZWxldGVkXCIgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkZhaWxlZCB0byBkZWxldGUgdGhlcmFweS4gSXQgbWlnaHQgYmUgbGlua2VkIHRvIGV4aXN0aW5nIHNlc3Npb25zLlwiIH07XG4gICAgfVxufVxuXG5cbi8vIC0tLSBTZXNzaW9uIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlU2Vzc2lvbihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIC8vIEFkbWluIG9yIFRoZXJhcGlzdCBjYW4gY3JlYXRlIHNlc3Npb25zXG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgPT09IFwiUEFSRU5UXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IGNoaWxkSWQgPSBmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXBpc3RJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcGlzdElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXB5SWQgPSBmb3JtRGF0YS5nZXQoXCJ0aGVyYXB5SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBkdXJhdGlvbiA9IGZvcm1EYXRhLmdldChcImR1cmF0aW9uTWludXRlc1wiKSBhcyBzdHJpbmcgfHwgXCI0NVwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJTQ0hFRFVMRURcIiB8IFwiQ09NUExFVEVEXCIgfCBcIkNBTkNFTExFRFwiIHwgXCJNSVNTRURcIikgfHwgXCJTQ0hFRFVMRURcIjtcblxuICAgIGlmICghY2hpbGRJZCB8fCAhdGhlcmFwaXN0SWQgfHwgIXRoZXJhcHlJZCB8fCAhZGF0ZVN0cikge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgcmVxdWlyZWQgZmllbGRzXCIgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoc2Vzc2lvbnMpLnZhbHVlcyh7XG4gICAgICAgIGNoaWxkSWQsXG4gICAgICAgIHRoZXJhcGlzdElkLFxuICAgICAgICB0aGVyYXB5SWQsXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGVTdHIpLFxuICAgICAgICBkdXJhdGlvbk1pbnV0ZXM6IHBhcnNlSW50KGR1cmF0aW9uKSxcbiAgICAgICAgc3RhdHVzLFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2NoZWR1bGVcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJTZXNzaW9uIHNjaGVkdWxlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTZXNzaW9uKGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgPT09IFwiUEFSRU5UXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IGNoaWxkSWQgPSBmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXBpc3RJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcGlzdElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXB5SWQgPSBmb3JtRGF0YS5nZXQoXCJ0aGVyYXB5SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBkdXJhdGlvbiA9IGZvcm1EYXRhLmdldChcImR1cmF0aW9uTWludXRlc1wiKSBhcyBzdHJpbmcgfHwgXCI0NVwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJTQ0hFRFVMRURcIiB8IFwiQ09NUExFVEVEXCIgfCBcIkNBTkNFTExFRFwiIHwgXCJNSVNTRURcIikgfHwgXCJTQ0hFRFVMRURcIjtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShzZXNzaW9ucykuc2V0KHtcbiAgICAgICAgY2hpbGRJZCxcbiAgICAgICAgdGhlcmFwaXN0SWQsXG4gICAgICAgIHRoZXJhcHlJZCxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGR1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgICAgICBzdGF0dXMsXG4gICAgfSkud2hlcmUoZXEoc2Vzc2lvbnMuaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVTZXNzaW9uKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmRlbGV0ZShzZXNzaW9ucykud2hlcmUoZXEoc2Vzc2lvbnMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2NoZWR1bGVcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJTZXNzaW9uIGRlbGV0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlcih1c2VySWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiICYmIHNlc3Npb24/LnVzZXI/LmlkICE9PSB1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCByb2xlID0gZm9ybURhdGEuZ2V0KFwicm9sZVwiKSBhcyBcIkFETUlOXCIgfCBcIlRIRVJBUElTVFwiIHwgXCJQQVJFTlRcIjtcbiAgICBjb25zdCBxdWFsaWZpY2F0aW9uID0gKGZvcm1EYXRhLmdldChcInF1YWxpZmljYXRpb25cIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwicGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCkgcmV0dXJuIHsgbWVzc2FnZTogXCJNaXNzaW5nIGZpZWxkc1wiIH07XG5cbiAgICBjb25zdCB1cGRhdGVEYXRhOiBhbnkgPSB7IG5hbWUsIGVtYWlsLCBxdWFsaWZpY2F0aW9uIH07XG4gICAgaWYgKHNlc3Npb24udXNlci5yb2xlID09PSBcIkFETUlOXCIpIHtcbiAgICAgICAgaWYgKHJvbGUpIHVwZGF0ZURhdGEucm9sZSA9IHJvbGU7XG4gICAgICAgIGlmIChwYXNzd29yZCAmJiBwYXNzd29yZC50cmltKCkgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHVwZGF0ZURhdGEucGFzc3dvcmRIYXNoID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGF3YWl0IGRiLnVwZGF0ZSh1c2VycylcbiAgICAgICAgLnNldCh1cGRhdGVEYXRhKVxuICAgICAgICAud2hlcmUoZXEodXNlcnMuaWQsIHVzZXJJZCkpO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJVc2VyIHVwZGF0ZWRcIiB9O1xufVxuXG4vLyAtLS0gQ2F0ZWdvcnkgQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yeShmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoY2F0ZWdvcmllcyBhcyBhbnkpLnZhbHVlcyh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIC8vIGZhbWlseUlkIHJlbW92ZWRcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2F0ZWdvcnkgY3JlYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXRlZ29yeShpZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi51cGRhdGUoY2F0ZWdvcmllcykuc2V0KHsgbmFtZSB9KS53aGVyZShlcShjYXRlZ29yaWVzLmlkLCBpZCkpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IHVwZGF0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2F0ZWdvcnkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGIuZGVsZXRlKGNhdGVnb3JpZXMpLndoZXJlKGVxKGNhdGVnb3JpZXMuaWQsIGlkKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhbm5vdCBkZWxldGUgY2F0ZWdvcnkgaW4gdXNlXCIgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZXhwZW5zZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYXRlZ29yeSBkZWxldGVkXCIgfTtcbn1cblxuLy8gLS0tIEV4cGVuc2UgQWN0aW9ucyAtLS0gKFVwZGF0ZS9EZWxldGUpXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRXhwZW5zZShpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICAvLyBQYXJlbnQgY2FuJ3QgZGVsZXRlPyBZZXMuXG5cbiAgICBhd2FpdCBkYi5kZWxldGUoZXhwZW5zZXMpLndoZXJlKGVxKGV4cGVuc2VzLmlkLCBpZCkpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkV4cGVuc2UgZGVsZXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFeHBlbnNlKGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgYW1vdW50ID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikgYXMgc3RyaW5nKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmcpIHx8IFwiXCI7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGNhdGVnb3J5SWQgPSBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeUlkXCIpIGFzIHN0cmluZztcblxuICAgIGlmICghYW1vdW50IHx8ICFkYXRlU3RyIHx8ICFjYXRlZ29yeUlkKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGF3YWl0IGRiLnVwZGF0ZShleHBlbnNlcykuc2V0KHtcbiAgICAgICAgYW1vdW50OiBhbW91bnQudG9TdHJpbmcoKSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGVTdHIpLFxuICAgICAgICBjYXRlZ29yeUlkOiBjYXRlZ29yeUlkLFxuICAgICAgICBjaGlsZElkOiAoZm9ybURhdGEuZ2V0KFwiY2hpbGRJZFwiKSBhcyBzdHJpbmcpIHx8IG51bGwsXG4gICAgICAgIHR5cGU6IChmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpIGFzIFwiRVhQRU5TRVwiIHwgXCJJTkNPTUVcIiB8IFwiRFVFXCIpIHx8IFwiRVhQRU5TRVwiLFxuXG4gICAgfSkud2hlcmUoZXEoZXhwZW5zZXMuaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZXhwZW5zZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJUcmFuc2FjdGlvbiB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVBhc3N3b3JkKHByZXZTdGF0ZTogYW55LCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHJldHVybiBcIlVuYXV0aG9yaXplZFwiO1xuXG4gICAgY29uc3QgY3VycmVudFBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwiY3VycmVudFBhc3N3b3JkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBuZXdQYXNzd29yZCA9IGZvcm1EYXRhLmdldChcIm5ld1Bhc3N3b3JkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBjb25maXJtUGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJjb25maXJtUGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuXG4gICAgaWYgKCFjdXJyZW50UGFzc3dvcmQgfHwgIW5ld1Bhc3N3b3JkIHx8ICFjb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIFwiQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWRcIjtcbiAgICB9XG5cbiAgICBpZiAobmV3UGFzc3dvcmQgIT09IGNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gXCJOZXcgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiO1xuICAgIH1cblxuICAgIGlmIChuZXdQYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgICAgIHJldHVybiBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzXCI7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnF1ZXJ5LnVzZXJzLmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiBlcSh1c2Vycy5pZCwgc2Vzc2lvbi51c2VyLmlkKSxcbiAgICB9KTtcblxuICAgIGlmICghdXNlcikgcmV0dXJuIFwiVXNlciBub3QgZm91bmRcIjtcblxuICAgIGNvbnN0IGlzTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShjdXJyZW50UGFzc3dvcmQsIHVzZXIucGFzc3dvcmRIYXNoKTtcbiAgICBpZiAoIWlzTWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIFwiSW5jb3JyZWN0IGN1cnJlbnQgcGFzc3dvcmRcIjtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKG5ld1Bhc3N3b3JkLCAxMCk7XG5cbiAgICBhd2FpdCBkYi51cGRhdGUodXNlcnMpXG4gICAgICAgIC5zZXQoeyBwYXNzd29yZEhhc2g6IGhhc2hlZFBhc3N3b3JkIH0pXG4gICAgICAgIC53aGVyZShlcSh1c2Vycy5pZCwgc2Vzc2lvbi51c2VyLmlkKSk7XG5cbiAgICByZXR1cm4gXCJTdWNjZXNzXCI7XG59XG5cbi8vIC0tLSBDaGlsZCBBY3Rpb25zIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNoaWxkKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBQ1RJVkVcIiB8IFwiSU5BQ1RJVkVcIikgfHwgXCJBQ1RJVkVcIjtcbiAgICBjb25zdCBkb2IgPSAoZm9ybURhdGEuZ2V0KFwiZG9iXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBnZW5kZXIgPSAoZm9ybURhdGEuZ2V0KFwiZ2VuZGVyXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBkaWFnbm9zaXMgPSAoZm9ybURhdGEuZ2V0KFwiZGlhZ25vc2lzXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBwYXJlbnRJZCA9IChmb3JtRGF0YS5nZXQoXCJwYXJlbnRJZFwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG5cbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoY2hpbGRyZW4pLnZhbHVlcyh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZG9iLFxuICAgICAgICBnZW5kZXIsXG4gICAgICAgIGRpYWdub3NpcyxcbiAgICAgICAgcGFyZW50SWRcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2NoaWxkcmVuc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNoaWxkIGNyZWF0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2hpbGQoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGRvYiA9IChmb3JtRGF0YS5nZXQoXCJkb2JcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGdlbmRlciA9IChmb3JtRGF0YS5nZXQoXCJnZW5kZXJcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGRpYWdub3NpcyA9IChmb3JtRGF0YS5nZXQoXCJkaWFnbm9zaXNcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHBhcmVudElkID0gKGZvcm1EYXRhLmdldChcInBhcmVudElkXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcblxuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShjaGlsZHJlbikuc2V0KHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkb2IsXG4gICAgICAgIGdlbmRlcixcbiAgICAgICAgZGlhZ25vc2lzLFxuICAgICAgICBwYXJlbnRJZFxuICAgIH0pLndoZXJlKGVxKGNoaWxkcmVuLmlkLCBpZCkpO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvY2hpbGRyZW5zXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2hpbGQgdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDaGlsZChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkYi5kZWxldGUoY2hpbGRyZW4pLndoZXJlKGVxKGNoaWxkcmVuLmlkLCBpZCkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYW5ub3QgZGVsZXRlIGNoaWxkIGluIHVzZVwiIH07XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDaGlsZCBkZWxldGVkXCIgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoic1JBcVZzQiJ9
}),
"[project]/lib/data:dec973 [app-ssr] (ecmascript) <text/javascript>", ((__turbopack_context__) => {
"use strict";

/* __next_internal_action_entry_do_not_use__ [{"60f9ef6f66cf4ef51173c9980aa704e21ffa8c4b4b":"updateCategory"},"lib/actions.ts",""] */ __turbopack_context__.s([
    "updateCategory",
    ()=>updateCategory
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/build/webpack/loaders/next-flight-loader/action-client-wrapper.js [app-ssr] (ecmascript)");
"use turbopack no side effects";
;
var updateCategory = /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createServerReference"])("60f9ef6f66cf4ef51173c9980aa704e21ffa8c4b4b", __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["callServer"], void 0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$build$2f$webpack$2f$loaders$2f$next$2d$flight$2d$loader$2f$action$2d$client$2d$wrapper$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["findSourceMapURL"], "updateCategory"); //# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIi4vYWN0aW9ucy50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzZXJ2ZXJcIjtcblxuaW1wb3J0IHsgc2lnbkluLCBzaWduT3V0IH0gZnJvbSBcIkAvYXV0aFwiO1xuaW1wb3J0IHsgQXV0aEVycm9yIH0gZnJvbSBcIm5leHQtYXV0aFwiO1xuaW1wb3J0IHsgZGIgfSBmcm9tIFwiLi9kYlwiO1xuaW1wb3J0IHsgdXNlcnMsIGV4cGVuc2VzLCBjYXRlZ29yaWVzLCBjaGlsZHJlbiwgdGhlcmFwaWVzLCBzZXNzaW9ucyB9IGZyb20gXCIuL2RiL3NjaGVtYVwiOyAvLyBSZW1vdmVkIGZhbWlsaWVzLCBzdGFmZnMsIGJ1ZGdldHNcblxuaW1wb3J0IGJjcnlwdCBmcm9tIFwiYmNyeXB0anNcIjtcbmltcG9ydCB7IGVxLCBkZXNjLCBhbmQgfSBmcm9tIFwiZHJpenpsZS1vcm1cIjtcbmltcG9ydCB7IHJldmFsaWRhdGVQYXRoIH0gZnJvbSBcIm5leHQvY2FjaGVcIjtcbmltcG9ydCB7IGF1dGggfSBmcm9tIFwiQC9hdXRoXCI7XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhdXRoZW50aWNhdGUoXG4gICAgcHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsXG4gICAgZm9ybURhdGE6IEZvcm1EYXRhLFxuKSB7XG4gICAgdHJ5IHtcbiAgICAgICAgY29uc3QgY3JlZGVudGlhbHMgPSBPYmplY3QuZnJvbUVudHJpZXMoZm9ybURhdGEpO1xuICAgICAgICBhd2FpdCBzaWduSW4oXCJjcmVkZW50aWFsc1wiLCB7IC4uLmNyZWRlbnRpYWxzLCByZWRpcmVjdFRvOiBcIi9kYXNoYm9hcmRcIiB9KTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICBpZiAoZXJyb3IgaW5zdGFuY2VvZiBBdXRoRXJyb3IpIHtcbiAgICAgICAgICAgIHN3aXRjaCAoZXJyb3IudHlwZSkge1xuICAgICAgICAgICAgICAgIGNhc2UgXCJDcmVkZW50aWFsc1NpZ25pblwiOlxuICAgICAgICAgICAgICAgICAgICByZXR1cm4gXCJJbnZhbGlkIGNyZWRlbnRpYWxzLlwiO1xuICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBcIlNvbWV0aGluZyB3ZW50IHdyb25nLlwiO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG4gICAgICAgIHRocm93IGVycm9yO1xuICAgIH1cbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHNpZ25PdXRBY3Rpb24oKSB7XG4gICAgYXdhaXQgc2lnbk91dCh7IHJlZGlyZWN0VG86IFwiL1wiIH0pO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gcmVnaXN0ZXIocHJldlN0YXRlOiBzdHJpbmcgfCB1bmRlZmluZWQsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBwYXNzd29yZCA9IGZvcm1EYXRhLmdldChcInBhc3N3b3JkXCIpIGFzIHN0cmluZztcblxuICAgIGlmICghZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFuYW1lKSByZXR1cm4gXCJNaXNzaW5nIGZpZWxkc1wiO1xuXG4gICAgY29uc3QgZXhpc3RpbmdVc2VyID0gYXdhaXQgZGIucXVlcnkudXNlcnMuZmluZEZpcnN0KHtcbiAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgfSk7XG5cbiAgICBpZiAoZXhpc3RpbmdVc2VyKSByZXR1cm4gXCJVc2VyIGFscmVhZHkgZXhpc3RzXCI7XG5cbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKHBhc3N3b3JkLCAxMCk7XG5cbiAgICAvLyBEZWZhdWx0IHJvbGU6IFBBUkVOVD8gT3IgQURNSU4gZm9yIGZpcnN0IHVzZXI/IFxuICAgIC8vIExvZ2ljOiBJZiBubyB1c2VycyBleGlzdCwgZmlyc3QgaXMgQURNSU4uIE90aGVyd2lzZSBQQVJFTlQuXG4gICAgLy8gRm9yIG5vdywgbGV0J3MgaGFyZGNvZGUgUEFSRU5UIHVubGVzcyBleHBsaWNpdGx5IHNldCBlbHNld2hlcmUgdXN1YWxseS5cbiAgICAvLyBCdXQgZm9yIHRoaXMgXCJSZXZhbXBcIiBtYXliZSB3ZSBhc3N1bWUgQWRtaW4gY3JlYXRlcyB1c2Vycz9cbiAgICAvLyBJZiB0aGlzIGlzIHB1YmxpYyByZWdpc3RyYXRpb24sIFBBUkVOVCBpcyBzYWZlci5cblxuICAgIGNvbnN0IHVzZXJDb3VudCA9IGF3YWl0IGRiLnNlbGVjdCgpLmZyb20odXNlcnMpLnRoZW4ocmVzID0+IHJlcy5sZW5ndGgpO1xuICAgIGNvbnN0IHJvbGUgPSB1c2VyQ291bnQgPT09IDAgPyBcIkFETUlOXCIgOiBcIlBBUkVOVFwiO1xuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KHVzZXJzKS52YWx1ZXMoe1xuICAgICAgICBuYW1lLFxuICAgICAgICBlbWFpbCxcbiAgICAgICAgcGFzc3dvcmRIYXNoOiBoYXNoZWRQYXNzd29yZCxcbiAgICAgICAgcm9sZTogcm9sZVxuICAgIH0pO1xuXG4gICAgcmV0dXJuIFwiU3VjY2Vzc1wiO1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVXNlcihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICB0cnkge1xuICAgICAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgICAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICAgICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgICAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICAgICAgY29uc3QgcGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJwYXNzd29yZFwiKSBhcyBzdHJpbmc7XG4gICAgICAgIGNvbnN0IHJvbGUgPSBmb3JtRGF0YS5nZXQoXCJyb2xlXCIpIGFzIFwiQURNSU5cIiB8IFwiVEhFUkFQSVNUXCIgfCBcIlBBUkVOVFwiO1xuICAgICAgICBjb25zdCBxdWFsaWZpY2F0aW9uID0gKGZvcm1EYXRhLmdldChcInF1YWxpZmljYXRpb25cIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuXG4gICAgICAgIGlmICghbmFtZSB8fCAhZW1haWwgfHwgIXBhc3N3b3JkIHx8ICFyb2xlKSByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgZmllbGRzXCIgfTtcblxuICAgICAgICBjb25zdCBleGlzdGluZ1VzZXIgPSBhd2FpdCBkYi5xdWVyeS51c2Vycy5maW5kRmlyc3Qoe1xuICAgICAgICAgICAgd2hlcmU6IGVxKHVzZXJzLmVtYWlsLCBlbWFpbCksXG4gICAgICAgIH0pO1xuXG4gICAgICAgIGlmIChleGlzdGluZ1VzZXIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVXNlciBhbHJlYWR5IGV4aXN0c1wiIH07XG5cbiAgICAgICAgY29uc3QgaGFzaGVkUGFzc3dvcmQgPSBhd2FpdCBiY3J5cHQuaGFzaChwYXNzd29yZCwgMTApO1xuXG4gICAgICAgIGF3YWl0IGRiLmluc2VydCh1c2VycykudmFsdWVzKHtcbiAgICAgICAgICAgIG5hbWUsXG4gICAgICAgICAgICBlbWFpbCxcbiAgICAgICAgICAgIHBhc3N3b3JkSGFzaDogaGFzaGVkUGFzc3dvcmQsXG4gICAgICAgICAgICByb2xlLFxuICAgICAgICAgICAgcXVhbGlmaWNhdGlvbixcbiAgICAgICAgfSk7XG5cbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiVXNlciBjcmVhdGVkXCIgfTtcbiAgICB9IGNhdGNoIChlcnJvcjogYW55KSB7XG4gICAgICAgIGNvbnNvbGUuZXJyb3IoXCJDcmVhdGUgVXNlciBFcnJvcjpcIiwgZXJyb3IpO1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBlcnJvci5tZXNzYWdlIHx8IFwiRmFpbGVkIHRvIGNyZWF0ZSB1c2VyXCIgfTtcbiAgICB9XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBhZGRFeHBlbnNlQWN0aW9uKHByZXZTdGF0ZTogYW55LCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuICAgIC8vIE9ubHkgQWRtaW4gY2FuIGFkZCBleHBlbnNlcz8gT3IgVGhlcmFwaXN0P1xuICAgIC8vIExldCdzIGFsbG93IEFkbWluIGFuZCBtYXliZSBUaGVyYXBpc3QuXG4gICAgaWYgKHNlc3Npb24udXNlci5yb2xlID09PSBcIlBBUkVOVFwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cblxuICAgIGNvbnN0IGFtb3VudCA9IHBhcnNlRmxvYXQoZm9ybURhdGEuZ2V0KFwiYW1vdW50XCIpIGFzIHN0cmluZyk7XG4gICAgY29uc3QgZGVzY3JpcHRpb24gPSAoZm9ybURhdGEuZ2V0KFwiZGVzY3JpcHRpb25cIikgYXMgc3RyaW5nKSB8fCBcIlwiO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0eXBlID0gKGZvcm1EYXRhLmdldChcInR5cGVcIikgYXMgXCJFWFBFTlNFXCIgfCBcIklOQ09NRVwiIHwgXCJEVUVcIikgfHwgXCJFWFBFTlNFXCI7XG4gICAgY29uc3QgY2hpbGRJZCA9IChmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICAvLyBzdGFmZklkIHJlbW92ZWQuIHR5cGUgaXMgZW5vdWdoPyBPciBtYXliZSByZWNvcmRlZEJ5P1xuXG5cbiAgICBpZiAoIWFtb3VudCB8fCAhZGF0ZVN0cikge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgZmllbGRzXCIgfTtcbiAgICB9XG5cbiAgICBpZiAoIWZvcm1EYXRhLmdldChcImNhdGVnb3J5SWRcIikpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYXRlZ29yeSBpcyByZXF1aXJlZFwiIH07XG4gICAgfVxuXG4gICAgYXdhaXQgZGIuaW5zZXJ0KGV4cGVuc2VzKS52YWx1ZXMoe1xuICAgICAgICAvLyB1c2VySWQ6IHNlc3Npb24udXNlci5pZCwgLy8gUmVtb3ZlZCB1c2VySWQgY29uc3RyYWludCBmcm9tIHNjaGVtYT8gTm8sIGtlZXAgaXQgYXMgJ3JlY29yZGVkIGJ5JyBpZiBuZWVkZWQ/IFxuICAgICAgICAvLyBTY2hlbWEgZGVmaW5pdGlvbjogXCJ1c2VySWRcIiByZW1vdmVkPyBMZXQncyBjaGVjayBzY2hlbWEudHMgY29udGVudCBJIHdyb3RlLlxuICAgICAgICAvLyBJIGtlcHQgJ2V4cGVuc2UnIHRhYmxlIGJ1dCByZWZhY3RvcmluZy5cbiAgICAgICAgLy8gV2FpdCwgSSBjaGFuZ2VkICd1c2VySWQnIHRvICdyZWNvcmRlZEJ5JyAob3B0aW9uYWwpIGluIG15IHRob3VnaHQsIGJ1dCBsZXQncyBjaGVjayB3aGF0IEkgYWN0dWFsbHkgd3JvdGUuXG4gICAgICAgIC8vIEkgd3JvdGU6IHJlY29yZGVkQnk6IHV1aWQoXCJyZWNvcmRlZF9ieVwiKS5yZWZlcmVuY2VzKCgpID0+IHVzZXJzLmlkKSwgLy8gQWRtaW4gd2hvIHJlY29yZGVkIGl0XG5cbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGFtb3VudDogYW1vdW50LnRvU3RyaW5nKCksXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGVTdHIpLFxuICAgICAgICB0eXBlOiB0eXBlLFxuICAgICAgICBjYXRlZ29yeUlkOiAoZm9ybURhdGEuZ2V0KFwiY2F0ZWdvcnlJZFwiKSBhcyBzdHJpbmcpLFxuICAgICAgICBjaGlsZElkOiBjaGlsZElkLFxuICAgICAgICByZWNvcmRlZEJ5OiBzZXNzaW9uLnVzZXIuaWRcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRyYW5zYWN0aW9uIGFkZGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIG1hcmtEdWVBc1BhaWQoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgZXhwZW5zZSA9IGF3YWl0IGRiLnF1ZXJ5LmV4cGVuc2VzLmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiBlcShleHBlbnNlcy5pZCwgaWQpXG4gICAgfSk7XG5cbiAgICBpZiAoIWV4cGVuc2UpIHJldHVybiB7IG1lc3NhZ2U6IFwiUmVjb3JkIG5vdCBmb3VuZFwiIH07XG5cbiAgICBhd2FpdCBkYi51cGRhdGUoZXhwZW5zZXMpLnNldCh7XG4gICAgICAgIHR5cGU6IFwiSU5DT01FXCJcbiAgICB9KS53aGVyZShlcShleHBlbnNlcy5pZCwgaWQpKTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2Rhc2hib2FyZFwiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlBheW1lbnQgbWFya2VkIGFzIHBhaWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlVXNlcih1c2VySWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgaWYgKHVzZXJJZCA9PT0gc2Vzc2lvbi51c2VyLmlkKSByZXR1cm4geyBtZXNzYWdlOiBcIkNhbm5vdCBkZWxldGUgeW91cnNlbGZcIiB9O1xuXG4gICAgYXdhaXQgZGIuZGVsZXRlKHVzZXJzKS53aGVyZShlcSh1c2Vycy5pZCwgdXNlcklkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvdXNlcnNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJVc2VyIGRlbGV0ZWRcIiB9O1xufVxuXG5cbi8vIC0tLSBUaGVyYXB5IEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlVGhlcmFweShmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmcpIHx8IFwiXCI7XG4gICAgY29uc3QgcHJpY2UgPSAoZm9ybURhdGEuZ2V0KFwicHJpY2VcIikgYXMgc3RyaW5nKSB8fCBcIjBcIjtcbiAgICBjb25zdCBzdGF0dXMgPSAoZm9ybURhdGEuZ2V0KFwic3RhdHVzXCIpIGFzIFwiQUNUSVZFXCIgfCBcIklOQUNUSVZFXCIpIHx8IFwiQUNUSVZFXCI7XG4gICAgY29uc3QgZHVyYXRpb24gPSAoZm9ybURhdGEuZ2V0KFwiZGVmYXVsdER1cmF0aW9uTWludXRlc1wiKSBhcyBzdHJpbmcpIHx8IFwiNDVcIjtcblxuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmluc2VydCh0aGVyYXBpZXMpLnZhbHVlcyh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIGRlc2NyaXB0aW9uLFxuICAgICAgICBjaGFyZ2VQZXJTZXNzaW9uOiBwcmljZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkZWZhdWx0RHVyYXRpb25NaW51dGVzOiBwYXJzZUludChkdXJhdGlvbiksXG4gICAgfSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi90aGVyYXBpZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJUaGVyYXB5IHNlcnZpY2UgY3JlYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVUaGVyYXB5KGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRlc2NyaXB0aW9uID0gKGZvcm1EYXRhLmdldChcImRlc2NyaXB0aW9uXCIpIGFzIHN0cmluZykgfHwgXCJcIjtcbiAgICBjb25zdCBwcmljZSA9IChmb3JtRGF0YS5nZXQoXCJwcmljZVwiKSBhcyBzdHJpbmcpIHx8IFwiMFwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBQ1RJVkVcIiB8IFwiSU5BQ1RJVkVcIikgfHwgXCJBQ1RJVkVcIjtcbiAgICBjb25zdCBkdXJhdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZWZhdWx0RHVyYXRpb25NaW51dGVzXCIpIGFzIHN0cmluZykgfHwgXCI0NVwiO1xuXG4gICAgaWYgKCFuYW1lKSByZXR1cm4geyBtZXNzYWdlOiBcIk5hbWUgaXMgcmVxdWlyZWRcIiB9O1xuXG4gICAgYXdhaXQgZGIudXBkYXRlKHRoZXJhcGllcykuc2V0KHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGNoYXJnZVBlclNlc3Npb246IHByaWNlLFxuICAgICAgICBzdGF0dXMsXG4gICAgICAgIGRlZmF1bHREdXJhdGlvbk1pbnV0ZXM6IHBhcnNlSW50KGR1cmF0aW9uKSxcbiAgICB9KS53aGVyZShlcSh0aGVyYXBpZXMuaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi90aGVyYXBpZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJUaGVyYXB5IHNlcnZpY2UgdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVUaGVyYXB5KGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIHRyeSB7XG4gICAgICAgIGF3YWl0IGRiLmRlbGV0ZSh0aGVyYXBpZXMpLndoZXJlKGVxKHRoZXJhcGllcy5pZCwgaWQpKTtcbiAgICAgICAgcmV2YWxpZGF0ZVBhdGgoXCIvdGhlcmFwaWVzXCIpO1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIlRoZXJhcHkgc2VydmljZSBkZWxldGVkXCIgfTtcbiAgICB9IGNhdGNoIChlcnJvcikge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkZhaWxlZCB0byBkZWxldGUgdGhlcmFweS4gSXQgbWlnaHQgYmUgbGlua2VkIHRvIGV4aXN0aW5nIHNlc3Npb25zLlwiIH07XG4gICAgfVxufVxuXG5cbi8vIC0tLSBTZXNzaW9uIEFjdGlvbnMgLS0tXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gY3JlYXRlU2Vzc2lvbihmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIC8vIEFkbWluIG9yIFRoZXJhcGlzdCBjYW4gY3JlYXRlIHNlc3Npb25zXG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgPT09IFwiUEFSRU5UXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IGNoaWxkSWQgPSBmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXBpc3RJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcGlzdElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXB5SWQgPSBmb3JtRGF0YS5nZXQoXCJ0aGVyYXB5SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBkdXJhdGlvbiA9IGZvcm1EYXRhLmdldChcImR1cmF0aW9uTWludXRlc1wiKSBhcyBzdHJpbmcgfHwgXCI0NVwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJTQ0hFRFVMRURcIiB8IFwiQ09NUExFVEVEXCIgfCBcIkNBTkNFTExFRFwiIHwgXCJNSVNTRURcIikgfHwgXCJTQ0hFRFVMRURcIjtcblxuICAgIGlmICghY2hpbGRJZCB8fCAhdGhlcmFwaXN0SWQgfHwgIXRoZXJhcHlJZCB8fCAhZGF0ZVN0cikge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIk1pc3NpbmcgcmVxdWlyZWQgZmllbGRzXCIgfTtcbiAgICB9XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoc2Vzc2lvbnMpLnZhbHVlcyh7XG4gICAgICAgIGNoaWxkSWQsXG4gICAgICAgIHRoZXJhcGlzdElkLFxuICAgICAgICB0aGVyYXB5SWQsXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGVTdHIpLFxuICAgICAgICBkdXJhdGlvbk1pbnV0ZXM6IHBhcnNlSW50KGR1cmF0aW9uKSxcbiAgICAgICAgc3RhdHVzLFxuICAgIH0pO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2NoZWR1bGVcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJTZXNzaW9uIHNjaGVkdWxlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVTZXNzaW9uKGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgPT09IFwiUEFSRU5UXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IGNoaWxkSWQgPSBmb3JtRGF0YS5nZXQoXCJjaGlsZElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXBpc3RJZCA9IGZvcm1EYXRhLmdldChcInRoZXJhcGlzdElkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCB0aGVyYXB5SWQgPSBmb3JtRGF0YS5nZXQoXCJ0aGVyYXB5SWRcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGRhdGVTdHIgPSBmb3JtRGF0YS5nZXQoXCJkYXRlXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBkdXJhdGlvbiA9IGZvcm1EYXRhLmdldChcImR1cmF0aW9uTWludXRlc1wiKSBhcyBzdHJpbmcgfHwgXCI0NVwiO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJTQ0hFRFVMRURcIiB8IFwiQ09NUExFVEVEXCIgfCBcIkNBTkNFTExFRFwiIHwgXCJNSVNTRURcIikgfHwgXCJTQ0hFRFVMRURcIjtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShzZXNzaW9ucykuc2V0KHtcbiAgICAgICAgY2hpbGRJZCxcbiAgICAgICAgdGhlcmFwaXN0SWQsXG4gICAgICAgIHRoZXJhcHlJZCxcbiAgICAgICAgZGF0ZTogbmV3IERhdGUoZGF0ZVN0ciksXG4gICAgICAgIGR1cmF0aW9uTWludXRlczogcGFyc2VJbnQoZHVyYXRpb24pLFxuICAgICAgICBzdGF0dXMsXG4gICAgfSkud2hlcmUoZXEoc2Vzc2lvbnMuaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zY2hlZHVsZVwiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIlNlc3Npb24gdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVTZXNzaW9uKGlkOiBzdHJpbmcpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGF3YWl0IGRiLmRlbGV0ZShzZXNzaW9ucykud2hlcmUoZXEoc2Vzc2lvbnMuaWQsIGlkKSk7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2NoZWR1bGVcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJTZXNzaW9uIGRlbGV0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlVXNlcih1c2VySWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiICYmIHNlc3Npb24/LnVzZXI/LmlkICE9PSB1c2VySWQpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuICAgIH1cblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBlbWFpbCA9IGZvcm1EYXRhLmdldChcImVtYWlsXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCByb2xlID0gZm9ybURhdGEuZ2V0KFwicm9sZVwiKSBhcyBcIkFETUlOXCIgfCBcIlRIRVJBUElTVFwiIHwgXCJQQVJFTlRcIjtcbiAgICBjb25zdCBxdWFsaWZpY2F0aW9uID0gKGZvcm1EYXRhLmdldChcInF1YWxpZmljYXRpb25cIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwicGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuXG4gICAgaWYgKCFuYW1lIHx8ICFlbWFpbCkgcmV0dXJuIHsgbWVzc2FnZTogXCJNaXNzaW5nIGZpZWxkc1wiIH07XG5cbiAgICBjb25zdCB1cGRhdGVEYXRhOiBhbnkgPSB7IG5hbWUsIGVtYWlsLCBxdWFsaWZpY2F0aW9uIH07XG4gICAgaWYgKHNlc3Npb24udXNlci5yb2xlID09PSBcIkFETUlOXCIpIHtcbiAgICAgICAgaWYgKHJvbGUpIHVwZGF0ZURhdGEucm9sZSA9IHJvbGU7XG4gICAgICAgIGlmIChwYXNzd29yZCAmJiBwYXNzd29yZC50cmltKCkgIT09IFwiXCIpIHtcbiAgICAgICAgICAgIHVwZGF0ZURhdGEucGFzc3dvcmRIYXNoID0gYXdhaXQgYmNyeXB0Lmhhc2gocGFzc3dvcmQsIDEwKTtcbiAgICAgICAgfVxuICAgIH1cblxuICAgIGF3YWl0IGRiLnVwZGF0ZSh1c2VycylcbiAgICAgICAgLnNldCh1cGRhdGVEYXRhKVxuICAgICAgICAud2hlcmUoZXEodXNlcnMuaWQsIHVzZXJJZCkpO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJVc2VyIHVwZGF0ZWRcIiB9O1xufVxuXG4vLyAtLS0gQ2F0ZWdvcnkgQWN0aW9ucyAtLS1cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBjcmVhdGVDYXRlZ29yeShmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoY2F0ZWdvcmllcyBhcyBhbnkpLnZhbHVlcyh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIC8vIGZhbWlseUlkIHJlbW92ZWRcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2F0ZWdvcnkgY3JlYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVDYXRlZ29yeShpZDogc3RyaW5nLCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmIChzZXNzaW9uPy51c2VyPy5yb2xlICE9PSBcIkFETUlOXCIpIHJldHVybiB7IG1lc3NhZ2U6IFwiVW5hdXRob3JpemVkXCIgfTtcblxuICAgIGNvbnN0IG5hbWUgPSBmb3JtRGF0YS5nZXQoXCJuYW1lXCIpIGFzIHN0cmluZztcbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi51cGRhdGUoY2F0ZWdvcmllcykuc2V0KHsgbmFtZSB9KS53aGVyZShlcShjYXRlZ29yaWVzLmlkLCBpZCkpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhdGVnb3J5IHVwZGF0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlQ2F0ZWdvcnkoaWQ6IHN0cmluZykge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgdHJ5IHtcbiAgICAgICAgYXdhaXQgZGIuZGVsZXRlKGNhdGVnb3JpZXMpLndoZXJlKGVxKGNhdGVnb3JpZXMuaWQsIGlkKSk7XG4gICAgfSBjYXRjaCAoZSkge1xuICAgICAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNhbm5vdCBkZWxldGUgY2F0ZWdvcnkgaW4gdXNlXCIgfTtcbiAgICB9XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZXhwZW5zZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYXRlZ29yeSBkZWxldGVkXCIgfTtcbn1cblxuLy8gLS0tIEV4cGVuc2UgQWN0aW9ucyAtLS0gKFVwZGF0ZS9EZWxldGUpXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gZGVsZXRlRXhwZW5zZShpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICAvLyBQYXJlbnQgY2FuJ3QgZGVsZXRlPyBZZXMuXG5cbiAgICBhd2FpdCBkYi5kZWxldGUoZXhwZW5zZXMpLndoZXJlKGVxKGV4cGVuc2VzLmlkLCBpZCkpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9leHBlbnNlc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkV4cGVuc2UgZGVsZXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiB1cGRhdGVFeHBlbnNlKGlkOiBzdHJpbmcsIGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgYW1vdW50ID0gcGFyc2VGbG9hdChmb3JtRGF0YS5nZXQoXCJhbW91bnRcIikgYXMgc3RyaW5nKTtcbiAgICBjb25zdCBkZXNjcmlwdGlvbiA9IChmb3JtRGF0YS5nZXQoXCJkZXNjcmlwdGlvblwiKSBhcyBzdHJpbmcpIHx8IFwiXCI7XG4gICAgY29uc3QgZGF0ZVN0ciA9IGZvcm1EYXRhLmdldChcImRhdGVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IGNhdGVnb3J5SWQgPSBmb3JtRGF0YS5nZXQoXCJjYXRlZ29yeUlkXCIpIGFzIHN0cmluZztcblxuICAgIGlmICghYW1vdW50IHx8ICFkYXRlU3RyIHx8ICFjYXRlZ29yeUlkKSB7XG4gICAgICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiTWlzc2luZyBmaWVsZHNcIiB9O1xuICAgIH1cblxuICAgIGF3YWl0IGRiLnVwZGF0ZShleHBlbnNlcykuc2V0KHtcbiAgICAgICAgYW1vdW50OiBhbW91bnQudG9TdHJpbmcoKSxcbiAgICAgICAgZGVzY3JpcHRpb24sXG4gICAgICAgIGRhdGU6IG5ldyBEYXRlKGRhdGVTdHIpLFxuICAgICAgICBjYXRlZ29yeUlkOiBjYXRlZ29yeUlkLFxuICAgICAgICBjaGlsZElkOiAoZm9ybURhdGEuZ2V0KFwiY2hpbGRJZFwiKSBhcyBzdHJpbmcpIHx8IG51bGwsXG4gICAgICAgIHR5cGU6IChmb3JtRGF0YS5nZXQoXCJ0eXBlXCIpIGFzIFwiRVhQRU5TRVwiIHwgXCJJTkNPTUVcIiB8IFwiRFVFXCIpIHx8IFwiRVhQRU5TRVwiLFxuXG4gICAgfSkud2hlcmUoZXEoZXhwZW5zZXMuaWQsIGlkKSk7XG5cbiAgICByZXZhbGlkYXRlUGF0aChcIi9cIik7XG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvZXhwZW5zZXNcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJUcmFuc2FjdGlvbiB1cGRhdGVkXCIgfTtcbn1cblxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIHVwZGF0ZVBhc3N3b3JkKHByZXZTdGF0ZTogYW55LCBmb3JtRGF0YTogRm9ybURhdGEpIHtcbiAgICBjb25zdCBzZXNzaW9uID0gYXdhaXQgYXV0aCgpO1xuICAgIGlmICghc2Vzc2lvbj8udXNlcj8uaWQpIHJldHVybiBcIlVuYXV0aG9yaXplZFwiO1xuXG4gICAgY29uc3QgY3VycmVudFBhc3N3b3JkID0gZm9ybURhdGEuZ2V0KFwiY3VycmVudFBhc3N3b3JkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBuZXdQYXNzd29yZCA9IGZvcm1EYXRhLmdldChcIm5ld1Bhc3N3b3JkXCIpIGFzIHN0cmluZztcbiAgICBjb25zdCBjb25maXJtUGFzc3dvcmQgPSBmb3JtRGF0YS5nZXQoXCJjb25maXJtUGFzc3dvcmRcIikgYXMgc3RyaW5nO1xuXG4gICAgaWYgKCFjdXJyZW50UGFzc3dvcmQgfHwgIW5ld1Bhc3N3b3JkIHx8ICFjb25maXJtUGFzc3dvcmQpIHtcbiAgICAgICAgcmV0dXJuIFwiQWxsIGZpZWxkcyBhcmUgcmVxdWlyZWRcIjtcbiAgICB9XG5cbiAgICBpZiAobmV3UGFzc3dvcmQgIT09IGNvbmZpcm1QYXNzd29yZCkge1xuICAgICAgICByZXR1cm4gXCJOZXcgcGFzc3dvcmRzIGRvIG5vdCBtYXRjaFwiO1xuICAgIH1cblxuICAgIGlmIChuZXdQYXNzd29yZC5sZW5ndGggPCA2KSB7XG4gICAgICAgIHJldHVybiBcIlBhc3N3b3JkIG11c3QgYmUgYXQgbGVhc3QgNiBjaGFyYWN0ZXJzXCI7XG4gICAgfVxuXG4gICAgY29uc3QgdXNlciA9IGF3YWl0IGRiLnF1ZXJ5LnVzZXJzLmZpbmRGaXJzdCh7XG4gICAgICAgIHdoZXJlOiBlcSh1c2Vycy5pZCwgc2Vzc2lvbi51c2VyLmlkKSxcbiAgICB9KTtcblxuICAgIGlmICghdXNlcikgcmV0dXJuIFwiVXNlciBub3QgZm91bmRcIjtcblxuICAgIGNvbnN0IGlzTWF0Y2ggPSBhd2FpdCBiY3J5cHQuY29tcGFyZShjdXJyZW50UGFzc3dvcmQsIHVzZXIucGFzc3dvcmRIYXNoKTtcbiAgICBpZiAoIWlzTWF0Y2gpIHtcbiAgICAgICAgcmV0dXJuIFwiSW5jb3JyZWN0IGN1cnJlbnQgcGFzc3dvcmRcIjtcbiAgICB9XG5cbiAgICBjb25zdCBoYXNoZWRQYXNzd29yZCA9IGF3YWl0IGJjcnlwdC5oYXNoKG5ld1Bhc3N3b3JkLCAxMCk7XG5cbiAgICBhd2FpdCBkYi51cGRhdGUodXNlcnMpXG4gICAgICAgIC5zZXQoeyBwYXNzd29yZEhhc2g6IGhhc2hlZFBhc3N3b3JkIH0pXG4gICAgICAgIC53aGVyZShlcSh1c2Vycy5pZCwgc2Vzc2lvbi51c2VyLmlkKSk7XG5cbiAgICByZXR1cm4gXCJTdWNjZXNzXCI7XG59XG5cbi8vIC0tLSBDaGlsZCBBY3Rpb25zIC0tLVxuZXhwb3J0IGFzeW5jIGZ1bmN0aW9uIGNyZWF0ZUNoaWxkKGZvcm1EYXRhOiBGb3JtRGF0YSkge1xuICAgIGNvbnN0IHNlc3Npb24gPSBhd2FpdCBhdXRoKCk7XG4gICAgaWYgKHNlc3Npb24/LnVzZXI/LnJvbGUgIT09IFwiQURNSU5cIikgcmV0dXJuIHsgbWVzc2FnZTogXCJVbmF1dGhvcml6ZWRcIiB9O1xuXG4gICAgY29uc3QgbmFtZSA9IGZvcm1EYXRhLmdldChcIm5hbWVcIikgYXMgc3RyaW5nO1xuICAgIGNvbnN0IHN0YXR1cyA9IChmb3JtRGF0YS5nZXQoXCJzdGF0dXNcIikgYXMgXCJBQ1RJVkVcIiB8IFwiSU5BQ1RJVkVcIikgfHwgXCJBQ1RJVkVcIjtcbiAgICBjb25zdCBkb2IgPSAoZm9ybURhdGEuZ2V0KFwiZG9iXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBnZW5kZXIgPSAoZm9ybURhdGEuZ2V0KFwiZ2VuZGVyXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBkaWFnbm9zaXMgPSAoZm9ybURhdGEuZ2V0KFwiZGlhZ25vc2lzXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcbiAgICBjb25zdCBwYXJlbnRJZCA9IChmb3JtRGF0YS5nZXQoXCJwYXJlbnRJZFwiKSBhcyBzdHJpbmcpIHx8IG51bGw7XG5cbiAgICBpZiAoIW5hbWUpIHJldHVybiB7IG1lc3NhZ2U6IFwiTmFtZSBpcyByZXF1aXJlZFwiIH07XG5cbiAgICBhd2FpdCBkYi5pbnNlcnQoY2hpbGRyZW4pLnZhbHVlcyh7XG4gICAgICAgIG5hbWUsXG4gICAgICAgIHN0YXR1cyxcbiAgICAgICAgZG9iLFxuICAgICAgICBnZW5kZXIsXG4gICAgICAgIGRpYWdub3NpcyxcbiAgICAgICAgcGFyZW50SWRcbiAgICB9KTtcblxuICAgIHJldmFsaWRhdGVQYXRoKFwiL2NoaWxkcmVuc1wiKTtcbiAgICByZXZhbGlkYXRlUGF0aChcIi9zZXR0aW5nc1wiKTtcbiAgICByZXR1cm4geyBtZXNzYWdlOiBcIkNoaWxkIGNyZWF0ZWRcIiB9O1xufVxuXG5leHBvcnQgYXN5bmMgZnVuY3Rpb24gdXBkYXRlQ2hpbGQoaWQ6IHN0cmluZywgZm9ybURhdGE6IEZvcm1EYXRhKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICBjb25zdCBuYW1lID0gZm9ybURhdGEuZ2V0KFwibmFtZVwiKSBhcyBzdHJpbmc7XG4gICAgY29uc3Qgc3RhdHVzID0gKGZvcm1EYXRhLmdldChcInN0YXR1c1wiKSBhcyBcIkFDVElWRVwiIHwgXCJJTkFDVElWRVwiKSB8fCBcIkFDVElWRVwiO1xuICAgIGNvbnN0IGRvYiA9IChmb3JtRGF0YS5nZXQoXCJkb2JcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGdlbmRlciA9IChmb3JtRGF0YS5nZXQoXCJnZW5kZXJcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IGRpYWdub3NpcyA9IChmb3JtRGF0YS5nZXQoXCJkaWFnbm9zaXNcIikgYXMgc3RyaW5nKSB8fCBudWxsO1xuICAgIGNvbnN0IHBhcmVudElkID0gKGZvcm1EYXRhLmdldChcInBhcmVudElkXCIpIGFzIHN0cmluZykgfHwgbnVsbDtcblxuICAgIGlmICghbmFtZSkgcmV0dXJuIHsgbWVzc2FnZTogXCJOYW1lIGlzIHJlcXVpcmVkXCIgfTtcblxuICAgIGF3YWl0IGRiLnVwZGF0ZShjaGlsZHJlbikuc2V0KHtcbiAgICAgICAgbmFtZSxcbiAgICAgICAgc3RhdHVzLFxuICAgICAgICBkb2IsXG4gICAgICAgIGdlbmRlcixcbiAgICAgICAgZGlhZ25vc2lzLFxuICAgICAgICBwYXJlbnRJZFxuICAgIH0pLndoZXJlKGVxKGNoaWxkcmVuLmlkLCBpZCkpO1xuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvY2hpbGRyZW5zXCIpO1xuICAgIHJldmFsaWRhdGVQYXRoKFwiL3NldHRpbmdzXCIpO1xuICAgIHJldHVybiB7IG1lc3NhZ2U6IFwiQ2hpbGQgdXBkYXRlZFwiIH07XG59XG5cbmV4cG9ydCBhc3luYyBmdW5jdGlvbiBkZWxldGVDaGlsZChpZDogc3RyaW5nKSB7XG4gICAgY29uc3Qgc2Vzc2lvbiA9IGF3YWl0IGF1dGgoKTtcbiAgICBpZiAoc2Vzc2lvbj8udXNlcj8ucm9sZSAhPT0gXCJBRE1JTlwiKSByZXR1cm4geyBtZXNzYWdlOiBcIlVuYXV0aG9yaXplZFwiIH07XG5cbiAgICB0cnkge1xuICAgICAgICBhd2FpdCBkYi5kZWxldGUoY2hpbGRyZW4pLndoZXJlKGVxKGNoaWxkcmVuLmlkLCBpZCkpO1xuICAgIH0gY2F0Y2ggKGUpIHtcbiAgICAgICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDYW5ub3QgZGVsZXRlIGNoaWxkIGluIHVzZVwiIH07XG4gICAgfVxuXG4gICAgcmV2YWxpZGF0ZVBhdGgoXCIvc2V0dGluZ3NcIik7XG4gICAgcmV0dXJuIHsgbWVzc2FnZTogXCJDaGlsZCBkZWxldGVkXCIgfTtcbn1cbiJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoic1JBcVdzQiJ9
}),
"[project]/components/settings/CategoryModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/x.js [app-ssr] (ecmascript) <export default as X>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$e0b409__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:e0b409 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$dec973__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:dec973 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
function CategoryModal({ isOpen, onClose, category }) {
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    if (!isOpen) return null;
    const handleSubmit = async (e)=>{
        e.preventDefault();
        const formData = new FormData(e.currentTarget);
        startTransition(async ()=>{
            let result;
            if (category) {
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$dec973__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["updateCategory"])(category.id, formData);
            } else {
                result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$e0b409__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["createCategory"])(formData);
            }
            // Simple check for success message or lack of error
            // The actions return { message: string }
            if (result?.message.includes("created") || result?.message.includes("updated")) {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success(result.message);
                onClose();
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(result?.message || "Error saving category");
            }
        });
    };
    if (!mounted) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-2xl w-full max-w-md overflow-hidden shadow-2xl border border-gray-100 dark:border-neutral-800 animate-slide-up",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center justify-between p-6 border-b border-gray-100 dark:border-neutral-800",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h2", {
                            className: "text-xl font-bold text-gray-900 dark:text-white",
                            children: category ? "Edit Category" : "New Category"
                        }, void 0, false, {
                            fileName: "[project]/components/settings/CategoryModal.tsx",
                            lineNumber: 60,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            className: "p-2 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-full transition-colors",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$x$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__X$3e$__["X"], {
                                className: "w-5 h-5 text-gray-500"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/CategoryModal.tsx",
                                lineNumber: 64,
                                columnNumber: 25
                            }, this)
                        }, void 0, false, {
                            fileName: "[project]/components/settings/CategoryModal.tsx",
                            lineNumber: 63,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/settings/CategoryModal.tsx",
                    lineNumber: 59,
                    columnNumber: 17
                }, this),
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("form", {
                    onSubmit: handleSubmit,
                    className: "p-6 space-y-4",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("label", {
                                    className: "block text-sm font-medium mb-1 dark:text-gray-300",
                                    children: "Category Name"
                                }, void 0, false, {
                                    fileName: "[project]/components/settings/CategoryModal.tsx",
                                    lineNumber: 70,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("input", {
                                    name: "name",
                                    defaultValue: category?.name,
                                    placeholder: "e.g. Vacation",
                                    required: true,
                                    className: "w-full px-4 py-2 rounded-xl border border-gray-200 dark:border-neutral-700 bg-white dark:bg-neutral-800 focus:ring-2 focus:ring-blue-500 outline-none"
                                }, void 0, false, {
                                    fileName: "[project]/components/settings/CategoryModal.tsx",
                                    lineNumber: 71,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/settings/CategoryModal.tsx",
                            lineNumber: 69,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "pt-4 flex justify-end gap-3",
                            children: [
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "button",
                                    onClick: onClose,
                                    className: "px-4 py-2 text-gray-600 dark:text-gray-400 hover:bg-gray-100 dark:hover:bg-neutral-800 rounded-xl font-medium transition-colors",
                                    children: "Cancel"
                                }, void 0, false, {
                                    fileName: "[project]/components/settings/CategoryModal.tsx",
                                    lineNumber: 81,
                                    columnNumber: 25
                                }, this),
                                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                    type: "submit",
                                    disabled: isPending,
                                    className: "px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-xl font-medium shadow-lg shadow-blue-500/20 transition-all disabled:opacity-50",
                                    children: isPending ? "Saving..." : category ? "Save Changes" : "Create Category"
                                }, void 0, false, {
                                    fileName: "[project]/components/settings/CategoryModal.tsx",
                                    lineNumber: 88,
                                    columnNumber: 25
                                }, this)
                            ]
                        }, void 0, true, {
                            fileName: "[project]/components/settings/CategoryModal.tsx",
                            lineNumber: 80,
                            columnNumber: 21
                        }, this)
                    ]
                }, void 0, true, {
                    fileName: "[project]/components/settings/CategoryModal.tsx",
                    lineNumber: 68,
                    columnNumber: 17
                }, this)
            ]
        }, void 0, true, {
            fileName: "[project]/components/settings/CategoryModal.tsx",
            lineNumber: 58,
            columnNumber: 13
        }, this)
    }, void 0, false, {
        fileName: "[project]/components/settings/CategoryModal.tsx",
        lineNumber: 57,
        columnNumber: 9
    }, this), document.body);
}
}),
"[project]/components/ConfirmModal.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>ConfirmModal
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/triangle-alert.js [app-ssr] (ecmascript) <export default as AlertTriangle>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-dom.js [app-ssr] (ecmascript)");
"use client";
;
;
;
;
function ConfirmModal({ isOpen, onClose, onConfirm, title, description, confirmLabel = "Delete", cancelLabel = "Cancel", isPending = false }) {
    const [mounted, setMounted] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useEffect"])(()=>{
        setMounted(true);
    }, []);
    if (!mounted || !isOpen) return null;
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$dom$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["createPortal"])(/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "fixed inset-0 z-[60] flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-in fade-in duration-200",
        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
            className: "bg-white dark:bg-neutral-900 rounded-2xl w-full max-w-sm shadow-2xl animate-in zoom-in-95 duration-200 border border-gray-100 dark:border-neutral-800 flex flex-col overflow-hidden",
            children: [
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "p-6 text-center",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                            className: "w-12 h-12 bg-red-100 dark:bg-red-900/30 rounded-full flex items-center justify-center mx-auto mb-4 text-red-600 dark:text-red-500",
                            children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$triangle$2d$alert$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__AlertTriangle$3e$__["AlertTriangle"], {
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
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                            className: "text-xl font-bold text-gray-900 dark:text-white mb-2",
                            children: title
                        }, void 0, false, {
                            fileName: "[project]/components/ConfirmModal.tsx",
                            lineNumber: 43,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
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
                /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                    className: "flex items-center gap-3 p-6 pt-0",
                    children: [
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                            onClick: onClose,
                            disabled: isPending,
                            className: "flex-1 px-4 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-neutral-800 dark:hover:bg-neutral-700 text-gray-900 dark:text-white rounded-xl font-medium transition-colors disabled:opacity-50",
                            children: cancelLabel
                        }, void 0, false, {
                            fileName: "[project]/components/ConfirmModal.tsx",
                            lineNumber: 52,
                            columnNumber: 21
                        }, this),
                        /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
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
}),
"[project]/components/settings/CategoryList.tsx [app-ssr] (ecmascript)", ((__turbopack_context__) => {
"use strict";

__turbopack_context__.s([
    "default",
    ()=>CategoryList
]);
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react-jsx-dev-runtime.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/next/dist/server/route-modules/app-page/vendored/ssr/react.js [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/pen.js [app-ssr] (ecmascript) <export default as Edit2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/trash-2.js [app-ssr] (ecmascript) <export default as Trash2>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/plus.js [app-ssr] (ecmascript) <export default as Plus>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__ = __turbopack_context__.i("[project]/node_modules/lucide-react/dist/esm/icons/tag.js [app-ssr] (ecmascript) <export default as Tag>");
var __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$46d533__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__ = __turbopack_context__.i("[project]/lib/data:46d533 [app-ssr] (ecmascript) <text/javascript>");
var __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/node_modules/sonner/dist/index.mjs [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$settings$2f$CategoryModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/settings/CategoryModal.tsx [app-ssr] (ecmascript)");
var __TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConfirmModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__ = __turbopack_context__.i("[project]/components/ConfirmModal.tsx [app-ssr] (ecmascript)");
"use client";
;
;
;
;
;
;
;
function CategoryList({ categories }) {
    const [editingCategory, setEditingCategory] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const [isCreateOpen, setIsCreateOpen] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(false);
    const [isPending, startTransition] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useTransition"])();
    const [categoryToDelete, setCategoryToDelete] = (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["useState"])(null);
    const confirmDelete = ()=>{
        if (!categoryToDelete) return;
        startTransition(async ()=>{
            const result = await (0, __TURBOPACK__imported__module__$5b$project$5d2f$lib$2f$data$3a$46d533__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$text$2f$javascript$3e$__["deleteCategory"])(categoryToDelete);
            if (result?.message === "Category deleted") {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].success("Category deleted successfully");
            } else {
                __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$sonner$2f$dist$2f$index$2e$mjs__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["toast"].error(result?.message || "Failed to delete category");
            }
            setCategoryToDelete(null);
        });
    };
    return /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
        className: "glass-card rounded-2xl overflow-hidden animate-fade-in animate-delay-100 p-6",
        children: [
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$ConfirmModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: !!categoryToDelete,
                onClose: ()=>setCategoryToDelete(null),
                onConfirm: confirmDelete,
                title: "Delete Category?",
                description: "Are you sure you want to delete this category? Ensure no expenses are using it first.",
                confirmLabel: "Delete",
                isPending: isPending
            }, void 0, false, {
                fileName: "[project]/components/settings/CategoryList.tsx",
                lineNumber: 43,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$components$2f$settings$2f$CategoryModal$2e$tsx__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["default"], {
                isOpen: !!editingCategory || isCreateOpen,
                onClose: ()=>{
                    setEditingCategory(null);
                    setIsCreateOpen(false);
                },
                category: editingCategory
            }, void 0, false, {
                fileName: "[project]/components/settings/CategoryList.tsx",
                lineNumber: 53,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "flex justify-between items-center mb-6",
                children: [
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("h3", {
                                className: "text-lg font-bold text-gray-900 dark:text-white",
                                children: "Categories"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/CategoryList.tsx",
                                lineNumber: 61,
                                columnNumber: 21
                            }, this),
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("p", {
                                className: "text-sm text-gray-500",
                                children: "Manage expense categories"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/CategoryList.tsx",
                                lineNumber: 62,
                                columnNumber: 21
                            }, this)
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/CategoryList.tsx",
                        lineNumber: 60,
                        columnNumber: 17
                    }, this),
                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                        onClick: ()=>setIsCreateOpen(true),
                        className: "flex items-center px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-sm font-medium transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$plus$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Plus$3e$__["Plus"], {
                                className: "w-4 h-4 mr-2"
                            }, void 0, false, {
                                fileName: "[project]/components/settings/CategoryList.tsx",
                                lineNumber: 68,
                                columnNumber: 21
                            }, this),
                            "Add Category"
                        ]
                    }, void 0, true, {
                        fileName: "[project]/components/settings/CategoryList.tsx",
                        lineNumber: 64,
                        columnNumber: 17
                    }, this)
                ]
            }, void 0, true, {
                fileName: "[project]/components/settings/CategoryList.tsx",
                lineNumber: 59,
                columnNumber: 13
            }, this),
            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                className: "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4",
                children: categories.map((cat)=>/*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                        className: "flex items-center justify-between p-4 bg-gray-50 dark:bg-neutral-800 rounded-xl border border-gray-100 dark:border-neutral-700 group hover:border-blue-200 dark:hover:border-blue-900 transition-colors",
                        children: [
                            /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-3",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                        className: `w-8 h-8 rounded-full flex items-center justify-center ${cat.isSystem ? 'bg-gray-200 text-gray-600 dark:bg-neutral-700' : 'bg-blue-100 text-blue-600 dark:bg-blue-900/30'}`,
                                        children: cat.isSystem ? /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$tag$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Tag$3e$__["Tag"], {
                                            className: "w-4 h-4"
                                        }, void 0, false, {
                                            fileName: "[project]/components/settings/CategoryList.tsx",
                                            lineNumber: 78,
                                            columnNumber: 49
                                        }, this) : cat.name[0]
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/CategoryList.tsx",
                                        lineNumber: 77,
                                        columnNumber: 29
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "font-medium text-gray-900 dark:text-white",
                                        children: cat.name
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/CategoryList.tsx",
                                        lineNumber: 80,
                                        columnNumber: 29
                                    }, this),
                                    cat.isSystem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("span", {
                                        className: "text-[10px] uppercase tracking-wider font-bold text-gray-400 bg-gray-100 dark:bg-neutral-700 px-2 py-0.5 rounded-full",
                                        children: "Default"
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/CategoryList.tsx",
                                        lineNumber: 81,
                                        columnNumber: 46
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/settings/CategoryList.tsx",
                                lineNumber: 76,
                                columnNumber: 25
                            }, this),
                            !cat.isSystem && /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("div", {
                                className: "flex items-center gap-1 opacity-100 md:opacity-0 md:group-hover:opacity-100 transition-opacity",
                                children: [
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setEditingCategory(cat),
                                        className: "p-1.5 hover:bg-white dark:hover:bg-neutral-700 rounded-lg text-gray-500 hover:text-blue-600 transition-colors shadow-sm",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$pen$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Edit2$3e$__["Edit2"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/settings/CategoryList.tsx",
                                            lineNumber: 90,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/CategoryList.tsx",
                                        lineNumber: 86,
                                        columnNumber: 33
                                    }, this),
                                    /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])("button", {
                                        onClick: ()=>setCategoryToDelete(cat.id),
                                        disabled: isPending,
                                        className: "p-1.5 hover:bg-white dark:hover:bg-neutral-700 rounded-lg text-gray-500 hover:text-red-600 transition-colors shadow-sm disabled:opacity-50",
                                        children: /*#__PURE__*/ (0, __TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$next$2f$dist$2f$server$2f$route$2d$modules$2f$app$2d$page$2f$vendored$2f$ssr$2f$react$2d$jsx$2d$dev$2d$runtime$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__["jsxDEV"])(__TURBOPACK__imported__module__$5b$project$5d2f$node_modules$2f$lucide$2d$react$2f$dist$2f$esm$2f$icons$2f$trash$2d$2$2e$js__$5b$app$2d$ssr$5d$__$28$ecmascript$29$__$3c$export__default__as__Trash2$3e$__["Trash2"], {
                                            className: "w-3.5 h-3.5"
                                        }, void 0, false, {
                                            fileName: "[project]/components/settings/CategoryList.tsx",
                                            lineNumber: 97,
                                            columnNumber: 37
                                        }, this)
                                    }, void 0, false, {
                                        fileName: "[project]/components/settings/CategoryList.tsx",
                                        lineNumber: 92,
                                        columnNumber: 33
                                    }, this)
                                ]
                            }, void 0, true, {
                                fileName: "[project]/components/settings/CategoryList.tsx",
                                lineNumber: 85,
                                columnNumber: 29
                            }, this)
                        ]
                    }, cat.id, true, {
                        fileName: "[project]/components/settings/CategoryList.tsx",
                        lineNumber: 75,
                        columnNumber: 21
                    }, this))
            }, void 0, false, {
                fileName: "[project]/components/settings/CategoryList.tsx",
                lineNumber: 73,
                columnNumber: 13
            }, this)
        ]
    }, void 0, true, {
        fileName: "[project]/components/settings/CategoryList.tsx",
        lineNumber: 42,
        columnNumber: 9
    }, this);
}
}),
];

//# sourceMappingURL=%5Broot-of-the-server%5D__1de2d183._.js.map