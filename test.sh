#!/bin/sh

# UTILITÁRIO DE TESTES
# test.sh mount
#   instala dependências de teste.
#   move arquivos de configuração para posições.
# test.sh umount
#   des instala dependências de teste.
#   retira arquivos de configuração para dentro de ./test-conf/

Montar()
{
  echo "MONTANDO ESTRUTURA DE TESTES ...";
  npm install --verbose @babel/preset-env @babel/preset-typescript @testing-library/react-native @types/enzyme @types/jest @types/mocha babel-jest ts-jest @babel/core jest jest-expo react-test-renderer;
  if [[ -f "./__tests__/jest.config.js" && -f "./__tests__/babel.config.js" ]]; then
    mv ./__tests__/{babel.config.js,jest.config.js} . ;
  else
    echo "COMANDO QUEBRADO: arquivos de configuração estão fora de __tests__";
  fi
}

Desmontar()
{
  echo "DESMONTANDO ESTRUTURA DE TESTES ...";
  npm uninstall --verbose @babel/preset-env @babel/preset-typescript @testing-library/react-native @types/enzyme @types/jest @types/mocha babel-jest ts-jest @babel/core jest jest-expo react-test-renderer;
  if [[ -f "./jest.config.js" && -f "./babel.config.js" ]]; then
    mv babel.config.js jest.config.js __tests__/;
  else
    echo "COMANDO QUEBROU: arquivos de configuração estão dentro de __tests__";
  fi
}

if [ $1 == "mount" ]; then
  Montar;
elif [ $1 == "umount" ]; then
  Desmontar;
else
  echo -e "AJUDA:\nmount - montar estrutura de testes\numount - desmontar estrutura de testes\n";
fi

