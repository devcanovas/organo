import { v4 as uuidv4 } from 'uuid';

const _mockTeams = [
    {
        id: uuidv4(),
        name: 'Programação',
        color: '#57C278'
    },
    {
        id: uuidv4(),
        name: 'Front-End',
        color: '#82CFFA'
    },
    {
        id: uuidv4(),
        name: 'Data Science',
        color: '#A6D157'
    },
    {
        id: uuidv4(),
        name: 'Devops',
        color: '#E06B69'
    },
    {
        id: uuidv4(),
        name: 'UX e Design',
        color: '#DB6EBF'
    },
    {
        id: uuidv4(),
        name: 'Mobile',
        color: '#FFBA05'
    },
    {
        id: uuidv4(),
        name: 'Inovação e Gestão',
        color: '#FF8A29'
    }
]
const _mockWorkers = [
    {
        id: uuidv4(),
        nome: 'Lucas Montano',
        cargo: 'Android Engineer',
        imagem: 'http://github.com/lucasmontano.png',
        time: 'Mobile',
        isFavorite: false
    },
    {
        id: uuidv4(),
        nome: 'Filipe Deschamps',
        cargo: 'NodeJS Developer',
        imagem: 'http://github.com/filipedeschamps.png',
        time: 'Programação',
        isFavorite: false
    },
    {
        id: uuidv4(),
        nome: 'Micael Mota',
        cargo: 'Full-stack developer',
        imagem: 'http://github.com/micaelomota.png',
        time: 'Front-End',
        isFavorite: false
    },
    {
        id: uuidv4(),
        nome: 'Matheus Canovas',
        cargo: 'Full-stack Developer',
        imagem: 'http://github.com/devcanovas.png',
        time: 'Front-End',
        isFavorite: false
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