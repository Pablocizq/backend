function validateDto(dtoValidator) {
  return (req, res, next) => {
    try {
      req.validatedBody = dtoValidator(req.body);
      next();
    } catch (error) {
      return res.status(400).json({
        message: error.message || "Datos de entrada no válidos",
      });
    }
  };
}

module.exports = validateDto;