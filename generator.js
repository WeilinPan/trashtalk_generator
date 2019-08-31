function choose(array) {
  const choice = Math.floor(Math.random() * array.length)
  return array[choice]
}


function generator(career) {
  const task = {
    engineer: ['加個按鈕', '加新功能', '切個版', '改一點 code'],
    designer: ['畫一張圖', '改個 logo', '順便幫忙設計一下', '隨便換個設計'],
    entrepreneur: ['週末加班', '要能賺錢', '想個 business model', '找 VC 募錢']
  }
  const careers = { engineer: '工程師', designer: '設計師', entrepreneur: '創業家' }
  const phrase = ['很簡單', '很容易', '很快', '很正常']

  let sentence = ''

  if (career === undefined) {
    sentence = "不是要說幹話嗎？"
  } else {
    const randomPhrase = choose(phrase)
    const randomTask = choose(task[career])
    sentence = `身為一個${careers[career]}，${randomTask}，${randomPhrase}吧!`
  }

  return sentence
}

module.exports = generator