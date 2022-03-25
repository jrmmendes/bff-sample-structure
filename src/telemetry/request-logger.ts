import morgan from 'morgan';

export const requestLogger = () => {
  if (process.env['NODE_ENV'] === 'DEVELOPMENT') {
    return morgan('dev');
  }

  return morgan('tiny');
}