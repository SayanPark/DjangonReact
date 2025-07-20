import { spawn } from 'child_process';

function startTunnel(name, configPath) {
  return new Promise((resolve, reject) => {
    const tunnel = spawn('cloudflared', ['tunnel', '--config', configPath, 'run', name]);

    tunnel.stdout.on('data', (data) => {
      console.log(`[${name} tunnel] ${data}`);
    });

    tunnel.stderr.on('data', (data) => {
      console.error(`[${name} tunnel ERROR] ${data}`);
    });

    tunnel.on('close', (code) => {
      console.log(`[${name} tunnel] exited with code ${code}`);
      if (code !== 0) {
        reject(new Error(`${name} tunnel exited with code ${code}`));
      }
    });

    // Resolve immediately after spawn to keep tunnels running concurrently
    resolve(tunnel);
  });
}

async function startTunnels() {
  try {
    const backendTunnel = await startTunnel('backend-szkblog', 'frontend/.cloudflared/backend-config.yml');
    const frontendTunnel = await startTunnel('frontend-szkblog', 'frontend/.cloudflared/frontend-config.yml');

    process.on('SIGINT', () => {
      console.log('Closing tunnels...');
      backendTunnel.kill();
      frontendTunnel.kill();
      process.exit();
    });

    // Keep process alive
    await new Promise(() => {});
  } catch (err) {
    console.error('Error starting tunnels:', err);
    process.exit(1);
  }
}

startTunnels();
