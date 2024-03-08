## Desafios Opcionais
Para executar o código é necessário ter instalado na máquina o MinGW, que contém os compiladores e debuggers para C e C++.
Para a instalação, siga o tutorial a seguir: https://www.freecodecamp.org/news/how-to-install-c-and-cpp-compiler-on-windows/

Para compilar, é necessário executar o seguinte comando em \atividade3\build:
```
gcc ../main.c ../src/glad.c -o imgv -I ../include -L ..\lib\ -lmingw32 -lglfw3dll
```

Após isso execute o programa usando o comando:

```
.\imgv ../raposa.png
```
### Demonstração
Screenshot da imagem "raposa.png" sendo lida e então exibida pelo programa. Os dados extraídos da imagem no formato PNG ficam armazenados em um arquivo texto "image_data.txt".

![image](https://github.com/staplestable/visao-computacional-mack/assets/88636387/ada34790-575d-4fb4-930d-e7a7b2356f1a)

Para mais informações sobre a atividade 3, acesse a [wiki](https://github.com/staplestable/visao-computacional-mack/wiki/Atividade-3-(Formatos-de-Imagem)) da entrega.

