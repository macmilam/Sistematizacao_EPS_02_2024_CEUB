


// Listener para o evento de alarme
chrome.alarms.onAlarm.addListener(function(alarm) {
    // Obtém as tarefas armazenadas
    chrome.storage.sync.get({ tasks: [] }, function(data) {
      const tasks = data.tasks; // Obtém a lista de tarefas
      const now = new Date(); // Obtém a data e hora atuais
      const currentTime = `${now.getHours()}:${now.getMinutes().toString().padStart(2, '0')}`; // Formata a hora atual
      const currentDate = now.toISOString().split('T')[0]; // Formato YYYY-MM-DD para a data atual
  
      // Verifica cada tarefa armazenada
      tasks.forEach(task => {
        // Verifica se a data e a hora da tarefa correspondem à data e hora atuais
        if (task.date === currentDate && task.time === currentTime) {
          // Cria uma notificação para a tarefa
          chrome.notifications.create({
            type: 'basic',
            iconUrl: chrome.runtime.getURL('icons/icon48.png'), // Caminho para o ícone da notificação
            title: 'Lembrete de Tarefa', // Título da notificação
            message: task.task, // Mensagem da notificação com a descrição da tarefa
            priority: 1 // Prioridade da notificação
          });
        }
      });
    });
  });
  
  // Configura um alarme para verificar tarefas a cada minuto
  chrome.alarms.create('taskReminder', { periodInMinutes: 1 });