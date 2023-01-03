import greenImg from '../assets/produtores/green.png';
import saladImg from '../assets/produtores/salad.png';
import jennyjackImg from '../assets/produtores/jenny-jack.png';
import growImg from '../assets/produtores/grow.png';
import potagerImg from '../assets/produtores/potager.png';

const gerarNumeroAleatorio = (min, max) => {
  return Math.floor(Math.random() * (max - min + 1) + min);
};

const produtores = {
  titulo: 'Produtores',
  lista: [
    {
      nome: 'Green',
      imagem: greenImg,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Salad',
      imagem: saladImg,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Jenny Jack',
      imagem: jennyjackImg,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Grow',
      imagem: growImg,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
    },
    {
      nome: 'Potager',
      imagem: potagerImg,
      distancia: gerarNumeroAleatorio(1, 500),
      estrelas: gerarNumeroAleatorio(1, 5),
    },
  ],
};

export default produtores;
