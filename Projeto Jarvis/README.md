# 🛠️ Jarvis - Guia Técnico e de Instalação

Este diretório contém o núcleo operacional do Jarvis. Siga as instruções abaixo para configurar o ambiente de desenvolvimento e executar o agente.

---

## 📋 Pré-requisitos

- **Python 3.10 ou superior** instalado.
- Chaves de API para:
  - **LiveKit** (URL, Key, Secret)
  - **Google Gemini** (API Key)
  - **Mem0** (API Key)

---

## ⚙️ Configuração do Ambiente

### 1. Criar Ambiente Virtual (VENV)
No terminal, dentro desta pasta, execute:
```powershell
python -m venv venv
```

### 2. Ativar o Ambiente Virtual
- **Windows (PowerShell):**
  ```powershell
  .\venv\Scripts\Activate.ps1
  ```
- **Windows (CMD):**
  ```cmd
  venv\Scripts\activate
  ```

### 3. Instalar Dependências
Com o venv ativado, instale os pacotes necessários:
```powershell
pip install -r requirements.txt
```

### 4. Configurar Playwright
O Jarvis utiliza o Playwright para automação web. Instale os navegadores necessários:
```powershell
playwright install
```

---

## 🚀 Execução

### Modo de Desenvolvimento
Para iniciar o agente em modo de desenvolvimento, você tem duas opções:

1. **Via Terminal (VENV Ativado):**
   ```powershell
   python agent.py dev
   ```

2. **Via Arquivo Batch (Recomendado Criar):**
   Basta dar um duplo clique no arquivo:
   - `Jarvis.bat`

O script `.bat` já cuida da ativação do ambiente virtual e inicia o agente automaticamente.

---

## 🔑 Variáveis de Ambiente

Certifique-se de que o arquivo `.env` na raiz desta pasta contenha as seguintes chaves:

```env
LIVEKIT_URL=wss://...
LIVEKIT_API_KEY=...
LIVEKIT_API_SECRET=...
GOOGLE_API_KEY=...
MEM0_API_KEY=...
```

---

## 📂 Estrutura Principal

- `agent.py`: Ponto de entrada principal do agente.
- `automacao_jarvis.py`: Módulo de controle de sistema e automação.
- `prompts.py`: Definições de personalidade e instruções do sistema.
- `requirements.txt`: Lista de dependências do Python.
