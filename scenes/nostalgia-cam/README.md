# Nostalgia Cam v1 — cena WEBCAM reutilizável

Moldura CRT discreta no tema Nostalgia.exe, sem animação, efeitos de vídeo ou chamadas externas. Mantém proporção **16:9** para a captura de câmera **1920 × 1080**. O interior do HTML/CSS é transparente: a imagem da câmera **vem exclusivamente da fonte nativa do OBS**.

## Instalação no OBS

Na cena aninhada `WEBCAM`:
1. Adicione sua câmera como **Dispositivo de captura de vídeo**, 1920 × 1080, posição 0,0, sem esticar.
2. Acima dela, adicione **Fonte de navegador** 1920 × 1080 que carregue `camera.html` e `camera.css`. Para uso local, salve **ambos na mesma pasta** e selecione `camera.html` como arquivo local.
3. Se quiser apontar para uma hospedagem, publique ambos juntos por Pages/servidor estático. **A página `github.com/.../blob/...` é visualizador de código do GitHub, não uma página de overlay para o OBS.**
4. Reutilize a cena `WEBCAM` nas outras cenas. Redimensione **a cena aninhada inteira**, não a moldura individual.
5. Se a fonte de câmera já tem seu próprio enquadramento/transformação no OBS, preserve-o; alinhe a nova fonte de navegador ao mesmo canvas 1920 × 1080.

### Área visível

Por padrão a moldura usa a **área externa do mesmo canvas**; uma pequena faixa de pixels da câmera fica coberta nas quatro bordas, pela titlebar de **39px** e pelo rodapé de **48px**. O feed original permanece 1920 × 1080, sem filtros, recorte obrigatório ou distorção. Se quiser deixar o vídeo totalmente fora dessas bandas, ajuste o enquadramento da fonte de webcam internamente no OBS — opcional.

### Organização

```text
WEBCAM (1920×1080)
├── Fonte de navegador: Nostalgia Cam (camera.html) [TOPO]
└── Dispositivo de captura: webcam 1920×1080 [ABAIXO]
```

A moldura da câmera anterior já foi retirada de `scenes/nostalgia-desktop-world/overlay.html`. Alertas, chat e gameplay não foram alterados.

Arquivos: `camera.html`, `camera.css` e esta documentação.
