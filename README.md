# Passo a Passo para Executar o Projeto
Este arquivo contém as instruções necessárias para executar o projeto clonado do repositório do GitHub utilizando Next.js. Siga as etapas abaixo para configurar e executar o projeto com sucesso.

# Pré-requisitos
Certifique-se de ter os seguintes requisitos instalados em sua máquina:

Um codificador de sua preferência (por exemplo, Visual Studio Code, Sublime Text, Atom)
Node.js (versão recomendada: 12.x ou superior)
npm (gerenciador de pacotes do Node.js)
Git (para clonar o repositório)

# Passo 1: Clonar o Repositório
Clone o projeto do repositório Git para o diretório de sua escolha usando o seguinte comando:


git clone https://github.com/fernandovalenca/frontend-upload-csv.git

# Passo 2: Configurar o Arquivo .env
Após clonar o projeto, navegue até a pasta raiz do projeto no seu codificador preferido. Em seguida, siga as etapas abaixo:

Crie um arquivo chamado .env.local no diretório raiz do projeto.

Abra o arquivo .env.local no seu codificador e adicione a seguinte linha:

NEXT_PUBLIC_API_BASE_URL="http://localhost:3333"
Certifique-se de salvar o arquivo após adicionar a linha acima.

# Passo 3: Instalar Dependências
No terminal, navegue até a pasta raiz do projeto e execute o seguinte comando para instalar as dependências necessárias:

Esse comando irá baixar e instalar todas as dependências listadas no arquivo package.json.

# Passo 4: Executar o Projeto
Após a conclusão da instalação das dependências, execute o seguinte comando para iniciar o projeto:

npm run dev
Isso irá iniciar o servidor de desenvolvimento e executar o projeto. Verifique o terminal para visualizar qualquer mensagem de log ou erro.

Após a execução bem-sucedida, você poderá acessar o projeto em http://localhost:3000 (ou outra porta especificada, se for diferente).

Agora você pode explorar e utilizar o projeto clonado!

# Conclusão
Ao seguir essas etapas, você será capaz de configurar e executar o projeto clonado do GitHub usando Next.js. Certifique-se de preencher corretamente o arquivo .env.local com a variável NEXT_PUBLIC_API_BASE_URL definida como http://localhost:3333. Em caso de dúvidas ou problemas, consulte a documentação do projeto ou entre em contato com o desenvolvedor responsável.
