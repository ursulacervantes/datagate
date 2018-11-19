/*eslint-disable no-var, vars-on-top, no-console */
const { exec } = require('child_process');
const chalk = require('chalk');
const Rsync = require('rsync');
const yargs = require('yargs');

const paths = require('../config/paths');

function publish() {
  console.log(chalk.blue('Publishing...'));
  const rsync = new Rsync()
    .shell('ssh')
    .exclude('.DS_Store')
    .flags('az')
    .source(`${paths.destination}/`)
    .destination('reactboilerplate@react-boilerplate.com:/home/reactboilerplate/public_html/redux-saga');

  rsync.execute((error, code, cmd) => {
    if (error) {
      console.log(chalk.red('Something went wrong...', error, code, cmd));
      process.exit(1);
    }

    console.log(chalk.green('Published'));
  });
}

function deploy() {
  const start = Date.now();
  console.log(chalk.green('Bundling...'));

  return exec('npm run build', errBuild => {
    if (errBuild) {
      console.log(chalk.red(errBuild));
      process.exit(1);
    }

    console.log(`Bundled in ${(Date.now() - start) / 1000} s`);

    publish();
  });
}

module.exports = yargs
  .command({
    command: 'publish',
    desc: 'publish last build',
    handler: publish,
  })
  .command({
    command: 'deploy',
    desc: 'build and publish',
    handler: deploy,
  })
  .demandCommand()
  .help()
  .wrap(72)
  .version(false)
  .strict()
  .fail((msg, err, instance) => {
    if (err) {
      throw new Error(err);
    }

    console.error(`${chalk.red(msg)}
    `);
    console.log(instance.help());
    process.exit(1);
  })
  .argv;
