exports.handler = async (event) => {
  const secretKey = process.env.STRIPE_SECRET_KEY;
  
  return {
    statusCode: 200,
    headers: { "Access-Control-Allow-Origin": "*" },
    body: JSON.stringify({
      hasKey: !!secretKey,
      keyPrefix: secretKey ? secretKey.substring(0, 7) : "NOT FOUND",
      nodeVersion: process.version,
      method: event.httpMethod,
    }),
  };
};
