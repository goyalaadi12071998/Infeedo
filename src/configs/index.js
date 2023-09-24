const devConfigs = require('./dev-config')
const dockerConfigs = require('./docker-config')

var cfg = {}

const availableConfigs = {
    dev: devConfigs,
    stage: dockerConfigs,
}

const initConfigs = (env) => {
    cfg = availableConfigs[env]
}

const getConfigs = () => {
    return cfg
}

module.exports = {getConfigs, initConfigs}