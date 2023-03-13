import { loadSmplrJs, Smplr } from '@smplrspace/smplr-loader';

export function initSpace(smplr: Smplr) {
  const space = new smplr.Space({
    spaceId: 'edb2ebaa-47ea-4e54-af0d-cf543328bdb0',
    clientToken: 'pub_eb760fee77634cdab2fe31146fc371c2',
    containerId: 'test',
  });
  space.startViewer({
    preview: true,
    onReady: () => console.log('Viewer is ready'),
    onError: (error) => console.error('Could not start viewer', error),
  });
}

// we recommend using the default value 'esm' in your code but stackblitz required 'umd'
loadSmplrJs('umd')
  .then((smplr) => initSpace(smplr))
  .catch((error) => console.error(error));
