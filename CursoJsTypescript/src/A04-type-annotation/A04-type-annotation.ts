// Declaração de Objetos

const objetoA: {
  chaveA: string;
  chaveB: string;
  [key: string]: unknown; // Permite chaves adicionais com valores de qualquer tipo
  // [key: string]: any; // Alternativa mais permissiva, mas menos segura
  // [key: string]: string; // Permite apenas chaves adicionais com valores do tipo string
} = {
  chaveA: 'Valor A',
  chaveB: 'Valor B',
};

objetoA.chaveA = 'Outro Valor A';
objetoA.chaveB = 'Outro Valor B';

console.log(objetoA);
// Exemplo de uso de chaves adicionais
