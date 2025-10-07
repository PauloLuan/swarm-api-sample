import { existsSync } from 'fs';
import { readFile } from 'fs/promises';
import { spawn } from 'node:child_process';

if (!existsSync('prompt.txt')) {
  console.error('Error: file "prompt.txt" not found');
  process.exit(1);
}

const prompt = (await readFile('prompt.txt', 'utf8')).trim();
const projectName = JSON.parse(await readFile('package.json', 'utf8')).name;

const passThrough = process.argv.slice(2);

const args = [
  'claude-flow@alpha',
  'hive-mind',
  'spawn',
  JSON.stringify(prompt),
  '--namespace', projectName,
  '--claude',
  '--auto-spawn',
  '--continue-session',
  '--verbose',
  ...passThrough,
];

const child = spawn('npx', args, { stdio: 'inherit' });

child.on('close', (code, signal) => {
  if (signal) {
    process.kill(process.pid, signal);
    return;
  }
  process.exit(code ?? 0);
});

child.on('error', (err) => {
  console.error('Failed to start process:', err);
  process.exit(1);
});

const forwardSignal = (sig) => {
  if (child.pid) child.kill(sig);
};

process.on('SIGINT', forwardSignal);
process.on('SIGTERM', forwardSignal);
