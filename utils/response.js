export function responseTemplate(res, data, message, status) {
  res.status(status).json({
    response_code: status,
    response_message: message,
    data: data,
  });
}
