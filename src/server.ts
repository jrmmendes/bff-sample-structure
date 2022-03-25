import { createLightship } from 'lightship';
import { bootstrap } from './bootstrap';

(async () => {
  const app = bootstrap();

  process.env['ROARR_LOG'] = 'true';

  const lightship = await createLightship({
    port: 9000,
    detectKubernetes: false,
  })

  const server = app.listen(
    3000,
    () => console.log('Started | http://localhost:3000'),
  );

  server.on('error', () => lightship.shutdown());
  server.on('listening', () => lightship.signalReady());

  lightship.registerShutdownHandler(() => {
    server.close();
  });
})();
