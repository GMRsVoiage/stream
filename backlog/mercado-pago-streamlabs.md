# Backlog — integração de doações via Mercado Pago

**Status:** ideia aprovada para backlog; **não implementar agora**. Manter LivePix/fluxo atual até decisão futura.

## Escolha registrada (2026-10-03)

O criador gostou da **opção A: Mercado Pago + Streamlabs**. A proposta é desenvolver uma página de doações com nickname, valor e mensagem, cobrar via Pix usando Mercado Pago e, **somente após confirmação oficial**, disparar por integração autenticada o alerta do Streamlabs já existente (**cheque voador + Clippy**). O sistema deve preservar o overlay atual e permitir uma futura migração para alertas inteiramente próprios.

### Implementação futura proposta (a validar tecnicamente)

1. Página de doações GMRsVoiage: nick, valor, mensagem e dados mínimos exigidos pelo checkout.
2. Backend Cloudflare Worker: criar cobrança Pix pelo Mercado Pago, guardar credenciais como segredos, nunca no frontend.
3. Webhook: validar a assinatura e consultar a API de pagamentos para verificar aprovação antes de liberar evento.
4. D1: registrar a cobrança, status e chave de idempotência; impedir eventos duplicados e tratar pagamento expirado, recusado ou reembolsado.
5. Adaptador Streamlabs: verificar escopos, fluxo OAuth e possibilidade atual da API de gerar alerta de doação personalizado **antes** de começar a implementação.
6. Testes de ponta a ponta de pagamento real de baixo valor, mensagem longa e fallback sem mensagem.

### Condições

- Objetivo: evitar a comissão de intermediação do LivePix; **não assumir taxa zero** no Mercado Pago. Conferir taxas na modalidade de API e na conta antes de decidir.
- Evitar exibir dados pessoais de pagamento no OBS; somente nick, valor e mensagem explicitamente enviados para a live.
- Mitigar abuso de mensagens/valores e proteger credenciais.
- Não substituir, alterar ou quebrar os widgets aprovados atualmente.
- Este documento registra uma **decisão de backlog**, não uma funcionalidade implementada.
