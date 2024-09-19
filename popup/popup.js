

document.addEventListener('DOMContentLoaded', function() {
  // Obtém os elementos da interface
  const taskInput = document.getElementById('task'); // Campo de entrada para a tarefa
  const dateInput = document.getElementById('date'); // Campo de entrada para a data
  const timeInput = document.getElementById('time'); // Campo de entrada para a hora
  const addTaskButton = document.getElementById('add-task'); // Botão de adicionar tarefa
  const taskList = document.getElementById('task-list'); // Lista onde as tarefas serão exibidas

  // Carregar tarefas armazenadas ao abrir o popup
  loadTasks();

  // Adiciona um listener para o botão de adicionar tarefa
  addTaskButton.addEventListener('click', function() {
    const task = taskInput.value; // Obtém a descrição da tarefa
    const date = dateInput.value; // Obtém a data da tarefa
    const time = timeInput.value; // Obtém a hora da tarefa

    // Verifica se todos os campos estão preenchidos
    if (task && date && time) {
      const taskObject = { task, date, time }; // Cria um objeto de tarefa
      saveTask(taskObject); // Salva a tarefa
      // Limpa os campos de entrada
      taskInput.value = '';
      dateInput.value = '';
      timeInput.value = '';
      loadTasks(); // Recarrega a lista de tarefas
    }
  });

  // Função para salvar a tarefa no armazenamento
  function saveTask(task) {
    chrome.storage.sync.get({ tasks: [] }, function(data) {
      const tasks = data.tasks; // Obtém a lista de tarefas existentes
      tasks.push(task); // Adiciona a nova tarefa à lista
      // Salva a lista atualizada no armazenamento
      chrome.storage.sync.set({ tasks }, function() {
        console.log('Tarefa salva:', task); // Log para confirmação
      });
    });
  }

  // Função para carregar e exibir as tarefas armazenadas
  function loadTasks() {
    chrome.storage.sync.get({ tasks: [] }, function(data) {
      taskList.innerHTML = ''; // Limpa a lista antes de carregar
      data.tasks.forEach((taskObj, index) => {
        // Cria um item de lista para cada tarefa
        const li = document.createElement('li');
        li.textContent = `${taskObj.task} - ${taskObj.date} ${taskObj.time}`; // Exibe a descrição, data e hora

        // Cria um botão de exclusão
        const deleteButton = document.createElement('button');
        deleteButton.textContent = 'Excluir'; // Texto do botão
        // Adiciona um listener para o botão de exclusão
        deleteButton.addEventListener('click', function() {
          deleteTask(index); // Chama a função de exclusão
        });

        li.appendChild(deleteButton); // Adiciona o botão ao item da lista
        taskList.appendChild(li); // Adiciona o item à lista
      });
    });
  }

  // Função para excluir uma tarefa
  function deleteTask(index) {
    chrome.storage.sync.get({ tasks: [] }, function(data) {
      const tasks = data.tasks; // Obtém a lista de tarefas existentes
      tasks.splice(index, 1); // Remove a tarefa pelo índice
      chrome.storage.sync.set({ tasks }, function() {
        loadTasks(); // Recarrega a lista de tarefas
      });
    });
  }
});