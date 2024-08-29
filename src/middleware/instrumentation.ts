import { Request, Response, NextFunction } from 'express';

const instrumentationMiddleware = (req: Request, res: Response, next: NextFunction) => {
  const start = Date.now();
  console.log(`Incoming request: ${req.method} ${req.url}`);

  res.on('finish', () => {
    const duration = Date.now() - start;
    console.log(`Request to ${req.method} ${req.url} completed with status ${res.statusCode} in ${duration}ms`);
  });

  next();
};

export default instrumentationMiddleware;
