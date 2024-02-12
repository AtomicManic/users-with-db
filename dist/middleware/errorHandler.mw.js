export const errorHandler = (err, req, res, next) => {
    res
        .status((err === null || err === void 0 ? void 0 : err.status) || 500)
        .json({ message: err.message || "Internal Server Error" });
};
