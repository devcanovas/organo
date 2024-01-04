const _mockTeams = [
    {
        name: 'Programação',
        primaryColor: '#57C278',
        secondaryColor: '#D9F7E9'
    },
    {
        name: 'Front-End',
        primaryColor: '#82CFFA',
        secondaryColor: '#E8F8FF'
    },
    {
        name: 'Data Science',
        primaryColor: '#A6D157',
        secondaryColor: '#F0F8E2'
    },
    {
        name: 'Devops',
        primaryColor: '#E06B69',
        secondaryColor: '#FDE7E8'
    },
    {
        name: 'UX e Design',
        primaryColor: '#DB6EBF',
        secondaryColor: '#FAE9F5'
    },
    {
        name: 'Mobile',
        primaryColor: '#FFBA05',
        secondaryColor: '#FFF5D9'
    },
    {
        name: 'Inovação e Gestão',
        primaryColor: '#FF8A29',
        secondaryColor: '#FFEEDF'
    }
]
const _mockWorkers = [
    {
        nome: 'Lucas Montano',
        cargo: 'Android Engineer',
        imagem: 'http://github.com/lucasmontano.png',
        time: 'Mobile'
    },
    {
        nome: 'Filipe Deschamps',
        cargo: 'NodeJS Developer',
        imagem: 'http://github.com/filipedeschamps.png',
        time: 'Programação'
    },
    {
        nome: 'Micael Mota',
        cargo: 'Full-stack developer',
        imagem: 'http://github.com/micaelomota.png',
        time: 'Front-End'
    },
    {
        nome: 'Matheus Canovas',
        cargo: 'Full-stack Developer',
        imagem: 'http://github.com/devcanovas.png',
        time: 'Front-End'
    }
]

class Mock {
    static get mockTeams() {
        return _mockTeams;
    }

    static get mockWorkers() {
        return _mockWorkers
    }
}

export default Mock