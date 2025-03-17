// npx ts-node test.ts
import { createLogDash } from './dist/index';

const { logger } = createLogDash();

logger.error('This is an error message');
logger.warn('This is a warning message');
logger.info('This is an info message');
logger.http('This is an http message');
logger.verbose('This is a verbose message');
logger.debug('This is a debug message');
logger.silly('This is a silly message');

const { logger: syncLogger } = createLogDash({ apiKey: 'MY_API_KEY' });

syncLogger.error('This is a SYNCED error message');
