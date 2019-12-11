export const title = 'Blockchain'
export const content =
  'A blockchain (também conhecido como “o protocolo da confiança”) é uma tecnologia de registro distribuído que visa a descentralização como medida de segurança. São bases de registros e dados distribuídos e compartilhados que têm a função de criar um índice global para todas as transações que ocorrem em um determinado mercado. Funciona como um livro-razão, só que de forma pública, compartilhada e universal, que cria consenso e confiança na comunicação direta entre duas partes, ou seja, sem o intermédio de terceiros. Está constantemente crescendo à medida que novos blocos completos são adicionados a ela por um novo conjunto de registros. Os blocos são adicionados à blockchain de modo linear e cronológico. Cada nó - qualquer computador que conectado a essa rede tem a tarefa de validar e repassar transações - obtém uma cópia da blockchain após o ingresso na rede. A blockchain possui informação completa sobre endereços e saldos diretamente do bloco gênese até o bloco mais recentemente concluído.'
export const keyWords = ['blockchain', 'security', 'bitcoin']

export const data = {
  title: title,
  content: content,
  keyWords: keyWords,
  refs: ['Wikipedia', 'Multichain', 'Bitcoin']
}

export const info = {
  stream: 'post',
  key: 'content',
  open: false,
  permissions: { restrict: 'write' }
}
