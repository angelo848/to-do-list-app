<img src="https://user-images.githubusercontent.com/39395681/74628150-9ef10900-5133-11ea-9e1e-f423e86f0fd2.png">

<h1>ToDo App</h1>

<p>Esta aplicação é uma lista de tarefas</p>

<h5>As bibliotecas Font Awesome Icon, date-fns e styled components foram utilizadas</h5>

<h2>Fluxo da aplicação</h2>

<h3>App.js</h3>

<p>
  O arquivo App.js é a porta de entrada da aplicação, nele são definidas todas
  funções mais importantes, e onde são importados e renderizados os componentes

  É um stateful component, guardando os estados das "tasks" (tarefas), "filteredTasks"
  (tarefas filtradas), menu lateral e calendário

  As funções `handleAddTask`, `handleUpdateTask` e `handleDeleteTask` adicionam,
  editam e deletam tarefas, repectivamente

  As funções `handleToggleStatus` e `handleToggleFavor` alternam o status de uma tarefa,
  se ela foi ou não finalizada, e a importância dela.

  A função `filterTasks` serve para filtrar as tarefas de acordo com o filtro desejado:
  `favored`, `scheduled` ou `finished`. Renderizando apenas as tarefas desejadas.

  A função `toggleCalendar` é utilizada para alterar o estado do calendário, para
  renderizá-lo apenas quando necessário, seja como datepicker, ou exibir as tarefas
</p>


<h2>Componentes</h2>

<ul>
  <li>TodoList</li>
  Componente que possui um formulário com input para adicionar uma tarefa e uma
  lista de tarefas

  Possui um array de 10 cores, que são geradas aleatoriamente para serem adicionadas
  nas tarefas

  <li>Task</li>
  Componente que renderiza uma tarefa, possibilita o usuário alterar seu conteúdo,
  favoritar, excluir, finalizá-la ou agendá-la através dos ícones.

  Utilizou-se o date-fns para formatar a data que a tarefa foi agendada.

  <li>Sidebar</li>
  Componente que serve de menu lateral, podendo ter sua largura diminuída, de acordo
  com o estado `sidebarOpen`

  É possível aplicar filtros na renderização das tarefas através das opções, inclusive
  mostrar as tarefas que estão agendadas, mostrando o calendário

  <li>Calendar</li>
  Este componente foi declarado em forma de classe para facilitar a visualização do código.

  Ele foi dividido em 3 partes: header, days e cells

  O header é controlado pela função `renderHeader()` que formata a data do mês atual
  através da lib date-fns e exibe o nome do mês e ano no header, junto com 2 botões
  para mostrar o próximo mês e o mês anterior

  A parte do days é controlado pela função `renderDays()` e exibe os 7 dias da semana
  em uma linha, de forma abreviada. Primeiro ele declara um array `days` vazio.
  A variável startDate recebe o início da semana a partir do mês atual utilizando
  a função `startOfWeek`, função do módulo date-fns. Em seguida, no for, são adicionados
  os 7 dias no array, utilizando a função `format` do módulo date-fns

  E a última parte do calendário, em que são exibidos todos os dias do mês, através
  da função `renderCells()`. Primeiro a função guarda o início e final do mês e da semana.
  Depois define a formatação em que será exibidos os dias, através de números de 1 dígitos,
  seguindo a doocumentação do date-fns 'd'. São criadas linhas que representarão as semanas,
  e dias em arrays vazios. A variável day recebe o valor do início da semana, e no while
  enquanto não chegar ao fim da semana é repetido um for para todos os dias da semana.
  A variável cloneDay salvará o valor de day, para que seja utilizada no datepicker.
  A variável schedules filtra todas as tarefas que já foram agendadas, para que coloque
  uma classe nos dias que possuem tarefas agendadas. Então para cada dia, é executado um push
  no array days, colocando uma célula com o número do dia, a classe, uma key e o método
  onClick, que servirá para selecionar um dia.

</ul>