#  Projeto de Redes – Monitoramento do Desempenho Acadêmico de Estudantes

##  Descrição do Projeto

Este projeto foi desenvolvido utilizando o Cisco Packet Tracer com o objetivo de simular a infraestrutura de rede de uma instituição de ensino. A proposta visa permitir o monitoramento do desempenho acadêmico dos estudantes por meio de uma rede estruturada, segmentada e segura.

A rede conecta setores administrativos, professores, laboratório de informática, alunos e servidores responsáveis pelo armazenamento e gerenciamento das informações acadêmicas.

---

#  Objetivos

* Implementar uma rede escolar funcional.
* Permitir a comunicação entre diferentes setores da instituição.
* Utilizar VLANs para segmentação da rede.
* Implementar roteamento entre VLANs.
* Disponibilizar serviços de DNS e servidor acadêmico.
* Fornecer acesso cabeado e sem fio aos usuários.
* Simular um ambiente real de rede corporativa educacional.

---

#  Estrutura da Rede

A topologia é composta pelos seguintes dispositivos:

## Equipamentos de Rede

* 1 Roteador Cisco 1941
* 2 Switches Cisco 2960
* 1 Access Point Wireless

## Servidores

* Server0 – Sistema Acadêmico
* Server1 – Servidor DNS

## Setores Conectados

### Administração

Responsável pela gestão administrativa da instituição.

### Coordenação

Responsável pelo acompanhamento acadêmico dos alunos.

### Professores

Acesso ao sistema acadêmico para lançamento de notas e acompanhamento do desempenho dos estudantes.

### Laboratório

Ambiente utilizado pelos alunos para acesso aos recursos acadêmicos.

### Alunos

Conectados via notebooks utilizando rede Wi-Fi.

---

#  Endereçamento IP

## VLAN 10 – Administração

| Rede            | Gateway      |
| --------------- | ------------ |
| 192.168.10.0/24 | 192.168.10.1 |

---

## VLAN 20 – Alunos e Laboratório

| Rede            | Gateway      |
| --------------- | ------------ |
| 192.168.20.0/24 | 192.168.20.1 |

---

## VLAN 30 – Servidores

| Rede            | Gateway      |
| --------------- | ------------ |
| 192.168.30.0/24 | 192.168.30.1 |

---

#  Configuração de VLANs

Foram criadas três VLANs para segmentação lógica da rede:

| VLAN | Nome          |
| ---- | ------------- |
| 10   | ADMINISTRACAO |
| 20   | ALUNOS        |
| 30   | SERVIDORES    |

A utilização de VLANs permite:

* Maior organização da rede.
* Melhor desempenho.
* Redução de broadcasts.
* Maior segurança dos dados.

---

#  Roteamento Inter-VLAN

Foi utilizada a técnica Router-on-a-Stick através do Router3.

## Subinterfaces configuradas

| Interface | Endereço     |
| --------- | ------------ |
| Gi0/0.10  | 192.168.10.1 |
| Gi0/0.20  | 192.168.20.1 |
| Gi0/0.30  | 192.168.30.1 |

Essas subinterfaces permitem a comunicação entre dispositivos localizados em VLANs diferentes.

---

#  Serviços Implementados

## Servidor Acadêmico

Responsável pelo armazenamento e gerenciamento das informações acadêmicas dos estudantes.

Funções:

* Cadastro de alunos.
* Registro de notas.
* Registro de avaliações.
* Controle de disciplinas.
* Monitoramento do desempenho acadêmico.

---

## Servidor DNS

Responsável pela resolução de nomes da rede.

Funções:

* Conversão de nomes em endereços IP.
* Facilitar o acesso aos serviços da instituição.
* Melhor organização da infraestrutura.

---

#  Rede Wireless

## Access Point

Configuração:

* SSID: SenaiSantaRosalia
* Segurança: WPA2

Dispositivos conectados:

* Laptop0
* Laptop1

A rede sem fio permite mobilidade aos usuários e acesso aos serviços acadêmicos.

---

#  Segurança Implementada

* Segmentação por VLANs.
* Utilização de WPA2 na rede sem fio.
* Controle de acesso por meio da divisão lógica da rede.
* Isolamento dos servidores em VLAN específica.

---

#  Testes Realizados

Durante a implementação foram realizados os seguintes testes:

### Teste de conectividade local

* Ping entre dispositivos da mesma VLAN.

Resultado: Sucesso.

### Teste de roteamento

* Ping entre VLAN 10 e VLAN 20.

Resultado: Sucesso.

### Teste de acesso aos servidores

* Ping para o Servidor DNS.
* Ping para o Servidor Acadêmico.

Resultado: Sucesso.

### Teste de comunicação geral

* Comunicação entre Administração.
* Comunicação entre Professores.
* Comunicação entre Laboratório.
* Comunicação com Servidores.

Resultado: Sucesso.

---

#  Benefícios da Solução

* Organização da infraestrutura.
* Facilidade de gerenciamento.
* Escalabilidade.
* Melhor desempenho da rede.
* Maior segurança.
* Suporte ao monitoramento acadêmico dos estudantes.

---

#  Ferramentas Utilizadas

* Cisco Packet Tracer
* VLAN
* Trunking
* Router-on-a-Stick
* DNS
* Wireless LAN
* Endereçamento IPv4

---

#  Autor

Kaiki Santos

Projeto desenvolvido para a disciplina de Redes de Computadores com foco no Monitoramento do Desempenho Acadêmico de Estudantes.
