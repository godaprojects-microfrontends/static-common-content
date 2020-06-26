const fs = require('fs')

const configurtions = [
    {
        id: '1',
        name: 'name1',
        value: 'value1'
    },
    {
        id: '2',
        name: 'name2',
        value: 'value2'
    }
]

fs.writeFileSync('./static/configurations.json', JSON.stringify(configurtions))