# 🎙️ Jarvis - Agente de Inteligência Artificial Pessoal

O **Jarvis** é um assistente virtual avançado projetado para automatizar tarefas diárias e gerenciar o sistema operacional através de comandos de voz e texto, tendo também a opção de compartilhamento de tela para ajuda em tempo real. Construído com foco em produtividade e experiência do usuário, ele combina o poder dos modelos de linguagem com automações robustas do sistema.

---

## 🚀 O que é o Jarvis?

O Jarvis não é apenas um chatbot; é um **Agente Operacional**. Ele atua como uma interface inteligente entre o usuário e o computador, sendo capaz de entender intenções e executar ações reais no Windows, desde organizar pastas até controlar a reprodução de mídia e realizar buscas inteligentes na web.

---

## ✨ Funcionalidades Principais

### 🧠 Memória de Longo Prazo
Utiliza a tecnologia **Mem0** para lembrar de preferências, gostos e interações passadas do usuário, permitindo uma experiência personalizada e contextualizada em cada conversa.

### 🌐 Automação Web e Mídia
- **Busca Inteligente:** Realiza pesquisas otimizadas no Google e YouTube.
- **Controle de Mídia:** Pausa e retoma vídeos do YouTube diretamente no Chrome via CDP (Chrome DevTools Protocol) ou atalhos de sistema.
- **Navegação Rápida:** Atalhos integrados para as principais plataformas (GitHub, WhatsApp, ChatGPT, etc.).

### 📁 Gerenciamento de Arquivos Profissional
O Jarvis possui um módulo de controle de arquivos completo para:
- Criar, renomear, mover e copiar arquivos ou pastas.
- **Organização Inteligente:** Classifica arquivos automaticamente em pastas (Imagens, Documentos, Vídeos, etc.) com base na extensão.
- Compactar diretórios em arquivos `.zip`.
- Busca profunda de arquivos e abertura automática.

### 🖥️ Controle de Sistema
- **Gestão de Programas:** Abre e fecha aplicativos (Spotify, VS Code, Calculadora, etc.).
- **Ajustes de Hardware:** Controle de volume e brilho da tela.
- **Energia:** Comandos para bloquear, reiniciar ou desligar o PC.

---

## 🛠️ Tecnologias Utilizadas

- **Linguagem:** Python 3.13+
- **IA e Voz:** LiveKit Agents, Google Gemini (Realtime Model).
- **Memória:** Mem0 (Async Memory Client).
- **Automação:** Playwright, PyAutoGUI, PyGetWindow.
- **Interface de Sistema:** Subprocess, OS, Shutil, Pycaw (Áudio).

---

## 📋 Requisitos para Funcionamento

Para rodar o Jarvis, é necessário:
1. **Python instalado** com as dependências listadas em `requirements.txt`.
2. **Variáveis de Ambiente:** Configuração de um arquivo `.env` contendo as chaves de API necessárias (Gemini, Mem0, LiveKit).
3. **Google Chrome:** Preferencialmente configurado para depuração remota se desejar controle avançado de abas.

---

## 👨‍💻 Por que este projeto se destaca?

Este projeto demonstra competências em:
- **Integração de APIs complexas** e modelos de IA generativa.
- **Desenvolvimento de Agentes Autônomos** com capacidade de execução de ferramentas (*Function Calling*).
- **Manipulação de Sistemas Operacionais** e automação de processos de baixo nível.
- **Arquitetura de Software** modular e escalável.

---

*Desenvolvido para ser o braço direito na produtividade digital.*
