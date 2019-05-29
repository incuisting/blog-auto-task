const shell = require('shelljs')
const { CronJob } = require('cron')

function getNewest() {
  shell.cd('/blog')
  shell.exec('git pull')
}

let job = new CronJob('0 */1 * * * *', function() {
  getNewest()
})

job.start()
