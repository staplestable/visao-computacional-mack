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
