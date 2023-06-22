const ValidationSource = {
  BODY: "body",
  HEADER: "header",
  QUERY: "query",
  PARAM: "params",
};

const validate =
  (schema, source = ValidationSource.BODY) =>
  async (req, res, next) => {
    try {
      const { error } = schema.validate(req[source]);

      if (!error) return next();

      const { details } = error;
      const message = details
        .map((detail) => detail.message.replace(/['"]+/g, ""))
        .join(",");
      res.status(400).send({ message: message });
    } catch (error) {
      res.status(500).send({ message: "Error" });
    }
  };

module.exports = {
  validate,
  ValidationSource,
};
