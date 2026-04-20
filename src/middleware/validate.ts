import { Request, Response, NextFunction } from 'express';

export const validate = (schema: Record<string, string>) => {
  return (req: Request, res: Response, next: NextFunction): void => {
    const missingFields: string[] = [];
    
    for (const [field, type] of Object.entries(schema)) {
      if (req.body[field] === undefined || req.body[field] === null || req.body[field] === '') {
        missingFields.push(field);
      }
    }
    
    if (missingFields.length > 0) {
      res.status(400).json({
        message: `Missing required fields: ${missingFields.join(', ')}`,
      });
      return;
    }
    
    next();
  };
};
