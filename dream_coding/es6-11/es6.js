/* 
    Shorthand property names
    key와 변수의 이름이 동일한 경우 
*/
{
  const phone1 = {
    name: 'iphone',
    memory: '64',
  }
  const name = 'galaxy'
  const memory = 128

  const phone2 = {
    name,
    memory,
  }
  console.log(phone1)
  console.log(phone2)
}

/* 
Destructuring Assignment
*/
{
  const language = {
    category: 'python',
    level: 3,
  }
  {
    const category = language.category
    const level = language.level
    console.log(category, level)
  }
  {
    const { category, level } = language
    console.log(category, level)
  }
}

// const [first, second] =s animals
