const nome = document.getElementById('nome');
const gerar = document.querySelector('.gerar');
const story = document.querySelector('.story');

function randomValueFromArray(array) {
    const random = Math.floor(Math.random() * array.length);
    return array[random];
}

let storyText = `No estado de <i style='color: #0065d0;'>:estado:</i> aconteceu um evento que contou com a 
presença de <i style='color: #0065d0;'>:nome:</i> cujo seu objetivo era palestrar :atividade: para os estudantes da 
universidade <i style='color: #0065d0;'>:universidade:</i> de <i style='color: #0065d0;'>:estado2:</i>.

<br><br>

Logo após a palastra foi concedido aos estudante um tempo para tirarem duvidas, onde a primeira fala foi feita por
<i style='color: #0065d0;'>:nome:</i> que perguntou sobre <i style='color: #0065d0;'>:pergunta:</i>.
`;

let estados = ['Minas Gerais', 'São Paulo', 'Brasilia', 'Macapá', 'Góias', 'Santa Catarina']

let nomes = ['Steves Jobs', 'Mark Zuckerberg ', 'Bill Gates', 'Alex Salgado']

let ativades = ['sobre as inovaçoes do mercado de tecnologia', 'sobre as atividades repetitivas no processo de desenvolvimento de software']

let universidades = ['federal', 'municipal', 'estadual'];

let alunos = ['Lucas Souza', 'Matheus Enrique', 'Joana Gabriela', 'Breno Cruz', 'Marcos Sacramento'];

let perguntas = ['o desenvolvimento de aplicativos desktop com react', 'o processo de modelagem de sistemas', 'o desenvolvimentos de aplicativos mobile'];




gerar.addEventListener('click', result);

function result() {
    let newStory = storyText;



    let estadoRand = randomValueFromArray(estados);
    let nomeRand = randomValueFromArray(nomes);
    let atividadeRand = randomValueFromArray(ativades);
    let universidadeRand = randomValueFromArray(universidades);
    var alunosRand = randomValueFromArray(alunos);
    var perguntasRand = randomValueFromArray(perguntas);



    newStory = newStory.replace(':estado:', estadoRand);
    newStory = newStory.replace(':nome:', nomeRand);
    newStory = newStory.replace(':atividade:', atividadeRand);
    newStory = newStory.replace(':universidade:', universidadeRand);
    newStory = newStory.replace(':estado2:', estadoRand);
    newStory = newStory.replace(':pergunta:', perguntasRand);



    if (nome.value !== '') {
        const name = nome.value;
        newStory = newStory.replace(':nome:', name);
    } else {
        newStory = newStory.replace(':nome:', alunosRand);
    }

    if (document.getElementById("idioma").value === 'us') {
        const weight = Math.round(300 * 0.0714286) + ' stone';
        const temperature = Math.round((94 - 32) * 5 / 9) + ' centigrade';
        newStory = newStory.replace('94 fahrenheit', temperature);
        newStory = newStory.replace('300 pounds', weight);
    }

    story.innerHTML = newStory;
    story.style.visibility = 'visible';
}
story.style.visibility = 'visible';