/**
 * Função para exibir os filtros.
 */
function showFilters() {
  const contaneirFilter = document.getElementById('container-filter')

  if (contaneirFilter.style.display === 'none')
    return contaneirFilter.style.display = 'block'

  contaneirFilter.style.display = 'none'
}

function generatePassword() {
  /**
   *  Letras.
   */ 
  const letters = "abcdefghijklmnopqrstuvwxyz"

  /**
   *  Caracteres especiais.
   */ 
  const specialsCharacter = "!@#$%&*-+/|\.,"

  /**
   *  Números.
   */ 
  const numbers = "0123456789"

  /**
   *  Comprimento da senha gerar-se-á.
   */ 
  const size = +document.getElementById('size-password').value

  /**
   *  Verifica se é pra usar na senha caracteres especiais.
   */ 
  const hasSpecialsCharacter = +document.getElementById('special-character').value

  /**
   *  Verifica se é pra usar na senha letras maiúsculas.
   */ 
  const hasCapitalLetters = +document.getElementById('capital-letters').value

  /**
   *  Verifica se é pra usar letras na senha.
   */ 
  const hasLetters = 1

  /**
   *  Verifica se é pra usar numero na senha.
   */ 
  const hasNumber = +document.getElementById('number').value

  /**
   *  Somatória de cada opção de conteudo para senha.
   */ 
  const sumOptionsToGeneratePassword =
    hasSpecialsCharacter + hasCapitalLetters + hasLetters + hasNumber

  /**
   *  Calculo para saber quantos de cada opção irá conter na senha.
   */ 
  const sizeToGenerateEachOption = Math.ceil(size / sumOptionsToGeneratePassword)

  const password = new Array(sizeToGenerateEachOption).fill("").map(_ => {
    /**
     *  Randomiza as letras.
     */ 
    const randomLetter = hasLetters === 1
      ? letters[Math.floor(Math.random() * letters.length)]
      : ""

    /**
     *  Randomiza os numeros.
     */ 
    const randomNumber = hasNumber == 1
      ? numbers[Math.floor(Math.random() * numbers.length)]
      : ""

    /**
     *  Randomiza os caracteres especiais.
     */ 
    const randomSpecialsCharacter = hasSpecialsCharacter == 1
      ? specialsCharacter[Math.floor(Math.random() * specialsCharacter.length)]
      : ""

    /**
     *  Randozima as letras maiusculas.
     */ 
    const randomCapitalLetters = hasCapitalLetters == 1
      ? letters[Math.floor(Math.random() * letters.length)].toUpperCase()
      : ""

    return randomLetter + randomNumber + randomSpecialsCharacter + randomCapitalLetters
  })

  /**
   *  Valida se a senha randomizada é maior que o valor definido se for maior ele faz um substring até o valor do tamanho definido.
   */ 
  const validateSizePassword = password.join('').length > size ? password.join('').substring(0, size) : password.sort(() => Math.floor(Math.random() * password.length)).join('')

  const normalizedPassword = validateSizePassword

  return document.getElementById('input-password').value = normalizedPassword
}
