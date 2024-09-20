# Sistematizacao_EPS_02_2024_CEUB
Sistematização de Engenharia de Softwares

O que é o Task Notifier
O Task Notifier é uma extensão desenvolvida para o navegador Chrome (mas pode ser usado no Edge) que fornece notificações na tela do computador na data e hora escolhidos pelo usuário. Ele elimina o uso do celular e é interessante para pessoas que ficam muito tempo em frente ao computador.
Arquitetura do Sistema
A extensão foi desenvolvida utilizando HTML, CSS e JavaScript, com armazenamento de dados de forma local utilizando a API de armazenamento do Chrome. Segue a modelagem UML
Autor: Regina Resende Barroso

Diagrama de Casos de Uso:
•	Atores: Usuário
•	Casos de Uso: Configurar Lembretes
 

Diagrama de Classes:
•	Classes Principais: Tarefas
•	Atributos e Métodos: Segue os principais métodos:
	O Popup.js contém métodos que interagem com a classe Tarefa, como adicionar e salvar tarefas.
	O Popup.js utiliza o Chrome Storage API para armazenar e carregar as tarefas.
	O Background.js pode acessar e manipular as tarefas para verificar o tempo e criar as notificações.
	O Background.js utiliza a Chrome Alarm API para criar alarmes.
	O Background.js usa a Chrome Notifications API para criar notificações quando um alarme é acionado.
 
Instalação da Extensão

O código fonte da extensão Task Notifier pode ser baixado no seguinte link:

https://github.com/macmilam/Sistematizacao_EPS_02_2024_CEUB

Para instalar a extensão no navegador Chrome (ou no Edge) é necessário fazer o download do projeto em formato zip, conforme tela abaixo. Basta clicar em Code e escolher a opção download zip.
Após o download, fazer a descompactação do arquivo no local de sua preferencia.


Após a descompactação, é necessário carregar a extensão no Google Chrome. Porém para fazer esse carregamento, precisamos habilitar o modo desenvolvedor no Chrome. Devemos acessar o link:

chrome://extensions

ou, caso for no Edge:

edge://extensions

Ao acessar o link, precisamos habilitar a funcionalidade de desenvolvedor para depois fazer o carregamento da extensão. Após habilitar a opção citada, devemos ir na opção carregar sem compactação e indicar a pasta que foi descompactada com os arquivos do projeto.

 Após esse procedimento a extensão irá ser carregada. Para ativá-la, basta ir no ícone de extensões e habilitar o Task Notifier:

 


Utilização

O uso da extensão é simples e intuitivo. Basta clicar no ícone do relógio e preencher os campos Descrição da tarefa, digitar a data (ou clicar no calendário), digitar a hora desejada para configurar o alarme e clicar no botão Adicionar Tarefa. Após o cadastramento da tarefa é possível excluir qualquer dos registros através do botão Excluir.No dia e hora agendados, o sistema irá mostrar uma notificação como a da imagem abaixo:

Caso encontre algum problema na utilização ou mensagem de erro, você pode encaminhar uma mensagem para o email regina.resende@sempreceub.com .
